---
title: regular expressions in haskell
date: 2017-01-30
---

# Regular expressions in Haskell

If you are writing a piece of software which needs to process text, [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) are a useful tool. There are many mature regex libraries in the wild, but I thought it would be a fun exercise to implement some basic regex functionality in Haskell. 

### Setting up the workspace

Before we write any code, we need to set up a workspace. We shall use the [stack build system](https://docs.haskellstack.org/en/stable/README/). First open a shell and run
```{.bash}
stack new hs-regex protolude
cd ./hs-regex
```
[Protolude](https://github.com/sdiehl/protolude) is a minimal Haskell prelude which I like using. We are going to be using the [vector](https://hackage.haskell.org/package/vector) and [text](https://hackage.haskell.org/package/text) libraries, so in `hs-regex.cabal`, edit the `library` section so it looks like

```{.algorithm}
library
  hs-source-dirs:      src
  ghc-options:         -Wall
  exposed-modules:     Lib
                     , Regex
  other-modules:       Lib.Prelude
  build-depends:       base >= 4.7 && < 5
                     , protolude >= 0.1.6 && < 0.2
                     , vector >= 0.1
                     , text >= 1.2
  default-language:    Haskell2010
  default-extensions:  OverloadedStrings, NoImplicitPrelude, OverloadedLists
```
Now we are ready to start writing `./src/Regex.hs`.

### the Code

First we need to declare the module and import some libraries.
```{.haskell}
module Regex where

import Lib.Prelude
import qualified Data.Vector as V
import qualified Data.Text as T
```
Importing `Lib.Prelude` brings protolude into the module namespace. Now lets define the syntax tree for our regular expressions:
```{.haskell}
data Regex = Empty                -- matches empty string
           | Atom Char            -- matches a single character
           | Not Char             -- matches any other character
           | Union Regex Regex    -- matches first regex OR second regex
           | Concat Regex Regex   -- matches first regex THEN second regex
           | Kleene Regex         -- matches zero or more occurrences of regex
```
In order to keep things short, we are sticking to a pretty small set of regular expression constructors. Now that we have specified our regular expressions, we need to decide what we want to do with them. Often, regular expressions are used for searching, but that is a lot to tackle at once. Instead, let\'s use our regular expressions to split of a matching sequence of characters from the start of the character stream. If there is no match, we need to return an error:
```{.haskell}
data RegexError = UnexpectedCharacter Char
                | StreamEmpty
                deriving Show
```
We want to define a function
```{.haskell}
useRegex :: Regex -> Text -> (Either RegexError (V.Vector Char),Text)
```
This is exactly what the state monad is designed for. We can fill in the definition for `useRegex` as follows:
```{.haskell}
type RegexMachine m = StateT Text m

runRegexMachine :: RegexMachine m a -> Text -> m (a, Text)
runRegexMachine = runStateT

runRegexMachineIdentity :: RegexMachine Identity a -> Text -> (a, Text)
runRegexMachineIdentity machine text = runIdentity $ runRegexMachine machine text

useRegex :: Regex -> Text -> (Either RegexError (V.Vector Char),Text)
useRegex regex = runRegexMachineIdentity $ buildRegexMachine regex

useRegexIO :: Regex -> Text -> IO (Either RegexError (V.Vector Char),Text)
useRegexIO regex = runRegexMachine $ buildRegexMachine regex

buildRegexMachine :: (Monad m) => Regex -> RegexMachine m (Either RegexError (V.Vector Char))
```
We define `RegexMachine` using the `StateT` monad transformer because then we can also construct `useRegexIO` which lets us use our regular expressions on values with type `IO Text`. Now we need to fill in the definition for `buildRegexMachine`. First we have the `Empty` constructor:
```{.haskell}
buildRegexMachine Empty = return $ Right []
```
The `Empty` regex matches the empty string, so we return nothing and consume no characters.
```{.haskell}
buildRegexMachine (Atom x) = do s <- get
                                let split = T.uncons s
                                case split of
                                  Just (c,rest) -> if c == x then (put rest) >> (return $ Right [c])
                                                             else return $ Left $ UnexpectedCharacter c
                                  Nothing       -> return $ Left StreamEmpty
```
The `Atom x` regex matches a single character, so we get the character stream and pull of the head. If it matches, we consume the character from the stream and return the head. Otherwise we return an `UnexpectedCharacter` error. The other case occurs when the stream is empty. In that case, we return a `StreamEmpty` error.
```{.haskell}
buildRegexMachine (Not x) = do s <- get
                               let split = T.uncons s
                               case split of
                                 Just (c,rest) -> if c == x then return $ Left $ UnexpectedCharacter c
                                                            else (put rest) >> (return $ Right [c])
                                 Nothing -> return $ Left StreamEmpty

```
The `Not x` regex is very similar to the `Atom x` regex.
```{.haskell}
buildRegexMachine (Union regex1 regex2) = do backup  <- get
                                             output1 <- machine1
                                             case output1 of
                                               Left _  -> do put backup
                                                             output2 <- machine2
                                                             case output2 of
                                                               Left e  -> (put backup) >> (return $ Left e)
                                                               Right v -> return $ Right v
                                               Right w -> return $ Right w
  where machine1 = buildRegexMachine regex1
        machine2 = buildRegexMachine regex2

```
The code the `Union regex1 regex2` regex is a little more complicated. We try the first regex. If it fails, we need to roll back the stream and try the second.
```{.haskell}
buildRegexMachine ( Concat regex1 regex2) = do backup <- get
                                               output1 <- machine1
                                               case output1 of
                                                 Left e  -> (put backup) >> (return $ Left e)
                                                 Right v -> do output2 <- machine2
                                                               case output2 of
                                                                 Left f -> (put backup) >> (return $ Left f)
                                                                 Right w -> return $ Right (v V.++ w)
  where machine1 = buildRegexMachine regex1
        machine2 = buildRegexMachine regex2

```
For `Concat regex1 regex2`, we try and match both regexes in order. If at any point we fail, we need to revert the stream and return the error.
```{.haskell}
buildRegexMachine (Kleene regex) = Right <$> (buildKleeneMachine machine)
  where machine = buildRegexMachine regex

-- a kleene machine can't fail
buildKleeneMachine :: (Monad m) => RegexMachine m (Either RegexError (V.Vector Char)) -> RegexMachine m (V.Vector Char)
buildKleeneMachine machine = do output <- machine
                                case output of
                                  Left _  -> return []
                                  Right v -> do vs <- buildKleeneMachine machine
                                                return (v V.++ vs)
```
Since `Kleene regex` can\'t fail, we deviate slightly from the above pattern. That completes the definition of `buildRegexMachine`. We can also make `Regex` an instance of some type classes so we can use some generic functions:
```{.haskell}
instance Monoid Regex where
  mempty = Empty
  mappend = Concat

instance Semiring Regex where
  one = undefined -- not sure what should go here.
  (<.>) = Union
```
Now lets look at some examples:
```{.haskell}
wordRegex :: [Char] -> Regex
wordRegex w = mconcat (Atom <$> w :: [Regex])

red = wordRegex "red"
blue = wordRegex "blue"
redblue = red `mappend` blue
```
In the REPL we have
```{.haskell}
> useRegex redblue "redbluered"
(Right "redblue","red")
> useRegex redblue "0redbluered"
(Left (UnexpectedCharacter '0'),"0redbluered")
> useRegex (Kleene redblue) "redbluered"
(Right "redblue","red")
> useRegex (Kleene redblue) "0redbluered"
(Right "","0redbluered")
```

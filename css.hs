{-# LANGUAGE OverloadedStrings #-}

import Clay
import Prelude hiding (div)

bodyStyle :: Css
bodyStyle = body ? do
  fontFamily  ["Helvetica Neue"] [sansSerif]
  lineHeight  (px 18)
  padding     (px 20) (px 20) (px 20) (px 20)

linkStyle :: Css
linkStyle = a ? do
  textDecoration  none

codeStyle :: Css
codeStyle = code ?
  do fontFamily  ["Monaco", "Inconsolata"] [monospace]
     fontSize    (px 14)
     lineHeight  (px 18)


container :: Selector
container = div # ".code"

containerStyle :: Css
containerStyle = container ?
  do width (px 800)
     borderColor gray

main :: IO ()
main = putCss $ do
  bodyStyle
  linkStyle
  codeStyle
  containerStyle

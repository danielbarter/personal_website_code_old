{-# LANGUAGE OverloadedStrings #-}

import Hakyll

main :: IO ()
main = hakyll $ do
    match "markdown/home.md" $ do
        route idRoute
        compile copyFileCompiler


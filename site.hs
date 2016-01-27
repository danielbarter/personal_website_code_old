{-# LANGUAGE OverloadedStrings #-}

import Hakyll

main :: IO ()
main = hakyll $ do
    match "data/index.html" $ do
        route idRoute

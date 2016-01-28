{-# LANGUAGE OverloadedStrings #-}

import Hakyll

main :: IO ()
main = hakyll $ do


  match "style.css" $ do
    route idRoute
    compile compressCssCompiler

  match "html_templates/*" $ compile templateCompiler

-- build index.html from markdown/home.md
  match "danielbarter.md" $ do
    route   $ constRoute "index.html"
    compile $ pandocCompiler 
        >>= loadAndApplyTemplate "html_templates/default.html" defaultContext

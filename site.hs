{-# LANGUAGE OverloadedStrings #-}

import Hakyll
import Data.Monoid ((<>))
import Data.Set (insert)
import Text.Pandoc.Options

main = buildSite

buildSite :: IO ()
buildSite =  hakyll $ do


  match "style.css" $ do
    route idRoute
    compile compressCssCompiler

-- no route because we don't want to store the templates in _site
  match "html_templates/*" $ compile templateCompiler

  match "home.md" $ do
    route   $ constRoute "index.html"
    compile $
        pandocCompiler
        >>= loadAndApplyTemplate "html_templates/nav_bar.html" defaultContext
        >>= loadAndApplyTemplate "html_templates/default.html" defaultContext
        >>= relativizeUrls

  match "publickey.md" $ do
    route   $ setExtension "html"
    compile $
      pandocCompiler
      >>= loadAndApplyTemplate "html_templates/nav_bar.html" defaultContext
      >>= loadAndApplyTemplate "html_templates/default.html" defaultContext
      >>= relativizeUrls

  match "img/*" $ do
    route $ idRoute
    compile copyFileCompiler

  match "mix.js" $ do
    route $ idRoute
    compile copyFileCompiler

  match "tableau.js" $ do
    route $ idRoute
    compile copyFileCompiler


  match "thesis.pdf" $ do
    route $ idRoute
    compile copyFileCompiler

  match "mix.md" $ do
    route $ setExtension "html"
    compile $
        pandocCompiler
        >>= loadAndApplyTemplate "html_templates/nav_bar.html" defaultContext
        >>= loadAndApplyTemplate "html_templates/mix_temp.html" defaultContext
        >>= relativizeUrls

  match "tableau.md" $ do
    route $ setExtension "html"
    compile $
        pandocCompiler
        >>= loadAndApplyTemplate "html_templates/nav_bar.html" defaultContext
        >>= loadAndApplyTemplate "html_templates/tableau_temp.html" defaultContext
        >>= relativizeUrls

  match "CV.md" $ do
    route $ setExtension "html"
    compile $
        pandocMathCompiler
        >>= loadAndApplyTemplate "html_templates/nav_bar.html" defaultContext
        >>= loadAndApplyTemplate "html_templates/default.html" defaultContext
        >>= relativizeUrls

  match "posts/*/*" $ do
    route $ setExtension "html"
    compile $
          pandocMathCompiler
          >>= loadAndApplyTemplate "html_templates/nav_bar.html" defaultContext
          >>= loadAndApplyTemplate "html_templates/default.html" defaultContext
          >>= relativizeUrls

  match "CALGO/*/*.c" $ do
    route $ idRoute
    compile copyFileCompiler

  match "CALGO/*/*.asm" $ do
    route $ idRoute
    compile copyFileCompiler

  match "blog.md" $ do
    route $ setExtension "html"
    compile $ do
      posts <- loadAll "posts/*/*"
      postsOrdered  <- recentFirst posts
      -- this relies on posts being titled YYYY-MM-DD-title.extension
      -- also, need a date field at the top of each blog post for the blog.html template
      let blogContext =
              listField "posts" defaultContext (return postsOrdered)
           <> defaultContext
      pandocCompiler
        >>= loadAndApplyTemplate "html_templates/blog.html" blogContext
        >>= loadAndApplyTemplate "html_templates/nav_bar.html" defaultContext
        >>= loadAndApplyTemplate "html_templates/default.html" defaultContext
        >>= relativizeUrls


-----------------------------------------------------------------------------------------------------
----------------------------------------pandocMathCompiler-------------------------------------------
-----------------------------------------------------------------------------------------------------
------------------------------------http://travis.athougies.net/-------------------------------------
-----------------------------------------------------------------------------------------------------


pandocMathCompiler =
    let mathExtensions = [Ext_tex_math_dollars, Ext_tex_math_double_backslash,
                          Ext_latex_macros]
        defaultExtensions = writerExtensions defaultHakyllWriterOptions
        newExtensions = foldr insert defaultExtensions mathExtensions
        writerOptions = defaultHakyllWriterOptions {
                          writerExtensions = newExtensions,
                          writerHTMLMathMethod = MathJax ""
                        }
    in pandocCompilerWith defaultHakyllReaderOptions writerOptions

{-# LANGUAGE OverloadedStrings #-}

import Text.Pandoc.Options
import Text.Pandoc.Readers.Markdown
import Text.Pandoc.Writers.LaTeX

main = latexCV

latexCV = do mdCV <- readFile "CV.md"
             let eitherPandocCV = readMarkdown readerOptions mdCV
             return eitherPandocCV
             case eitherPandocCV of (Right pandocCV) -> writeFile "texCV/CV.tex" $ writeLaTeX writerOptions pandocCV
  where readerOptions = def
        writerOptions = def

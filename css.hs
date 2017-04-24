{-# LANGUAGE OverloadedStrings #-}

import Clay
import Prelude hiding (div, span)

bodyStyle :: Css
bodyStyle = body ? do
  fontFamily  ["Helvetica Neue","Helvetica","Arial"] [sansSerif]
  fontSize    (px 20)
  lineHeight  (px 28)
  padding     (px 28) (px 28) (px 28) (px 28)

linkStyle :: Css
linkStyle = a ? do
  textDecoration  none

codeStyle :: Css
codeStyle = code ?
  do fontFamily  ["Monaco", "Inconsolata"] [monospace]
     fontSize    (px 20)
     lineHeight  (px 28)

imgStyle :: Css
imgStyle = img ? do
  borderRadius (px 8) (px 8) (px 8) (px 8)

softStyle :: Css
softStyle = ".soft" ? do
  fontStyle italic
  fontSize (px 13)

codeContainer :: Selector
codeContainer = div # ".sourceCode"

algorithmContainer :: Selector
algorithmContainer = pre # ".algorithm"

equationContainer :: Selector
equationContainer = div # ".MathJax_Display"

figureContainer :: Selector
figureContainer = div # ".figure"

algorithmContainerStyle :: Css
algorithmContainerStyle = algorithmContainer ?
  do border solid (px 1) "#C3C3C3"
     borderRadius (px 5) (px 5) (px 5) (px 5)
     paddingLeft (px 5)
     overflowX auto

codeContainerStyle :: Css
codeContainerStyle = codeContainer ?
  do border solid (px 1) "#C3C3C3"
     borderRadius (px 5) (px 5) (px 5) (px 5)
     paddingLeft (px 5)
     overflowX auto

equationContainerStyle :: Css
equationContainerStyle = equationContainer ?
  do overflowX auto
     overflowY hidden

figureContainerStyle :: Css
figureContainerStyle = figureContainer ?
  do overflowX auto
     overflowY hidden

-- please don't judge me. There must be a better way to do this
codeHighlight :: Css
codeHighlight = do
  code |> span # ".kw" ? do color "#007020"
                            fontWeight bold
  code |> span # ".dt" ? do color "#902000"
  code |> span # ".dv" ? do color "#40a070"
  code |> span # ".bn" ? do color "#40a070"
  code |> span # ".fl" ? do color "#40a070" 
  code |> span # ".ch" ? do color "#4070a0"
  code |> span # ".st" ? do color "#4070a0"
  code |> span # ".co" ? do color "#60a0b0" 
                            fontStyle italic
  code |> span # ".ot" ? do color "#007020"
  code |> span # ".al" ? do color "#ff0000" 
                            fontWeight bold
  code |> span # ".fu" ? do color "#06287e"
  code |> span # ".er" ? do color "#ff0000" 
                            fontWeight bold
  code |> span # ".wa" ? do color "#60a0b0" 
                            fontWeight bold
                            fontStyle italic
  code |> span # ".cn" ? do color "#880000"
  code |> span # ".sc" ? do color "#4070a0"
  code |> span # ".vs" ? do color "#4070a0"
  code |> span # ".ss" ? do color "#bb6688"
--  code |> span # ".im" ? do
  code |> span # ".va" ? do color "#19177c"
  code |> span # ".cf" ? do color "#007020" 
                            fontWeight bold
  code |> span # ".op" ? do color "#666666"
--  code |> span # ".bu" ? do
--  code |> span # ".ex" ? do
  code |> span # ".pp" ? do color "#bc7a00"
  code |> span # ".at" ? do color "#7d9029"
  code |> span # ".do" ? do color "#ba2121" 
                            fontStyle italic
  code |> span # ".an" ? do color "#60a0b0" 
                            fontWeight bold 
                            fontStyle italic
  code |> span # ".cv" ? do color "#60a0b0" 
                            fontWeight bold 
                            fontStyle italic
  code |> span # ".in" ? do color "#60a0b0" 
                            fontWeight bold 
                            fontStyle italic
  



main :: IO ()
main = putCss $ do
  bodyStyle
  linkStyle
  codeStyle
  codeContainerStyle
  algorithmContainerStyle
  equationContainerStyle
  figureContainerStyle
  codeHighlight
  softStyle
  imgStyle

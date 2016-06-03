module Main where

import Parse

import qualified Text.PrettyPrint.HughesPJ as P

printLabelMatrixPair :: (Integer,[[Integer]]) -> P.Doc
printLabelMatrixPair (l,m) = 
  (P.integer l) P.<> P.comma P.<> (foldr1 (\x y -> x P.<> P.comma P.<> y) $ P.integer <$> concat m)

trainCSV =  fmap P.vcat $ (fmap . fmap) printLabelMatrixPair train
testCSV = fmap P.vcat $ (fmap . fmap) printLabelMatrixPair test

trainDataPath = "/home/danielbarter/Documents/git_repos/personal_website_code/blog_notebooks/Niave_Bayes_classification_MNIST/.cleaned_data_train_Data.csv"
testDataPath = "/home/danielbarter/Documents/git_repos/personal_website_code/blog_notebooks/Niave_Bayes_classification_MNIST/.cleaned_data_test_Data.csv"

main :: IO ()
main = do trainCSVstring <- P.render <$> trainCSV
          writeFile trainDataPath trainCSVstring
          testCSVstring <- P.render <$> testCSV
          writeFile testDataPath testCSVstring

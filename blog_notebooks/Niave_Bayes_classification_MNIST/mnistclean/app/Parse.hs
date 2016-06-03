{-# LANGUAGE OverloadedStrings #-}

module Parse where

import DataPath

import qualified Data.ByteString as B
import qualified Data.Attoparsec.ByteString as P

--parsing byte file

read32BitInt :: (Num a) => B.ByteString -> a
read32BitInt b = fromInteger $ sum $ fmap (uncurry (*)) $ zip [2^24,2^16,2^8,1] $ toInteger <$> ub
  where ub = B.unpack b 

parse32BitInt = read32BitInt <$> (P.take 4)

parseLabels = do magicNumber   <- parse32BitInt
                 numberOfItems <- parse32BitInt
                 labels <- B.unpack <$> (P.take numberOfItems)
                 return ((magicNumber,numberOfItems),labels)

parseRow numberOfCols = B.unpack <$> (P.take numberOfCols)

parseImage numberOfRows numberOfCols = sequence $ take numberOfRows $ repeat $ parseRow numberOfCols 

parseImages = do magicNumber    <- parse32BitInt
                 numberOfImages <- parse32BitInt
                 numberOfRows   <- parse32BitInt
                 numberOfCols   <- parse32BitInt
                 images <- P.many1 $ parseImage numberOfRows numberOfCols
                 return ((magicNumber,numberOfImages,numberOfRows,numberOfCols),images)


killEither :: Either a b -> b
killEither (Left x) = undefined 
killEither (Right x) = x


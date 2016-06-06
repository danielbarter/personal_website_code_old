{-# LANGUAGE OverloadedStrings #-}

module Parse ( train,
               test
             ) where

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
                 labels' <- B.unpack <$> (P.take numberOfItems)
                 let labels = toInteger <$> labels'
                 return ((magicNumber,numberOfItems),labels)

parseRow numberOfCols = B.unpack <$> (P.take numberOfCols)

parseImage numberOfRows numberOfCols = sequence $ take numberOfRows $ repeat $ parseRow numberOfCols 

parseImages = do magicNumber    <- parse32BitInt
                 numberOfImages <- parse32BitInt
                 numberOfRows   <- parse32BitInt
                 numberOfCols   <- parse32BitInt
                 images' <- P.many1 $ parseImage numberOfRows numberOfCols
                 let images = (fmap . fmap . fmap) toInteger images'
                 return ((magicNumber,numberOfImages,numberOfRows,numberOfCols),images)


killEither :: Either a b -> b
killEither (Left x) = undefined 
killEither (Right x) = x


train' :: IO [(Integer,[[Integer]])]
train' = do labels' <- (P.parseOnly parseLabels) <$> (B.readFile trainLabelPath)
            let labels = snd $ killEither labels'
            images' <- (P.parseOnly parseImages) <$> (B.readFile trainImagePath)
            let images = snd $ killEither images'
            return $ zip labels images

test' :: IO [(Integer,[[Integer]])]
test' = do labels' <- (P.parseOnly parseLabels) <$> (B.readFile testLabelPath)
           let labels = snd $ killEither labels'
           images' <- (P.parseOnly parseImages) <$> (B.readFile testImagePath)
           let images = snd $ killEither images'
           return $ zip labels images

-- pixels above 100 go to 1
-- pixels below 100 go to 0
threshhold = 127
f x = if x < threshhold then 0 else 1
removeGreyScale (x,y) = (x, (fmap . fmap) f y)

train = (fmap . fmap) removeGreyScale train'
test  = (fmap . fmap) removeGreyScale test'


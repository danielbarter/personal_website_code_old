module DataPath ( testImagePath,
                  testLabelPath,
                  trainImagePath,
                  trainLabelPath
                ) where


--paths to byte file

pathPrefix = "/home/danielbarter/handwriting_dataset/"


testImagePostfix = "t10k-images-idx3-ubyte"
testLabelPostfix = "t10k-labels-idx1-ubyte"
trainImagePostfix = "train-images-idx3-ubyte"
trainLabelPostfix = "train-labels-idx1-ubyte"

testImagePath  =  pathPrefix ++ testImagePostfix
testLabelPath  =  pathPrefix ++ testLabelPostfix
trainImagePath =  pathPrefix ++ trainImagePostfix
trainLabelPath =  pathPrefix ++ trainLabelPostfix


import string

#figure out how to seperate words and store in an array, b/c that has access to math methods


def AvgLen(str):
    #remove punctuation w/ string.punctuation and translate/maketrans
    #in this method, replace params are required. a delete param is optional. we only want the optional one. the punc list can't be part of the tran table (first two params) because those are 1:1 replacements. you would need an equivalent replacement string of number of spaces
    str = str.translate(str.maketrans('', '', string.punctuation)).split()
    
    print(sum(len(word) for word in str)/len(str))
    return (sum(len(word) for word in str)/len(str))
   

AvgLen("hi. my name, is 'eamonn' !? ")


#math methods w/ loops

numList=[]
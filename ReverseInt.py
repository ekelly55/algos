# given an int, pos or neg, return an int w/ reversed digis

#will first want to turn into a string, then should be able to reverse it easily, then parseInt...is that python or js?

def ReverseInt(num):
    #first turn into string
    outputString = ''
    string = str(abs(num))
    #then iterate thru and slice off each int and add it to output string
    for char in string:
        outputString = outputString + string[len(string)-1]
        
        string = string[:len(string)-1]
    outputInt = int(outputString)
    if(num < 0):
        outputInt = outputInt*-1
    return outputInt
print(ReverseInt(-123))

#much shorter (lines at least) way:

def ReverseInt2(num):
    string = str(abs(num))
    outputInt = string[::-1]
    if(num < 0):
        outputInt = outputInt * -1
    return outputInt

#string[::-1] automatically reverses a string. it's array slicing. means start at begenning, go to end, step by -1

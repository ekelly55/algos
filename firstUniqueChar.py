def firstUChar(str):

    #solution is what i thought. freq counter
    #declare empty dictionary to be freq counter
    counter = {}
    #iterate through string, mapping it to dictionary
    for char in str:
        if(char in counter):
            counter[char] += 1
        else:
            counter[char] = 1
    
    for key in counter:
        if(counter[key] == 1):
            print(str.index(key))
            return str.index(key)
    
    return -1
    
    

firstUChar('appalachia')

#Approach 2  LOOK UP ENUMERATE and collecitons.Counter
import collections

def solution(s):
    # build hash map : character and how often it appears
    count = collections.Counter(s) # <-- gives back a dictionary with words occurrence count 
    print(count)                                      #Counter({'l': 1, 'e': 3, 't': 1, 'c': 1, 'o': 1, 'd': 1})
    # find the index
    for idx, ch in enumerate(s):
        if count[ch] == 1:
            return idx     
    return -1

solution('alphabet')
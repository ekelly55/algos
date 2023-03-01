# Given an array containing None values fill in the None values with most recent 
# non None value in the array 

#just need to iterate and change None vals to arr[i-1]

def FillBlanks(arr):

    print(arr)

    for i in range (0, len(arr)):
        if arr[i] == None:
            arr[i] = arr[i-1] or arr[i+1]
            print(arr)
    
    print(arr)
    return arr

array1 = [None, 1 ,None,2,3,None,None,5,None]

FillBlanks(array1)

#solution doesn't really meet criteria. if the first element is None, there is no most recent. I would ask the question in real life. 
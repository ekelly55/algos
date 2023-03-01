#Given an array nums, write a function to move all zeroes to the end of it while maintaining the relative order of 
#the non-zero elements.

array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]

def moveZeroes(arr):
    print(arr)
    #copy arr w/out zeroes
    nonZeroArr = [i for i in arr if not i == 0]
    # copy w/ zeroes
    zeroArr = [i for i in arr if i == 0]

    #append arrs

    arr = nonZeroArr + zeroArr

    print(arr)
    return arr


#has to iterate two full times. one for loop with two declared empty lists     to push into would be slightly faster, but less elegant

moveZeroes(array2)
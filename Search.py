#linear search is literally just iterating through and finding. it's ON

def LinSearch(lst, key):
    for i in range (len(lst)):
        if lst[i] == key:
            return f'{key} is found at index {i}'

    return f'{key} not in list'

lst = [1, 4, 7, 5, 3, 8]

key = 10

LinSearch(lst, key)

#binary search: divide and conquer? not d and c first have to do is sort it (or a sorted copy) // floor division: returns only int value
#func below only finds single value. and it returns index of sorted list, not original. can make some modifications, particularly for collecting mulitple found keys. can map both lists to an object, then cross reference to get indexes?

def BinSearch(lst, key):
    #first make sorted copy of list
    lst = sorted(list(lst))
  
    print(lst)
    # next declare lower, higher, middle indexes
    lower = 0
    higher = len(lst)-1
    found = False
    # print(middle)
    while lower <= higher and not found:
        #keep going as long as no match found and as long as lower doesn't pass higher...i.e. as long as found is not true. once you change found to true, loop won't run, b/c not found is false
        #define this here once. don't have to keep redefining it
        middle  = (lower + higher)//2
        if key == lst[middle]:
            print(f'key is at index {middle}')
            found = True
            return middle
        elif key < lst[middle]:
            higher = middle-1
            print(f'key is less than middle val. new higher index is {higher}')
        elif key > lst[middle]:
            lower = middle + 1
            print(f'key is less than middle val. new lower index is {lower}')
    if found == False:
        print('key not in list')
        return f'key not in list'

# BinSearch(lst, key)

#bubble sort used to sort list. can do w/ nested loop, but no good

lst = [11, 17, 6, 28, 0]

def BubSort(lst):
    # for iteration in range(len(lst)-1):
        
    #     for i in range(len(lst)-1):
    #         if lst[i] > lst[i+1]:
    #             #python short cut a,b = b,a 
    #             lst[i], lst[i+1] = lst[i+1], lst[i]
    #             print(lst)
    # try w/ two pointer

    print(lst)
    return lst

# BubSort(lst)

# selection sort, ON

def SelSort(lst):
    for i in range(len(lst)):
        print(lst[i:])
        min_val = min(lst[i:])
        #find min val between i and end of list
        min_index = lst.index(min_val)
        print(f'min val is {min_val} at index {min_index}')
        #now swap, moving min value to i
        lst[i], lst[min_index] = lst[min_index], lst[i]
        print(lst)
    
    return lst

SelSort(lst)
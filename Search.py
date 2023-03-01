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

#merge sort: most efficient. needs two functions: one that merges two sorted lists, and one that recursively splits the input in half
# merge two lists
def merge(left, right):
    if len(left) == 0:
        return right
    
    if len(right) == 0:
        return left
    
    result = []

    index_left = index_right = 0

     # Now go through both arrays until all the elements
    # make it into the resultant array
    while len(result) < len(left) + len(right):
        if left[index_left] <= right[index_right]:
            result.append(left[index_left])
            index_left += 1
        else:
            result.append(right[index_right])
            index_right += 1
        
         # If you reach the end of either array, then you can
        # add the remaining elements from the other array to
        # the result and break the loop
        if index_right == len(right):
            result += left[index_left:]
            break

        if index_left == len(left):
            result += right[index_right:]
            break
    
    return result

# now a func that recursively splits in half
def merge_sort(lst):
      # If the input array contains fewer than two elements,
    # then return it as the result of the function
    if len(lst) < 2:
        return lst
    
    midpoint = len(lst) // 2

      # Sort the array by recursively splitting the input
    # into two equal halves, sorting each half and merging them
    # together into the final result
    return merge(
        left=merge_sort(lst[:midpoint]),
        right=merge_sort(lst[midpoint:])
    )
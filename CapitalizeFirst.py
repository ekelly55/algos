
def CapFirst(lst):
    output = []
    def helper(lst):
        if(lst == []):
            return 
        current = (lst[0][0]).upper() + lst[0][1:]
        output.append(current)
        print(current)
        helper(lst[1:])

    helper(lst)
    return output

lst = ['hello', 'my', 'name', 'is', 'eamonn']

# print(CapFirst(lst))

# capfirst pure recursion

def CapFirstPure(lst):
    output = []
    

    current = (lst[0][0]).upper() + lst[0][1:]
    print(current)
    if len(lst) == 1:
        return current
    if len(lst) > 1:
        output = output.append(current) + output.append(CapFirstPure(lst[1:]))
        print(output)
        return output
    
print(CapFirstPure(lst))
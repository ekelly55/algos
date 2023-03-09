def IsMultOfThree(num):
    if num % 3 == 0:
        print(f'{num} is multiple of 3. true')
        return True

def SomeRecursive(lst, func):
    print('running')
    print(f'list[0] is {lst[0]}')

    
    if IsMultOfThree(lst[0]):
        print("match found. true")
        return True

    elif len(lst) == 1:
        print('no match. false')
        return False
    else:
        return SomeRecursive(lst[1:len(lst)], IsMultOfThree(lst[0]))

lst = [2, 7, 5, 4, 2, 13, 4]

print(SomeRecursive(lst, IsMultOfThree))
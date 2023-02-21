# Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
# You must not use any built-in BigInteger library or convert the inputs to integer directly.

#Notes:
#Both num1 and num2 contains only digits 0-9.
#Both num1 and num2 does not contain any leading zero.

def addStrings(num1, num2):
    replacements = [('0', 0), ('1', 1)]
    

    for i, j in replacements:
        if i in num1:
            num1 = num1.replace(i, j)

    print(num1, type(num1))

addStrings('101', '110')

#nice try, but replace only works w strings. solution uses eval() but i need to learn about python expressions or compiled code something or other first. 
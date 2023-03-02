# Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
# You must not use any built-in BigInteger library or convert the inputs to integer directly.

#Notes:
#Both num1 and num2 contains only digits 0-9.
#Both num1 and num2 does not contain any leading zero.

def addStrings(num1, num2):
    
    return eval(num1) + eval(num2)

print(addStrings('101', '110'))

#nice try, but replace only works w strings. solution uses eval() but i need to learn about python expressions or compiled code something or other first. 

# eval signature: eval(expression[, globals[, locals]]) globals and locals are optional. expression is what you want to evaluate

#can also use exec() eval can execute or eval expressions. exec can execute any code...not sure what this means

#expression is any sytax that can be evaluated to output a value. not all code is expressionn. experessions  are statements, but there are non eval state,ments, such as assignments, and conditional statements. Can't eval compound statemnts, i.e. "if x: print(x)". it can't run statements, only expressions

import math
x = '2'
y='3'
print(math.sqrt(eval(x) + eval(y)))
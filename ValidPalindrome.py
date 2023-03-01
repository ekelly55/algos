
# Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
# The string will only contain lowercase characters a-z.

def ValPal(string):

    for i in range(len(string)):
        newString = string[:i] + string[i+1:]
        print(newString)
        revString = newString[::-1]
        print(revString)
        if revString == newString:
            print(True)
            return True
    print(False)   
    return False


ValPal('risetovotessir')
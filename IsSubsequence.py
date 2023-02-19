def Subseq(s, t):
    # make it a two pointer, one pointer on each string, in a while loop, defined by the shorter string length
    match = 0
    #declare pointers. i for s, j for t
    i = 0
    j = 0
    print(f'number of matches is {match} i = {i}, j = {j}')
    # if match = len S, it's true. it can't have more than that for matches
    while(j < len(t)):
        print(f'running')
        # if the chars match, incrememnt match and i and j indexes
        if(s[i] == t[j]):
            print(f'{s[i]} and {t[j]} match, incrementing match, i and j')
            match += 1
            i += 1
            j += 1
            print(f'number of matches is {match} i = {i}, j = {j}')
            #now check if all chars of s have matched
            if(match == len(s)):
                print(f'{s} is a subsequence of {t}. return true')
                return True
            #if not, run again
        else:
            #if not a match, just increment index j and check again
            print(f'{s[i]} and {t[j]} dont match, incrementing j')
            j += 1
            print(f'j = {j}')
    #it will either find a match and return or run out of iterations without a match. if it makes it out of the loop, it's false
    
    print(f'{s} is not a subsequence of {t}. return false')
    return False

print(Subseq("ace", "ahbgdc"))
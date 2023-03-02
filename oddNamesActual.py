import time

start = time.time()

# import cProfile

# from line_profiler import LineProfiler

def odd_name(names):

    #initialize counter object
    odd = {}
    even = {}
    # print(f'odd is {odd}')
    # print(f'even is {even}')
    # index = 0
    #iterate thru names and count occurences
    for name in names:
        # print(f'current name is {name}, current index is {index}')
        if not name in odd:
            if name not in even:
                #add the names  to odd as keys
                # print(f'name not in odd. adding it.')

                odd[name] = 1
            else:
                odd[name] = even[name] + 1 
                del even[name]

            # print(f'name added to odd. odd is now {odd} removing it from even if exists')
                # print(f'even is now {even}')
        
        else:
            #in that case, take the count from odd, because it has to exist there and then increment it, so that the count will be even. 
            # print(f'{name} is not in even. taking name value from odd, then incrementing')
            even[name] = odd[name] + 1
            #and now, set the odd count to zero again
            # print(f'after incrementing, even is now {even}, removing name from odd if exists.')
            del odd[name]
            # print(f'odd is now {odd}')
    
        # index += 1
    # print(odd, even)
    # will still need to technically "iterate" though we now know that there's only one key value pair, so accessing it is O(1)
    for key in odd.keys():
        # print(key)
        return key
    
    


names = ["scott", "rudiger", "scott", "scott", "rudiger", "scott", "pete", "pete", "pete",]
odd_name(names)






end = time.time()



runtime = round(float((end-start)*10**3), 6)
print('O(N) runtime is', runtime, 'ms')

allRunTimes = [0.013113, 0.011921, 0.006914, 0.00596, 0.007153, 0.006914, 0.00596, 0.010014, 0.006914, 0.008821]

avgTime = round(float(sum(allRunTimes)/len(allRunTimes)), 6)
print(f'average runtime for O(N) over 10 tries is {avgTime}')

#this is about 1/1000 of a ms faster, or, more importantly, about 14% faster
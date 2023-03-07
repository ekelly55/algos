import tracemalloc


def odd_name(names: list) -> str:

#initialize counter object
    counter = dict.fromkeys(names, 0)

    # print(f'counter is{counter}')

    #add names to counter

    for name in names:
        counter[name] += 1
        # print(f'counter is{counter}')
    

    #check for odd values

    for k,v in counter.items():

        if not v % 2 == 0:
            # print(k)
            return k


names = ["scott", "rudiger", "scott", "scott", "rudiger", "scott", "pete", "pete", "pete",]

tracemalloc.start()
 
# function call
odd_name(names)

 
# displaying the memory
print(tracemalloc.get_traced_memory())
 
# stopping the library
tracemalloc.stop()

#this is about 16% slower than the other, but takes about 27% less memory than the other
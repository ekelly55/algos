import time

start = time.time()

def odd_name(names: list) -> str:

#initialize counter object
    counter = {}

    # print(f'counter is{counter}')

    #add names to counter

    for name in names:
        if not name in counter:
            counter[name] = 1
        else: 
            counter[name] += 1
        # print(f'counter is{counter}')
    

    #check for odd values

    for k,v in counter.items():

        if not v % 2 == 0:
            # print(k)
            return k


names = ["scott", "rudiger", "scott", "scott", "rudiger", "scott", "pete", "pete", "pete",]
odd_name(names)

end = time.time()

runtime = round(float((end-start)*10**3), 6)
print('O(3N) runtime is', runtime, 'ms')


#runtime O(3N), where each iteration is 1 operation?

#this is identical in best runtime to the one with the dict() method

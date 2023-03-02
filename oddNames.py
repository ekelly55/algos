import time

start = time.time()

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
odd_name(names)

end = time.time()

runtime = round(float((end-start)*10**3), 6)
print('O(3N) runtime is', runtime, 'ms')

allRunTimes = [0.01812, 0.006914, 0.006914, 0.013113, 0.00906, 0.010967, 0.012159, 0.012159, 0.011921, 0.010014]

avgTime = round(float(sum(allRunTimes)/len(allRunTimes)), 6)
print(f'average runtime for O(3N) over 10 tries is {avgTime}')
#runtime O(3N), where each iteration is 1 operation?

#this is about 16% slower

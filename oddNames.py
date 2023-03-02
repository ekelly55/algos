def odd_name(names: list) -> str:

#initialize counter object
    counter = dict.fromkeys(names, 0)

    print(f'counter is{counter}')

    #add names to counter

    for name in names:
        counter[name] += 1
        print(f'counter is{counter}')
    

    #check for odd values

    for k,v in counter.items():

        if not v % 2 == 0:
            print(k)
            return k


names = ["scott", "andrew", "andrew", "rudiger", "scott", "andrew", "andrew", "dave", "dave", "dave", "dave",  "rudiger", "rudiger", "scott", "andrew", "andrew", "scott", "andrew", "andrew", ]

odd_name(names)

#runtime O(3N), where each iteration is 1 operation?

#alt O(N) method

def odd_name(names: list) -> str:

#initialize odds and evens counter objects

    odds = dict.fromkeys(names, 0)
    evens = {}

    print(f'odds is{odds}, evens is {evens}')

    #add names to counter

    for name in names:
        if name in odds:
            #if name is in odds, it's currently odd. increment it.
            odds[name] += 1
            #now it's even, so move add it to evens with the same count value
            evens[name] = odds[name]
            #and remove it from odds
            odds.remove(name)

        print(f'odds is{odds}')
    

    #check for odd values

    for k,v in counter.items():

        if not v % 2 == 0:
            print(k)
            return k

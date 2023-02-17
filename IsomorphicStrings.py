from collections import defaultdict

def IsIsomorphic(s, t):
    MapS = {}
    MapT = {}
    i = 0
    while i < len(s):
        if(MapS[s[i]]):
            print(f'MapS at {s[i]} is {MapS[s[i]]}')
            if( not MapS[s[i]] == t[i]):
                print('not isomorphic')
                return False
        else:
            MapS[s[i]] == t[i]
            print(f'setting MapS at {s[i]} to {t[i]}')    

        if(MapT[t[i]]):
            print(f'MapT at {t[i]} is {MapT[t[i]]}')
            
IsIsomorphic("wowza", "yowza")
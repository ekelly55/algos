from collections import defaultdict

def IsIsomorphic(s, t):
    MapS = {}
    MapT = {}
    i = 0
    while i < len(s):
        if(s[i] in MapS):
            print(f'MapS at {s[i]} is {MapS[s[i]]}')
            if( not MapS[s[i]] == t[i]):
                print('not isomorphic')
                return False
        else:
            MapS[s[i]] = t[i]
            print(f'setting MapS at {s[i]} to {t[i]}')    

        if(t[i] in MapT):
            print(f'MapT at {t[i]} is {MapT[t[i]]}')
            if(not MapT[t[i]] == s[i]):
                print('not isomorphic')
                return False
        else:
            MapT[t[i]] = s[i]
            print(f'setting MapT at {t[i]} to {s[i]}')
        
        i += 1
    print('strings are isomorphic')
    return True

IsIsomorphic("foo", "bar")
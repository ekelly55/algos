

#split them each into lists, make a list for matching and one for nonmatching and iterate through each and append

def matchWords(sentence1, sentence2):
    #split them into lists
#     sentence1 = sentence1.split()
#     sentence2 = sentence2.split()

#     commonWords = [i for i in sentence1 if i in sentence2]

#     uniqueWords1 = [i for i in sentence1 if not i in sentence2]
#     uniqueWords2 = [i for i in sentence2 if not i in sentence1]

#     uniqueWords = uniqueWords1 + uniqueWords2

#     print(commonWords, uniqueWords)
#     return commonWords, uniqueWords

    set1 = set(sentence1.split())
    set2 = set(sentence2.split())
    
    return sorted(list(set1^set2)), sorted(list(set1&set2)) # ^ A.symmetric_difference(B), & A.intersection(B)

sentence1 = 'We are really pleased to meet you in our city'
sentence2 = 'The city was hit by a really heavy storm'


print(matchWords(sentence1, sentence2))

#need to understand sets!
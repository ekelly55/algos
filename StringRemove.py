str = 'freeCodeCamp2'
str = str.translate({ord('2'): '2000'})
print(str)

str2 = 'Gython is easy to learn'
table = str2.maketrans("G", "P")

str2 = str2.translate(table)

print(table)
print(str2)
str = 'freeCodeCamp2'
str = str.translate({ord('2'): '2000'})
# print(str)

str2 = 'Gython is easy to learn'
table = str2.maketrans("G", "P")

str2 = str2.translate(table)

# print(table)
# print(str2)


str3 = 'Works on commision. No money down'
str4 = 'Works on commision. No money down'

str3 = str3.replace('.', '?').replace('No', 'No,').replace('down', 'down!')

# print(f'They got this all screwed up. {str3}')

replacements = [('.', '?'), ('No', 'No,'), ('down', 'down!')]

for i, j in replacements:
    if i in str4:
        str4 = str4.replace(i, j)



# print(f'They got this all screwed up. {str4}')

str5 = 'BYOBB'

print(str5[:4])

#more translate to practice

table = { 119 : 103, 121 : 102, 117 : None } 
  
# target string 
trg = "weeksyourweeks"
  
# Printing original string 
# print (f'The string before translating is : {trg}') 
  
# using translate() to make translations. 
# print ("The string after translating is : ", end ="") 
# print (trg.translate(table)) 

txt = "Good night Sam!"

x = "maS"
y = "eoJ"
z = "odnght"

mytable = str.maketrans(x, y, z)

print(txt.translate(mytable))
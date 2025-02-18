# You are given a Google Doc like this one that contains a list of Unicode characters and their positions in a 2D grid. Your task is to write a function that takes in the URL for such a Google Doc as an argument, retrieves and parses the data in the document, and prints the grid of characters. When printed in a fixed-width font, the characters in the grid will form a graphic showing a sequence of uppercase letters, which is the secret message.

# The document specifies the Unicode characters in the grid, along with the x- and y-coordinates of each character.

# The minimum possible value of these coordinates is 0. There is no maximum possible value, so the grid can be arbitrarily large.

# Any positions in the grid that do not have a specified character should be filled with a space character.

# You can assume the document will always have the same format as the example document linked above.

# Note that the coordinates (0, 0) will always correspond to the same corner of the grid as in this example, so make sure to understand in which directions the x- and y-coordinates increase.

from bs4 import BeautifulSoup

import requests

from collections import defaultdict

def download_file(url):

    
    response = requests.get(file_url)
    if response.status_code == 200:
        # extract doc content
        doc_content = BeautifulSoup(response.text, 'html.parser')
        #extract teh table from the doc content
        table = doc_content.find_all('table')[0]
        # print(table.prettify())

        # #extract the rows from teh table
        rows = table.find_all('tr')
        # if rows:
        #     # extract the headers by making an array of stripped text from the html in top row
        #     headers = [col.text.strip() for col in rows[0].find_all('td')]
        # else:
        #     headers = []  

        table_data = []

        # iterate through all non-header rows
        for row in rows[1:]:
            #extract columns from each row
            columns = row.find_all('td')
            #make an array of stripped text from cols in columns
            columns = [col.get_text(strip=True) for col in columns]
            # print(columns)
            if columns:
                # append that array to the table data array
                table_data.append(columns)
        # for row in table_data:
        #     print([ord(char) for char in row[1]])
        # print(table_data)
        #turn each array element in table data into a dictionary mapping values to header keys
        # table_data = [dict(zip(headers, row)) for row in table_data]
        sorted_table = sorted(table_data, key=lambda row: (-int(row[2]), int(row[0])))
        # print(sorted_table)

        y_groups = defaultdict(lambda: [])


        for row in sorted_table:
            
            y_groups[int(row[2])].append((int(row[0]), row[1]))
            # print(row)

        max_y = max(y_groups.keys())
        min_y = min(y_groups.keys())
        print(max_y)

        max_x = max(max(x for x, _ in y_groups[y]) for y in y_groups)

        grid = []

        # print(y_groups[0])
        for y_value in range(min_y, max_y + 1):
            row = [' ']*(max_x + 1)
            for x, char in y_groups[y_value]:
                row[x] = char
            grid.append(row)
        
        grid.reverse()

        for row in grid:
            print("".join(row))


    else: 
        return f"Error: {response.status_code}"
    

file_url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"
# file_url = "https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub"
# file_url = "https://docs.google.com/document/d/136e5OwWxKzqC4x8BgbzYwnTt8JvH-e0e3Isg1tFwmrc/edit?usp=sharing"
download_file(file_url)
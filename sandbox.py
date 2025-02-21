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
        # extract teh table from the doc content
        table = doc_content.find_all('table')[0]

        # extract the rows from teh table
        rows = table.find_all('tr')
        
        # list to store table data
        table_data = []

        # iterate through all non-header rows
        for row in rows[1:]:
            #extract columns from each row
            columns = row.find_all('td')
            #make an list of stripped text from cols in columns
            columns = [col.get_text(strip=True) for col in columns]
            if columns:
                # append that array to the table data array
                table_data.append(columns)
            
        # sort table data by y descending, x ascending to be able to print from top of 'letters' left to right
        sorted_table = sorted(table_data, key=lambda row: (-int(row[2]), int(row[0])))

        y_groups = defaultdict(lambda: [])


        for row in sorted_table:
            
            y_groups[int(row[2])].append((int(row[0]), row[1]))
            # print(row)

        max_y = max(y_groups.keys())
        min_y = min(y_groups.keys())

        # find max x value - extracts x vals from tuples in dict, discards char value. finds max in row, then max in table
        max_x = max(max(x for x, _ in y_groups[y]) for y in y_groups)

        grid = [[' ' for cell in range(max_x + 1)] for cell in range(max_y + 1)]

        for row in sorted_table:
            x = int(row[0])
            y= int(row[2])
            char = row[1]
            # ensures values are filled in filled in correctly since y=0 represents the bottom of the letter in the data, but y=0 represents the top row of this grid
            grid[max_y - y][x] = char
        
        # finally, for each grid row, join the characters in the list and print
        for row in grid:
            print("".join(row))


    else: 
        return f"Error: {response.status_code}"
    

file_url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"

download_file(file_url)
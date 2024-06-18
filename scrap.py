import requests
from bs4 import BeautifulSoup

# Request to the website
url = "https://republika.co.id/"
page = requests.get(url)

# Check if the page was fetched correctly
if page.status_code != 200:
    print(f"Failed to fetch page. Status code: {page.status_code}")
    exit()

page_content = page.content

# Extract content into BeautifulSoup object
soup = BeautifulSoup(page_content, 'html.parser')

# Print out the HTML content for verification
print(soup.prettify())

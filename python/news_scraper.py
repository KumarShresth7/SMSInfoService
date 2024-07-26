import requests
from bs4 import BeautifulSoup
import json

def get_bbc_news_headlines(country):
    try:
        url = f"https://www.hindustantimes.com/cities/{country}-news"
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')
        headlines = []

        for item in soup.select('a'):
            title = item.get_text(strip=True)
            link = item.find_parent('a')['href']
            headlines.append({
                'title': title,
                'url': link if link.startswith('http') else f"https://www.hindustantimes.com{link}",
            })

        return json.dumps(headlines)  # Return as JSON string
    except Exception as e:
        return json.dumps({'error': str(e)})  # Return error as JSON string

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        country = sys.argv[1]
        headlines = get_bbc_news_headlines(country)
        print(headlines)
    else:
        print(json.dumps({'error': 'No country provided'}))

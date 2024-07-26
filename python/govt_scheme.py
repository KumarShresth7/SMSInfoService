import requests
from bs4 import BeautifulSoup
import json

def get_government_schemes():
    url = "https://myscheme.gov.in/search/user-journey"  # Hardcoded URL

    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')
        schemes = []

        for item in soup.select('div.flex.flex-row.items-center.justify-between'):
            name = item.get_text(strip=True)
            description = item.get_text(strip=True)
            # eligibility = item.select_one('.scheme-eligibility').get_text(strip=True)
            schemes.append({
                'name': name,
                'description': description,
                # 'eligibility': eligibility,
            })

        return json.dumps(schemes)  # Return as JSON string
    except Exception as e:
        return json.dumps({'error': str(e)})  # Return error as JSON string

if __name__ == "__main__":
    schemes = get_government_schemes()
    print(schemes)

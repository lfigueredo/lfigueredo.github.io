import urllib.request
import re
urls = ["https://www.youtube.com/watch?v=CExxAAr8NLA", "https://www.youtube.com/watch?v=y0cbYBk6AEo"]
for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
        print(f"{url[-11:]} -> {title_match.group(1).replace(' - YouTube', '')}")
    except Exception as e:
        print(f"{url[-11:]} -> Error")

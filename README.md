# 🕸 Broken Link Checker Bot

A simple Node.js script that checks for broken links on a webpage.

## 🔧 Tech Stack

- Node.js
- Axios
- Cheerio

## 🚀 How to Use

1. Clone this repo or download the files
2. Run: `npm install axios cheerio` to install dependencies
3. Open `checkLinks.js` and update the `targetURL` variable to the website you want to test
4. Run: `node checkLinks.js` to start the link check

## 📄 Sample Output

```
✅ 200 OK - https://www.w3schools.com/html/
❌ 404 Not Found - https://w3schools.com/thispagedoesnotexist
❌ 500 Server Error - https://example.com/internal-error
```

## 📁 File Structure

.
├── checkLinks.js
├── README.md
└── node_modules/

---

Created by Tamar Young

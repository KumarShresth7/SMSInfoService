const puppeteer = require('puppeteer');

const getStateNewsHeadlines = async (state) => {
    try {
        const url = `https://www.tribuneindia.com/news/city/${state}`;
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' // Correctly escaped path
        });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });

        const headlines = await page.evaluate(() => {
            const headlinesArray = [];
            document.querySelectorAll('.news-headline').forEach(element => {
                const title = element.querySelector('h2').innerText;
                const description = element.querySelector('p').innerText;
                const link = element.querySelector('a').getAttribute('href');
                headlinesArray.push({
                    title,
                    description,
                    url: link.startsWith('http') ? link : `https://www.tribuneindia.com${link}`
                });
            });
            return headlinesArray;
        });

        await browser.close();
        return headlines;
    } catch (error) {
        console.error('Error fetching state news headlines:', error);
        return [];
    }
};

module.exports = { getStateNewsHeadlines };
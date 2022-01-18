const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const [el] = await page.$x('//*[@id="trails_table"]/tbody/tr/td[2]/a');
	const href = await el.getProperty('href');
	const hrefTxt = await href.jsonValue();

	console.log({hrefTxt});

	browser.close();
}

scrapeProduct('https://www.trailforks.com/search/?search=tongariro%20alpine%20crossing');

// {
//   hrefTxt: 'https://www.trailforks.com/trails/tongariro-alpine-crossing/'
// }
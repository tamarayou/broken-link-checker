const axios = require('axios');
const cheerio = require('cheerio');

const targetURL = 'https://w3schools.com';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkLinks(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const links = [];

    $('a').each((i, el) => {
      const link = $(el).attr('href');
      if (link && link.startsWith('http')) links.push(link);
    });

    console.log(`Found ${links.length} links. Checking...\n`);

    let goodCount = 0;
    let brokenCount = 0;

    for (const link of links) {
      try {
        const res = await axios.get(link);
        if (res.status === 200) {
          goodCount++;
          // Comment out next line if you want less output
          // console.log(`✅ ${res.status} OK - ${link}`);
        } else {
          brokenCount++;
          console.log(`❌ ${res.status} Error - ${link}`);
        }
      } catch (err) {
        brokenCount++;
        if (err.response) {
          console.log(`❌ ${err.response.status} Error - ${link}`);
        } else {
          console.log(`⚠️  No Response - ${link}`);
        }
      }
      await delay(200); // 200ms delay between requests
    }

    console.log(`\nSummary:`);
    console.log(`✅ Good links: ${goodCount}`);
    console.log(`❌ Broken links: ${brokenCount}`);

  } catch (err) {
    console.error('Error fetching page:', err.message);
  }
}

checkLinks(targetURL);
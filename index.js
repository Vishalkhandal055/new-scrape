const puppeteer = require("puppeteer");

async function scrapeNewsWebsite() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the news website
  await page.goto("https://indianexpress.com/");

  // await page.screenshot({ path: "example-news.png", fullPage: true });
  // await page.pdf({ path: "example-news.pdf", format: "A4" });
  // const html = await page.content();
  // console.log(html);

  // const title = await page.evaluate(() => document.title);

  // const text = await page.evaluate(() => {
  //   return document.body.innerText;
  // });

  // const latestNews = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll(".lead-stories .top-news"), (e) => ({
  //     title: e.querySelector("ul li h3").innerText,
  //   }))
  // );
  // console.log(latestNews);

  // Extract date-wise news links
  const newsLinks = await page.evaluate(() => {
    const links = [];
    document.querySelectorAll(".lead-stories .top-news a").forEach((link) => {
      links.push(link.innerText);
    });
    return links;
  });

  console.log(newsLinks);

  // // Visit each news link and extract sports news
  // for (let i = 0; i < newsLinks.length; i++) {
  //   await page.goto(newsLinks[i]);
  //   const sportsNews = await page.evaluate(() => {
  //     const articles = [];
  //     document
  //       .querySelectorAll(".lead-stories .top-news a")
  //       .forEach((article) => {
  //         // Check if the article belongs to the sports category
  //         if (article.textContent.toLowerCase().includes("sports")) {
  //           articles.push(article.textContent.trim());
  //         }
  //       });
  //     return articles;
  //   });

  //   if (sportsNews.length > 0) {
  //     console.log(`Sports News (${newsLinks[i]}):`);
  //     sportsNews.forEach((article) => {
  //       console.log(article);
  //     });
  //     console.log();
  //   }
  // }

  await browser.close();
}

scrapeNewsWebsite();

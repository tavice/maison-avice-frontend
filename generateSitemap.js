const { SitemapStream, streamToPromise } = require('sitemap'); //to run it: node generateSitemap.js
const fs = require('fs'); // To save the sitemap to a file

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.maisonavice.com' }); // Change to your website

  // Add URLs to the sitemap (you can add more as needed)
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about-us', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/portfolio', changefreq: 'weekly', priority: 0.9 });
  sitemap.write({ url: '/blog', changefreq: 'weekly', priority: 0.9 });

  // End the sitemap stream
  sitemap.end();

  // Convert the sitemap stream to XML
  const xmlBuffer = await streamToPromise(sitemap);

  // Convert the buffer to a string
  const xmlString = xmlBuffer.toString();

  // Print the sitemap XML to the console
  console.log(xmlString);

  // Save the sitemap to a file (optional)
  fs.writeFileSync('public/sitemap.xml', xmlString);
}

generateSitemap();

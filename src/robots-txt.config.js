module.exports = {
  policy: [
    {
      userAgent: "Googlebot",
      allow: "/",
      disallow: ["/search"],
      crawlDelay: 2
    },
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/database"],
      crawlDelay: 2
    },

    {
      userAgent: "*",
      allow: "/",
      disallow: ["/scripts"],
      crawlDelay: 2
    },

    {
      userAgent: "OtherBot",
      allow: ["/allow-for-all-bots", "/allow-only-for-other-bot"],
      disallow: ["/admin", "/login"],
      crawlDelay: 2
    },
    {
      userAgent: "*",
      allow: "/",
      disallow: "/search",
      crawlDelay: 10,
      cleanParam: "ref /articles/"
    }
  ],
  sitemap: "https://thehairstudios.co/sitemap.xml",
  host: "https://thehairstudios.co"
};

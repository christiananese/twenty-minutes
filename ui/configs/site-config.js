const baseUrl = 'https://github.com/christiananese/twenty-minutes';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} TwentyMinutes.`,
  author: {
    name: 'TwentyMinutes Blog',
    email: 'christian.anese@gmail.com'
  },
  repo: {
    url: baseUrl
  },
  seo: {
    title: 'Twenty Minutes',
    titleTemplate: '%s - Der etwas andere Blog',
    description: "What's not to love",
    siteUrl: baseUrl,
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url: baseUrl,
      title: 'Lets conquer the world',
      description: 'Just a short og description.',
      site_name: 'TwentyMinutes - TheBlog',
      images: [
        {
          url: '/og-image.png',
          width: 1240,
          height: 480,
          alt: 'TwentyMinutes'
        }
      ]
    }
  }
};

export default siteConfig;

import Head from 'next/head';

/**
 * Generates meta tags for SEO optimization using Next.js Head component.
 * 
 * @param {Object} params - The parameters for generating meta tags.
 * @param {string} params.title - The title of the webpage.
 * @param {string} params.description - The description of the webpage.
 * @param {string} params.image - The URL of the image to be used in meta tags.
 * @param {string} [params.url=config.appInfo.domain] - The URL of the webpage (defaults to domain from config).
 * @param {Array<string>} params.keywords - List of keywords relevant to the webpage.
 * @param {string} params.contentType - The MIME type of the content (e.g., 'text/html').
 * @param {string} params.twitterHandle - The Twitter username of the account.
 * @param {string} params.siteName - The name of the site to be used in Open Graph tags.
 * @param {string} params.locale - The locale of the content.
 * @param {string} params.canonicalUrl - The canonical URL of the webpage.
 * @param {Array<Object>} params.alternateUrls - List of alternate URLs for different languages or regions, each object containing 'lang' and 'url'.
 */


import config  from '../../settings';

const generateMetaDataTags = ({
  title,
  description,
  image,
  url = config.appInfo.domain,
  keywords,
  contentType,
  twitterHandle,
  siteName,
  locale,
  canonicalUrl,
  alternateUrls
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta http-equiv="Content-Type" content={contentType} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      
      {/* Additional Tags */}
      <link rel="canonical" href={canonicalUrl} />
      {alternateUrls.map((hreflang) => (
        <link rel="alternate" hreflang={hreflang.lang} href={hreflang.url} key={hreflang.lang} />
      ))}
      
      {/* Add structured data with JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": config.appInfo.domain,
          "@type": "WebPage",
          "url": url,
          "name": title,
          "description": description,
          "image": {
            "@type": "ImageObject",
            "url": image
          },
          "author": {
            "@type": "Person",
            "name": "Author Name"
          },
          // Add more structured data as needed
        })}
      </script>
      
      {/* Add more tags and structured data as needed for SEO */}
    </Head>
  );
};

export default generateMetaDataTags;



/**
 * This function generates SEO tags for a web page.
 *
 * @param {Object} options - The options for the SEO tags.
 * @param {string} options.title - The title of the page.
 * @param {string} options.description - The description of the page.
 * @param {Array} options.keywords - The keywords for the page.
 * @param {Object} options.openGraph - The Open Graph data for the page.
 * @param {string} options.canonicalUrlRelative - The relative canonical URL for the page.
 * @param {Object} options.extraTags - Any extra tags to add to the page.
 * @returns {Object} The SEO tags for the page.
 */
export const getMetaData = ({
  title = "Example Title",
  description = "Example Description",
  keywords = ["example", "keywords"],
  openGraph = {
    title: "Example Open Graph Title",
    description: "Example Open Graph Description",
    url: config.appInfo.domain,
  },
  canonicalUrlRelative = "/example",
  extraTags = { "example-tag": "example value" },
} = {}) => {
  // Default values
  const defaultTitle = config.appInfo.name;
  const defaultDescription = config.appInfo.description;
  const defaultKeywords = [config.appInfo.name];
  const defaultUrl = `https://${config.appInfo.domain}/`;

  // Base URL for metadata
  const metadataBase = new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : defaultUrl
  );

  // Open Graph data
  const ogTitle = openGraph.title || defaultTitle;
  const ogDescription = openGraph.description || defaultDescription;
  const ogUrl = openGraph.url || defaultUrl;

  // Return the SEO tags
  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    applicationName: defaultTitle,
    metadataBase,

    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      siteName: ogTitle,
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: ogTitle,
      description: ogDescription,
      card: "summary_large_image",
      creator: "@shubham_d",
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

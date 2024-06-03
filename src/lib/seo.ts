import config  from '../../settings';

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
  title = "Shiply - Launch Your Startup Today",
  description = "Get started quickly on building your SaaS, AI tool, or any other web app with our comprehensive NextJS starter kit.",
  keywords = ["startup", "SaaS", "AI tool", "NextJS", "web app"],
  openGraph = {
    title: "Example Open Graph Title",
    description: "Example Open Graph Description",
    url: config.appInfo.domain,
  },
  alternates = {},
  extraTags = {},
  image="https://www.shiply.store/icon.svg"
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
      creator: "@shubham98d4",
    },

    alternates,
    image,
    ...extraTags,
  };
};

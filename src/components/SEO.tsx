import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

const BASE_URL = "https://www.meydan.com";
const DEFAULT_IMAGE = `${BASE_URL}/og/meydan-home.jpg`;
const SITE_NAME = "Meydan";

const SEO = ({
  title,
  description,
  ogType = "website",
  ogImage,
  ogUrl,
  canonical,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Gündemin merkezi`;
  const metaDescription =
    description ||
    "Meydan; siyaset, ekonomi, dünya, savunma ve son dakika gelişmelerini güçlü, hızlı ve gündem odaklı bir yayın anlayışıyla sunan dijital haber platformudur.";
  const image = ogImage || DEFAULT_IMAGE;
  const url = ogUrl ? `${BASE_URL}${ogUrl}` : BASE_URL;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : url;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </Helmet>
  );
};

export default SEO;

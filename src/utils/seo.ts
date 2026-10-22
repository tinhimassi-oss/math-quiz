/**
 * Dynamic SEO and Metadata Manager
 * Updates document.title, meta description, OpenGraph, Twitter cards, canonical URL,
 * and Schema.org JSON-LD structured data dynamically on route change.
 */

export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  breadcrumbs?: Array<{ name: string; path: string }>;
  jsonLdType?: 'WebApplication' | 'Quiz' | 'Course' | 'Article';
}

const DEFAULT_TITLE = 'كويزات الرياضيات | منصة اختبارات وألغاز الرياضيات التفاعلية';
const DEFAULT_DESC = 'منصة عربية عصرية ومريحة للعين لتصفح مجالات الرياضيات وتصنيفاتها، مع اختبارات تفاعلية وشروحات دقيقة خطوة بخطوة.';

export function updateDocumentSeo(config: SeoConfig) {
  const fullTitle = config.title.includes('كويزات الرياضيات')
    ? config.title
    : `${config.title} | كويزات الرياضيات`;
  const description = config.description || DEFAULT_DESC;

  // 1. Page Title
  document.title = fullTitle;

  // Helper to get or create a meta tag
  const setMetaTag = (attributeName: 'name' | 'property', attributeValue: string, contentValue: string) => {
    let el = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attributeName, attributeValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', contentValue);
  };

  // 2. Meta Description
  setMetaTag('name', 'description', description);

  // 3. Keywords if provided
  if (config.keywords && config.keywords.length > 0) {
    setMetaTag('name', 'keywords', config.keywords.join(', '));
  }

  // 4. Clean Canonical URL
  const origin = window.location.origin;
  const cleanPath = config.canonicalPath || window.location.pathname;
  const canonicalUrl = `${origin}${cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath}`;

  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 5. OpenGraph Tags
  setMetaTag('property', 'og:title', fullTitle);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:type', config.type || 'website');
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:site_name', 'كويزات الرياضيات');
  setMetaTag('property', 'og:locale', 'ar_AR');

  // 6. Twitter / X Cards
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', fullTitle);
  setMetaTag('name', 'twitter:description', description);

  // 7. Dynamic Schema.org JSON-LD Structured Data
  let scriptLd = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
  if (!scriptLd) {
    scriptLd = document.createElement('script');
    scriptLd.id = 'seo-jsonld';
    scriptLd.type = 'application/ld+json';
    document.head.appendChild(scriptLd);
  }

  const structuredData: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': config.jsonLdType || 'WebApplication',
    'name': fullTitle,
    'description': description,
    'url': canonicalUrl,
    'inLanguage': 'ar',
    'applicationCategory': 'EducationalApplication',
    'operatingSystem': 'All',
  };

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    structuredData.breadcrumb = {
      '@type': 'BreadcrumbList',
      'itemListElement': config.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': b.name,
        'item': `${origin}${b.path.startsWith('/') ? b.path : '/' + b.path}`,
      })),
    };
  }

  scriptLd.textContent = JSON.stringify(structuredData);
}

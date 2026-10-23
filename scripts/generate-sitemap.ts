import fs from 'fs';
import path from 'path';
import { MAJOR_DOMAINS } from '../src/data/mathCategories';

interface SitemapEntry {
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

// قراءة النطاق الرسمي - مثبت حصرياً على ar.quiz-math.com
const args = process.argv.slice(2);
let customDomain = '';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--domain' && args[i + 1]) {
    customDomain = args[i + 1];
  }
}

// النطاق الأساسي الرسمي للمشروع
const BASE_URL = (
  customDomain ||
  process.env.SITE_URL ||
  'https://ar.quiz-math.com'
).replace(/\/+$/, '');

const today = new Date().toISOString().split('T')[0];

const entries: SitemapEntry[] = [];

// 1. الصفحة الرئيسية
entries.push({
  url: '/',
  changefreq: 'daily',
  priority: 1.0,
});

// 2. الفروع الـ 7 الرئيسية وجميع التصنيفات الـ 35/36 وتفرعات الاختبارات
for (const domain of MAJOR_DOMAINS) {
  // رابط المجال (مثل: https://ar.quiz-math.com/domain/basic-math)
  entries.push({
    url: `/domain/${domain.id}`,
    changefreq: 'weekly',
    priority: 0.9,
  });

  // التصنيفات الفرعية (Subcategories)
  for (const sub of domain.subcategories) {
    entries.push({
      url: `/domain/${domain.id}/${sub.id}`,
      changefreq: 'weekly',
      priority: 0.8,
    });

    // الأقسام والاختبارات التفاعلية الفرعية إن وجدت
    if (sub.subSections && sub.subSections.length > 0) {
      for (const topic of sub.subSections) {
        entries.push({
          url: `/domain/${domain.id}/${sub.id}/${topic.id}`,
          changefreq: 'weekly',
          priority: 0.7,
        });

        if (topic.subSections && topic.subSections.length > 0) {
          for (const test of topic.subSections) {
            entries.push({
              url: `/domain/${domain.id}/${sub.id}/${topic.id}/${test.id}`,
              changefreq: 'monthly',
              priority: 0.7,
            });
          }
        }
      }
    }
  }
}

// 3. مسارات اختبارات الحساب المباشرة
const arithmeticTests = [
  '/math/arithmetic/addition/single-digits',
  '/math/arithmetic/addition/within-20',
  '/math/arithmetic/addition/within-50',
  '/math/arithmetic/addition/within-100',
  '/math/arithmetic/addition/fractions',
  '/math/arithmetic/addition/decimals',
  '/math/arithmetic/addition/missing-single-digits',
  '/math/arithmetic/addition/missing-within-20',
  '/math/arithmetic/addition/missing-within-50',
  '/math/arithmetic/addition/missing-within-100',
  '/math/arithmetic/addition/missing-fractions',
  '/math/arithmetic/addition/missing-decimals',
];

for (const route of arithmeticTests) {
  entries.push({
    url: route,
    changefreq: 'monthly',
    priority: 0.7,
  });
}

// 4. الصفحات الثابتة (عن الموقع، الشروط، الخصوصية، التواصل)
const staticPages = ['/about', '/contact', '/privacy', '/terms'];
for (const page of staticPages) {
  entries.push({
    url: page,
    changefreq: 'monthly',
    priority: 0.5,
  });
}

// إزالة أي روابط مكررة
const uniqueMap = new Map<string, SitemapEntry>();
for (const entry of entries) {
  uniqueMap.set(entry.url, entry);
}

const uniqueEntries = Array.from(uniqueMap.values());

// إنشاء محتوى XML المتوافق مع معايير Sitemaps.org
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${uniqueEntries
  .map(
    (e) => `  <url>
    <loc>${BASE_URL}${e.url === '/' ? '' : e.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

// الحفظ التلقائي في public/sitemap.xml
const publicDir = path.resolve(import.meta.dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

console.log(`Successfully generated sitemap.xml with ${uniqueEntries.length} unique URLs!`);
console.log(`Saved to: ${sitemapPath}`);
console.log(`Base URL: ${BASE_URL}`);

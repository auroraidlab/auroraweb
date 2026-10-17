import { readFileSync, writeFileSync } from 'node:fs';

// Vercel supplies the production hostname, including for preview builds.
const hostname = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
if (!hostname) {
  throw new Error('Missing Vercel deployment hostname for absolute social image URLs.');
}
const origin = new URL(`https://${hostname}`).origin;
const file = new URL('../dist/index.html', import.meta.url);
const html = readFileSync(file, 'utf8');
const description = '좋은 디자인은 보이지 않는 감각의 질서를 설계하는 일. Aurora ID Lab의 공간 철학과 사유의 기록.';
const tags = `<!-- SOCIAL_META_START -->
<meta property="og:type" content="website">
<meta property="og:locale" content="ko_KR">
<meta property="og:site_name" content="AURORA SENSE ORDER">
<meta property="og:url" content="${origin}/">
<meta property="og:image" content="${origin}/og-image.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="AURORA SENSE ORDER — 보이지 않는 감각의 질서. 따뜻한 빛이 드는 공간과 미색 바탕의 타이포그래피.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AURORA SENSE ORDER — 보이지 않는 감각의 질서">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${origin}/og-image.jpg">
<!-- SOCIAL_META_END -->`;
writeFileSync(file, html.includes('<!-- SOCIAL_META_START -->')
  ? html.replace(/<!-- SOCIAL_META_START -->[\s\S]*?<!-- SOCIAL_META_END -->/, tags)
  : html.replace('</head>', `${tags}\n</head>`));
console.log('Prepared social metadata for', origin);

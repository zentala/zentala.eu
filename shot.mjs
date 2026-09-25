import { chromium } from './node_modules/playwright/index.mjs';
import fs from 'node:fs';

const outDir = process.argv[2];
const base = process.argv[3] || 'http://127.0.0.1:4440';
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
for (const theme of ['light', 'dark']) {
  for (const width of [1280, 375]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    await ctx.addInitScript(`try{localStorage.setItem('theme','${theme}')}catch(e){}`);
    const page = await ctx.newPage();
    const errs = [];
    page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await page.goto(base + '/why/', { waitUntil: 'load' });
    await page.waitForTimeout(1200);
    const file = `${outDir}/why-${theme}-${width}.png`;
    await page.screenshot({ path: file, fullPage: true });
    const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    console.log(file, 'darkClass=' + isDark, 'consoleErrors=' + errs.length, errs.slice(0, 3).join(' | '));
    await ctx.close();
  }
}
await browser.close();

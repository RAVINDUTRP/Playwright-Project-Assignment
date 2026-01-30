// IT23384392 - THILAKARATHNA T.R.P.

import { test, expect } from '@playwright/test';

// Helper function to wait for translation to complete
async function waitForTranslation(page, sinhalaOutput) {
  // Wait for the output div to have content (not empty)
  await page.waitForFunction(
    (selector) => {
      const element = document.querySelector(selector);
      return element && element.innerText.trim().length > 0;
    },
    'div.whitespace-pre-wrap',
    { timeout: 15000 }
  );
}

// POSITIVE FUNCTIONAL TEST CASES (24 Scenarios)

test('Pos_Fun_0001 - Simple sentence conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mata bath oonee.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);

  await expect(sinhalaOutput).toContainText('මට බත් ඕනේ.');
});

test('Pos_Fun_0002 - Compound sentence conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('අපි කෑම කන්න යනවා සහ පස්සේ චිත්‍රපටයකුත් බලනවා.');
});

test('Pos_Fun_0003 - Complex sentence conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('oya enavaanam mama balan innavaa.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('ඔය එනවානම් මම බලන් ඉන්නවා.');
});

test('Pos_Fun_0004 - Interrogative (Question) conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('meeka hariyata vaeda karanavaadha?');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('මේක හරියට වැඩ කරනවාද?');
});

test('Pos_Fun_0005 - Imperative (Command) conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('vahaama enna.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('වහාම එන්න.');
});

test('Pos_Fun_0006 - Positive sentence conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('api heta enavaa.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('අපි හෙට එනවා.');
});

test('Pos_Fun_0007 - Negative sentence conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mama ehema karannee naehae.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('මම එහෙම කරන්නේ නැහැ.');
});

test('Pos_Fun_0008 - Common Greeting conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('suba udhaeesanak!');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('සුබ උදෑසනක්!');
});

test('Pos_Fun_0009 - Polite Request conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mata udhavvak karanna puLuvandha?');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('මට උදව්වක් කරන්න පුළුවන්ද?');
});

test('Pos_Fun_0010 - Highly Polite Phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?');
});

test('Pos_Fun_0011 - Informal Phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('eeyi, ooka dhiyan.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('ඒයි, ඕක දියන්.');
});

test('Pos_Fun_0012 - Daily Expression (Feeling)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mata nidhimathayi.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('මට නිදිමතයි.');
});

test('Pos_Fun_0013 - Frequent Collocation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('poddak inna');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('පොඩ්ඩක් ඉන්න');
});

test('Pos_Fun_0014 - Repeated Words (Emphasis)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('hari hari');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('හරි හරි');
});

test('Pos_Fun_0015 - Past Tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mama iiyee gedhara giyaa.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('මම ඊයේ ගෙදර ගියා.');
});

test('Pos_Fun_0016 - Future Tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mama heta enavaa.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('මම හෙට එනවා.');
});

test('Pos_Fun_0017 - Plural Usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('api yamu.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('අපි යමු.');
});

test('Pos_Fun_0018 - English Technical Terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('Zoom meeting ekak thiyennee.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('Zoom meeting එකක් තියෙන්නේ.');
});

test('Pos_Fun_0019 - Mixed English/Singlish Sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('nimaali office enna late vennee traffic nisaa.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('නිමාලි office එන්න late වෙන්නේ traffic නිසා.');
});

test('Pos_Fun_0020 - English Abbreviations', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mata OTP eka evanna.');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('මට OTP එක එවන්න.');
});

test('Pos_Fun_0021 - Currency and Numbers', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('Rs. 5343');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('Rs. 5343');
});

test('Pos_Fun_0022 - Date Format', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('2026-05-21');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('2026-05-21');
});

test('Pos_Fun_0023 - Punctuation Handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('wow!');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);

  // Transliteration may vary, checking punctuation retention
  await expect(sinhalaOutput).toContainText('!');
});

test('Pos_Fun_0024 - Long Paragraph (Stress Test)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const longText = 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva';
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill(longText);
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);

  // Checking a part of the expected Sinhala output
  await expect(sinhalaOutput).toContainText('ද්විත්ව සුළි කුණාටුව');
});


// NEGATIVE / ROBUSTNESS TEST CASES (10 Scenarios)

test('Neg_Fun_0001 - Joined words without spaces (Stress Test)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mamagedharayanavaa');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);

  // We expect it NOT to produce the perfect sentence "මම ගෙදර යනවා" due to lack of spaces
  await expect(sinhalaOutput).not.toHaveText('මම ගෙදර යනවා');
});

test('Neg_Fun_0002 - Another joined word variation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('matapaankannaoonee');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).not.toHaveText('මට පාන් කන්න ඕනේ');
});

test('Neg_Fun_0003 - Mixed joined input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('hetaapiyanavaa');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).not.toHaveText('හෙට අපි යනවා');
});

test('Neg_Fun_0004 - Invalid Special Characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('%%%$$$###');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);

  const text = await sinhalaOutput.innerText();
  // Expecting characters to be returned as is, or not converted
  expect(text.trim()).toBe('%%%$$$###');
});

test('Neg_Fun_0005 - Empty Input Handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('');
  await singlishInput.press('Enter');
  
  // For empty input, just wait a moment for any potential response
  await page.waitForTimeout(2000);
  
  await expect(sinhalaOutput).toBeEmpty();
});
});

test('Neg_Fun_0006 - Numeric strings without context', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('123456');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toHaveText('123456');
});

test('Neg_Fun_0007 - URL Handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('www.google.com');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  await expect(sinhalaOutput).toContainText('www.google.com');
});

test('Neg_Fun_0008 - Chat Shorthand (Unsupported)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('Thx');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);

  // Expectation: It does NOT convert to "ස්තූතියි"
  await expect(sinhalaOutput).not.toContainText('ස්තූතියි');
});

test('Neg_Fun_0009 - Gibberish Input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('asdfghjkl');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);

  // Should produce output, but not a valid known word.
  await expect(sinhalaOutput).not.toBeEmpty();
});

test('Neg_Fun_0010 - HTML Tag Injection', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('<b>bold</b>');
  await singlishInput.press('Enter');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);

  // Ensure tags are treated as text
  const content = await sinhalaOutput.innerText();
  expect(content).toContain('<b>');
});


// UI TEST SCENARIOS

test('Pos_UI_0001 - Real-time output update behavior', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('man gedhara yanavaa');
  
  // Wait for translation to appear (real-time conversion)
  await waitForTranslation(page, sinhalaOutput);
  
  // We check immediate conversion without pressing Enter
  await expect(sinhalaOutput).toContainText('මන් ගෙදර යනවා');
});

test('Pos_UI_0002 - Clear Input Functionality', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.fill('mata bath oonee');
  
  // Wait for translation to appear
  await waitForTranslation(page, sinhalaOutput);
  
  await expect(sinhalaOutput).toContainText('මට බත් ඕනේ');

  await singlishInput.clear();
  
  // Wait a moment for the output to clear (real-time update)
  await page.waitForTimeout(1000);

  await expect(sinhalaOutput).toBeEmpty();
});
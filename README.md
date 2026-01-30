# Singlish to Sinhala Translator - Automated Testing Suite

## 📋 Project Overview

This project contains automated end-to-end tests for the **Swift Translator** web application (https://www.swifttranslator.com/), which converts Singlish (Romanized Sinhala) text to Sinhala Unicode script. The test suite is built using **Playwright** testing framework.

**Student ID:** IT23384392  
**Name:** THILAKARATHNA T.R.P.  
**Module:** IT Project Management (IT3040)  

---

## 🛠️ Tech Stack

- **Testing Framework:** [Playwright](https://playwright.dev/) 
- **Language:** JavaScript 
- **Node.js:** Required for running tests
- **Browsers:** Chromium, Firefox, WebKit (Safari)

---

## 📁 Project Structure

```
Assignment-1/
├── tests/
│   └── singlish.spec.js      # Main test specification file
├── playwright-report/        # HTML test reports
├── test-results/             # Test artifacts and screenshots
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
├── git-repoLink.txt          # Repository link
└── README.md                 # This file
```

---

## 🧪 Test Categories

### Positive Functional Test Cases (24 Scenarios)

| Test ID | Description |
|---------|-------------|
| Pos_Fun_0001 | Simple sentence conversion |
| Pos_Fun_0002 | Compound sentence conversion |
| Pos_Fun_0003 | Complex sentence conversion |
| Pos_Fun_0004 | Interrogative (Question) conversion |
| Pos_Fun_0005 | Imperative (Command) conversion |
| Pos_Fun_0006 | Positive sentence conversion |
| Pos_Fun_0007 | Negative sentence conversion |
| Pos_Fun_0008 | Common Greeting conversion |
| Pos_Fun_0009 | Polite Request conversion |
| Pos_Fun_0010 | Highly Polite Phrasing |
| Pos_Fun_0011 | Informal Phrasing |
| Pos_Fun_0012 | Daily Expression (Feeling) |
| Pos_Fun_0013 | Frequent Collocation |
| Pos_Fun_0014 | Repeated Words (Emphasis) |
| Pos_Fun_0015 | Past Tense |
| Pos_Fun_0016 | Future Tense |
| Pos_Fun_0017 | Plural Usage |
| Pos_Fun_0018 | English Technical Terms |
| Pos_Fun_0019 | Mixed English/Singlish Sentence |
| Pos_Fun_0020 | English Abbreviations |
| Pos_Fun_0021 | Currency and Numbers |
| Pos_Fun_0022 | Date Format |
| Pos_Fun_0023 | Punctuation Handling |
| Pos_Fun_0024 | Long Paragraph (Stress Test) |

### Negative/Robustness Test Cases (10 Scenarios)

| Test ID | Description |
|---------|-------------|
| Neg_Fun_0001 | Joined words without spaces (Stress Test) |
| Neg_Fun_0002 | Another joined word variation |
| Neg_Fun_0003 | Mixed joined input |
| Neg_Fun_0004 | Invalid Special Characters |
| Neg_Fun_0005 | Empty Input Handling |
| Neg_Fun_0006 | Numeric strings without context |
| Neg_Fun_0007 | URL Handling |
| Neg_Fun_0008 | Chat Shorthand (Unsupported) |
| Neg_Fun_0009 | Gibberish Input |
| Neg_Fun_0010 | HTML Tag Injection |

### UI Test Scenarios (2 Scenarios)

| Test ID | Description |
|---------|-------------|
| Pos_UI_0001 | Real-time output update behavior |
| Pos_UI_0002 | Clear Input Functionality |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Assignment-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run tests on specific browser
```bash
# Chromium only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# WebKit (Safari) only
npx playwright test --project=webkit
```

### Run specific test file
```bash
npx playwright test tests/singlish.spec.js
```

### Run tests matching a pattern
```bash
npx playwright test -g "Pos_Fun_0001"
```

---

## 📊 Test Reports

### View HTML Report
After running tests, view the detailed HTML report:
```bash
npx playwright show-report
```

The report will open in your default browser showing:
- Test results summary
- Pass/Fail status for each test
- Screenshots for failed tests
- Execution time details

---

## ⚙️ Configuration

The `playwright.config.js` file contains the test configuration:

- **Test Directory:** `./tests`
- **Parallel Execution:** Enabled
- **Retries:** 2 on CI, 0 locally
- **Reporter:** HTML
- **Trace:** Collected on first retry

### Supported Browsers
- Chromium (Desktop Chrome)
- Firefox (Desktop Firefox)
- WebKit (Desktop Safari)

---

## 📝 Test Application Details

**Target Application:** [Swift Translator](https://www.swifttranslator.com/)

**Functionality Tested:**
- Singlish to Sinhala Unicode transliteration
- Real-time text conversion
- Various sentence types and grammatical structures
- Edge cases and error handling
- UI responsiveness


---

## 🤝 Contributing

This project is part of an academic assignment. For any queries, please contact the author.

---


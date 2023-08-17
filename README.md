## Playwright End-to-End (E2E) Demo for Blaze Website with Page Object Model (POM) Design
This repository contains a small end-to-end (E2E) flow demonstration using Playwright, a powerful Node.js library for browser automation. The focus of this project is to showcase the implementation of the Page Object Model (POM) design pattern in automating scenarios on the Blaze website.

### Features:

__E2E Flow:__ Experience a complete end-to-end flow of interacting with the Blaze website, including navigation, form submission, and verification of results.

__Page Object Model (POM):__ Explore how the Page Object Model design pattern is utilized to organize and encapsulate page-specific elements and actions, promoting maintainability and reusability of code.

__Modular Structure:__ Discover a well-structured codebase that separates concerns into different modules, making it easy to enhance, modify, and extend test scenarios.

### Setup and Usage:
__Prerequisites:__ Ensure you have Node.js and npm (Node Package Manager) installed on your system.

__Clone the Repository:__ Clone this repository to your local machine using git clone https://github.com/awais-manzoor110/Playwirght_E2E_flow.git.

__Install Dependencies:__ Navigate to the project directory and run npm install to install the necessary dependencies.

__Install Playwrights:__ Navigate to the project directory and run
    
    npm init playwright@latest

__Configure Tests:__ Open the configuration file (playwright.config.js) and update it with the required settings such as the browser type and other options.

__Run Tests:__ Execute the E2E tests by running the command npm test. Sit back and watch as Playwright automates the scenarios based on the POM design.

    npx playwright test demoblaze-e2e-flow.spec.js --project=chromium --headed
### Contribution:
Contributions are welcome! If you have ideas to enhance the demo, improve the code structure, or add more test scenarios, feel free to fork the repository and submit a pull request.
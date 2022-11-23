
/* eslint-disable no-undef */
beforeEach(() => {
  cy.viewport("macbook-15");
  Cypress.Cookies.defaults({
    preserve: "auth",
  });
});

class CommonKeyword {
  static input(selector, text) {
    cy.get(selector).click({ force: true }).type(text);
  }

  static edit(selector, text) {
    cy.get(selector).clear().type(text);
  }

  static clickAndVerifyText(selector, text) {
    cy.get(selector).contains(text).click({ force: true });
  }
  static verifyContainRedirectUrl(url) {
    cy.url().should("contain", url);
  }

  static verifyRedirectUrl(url) {
    cy.url().should("eq", url);
  }

  static clickWithNonForce(selector) {
    cy.get(selector).click({ force: false });
  }

  static click(selector) {
    cy.get(selector).click({ force: true });
  }

  static clickFirst(selector) {
    cy.get(selector).first().click({ force: true });
  }

  static beVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  static notBeVisible(selector) {
    cy.get(selector).should("not.be.visible");
  }

  static beVisibleText(selector, text) {
    cy.get(selector).contains(text).should("be.visible");
  }

  static notBeVisibleText(selector, text) {
    cy.get(selector).contains(text).should("not.be.visible");
  }

  static verifyText(text) {
    cy.get("html").should("contain", text);
  }

  static verifyTextIsNotVisible(text) {
    cy.get("html").contains(text).should("not.exist");
  }

  static clear(selector) {
    cy.get(selector).clear({ force: true });
  }

  static verifyElementText(selector, text) {
    cy.get(selector).invoke("text").should("eq", text);
  }

  static verifyElementContainText(selector, text) {
    cy.get(selector).invoke("text").should("contain", text);
  }

  static verifyElementContainTextValue(selector, text) {
    cy.get(selector).should("contain.value", text);
  }

  static verifyElementIsVisibleText(selector) {
    cy.get(selector).invoke("text").should("exist");
  }

  static verifyElementIsVisible(selector) {
    cy.get(selector).should("exist");
  }

  static verifyElementIsNotVisible(selector) {
    cy.get(selector).should("not.exist");
  }

  static verifyElementTextIsVisible(selector, text) {
    cy.get(selector).contains(text).should("exist");
  }

  static verifyElementTextIsNotVisible(selector, text) {
    cy.get(selector).contains(text).should("not.exist");
  }

  static verifyElementIsDisabled(selector) {
    cy.get(selector).should("be.disabled");
  }

  static verifyElementIsNotDisabled(selector) {
    cy.get(selector).should("not.be.disabled");
  }

  static clickText(text) {
    cy.contains(text).click({ force: true });
  }

  static scrollpage(selector) {
    cy.get(selector).scrollIntoView({ duration: 500 });
  }

  static downloadFilePDF(selector, fileName) {
    cy.wait(300);
    cy.fixture(fileName).then((fileContent) => {
      cy.get(selector).attachFile({
        fileContent,
        fileName,
        mimeType: "application/pdf",
      });
    });
  }

  static isFileDownloaded(downloadedFilename) {
    cy.readFile(downloadedFilename, "binary", { timeout: 10000 }).should((buffer) => {
      expect(buffer.length).to.be.gt(100);
    });
  }

  static uploadImages(selector, fileName) {
    cy.wait(1000);
    cy.fixture(fileName).then((fileContent) => {
      cy.get(selector).attachFile({
        fileContent,
        fileName,
        mimeType: "application/png",
      });
    });
  }

  static uploadFile(selector, fileName) {
    cy.wait(300);
    cy.fixture(fileName).then((fileContent) => {
      cy.get(selector).attachFile({
        fileContent,
        fileName,
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        encoding: "utf8",
      });
    });
  }

  static uploadFileAssetClass(selector, fileName) {
    cy.wait(300);
    cy.get(selector).selectFile(fileName, { force: true });
  }
}

export default CommonKeyword;
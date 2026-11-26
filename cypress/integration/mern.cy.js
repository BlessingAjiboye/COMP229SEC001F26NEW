describe("mernSEC001", () => {
  it("tests mernSEC001", () => {
    cy.viewport(626, 585);
    cy.visit("http://localhost:3000/");
    cy.get("a:nth-of-type(2) > button").click();
    cy.visit("http://localhost:3000/shops/all");
    cy.visit("http://localhost:3000/");
    cy.get("a:nth-of-type(3) > button").click();
    cy.get("a:nth-of-type(5) > button").click();
    cy.get("a:nth-of-type(6) > button").click();
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(9)").click();
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(8)").click();
    cy.get("div.MuiGrid-root > div:nth-of-type(2) svg").click();
    cy.get("#root > div > div a:nth-of-type(1) > button").click();
    cy.get("#email").click();
    cy.get("#email").type("fair@yahoo.com");
    cy.get("#password").click();
    cy.get("#password").type("fairfair");
    cy.get("#root > div > div button").click();
    cy.get("a:nth-of-type(4) > button").click();
    cy.get("#root > div > div a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(8)").click();
    cy.get("#root > div > div > div.MuiGrid-root > div:nth-of-type(1) path").click();
    cy.get("#root > div > div a:nth-of-type(1) > button").click();
    cy.get("div > div > a > button").click();
    cy.get("a:nth-of-type(1) svg").click();
    cy.get("a:nth-of-type(6) > button").click();
    cy.get("header > div > button").click();
    cy.get("a:nth-of-type(5) > button").click();
    cy.get("a:nth-of-type(6) > button").click();
    cy.get("a:nth-of-type(1) svg").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMBNBOBPBQBRBSBTBUBVBWBXBYBZBaBbBcBdBeBfBgBBhBB

import BasePage from "./../pages/BasePage";

describe("IFrame", () => {
  it("working with IFrame test", async () => {
    await BasePage.openUrl("https://practice.automationbro.com/iframe-sample/");

    //access the iframe
    const iFrame = await $("iframe#advanced_iframe");
    //switch to IFrame
    await browser.switchToFrame(iFrame);
    await expect($("#site-logo")).toExist();
    //switch to Parent Frame
    await browser.switchToParentFrame();
    const h1Element = await $("h1.tg-page-header__title");
    const textOfH1Element = await h1Element.getText();
    expect(textOfH1Element).toEqual("IFrame Sample");
  });
});

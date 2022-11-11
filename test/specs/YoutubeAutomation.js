import BasePage from "./../pages/BasePage";

describe("youtube", () => {
  xit("should search the user input and check for channelName", async () => {
    await BasePage.openUrl("https://www.youtube.com/");
    const searchInputElement = await BasePage.searchInputField;
    const valueToSearch = "xqc";
    await searchInputElement.addValue(valueToSearch);
    const searchBtn = await BasePage.searchBtn;
    await searchBtn.click();
    //check for url change
    const expectedUrl = "https://www.youtube.com/results?search_query=xqc";
    await expect(browser).toHaveUrl(expectedUrl);

    //check for channelName
    const channelNameElement = await BasePage.channelName;
    const channelName = await channelNameElement.getText();
    expect(channelName).toEqual("xQc");
  });

  it("should open two tabs and search user input in both tabs and channelName in both tabs ", async () => {
    await BasePage.openUrl("https://www.youtube.com/");
    const searchInputElement = await BasePage.searchInputField;
    let valueToSearch = "xqc";
    await searchInputElement.addValue(valueToSearch);
    const searchBtn = await BasePage.searchBtn;
    await searchBtn.click();
    //check for url change
    let expectedUrl = "https://www.youtube.com/results?search_query=xqc";
    await expect(browser).toHaveUrl(expectedUrl);

    //check for channelName
    const channelNameElement = await BasePage.channelName;
    let channelName = await channelNameElement.getText();
    expect(channelName).toEqual("xQc");

    await browser.newWindow("https://www.youtube.com/", {
      windowName: "Youtube window",
      windowFeature: "width=300,height=150,resizable,scrollbars=yes,status=1",
    });
    valueToSearch = "ishowspeed";
    await searchInputElement.addValue(valueToSearch);
    await searchBtn.click();
    //check for url change
    expectedUrl = "https://www.youtube.com/results?search_query=ishowspeed";
    await expect(browser).toHaveUrl(expectedUrl);

    //check for channelName

    channelName = await channelNameElement.getText();
    expect(channelName).toEqual("IShowSpeed");

    const handles = await browser.getWindowHandles();
    //await browser.switchToWindow(handles[1]);
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    await browser.closeWindow();
  });
});

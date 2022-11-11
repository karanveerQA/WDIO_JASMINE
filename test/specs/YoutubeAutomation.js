import BasePage from "./../pages/BasePage";

describe("youtube", () => {
  it("should search the user input and show the results", async () => {
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
});

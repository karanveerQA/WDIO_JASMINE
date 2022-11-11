class BasePage {
  openUrl(url) {
    return browser.url(url);
  }
  get searchInputField() {
    return $("input#search");
  }

  get searchBtn() {
    return $("button#search-icon-legacy");
  }

  get channelName() {
    return $(
      "div#info>ytd-channel-name#channel-title>div#container>div#text-container>yt-formatted-string#text"
    );
  }
}

export default new BasePage();

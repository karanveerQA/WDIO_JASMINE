class ReelsPage {
  get reelsImg() {
    return $$("div._aajy");
  }

  get likeBtn() {
    return $("span>button");
  }

  get unlikeBtn() {
    return $("span>button");
  }

  get closeBtn() {
    return $('svg[aria-label="Close"]');
  }
}

export default new ReelsPage();

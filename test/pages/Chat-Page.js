class ChatPage {
  get personToChat() {
    return $('//div[text()="Karanveer Singh"]');
  }

  get chatInput() {
    return $(`textarea[placeholder="Message..."]`);
  }

  get sendBtn() {
    return $(`//button[@type="button" and text()="Send"]`);
  }
}

export default new ChatPage();

class MyCustomConnector {
  constructor({ queueBotSays, caps }) {
    this.queueBotSays = queueBotSays
    this.caps = caps
  }

  UserSays(msg) {
    const requestObject = this._msgToRequestObject(msg)
    const responseObject = this._doRequestChatbotApi(requestObject)
    const botMsg = this._responseObjectToMsg(responseObject)
    console.log(`MyCustomConnector: ${msg.messageText} => ${botMsg.messageText}`)
    setTimeout(() => this.queueBotSays(botMsg), 0)
  }

  _msgToRequestObject(msg) {
    // TODO convert generic msg to chatbot specific requestObject
    return msg.messageText
  }

  _doRequestChatbotApi(requestObject) {
    // TODO request the Chatbot API using chatbot specific requestO0bject
    // and return bot response as responseObject
    let today = new Date()
    if (requestObject.match(RegExp(/what time/i)) || requestObject.match(RegExp(/when/i)) || requestObject.match(RegExp(/what day/i))) return `Today is ${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    if (requestObject.match(RegExp(/how much/i))) {
      if (requestObject.match(RegExp(/apple/i))) return 'The price is 3.'
      return 'The price is 5.'
    }
    if (requestObject.match(RegExp(/how to pay/i))) return 'Cash'
    return 'What can I do for you?'
  }

  _responseObjectToMsg(msg) {
    // TODO convert chatbot specific requestObject to generic msg
    return { messageText: msg }
  }
}

module.exports = {
  PluginVersion: 1,
  PluginClass: MyCustomConnector
}

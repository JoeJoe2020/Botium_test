const Capabilities = {
  CONNECTOR_AS_FILE_RESPONSE: 'CONNECTOR_AS_FILE_RESPONSE'
}


class ConnectorAsFile {
  // 2: catching a new 'caps' parameter.
  // you got all capabillities here, not just the ones belonging to your connector
  constructor ({ queueBotSays, caps }) {
    this.queueBotSays = queueBotSays
    this.caps = caps
  }

  Validate () {
    // 3: Checking its validity
    if (!this.caps[Capabilities.CONNECTOR_AS_FILE_RESPONSE]) throw new Error('CONNECTOR_AS_FILE_RESPONSE capability required')
    return Promise.resolve()
  }

  UserSays (msg) {
    // 4: Using it 
    const botMsg = { messageText: this.caps[Capabilities.CONNECTOR_AS_FILE_RESPONSE] }
    setTimeout(() => this.queueBotSays(botMsg), 0)
  }
}

module.exports = {
  PluginVersion: 1,
  PluginClass: ConnectorAsFile
}
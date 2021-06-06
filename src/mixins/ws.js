export default {
  data() {
    return {
      host: 'localhost:9090',
      uname: '',
      msgList: [
        {
          type: '', // sys 系统消息  ||  user 用户消息
          uname: '',
          content: ''
        }
      ]
    }
  },
  methods: {
    websocketInit() {
      return new WebSocket('ws://' + this.host + '/ws/join?uname=' + this.uname)
    },
    onMessasge(socket) {
      socket.onmessage = function(event) {
        var data = JSON.parse(event.data)
        console.log('onmessage', data)

        switch (data.Type) {
          case 0: // JOIN
            if (data.User === this.uname) {
              this.msgList.push({
                type: 'sys',
                uname: '',
                content: 'You joined the chat room.'
              })
            } else {
              this.msgList.push({
                type: 'sys',
                uname: '',
                content: data.uname + ' joined the chat room.'
              })
            }
            break
          case 1: // LEAVE
            this.msgList.push({
              type: 'sys',
              uname: '',
              content: data.uname + ' leaved the chat room.'
            })
            break
          case 2: // MESSAGE
            this.msgList.push({
              type: 'user',
              uname: data.uname,
              content: data.content
            })

            break
        }
      }
    }
  }
}

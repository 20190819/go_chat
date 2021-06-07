export default {
  data() {
    return {
      host: 'localhost:9090',
      uname: '',
      msgList: [
        // {
        //   type: '', // sys 系统消息  ||  user 用户消息
        //   uname: '',
        //   content: ''
        // }
      ]
    }
  },
  methods: {
    websocketInit() {
      return new WebSocket('ws://' + this.host + '/ws/join?uname=' + this.uname)
    },
    onMessage(socket) {
      const that = this
      socket.onmessage = function(event) {
        var data = JSON.parse(event.data)
        console.log('onmessage data', data)
        switch (data.Type) {
          case 0: // JOIN
            if (data.User === that.uname) {
              that.msgList.push({
                type: 'sys',
                uname: '',
                content: '欢迎 【' + that.uname + '】加入 goChat 聊天室...'
              })
            } else {
              that.msgList.push({
                type: 'sys',
                uname: '',
                content: '欢迎 【' + data.User + '】加入 goChat 聊天室...'
              })
            }
            break
          case 1: // LEAVE
            that.msgList.push({
              type: 'sys',
              uname: '',
              content: data.User + ' 离开了聊天室.'
            })
            break
          case 2: // MESSAGE
            that.msgList.push({
              type: 'user',
              uname: data.User,
              content: data.Content
            })

            break
        }
        console.log('msglist>>>', that.msgList)
      }
    }
  }
}

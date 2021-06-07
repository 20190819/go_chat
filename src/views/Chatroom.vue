<template>
  <div class="room">
    <div class="left">
      <div>
        <div class="block">
          <el-avatar :size="70" :src="circleUrl"></el-avatar>
        </div>
      </div>
      <div>
        <el-input
          clearable
          placeholder="请输入消息内容"
          v-model="msg"
          class="input-with-select"
        >
          <el-button
            type="success"
            slot="append"
            icon="el-icon-message"
            @click="sendMessage"
            >发送</el-button
          >
        </el-input>
      </div>
    </div>
    <el-card size="small" class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>聊天记录</span>
      </div>
      <div
        v-for="(item, index) in msgList"
        :key="index"
        class="text item msg-line"
      >
        <strong v-if="item.uname">{{ item.uname + ': ' }}</strong
        ><span>{{ item.content }}</span>
      </div>
    </el-card>
    <el-button
      class="w100 leave"
      size="small"
      type="danger"
      @click="$router.push('/')"
      >离开</el-button
    >
  </div>
</template>

<script>
import ws from '@/mixins/ws'
export default {
  mixins: [ws],
  data() {
    return {
      ws: null,
      circleUrl:
        'https://cdn.learnku.com//uploads/communities/sNljssWWQoW6J88O9G37.png!/both/100x100',
      msg: ''
    }
  },
  mounted() {
    this.uname = this.$route.query.uname
    // 实例化 websocket
    this.ws = this.websocketInit()
    // 监听消息
    this.onMessage(this.ws)
  },
  methods: {
    sendMessage() {
      if (!this.msg) {
        return this.$message.info('消息不能为空')
      }
      console.log('send user msg >>>', this.msg)
      this.ws.send(this.msg)
    }
  }
}
</script>

<style lang="scss" scoped>
.w100 {
  width: 100%;
}
.room {
  background-color: #409eff;
  padding: 20px;
  width: 400px;
  margin: auto;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 50px;
  border-radius: 10px;
  .el-avatar {
    margin-bottom: 20px;
  }
  ::v-deep .el-card {
    text-align: left;
    height: 580px;
    overflow-y: scroll;
    .msg-line {
      margin-bottom: 20px;
    }
  }
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 20px;
}
::v-deep .el-input-group__append {
  background-color: #67c23a;
  color: #fff;
}
.leave {
  margin-top: 20px;
}
</style>

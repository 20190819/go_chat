<template>
  <div class="room">
    <div class="left">
      <div>
        <div class="block">
          <el-avatar :size="80" :src="circleUrl"></el-avatar>
        </div>
      </div>
      <div>
        <el-input
          placeholder="请输入消息内容"
          v-model="form.msg"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-message">发送</el-button>
        </el-input>
      </div>
    </div>
    <el-card size="small" class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>聊天记录</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
import ws from '@/mixins/ws'
export default {
  mixins: [ws],
  data () {
    return {
      circleUrl:
        'https://cdn.learnku.com//uploads/communities/sNljssWWQoW6J88O9G37.png!/both/100x100',
      form: {
        msg: ''
      }
    }
  },
  mounted () {
    // this.uname = this.$routes.params('uname')
    console.log('uname', this.$route.query.uname)
  }
}
</script>

<style lang="scss" scoped>
.room {
  background-color: #dcdfe6;
  padding: 20px;
  width: 30%;
  margin: auto;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  .el-card {
    text-align: left;
  }
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>

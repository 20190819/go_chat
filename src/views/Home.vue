<template>
  <div>
    <div class="welcome">
      <h2>golang + vue + websocket</h2>
      <el-card class="box-card" shadow="never">
        <el-form ref="form" :model="form" label-width="60px">
          <el-form-item label="手机号">
            <el-input
              class="w100"
              clearable
              size="small"
              v-model="form.uname"
            ></el-input>
          </el-form-item>
          <el-form-item label="技术">
            <el-select
              class="w100"
              size="small"
              v-model="form.tech"
              placeholder="请选择技术"
            >
              <el-option label="WebSocket" value="WebSocket"></el-option>
            </el-select>
          </el-form-item>
          <el-button class="w100" size="small" type="primary" @click="login"
            >进入聊天室</el-button
          >
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        uname: '13500000001',
        tech: 'WebSocket'
      }
    }
  },
  methods: {
    login () {
      this.form.uname = Number(this.form.uname)
      console.log('login', this.form)
      this.$http.post('http://localhost:9090/join', this.form).then(res => {
        console.log('login res', res.data)
        if (res.data.Code === 0) {
          this.$message.success('操作成功')
          this.$nextTick(function () {
            this.$router.push({
              path: '/chatroom',
              query: { uname: this.form.uname }
            })
          })
        } else {
          this.$message.error('操作异常')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  background-color: #dcdfe6;
  padding: 20px;
  text-align: center; /*让div内部文字居中*/
  border-radius: 10px;
  width: 400px;
  height: 280px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.w100 {
  width: 100%;
}
</style>

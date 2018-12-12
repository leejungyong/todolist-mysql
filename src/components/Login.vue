<template>
  <el-row class="content">
    <el-col
      :xs="24"
      :sm="{span:6,offset:9}"
    >
      <span class="title">
        欢迎登陆
      </span>
      <el-row>
        <el-input
          class="input"
          v-model="account"
          placeholder="账号"
          type="text"
        ></el-input>
        <el-input
          class="input"
          v-model="password"
          placeholder="密码"
          type="password"
        >
        </el-input>
        <el-button
          class="btn"
          type="primary"
          @click="loginToDo"
        >登录</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    loginToDo() {
      let data;
      this.$http
        .get("/api/getValue", {
          params: { user_name: this.account, password: this.password }
        })
        .then(res => {
          // console.log(res.data);
          if (res.data.length != 0) this.$router.push("/todolist");
          else {
            alert("用户名或密码错误");
          }
        });
    }
  }
};
</script>

<style scoped>
.content {
  padding: 16px;
}
.title {
  font-size: 28px;
}

.input {
  margin: 12px 0;
}

.btn {
  width: 100%;
  margin-top: 12px;
}
</style>

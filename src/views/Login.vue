<template>
  <div class="login">
    <canvas id="canvas"></canvas>
    <div class="form-wrap">
      <h1>Login</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="demo-ruleForm"
      >
        <el-form-item prop="userName">
          <el-input
            type="text"
            v-model="ruleForm.userName"
            placeholder="请输入用户名"
            autocomplete="off"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            show-password
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>

        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
import { LOGIN } from "../api/user";
let timer;
export default {
  name: "Login",
  data() {
    let { verifyPassword, verifyUserName } = this;
    return {
      ruleForm: {
        userName: "",
        password: "",
      },
      rules: {
        password: [{ validator: verifyPassword, trigger: "blur" }],
        userName: [{ validator: verifyUserName, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 生成数字雨函数
    startCanvas() {
      let canvas = document.getElementById("canvas");
      let ctx;
      let w = window.innerWidth;
      let h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      let size = 16;
      let color = "";
      let column = Math.ceil(w / size);
      let yArr = []; // y坐标数组
      // 初始归零
      for (let i = 0; i < column; i++) {
        yArr[i] = 0;
      }
      if (canvas.getContext("2d")) {
        ctx = canvas.getContext("2d");
        if (timer) timer = clearInterval(timer);
        timer = setInterval(draw, 30);
      }

      function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#00FF00";
        ctx.font = size + "px Simsun";
        for (let i = 0; i < column; i++) {
          let randomNum = Math.floor(Math.random() * 10);
          ctx.fillText(randomNum, i * size, yArr[i] * size);
          if (yArr[i] * size > h || Math.random() > 0.95) {
            yArr[i] = 0;
          }
          yArr[i]++;
        }
      }
    },
    verifyPassword(rule, value, callback) {
      let reg = /^\w{4,16}$/;
      if (value.trim() === "") {
        callback(new Error("内容不能为空!"));
      }
      if (reg.test(value)) {
        callback();
      } else {
        callback(
          new Error("密码输入有误 请输入4至16位 (数字、字母、下划线) 组合密码")
        );
      }
    },
    verifyUserName(rule, value, callback) {
      let reg = /^\w{4,16}$/;
      if (value.trim() === "") {
        callback(new Error("内容不能为空!"));
      }
      if (reg.test(value)) {
        callback();
      } else {
        callback(
          new Error(
            "用户名输入有误 请输入4至16位 (数字、字母、下划线) 组合用户名"
          )
        );
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { userName, password } = this.ruleForm;
          LOGIN(this.ruleForm).then((res) => {
            if (res.code === 200) {
              sessionStorage.token = res.token;
              this.$message.success("登陆成功!");
              this.$router.push({ path: "/" });
            } else {
              this.$message.error(res.msg);
            }
          });
        } else {
          return false;
        }
      });
    },
  },
  mounted() {
    this.startCanvas();
    this.$nextTick(() => {
      window.addEventListener("resize", this.startCanvas, false);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.startCanvas);
    timer = clearInterval(timer);
  },
};
</script>
<style scoped lang="scss">
@keyframes heart {
  from {
    transform: translateY(-2%);
    box-shadow: 0px 0px 20px lime;
  }
  to {
    transform: translateY(4%);
    box-shadow: 0px 0px 100px lime;
  }
}
@keyframes flicker {
  from {
    box-shadow: 0px 0px 0px lime;
  }
  to {
    box-shadow: 0px 0px 10px lime;
    border-color: #00ff00;
  }
}

.login {
  #canvas {
    position: fixed;
    left: 0;
    top: 0;
  }
  .form-wrap {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -200px 0 0 -250px;
    background: transparent;
    border-radius: 15px;
    z-index: 9;
    // animation: heart 1.3s ease-in-out 0s infinite alternate;
    border: 1px solid white;
    &:hover {
      animation-play-state: paused; //暂停动画
    }
    h1 {
      font-size: 48px;
      margin: 50px auto;
      text-align: center;
    }
    .demo-ruleForm {
      width: 70%;
      margin: 0 auto;
      text-align: left;
    }
  }
  /deep/ {
    .el-form-item__label {
      color: white;
    }
    .el-button {
      width: 100%;
      display: block;
      margin: 35px auto 0;
      background: transparent;
      border-color: white;
      &:hover {
        border-color: #00ff00;
        color: #00ff00;
      }
    }
    .el-input__inner {
      background: transparent;
      color: white;
    }

    .el-input__inner:focus {
      color: #00ff00;
      // animation: flicker 1.3s ease-in-out 0s infinite alternate;
      box-shadow: 0px 0px 10px lime;
      border-color: #00ff00;
    }
    .el-input__inner:focus + .el-input__prefix {
      color: #00ff00;
    }
    .el-input__inner:focus ~ .el-input__suffix {
      .el-input__icon.el-icon-view.el-input__clear {
        color: #00ff00;
      }
    }
  }
}
</style>

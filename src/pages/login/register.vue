<template>
    <div class="register">
        <div class="top">
            <router-link to="/login">
                <span class="iconfont">&#xe634;</span>
                <span>注册</span>
            </router-link>
        </div>
        <div class="myForm">
            <form action="">
                <ul>
                    <li>
                        <label for="userName" class="iconfont">&#xe634;</label>
                        <input type="text" placeholder="请输入您的账号" id="userName">
                    </li>
                    <li>
                        <label for="passWord" class="iconfont">&#xe634;</label>
                        <input type="text" placeholder="请输入您的密码" id="passWord">
                    </li>
                    <li>
                        <label for="confirm" class="iconfont">&#xe634;</label>
                        <input type="text" placeholder="确认密码" id="confirm">
                    </li>
                </ul>
                <div class="code">
                    <input type="text" placeholder="输入验证码">
                    <input type="button" value="获取验证码">
                </div>
                <div class="keepMsg">
                    <input type="checkbox" id="keepMsg"><label for="keepMsg">我已阅读并同意服务条款</label>
                </div>
                <button class="registerBtn">注册</button>
                <div class="login">
                    <router-link to="/login">已有账号？<span>直接登录</span></router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>
    .register {
        width: 750px;
        height: 1320px;
        background: url("../.././images/login/login.jpg");
        background-size: 100% auto;
        padding: 0 20px;
        box-sizing: border-box;
        position: relative;
    }

    .register .top {
        width: inherit;
        height: 96px;
        line-height: 96px;
    }

    .register .top a {
        font-size: 30px;
        color: #ffffff;
    }

    .register .top a >>> .iconfont {
        font-size: 34px;
        margin-right: 10px;
    }

    .register .myForm {
        width: 710px;
        height: auto;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 50%;
        margin-top: -50%;
    }

    .register .myForm form {
        width: 600px;
        height: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .register .myForm form ul {
        width: 600px;
        height: auto;
    }

    .register .myForm form ul li {
        width: 600px;
        height: 86px;
        margin: 30px 0;
        background-color: rgba(192, 217, 232, .5);
    }

    .register .myForm form ul li >>> .iconfont {
        font-size: 55px;
        color: #ffffff;
        line-height: 86px;
        vertical-align: middle;
        margin: 0 20px;
    }

    .register .myForm form ul li input {
        width: auto;
        height: 86px;
        line-height: 86px;
        font-size: 32px;
        color: #ffffff;
        background: none;
    }

    .register .myForm form .code{
        width: 600px;
        height: 86px;
        line-height: 86px;
        display: flex;
        justify-content: space-around;
    }

    .register .myForm form .code input{
        width: 250px;
        height: inherit;
        border-radius: 43px;
        text-align: center;
        font-size: 24px;
        color: #ffffff;
    }

    .register .myForm form .keepMsg{
        margin: 45px 0;
        color: #ffffff;
    }

    .register .myForm form button{
        width: 484px;
        height: 86px;
        background-color: #087ccd;
        color: #ffffff;
        border-radius: 43px;
        margin-bottom: 30px;
    }
    .register .myForm form .login a{
        color: #ffffff;
        font-size: 22px;
    }

    .register .myForm form .login span{
        text-decoration: underline;
        margin-left: 5px;
    }

</style>

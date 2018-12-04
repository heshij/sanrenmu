<template>
    <div class="login">
        <div class="top">
            <router-link to="/User">
                <span class="iconfont">&#xe643;</span>
                <span>登录</span>
            </router-link>
        </div>
        <div class="headerPic">
            <div class="image">
                <img src="../.././images/user/userCat.png" alt="">
            </div>
        </div>
        <div class="myForm">
            <form action="">
                <ul>
                    <li>
                        <label for="userName" class="iconfont">&#xe63c;</label>
                        <input
                                type="text"
                                placeholder="请输入您的账号"
                                id="userName"
                                v-model="account"
                        >
                    </li>
                    <li>
                        <label for="passWord" class="iconfont">&#xe7b8;</label>
                        <input
                                type="password"
                                placeholder="请输入您的密码"
                                id="passWord"
                                v-model="password"
                        >
                    </li>
                </ul>
                <div class="sets">
                    <!--<div class="keepPsw">
                        <input type="checkbox" id="keepPsw"><label for="keepPsw">记住密码</label>
                    </div>-->
                    <check-box-login></check-box-login>
                    <span>忘记密码</span>
                </div>
                <div class="loginBtn">
                    <input
                            type="button"
                            value="登录"
                            class="login"
                            @click.prevent="toLogin()"
                    >
                    <router-link to="/register">
                        <input type="button" value="注册" class="register">
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import CheckBoxLogin from "./CheckBoxLogin";
    export default {
        name: "login",
        components:{
            CheckBoxLogin
        },
        data(){
            return{
                "account":"",
                "password":""
            }
        },
        methods:{
            toLogin(){
                if(this.account!==""){
                    let xhrLogin = new XMLHttpRequest();
                    xhrLogin.withCredentials = true;
                    xhrLogin.onreadystatechange = () =>{
                        if (xhrLogin.readyState === 4 && xhrLogin.status === 200) {
                            let value = JSON.parse(xhrLogin.responseText).code;
                            if(value === "100"){
                                this.$router.push('/User');
                            }else {
                                console.log("账号或密码错误！！")
                            }
                        }
                    };
                    xhrLogin.open("POST", "http://api.imecho.cn/dodiapi/login.php", true);
                    xhrLogin.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhrLogin.send("account=" + this.account + "&password=" + this.password);
                }else {
                    console.log("账号或密码不能为空！！")
                }

            }
        }
    }
</script>

<style scoped>
    .login {
        width: 750px;
        height: 1320px;
        background: url("../.././images/login/login.jpg");
        background-size: 100% auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .login .top {
        width: inherit;
        height: 96px;
        line-height: 96px;
    }

    .login .top a {
        font-size: 30px;
        color: #ffffff;
    }

    .login .top a >>> .iconfont {
        font-size: 34px;
        margin-right: 10px;
    }

    .login .headerPic {
        width: inherit;
        height: 360px;
        position: relative;
    }

    .login .headerPic .image {
        width: 196px;
        height: 196px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        text-align: center;
        line-height: 196px;
    }

    .login .headerPic .image img {
        width: 162px;
        height: 162px;
        border-radius: 50%;
    }

    .login .myForm {
        width: 710px;
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .login .myForm form {
        width: 600px;
        height: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .login .myForm form ul {
        width: 600px;
        height: auto;
    }

    .login .myForm form ul li {
        width: 600px;
        height: 86px;
        margin: 30px 0;
        background-color: rgba(192, 217, 232, .5);
    }

    .login .myForm form ul li >>> .iconfont {
        font-size: 55px;
        color: #ffffff;
        line-height: 86px;
        vertical-align: middle;
        margin: 0 20px;
    }

    .login .myForm form ul li input {
        width: auto;
        height: 86px;
        line-height: 86px;
        font-size: 32px;
        color: #ffffff;
        background: none;
    }

    .login .sets {
        width: 600px;
        height: 86px;
        line-height: 86px;
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        color: #ffffff;
    }

    .login .myForm form .loginBtn {
        width: 600px;
        height: auto;
        text-align: center;
    }

    .login .myForm form .loginBtn input {
        width: 480px;
        height: 85px;
        border-radius: 42px;
        font-size: 48px;
        color: #ffffff;
        border: 2px solid #087ccd;
        box-sizing: border-box;
        background: none;
    }

    .login .myForm form .loginBtn .login {
        background-color: #087ccd;
        margin-bottom: 30px;
    }
</style>

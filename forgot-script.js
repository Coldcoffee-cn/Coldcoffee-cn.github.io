// 模拟获取验证码按钮
const getCodeBtn = document.getElementById('getCodeBtn');
let countdown = 60;
// 在点击按钮时，首先获取用户输入的手机号，并验证它是否符合 11 位数字的格式
// !phone || !/^\d{11}$/.test(phone)：判断手机号是否为空或不符合 11 位数字的正则表达式。
// 如果不符合，弹出提示框，提示用户输入有效的手机号
// 如果手机号有效，弹出提示框：“验证码已发送到您的手机号！”
getCodeBtn.addEventListener('click', function() {
    const phone = document.getElementById('phone').value;
    if (!phone || !/^\d{11}$/.test(phone)) {
        alert("请输入有效的手机号！");
        return;
    }
    // 模拟发送验证码请求
    alert("验证码已发送到您的手机号！");
    // 启动倒计时
    getCodeBtn.disabled = true;
    // 按钮禁用,使用 setInterval 函数每秒钟更新按钮文本为倒计时的秒数，直到倒计时结束
    const interval = setInterval(function() {
        if (countdown > 0) {
            getCodeBtn.textContent = `${countdown}秒后重发`;
            countdown--;
        } else {
            clearInterval(interval);
            getCodeBtn.textContent = '获取验证码';
            getCodeBtn.disabled = false;
            countdown = 60;  // 倒计时结束后，恢复按钮文本为“获取验证码”，并重新启用按钮
        }
    }, 1000);
});
// 提交表单
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();  // 防止表单默认提交,避免页面刷新

    const phone = document.getElementById('phone').value;
    const code = document.getElementById('code').value;
//验证手机号是否为空或者不为11位数字
    if (!phone || !/^\d{11}$/.test(phone)) {
        alert("请输入有效的手机号！");
        return;
    }
    //验证验证码是否为空
    if (!code) {
        alert("请输入验证码！");
        return;
    }
    alert("密码已经初始化,1秒后回到登录界面");
    window.location.href='login.html';
});
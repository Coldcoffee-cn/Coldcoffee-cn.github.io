//获取登录按钮元素
const Loginbtn=document.getElementById("loginbtn");
const Backbtn=document.getElementById("backbtn");
//为登录按钮添加点击事件监听器
Loginbtn.addEventListener('click',function (){
    const account=document.getElementById("account").value;
    const password=document.getElementById("password").value;
    if (!account||!password) {
        alert("请输入账号或密码！");
        return;
    }
    //弹出提示框
    alert('登录成功,关闭弹窗1秒后自动跳转到主界面');
    //一秒后自动跳转到开始界面
    setTimeout(function (){
        window.location.href='index.html';
    },1000);
});
// 为取消按钮添加点击事件监听器
Backbtn.addEventListener('click', function () {
    // 跳转到开始界面
    window.location.href='index.html';
});
window.addEventListener('load', function () {
    //正则表达式
    const reg = /^1[3456789]\d{9}$/;
    const regqq = /^[1-9]\d{4,}$/; // 10000
    const regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    const regmsg = /^\d{6}$/;
    const regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    //获取元素
    const tel = document.querySelector('#tel');
    const qq = document.querySelector('#qq');
    const nc = document.querySelector('#nc');
    const msg = document.querySelector('#msg');
    const pwd = document.querySelector('#pwd');
    const surepwd = document.querySelector('#surepwd');
    //封装函数 传入参数
    function Reg(ele, regs) {
        ele.addEventListener('blur', function () {
            if (regs.test(this.value)) {
                //console.log('sss');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 不好意思，您输入不正确';
            }
        })
    }
    //确认密码 事件
    surepwd.addEventListener('blur', function () {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次输入不一致';
        }
    })
    //调用函数
    Reg(tel, reg);
    Reg(qq, regqq);
    Reg(nc, regnc);
    Reg(msg, regmsg);
    Reg(pwd, regpwd);
})
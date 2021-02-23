window.addEventListener('load', function () {
    //声明一个全局变量
    let that;
    class Tab {
        constructor(id) {
            //赋值给全局变量
            that = this;
            //获取new 赋值的元素
            this.main = document.querySelector(id);
            //获取按钮元素
            this.add = this.main.querySelector('.tabadd');
            //li 的父亲 获取ul 
            this.ul = this.main.querySelector('.fisrstnav ul:first-child');
            //获取 section的父元素
            this.Fsection = this.main.querySelector('.tabscon');
            //调用函数
            this.init();
        }
        //初始化内容 绑定事件
        init() {
            //调用动态获取的li section元素的事件 一旦获取新的元素就调用
            this.update();
            //添加事件
            this.add.onclick = this.addTab;
            //初始化tab事件
            for (let i = 0; i < this.lis.length; i++) {
                //获取索引
                this.lis[i].index = i;
                //绑定切换事件
                this.lis[i].onclick = this.toggleTab;
                //  点击按钮删除事件 调用函数
                this.remove[i].onclick = this.removeTab;
                //
                this.spans[i].ondblclick = this.editTab;
                //
                this.section[i].ondblclick=this.editTab;
            }
        }
        // 获取所有的 li section 由于是动态获取 所以要不断重新获取 调用函数
        update() {
            this.lis = this.main.querySelectorAll('li');
            this.section = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-guanbi');
            this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        }
        //切换
        toggleTab() {
            //排他思想
            that.clearClass();
            //切换类
            this.className = 'liactive';
            that.section[this.index].className = 'conactive';
        };
        //清除
        clearClass() {
            for (let i = 0; i < this.lis.length; i++) {
                //清除Tab 栏
                this.lis[i].className = '';
                this.section[i].className = '';
            }
        }
        //添加
        addTab() {
            //在添加之前清空tab栏
            that.clearClass();
            //随机数
            var random = Math.random();
            //创建li
            const li = ' <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
            // 创建section 元素
            const section = '<section class="conactive">测试' + random + '</section>';
            //插入li
            that.ul.insertAdjacentHTML('beforeend', li);
            //把元素添加父元素后面
            that.Fsection.insertAdjacentHTML('beforeend', section);
            //再次调用 新获取的元素绑定事件
            that.init();
        };
        //删除
        removeTab(e) {
            //阻止冒泡
            e.stopPropagation();
            //获取父元素的索引
            let index = this.parentNode.index;
            //删除
            that.lis[index].remove();
            that.section[index].remove();
            //被选中了的 返回
            if (document.querySelector('.liactive')) return;
            //当我删除选中Li 的时候 让前一个索引自减
            index--;
            //手动调用点击事件 不需要鼠标触发
            //&& 当-1的时候 为false不触发 手动调用点击事件
            that.lis[index] && that.lis[index].click();
        };
        //
        editTab() {
            //获取原本的value
            const values = this.innerHTML;

            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            this.innerHTML = '<input type="text" />';
            //获取span 的第一个元素
            const input = this.children[0];
            //原本的值
            input.value = values;
            //失去焦点
            input.onblur = function () {
                this.parentNode.innerHTML = this.value;
            }
        };
    }
    const str = new Tab('#tab');
})
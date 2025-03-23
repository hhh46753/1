// 游戏2的JavaScript代码
document.addEventListener('DOMContentLoaded', function() {
    // 获取页面元素
    const clickButton = document.getElementById('click-button');
    const scoreElement = document.getElementById('score');
    
    // 初始化分数
    let score = 0;
    
    // 添加点击事件
    clickButton.addEventListener('click', function() {
        // 增加分数
        score++;
        
        // 更新显示的分数
        scoreElement.textContent = score;
        
        // 添加按钮点击效果
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 100);
        
        // 根据分数显示不同的祝贺信息
        if (score === 10) {
            alert('恭喜你获得10分！');
        } else if (score === 50) {
            alert('太棒了！你已经获得50分！');
        } else if (score === 100) {
            alert('哇！100分！你真是点击大师！');
        }
    });
});

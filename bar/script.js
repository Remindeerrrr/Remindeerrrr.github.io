// 分类切换功能
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.category-tab');
    const categories = document.querySelectorAll('.menu-category');
    
    // 为每个标签添加点击事件
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 获取目标分类的ID
            const targetCategory = this.getAttribute('data-category');
            
            // 移除所有标签的active类
            tabs.forEach(t => t.classList.remove('active'));
            // 为当前点击的标签
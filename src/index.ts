// 1. 使用 Vite 的 ?inline 魔法，直接把 CSS 变成纯文本字符串
import cssContent from './index.scss?inline';

$(() => {
  // 2. 原生 jQuery 暴力注入：直接创建一个 <style> 标签塞进酒馆的脑袋里
  const $style = $('<style>').html(cssContent).appendTo('head');

  // 3. 关闭脚本时，自动拔掉这个标签
  $(window).on('pagehide', () => {
    $style.remove();
  });
});

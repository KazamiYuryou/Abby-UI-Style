// 1. 使用 Vite 的 ?inline 魔法，获取纯 CSS 字符串
import cssContent from './index.scss?inline';

$(() => {
  // 2. 明确指令：将样式精准打入最外层的主网页 head，杜绝任何 iframe 作用域混淆
  const $style = $('<style>').html(cssContent).appendTo(window.parent.document.head);

  // 3. 关闭脚本时，自动清理
  $(window).on('pagehide', () => {
    $style.remove();
  });
});

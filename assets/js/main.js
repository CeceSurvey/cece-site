/* ============================================================
   测策 · 官网交互脚本
   纯原生 JS，零依赖
   ============================================================ */
(function () {
  'use strict';

  /* 移动端菜单开关 */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* 下载页 Tab 切换（安卓 / iOS） */
  var tabs = document.querySelectorAll('.download-tabs button');
  var panels = document.querySelectorAll('.download-panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-target');
      tabs.forEach(function (t) { t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
      panels.forEach(function (p) {
        p.hidden = p.id !== target;
      });
    });
  });

  /* 导航当前页高亮（按文件名匹配） */
  var page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html?$/, '');
  var navLinks = document.querySelectorAll('[data-nav]');
  navLinks.forEach(function (a) {
    if (a.getAttribute('data-nav') === page) {
      a.classList.add('is-active');
      if (a.getAttribute('aria-current') === null) {
        a.setAttribute('aria-current', 'page');
      }
    }
  });
})();

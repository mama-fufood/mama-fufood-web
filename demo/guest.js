// 由 demo/tools/build.py 從 demo/tools/build.py 產生,不要手改。
// 示範版:不用 Google 帳號也能進後台。登入後(出現「管理後台」入口)就藏起來。
(function () {
  var b = document.getElementById("demo-guest");
  var admin = document.getElementById("admin-link");
  function sync() { b.hidden = !!window.mffApi.token() && !admin.hidden; }
  b.hidden = !!window.mffApi.token();
  new MutationObserver(sync).observe(admin, { attributes: true });
  b.onclick = function () { window.mffApi.setToken("demo"); location.reload(); };
})();

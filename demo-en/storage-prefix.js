// 由 demo/tools/build.py 從 demo/tools/build.py 產生,不要手改。
// 示範版跟正式版同一個網域,localStorage 是共用的:這一頁所有的 key 加上前綴,
// 讀不到正式版的管理員 session,也不會寫進正式版的資料。一定要在其他 script 之前載入。
(function () {
  var PREFIX = "demo-en:";
  var S = Storage.prototype;
  var getItem = S.getItem, setItem = S.setItem, removeItem = S.removeItem;
  S.getItem = function (k) { return getItem.call(this, PREFIX + k); };
  S.setItem = function (k, v) { return setItem.call(this, PREFIX + k, v); };
  S.removeItem = function (k) { return removeItem.call(this, PREFIX + k); };
})();

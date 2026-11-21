// legal.html:依網址的 ?doc= 顯示使用者條款、隱私權政策或判斷邏輯說明(和 App 內建的是同一份內容)。
// 放在獨立的檔案,不寫在 HTML 裡:這一頁的內容安全政策不允許行內 script。
(function () {
  const docs = { terms: "使用者條款", privacy: "隱私權政策", judgement_guide: "判斷邏輯說明" };
  const doc = new URLSearchParams(location.search).get("doc");
  const box = document.getElementById("content");
  if (!docs[doc]) { box.innerHTML = '<p>找不到這份文件。<a href="index.html">回首頁</a></p>'; return; }
  document.title = docs[doc] + " - 媽媽記副食品";
  document.getElementById("title").textContent = docs[doc];
  fetch("legal/" + doc + ".md", { cache: "no-cache" })
    .then((r) => { if (!r.ok) throw new Error(); return r.text(); })
    .then((md) => { box.innerHTML = window.renderMarkdown(md); })
    .catch(() => { box.innerHTML = "<p>載入失敗，請重新整理。</p>"; });
})();

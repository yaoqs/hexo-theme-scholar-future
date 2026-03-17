//复制加版权
// Escape string for safe HTML insertion
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
jQuery(document).on("copy", function (e) {
  var selected = window.getSelection();
  var selectedText = selected.toString().replace(/\n/g, "<br>"); // Solve the line breaks conversion issue 处理换行转换的问题
  var copyFooter =
    "<br>---------------------<br>著作权归作者所有。<br>" +
    "商业转载请联系作者获得授权，非商业转载请注明出处。<br>" +
    "<br>作者：" +
    document.getElementById("author").innerText +
    "<br>复制时间: " +
    Date.now() +
    "<br>原文链接：" +
    escapeHtml(document.location.href) +
    "<br>© 版权声明：本文为「" +
    document.getElementById("author").innerText +
    "」的原创文章，遵循 CC 4.0 BY-NC-SA 版权协议，转载请附上原文出处链接及本声明。";

  var copyHolder = $("<div>", {
    id: "temp",
    html: selectedText + copyFooter,
    style: { position: "absolute", left: "-99999px" },
  });

  $("body").append(copyHolder);
  selected.selectAllChildren(copyHolder[0]);
  window.setTimeout(function () {
    copyHolder.remove();
  }, 0);
});

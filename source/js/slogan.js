var sel = $("#slogan > ul > li");
//console.log(sel[Math.floor(Math.random()*sel.length)].style)//
//setInterval(lunbo,30000);
function lunbo() {
  arguments.callee.pre = arguments.callee.pre || 0;
  sel[arguments.callee.pre].style.display = "none";
  arguments.callee.pre = Math.floor(Math.random() * sel.length);
  sel[arguments.callee.pre].style.display = "inline-block";
  setTimeout(lunbo, 30000);
}
lunbo();

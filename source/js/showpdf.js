/*!
* showPDF JavaScript Library v1.0.0
* http://github.com/yaoqs
*
* Copyright 2022-, yaoqs[LordYao]
* Released under the MIT license
*
* 3rd Party Library:
* 1.pdf.js 
* 
*
* Date: 2022-03-01
*/
var container, pageDiv;
function showPDF(label,url) {
  var loadingTask =pdfjsLib.getDocument(url);
  loadingTask.promise.then((pdf)=>{    
    //console.log(pdf.numPages);
    container = document.getElementById(label);
    //console.log(pdf)
    for (var i = 1; i<= pdf.numPages; i++) {
      renderPDF(pdf,i);
      }
    })
}
function renderPDF(pdf,num) {
    pdf.getPage(num).then((page) => {
      var scale = 1.5;
      var viewport = page.getViewport({scale:scale,});
      pageDiv = document.createElement('div');
      pageDiv.setAttribute('id', "page-"+page.pageNumber);
      pageDiv.setAttribute('style', 'position: relative');
      container.appendChild(pageDiv);
      var canvas = document.createElement('canvas');
      pageDiv.appendChild(canvas);
      var context = canvas.getContext('2d');
      var outputScale=window.devicePixelRatio||1;
      canvas.width=Math.floor(viewport.width*outputScale);
      canvas.height=Math.floor(viewport.height*outputScale);
      canvas.style.width=Math.floor(viewport.width)+"px";
      canvas.style.height=Math.floor(viewport.height)+"px";
      var transform=outputScale!==1?[outputScale,0,0,outputScale,0,0]:null;
      var renderContext={
        canvasContext:context,
        transform:transform,
        viewport:viewport
      };
      let line=document.createElement("p");
      line.innerHTML="<center>-------"+num+"-------</center>";
      pageDiv.appendChild(line);
      page.render(renderContext);
  });
}

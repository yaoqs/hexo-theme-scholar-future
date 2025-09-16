$(document).ready(function () {
    var body = $('body'),
        contentSelector = 'post-content',
        toolbarId = 'sideToolbar',
        catalogId = 'sideCatalog',
        catalogListId = 'sideCatalog-catalog',
        catalogBtnId = 'sideCatalogBtn',
        toTopId = 'sideToolbar-up',
        toolbarHtml = `<div id="toTop" style="zoom:0;"></div>
                       <div id="${toolbarId}" style="display:none;">
                           <div class="sideCatalogBg" id="${catalogId}">
                               <div id="${catalogId}-sidebar">
                                   <div class="sideCatalog-sidebar-top"></div>
                                   <div class="sideCatalog-sidebar-bottom"></div>
                               </div>
                               <div id="${catalogListId}">
                                   <ul class="nav" style="width:300px;zoom:1"></ul>
                               </div>
                           </div>
                           <a href="javascript:void(0);" id="${catalogBtnId}" class="sideCatalogBtnDisable"></a>
                       </div>`,
        catalogListHtml = '',
        scrollThreshold = 20,
        h2Count = 0,
        h3Count = 0,
        h4Count = 0,
        headers, headerLimit = 13,
        showH3 = true,
        showH4 = true,
        content = $('#' + contentSelector);

    if (content.length === 0) {
        return;
    }

    body.append(toolbarHtml);
    headers = content.find('h2').add(content.find('h3')).add(content.find('h4'));

    if (headers.length === 0) {
        return;
    }

    if (headers.length > headerLimit) {
        showH4 = false;
        var h2s = content.find('h2');
        var h3s = content.find('h3');
        if (h2s.length + h3s.length > headerLimit) {
            showH3 = false;
        }
    }

    headers.each(function (index) {
        var header = $(this),
            headerElement = header[0];

        var title = header.text(),
            text = header.text(),
            headerId = headerElement.id

        var lenLimit = 16;
        if (headerElement.localName === 'h2') {
            h2Count++;
            h3Count = 0;
            if (lenStat(text) > lenLimit) text = cut_str(text, lenLimit) + "...";
            catalogListHtml += `<li class="h2Offset"><a href="#${headerId}" title="${title}">${h2Count} ${text}</a></li>`;
        } else if (headerElement.localName === 'h3') {
            h3Count++;
            h4Count = 0;
            if (showH3) {
                if (lenStat(text) > lenLimit) text = cut_str(text, lenLimit) + "...";
                catalogListHtml += `<li class="h3Offset"><a href="#${headerId}" title="${title}">${h2Count}.${h3Count} ${text}</a></li>`;
            }
        } else if (headerElement.localName === 'h4') {
            h4Count++;
            if (showH4) {
                if (lenStat(text) > lenLimit) text = cut_str(text, lenLimit) + "...";
                catalogListHtml += `<li class="h4Offset"><a href="#${headerId}" title="${title}">${h2Count}.${h3Count}.${h4Count} ${text}</a></li>`;
            }
        }
    });

    $('#' + catalogListId + '>ul').html(catalogListHtml);

    body.data('spy', 'scroll');
    body.data('target', '.sideCatalogBg');
    $('body').scrollspy({
        target: '.sideCatalogBg'
    });

    var sideCatalog = $('#' + catalogId);
    var sideToolbar = $('#' + toolbarId);

    $('#' + catalogBtnId).on('click', function () {
        if ($(this).hasClass('sideCatalogBtnDisable')) {
            sideCatalog.css('visibility', 'hidden');
        } else {
            sideCatalog.css('visibility', 'visible');
        }
        $(this).toggleClass('sideCatalogBtnDisable');
    });

    $('#' + toTopId).on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // 初始显示目录
    sideToolbar.css('display', 'block');

    // 回到顶部按钮
    $("<div id='toTop' style='zoom:0;'></div>").appendTo(body).on("click", function () {
        $("body, html").animate({ scrollTop: 0 }, 150);
    });
});


/**
 *  获得字符串长度，区分中英文
 */
function lenStat(target){
    var strlen=0; //初始定义长度为0
    var txtval = $.trim(target);
    for(var i=0;i<txtval.length;i++){
     if(isChinese(txtval.charAt(i))==true){
      strlen=strlen+2;//中文为2个字符
     }else{
      strlen=strlen+1;//英文一个字符
     }
    }
    strlen=Math.ceil(strlen/2);//中英文相加除2取整数
    return strlen;
}

function isChinese(str){  //判断是不是中文
    var reCh=/[u00-uff]/;
    return !reCh.test(str);
}

/**
 *  截取字符串，区分中英文
 */
function cut_str(str, len){
    var char_length = 0;
    for (var i = 0; i < str.length; i++){
        var son_str = str.charAt(i);
        isChinese(son_str) ? char_length += 1 : char_length += 0.5;
        if (char_length >= len){
            var sub_len = char_length == len ? i+1 : i;
            return str.substr(0, sub_len);
        }
    }
}
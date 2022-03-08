/*!
* zanzhu_yaoqs JavaScript Library v1.0.0
* http://github.com/yaoqs
*
* Copyright 2021-, yaoqs[LordYao]
* Released under the MIT license
*
* 3rd Party Library:
* 1.Jquery
* 2.Jquery.qrcode
*
* Date: 2021-10-01
*/
function addScript(url){
    var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',url);
    //document.getElementsByTagName('head')[0].appendChild(script);
    document.head.appendChild(script);
}

function loadStyle(url){
    var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(link);
    }

function addCSS(cssText){
    var style = document.createElement('style'),  //创建一个style元素
        head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
    style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
    if(style.styleSheet){ //IE
        var func = function(){
            try{ //防止IE中stylesheet数量超过限制而发生错误
                style.styleSheet.cssText = cssText;
            }catch(e){

            }
        }
        //如果当前styleSheet还不能用，则放到异步中则行
        if(style.styleSheet.disabled){
            setTimeout(func,10);
        }else{
            func();
        }
    }else{ //w3c
        //w3c浏览器中只要创建文本节点插入到style元素中就行了
        var textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style); //把创建的style元素插入到head中    
}

/*<!-- 中文转码 -->*/
function qcodetochar(str){
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

function ChangClassAtoB(id,A,B)
{
    if(window.jQuery){
        $("#"+id).removeClass(A).addClass(B)
    }
    else{
        document.getElementById(id).removeClass(A).addClass(B)
    }
    
}

class RewardImg
{
    #name;
    #qrimg;
    constructor(json)
    {
        this.name=json.name;
        this.qrimg=json.qrimg;                
    }
    init()
    {
        var ddiv=document.createElement("div");
        ddiv.innerText=this.name
        ddiv.textContent=this.name;
        ddiv.id=this.name;
        var img=document.createElement("img");
        img.src=this.qrimg;
        img.alt=this.name;
        ddiv.appendChild(img)
        return ddiv;
    }
    
    
}
class RewardLnk
{
    #name;
    #link;
    constructor(json)
    {
        this.name=json.name;
        this.link=json.link;
        this.description=json.desc;
    }
    init()
    {
        var ddiv=document.createElement("div");
        ddiv.innerText=this.description
        ddiv.textContent=this.description;
        ddiv.id=this.name;
        var link=document.createElement("a");
        link.href=this.link;
        link.innerText=this.name;
        link.textContent=this.name;
        ddiv.appendChild(document.createElement("br"));
        ddiv.appendChild(link);
        

        
        return ddiv;
    }
    
    async make_qrcode()
    {        
        $("#"+this.name).qrcode({width: 173,height: 173,text: this.link});//指定二维码大小  
    }
    
}
class Rewardtip{
    constructor(tip)
    {        
        var zanzhu=document.createElement("div")
        zanzhu.id="zanzhu_yaoqs"; 
        $("html")[0].appendChild(zanzhu);
        $("#"+zanzhu.id).css("position","fixed").css("float","right").css("top","38.2%").css("width","10px").css("right","0").css("box-sizing", "content-box")
        
        var donate_sider=document.createElement("div");
        donate_sider.id="donate_sider";
        donate_sider.className="donate_sider";
        donate_sider.onmouseover=function(){
            $("#donate_sider")[0].className="donate_sider_large";
            $("#donate_sider_large")[0].className="donate_sider_show";
        };
        donate_sider.onmouseout=function(){
            $("#donate_sider")[0].className="donate_sider";
            $("#donate_sider_large")[0].className="donate_sider_hide";
        };
        zanzhu.appendChild(donate_sider)
        var donate_sider_large=document.createElement("div");
        donate_sider_large.id="donate_sider_large";
        donate_sider_large.className="donate_sider_hide";
        $(donate_sider_large).appendTo(donate_sider);

        var elementid="donate_sider_large";
        this.tiptext=tip.tiptext;
        ((text,t)=>{                    
            t.innerText=text;
            t.textContent=text;
            ((text,t,p)=>{
                t.innerText="More";
                t.textContent="More";
                t.href=text;
                t.style.float="right";
                p.appendChild(t);
            })(tip.more,document.createElement("a"),t);
            $("#"+elementid)[0].appendChild(t);
        })(this.tiptext,document.createElement("div"));
        
        var btn=document.createElement("div")
        btn.id="donate_btn";
        $("#"+elementid)[0].appendChild(btn);

        var content=document.createElement("div")
        content.id="donate_content";                
        $("#"+elementid)[0].appendChild(content);

        this.list=tip.list;
        this.link=tip.link;
        

        var arr=[];
        arr["tip"]=document.createElement("div")
        $("<a href='https://yaoqs.github.com/' alt='yaoqs'>LordYao</a>").appendTo(arr["tip"])
        $("#"+content.id)[0].appendChild(arr["tip"])
        var j=document.createElement("ul")  

        this.list.forEach(element => {
            //console.log(element)
            var li=document.createElement("li")
            li.innerText=element.name;
            li.textContent=element.name;                    
            li.onmouseenter=function(){
                ChangClassAtoB(this.firstChild.nodeValue,"donate_sider_hide","donate_sider_show")
                //$("#"+this.firstChild.nodeValue).removeClass("donate_sider_hide").addClass("donate_sider_show")
            }
            
            li.onmouseleave=function(){
                ChangClassAtoB(this.firstChild.nodeValue,"donate_sider_show","donate_sider_hide")
                //$("#"+this.firstChild.nodeValue).removeClass("donate_sider_show").addClass("donate_sider_hide")
            }

            $(li).appendTo(j)
            
            
            arr[element.name]=new RewardImg(element).init();                   
            
            $("#"+content.id)[0].appendChild(arr[element.name])
            $("#"+element.name).addClass("donate_sider_hide")                      
        });
        

                        
        this.link.forEach(element => {
            var li=document.createElement("li")
            li.innerText=element.name;
            li.textContent=element.name;                    
            li.onmouseenter=function(){  
                ChangClassAtoB(this.firstChild.nodeValue,"donate_sider_hide","donate_sider_show")                      
                //$("#"+this.firstChild.nodeValue).removeClass("donate_sider_hide").addClass("donate_sider_show")
            }
            
            li.onmouseleave=function(){
                ChangClassAtoB(this.firstChild.nodeValue,"donate_sider_show","donate_sider_hide")
                //$("#"+this.firstChild.nodeValue).removeClass("donate_sider_show").addClass("donate_sider_hide")
            }

            $(li).appendTo(j)

            var a=new RewardLnk(element);
            arr[element.name]=a.init();
            
            $("#"+content.id)[0].appendChild(arr[element.name])
            $("#"+element.name).addClass("donate_sider_hide")
            a.make_qrcode();
            
        });
        $("#"+btn.id)[0].appendChild(j)                
    }
}

//==============
/*<style>
  #zanzhu
  {
      position: fixed;
      float:right;
      top: 38.2%;
      width:10px;
      right: 0;
      box-sizing: content-box;
      
  }
  
  .donate_sider
  {
      background-color: red;
      width: 10px;
      height: 30px;
  }
  .donate_sider_large
  {
      width: 300px; 
      margin-left: -290px;
      height: 300px;
      
      background-color: whitesmoke;
      padding:0;    
  }
  .donate_sider_hide
  {
      display: none;
  }
  .donate_sider_show
  {
      display: block;
  }
  #donate_btn{
      
      height:300px;
      float: left;
  }
  #donate_btn ul{
      margin-left: 0mm;
      vertical-align: middle;
  }
  #donate_btn ul li{
      
      border: 1px solid #000;
      vertical-align: middle;
      text-align: center; 
      -ms-text-size-adjust: auto;
      border-radius: 12px; 
      font-size: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 5px;
      padding-right: 5px;
      font-family: 微软雅黑,Tahoma,Verdana,Arial;
  }
  #donate_content{
      width: 200px;
      height: 280px;
      background-color: white;
      /*margin-left: 80px;* /
      float: right;
      
  }
  </style>*/
$(function(){
    if(!window.jQuery){
        alert("Need 3rd Party Lib:1.Jquery 2.Jquery.qrcode!");
        addScript("https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js");
        addScript("https://cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js")
        !window.jQuery && document.write(unescape('%3Cscript type="text/javascript" src="/lib/jquery-3.4.1.min.js"%3E%3C/script%3E'));
        !window.jQuery && document.write(unescape('%3Cscript type="text/javascript" src="/lib/jquery.qrcode.min.js"%3E%3C/script%3E'));
    }
    let zanzhu=" #zanzhu { position: fixed; float: right; top: 38.2%; width: 10px; right: 0; box-sizing: content-box; }";
    let donate_sider=".donate_sider { background-color: red; width: 10px; height: 30px;  }";
    let donate_sider_large=".donate_sider_large { width: 300px;  margin-left: -290px; height: 300px; background-color: whitesmoke; padding:0;  }";
    let donate_sider_hide=".donate_sider_hide {display: none;}";
    let donate_sider_show=".donate_sider_show {display: block;}";
    let donate_btn="#donate_btn{ height:300px;float: left;}";
    let donate_btn_ul="#donate_btn ul{margin-left: 0mm;vertical-align: middle;font-family: 微软雅黑,Tahoma,Verdana,Arial;}";
    let donate_btn_ul_li="#donate_btn ul li{\
        border: 1px solid #000;\
        vertical-align: middle;\
        text-align: center; \
        -ms-text-size-adjust: auto;\
        border-radius: 12px; \
        font-size: 10px;\
        padding-top: 10px;\
        padding-bottom: 10px;\
        padding-left: 5px;\
        padding-right: 5px;\
    }";
    let donate_content="#donate_content{\
        width: 200px;\
        height: 280px;\
        background-color: white;\
        /*margin-left: 80px;*/\
        float: right;\
        }";
    var css= zanzhu+donate_sider+donate_sider_large+
    donate_sider_hide+donate_sider_show+
    donate_btn+donate_btn_ul+donate_btn_ul_li+
    donate_content;
    
    addCSS(css);
}());
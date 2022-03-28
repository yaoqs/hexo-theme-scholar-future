//import Toc from './toc'
import './zanzhu_yaoqs.js'

function ChangClassAtoB(id,A,B)
{
    if(window.jQuery){
        $("#"+id).removeClass(A).addClass(B)
    }
    else{
        document.getElementById(id).removeClass(A).addClass(B)
    }
    
}
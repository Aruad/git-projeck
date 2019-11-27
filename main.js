function toStr(el=new Array()){
    var ret='';
    el.forEach(function(e) {
        ret+=e;
        //console.log(e);
    });
    return ret;
}
//
var t=document.getElementById('target');
var a = new Array('*');
//var b = new Array();
t.innerHTML+=a[0]+'<br>';
while(a.length<33){
    //b = b.concat(' ');
    a = a.concat('*' , '*');
    t.innerHTML+=(toStr(a)/*+toStr(b)*/+'<br>');
};
// Попытка 2 не удалась, ошибка в коде
/*var t2=document.getElementById('target2');
function printEl(c, h=21){
    var tree=new Array();
    tree.fill(' ', h-1/c%2, c);
    tree.fill('*', c);
    console.log(tree);
    document.write(toStr(tree)+'<br>');
}
var c = 1;
do{
    printEl(c);
    c++
}while(c<11);*/

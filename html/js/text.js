///**
// * Created by Administrator on 2014/11/27.
// */
//function saveStorage(id){
// var data = document.getElementById(id).value;
// var time = new Date().getTime();
// localStorage.setItem(time,data);
// alert("�����Ѿ������棡");
// loadStorage('msg');
//}
//function loadStorage(id){
// var reselt = '<table border="1">';
// for(var i=0;i<localStorage.length;i++)
// {
// var key = localStorage.key(i);
// var value = localStorage.getItem(key);
// var date = new Date();
// date.setTime(key);
// var datestr = date.toGMTString();
// reselt += '<tr><td>'+'���ǵ�'+i+'������</td><td>'+value+'</td><td>'+datestr+'</td></tr>';
// }
// reselt += '</table>';
// var target = document.getElementById(id);
// target.innerHTML = reselt;
//}
//function clearStorage(id){
// localStorage.clear();
// alert("�����Ѿ����ɹ�ɾ����");
// loadStorage('msg');
//}
/**
* Created by Administrator on 2014/11/27.
*/
function saveStorage(id){
var data = document.getElementById(id).value;
var time = new Date().getTime();
localStorage.setItem(time,data);
alert("�����Ѿ������棡");
loadStorage('msg');
}
function loadStorage(id){
var reselt = '<table border="1">';
for(var i=0;i<localStorage.length;i++)
{
var value = localStorage.getItem( localStorage.key(i));
var date = new Date();
date.setTime( localStorage.key(i));
var datestr = date.toGMTString();
reselt += '<tr><td>'+'���ǵ�'+i+'������</td><td>'+ localStorage.getItem( localStorage.key(i))+'</td><td>'+datestr+'</td></tr>';
}
reselt += '</table>';
var target = document.getElementById(id);
target.innerHTML = reselt;
}
function clearStorage(id){
localStorage.clear();
alert("�����Ѿ����ɹ�ɾ����");
loadStorage('msg');
}


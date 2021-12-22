/**
 * Created by Administrator on 2018/1/31 0031.
 */

//初始化,这里是原来的
// var APP_ID = 'FqPJXxCv1gabu5JMeHrved6l-gzGzoHsz';
// var APP_KEY = 'Eevd4W01afMxVUg9s2pDDTr4';

// AV.init({
//     appId: APP_ID,
//     appKey: APP_KEY
// });
AV.init({
  appId: "yqzSiRS4adOtl1IE2jvEBxsC-gzGzoHsz",
  appKey: "sLwxvuc5C2s9XFSzeo18MRff",
//   serverURLs: "api-ucloud.leancloud.cn",//最新版的里面这一行不用加，不然有错误！！
});
// console.log("运行到这里没有报错！！")

// //创建TestObject表
// var TestObject = AV.Object.extend('TestObject');

// //在表中创建一行数据
// var testObject = new TestObject();

// //数据内容是words: 'Hello World!'
// //如果保存成功，则运行alert('')
// testObject.save({
//    words: 'Hello World!'
// }).then(function(object) {
//    alert('LeanCloud Rocks!');
// })




//下面暂时先注释!!!
var query = new AV.Query('Message3');
query.find()
    .then(
        function (messages) {
            let array = messages.map((item)=> item.attributes)
            array.forEach((item)=>{
                let li = document.createElement('li')
                li.innerText = `${item.name}: ${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
             })
        }
    )


let myForm = document.querySelector('#postMessage')

myForm.addEventListener('submit',function(e){
    console.log(e)
    e.preventDefault()
    let name = myForm.querySelector('input[name=name]').value
    let content = myForm.querySelector('input[name=content]').value
    
    var Message = AV.Object.extend('Message3');
    var message = new Message();

    message.save({
        'name': name,
        'content':content
    }).then(function(object){
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''//清空表单里面的内容
        console.log(object)
    })
})







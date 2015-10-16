/*

  插件运转逻辑：

    spy.js 植入每个页面之中，可以获取每个页面的任意内容，使用 sendRequest 和 app.js 通讯

    app.js 在插件悬框中运行，可以通过 onRequest 接收 spy.js 发送过来的任意数据

    这里主要获取的是当前 Tab 的 url 信息

*/

//First 第一步：为每个激活页面插入 spy.js
window.onload = function(){
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'spy.js', allFrames: false}
      );
    });
  });
};

//Second 第二步：监听来自 spy.js 发送过来的消息
//  获取到当前tab的url，通过 getQrcode 转化为图片，输出到悬框之中
chrome.extension.onRequest.addListener(function(msg,tabInfo){
  getQrcode(tabInfo.url).then(function(img){
    img.style.width = "100%";
    window.document.body.appendChild(img);
  });
});

//处理方法【公共】dependencs: qrcode.js
function getQrcode(url){
  var success = function(){};
  var elem = document.createElement('div');
  window.x = elem;
  var qrcode = new QRCode(elem, {
            width : 300,//设置宽高
            height : 300,
            correctLevel: 1,//容错指标，从低到高 1 0 3 2
            success: function(img){
              success(img);
            }
        });
    qrcode.makeCode(url);

  return {
    then: function(callback){
      success = callback;
    }
  }
}
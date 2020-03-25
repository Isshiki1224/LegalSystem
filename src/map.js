export function MP(ak) {  
    return new Promise(function (resolve, reject) {  
      window.init = function () {  
        resolve(BMap)  
      }  
      var script = document.createElement('script')
      script.type = 'text/javascript'  
      script.src = 'http://api.map.baidu.com/api?v=2.0&ak=4Wdhtd74HWQuVKmtoH01dtlmd14UWsi8&callback=init' 
      script.onerror = reject 
      document.head.appendChild(script)  
    })  
  }  

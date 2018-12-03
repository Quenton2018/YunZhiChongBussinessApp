;(function(doc, win) {
	// 750为设计用的宽度, 比如它以iphone6标准(宽750)
  // 此时, 按照设计稿的尺寸写就可以了
  // 如: 设计稿为100px, 那么就写1rem(100 / 100), 这样就写100px就写1rem 
  var docEl = doc.documentElement,
  		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  	// 缩放/旋转设备检测函数
 		recalc = function() {
	    var clientWidth = docEl.clientWidth;
	    if (!clientWidth) return;
	    if (!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && clientWidth > 1024) {
	        docEl.style.fontSize = '100px';
	    }else{
	        docEl.style.fontSize = clientWidth / 7.5 + 'px';
	    }
  	};
  recalc();

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
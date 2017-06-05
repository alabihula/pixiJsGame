var giftObj = function() {
	
	//定义x周距中心偏移量
	var centerX = 400;
	
	
	var y_all = 370;//水平线距离屏幕下框距离
	var y_top = 190;//水平线距离上边距离
	var center_x = function(a,h) {
		//a -初始中心店距离最近树的距离
		var b = 100;//初始中心点距离视觉焦点的距离
		return (a*(b+h)/b).toFixed(2);
	}
	
	//随机范围
	var mathNum = function(min,max) {
		return Math.round(Math.random()*max+min);
	}
	this.num = 0;
	this.mathSpeed = mathNum(1,1);
	
	this.initX = center_x(Math.round(Math.random()*1)==1?mathNum(1,40)*-1:mathNum(1,40),0);;
	
	this.opt = {
		maxWidth:60,
	}
	
	this.get_initY = function() {
		return y_top;
	}
	
	this.get_x = function(h) {
		return centerX+parseFloat(center_x(this.initX,h));
	}
	this.get_y = function() {
//		370/7*i+190+(10-Math.round(Math.random()*19+1));
		return y_all/this.opt.trees_num*this.opt.row+y_top;
	}
	this.get_scale = function(nowH) {
		return (nowH/(y_all))*0.6+0.1;
	}
}

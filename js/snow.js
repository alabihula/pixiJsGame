var treeObj = function(dir,row,col,trees_num) {
	//		    tree.x = 400-center_x(a_arr[0],370/7*i);
//			tree.y = 370/7*i+190+(10-Math.round(Math.random()*19+1));
	
	//定义x周距中心偏移量
	var a_arr = [60,85,110,140];
	var x_arr = [500,495,470,460];//顶层树木距离左边距离-左边
	var x_arr_right = [400,402,407,460];//顶层树木距离左边距离-右边
	var y_all = 370;//水平线距离屏幕下框距离
	var y_top = 190;//水平线距离上边距离
	var center_x = function(a,h) {
		//a -初始中心店距离最近树的距离
		var b = 100;//初始中心点距离视觉焦点的距离
		return (a*(b+h)/b).toFixed(2);
	}
	this.y_py = function(a,max,min) {
		a = a || 10;
		max = max || 19;
		min = min || 1;
		return a-Math.round(Math.random()*max+min);
	}
	this.opt = {
		pic : "../../img/snow/tree.png",
		dir:dir,
		row:row,
		col:col,
		trees_num:trees_num
	}
	this.get_initY = function() {
		return y_all/this.opt.trees_num*this.opt.row+y_top;
	}
	this.get_x = function(h) {
		if(this.opt.dir == 'left') {//左边列
			return x_arr[this.opt.col]-parseFloat(center_x(a_arr[this.opt.col],h));
		} else if(this.opt.dir == 'right') {
			return x_arr_right[this.opt.col]+parseFloat(center_x(a_arr[this.opt.col],h));
		}
	}
	this.get_y = function() {
//		370/7*i+190+(10-Math.round(Math.random()*19+1));
		return y_all/this.opt.trees_num*this.opt.row+y_top+this.y_py();
	}
	this.get_scale = function(nowH) {
		return (nowH/(y_all))*0.6+0.1;
	}
}

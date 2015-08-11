/*温暖设计：让一只大龙猫和两只小龙猫跟着鼠标点击的方向运动*/
var target = document.getElementById("target");
	target.style.left = "0px";
	target.style.top = "0px";
	// 为鼠标按下事件绑定监听器
	document.onmousedown = function(evt)
	{
		// 将鼠标事件的X、Y坐标赋给龙猫图片的left、top。
		target.style.left = evt.pageX + "px";
		target.style.top = evt.pageY + "px";
	}
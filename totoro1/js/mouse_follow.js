/*��ů��ƣ���һֻ����è����ֻС��è����������ķ����˶�*/
var target = document.getElementById("target");
	target.style.left = "0px";
	target.style.top = "0px";
	// Ϊ��갴���¼��󶨼�����
	document.onmousedown = function(evt)
	{
		// ������¼���X��Y���긳����èͼƬ��left��top��
		target.style.left = evt.pageX + "px";
		target.style.top = evt.pageY + "px";
	}
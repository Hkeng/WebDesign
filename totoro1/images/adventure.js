var curScene=0;

function replaceNodeText(id,newText)
{
	var node=document.getElementById(id);
	while(node.firstChild)
		node.removeChild(node.firstChild);
	node.appendChild(document.createTextNode(newText));
	/*
var sceneText=document.getElementById("sceneText");
while(sceneText.firstChild)
{
	sceneText.removeChild(sceneText.firstChild);
}
sceneText.appendChild(document.createTextNode("message");)*/

}

function changeScene(decision)
{
	var message="";

	switch(curScene)
	{
		case 0:
		curScene=1;
		message="！！！！！";
		decision1="Take the path";
		decision2="Take the bridge";
		document.getElementById("decision2").style.visibility="visible";
		break;

		case 1:
		if (decision==1) 
		{
			curScene=2;
			message="You have arrived at a cute little house in the woods.";
			decision1="Walk around back";
		    decision2="Knock on door";
		    document.getElementById("decision2").style.visibility="visible";
		}
		else if(decision==2) 
		{
			curScene=3;
			message="You are standing on the bridge overlooking a peaceful stream.";
		    decision1="Walk across  bridge";
		    decision2="Gaze into stream";
		    document.getElementById("decision2").style.visibility="visible";
		}
		else
		{
			if (curScene>0)
			{
				curScene=curScene-1;
				message="come back!";
				decision1="Start Game";
		        decision2="";
		        document.getElementById("decision2").style.visibility="hidden";	
			}
		}
		break;

		case 2:
		if (decision==1) 
		{
			curScene=4;
			message="Peeking through the window, you see a witch inside the house.";
	        decision1="Sneak by window";
		    decision2="Wave at witch";
		    document.getElementById("decision2").style.visibility="visible";	
		}
		else if(decision==2) 
		{
			curScene=5;
			message="Sorry,a witch lives in the house and you just became part of her stew.";
			decision1="Game over";
		    decision2="";
		    document.getElementById("decision2").style.visibility="hidden";	
		}
		else
		{
			if (curScene>0)
			{
				curScene=curScene-1;
				message="come back!";
				
		decision1="Take the path";
		decision2="Take the bridge";
		document.getElementById("decision2").style.visibility="visible";
			}
		}
		break;

		case 3:
		if (decision==1) 
		{
			curScene=6;
			message="Sorry,a troll lives on the other side of the bridge and you just became his lunch.";
		    decision1="Game over";
		    decision2="";
		    document.getElementById("decision2").style.visibility="hidden";	
		}
		else if(decision==2) 
		{
			curScene=7;
			message="Your stare is interrupted by the arrival of a huge troll.";
		    decision1="Say hello to troll";
		    decision2="Jump into stream";
		    document.getElementById("decision2").style.visibility="visible";	
		}
		else
		{
			if (curScene>0)
			{
				curScene=curScene-2;
				message="come back!";
				
		decision1="Take the path";
		decision2="Take the bridge";
		document.getElementById("decision2").style.visibility="visible";
			}
		}
		break;

		case 4:
		if (decision==1) 
		{
			curScene=8;
			decision1="Continue...";
		    decision2="";
		    document.getElementById("decision2").style.visibility="hidden";
			//message="Sorry,a troll lives on the other side of the bridge and you just become his lunch.";
		}
		else if(decision==2) 
		{
			curScene=5;
			message="Sorry,you became part of the witch's stew.";
			decision1="Game over";
		    decision2="";
		    document.getElementById("decision2").style.visibility="hidden";	
		}
		else
		{
			if (curScene>0)
			{
				curScene=curScene-2;
				message="come back!";

			decision1="Walk around back";
		    decision2="Knock on door";
		    document.getElementById("decision2").style.visibility="visible";
			}
		}
		break;

		case 5:
		if (decision==3) 
		{
				message="Game over! You could play again~";
		}
		else
		{
				curScene=0;
				decision1="Start Game";
		        decision2="";
		        document.getElementById("decision2").style.visibility="hidden";	
		}
			break;

		case 6:
			if (decision==3) 
		{
				message="Game over! You could play again~";
		}
		else
		{
				curScene=0;
				decision1="Start Game";
		        decision2="";
		        document.getElementById("decision2").style.visibility="hidden";	
		}
			break;

		case 7:
		if (decision==1) 
		{
			curScene=6;
			//message="Sorry,a troll lives on the other side of the bridge and you just became his lunch.";
		    decision1="Game over";
		    decision2="";
		    document.getElementById("decision2").style.visibility="hidden";	
			//message="Sorry,a troll lives on the other side of the bridge and you just become his lunch.";
		}
		else if(decision==2) 
		{
			curScene=9;
			decision1="Continue...";
		    decision2="";
		    document.getElementById("decision2").style.visibility="hidden";
		}
		else
		{
			if (curScene>0)
			{
				curScene=curScene-4;
				message="come back!";
		    decision1="Walk across  bridge";
		    decision2="Gaze into stream";
		    document.getElementById("decision2").style.visibility="visible";
			}
		}
		break;

		case 8:
		if (decision==1) 
		{
			curScene=0;
			decision1="Start Game";
		        decision2="";
		        document.getElementById("decision2").style.visibility="hidden";	
			//message="Sorry,a troll lives on the other side of the bridge and you just become his lunch.";
		}
		else if(decision==2) 
		{
			curScene=0;
			decision1="Start Game";
		        decision2="";
		        document.getElementById("decision2").style.visibility="hidden";	
		}
		else
		{
			if (curScene>0)
			{
				curScene=curScene-4;
				message="come back!";
				decision1="Sneak by window";
		    decision2="Wave at witch";
		    document.getElementById("decision2").style.visibility="visible";	
			}
		}
		break;

		case 9:
		if (decision==1) 
		{
			curScene=0;
			decision1="Start Game";
		        decision2="";
		        document.getElementById("decision2").style.visibility="hidden";	
			//message="Sorry,a troll lives on the other side of the bridge and you just become his lunch.";
		}
		else if(decision==2) 
		{
			curScene=0;
			decision1="Start Game";
		        decision2="";
		        document.getElementById("decision2").style.visibility="hidden";	
		}
		else
		{
			if (curScene>0)
			{
				curScene=curScene-2;
				message="come back!";
				decision1="Say hello to troll";
		    decision2="Jump into stream";
		    document.getElementById("decision2").style.visibility="visible";	
			}
		}
		break;
	}

	document.getElementById("sceneimg").src="images/scene"+curScene+".png";
	/*if (message!="") 
	{
		alert(message);
	}*/
	replaceNodeText("sceneText",message);
	replaceNodeText("decision1",decision1);
	replaceNodeText("decision2",decision2);

	var history=document.getElementById("history");
	if(curScene!=0)
	{
		var decisionElem=document.createElement("p");
		decisionElem.appendChild(document.createTextNode("decision"+decision+"->Scene"+curScene+":"+message));
		history.appendChild(decisionElem);
	}
	else
	{
		while(history.firstChild)
			history.removeChild(history.firstChild);

	}
}

function reset()
{
	curScene=0;
	decision1="Start Game";
		        decision2="";
		        document.getElementById("decision2").style.visibility="hidden";	
	changeScene(1);
}

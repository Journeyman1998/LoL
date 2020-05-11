url1 = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" 
url2 = "_0.jpg"

opgg1 = "https://www.op.gg/champion/"
opgg2 = "/statistics/"

lanes = {"top": top_list, "jungle": jungle_list, "mid": mid_list, "bot": bot_list, "support": support_list}


function changeElement(role){
	console.log(role);
	list = lanes[role];
	let max = list.length;
	let r = Math.floor(Math.random() * max);
	
	para = document.getElementById("champ");
	
	if(para.children.length != 0){
		para.removeChild(para.childNodes[0]);
	}
	
	anc = document.createElement("a");
	para.appendChild(anc);
		
	anc.innerHTML = list[r];
	anc.href = opgg1 + list[r].toLowerCase() + opgg2 + role;
	anc.target = "_blank";
	document.getElementById("pic").src = url1 + list[r] + url2;
}

function randomise(role){
	changeElement(role);
}
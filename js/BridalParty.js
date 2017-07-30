function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();
		var img5 = new Image();
		var img6 = new Image();
		var img7 = new Image();
		var img8 = new Image();
		var img9 = new Image();
		var img10 = new Image();
		var img11 = new Image();
		var img12 = new Image();

		img1.src = "pictures/Seimi.png";
		img2.src = "pictures/Arushi.png";
		img3.src = "pictures/DebK.png";
		img4.src = "pictures/Glor.png";
		img5.src = "pictures/DebS.png";
		img6.src = "pictures/Esther.png";
		img7.src = "pictures/Ajin.png";
		img8.src = "pictures/Sung.png";
		img9.src = "pictures/Bao.png";
		img10.src = "pictures/Chris.png";
		img11.src = "pictures/Ian.png";
		img12.src = "pictures/Harry.png";
	}
};
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
};
addLoadEvent(preloader);


$(document).ready(function(){
	$("div.SeimiButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Seimi.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.ArushiButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Arushi.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.DebKButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/DebK.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.GlorButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Glor.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.DebSButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/DebS.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.EstherButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Esther.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.AjinButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Ajin.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.SungButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Sung.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.BaoButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Bao.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.ChrisButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Chris.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.IanButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Ian.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});

$(document).ready(function(){
	$("div.HarryButton").hover(function(){
		document.getElementById("BridalPartyLeft").style.background = "url(pictures/Harry.png) bottom left no-repeat";
	},function(){
		document.getElementById("BridalPartyLeft").style.background = "url(images/BridalParty-Left.png) bottom left no-repeat";
	});
});
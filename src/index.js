import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { colorSwatchesTwo, itemData } from './ItemData';


import { ItemPage } from './ItemPage';
import { Header } from './Header';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ItemPage />, document.getElementById('pageBody'));
ReactDOM.render(<Header />, document.getElementById('header'));


registerServiceWorker();






itemData.colors = colorSwatchesTwo;




function makeCurrent (val = 0) {

	

	function colorInject () {
		return ( 
		
			itemData[val].colors.map((color) => {
            var swatchClasses = `swatch ${color.colorName}`;

            return (`<div class="${swatchClasses}" style=background-color:${color.code} title=${color.colorName}></div>`)
            
            })
		
		)
	}

	function altImgInject () {
		return ( 
		
        	itemData[val].altImgs.map((altImg) => {
            	
            return (`<div class="item-shot" style=background-image:url(${altImg}) title=${altImg}></div>`)
                
        	})
    	
		 )
     }
	


	setTimeout(function () {
      
      document.querySelector('#current-item-img').style.backgroundImage = "";
      document.querySelector('#current-item-img').style.backgroundImage = "url(" + itemData[val].imgURL + ")";
      document.querySelector('#current-item-category').innerHTML = itemData[val].category;
      document.querySelector('#current-item-headline').innerHTML = itemData[val].name;
      document.querySelector('.itemNameBody').innerHTML = itemData[val].name;
      document.querySelector('#current-item-manufacturer').innerHTML = `by <span>${itemData[val].manufacturer}</span>`;
      document.querySelector('#current-item-price').innerHTML = itemData[val].cost.price;
      document.querySelector('#current-item-shipping').innerHTML = `+${itemData[val].cost.shipping} shipping`;
      document.querySelector('#current-item-shots').innerHTML = `${altImgInject()}`;
      document.querySelector('#color-ops-row').innerHTML = `<h5 class="op-sec-title">Colors</h5> ${colorInject()}`;
      
      setTimeout(function () {
      		assignItemShots();
      		assignSwatches();
      }, 100);
      
     }, 150)

 };


function fixSearchWindowTop () {
	document.querySelector('#mainBody').style.position = "sticky";
	document.querySelector('#mainBody').style.top = "0";
	document.querySelector('#searchItemBlock').style.position = "absolute";
	document.querySelector('.searchBoxTop').style.position = "absolute";
	document.querySelector('#itemPage').style.position = "absolute";
};


window.onscroll = function() {

	if (window.pageYOffset >= 150) {
		fixSearchWindowTop();
	};

};


document.querySelector('#searchItemList').onscroll = function () {

		if (document.querySelector('#mainBody').offsetTop >= 150) {

		document.querySelector('#mainBody').style.animation = "fixSearchTop .5s ease-in-out";
		fixSearchWindowTop();

		};
};


document.querySelector('#itemPage').onscroll = function () {

		if (document.querySelector('#mainBody').offsetTop >= 150) {

		document.querySelector('#mainBody').style.animation = "fixSearchTop .5s ease-in-out";
		fixSearchWindowTop();

		};

};

document.querySelector('#nav-title').onclick = function() {

	if (document.querySelector('body').classList.contains('fonts1')) {
		document.querySelector('body').classList.remove('fonts1');
		document.querySelector('body').classList.add('fonts2');
	} else {
		document.querySelector('body').classList.remove('fonts2');
		document.querySelector('body').classList.add('fonts1');
	}

}





function animate (animation, object, seconds = ".5") {
	document.querySelector(object).style.animation = `${animation} ${seconds}s ease-in-out`;
	setTimeout(function() {
		document.querySelector(object).style.animation = "";
	}, 500);
};

function refresh (object, seconds = ".5") {
	document.querySelector(object).style.animation = `refresh ${seconds}s ease-in-out`;
	setTimeout(function() {
		document.querySelector(object).style.animation = "";
	}, 500);
};





var lilNav = document.querySelector('#nav-search');
var bigNav = document.querySelector('#big-search');

var currentSearch;

document.getElementById('nav-search').onclick = function () {
	currentSearch = document.querySelector('#big-search-input').value;
    bigNav.classList.add('bigSearchIn');
    document.querySelector('.fader').classList.add('faderOn');
    // mobileSearchDown();
    /*document.querySelector('#mainBody').style.filter = "blur(5px)";*/
};





document.querySelector('.add-cart-button').onclick = function() {

	if (document.querySelector('.add-cart-clicked')) {
		document.querySelector('.add-cart-button').classList.remove('add-cart-clicked');
		animate('refreshDown','.add-cart-button h4',".3");
		document.querySelector('.add-cart-button h4').innerHTML = "Add to cart";

		var cartCount = parseInt(document.querySelector('#nav-cart-count').innerHTML, 10);
		cartCount--;
		document.querySelector('#nav-cart-count').innerHTML = cartCount;
		animate('refreshDown','#nav-cart-count',".2");
	} else {
		animate('refreshUp','.add-cart-button h4',".3");
		document.querySelector('.add-cart-button').classList.add('add-cart-clicked');
		document.querySelector('.add-cart-button h4').innerHTML = "Added";
		cartCount = parseInt(document.querySelector('#nav-cart-count').innerHTML, 10);
		cartCount++;
		document.querySelector('#nav-cart-count').innerHTML = cartCount;
		animate('refreshUp','#nav-cart-count',".2");
	};

	
};

document.querySelector('.fav-button').onclick = function() {

		if (document.querySelector('.fav-button-clicked')) {
			document.querySelector('.fav-button').classList.remove('fav-button-clicked');
			animate('refreshDown','.fav-button h4',".3");
			document.querySelector('.fav-button h4').innerHTML = "Add to wish list";
		} else {
		document.querySelector('.fav-button').classList.add('fav-button-clicked');
		animate('refreshUp','.fav-button h4',".3");
		document.querySelector('.fav-button h4').innerHTML = "Wish listed";
		};

};







function submitSearch () {
	bigNav.classList.remove('bigSearchIn');
	document.querySelector('.fader').classList.remove('faderOn');
	document.querySelector('.search-query').innerHTML = document.querySelector('#big-search-input').value;
	/*document.querySelector('#mainBody').style.filter = "";*/
	if (document.querySelector('#big-search-input').value.length > 0 && document.querySelector('#big-search-input').value !== currentSearch) {
		animate('refresh','#searchItemList',".5");
		animate('refreshDown','.search-query',".5");
	}
};

function dropSearch () {
	bigNav.classList.remove('bigSearchIn');
	document.querySelector('.fader').classList.remove('faderOn');
};



var searchOps = document.querySelectorAll('.searchOp');

for (let i = 0; i < searchOps.length; i++) {
	searchOps[i].onclick = function () {
		
			animate('refresh','#searchItemList',".5");
		
	};
};









var searchItems = document.querySelectorAll('.itemSearchElement');
var recItems = document.querySelectorAll('.recItem');

var searchItemCarts = document.querySelectorAll('.search-item-cart');
var searchItemHearts = document.querySelectorAll('.search-item-heart');
var searchItemButtons = document.querySelectorAll('.search-item-button');



for (let i = 0; i < searchItems.length; i++) {

	searchItems[i].onclick = function () {							
		
		this.val = parseInt(this.id, 10);
		console.log(this.val);
		makeCurrent(parseInt(this.val));

		animate('refreshDown','#itemPage',".5");


		mobileSearchOut();
		
	};

	/*if (searchItems[i].onclick && !(searchItemButtons[i].onmouseover)) {
		animate('refreshDown','#itemPage',".5");
	};*/
};

for (let i = 0; i < recItems.length; i++) {
	recItems[i].onclick = function () {

		this.val = parseInt(this.id, 10);
		makeCurrent(parseInt(this.val));
		animate('refreshDown','#itemPage',".5");

		mobileSearchOut();
		
	};
};



/*

for (let i = 0; i < searchItemButtons.length; i++) {

	searchItemButtons[i].onmouseover = function () {
		// alert("hovered");
		searchItems[i].classList.add('buttonHovered');
	};
	searchItemButtons[i].onmouseout = function () {
		searchItems[i].classList.remove('buttonHovered');
	};

};

*/


for (let i = 0; i < searchItemCarts.length; i++) {
	
	searchItemCarts[i].onclick = function () {
	if (this.classList.contains('search-cart-clicked')) {
		this.classList.remove('search-cart-clicked');
		var cartCount = parseInt(document.querySelector('#nav-cart-count').innerHTML);
		cartCount--;
		document.querySelector('#nav-cart-count').innerHTML = cartCount;
		animate('refreshDown','#nav-cart-count',".2");
	} else {
		this.classList.add('search-cart-clicked');
		cartCount = parseInt(document.querySelector('#nav-cart-count').innerHTML);
		cartCount++;
		document.querySelector('#nav-cart-count').innerHTML = cartCount;
		animate('refreshUp','#nav-cart-count',".2");
	};
	};

};

for (let i = 0; i < searchItemHearts.length; i++) {
	searchItemHearts[i].onclick = function () {

	if (this.classList.contains('search-heart-clicked')) {
		this.classList.remove('search-heart-clicked');
	} else {
		this.classList.add('search-heart-clicked');
	};
	};
};








document.querySelector('.fader').onclick = function () {
	dropSearch();
};



if (document.querySelector('.faderOn')) {
	document.getElementById('mainheader').onclick = function () {
		dropSearch();
	}
};


document.getElementById('big-search-input').onkeydown = function(e){
   if(e.keyCode === 13){  submitSearch();  }
};


function setHover (color, overrider) {
    var command = "url(images/headphonesReg-" + color + ".jpg)" + overrider;
    document.getElementById('current-item-img').style.backgroundImage = command;
    console.log(command);
};

function setHoverAltImg (link) {
    var command = `url(${link})`;
    document.getElementById('current-item-img').style.backgroundImage = command;
    console.log(command);
};



var swatches = document.querySelectorAll('.swatch');


function assignSwatches () {

	swatches = [];

for (let i = 0; i < swatches.length; i++) {
	
	swatches[i].onmouseover = function () {
		var currentImage = 0;
		currentImage = document.getElementById('current-item-img').style.backgroundImage;
		setTimeout(setHover(this.title, ""), 100);
		console.log(this.title);

		this.onmouseout = function () {
		document.getElementById('current-item-img').style.backgroundImage = currentImage;
		};
	};
	
	swatches[i].onclick = function () {
		setHover(this.title, " !important");
		console.log(this.title);
	};
};

}

assignSwatches();


var itemShots = document.querySelectorAll('.item-shot');

function assignItemShots () {

	itemShots = [];

itemShots = document.querySelectorAll('.item-shot');

for (let i = 0; i < itemShots.length; i++) {

	itemShots[i].onmouseover = function () {
		var currentImage = 0;
		currentImage = document.getElementById('current-item-img').style.backgroundImage;
		setTimeout(setHoverAltImg(this.title), 100);
		console.log(this.title);

		this.onmouseout = function () {
		document.getElementById('current-item-img').style.backgroundImage = currentImage;
		};
	};

	};

}


assignItemShots();










document.querySelector('#nav-search').onclick =	function () {

	currentSearch = document.querySelector('#big-search-input').value;
    bigNav.classList.add('bigSearchIn');
    document.querySelector('.fader').classList.add('faderOn');

	if (window.innerWidth <= 740) {

    	document.querySelector('#nav-search').classList.add('nav-search-clicked');
    	document.querySelector('#searchItemBlock').classList.add('search-block-is-down');
    	document.querySelector('#mobile-search-close').classList.add('mobile-search-close-is-up');
   		document.querySelector('#mainBody').classList.add('fixed');
	};

};





function mobileSearchOut () {

	if (document.querySelector('.mobile-search-close-is-up') && window.innerWidth <= 740) {

	document.querySelector('#nav-search').classList.remove('nav-search-clicked');
    
    document.querySelector('#searchItemBlock').classList.add('search-block-out');
    document.querySelector('#mobile-search-close').classList.add('mobile-search-close-out');
    
    dropSearch();

    document.querySelector('#mainBody').classList.remove('fixed');

    setTimeout(function() {
    	document.querySelector('#searchItemBlock').classList.remove('search-block-is-down','search-block-out');
    	document.querySelector('#mobile-search-close').classList.remove('mobile-search-close-is-up','mobile-search-close-out');
    	document.querySelector('#searchItemBlock').style.animation = "";
    	document.querySelector('#mobile-search-close').style.animation = "";
    }, 300);

	};

};


document.querySelector('#mobile-search-close').onclick = function () {
	mobileSearchOut();
} 




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { ItemSearchElement, CurrentItem, RecBarItems } from './ItemPage';
import { Header } from './Header';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ItemSearchElement />, document.getElementById('searchItemList'));
ReactDOM.render(<CurrentItem />, document.getElementById('itemInfoPost'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<RecBarItems />, document.getElementById('recBar'));

registerServiceWorker();






function fixSearchWindowTop () {
	document.querySelector('#mainBody').style.position = "sticky";
	document.querySelector('#searchItemBlock').style.position = "absolute";
	document.querySelector('.searchBoxTop').style.position = "absolute";
	document.querySelector('#itemPage').style.position = "absolute";

};


window.onscroll = function() {

	if (window.pageYOffset >= 150) {
		fixSearchWindowTop();
	}

};

document.querySelector('#searchItemList').onscroll = function () {

		if (document.querySelector('#mainBody').offsetTop >= 150) {

		document.querySelector('#mainBody').style.animation = "fixSearchTop .5s ease-in-out";
		fixSearchWindowTop();

		}

}

document.querySelector('#itemPage').onscroll = function () {

		if (document.querySelector('#mainBody').offsetTop >= 150) {

		document.querySelector('#mainBody').style.animation = "fixSearchTop .5s ease-in-out";
		fixSearchWindowTop();

		}

        
        console.log(document.querySelector('#itemBlock').offsetParent);
        console.log(document.querySelector('#current-item-img').scrollTop);


        if (document.querySelector('#itemBlock').offsetTop < -80) {
        	document.querySelector('#current-item-img').classList.remove('pageHeadIn');
            document.querySelector('#current-item-img').classList.add('pageHeadOut');
            console.log("scrolled2");

        } else {
            document.querySelector('#current-item-img').classList.remove('pageHeadOut');
            document.querySelector('#current-item-img').classList.add('pageHeadIn');
        };

};






document.querySelector('.add-cart-button').onclick = function() {
	var cartCount = parseInt(document.querySelector('#nav-cart-count').innerHTML);
	cartCount++;
	document.querySelector('#nav-cart-count').innerHTML = cartCount;
};




var lilNav = document.querySelector('#nav-search');
var bigNav = document.querySelector('#big-search');

document.getElementById('nav-search').onclick = function () {
    bigNav.classList.add('bigSearchIn');
    document.querySelector('.fader').classList.add('faderOn');
    document.querySelector('#big-search-input').autofocus = "true";
};

function submitSearch () {
	bigNav.classList.remove('bigSearchIn');
	document.querySelector('.fader').classList.remove('faderOn');
	document.querySelector('.search-query').innerHTML = document.querySelector('#big-search-input').value;
};

document.querySelector('.fader').onclick = function () {
	submitSearch();
};

if (document.querySelector('.faderOn')) {
	document.getElementById('header').onclick = function () {
		submitSearch();
	}
};


document.getElementById('big-search-input').onkeydown = function(e){
   if(e.keyCode == 13){  submitSearch();  }
};


function setHover (color, overrider) {
    var command = "url('images/headphonesReg-" + color + ".jpg')" + overrider;
    document.getElementById('current-item-img').style.backgroundImage = command;
    console.log(command);
};

var swatches = document.querySelectorAll('.swatch');

for (var i = 0; i < swatches.length; i++) {
	swatches[i].onmouseover = function () {
		setHover(this.title, "");
		console.log(this.title);
	};
	swatches[i].onmouseout = function () {
		document.getElementById('current-item-img').style.backgroundImage = "url('images/headphones.png')";
	};

	swatches[i].onclick = function () {
		setHover(this.title, " !important");
		console.log(this.title);
	};
};




import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import headphones from './images/headphones.png';



const colorSwatches = ["white","black","#D7202C","#1AA99D","#FD91A3","#5D65FB"];

const colorSwatches2 = [
      
      {
        colorName: "white",
        code: "white"
      },
      {
        colorName: "black",
        code: "black"
      },
      {
        colorName: "red",
        code: "#D7202C"
      },
      {
        colorName: "teal",
        code: "#1AA99D"
      },
      {
        colorName: "pink",
        code: "#FD91A3"
      },
      {
        colorName: "purple",
        code: "#5D65FB"
      }

];

var itemData = [
  {
    name: "U-240 Hypebeast Headphones",
    imgURL: headphones,
    category: "Headphones",
    manufacturer: "Benheiser",
    cost: {
      price: "$64.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: colorSwatches2
  },
  {
    name: "Scarlett 2i2 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Audio Processing",
    manufacturer: "Focusrite"
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    category: "Gear",
    manufacturer: "Benheiser"
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Recording",
    manufacturer: "Focusrite"
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    category: "Gear",
    manufacturer: "Benheiser"
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Gear",
    manufacturer: "Focusrite"
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: "http://www.pngpix.com/wp-content/uploads/2016/04/Headphone-PNG-image8.png",
    category: "Gear",
    manufacturer: "Benheiser"
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Gear",
    manufacturer: "Focusrite"
  },


  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    category: "Gear",
    manufacturer: "Benheiser"
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Audio Processing",
    manufacturer: "Focusrite"
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    category: "Gear",
    manufacturer: "Benheiser"
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Recording",
    manufacturer: "Focusrite"
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    category: "Gear",
    manufacturer: "Benheiser"
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Gear",
    manufacturer: "Focusrite"
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: "http://www.pngpix.com/wp-content/uploads/2016/04/Headphone-PNG-image8.png",
    category: "Gear",
    manufacturer: "Benheiser"
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Gear",
    manufacturer: "Focusrite"
  }

];


document.querySelector('#searchresults-footer-count').innerHTML = `Results: ${itemData.length} items found`;


export class ItemSearchElement extends Component {
  render () {

    return (
      <div>
      {
      
      itemData.map((thisItem) => {
        return (
          <a><div className="itemSearchElement">
          <div className="itemSearchElementIconBlock">
          <img className="itemPrevImg" src={thisItem.imgURL} />
          </div>
          <div className="itemDataBlock">
          <h5 className="itemName">{thisItem.name}</h5>
          <h5 className="searchlist-item-manu">by <span>{thisItem.manufacturer}</span></h5>
          <h5 className="searchlist-item-price">from <span>{itemData[0].cost.price}</span></h5>
          <h5 className="itemCategory categoryLink">{thisItem.category}</h5>
          </div>
          </div></a>
        )
      })

      }
      </div>
    ) // return

  } // render
};




export class CurrentItem extends Component {
  render () {

    return (
      <div id="itemBlock">
        <div className="itemCover"></div>
        <div id="current-item-img" ref="curItemImg" className="pageHeadIn" style={{backgroundImage: `url(${itemData[0].imgURL})` }}>
          
        </div>

       

        <div id="current-item-pane" className="pageHeadIn">

          <div id="pane1">
          <h4 id="current-item-category" className="categoryLink">{itemData[0].category}</h4>
          <h1 id="current-item-headline">{itemData[0].name}</h1>
          <h4 id="current-item-manufacturer">by <span>{itemData[0].manufacturer}</span></h4>
          <h2 id="current-item-price">{itemData[0].cost.price}</h2>
          <h5 id="current-item-shipping">+{itemData[0].cost.shipping} shipping</h5>
          <a href="#" id="apply-coupon-prompt">Apply Coupon</a>
          </div> 


          <div id="pane2">
            <h4 id="customOpsHead">Customization Options</h4>

            <div id="color-ops-row">
            <h5 className="op-sec-title">Colors</h5>
            {
            itemData[0].colors.map((color) => {
                var swatchClasses = `swatch ${color.colorName}`;

                return (
                <div className={swatchClasses} style={{backgroundColor: color.code}} title={color.colorName}></div>
                );
              }) 
            }
            </div>
          </div> 


          <div id="pane3">
          <a href="#" className="add-cart-button"><h4>Add to Cart</h4></a>
          <a href="#" className="fav-button"><h4>Add to wish list</h4></a>
          </div> 


        </div> 
      </div> // itemBlock
    ) // return

  } // render
};



export class RecBarItems extends Component {
  render () {

    return (
      <div>
      {
      
      itemData.map((thisItem) => {
        return (
          <div className="recItem">
          <div className="itemSearchElementIconBlock">
          <img className="itemPrevImg" src={thisItem.imgURL} />
          </div>
          <div className="itemDataBlock">
          <h5 className="itemName">{thisItem.name}</h5>
          <h5 className="searchlist-item-manu">by <span>{thisItem.manufacturer}</span></h5>
          <h5 className="searchlist-item-price">from <span>{itemData[0].cost.price}</span></h5>
          <h5 className="itemCategory categoryLink">{thisItem.category}</h5>
          </div>
          </div>
        )
      })

      }
      </div>
    ) // return

  } // render
};










// export default { ItemSearchElement, CurrentItem };



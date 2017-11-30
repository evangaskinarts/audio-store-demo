import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import headphones from './images/headphones.png';
import { colorSwatchesTwo, itemData } from './ItemData';







var num = 0;




export class ItemPage extends Component {

  constructor () {
    super();

   

    this.makeCurrent = function (val) {
      
      document.querySelector('#current-item-category').innerHTML = `${itemData[val].category}`;
      document.querySelector('#current-item-headline').innerHTML = `${itemData[val].name}`;
      document.querySelector('#current-item-manufacturer').innerHTML = `by <span>${itemData[val].manufacturer}</span>`;
      document.querySelector('#current-item-price').innerHTML = `${itemData[val].cost.price}`;
      document.querySelector('#current-item-shipping').innerHTML = `+${itemData[val].cost.shipping} shipping`;

    }

    
  }



  render () {


    return (
      <div>


      <div id="mainBody">

    <div className="topAd"></div>

{/* SEARCH BOX TOP */}

    <div className="searchBoxTop">
          <h3>Search results for: <span className="search-query"></span></h3>

          <div className="searchOps">
          <input type="radio" name="pokemon" value="Red" id="pokemonRed" required className="searchOp" /><label for="pokemonRed">Price low to high</label>
          <input type="radio" name="pokemon" value="Blue" id="pokemonBlue" className="searchOp" /><label for="pokemonBlue">Price high to low</label>
          </div>

          <form>
          <input type="text" placeholder="Search" aria-describedby="exampleHelpText" className="searchTopBoxInput" />
          </form>

    </div> {/* search box top */}


    <div className="fader"></div>




{/* SEARCH ITEM BLOCK */}



    <div id="searchItemBlock"> {/* closed */}
    
      <div id="searchItemList"> {/* closed */}

      <div id="search-item-count-box">
      <div id="search-item-count">{itemData.length} items found in search</div>
      </div> {/* search item count box */}
      {
      itemData.map((thisItem) => {

        var itemKey = itemData.indexOf(thisItem);
        var currentThis = function (itemKey) { num = itemKey; };
        

        return (
          <a><div className="itemSearchElement" id={itemKey} onClick={function() { num = itemKey; }}>
          <div className="search-item-button search-item-cart"></div>
          <div className="search-item-button search-item-heart"></div>

          <div className="itemSearchElementIconBlock">
          <img className="itemPrevImg" src={thisItem.imgURL} alt="Image" />
          </div>
          <div className="itemDataBlock">
          <h5 className="itemName">{thisItem.name}</h5>
          <h5 className="searchlist-item-manu">by <span>{thisItem.manufacturer}</span></h5>
          <h5 className="searchlist-item-price">from <span>{thisItem.cost.price}</span></h5>
          <h5 className="itemCategory categoryLink">{thisItem.category}</h5>
          </div>
          </div></a>
        )
      })

      } {/* itemData map */}
      
      </div> {/* search item list */}
        <div id="searchItemListFooter">
          <div id="searchresults-footer-count">End of results</div>
        </div> {/* search item list footer */}

      
    </div> {/* search item list */}
    
    <div id="mobile-search-close">
        <div id="mobile-search-close-text">Close search</div>
      </div>




  {/* ITEM PAGE */}



    <div id="itemPage">
      <div id="itemInfoPost"> {/* closed */}


      <div id="itemBlock"> 
        <div className="itemCover"></div>
        <div id="current-item-img" ref="curItemImg" style={{backgroundImage: `url(${itemData[num].imgURL})`}}>

            <div id="current-item-shots">
              
              {
              itemData[num].altImgs.map((altImg) => {
                return (
                <div className="item-shot" style={{backgroundImage: `url(${altImg})`}} title={altImg}></div>
                );
              }) 
              }

            </div>

        </div> 

       

        <div id="current-item-pane">

          <div id="pane1">
          <h4 id="current-item-category" className="categoryLink">{itemData[num].category}</h4>
          <h1 id="current-item-headline">{itemData[num].name}</h1>
          <h4 id="current-item-manufacturer">by <span>{itemData[num].manufacturer}</span></h4>
          <h2 id="current-item-price">{itemData[num].cost.price}</h2>
          <h5 id="current-item-shipping">+{itemData[num].cost.shipping} shipping</h5>
          <a href="#" id="apply-coupon-prompt">Apply Gift Card</a>
          </div> {/* pane1 */}


          <div id="pane2">
            <h4 id="customOpsHead">Customization Options</h4>

            <div id="color-ops-row">
            <h5 className="op-sec-title">Colors</h5>
            {
            itemData[num].colors.map((color) => {
                var swatchClasses = `swatch ${color.colorName}`;

                return (
                <div className={swatchClasses} style={{backgroundColor: color.code}} title={color.colorName}></div>
                );
              }) 
            }
            </div> {/* color ops row */}
          </div>  {/* pane2 */}


          <div id="pane3">
          <div className="add-cart-button"><h4>Add to Cart</h4></div>
          <div className="fav-button"><h4>Add to wish list</h4></div>
          </div> {/* pane3 */}


        </div> {/* current item pane */}
      </div> 
    
    </div> {/* item info post */}





{/* SUB ITEM BLOCK */}



    <div id="subItemBlock"> 

        <h3 className="also-bought-header">Customers who bought this item also bought:</h3>

      <div id="recBar"> 

      <div className="recBarBox">
      <div className="recBarGradient"></div>
      <div className="recScrollButton"></div>
      
      <div className="recItemHolder">
      {
      

      itemData.slice(1, 9).map((thisItem) => {
        var recKey = `${itemData.indexOf(thisItem)}`;
        return (
          <div className="recItem" id={recKey}>
          <div className="search-item-button search-item-cart"></div>
          <div className="search-item-button search-item-heart"></div>

          <div className="itemSearchElementIconBlock">
          <img className="itemPrevImg" src={thisItem.imgURL} alt="Image" />
          </div>
          <div className="itemDataBlock">
          <h5 className="itemName">{thisItem.name}</h5>
          <h5 className="searchlist-item-manu">by <span>{thisItem.manufacturer}</span></h5>
          <h5 className="searchlist-item-price">from <span>{thisItem.cost.price}</span></h5>
          <h5 className="itemCategory categoryLink">{thisItem.category}</h5>
          </div>
          </div>
        )
      })

      }
      </div> 
      </div> 

    </div> 




        
        

        <div className="bodyText">
        <h1>About the <span className="itemNameBody">U-240 Hypebeast Headphones</span></h1>
        <p className="bodyP">The K 240 Studio headphones from AKG feature a semi-open circumaural design, and use patented Varimotion technology and extra-large transducers to deliver extremely precise, detailed sound. The headphones have a self-adjusting headband, as well as thick around-ear cushions for lasting comfort.</p>

          <p className="bodyP">The single-sided detachable straight cable resists tangles and can be easily replaced. The cable has a gold-plated 3.5mm plug with a 1/4 screw-on adapter to provide wide compatibility with consumer and professional audio devices. It comes with an Auray COHH-1 Headphone Holder with Padded Cradle and Adjustable Angle attaches to either a horizontal or vertical surface in order to support one full-sized pair of headphones and a 25 Extension Cable.
        </p>
        </div> 

        <div className="bodyTable">
            <h4 className="specs-header">Item Specifications</h4>
            <table>
              <tr>
                <th>Price</th>
                <td>{itemData[num].cost.price}</td>
              </tr>
              <tr>
                <th>Shipping</th> 
                <td>{itemData[num].cost.shipping}</td>
                
              </tr>
              <tr>
                <th>Fit</th>
                <td>Over-Ear</td>
              </tr>
              <tr>
                <th>Item Dimensions</th>
                <td>9.2 x 6 x 6 in</td>
              </tr>
              <tr>
                <th>Item Weight</th>
                <td>0.53 lb</td>
              </tr>
            </table>

        </div> 
      

      





      </div> 

      <div id="sub-item-footer">
          <div id="sub-item-footer-line">This webapp is a demo by <a href="http://evangaskin.com" className="portfolioLink" target="_blank" rel="noopener noreferrer">Evan Gaskin</a>.</div> 
        </div> 
      </div> 

    </div>  

   </div> 



    ) // return

  } // render
};










// export default { ItemSearchElement, CurrentItem };



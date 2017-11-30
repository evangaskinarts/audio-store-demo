import React, { Component } from 'react';
import './index.css';
import hamburger from './images/hamburger.svg';


var headerLinks = [
    
    {
      title: "Home",
      url: "#",
      current: "false"
    },
    {
      title: "Shop",
      url: "#",
      current: "true"
    },
    {
      title: "Events",
      url: "#",
      current: "false"
    },
    {
      title: "Lessons",
      url: "#",
      current: "false"
    }
    

];

var cart = {
      value: 0
      };



export class Header extends Component {



  render () {
    
    return (
      <div>


      <div id="big-search">
        <input type="text" placeholder="Search items here" aria-describedby="exampleHelpText" id="big-search-input" autocomplete="off"></input>
      </div>



      <div id="mainheader">

      <div id="header-upper">
        <div id="header-upper-right">
            <a href="#" className="hu-account-name">hi, Tiana Reynolds</a>
            <a href="#" className="hu-my-account">My Account</a>
            <a href="#"className="hu-signout">Sign Out</a>
            <a href="#" className="hu-help">Help</a>
        </div>
      </div>

      <div id="header-nav">

        <div id="nav-title">
          <h4>Benheiser Sounds</h4>
        </div>

        <div id="nav-right">

          <div id="nav-links">
            <a id="deburger"><img src={hamburger}/></a>
            {
            headerLinks.map((link) => {
                
                var linkClassList = "navLink";
                if (link.current === "true") {
                    linkClassList = linkClassList + " curLink";
                };

                return (
                <a href={link.url} className={linkClassList}>{link.title}</a>
                );
              }) 
            }
          </div>

          <div id="nav-search2">
            <form>
              <input type="text" placeholder="Search" aria-describedby="exampleHelpText"></input>
            </form>
          </div>

          <div id="nav-search">
            <div id="nav-search-icon">
              <img src="images/search.svg" />
            </div>
            <h4>Search</h4>
          </div>

          

          <div id="nav-cart" title="No functionality...yet">
            <div id="nav-cart-icon">
              <img src="images/cart.svg" />
            </div>
            <div id="nav-cart-count">2</div>
            <h4>View Cart</h4>
          </div>

        </div> 

      </div> 
      

      </div>
      </div> 
    ) // return
    
  } // render
};





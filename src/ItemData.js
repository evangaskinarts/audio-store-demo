
import headphones from './images/headphones.png';


const colorSwatches = ["white","black","#D7202C","#1AA99D","#FD91A3","#5D65FB"];

const colorSwatchesTwo = [
      
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



var itemData2 = [
  "u240headphones" : {
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
  "scarlett" : {
    name: "Scarlett 2i2 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    category: "Audio Processing",
    manufacturer: "Focusrite",
    cost: {
      price: "$64.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: {colorName: "red", code: "#D7202C"}
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    category: "Gear",
    manufacturer: "Benheiser"
  }

];




var itemData = [
  {
    name: "U-240 Hypebeast Headphones",
    imgURL: headphones,
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/51ucaCUDb1L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/61G6Q5m6B9L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/616IGOFgrqL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/615CoiBIixL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/4184SuWr%2BmL._SX522_.jpg"
            ],
    category: "Headphones",
    manufacturer: "Benheiser",
    cost: {
      price: "$144.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: colorSwatchesTwo
  },
  {
    name: "Scarlett 2i2 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/81BVXJTznNL._SX466_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81KkASk--ML._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71rMbPFlV4L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/714giYrdjBL._SX522_.jpg"
            ],
    category: "Audio Processing",
    manufacturer: "Focusrite",
    cost: {
      price: "$120.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: [{colorName: "red", code: "#D7202C"}]
  },
  {
    name: "AKG K 240 Semi-Open Studio Headphones",
    imgURL: "https://images-na.ssl-images-amazon.com/images/I/61uweX6NfCL._SX522_.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/91L-xs8VUKL._SY679_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81Ul2l7urrL._SY679_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71Y5j-dr57L._SX522_.jpg"
            ],
    category: "Headphones",
    manufacturer: "AKG",
    cost: {
      price: "$67.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: [{colorName: "black", code: "black"}]
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/81BVXJTznNL._SX466_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81KkASk--ML._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71rMbPFlV4L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/714giYrdjBL._SX522_.jpg"
            ],
    category: "Recording",
    manufacturer: "Focusrite",
    cost: {
      price: "$120.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: [{colorName: "red", code: "#D7202C"}]
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/51ucaCUDb1L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/61G6Q5m6B9L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/616IGOFgrqL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/615CoiBIixL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/4184SuWr%2BmL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Benheiser",
    cost: {
      price: "$64.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: colorSwatchesTwo
  },
  {
    name: "Scarlett 2i2 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/81BVXJTznNL._SX466_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81KkASk--ML._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71rMbPFlV4L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/714giYrdjBL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Focusrite",
    cost: {
      price: "$120.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: [{colorName: "red", code: "#D7202C"}]
  },
  {
    name: "AKG K 240 Semi-Open Studio Headphones",
    imgURL: "https://images-na.ssl-images-amazon.com/images/I/61uweX6NfCL._SX522_.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/91L-xs8VUKL._SY679_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81Ul2l7urrL._SY679_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71Y5j-dr57L._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "AKG",
    cost: {
      price: "$67.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: [{colorName: "black", code: "black"}]
  },
  {
    name: "Scarlett 2i2 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/81BVXJTznNL._SX466_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81KkASk--ML._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71rMbPFlV4L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/714giYrdjBL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Focusrite",
    cost: {
      price: "$120.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: [{colorName: "red", code: "#D7202C"}]
  },


  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/51ucaCUDb1L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/61G6Q5m6B9L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/616IGOFgrqL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/615CoiBIixL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/4184SuWr%2BmL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Benheiser",
    cost: {
      price: "$64.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: colorSwatchesTwo
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/81BVXJTznNL._SX466_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81KkASk--ML._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71rMbPFlV4L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/714giYrdjBL._SX522_.jpg"
            ],
    category: "Audio Processing",
    manufacturer: "Focusrite",
    cost: {
      price: "$120.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: [{colorName: "red", code: "#D7202C"}]
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/51ucaCUDb1L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/61G6Q5m6B9L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/616IGOFgrqL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/615CoiBIixL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/4184SuWr%2BmL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Benheiser",
    cost: {
      price: "$64.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: colorSwatchesTwo
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/81BVXJTznNL._SX466_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81KkASk--ML._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71rMbPFlV4L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/714giYrdjBL._SX522_.jpg"
            ],
    category: "Recording",
    manufacturer: "Focusrite",
    cost: {
      price: "$120.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: [{colorName: "red", code: "#D7202C"}]
  },
  {
    name: "AKG K 240 Semi-Open Studio Headphones",
    imgURL: "https://images-na.ssl-images-amazon.com/images/I/61uweX6NfCL._SX522_.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/91L-xs8VUKL._SY679_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81Ul2l7urrL._SY679_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71Y5j-dr57L._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "AKG",
    cost: {
      price: "$67.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: [{colorName: "black", code: "black"}]
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: headphones,
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/51ucaCUDb1L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/61G6Q5m6B9L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/616IGOFgrqL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/615CoiBIixL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/4184SuWr%2BmL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Benheiser",
    cost: {
      price: "$64.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: colorSwatchesTwo
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/81BVXJTznNL._SX466_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81KkASk--ML._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71rMbPFlV4L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/714giYrdjBL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Focusrite",
    cost: {
      price: "$120.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: [{colorName: "red", code: "#D7202C"}]
  },
  {
    name: "U-240 Dynamite Headphones",
    imgURL: "http://www.pngpix.com/wp-content/uploads/2016/04/Headphone-PNG-image8.png",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/51ucaCUDb1L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/61G6Q5m6B9L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/616IGOFgrqL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/615CoiBIixL._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/4184SuWr%2BmL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Benheiser",
    cost: {
      price: "$64.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$80.00"
    },
    colors: colorSwatchesTwo
  },
  {
    name: "M200 Audio Interface",
    imgURL: "http://media.musiciansfriend.com/is/image/MMGS7/Scarlett-Solo-2nd-Gen-USB-Audio-Interface/J33790000000000-00-500x500.jpg",
    altImgs: ["https://images-na.ssl-images-amazon.com/images/I/81BVXJTznNL._SX466_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/81KkASk--ML._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/71rMbPFlV4L._SX522_.jpg",
             "https://images-na.ssl-images-amazon.com/images/I/714giYrdjBL._SX522_.jpg"
            ],
    category: "Gear",
    manufacturer: "Focusrite",
    cost: {
      price: "$120.00",
      shipping: "$4.00",
      onsale: "true",
      origprice: "$200.00"
    },
    colors: [{colorName: "red", code: "#D7202C"}]
  }

];





export { colorSwatchesTwo, itemData }
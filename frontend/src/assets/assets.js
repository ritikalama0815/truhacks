import logo from './logo.PNG'
import search_icon from './search.PNG'
import profile_icon from './profile_icon.PNG'
import cart_icon from './cart_icon.PNG'
import menu_icon from './menu_icon.PNG'
import hero_img from './hero.png'
import notebook from './notebook.jpg'
import plate from './plate.jpg'
import shirt from './shirt.jpg'
import solar from './solar.jpg'
import sunglass from './sunglass.jpg'
import toothbrush from './toothbrush.jpg'
import cup from './cup.jpg'
import bamboo from './bamboo.jpg'
import bottle from './bottle.jpg'
import case_img from './case.jpg'
import hemp from './hemp.jpg'
import lamp from './lamp.jpg'
import mat from './mat.jpg'
import pen from './pen.jpg'
import rug from './rug.jpg'
import socks from './socks.jpg'
import speaker from './speaker.webp'
import trashbags from './trashbags.jpg'
import wraps from './wraps.jpg'
import exchange from './exchange.PNG'
import support from './service.PNG'
import cross from './cross.PNG'
import bin from './delete.PNG'
import card from './card.PNG'

export const assets = {
    logo,
    bottle,
    hemp,
    card,
    cross,
    lamp,
    bin,
    mat,
    pen,
    rug,
    socks,
    speaker,
    trashbags,
    exchange,
    wraps,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    hero_img,
    notebook,
    plate,
    shirt,
    solar,
    support,
    sunglass,
    toothbrush,
    cup,
    case_img,
    bamboo,

}

// THIS IS GOING TO BE MULTIPLE and use this product array in any component
export const products = [
    {
        _id: "1",
        name: "Wooden Cup",
        description: "A beautiful wooden cup made from the finest oak.",
        price: "20.00",
        image: [cup],
        category: "Kitchen",
        date: "2023-10-01",
    },
    {
        _id: "2",
        name: "Ceramic Plate",
        description: "A handcrafted ceramic plate.",
        price: "15.00",
        image: [plate],
        category: "Kitchen",
        date: "2023-10-02",
    },
    {
        _id: "3",
        name: "Bamboo Toothbrush",
        description: "An eco-friendly toothbrush made from sustainable bamboo.",
        price: "5.00",
        image: [toothbrush],
        category: "Care",
        date: "2023-10-03",
    },
    {
        _id: "4",
        name: "Reusable Cotton Bag",
        description: "A durable and reusable cotton shopping bag.",
        price: "8.00",
        image: [hero_img],
        category: "Fashion",
        date: "2023-10-04",
    },
    {
        _id: "5",
        name: "Recycled Notebook",
        description: "A notebook made from 100% recycled paper.",
        price: "12.00",
        image: [notebook],
        category: "Mis",
        date: "2023-10-05",
    },
    {
        _id: "6",
        name: "Solar-Powered Charger",
        description: "A portable charger powered by solar energy.",
        price: "30.00",
        image: [solar],
        category: "Electronics",
        date: "2023-10-06",
    },
    {
        _id: "7",
        name: "Recycled Plastic Sunglasses",
        description: "Stylish sunglasses made from recycled plastic.",
        price: "25.00",
        image: [sunglass],
        category: "Fashion",
        date: "2023-10-07",
    },
    {
        _id: "8",
        name: "Organic Cotton T-Shirt",
        description: "A soft and breathable t-shirt made from organic cotton.",
        price: "18.00",
        image: [shirt],
        category: "Fashion",
        date: "2023-10-08",
    },
    {
        _id: "9",
        name: "Bamboo Cutlery Set",
        description: "A reusable bamboo cutlery set for sustainable dining.",
        price: "10.00",
        image: [bamboo],
        category: "Kitchen",
        date: "2023-10-09",
    },
    {
        _id: "10",
        name: "Hemp Backpack",
        description: "A sturdy and eco-friendly backpack made from hemp.",
        price: "40.00",
        image: [hemp],
        category: "Mis",
        date: "2023-10-10",
    },
    {
        _id: "11",
        name: "Reusable Glass Water Bottle",
        description: "A durable glass water bottle with a bamboo l_id.",
        price: "22.00",
        image: [bottle],
        category: "Kitchen",
        date: "2023-10-11",
    },
    {
        _id: "12",
        name: "Biodegradable Phone Case",
        description: "An eco-friendly phone case made from biodegradable materials.",
        price: "18.00",
        image: [case_img],
        category: "Electronics",
        date: "2023-10-12",
    },
    {
        _id: "13",
        name: "Organic Cotton Socks",
        description: "Soft and breathable socks made from organic cotton.",
        price: "10.00",
        image: [socks],
        category: "Fashion",
        date: "2023-10-13",
    },
    {
        _id: "14",
        name: "Compostable Trash Bags",
        description: "Eco-friendly trash bags that decompose naturally.",
        price: "12.00",
        image: [trashbags],
        category: "Kitchen",
        date: "2023-10-14",
    },
    {
        _id: "15",
        name: "Handwoven Jute Rug",
        description: "A beautiful rug made from sustainable jute fiber.",
        price: "55.00",
        image: [rug],
        category: "Mis",
        date: "2023-10-15",
    },
    {
        _id: "16",
        name: "Recycled Aluminum Pen",
        description: "A sleek and stylish pen made from recycled aluminum.",
        price: "7.00",
        image: [pen],
        category: "Mis",
        date: "2023-10-16",
    },
    {
        _id: "17",
        name: "Solar-Powered LED Lamp",
        description: "A portable LED lamp powered by solar energy.",
        price: "28.00",
        image: [lamp],
        category: "Electronics",
        date: "2023-10-17",
    },
    {
        _id: "18",
        name: "Eco-Friendly Yoga Mat",
        description: "A non-toxic yoga mat made from sustainable materials.",
        price: "35.00",
        image: [mat],
        category: "Care",
        date: "2023-10-18",
    },
    {
        _id: "19",
        name: "Beeswax Wraps",
        description: "Reusable wraps made from organic cotton and beeswax.",
        price: "16.00",
        image: [wraps],
        category: "Kitchen",
        date: "2023-10-19",
    },
    {
        _id: "20",
        name: "Sustainable Bamboo Speaker",
        description: "A natural amplifier made from bamboo.",
        price: "45.00",
        image: [speaker],
        category: "Electronics",
        date: "2023-10-20",
    }
    // Add remaining 30 products manually...
];
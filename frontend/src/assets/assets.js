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
import bowl from './bowl.jpg'
import cloth from './cloth.jpg'
import decor from './decor.jpg'
import holder from './holder.jpg'


export const assets = {
    logo,
    bowl,
    cloth,
    decor,
    holder,
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
        price: "10.00",
        image: [cup],
        category: "Kitchen",
        date: "2025-1-01",
    },
    {
        _id: "2",
        name: "Ceramic Plate",
        description: "A handcrafted ceramic plate.",
        price: "12.00",
        image: [plate],
        category: "Kitchen",
        date: "2025-1-02",
    },
    {
        _id: "3",
        name: "Bamboo Toothbrush",
        description: "An eco-friendly toothbrush made from sustainable bamboo.",
        price: "3.00",
        image: [toothbrush],
        category: "Care",
        date: "2025-1-03",
    },
    {
        _id: "4",
        name: "Reusable Cotton Bag",
        description: "A durable and reusable cotton shopping bag.",
        price: "4.00",
        image: [hero_img],
        category: "Fashion",
        date: "2025-1-04",
    },
    {
        _id: "5",
        name: "Recycled Notebook",
        description: "A notebook made from 100% recycled paper.",
        price: "9.00",
        image: [notebook],
        category: "Mis",
        date: "2025-1-05",
    },
    {
        _id: "6",
        name: "Solar-Powered Charger",
        description: "A portable charger powered by solar energy.",
        price: "20.00",
        image: [solar],
        category: "Electronics",
        date: "2025-1-06",
    },
    {
        _id: "7",
        name: "Recycled Plastic Sunglasses",
        description: "Stylish sunglasses made from recycled plastic.",
        price: "10.00",
        image: [sunglass],
        category: "Fashion",
        date: "2025-1-07",
    },
    {
        _id: "8",
        name: "Organic Cotton T-Shirt",
        description: "A soft and breathable t-shirt made from organic cotton.",
        price: "15.00",
        image: [shirt],
        category: "Fashion",
        date: "2025-1-08",
    },
    {
        _id: "9",
        name: "Bamboo Cutlery Set",
        description: "A reusable bamboo cutlery set for sustainable dining.",
        price: "10.00",
        image: [bamboo],
        category: "Kitchen",
        date: "2025-1-09",
    },
    {
        _id: "10",
        name: "Hemp Backpack",
        description: "A sturdy and eco-friendly backpack made from hemp.",
        price: "40.00",
        image: [hemp],
        category: "Mis",
        date: "2025-1-10",
    },
    {
        _id: "11",
        name: "Reusable Glass Water Bottle",
        description: "A durable glass water bottle with a bamboo l_id.",
        price: "12.00",
        image: [bottle],
        category: "Kitchen",
        date: "2025-1-11",
    },
    {
        _id: "12",
        name: "Biodegradable Phone Case",
        description: "An eco-friendly phone case made from biodegradable materials.",
        price: "12.00",
        image: [case_img],
        category: "Electronics",
        date: "2025-1-12",
    },
    {
        _id: "13",
        name: "Organic Cotton Socks",
        description: "Soft and breathable socks made from organic cotton.",
        price: "10.00",
        image: [socks],
        category: "Fashion",
        date: "2025-1-13",
    },
    {
        _id: "14",
        name: "Compostable Trash Bags",
        description: "Eco-friendly trash bags that decompose naturally.",
        price: "7.00",
        image: [trashbags],
        category: "Kitchen",
        date: "2025-1-14",
    },
    {
        _id: "15",
        name: "Handwoven Jute Rug",
        description: "A beautiful rug made from sustainable jute fiber.",
        price: "23.00",
        image: [rug],
        category: "Mis",
        date: "2025-1-15",
    },
    {
        _id: "16",
        name: "Recycled Aluminum Pen",
        description: "A sleek and stylish pen made from recycled aluminum.",
        price: "7.00",
        image: [pen],
        category: "Mis",
        date: "2025-1-16",
    },
    {
        _id: "17",
        name: "Solar-Powered LED Lamp",
        description: "A portable LED lamp powered by solar energy.",
        price: "28.00",
        image: [lamp],
        category: "Electronics",
        date: "2025-1-17",
    },
    {
        _id: "18",
        name: "Eco-Friendly Yoga Mat",
        description: "A non-toxic yoga mat made from sustainable materials.",
        price: "17.00",
        image: [mat],
        category: "Care",
        date: "2025-1-18",
    },
    {
        _id: "19",
        name: "Beeswax Wraps",
        description: "Reusable wraps made from organic cotton and beeswax.",
        price: "11.00",
        image: [wraps],
        category: "Kitchen",
        date: "2025-1-19",
    },
    {
        _id: "20",
        name: "Sustainable Bamboo Speaker",
        description: "A natural amplifier made from bamboo.",
        price: "25.00",
        image: [speaker],
        category: "Electronics",
        date: "2025-1-20",
    },
    {
        _id: "21",
        name: "Fish Bowl",
        description: "Handmade fish bowl for your kitchen",
        price: "15.00",
        image: [bowl],
        category: "Kitchen",
        date: "2025-3-20",
    },
    {
        _id: "22",
        name: "Pajama",
        description: "Hand sew organic cotton pajamas for beautiful night",
        price: "25.00",
        image: [cloth],
        category: "Fashion",
        date: "2025-2-19",
    },
    {
        _id: "23",
        name: "Dream Catcher",
        description: "A beautiful decor for your beautiful House. Catch your dreams",
        price: "7.00",
        image: [decor],
        category: "Mis",
        date: "2025-1-20",
    },
    {
        _id: "24",
        name: "Jewelery Holder",
        description: "A hand made ceramic mush jewelery holder perfect for your jeweleries.",
        price: "7.00",
        image: [holder],
        category: "Mis",
        date: "2025-1-20",
    }
    // Add remaining 30 products manually...
];
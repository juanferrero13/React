//El metodo addDoc agrega un documento y el collection nos determina en que coleccion lo vamos a agregar
import { addDoc, collection } from "firebase/firestore"
//Importamos nuestra base de datos, que configuramos en nuestra carpeta "config"
import { db } from "../config/firebaseConfig"


const products = [
    { name: "Gorra Los Angeles Dodgers Authentic Collection", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-la-dodgers-mlb22-bp-59fifty-60228481-1_1_1.jpg", price: 25000, category: "style", description: "Gorra Style Collection", stock: 10 },
    { name: "Gorra New York Yankees League Essential", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-new-york-yankees-league-essential-9fifty-w3t000058-1_1.jpg", price: 35000, category: "style", description: "Gorra Style Collection", stock: 10 },
    { name: "Gorra San Antonio Spurs Full Collection", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-san-antonio-spurs-59fifty-w3t000119-1_1_1.jpg", price: 35000, category: "style", description: "Gorra Style Collection", stock: 10 },
    { name: "Gorra Los Angeles Lakers Full Collection", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-los-angeles-lakers-59fifty-otc-w3t000116-1_1_1.jpg", price: 25000, category: "style", description: "Gorra Style Collection", stock: 10 },
    { name: "Gorra Denver Nuggets Full Collection", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-denver-nuggets-59fifty-w3t000115-1_1_2.jpg", price: 35000, category: "style", description: "Gorra Style Collection", stock: 10 },
    { name: "Gorra New York Yankees Tonal Mesh", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-new-york-yankees-tonal-mesh-9forty-trucker-w3t000309-1_1.jpg", price: 20000, category: "clasica", description: "Gorra Classic Collection", stock: 10 },
    { name: "Gorra Pittsburgh Pirates Total Black", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-pittsburgh-pirates-mlb22-bp-39thirty-60228117-1_1.jpg", price: 22000, category: "clasica", description: "Gorra Classic Collection", stock: 10 },
    { name: "Gorra Chicago Bears NFL22 Classic Master", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-chicago-bears-nfl22-sideline-39thirty-60279585-1_1.jpg", price: 15000, category: "clasica", description: "Gorra Classic Collection", stock: 10 },
    { name: "Gorra Batman Character Logo Gotic", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-character-logo-9forty-batman-60222453-1-min_1.jpg", price: 22000, category: "clasica", description: "Gorra Classic Collection", stock: 10 },
    { name: "Gorra Ducati Motor Logo Tonal Camo", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/6/0/60284553-gorra-new-era-9forty-ducati-1-min_1_1.jpg", price: 25000, category: "clasica", description: "Gorra Classic Collection", stock: 10 },
    { name: "Beanie NE Pop Colour Cuff Knit Medium", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorro-beanie-new-era-ne-pop-colour-cuff-knit-60191703-1-min_1.jpg", price: 16000, category: "beanie", description: "Beanie Full Collection", stock: 10 },
    { name: "Beanie Chicago Bulls Knit Medium Heather Essential", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorro-new-era-heather-essential-beanie-chicago-bulls-60184774-1-min_1.jpg", price: 14000, category: "beanie", description: "Beanie Full Collection", stock: 10 },
    { name: "Beanie New York Yankees WMNS Metallic Logo", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/b/e/beanie-new-era-new-york-yankees-wmns-metallic-logo-60184805-1-min_1.jpg", price: 15000, category: "beanie", description: "Beanie Full Collection", stock: 10 },
    { name: "Beanie NE Pop Colour Cuff Knit Medium", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorro-beanie-new-era-ne-pop-colour-cuff-knit-60184698-1-min_1.jpg", price: 18000, category: "beanie", description: "Beanie Full Collection", stock: 10 },
    { name: "Beanie NE Pop Colour Cuff Knit Medium", img: "https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorro-beanie-new-era-ne-pop-colour-cuff-knit-60184693-2-min_1.jpg", price: 17000, category: "beanie", description: "Beanie Full Collection", stock: 10 }
]

export const seedProducts = () => {

    //Recorremos el array de productos para subirlo a la base de datos
    products.forEach(product => {
        addDoc( collection(db, "products"), product)
    })

}
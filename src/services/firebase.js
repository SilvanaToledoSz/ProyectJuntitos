import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh8-I_2nthlGupqyhBnFU321twE4-FRvU",
  authDomain: "proyectojuntitos.firebaseapp.com",
  projectId: "proyectojuntitos",
  storageBucket: "proyectojuntitos.appspot.com",
  messagingSenderId: "347997390529",
  appId: "1:347997390529:web:fc3a24be894749e0b23640"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp)


export async function getProductos() {   
    const collectionRef = collection(db, "productos")
    let results = await getDocs(collectionRef)    
    let dataProductos = results.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return dataProductos    
}

export async function getUnProd(idParams) {    
    const docRef = doc(db, "productos", idParams);
    const docResult = await getDoc(docRef);
    return {id: docRef.id, ...docResult.data()}
}

export async function getProdCategory(idCategoryParams) {  
    const collectionRef = collection(db, "productos")
    const queryCat = query(collectionRef, where("category", "==", idCategoryParams )) 
    let results = await getDocs(queryCat)
    let dataProductos = results.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return dataProductos    
}

export async function createBuyOrder(orderData) {
    const collectionRef = collection(db, "orders")
    let respuesta = await addDoc(collectionRef, orderData)
    return respuesta.id
}

/* async function sendDataToFirebase() {
    const data = [
        {
            title: 'Porta libretas',
            price: 1500,
            img: '/imgs/id7.jpg',
            stock: 34,
            category: 'accesorios',
            description: '¿Vos también salís del / la pediatra con miles de papeles que no sabes donde meter? Aquí la solución🙌🏻😉 Porta libretas / dni / carnet / órdenes medicas y lo que necesites guardar y tener más o menos organizado☺✨',
            offer: true
        },
    
        {
            title: 'Bodys de verano',
            price: 4000,
            img: '/imgs/id8.jpg',
            stock: 13,
            category: 'ropa',
            description: 'Temporada pasada de verano 😍 Llevá las prendas que quedan a los mismos precios !!! 🔥',
            offer: true
        },
    
        {
            title: 'Conjunto de invierno',
            price: 4000,
            img: '/imgs/id9.jpg',
            stock: 12,
            category: 'ropa',
            description: 'Media estación con descuentos 🙌🏻💜.',
            offer: true
        },
        {
            title: 'Accesorios para cuna',
            price: 8000,
            img: '/imgs/id10.jpg',
            stock: 5,
            category: 'accesorios',
            description: 'Acolchados de media estacion- verano/ invierno 🌟 Juego de sabanas 🌟 Chichonera 🌟 Almohadones decorativos 🌟 Banderines💜',
            offer: false
        },
    
        {
            title: 'Ajuares para recien nacidos',
            price: 7500,
            img: '/imgs/id11.jpg',
            stock: 30,
            category: 'ropa',
            description: 'Puro algodón pima y nacional para tu bebé. Siempre cuidando la piel de tu bebé🍃♥ Incluye: bata cruzada, ranita y gorro ✨',
            offer: false
        },
    
        {
            title: 'Mantas recibidoras de abrigo',
            price: 10000,
            img: '/imgs/id12.jpg',
            stock: 10,
            category: 'accesorios',
            description: 'Gabardina estampada y corderito soft natural del revés ❄⛄Miden 75 x 95 cm y son súper abrigadas, calentitas, suaves y livianas para llevar a todos lados! 😉',
            offer: false
        }
    ]
    let itemsCollectionRef = collection(db, "productos")
    for (let prod of data) {
        let newDoc = await addDoc(itemsCollectionRef, prod)
        console.log("Documento creado", newDoc.id)

    }
} */



export default FirebaseApp;
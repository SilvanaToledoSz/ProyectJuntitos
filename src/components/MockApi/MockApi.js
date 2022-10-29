/* const data = [
    {
        id: 1,
        title: 'Bodys',
        price: 2000,
        img: '../imgs/id1.jpg',
        stock: 3,
        category: 'ropa',
        description: 'Comodidad y calidad ante todo 🍃 Puro algodón para tu bebé 👶🏻💜',
        offer: true
    },

    {
        id: 2,
        title: 'Almohadon de lactancia',
        price: 5500,
        img: '../imgs/id2.jpg',
        stock: 10,
        category: 'accesorios',
        description: 'Este almohadón te va ayudar y acompañar 🌟 100% algodón 🌟 Con cierre para sacar la funda y lavar 🌟 Relleno de vellón siliconado con funda individual 🌟 También te va a permitir sentar al bebé cuando sea el momento y que tenga una contención 🙌🏻',
        offer: false
    },

    {
        id: 3,
        title: 'Ajuares',
        price: 4000,
        img: '../imgs/id3.jpg',
        stock: 0,
        category: 'ropa',
        description: 'En esos primeros días, las primeras semanas, tu bebé necesita ropa suave, su piel es delicada y hay que cuidarla❤ Telas 100% algodón hipoalergénicas 🍃',
        offer: false
    },
    {
        id: 4,
        title: 'Set de nacimiento',
        price: 2500,
        img: '../imgs/id4.jpg',
        stock: 3,
        category: 'accesorios',
        description: 'Incluye: Canasto para accesorios - Cambiador - Neceser con cierre e impermeable - Pack de babitas 🌠',
        offer: true
    },

    {
        id: 5,
        title: 'Conjunto de morley celeste',
        price: 6500,
        img: '../imgs/id5.jpg',
        stock: 10,
        category: 'ropa',
        description: 'Básico y hermoso!💙',
        offer: false
    },

    {
        id: 6,
        title: 'Cambiador',
        price: 10000,
        img: '../imgs/id6.jpg',
        stock: 0,
        category: 'accesorios',
        description: 'Cambiador. Neceser con cierre e impermeable. Pack de babitas. Canasto para pañales y accesorios. Estampado en gabardina caritas animales azul.',
        offer: false
    }
]

export function getProductos() {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(data), 2000
        )        
    })
}

export function getUnProd(idParams) {
    return new Promise ((resolve, reject) => {
        let prodReq = data.find( (prod) => {
            return (prod.id === Number(idParams))
            
        })
        
        setTimeout(() => {
            if (prodReq === undefined) 
                reject(new Error("No se pudo encontrar el curso"))
            else {
                resolve(prodReq)
            }
        }, 2000
        )
        
    })
}

export function getProdCategory(idCategoryParams) {
    return new Promise (
        (resolve) => {
            let filterProd = data.filter(prod => prod.category === idCategoryParams)
            setTimeout(() => resolve(filterProd), 2000
            )
        }
    )
}

 */
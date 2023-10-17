import img01 from './img/01.png';
import img02 from './img/02.png';
import img03 from './img/03.png';
import img04 from './img/04.png';
import img05 from './img/05.png';
import img06 from './img/06.png';
import img07 from './img/07.png';
import img08 from './img/08.png';
import img09 from './img/09.png';
import img10 from './img/10.png';
import img11 from './img/11.png';
import img12 from './img/12.png';
import img13 from './img/13.png';
import img14 from './img/14.png';
import img15 from './img/15.png';

const products = [

    // hombres:

    {id: '1', 
    name: 'Cárdigan Hombre', price: 11850.3, 
    category: 'hombres', 
    img: img01, 
    stock: 12, 
    description: 'Cárdigan escote en “v” con botones y trabajo de punto en prenda. Estándar, holgado medio. Textura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'},

    {id: '2', 
    name: 'Cárdigan Hombre', price: 11236.5, 
    category: 'hombres', 
    img: img02, 
    stock: 8, 
    description: 'Cárdigan con capucha y bolsillos. Estándar, holgado medio. Textura de lana, con alta capacidad calórica, segunda y tercera piel. Ideal para otoño/invierno.'},

    {id: '3', 
    name: 'Sweater Pullover', price: 11950, 
    category: 'hombres', 
    img: img03, 
    stock: 5, 
    description: 'Sweater De Hilo Hombre Entallado Slim Fit - Excelente calce y confección.'},

    //mujeres:

    {id: '4', 
    name: 'Sweater Manhattan', 
    price: 9990.55, 
    category: 'mujeres', 
    img: img04, stock: 18, 
    description: 'Sweater Manhattan Bremer Oversize: Talle único. (Universal). Medidas: Ancho 73 cm(contorno es 146cm). Largo 65 cm. Material: Viscosa, PBT Mix.'},

    {id: '5', 
    name: 'Saco Lanilla', 
    price: 20683, 
    category: 'mujeres', 
    img: img05, stock: 12, 
    description: '- Saco lanilla largo. Manga larga. Amplio. Abertura en los costados.'},

    {id: '6', 
    name: 'Saco Abierto', 
    price: 14299, 
    category: 'mujeres', 
    img: img06, stock: 7, 
    description: 'Saco largo abierto con bolsillos y tajos laterales. Detalle de puño doblado. Estándar, holgado medio. Textura suave, apta para usar sobre la piel. Hilado Cristal Poliacrilo Nylon Otras Fibras TALLES DISPONIBLES S M L XL'},

    //niños:

    {id: '7', 
    name: 'Buzo Dani', 
    price: 6790, 
    category: 'ninos', 
    img: img07, stock: 25, 
    description: 'Remera - Buzo Manga Larga. Detalles bordados a contratono. Waffle Zittana. 100% Algodón.'},
    
    {id: '8', 
    name: 'Buzo Ian', 
    price: 8090, 
    category: 'ninos', 
    img: img08, stock: 14, 
    description: 'Buzo de algodon rustico estampado.'},

    {id: '9', 
    name: 'Pijama Gansitos', 
    price: 5990, 
    category: 'ninos', 
    img: img09, stock: 10, 
    description: 'Pijama Remera Manga Corta. Bermuda. Full Print Serigrafía. Jersey 30/1. Algodón Peinado Liv. 100% Algodón.'},

    //niñas:

    {id: '10', 
    name: 'Cárdigan Niñas', 
    price: 16000, 
    category: 'ninas', 
    img: img10, stock: 15, 
    description: 'Cárdigan/camperita en lana Cisne, color azul. Se teje a pedido en talles: 6, 8 y 10. T6: 5-6 años. T8: 7-8 años. T10: 9-10 años'},

    {id: '11', 
    name: 'Campera Cami', 
    price: 8550, 
    category: 'ninas', 
    img: img11, stock: 11, 
    description: 'Campera Básica con Canguro. Cierre de Aluminio. Rústico. 50% Algodón. 50% Poliester.'},

    {id: '12', 
    name: 'Buzo Juana', 
    price: 7390, 
    category: 'ninas', 
    img: img12, stock: 25, 
    description: 'Buzo algodon rustico con lycra. Full estampa'},

    //bebes:
    
    {id: '13', 
    name: 'Conjunto modal', 
    price: 10725, 
    category: 'bebes', 
    img: img13, stock: 25, 
    description: 'PIJAMA: Buzito con pantalón en modal gamuzado grueso estampado. Pantalón reversible, forrado en algodón interlok liso y bolsillo en la parte de atras. Delicadas combinaciones y algodón super suave,  ideal  para el descanso de tu bebé. Talle: 0-2, 2-4, 4-6, 6-9 y 9-12 meses.'},

    {id: '14', 
    name: 'Conjunto paño', 
    price: 20850, 
    category: 'bebes', 
    img: img14, stock: 5, 
    description: 'Conjunto comprende, Saquito, pollera y boina en paño escocés. Saquito con bolsillos y botones de madera en la parte delantera para acceder a la prenda. Pollera con pliegues. Talles: 12/18 y 24 meses.'},

    {id: '15', 
    name: 'Malla UV', 
    price: 9000, 
    category: 'bebes', 
    img: img15, stock: 35, 
    description: 'Conjunto Malla UV manga larga comprende, bombacha con remerita  de lycra estampada. Con colita de pelo. Delicados volados en la remera y broches en la parte de atrás para acceder a la prenda. Con protección certificada. Talles: 4-8, 8-12, 12-18, 18-24 y 24-36 meses.'}
]

export const getProducts = ()=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId));
        }, 500)
    })
}

//modifico la constante usando el método filter en lugar de find, para que me muestre todos los productos de cada categoría.

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const filteredProducts = products.filter((prod) => prod.category === productCategory);
            resolve(filteredProducts);
        }, 500)
    })
}

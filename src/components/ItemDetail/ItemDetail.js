import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount.js';

const ItemDetail = ({id, name, img, category, description, price, stock})=> {
    
    //formatea el precio a peso argentino, con dos decimales
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price);
    
    return (
        <article className='CardItemDet has-background-primary'>
            
            <header className='Header'>
                <h2 className='ItemHeader card-header-title is-centered is-size-3-desktop has-text-black py-1 title'>
                    🌺 {name} 🌺
                </h2>
            </header>
            <picture className="cardDet-img">
                <img src={img} alt={name} className='ItemImgDet card-image mt-3'/>
            </picture>
            <section className="card-content">
                
                <p className='Info is-size-5-desktop has-text-black is-multiline'>
                    Categoría: {category}
                </p>

                <p className='Info m-5 is-size-4-desktop has-text-black is-multiline'>
                    Descripción: {description}
                </p>

                <p className='Info is-size-3-desktop has-text-black is-multiline'>
                    Precio: {formattedPrice}
                </p>

            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada ', quantity)}/>
            </footer>
            
        </article>
    )
}

export default ItemDetail;

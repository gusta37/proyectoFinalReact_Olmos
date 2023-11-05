import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price);

    return(
        <article className='CardItem m-5 has-background-primary'>
            <header className='Header'>
                <h2 className='ItemHeader card-header-title is-centered is-size-3-desktop has-text-black py-1'>
                    🌺 {name} 🌺
                </h2>
            </header>
            <picture className="card-img">
                <img src={img} alt={name} className='ItemImg card-image mt-3'/>
            </picture>
            <section className="card-content">
                <p className='Info is-size-4-desktop has-text-black'>
                    Precio: {formattedPrice}
                </p>
                <p className='Info is-size-5-desktop has-text-black'>
                    Stock disponible: {stock} unidades.
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option btn button is-large is-responsive is-primary'>🌺 Ver detalle 🌺</Link>
            </footer>
        </article>
    )
}

export default Item;
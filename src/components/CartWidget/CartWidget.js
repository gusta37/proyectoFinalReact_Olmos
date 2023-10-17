import cart from './assets/mbrishoppingcart_99558.svg';

//lo importo en el navbar pq quiero que este dentro de el.
const CartWidget = () => {
    return (
        <div className='is-flex is-justify-content-center'>
            <img className='mx-5 mb-2' src={cart} alt='cart-widget'/>
            <p className='mt-2'>0</p>
        </div>
    )
}

export default CartWidget;
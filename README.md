# Introducción:

> Profe: sinceramente disfrute mucho realizar este trabajo, aunque tenia un poco de temor ya que soy personal de salud(enfermero), y no se mucho de diseño ni de programación. Igualmente decidí afrontar el desafío y lo realice lo mejor que podia. Me senti tan cómodo que aproveche para practicar bastante de diseño, usando Css y aprendiendo a usar Bulma, y también para repasar el diseño responsivo.
> Realizo una pagina de venta de ropa, basada en la telenovela "Bety La Fea".
> Aprovecho la temática para repasar, como mencione anteriormente, diseño responsivo. Para ello agrego junto al catalogo de productos, un sector "sobre nosotros" donde se describe la empresa y otro sector sobre el equipo, donde se presenta a cada integrante. en este ultimo se crean queries que adaptan las imágenes y los textos según el tamaño del dispositivo.

## Antes de entregar:

> Como se solicito se limpio el código eliminando por ejemplo, código que estaba comentado y que no se usaba. Se eliminaron varios archivo que no se usaban ya, como el archivo asyncMock.js.
> Se cumplen con las consignas solicitadas.

### complementos:

> nav y footer: en ambos se coloca el logo de la empresa y el menu de navegación. ambos tienen distintas propiedades en css que logra acomodar de distinta forma los botones, aunque los botones navegan funcionalmente. el logo tiene enlace hacia el inicio y el resto de los botones a las distintas categorías.

> En nav también se coloca el icono del carrito, el cual muestra la cantidad de productos agregados y funciona como link que lleva hasta el carrito.

> dentro de itemlistcontainer tenemos todos los productos que muestran la informacion ontenida directamente desde la base de datos de firebase. 

> cuando vemos el detalle del producto encontramos un contador que nos permite agregar una cantidad deseada de ese producto. al agregar ya veremos el icono del carrito y cuantos productos. dentro de destalle veremos botones de opcion para volver al inicio, terminar la compra o ver el carrito. tambien tenemos un boton de limpiar carrito que borrara todos los productos.

> todos los valores de los precios poseen una funcion que formatea los valores a formato de peso argentino.

> cuando deseamos terminar la compra, al presionar el boton de terminar compra, podemos realizar el checkout, el cual nos arrojara un numero de orden.

> sE CAMBIAN CREDENCIALES DE FIREBASE POR VARIABLES DE ENTORNO.

#### Profe, lo que agregue en este readme fue a las apuradas que no tenia mas tiempo, perdon! y MUCHAS GRACIAS!


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

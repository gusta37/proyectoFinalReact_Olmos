import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
//images:
import armandoImg from "./assets/armando.jpg";
import betyImg from "./assets/bety.jpg";
import hugoImg from "./assets/hugo.jpg";
import marcelaImg from "./assets/marcela.jpg";
import nicolasImg from "./assets/nicolas.jpg";
import patriciaImg from "./assets/patricia.jpg";

//css:
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      {categoryId ? null : ( //me ayuda a esconder los siguientes elemento cuando salgo de la pagina principal.
        <h1 className="saludo m-5 has-text-primary">
          {greeting}
        </h1>
      )}
      {categoryId ? null : (
        <div className="container">

          <hr className="has-background-primary"/>  

          <div className="sobreN_container p-5">
            <h2 className="sobreN_T title has-text-black has-text-left">
              SOBRE NOSOTROS
            </h2>

            <div className="sobreN_text has-text-black is-size-5-desktop has-text-justified">
              <p>
                ¡Bienvenidos a Eco-Moda! Somos una marca comprometida
                con la moda consciente y amigable con el medio ambiente. Nuestra
                historia se remonta a nuestra pasión por la moda y nuestro deseo
                de marcar la diferencia en la industria.
              </p>
              <br />
              <p>
                En Eco-Moda, creemos que la belleza auténtica radica en la
                singularidad de cada persona. Nos enorgullece promover la moda
                que no solo realza tu estilo, sino que también respeta nuestro
                planeta. Trabajamos arduamente para ofrecer prendas de vestir
                que son elegantes y sostenibles, utilizando materiales
                reciclados y ecológicos en nuestros diseños.
              </p>
              <br />
              <p>
                Nuestra responsabilidad no se limita solo a la moda. Colaboramos
                con comunidades locales y organizaciones benéficas para
                garantizar la producción ética de nuestras prendas y apoyar a
                quienes trabajan en la industria. Además, nos esforzamos por
                crear conciencia sobre la importancia de la moda sostenible y
                cómo nuestras elecciones pueden hacer del mundo un lugar mejor.
              </p>
              <br />
              <p>
                En Eco-Moda, celebramos la diversidad y creemos que
                todos somos hermosos a nuestra manera. Nuestro compromiso es
                impulsar la autoexpresión y la confianza a través de la moda
                sostenible.
              </p>
              <br />
              <p>
                Únete a nosotros en nuestro viaje hacia un futuro más ecológico
                y consciente. Juntos, podemos cambiar la forma en que vemos la
                moda y el impacto que tiene en nuestro mundo.
              </p>
            </div>
          </div>

          <hr className="has-background-primary"/>

          <div className="equipo_container p-5">
          <h2 className="sobreN_T title has-text-black has-text-left">
              NUESTRO EQUIPO
            </h2>
            <div className="sobreN_D is-flex">
              <div className="">
                <h3 className="title is-4 has-text-right">
                  Betty Pinzón - La Inteligencia detrás de Eco-Moda
                </h3>
                <p className="has-text-justified">
                  Betty Pinzón, una joven brillante y con un sentido de la moda
                  único, se convierte en el cerebro detrás de nuestra empresa. Su inteligencia y habilidades en la
                  industria de la moda son inigualables. Betty es el ingenio que
                  impulsa la empresa, aporta ideas frescas y lidera
                  proyectos clave.
                </p>
              </div>
              <img
                className="equipo_img m-5"
                src={betyImg}
                alt="Descripción de la imagen"
              />
            </div>
            <hr className="has-background-primary"/>

            <div className="sobreN_D is-flex">
              <img
                className="equipo_img m-5"
                src={armandoImg}
                alt="Descripción de la imagen"
              />

              <div>
                <h3 className="title is-4 has-text-left">
                  Armando Mendoza - Presidente de Eco-Moda
                </h3>
                <p className="has-text-justified">
                  Armando Mendoza es el presidente de Eco-Moda. Su principal rol en la empresa es liderarla con
                  carisma y encanto. Su liderazgo es fundamental
                  para el éxito de Eco-Moda.
                </p>
              </div>
            </div><hr className="has-background-primary"/>

            <div className="sobreN_D is-flex">
              
              <div>
                <h3 className="title is-4 has-text-right">
                Marcela Valencia - Modelo y Directora de Publicidad
                </h3>
                <p className="has-text-justified">
                Marcela es la directora de publicidad de Eco-Moda y una modelo de renombre. Su belleza es tan impresionante como su profesionalismo. Marcela lidera las campañas publicitarias de la empresa y agrega ese toque de sofisticación que distingue a Eco-Moda en el mundo de la moda.
                </p>
              </div>
              <img
                className="equipo_img m-5"
                src={marcelaImg}
                alt="Descripción de la imagen"
              />              
            </div><hr className="has-background-primary"/>

            <div className="sobreN_D is-flex">
              <img
                className="equipo_img m-5"
                src={hugoImg}
                alt="Descripción de la imagen"
              />

              <div>
                <h3 className="title is-4 has-text-left">
                Hugo Lombardi - Asistente de Presidencia
                </h3>
                <p className="has-text-justified">
                Hugo amigo de Armando y su asistente personal. Está siempre dispuesto a ayudar en cualquier situación. Su papel en la empresa es fundamental para mantener a Eco-Moda en funcionamiento.
                </p>
              </div>
            </div><hr className="has-background-primary"/>

            <div className="sobreN_D is-flex">
              
              <div>
                <h3 className="title is-4 has-text-right">
                Nicolás Mora - Crítico de Moda y Periodista
                </h3>
                <p className="has-text-justified">
                Nicolás es un periodista de moda con un ojo crítico y un don para identificar tendencias. Su papel en Eco-Moda es esencial para dar visibilidad a la marca en los medios de comunicación.
                </p>
              </div>
              <img
                className="equipo_img m-5"
                src={nicolasImg}
                alt="Descripción de la imagen"
              />              
            </div><hr className="has-background-primary"/>

            <div className="sobreN_D is-flex">
              <img
                className="equipo_img m-5"
                src={patriciaImg}
                alt="Descripción de la imagen"
              />

              <div>
                <h3 className="title is-4 has-text-left">
                Patricia Fernández - Modelo
                </h3>
                <p className="has-text-justified">
                Es una modelo destacada en la empresa, con seis semestres de economía en la San Marino.
                </p>
              </div>
            </div><hr className="has-background-primary"/>
          </div>
          <p>
            <b className="thanks has-text-black is-size-1-desktop">
              Gracias por elegir Eco-Moda
            </b>
          </p>
        </div>
      )}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

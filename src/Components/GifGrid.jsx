
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {


const {images, isLoading} = useFetchGifs(category) //Cree un hooks que se encarga de la carga de imagenes y de avisar si se cargaron


  return (
    <>
        <h3>{category}</h3>
        { //And Logico
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
            {
                images.map( (image) => (
                    <GifItem
                        key={image.id}
                        { ...image } //Esparce todas las propiedades, esto significa que de forma automatica me las manda al componente para que yo pueda usarlas
                    />
                ))
            }
        </div>
    </>
  )
}

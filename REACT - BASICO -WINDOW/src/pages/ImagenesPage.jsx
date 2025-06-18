import imagenlocal from "../assets/1.png"
import { BtnVolver } from "../components/ui/buttons/BtnVolver"


export const ImagenesPage = () => {
    return (
        <main className="max-w-3xl mx-auto p-6 space-y-10 bg-amber-50">

            {/* Boton para devolver a pagina anterior , recuerda que hay que importarlo  */}
            <BtnVolver />

            <h1 className="text-3xl font-bold text-center "> Imagens con REACT</h1>

            {/* mostrar imagenes, con url y local  */}
            <section className="space-y-2">
                {/* Imagens locales importadas */}
                <h2 className="text-xl font-semibold"> - Imagens locales importadas </h2>
                <img src={imagenlocal} alt="NIÑO AFROCOLOMBIANO" />

                {/* Imagenes extrernas url */}
                <h2 className="text-xl font-semibold  "> - Imagenes extrernas url </h2>
                <img src="https://img.freepik.com/fotos-premium/personaje-3d-gente-negra-dibujos-animados_1035036-651.jpg?w=2000" alt="NIÑO AFROCOLOMBIANO" />
                {/* Imagene para el fondo de la pagima  */}
            </section>

            {/* mostrar imagenes como fondo  */}
            <section className="space-y-2">
                {/* Imagens locales importadas */}
                <h2 className="text-xl font-semibold"> - Imagen como fondo importadas </h2>

                {/* // flex : nos permite poder trabjar con center y demas  */}
                {/* imagens de fondo ; backgroundImage */}

                <div className=" flex h-64 bg-cover bg-center rounded-2xl items-center justify-center"

                    style={{
                        backgroundImage: "url('https://img.freepik.com/fotos-premium/fondo-vectorial-dibujos-animados-personas-negras_1011097-4646.jpg?w=2000')",
                    }}>

                    {/* texto que va encima  */}
                    <span className="bg-black/60 px-4 py-2 rounded-2xl text-white "> Fondo con texto encima</span>

                </div>
            </section>



            {/* mostrar imagenes con loading : si la imagen de la url aun no ha cargado, mostrara un loading hasta que se cargue SSINO la muestra de una- Añade solo ( loading="lazy"  )*/}
            <section className="space-y-2">
                {/* Imagenes extrernas url */}
                <h2 className="text-xl font-semibold  ">-  Imagenes con lazy loading -con carga </h2>
                <img src="https://th.bing.com/th/id/OIP.ZgliuwwVrMY1SqYyfuOFXQAAAA?rs=1&pid=ImgDetMain&cb=idpwebpc1"
                    alt="MUJER TRABAJADORA AFROCOLOMBIANA"
                    loading="lazy" />

            </section>



        </main>
    );
};
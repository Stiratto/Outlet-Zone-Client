import { Link } from "react-router-dom";
import { LetsTalk } from "../components/LetsTalk";
import { FAQ } from "../components/FAQ";
import { ProductsMarquee } from "../components/ProductsMarquee";

export const Homepage = () => {
  const images = [
    "https://outletzone7.files.wordpress.com/2023/11/22-1685985038-e1700626356471.jpg",
    "https://outletzone7.files.wordpress.com/2023/11/19330956-3284904655-e1700626312513.jpg",
  ];

  return (
    <article className="pt-24 lg:pt-0 ">
      <section className="mb-24">
        <img src={images[0]} alt="" />

        <div className="container mx-auto pt-24">
          <div className="flex flex-col px-4 md:flex-row justify-around  ">
            {" "}
            <h1 className="mb-5 text-5xl font-bold text-yellow-400 max-w-xl">
              Descubre calidad y experiencia a tu servicio.
            </h1>
            <div>
              {" "}
              <p className="mb-5 text-black max-w-lg">
                Confía en nosotros para productos de alta calidad y reparaciones
                expertas en tu hogar. Somos tu socio dedicado, enfocados en
                brindar soluciones duraderas y prácticas para cuidar lo que más
                valoras.
              </p>
              <div className="hero-buttons flex gap-4">
                <Link to={"/outletzone/contacto"}>
                  <button className="btn bg-yellow-400 rounded-none border-none text-white">
                    Contactanos
                  </button>
                </Link>
                <Link to={"/outletzone/tienda"}>
                  <button className="btn bg-transparent border rounded-none border-yellow-400  text-yellow-400">
                    Tienda
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex flex-col gap-20 text-center  text-black ">
        <h2 className="text-5xl leading-normal font-semibold ">
          ¿A qué nos dedicamos?
        </h2>
        <section className="px-4 flex flex-col  max-w-7xl mx-auto ">
          {/* First card */}
          {/* First card */}
          {/* First card */}
          {/* First card */}
          <div className="flex flex-col md:flex-row items-center justify-evenly max-w-7xl mx-auto">
            <div className="  text-black text-start  w-full">
              <div className="max-w-xl flex flex-col text-start justify-center items-center mx-auto">
                <blockquote className="text-2xl md:text-4xl font-semibold px-8 pt-8 ">
                  Electrodomésticos de Calidad para tu Hogar
                </blockquote>

                <p className="text-lg max-h-[400px] duration-200 p-8">
                  Venta y reparación de electrodomésticos de calidad. Descubre
                  nuestra gama premium para tu hogar y obtén soluciones
                  confiables. Tu satisfacción es nuestra prioridad.
                </p>
              </div>
            </div>
            <img
              src="https://outletzone7.files.wordpress.com/2023/11/woman-taking-out-eggs-from-fridge-morning-breakfast-housewife-getting-helthy-eggs-other-ingredients-from-refrigerator-her-kitchen.jpg"
              alt="Mujer abriendo una nevera en la cocina"
              className="md:w-[682px] h-[382px] object-cover rounded-xl md:rounded-none"
            ></img>
          </div>

          {/* Second card */}
          {/* Second card */}
          {/* Second card */}
          {/* Second card */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-evenly max-w-7xl mx-auto ">
            <img
              src="https://outletzone7.files.wordpress.com/2023/11/repairman-doing-air-conditioner-service.jpg"
              alt="Persona reparando un aire acondicionado"
              className="md:w-[682px] h-[382px] object-cover rounded-xl md:rounded-none"
            />
            <div className=" text-black text-start  w-full">
              <div className="max-w-xl flex flex-col text-start justify-center items-center mx-auto ">
                <blockquote className="text-2xl md:text-4xl font-semibold px-8 pt-8">
                  Reparación Confiable para tus Electrodomésticos
                </blockquote>

                <p className="text-lg max-h-[400px]  duration-200 p-8">
                  No dejes que un electrodoméstico averiado arruine tu día.
                  Nuestro equipo experto está aquí para reparar tus dispositivos
                  rápidamente. Funcionamiento óptimo, sin complicaciones
                </p>
              </div>
            </div>
          </div>

          {/* Third card */}
          {/* Third card */}
          {/* Third card */}
          {/* Third card */}
          <div className="flex flex-col md:flex-row items-center justify-evenly max-w-7xl mx-auto">
            <div className="  text-black text-start  w-ful">
              <div className="max-w-xl flex flex-col text-start justify-center items-center mx-auto">
                <blockquote className="text-2xl md:text-4xl font-semibold px-8 pt-8 ">
                  Prevención para un Funcionamiento Óptimo
                </blockquote>

                <p className="text-lg max-h-[400px]  duration-200 p-8">
                  Previene problemas en tus electrodomésticos con nuestro
                  mantenimiento especializado para neveras, lavadoras y aires
                  acondicionados. Nuestro equipo asegura un rendimiento óptimo y
                  longevidad.
                </p>
              </div>
            </div>
            <img
              src="https://outletzone7.files.wordpress.com/2023/11/young-man-working-as-electrician-exposing-back-fridge-check-repair-it.jpg"
              className="md:w-[682px] h-[382px] object-cover rounded-xl md:rounded-none "
            ></img>
          </div>
        </section>

        {/* End "a que nos dedicamos" section */}
        {/* End "a que nos dedicamos" section */}
        <div className="border-y py-8">
          <h2 className="text-3xl font-semibold">Nuestros productos</h2>
          <ProductsMarquee />
        </div>

        <LetsTalk />

        <h2 className="text-3xl font-semibold">¿Por qué elegirnos?</h2>
        <section className="flex flex-col md:flex-row gap-4 px-8 relative">
          <div className="glass  bg-yellow-400 text-white p-8 text-start shadow-xl ">
            <blockquote className="text-lg font-semibold">
              Experiencia Confiable
            </blockquote>
            <div className="divider"></div>
            <p>
              Con años de experiencia en la industria, nuestro equipo cuenta con
              el conocimiento necesario para abordar cualquier problema en tus
              electrodomésticos. Confía en nosotros para soluciones eficientes y
              duraderas.
            </p>
          </div>

          <div className="divider divider-horizontal"></div>
          <div className="glass  bg-yellow-400 text-white p-8 text-start shadow-xl relative top-0 md:top-20">
            <blockquote className="text-lg font-semibold">
              Servicio Rápido y Eficiente
            </blockquote>
            <div className="divider"></div>
            <p>
              Entendemos la importancia de tener tus electrodomésticos en pleno
              funcionamiento. Nuestro compromiso con un servicio rápido
              garantiza que resolveremos tus problemas en el menor tiempo
              posible, para que puedas disfrutar de la comodidad en tu hogar.
            </p>
          </div>
          <div className="divider divider-horizontal "></div>

          <div className="glass  bg-yellow-400 text-white p-8 text-start shadow-xl relative ">
            <blockquote className="text-lg font-semibold">
              Compromiso con la Satisfacción del Cliente
            </blockquote>
            <div className="divider"></div>
            <p>
              Tu satisfacción es nuestra prioridad. Ofrecemos un servicio
              personalizado y transparente, con precios competitivos. Estamos
              aquí para superar tus expectativas y asegurarnos de que tus
              electrodomésticos sigan funcionando de manera óptima.
            </p>
          </div>
        </section>
        {/* FAQ */}
        {/* FAQ */}
        {/* FAQ */}
        <section className="mt-32 flex  justify-center items-center mx-auto ">
          <img
            src="https://outletzone7.files.wordpress.com/2023/11/faq.png"
            alt="FAQ image"
            className="h-[400px] w-[400px] hidden lg:block"
          />
          <FAQ />
        </section>
      </main>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4728.848634830479!2d-74.1039055734908!3d4.687757880216167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDEnMTcuOSJOIDc0wrAwNicxMC4xIlc!5e0!3m2!1sen!2sco!4v1700683132981!5m2!1sen!2sco"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </article>
  );
};

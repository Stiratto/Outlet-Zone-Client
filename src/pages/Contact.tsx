import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export const Contact = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center mx-auto  pt-24">
      <section className="flex flex-col md:flex-row items-center container">
        <div className=" text-black p-8 gap-4">
          <div className="mx-5 grid place-content-center">
            <div className="bg-gradient-to-r from-green-300 to-green-600   text-white p-8 text-center h-72">
              <h1 className="text-3xl mb-3 font-bold">Hola!</h1>
              <p className="text-lg max-w-xs font-medium">
                Estamos aquí para ayudarte. Contáctanos si tienes alguna
                pregunta o necesitas asistencia.
              </p>
            </div>
            <div className="bg-white py-8 px-10 text-center -md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto hover:scale-105 duration-150 group">
              <h2 className="font-semibold text-2xl mb-6 from-green-300 to-green-600 bg-gradient-to-r bg-clip-text text-transparent group-hover:translate-x-5 duration-200">
                Whatsapp
              </h2>
              <IoLogoWhatsapp
                size={40}
                className="my-8 mx-auto group-hover:-translate-x-5 duration-200"
                style={{ color: "#16a34a" }}
              />

              <button className="hover:scale-105 duration-150 text rounded-xl  bg-gradient-to-l from-green-300 to-green-600  text-lg text-white pt-3 pb-4 px-8 inline">
                <a href="https://wa.link/3nqq8z" target="_blank">
                  Conéctate a través de WhatsApp
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=" text-black p-8 gap-4 ">
          <div className="mx-5 grid place-content-center">
            <div className="bg-gradient-to-r   from-indigo-500 via-purple-500 to-pink-500  text-white p-8 text-center h-72">
              <h1 className="text-3xl mb-3 font-bold">Hola!</h1>
              <p className="text-lg max-w-xs font-medium">
                Explora nuestro mundo en Instagram. Estamos listos para
                responder tus consultas y compartir novedades.
              </p>
            </div>
            <div className="bg-white py-8 px-10 text-center -md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto hover:scale-105 duration-300 group">
              <h2 className="font-semibold text-2xl mb-6 from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r bg-clip-text text-transparent group-hover:translate-x-5 duration-200">
                Instagram
              </h2>
              <AiFillInstagram
                size={40}
                className="my-8 mx-auto  group-hover:-translate-x-5 duration-200"
                style={{ color: "#6366f1" }}
              />

              <button className="hover:scale-105 rounded-xl  duration-150  bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500  text-lg text-white pt-3 pb-4 px-8 inline">
                <a
                  href="https://www.instagram.com/outletzonecolombia/"
                  target="_blank"
                >
                  Descubre más en Instagram
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=" text-black p-8 gap-4">
          <div className="mx-5 grid place-content-center">
            <div className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-100   text-white p-8 text-center h-72">
              <h1 className="text-3xl mb-3 font-bold">¡Saludos!</h1>
              <p className="text-lg max-w-xs font-medium">
                Conéctate con nosotros en Facebook para conocer lo último y
                contactarnos fácilmente.
              </p>
            </div>
            <div className="bg-white py-8 px-10 text-center  shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto hover:scale-105 duration-200 group">
              <h2 className="font-bold text-2xl mb-6  group-hover:translate-x-5 duration-200 bg-gradient-to-l from-blue-500 via-blue-500 to-blue-100 bg-clip-text  text-transparent">
                Facebook
              </h2>
              <FaFacebook
                size={40}
                className="my-8 mx-auto  group-hover:-translate-x-5 duration-200"
                style={{ color: "#3b82f6" }}
              />

              <button className="hover:scale-105 rounded-xl  duration-150 bg-gradient-to-l from-blue-500 via-blue-500 to-blue-100  text-lg text-white pt-3 pb-4 px-8 inline">
                <a
                  href="https://www.facebook.com/outletzonecolombia"
                  target="_blank"
                >
                  Visita nuestra página en Facebook
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4728.848634830479!2d-74.1039055734908!3d4.687757880216167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDEnMTcuOSJOIDc0wrAwNicxMC4xIlc!5e0!3m2!1sen!2sco!4v1700683132981!5m2!1sen!2sco"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
      <img
        src="https://outletzone7.files.wordpress.com/2023/11/califica-1.jpg"
        alt="Califica nuestro servicio"
        className="bg-cover w-full "
      />
    </main>
  );
};

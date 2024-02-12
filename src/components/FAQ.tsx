import { Link } from "react-router-dom";

export const FAQ = () => {
  return (
    <div className="max-w-3xl px-4 sm:px-6 lg:px-8  mx-auto text-start">
      <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-semibold md:text-4xl md:leading-tight ">
          Quizás te estás preguntando...
        </h2>
      </div>

      <div className="max-w-2xl mx-auto divide-y divide-gray-200 ">
        <div className="py-8 first:pt-0 last:pb-0">
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            <div>
              <h3 className="md:text-lg font-semibold text-gray-80">
                ¿Ofrecemos garantía?
              </h3>
              <ul className="mt-1 text-gray-500 text-start space-y-4">
                La duración de la garantía varía según el valor de tu compra.
                Para productos hasta 1 millón de pesos, ofrecemos una garantía
                de 3 meses, mientras que para compras superiores a 1 millón de
                pesos, la garantía se extiende a 6 meses.
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 first:pt-0 last:pb-0">
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            <div>
              <h3 className="md:text-lg font-semibold text-gray-80">
                ¿Qué tipos de electrodomésticos venden y reparan en OutletZone?
              </h3>
              <p className="mt-1 text-gray-500">
                En OutletZone nos especializamos en la{" "}
                <span className="font-bold">venta</span> y{" "}
                <span className="font-bold"> reparación</span> de una amplia
                gama de electrodomésticos, incluyendo neveras, lavadoras, aparte
                vendemos pero no reparamos artículos para el hogar, laptops,
                celulares, estufas.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 first:pt-0 last:pb-0">
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            <div>
              <h3 className="md:text-lg font-semibold text-gray-80">
                ¿Ofrecen servicios de entrega para los productos comprados en
                OutletZone?
              </h3>
              <p className="mt-1 text-gray-500">
                Sí, ofrecemos servicios de entrega para asegurar que tus
                productos lleguen de manera segura a tu hogar. Los detalles
                específicos de la entrega se pueden discutir al realizar la
                compra.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 first:pt-0 last:pb-0">
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            <div>
              <h3 className="md:text-lg font-semibold text-gray-80">
                ¿Cuánto tiempo tarda en llegar mi pedido después de realizar la
                compra en línea?
              </h3>
              <p className="mt-1 text-gray-500">
                El tiempo de entrega puede variar según tu ubicación y la
                disponibilidad del producto. Sin embargo, trabajamos
                diligentemente para asegurar entregas rápidas. Consulta la
                estimación de entrega durante el proceso de compra o comunícate
                con nuestro equipo de soporte para obtener información
                actualizada.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 first:pt-0 last:pb-0">
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>

            <div>
              <h3 className="md:text-lg font-semibold text-gray-80">
                ¿Cómo realizo una compra en la tienda en línea de OutletZone?
              </h3>
              <p className="mt-1 text-gray-500">
                Es fácil realizar una compra en línea en OutletZone. Simplemente
                navega por nuestra{" "}
                <Link
                  to={"/outletzone/tienda"}
                  className="underline text-yellow-500"
                >
                  tienda
                </Link>
                , selecciona el producto que deseas, añádelo al carrito y
                continúa la compra enviándonos por el WhatsApp con el botón
                "Finalizar" en el carrito. Si necesitas ayuda, nuestro equipo de
                soporte está disponible para guiarte.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold ">¿Sigues teniendo dudas?</h2>
        <Link to={"/outletzone/contacto"}>
          <button className="btn btn-ghost rounded-none max-w-[10rem] bg-yellow-400">
            Contáctanos
          </button>
        </Link>
      </div>
    </div>
  );
};

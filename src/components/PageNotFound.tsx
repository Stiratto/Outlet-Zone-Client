import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <body className="flex h-full justify-center items-center">
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
        <header className="mb-auto flex justify-center z-50 w-full py-4">
          <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
            <a
              className="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
          </nav>
        </header>

        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-yellow-400 sm:text-9xl ">
            404
          </h1>
          <h1 className="block text-2xl font-bold text-white"></h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Algo fué mal!</p>
          <p className="text-gray-600 dark:text-gray-400">
            Discúlpanos, no pudimos encontrar la página que estás buscando.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              to={"/"}
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-yellow-600 hover:text-yellow-500 disabled:opacity-50 disabled:pointer-events-none "
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
};

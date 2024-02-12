import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";

type Product = {
  id: string;
  product_name: string;
  product_price: number;
  product_status: string;
  imageUrl: string;
  product_quantity: number;
};

export const Product = () => {
  const { id } = useParams();
  const user = useUserContext();

  const navigateTo = useNavigate();

  const [product, setProduct] = useState({
    id: "",
    product_name: "",
    product_price: 0,
    product_location: "",
    product_shipping: "",
    product_quantity: 0,
    product_description: "",
    product_condition: "",
    product_image: "",
    product_guarantee: "",
    product_details: "",
    product_status: "",
    category: "",
    imageUrl: "",
  });

  const displayProduct = async () => {
    try {
      const response = await fetch(
        `https://outletzone-server.onrender.com/api/displaySingleProduct/${id}`
      );

      if (!response.ok) {
        throw new Error("Error fetching product data");
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const cartUpdateEvent = new Event("cartUpdate");

  const addProductToCart = async (product: Product) => {
    // Verifica la disponibilidad del producto antes de agregarlo al carrito
    const response = await fetch(
      `https://outletzone-server.onrender.com/api/verifyProductQuantity/${product.id}`
    );
    const data = await response.json();

    // El usuario solo debe poder agregar la cantidad que esté disponible y no más de esa cantidad.

    // Obtén el carrito actual del localStorage
    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as Product[];

    // Busca si el producto ya está en el carrito
    const existingProduct = existingCart.find((p) => p.id === product.id);

    if (product.id === existingProduct?.id) {
      return;
    }

    if (existingProduct) {
      const totalQuantity =
        existingProduct.product_quantity + product.product_quantity;

      if (totalQuantity > data.quantityAvailable) {
        throw new Error("No puedes agregar más del mismo producto");
      }

      // Si el producto ya está en el carrito y no supera la disponibilidad, incrementa la cantidad
      existingProduct.product_quantity = totalQuantity;
    } else {
      if (product.product_quantity > data.quantityAvailable) {
        throw new Error("No puedes agregar más del mismo producto");
      }

      // Si el producto no está en el carrito, agrégalo al carrito
      existingCart.push(product);
    }

    // Actualiza el estado y guarda el carrito en el localStorage

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(cartUpdateEvent);
  };

  const deleteProduct = async (id: string) => {
    const response = await fetch(
      `https://outletzone-server.onrender.com/api/deleteProduct/${id}`,
      { method: "DELETE" }
    );

    if (response.ok) {
      navigateTo("/outletzone/tienda");
    } else {
      console.log("There was a problem");
    }
  };

  const createWhatsAppMessage = (product_name: any, product_price: any) => {
    return `Hola!%20Estoy%20interesad@%20en%20el%20producto:%20${product_name}$%20${product_price}`;
  };

  useEffect(() => {
    displayProduct();
  }, [id]);

  return (
    <div className=" py-24 lg:py-8 min-h-screen flex justify-center  items-center ">
      <div className="flex flex-col ">
        <div className="flex flex-col lg:flex-row items-center  space-y-8 ">
          <div className="md:flex-1 px-4 flex flex-col items-center mx-auto w-full ">
            <div className="text-sm breadcrumbs text-black px-4 mx-auto">
              <ul className="flex flex-col sm:flex-row">
                <li>
                  <Link to={"/outletzone/tienda"} className="">
                    Tienda
                  </Link>
                </li>
                <li>
                  <Link to={`/`} className="lowercase">
                    <p className="uppercase"> {product.category[0]}</p>
                    {product.category.slice(1)}
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="capitalize">
                    {product.product_name}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-[460px] rounded-lg mb-4 ">
              <img
                className="w-full h-full object-contain rounded-xl"
                src={product.imageUrl}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2  gap-4 px-4 ">
              <div className="w-1/2 px-2 ">
                <button
                  onClick={() =>
                    addProductToCart({
                      id: product.id,
                      product_name: product.product_name,
                      product_price: product.product_price,
                      product_status: product.product_status,
                      imageUrl: product.imageUrl,
                      product_quantity: 1,
                    })
                  }
                  className="w-full btn border-none  dark:bg-yellow-400 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Añadir al carrito
                </button>
              </div>
              <div className="w-1/2 px-2">
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=573176378584&text=${createWhatsAppMessage(
                    product.product_price,

                    product.product_name
                  )}`}
                  className="flex items-center gap-2 z-50 dark:bg-yellow-400 text-white   rounded-full  font-medium  w-full mx-auto  border  btn border-none text-sm py2 px-4  duration-200 justify-center "
                >
                  Háblanos por Whatsapp
                </a>
              </div>
            </div>
          </div>
          <div className=" px-12 lg:px-24 mx-auto">
            <div className="my-24 max-w-5xl">
              <h2 className="text-3xl font-bold text-gray-800  mb-2 flex items-center gap-4 ">
                {product.product_name}
                <div className="text-white badge hidden lg:block">
                  {product.product_guarantee}
                </div>
              </h2>

              <div className="flex mb-4 items-center">
                <div className="mr-4 space-x-2 ">
                  <span className="text-gray-600 text-5xl font-extrabold">
                    ${product.product_price}
                  </span>
                </div>
              </div>
              <div className="space-x-2 my-2">
                <span className="font-bold text-gray-700  text-2xl">
                  Disponibles:
                </span>
                <span className="text-gray-600 text-lg">
                  {product.product_quantity}
                </span>
              </div>

              <div>
                <span className="font-bold text-gray-700 text-2xl ">
                  Descripción del producto:
                </span>
                <p className="text-gray-600  text-lg mt-2 ">
                  {product.product_description}
                </p>
              </div>
              <div className="mt-4">
                <span className="font-bold text-gray-700 text-2xl">
                  Ubicación:
                </span>
                <span className="text-gray-600 ml-2 capitalize text-lg">
                  {product.product_location}
                </span>
              </div>
              <div className="mt-4">
                <span className="font-bold text-gray-700 text-2xl">Envío:</span>
                <span className="text-gray-600 ml-2 capitalize text-lg">
                  {product.product_shipping}
                </span>
              </div>
              <div className="mt-4 ">
                <span className="font-bold text-gray-700 text-2xl ">
                  Estado:
                </span>
                <span className="text-gray-600 ml-2 capitalize text-lg">
                  {product.product_condition}
                </span>
              </div>
              <div className="  mt-4">
                <span className="font-bold text-gray-700 text-2xl ">
                  Detalles:
                </span>
                <span className="flex   text-gray-600   text-lg">
                  {product.product_details}
                </span>
              </div>
            </div>
            <div>
              {user?.role === "ADMIN" ||
                ("DEV" && (
                  <div className="mt-8 space-y-4 lg:space-x-4 lg:space-y-0 flex flex-col lg:flex-row justify-start items-start text-left w-full">
                    <button
                      className="btn bg-red-500 hover-bg-red-700 text-white border-none  w-full lg:w-auto"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Eliminar producto
                    </button>
                    <Link
                      to={`/outletzone/editar-producto/${product.id}`}
                      className="w-full lg:w-auto"
                    >
                      <button className="btn bg-red-500 hover-bg-red-700 text-white border-none  w-full lg:w-auto">
                        Editar producto
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

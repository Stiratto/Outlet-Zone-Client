import { MinusIcon, PlusIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";

type Product = {
  id: string;
  product_name: string;
  product_price: number;
  imageUrl: string;
  product_quantity: number;
};

export const DesktopCart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [dbProducts, setDbProducts] = useState<Product[]>([]);

  const getLocalStorage = async () => {
    // Get the localStorage item "cart"
    const storedProducts = localStorage.getItem("cart");
    const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
    setProducts(parsedProducts);
    const response = await fetch(
      "https://outletzone-server.onrender.com/api/displayProducts"
    );
    const data = await response.json();
    setDbProducts(data);
  };

  const increaseQuantity = async (product: Product) => {
    const storedProducts = localStorage.getItem("cart");
    let parsedProducts: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    const existingProductQuantity = dbProducts.find((p) => p.id === product.id);
    const existingProduct = parsedProducts.find((p) => p.id === product.id);

    if (
      existingProduct &&
      existingProductQuantity &&
      product.product_quantity < existingProductQuantity.product_quantity
    ) {
      existingProduct.product_quantity += 1;
      localStorage.setItem("cart", JSON.stringify(parsedProducts));
      getLocalStorage();
    }
  };

  const decreaseQuantity = (product: Product) => {
    const storedProducts = localStorage.getItem("cart");
    let parsedProducts: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    // Find the specific product in the array
    const existingProduct = parsedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      // Decrease the quantity of the specific product
      existingProduct.product_quantity -= 1;

      // Update local storage immediately
      localStorage.setItem("cart", JSON.stringify(parsedProducts));

      // Fetch the updated data from local storage
      getLocalStorage();
    }
  };

  const removeProductFromCart = (product: Product) => {
    const storedProducts = localStorage.getItem("cart");
    let parsedProducts: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    const productToRemove = parsedProducts.findIndex(
      (p) => p.id === product.id
    );

    if (productToRemove !== -1) {
      parsedProducts.splice(productToRemove, 1);

      // Update local storage immediately
      localStorage.setItem("cart", JSON.stringify(parsedProducts));

      // Fetch the updated data from local storage
      getLocalStorage();
    }
  };

  const getCartTotal = () => {
    return products
      .reduce((total, product) => {
        const productPrice = product.product_price || 0;
        const productQuantity = product.product_quantity || 0;

        return total + productPrice * productQuantity;
      }, 0)
      .toLocaleString("es-CO", { style: "currency", currency: "COP" });
  };

  const createWhatsAppMessage = () => {
    const message = products
      .map((product) => {
        return `*${product.product_name}: ${product.product_quantity} x $${product.product_price}* https://outletzone.netlify.app/outletzone/tienda/producto/${product.id}`;
      })
      .join("%0A");

    const totalMessage = `%0A%0A*Total:* ${getCartTotal()}%20\n%20%20%20%20%20%20%20%20%20%20%20%20`;

    return `Hola!%20Mi%20pedido%20es:${message}${totalMessage}%20\n%20%20%20%20%20%20%20%20%20%20%20`;
  };

  useEffect(() => {
    getLocalStorage();
    const handleCartUpdate = () => {
      getLocalStorage();
    };

    window.addEventListener("cartUpdate", handleCartUpdate);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("cartUpdate", handleCartUpdate);
    };
  }, []);

  return (
    <div className="drawer drawer-end z-50 normal-case">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-3"
          className={`drawer-button  btn-ghost btn-circle  shadow-none bg-transparent border-none hover:text-yellow-400  text-lg  rounded-full btn btn-primary`}
        >
          <IoMdCart className="" size={30} />
          <div className="absolute text-white translate-y-3 p-1 translate-x-3 bg-red-500 rounded-full text-xs">
            {products.length}
          </div>
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu min-h-full w-full max-w-lg p-0 space-y-8 text-black bg-white  mb-4">
          <div className="flex items-center p-8 ">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay hover:cursor-pointer ml-4"
            >
              <X className="text-yellow-500 hover:scale-125 duration-200" />
            </label>
            <h1 className="text-xl lg:text-3xl mx-auto font-bold text-yellow-500 font-mono">
              TU CARRITO ({products.length})
            </h1>
          </div>
          <div className="divider "></div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col lg:flex-row items-center  gap-8 px-4"
            >
              <img
                src={product.imageUrl}
                className=" lg:w-[250px] lg:h-[250px] object-contain p-0 rounded-xl"
              ></img>
              <div className="">
                <p className="text-lg lg:text-3xl font-bold   mb-2 flex items-center gap-4 ">
                  {product.product_name}
                </p>
                <p className=" text-lg lg:text-2xl font-bold mb-2">
                  ${product.product_price}
                </p>

                <div className="flex flex-col items-center gap-4 ">
                  <div className=" flex  items-center gap-8 border p-4  rounded-full  ">
                    <button
                      className=" mx-auto"
                      disabled={product.product_quantity === 1}
                      onClick={() => decreaseQuantity(product)}
                    >
                      <MinusIcon />
                    </button>
                    <p className="text-lg font-medium  mx-auto">
                      {product.product_quantity}
                    </p>
                    <button
                      className=" mx-auto"
                      onClick={() => increaseQuantity(product)}
                    >
                      <PlusIcon />
                    </button>
                  </div>
                  <button
                    className=" w-full py-4 font-medium rounded-lg text-yellow-500  underline text-lg "
                    onClick={() => removeProductFromCart(product)}
                  >
                    Remover
                  </button>
                </div>
              </div>
              <div className="divider "></div>
            </div>
          ))}
          <div className="w-full px-8 pb-8  ">
            <div className="space-y-4 w-full mx-auto ">
              {" "}
              <p className="text-lg font-bold flex justify-between items-center uppercase">
                Total: <span> {getCartTotal()}</span>
              </p>
              <a
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=573176378584&text=${createWhatsAppMessage()}`}
                className="flex items-center gap-2 z-50  rounded-full py-3 font-medium px-3 w-full mx-auto text-black border hover:bg-black hover:text-white  duration-200 leading-normal text-lg justify-center uppercase"
              >
                Finalizar
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

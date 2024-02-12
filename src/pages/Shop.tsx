import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: string;
  product_name: string;
  product_price: number;
  product_status: string;
  imageUrl: string;
  product_quantity: number;
};

export const Shop = () => {
  const [products, setProducts] = useState([
    {
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
      product_status: "",
      imageUrl: "",
      category: "",
    },
  ]);
  const [dbProducts, setDbProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [emptyList, setEmptyList] = useState(false);
  const displayProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://outletzone-server.onrender.com/api/displayProducts`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.length <= 0) {
        setEmptyList(true);
      } else {
        setEmptyList(false);
      }
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const filterProductsByCategory = async (category: string) => {
    const response = await fetch(
      `https://outletzone-server.onrender.com/api/filterProductsByCategory/${category}`
    );

    const data = await response.json();
    if (data.length <= 0) {
      setEmptyList(true);
    } else {
      setEmptyList(false);
    }
    setProducts(data);
  };

  const handleCategoryChange = (event: any) => {
    const selectedCategory = event.target.value;
    filterProductsByCategory(selectedCategory);
  };

  const cartUpdateEvent = new Event("cartUpdate");

  const addProductToCart = async (product: Product) => {
    const response = await fetch(
      "https://outletzone-server.onrender.com/api/displayProducts"
    );
    const data = await response.json();
    setDbProducts(data);
    // El usuario solo debe poder agregar la cantidad que esté disponible y no más de esa cantidad.

    // Obtén el carrito actual del localStorage
    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as Product[];

    // Busca si el producto ya está en el carrito
    const existingProductQuantity = dbProducts.find((p) => p.id === product.id);

    const existingProduct = existingCart.find((p) => p.id === product.id);

    if (product.id === existingProduct?.id) {
      return;
    }

    if (
      existingProduct &&
      existingProductQuantity &&
      product.product_quantity < existingProductQuantity.product_quantity
    ) {
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

  useEffect(() => {
    displayProducts();
  }, []);

  return (
    <div className="min-h-screen  flex flex-col  xl:flex-row  justify-evenly py-24  gap-4  items-center  text-center ">
      <div className=" xl:fixed top-24 left-0 px-12  lg:z-40 flex items-center  flex-col  xl:border-e xl:border-gray-300 h-full">
        <div className="filter-rules w-full   flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-2xl" role="heading">
              Filtrar por:{" "}
            </h1>
            <button onClick={displayProducts} className="text-xl">
              Resetear
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <select className=" mx-auto select" onChange={handleCategoryChange}>
              <option disabled selected>
                CATEGORIA
              </option>
              <option value="NEVERA">NEVERAS</option>
              <option value="ESTUFA">ESTUFAS</option>
              <option value="TELEFONO">TELEFONOS</option>
              <option value="COMPUTADORA">COMPUTADORAS</option>
              <option value="LAVADORA">LAVADORAS</option>
              <option value="ORGANIZADORES">ORGANIZADORES</option>
              <option value="ACCESORIOS">ACCESORIOS</option>
              <option value="ACCESORIOCOCINA">ACCESORIOS COCINA</option>
              <option value="REPUESTOS">REPUESTOS</option>
            </select>
          </div>
        </div>
      </div>
      <div className="divider divider-vertical "></div>

      {isLoading ? (
        <LoaderIcon className="animate-spin" size={50} />
      ) : (
        <div>
          {emptyList ? (
            <div className="w-full flex flex-col  mx-auto items-center gap-8">
              <img
                src="https://outletzone7.files.wordpress.com/2023/11/no-results-found.png"
                alt=""
                className="h-[80px]"
              />
              <p className="text-xl">No hay ningún producto para mostrar</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:grid-cols-3   gap-8 text-left">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card text-black shadow-lg text-lg w-full max-w-xs "
                  role="shop-product"
                >
                  <p className="absolute bg-white badge text-black p-3">
                    {product.product_status}
                  </p>
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-full max-h-[300px] object-contain rounded-2xl"
                  />

                  <div className="p-8 flex flex-col space-y-2">
                    {" "}
                    <p className="text-xl">{product.product_name}</p>
                    <p className="text-5xl font-extrabold">
                      ${product.product_price}
                    </p>
                    <p className="badge p-4 text-white cursor-default">
                      Envio {product.product_shipping}
                    </p>
                    <p className="badge p-4 text-white cursor-default ">
                      {product.product_guarantee}
                    </p>
                    <p className="badge p-4 text-white cursor-default">
                      {product.product_condition}
                    </p>
                    <div className="flex gap-4">
                      <Link to={`/outletzone/tienda/producto/${product.id}`}>
                        <button className="btn text-white border-none bg-yellow-400">
                          Detalles
                        </button>
                      </Link>
                      <button
                        className="btn text-white border-none bg-yellow-400"
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
                      >
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

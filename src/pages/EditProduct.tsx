import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { toast, Toaster } from "sonner";

type Product = {
  id: string;
  product_name: string;
  product_price: number;
  product_location: string;
  product_shipping: string;
  product_quantity: number;
  product_description: string;
  product_condition: string;
  product_image: string;
  product_guarantee: string;
  product_details: string;
  product_status: string;
  category: string;
};

export const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [editedPrice, setEditedPrice] = useState<number | null>(null);
  const [editedName, setEditedName] = useState<string | null>(null);
  const [editedDisponibility, setEditedDisponibility] = useState<number | null>(
    null
  );
  const [editedDescription, setEditedDescription] = useState<string | null>(
    null
  );
  const [editedLocation, setEditedLocation] = useState<string | null>(null);
  const [editedStatus, setEditedStatus] = useState<string | null>(null);
  const [editedCondition, setEditedCondition] = useState<string | null>(null);

  const getProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/getProductToEdit/${id}`
      );

      const data = await response.json();
      setProduct(data);
      setEditedPrice(data.product_price); // Inicializa el estado con el precio actual
      setEditedName(data.product_name);
      setEditedDisponibility(data.product_quantity);
      setEditedDescription(data.product_description);
      setEditedLocation(data.product_location);
      setEditedStatus(data.product_status);
      setEditedCondition(data.product_condition);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const onSubmit = async (ev: any) => {
    ev.preventDefault();
    const response = await fetch(
      `https://outletzone-server.onrender.com/api/editProduct/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          editedName,
          editedPrice,
          editedDisponibility,
          editedDescription,
          editedLocation,
          editedCondition,
          editedStatus,
        }),
      }
    );

    if (response.ok) {
      toast.success("Producto editado exitosamente");

      //   navigateTo(`/outletzone/tienda/producto/${id}`);
    } else {
      toast.error(
        "Hubo un error mientras se editaba el producto, verifica bien los campos"
      );
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="min-h-screen text-black flex flex-col justify-center items-center container mx-auto">
      <Toaster richColors />

      {product && (
        <form
          className="text-black flex flex-col gap-4 w-full container"
          onSubmit={onSubmit}
        >
          <h1 className="text-5xl font-bold self-start mt-32 mb-12">
            Editar producto
          </h1>
          <h3>Nombre del producto</h3>

          <input
            type="text"
            value={editedName !== null ? editedName : ""}
            onChange={(e) => setEditedName(e.target.value)}
            className="bg-white p-2 border"
          ></input>
          <h3>Descripcion</h3>

          <textarea
            value={editedDescription !== null ? editedDescription : ""}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-white p-2 border"
          ></textarea>
          {/* Mostrar otras propiedades según sea necesario */}
          <div className="flex w-full gap-8">
            <div className=" w-full space-y-4">
              {" "}
              <h3>Precio</h3>
              <input
                type="number"
                value={editedPrice !== null ? editedPrice : ""}
                onChange={(e) => setEditedPrice(parseFloat(e.target.value))}
                className="bg-white p-2 border   w-full"
              />
            </div>
            <div className=" w-full space-y-4">
              <h3>Disponibilidad</h3>
              <input
                type="number"
                value={editedDisponibility !== null ? editedDisponibility : ""}
                onChange={(e) =>
                  setEditedDisponibility(parseFloat(e.target.value))
                }
                className="bg-white p-2 border  w-full"
              />
            </div>
          </div>
          <h3>Ubicación</h3>
          <input
            type="text"
            value={editedLocation !== null ? editedLocation : ""}
            onChange={(e) => setEditedLocation(e.target.value)}
            className="bg-white p-2 border  w-full"
          />
          <h3>Condición</h3>
          <input
            type="text"
            value={editedCondition !== null ? editedCondition : ""}
            onChange={(e) => setEditedCondition(e.target.value)}
            className="bg-white p-2 border  w-full"
          />
          <h3>Estado</h3>
          <input
            type="text"
            value={editedStatus !== null ? editedStatus : ""}
            onChange={(e) => setEditedStatus(e.target.value)}
            className="bg-white p-2 border  w-full"
          />

          <button type="submit" className="btn mb-24">
            Finalizar edición
          </button>
          {/* Agregar más detalles según sea necesario */}
        </form>
      )}
    </div>
  );
};

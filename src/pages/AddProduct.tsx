import { useState } from "react";

import { Toaster, toast } from "react-hot-toast";
import { AddProductToast } from "../components/AddProductToast";
import { Loader2 } from "lucide-react";
import { AddProductErrorToast } from "../components/AddProductErrorToast";

export const AddProduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_location, setProductLocation] = useState("");
  const [product_shipping, setProductShipping] = useState("");
  const [product_quantity, setProductQuantity] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_condition, setProductCondition] = useState("");
  const [product_details, setProductDetails] = useState("");
  const [product_guarantee, setProductGuarantee] = useState("CONGARANTIA");
  const [category, setCategory] = useState("NEVERA");
  const [product_status, setProductStatus] = useState("USADO");
  console.log(product_status);
  const [product_image, setProductImage] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const statusOptions = [
    { optionText: "USADO" },
    { optionText: "POCO USADO" },
    { optionText: "CASI NUEVO" },
    { optionText: "NUEVO" },
  ];
  const guaranteeOptions = [
    { optionText: "SIN GARANTIA", value: "SINGARANTIA" },
    { optionText: "CON GARANTIA", value: "CONGARANTIA" },
  ];
  const categoryOptions = [
    { optionText: "NEVERA" },
    { optionText: "LAVADORA" },
    { optionText: "TELEFONO" },
    { optionText: "ESTUFA" },
    { optionText: "TELEVISOR" },
    { optionText: "LAPTOP/PC", value: "COMPUTADORA" },
    { optionText: "ARTICULO PARA HOGAR", value: "ARTICULOPARAHOGAR" },
    { optionText: "ORGANIZADORES" },
    { optionText: "ACCESORIOS" },
    { optionText: "ACCESORIO COCINA", value: "ACCESORIOCOCINA" },
    { optionText: "REPUESTOS" },
  ];

  const handleStatusSelect = (event: any) => {
    setProductStatus(event.target.value);
  };

  const handleGuaranteeSelect = (event: any) => {
    setProductGuarantee(event.target.value);
  };

  const handleCategorySelect = (event: any) => {
    setCategory(event.target.value);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "product_name":
        setProductName(value);
        break;
      case "product_price":
        setProductPrice(value);
        break;
      case "product_location":
        setProductLocation(value);
        break;
      case "product_shipping":
        setProductShipping(value);
        break;

      case "product_quantity":
        setProductQuantity(value);
        break;

      case "product_description":
        setProductDescription(value);
        break;
      case "product_condition":
        setProductCondition(value);
        break;

      case "product_details":
        setProductDetails(value);
        break;
      case "category":
        setCategory(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = async (ev: any) => {
    setIsLoading(true);
    ev.preventDefault();

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_price", product_price);
    formData.append("product_location", product_location);
    formData.append("product_shipping", product_shipping);
    formData.append("product_quantity", product_quantity);
    formData.append("product_description", product_description);
    formData.append("product_condition", product_condition);
    formData.append("product_details", product_details);
    formData.append("product_status", product_status);
    formData.append("product_guarantee", product_guarantee);
    formData.append("category", category);
    product_image && formData.append("product_image", product_image);

    try {
      const response = await fetch(
        "https://outletzone-server.onrender.com/api/addProduct",
        {
          method: "POST",

          body: formData,
        }
      );
      // Verificar si la solicitud fue exitosa (código de respuesta en el rango 200-299)
      if (response.ok) {
        // Realizar acciones después de que la solicitud sea exitosa
        toast.custom((t) => <AddProductToast t={t} />);
      } else {
        // Manejar errores en la respuesta
        setIsLoading(false);
        toast.custom((t) => <AddProductErrorToast t={t} />);
        console.error(
          "Error en la respuesta de la solicitud:",
          response.statusText
        );
      }
    } catch (error) {
      setIsLoading(false);

      console.error("Error al enviar la solicitud:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto items-center w-full px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <form
        className="flex flex-col my-40 gap-4 w-full max-w-5xl text-black"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="product_name"
          value={product_name}
          placeholder="Nombre del producto"
          className="p-4 bg-transparent border"
          onChange={handleChange}
        />
        <div className="number-inputs flex w-full gap-4 justify-between items-center">
          <div className="flex flex-col w-full">
            <input
              type="number"
              name="product_price"
              value={product_price}
              placeholder="Precio del producto"
              className="p-4 bg-transparent border w-full max-w-lg"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="number"
              name="product_quantity"
              value={product_quantity}
              placeholder="Cantidad"
              className="p-4 bg-transparent border w-full max-w-lg"
              onChange={handleChange}
            />
          </div>
        </div>
        <input
          type="text"
          name="product_location"
          value={product_location}
          placeholder="Ubicación"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />
        <input
          type="text"
          name="product_shipping"
          value={product_shipping}
          placeholder="Envio"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />
        <div className="space-y-3 text-white">
          <h2>El producto está usado, poco usado, casi nuevo o nuevo?</h2>

          {/* STATUS SELECT */}
          <select
            className="w-full select"
            name="product_status"
            onChange={handleStatusSelect}
            value={product_status}
          >
            {statusOptions.map((option) => (
              <option value={option.optionText}>{option.optionText}</option>
            ))}
          </select>

          {/* GUARANTEE SELECT */}

          <select
            className="w-full select"
            name="product_guarantee"
            value={product_guarantee}
            onChange={handleGuaranteeSelect}
          >
            {guaranteeOptions.map((option) => (
              <option value={option.value}>{option.optionText}</option>
            ))}
          </select>

          {/* CATEGORY SELECT */}

          <select
            className="w-full select"
            name="category"
            value={category}
            onChange={handleCategorySelect}
          >
            {categoryOptions.map((option) => (
              <option value={option.value}>{option.optionText}</option>
            ))}
          </select>

          <div className="text-black">
            <p> {product_status}</p>
            <p>{product_guarantee}</p>
            <p>{category}</p>
          </div>
        </div>
        <textarea
          name="product_description"
          placeholder="Descripción del producto"
          className="p-4 bg-transparent border text-black"
          onChange={handleChange}
        />
        <input
          type="text"
          name="product_condition"
          placeholder="Condición del producto"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />
        <input
          type="text"
          name="product_details"
          placeholder="Detalles del producto"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />{" "}
        <input
          type="file"
          name="product_image"
          id="image"
          accept="image/*"
          onChange={(event) => {
            if (event.target.files && event.target.files.length > 0) {
              setProductImage(event.target.files[0]);
            }
          }}
        />
        <button type="submit" className="btn">
          {isLoading ? <Loader2 className="animate-spin" /> : "Crear producto"}
        </button>
      </form>
    </div>
  );
};

import Marquee from "react-fast-marquee";
const products = [
  {
    image:
      "https://outletzone7.files.wordpress.com/2023/11/27087-4218822791-e1700626787755.jpg",
    title: "Neveras",
    description:
      "Descubre la frescura en cada rincón de tu cocina con nuestras neveras de última generación.",
  },
  {
    image:
      "https://outletzone7.files.wordpress.com/2023/11/27876-100293990-e1700626926871.jpg",
    title: "Lavadoras",
    description:
      "Optimiza tu lavandería con nuestras lavadoras de alto rendimiento. ¡Limpieza impecable en cada carga!",
  },
  {
    image:
      "https://outletzone7.files.wordpress.com/2023/11/phone-grey-background-4264967331-e1700628011415.jpg",
    title: "Telefonos",
    description:
      "Descubre teléfonos inteligentes con diseño elegante y funciones innovadoras.",
  },
  {
    image:
      "https://outletzone7.files.wordpress.com/2023/11/pngimg.com-laptop_png5929.png",

    title: "Computadoras",
    description:
      "Potencia tu productividad con laptops de alto rendimiento y confiabilidad.",
  },
  {
    image:
      "https://outletzone7.files.wordpress.com/2023/11/pngimg.com-tv_png39222.png",

    title: "Televisores",

    description:
      "Experimenta la alta resolución y colores vibrantes de nuestros televisores.",
  },
  {
    image:
      "https://outletzone7.files.wordpress.com/2023/11/pngimg.com-stove_png13982.png",

    title: "Estufas",

    description:
      "Transforma tu cocina con estufas modernas y eficientes para una experiencia placentera. ",
  },
];

export const ProductsMarquee = () => {
  return (
    <Marquee className="py-12 flex " direction="right">
      {products.map((product, idx) => (
        <div className="max-w-xs flex flex-col gap-8 mx-auto" key={idx}>
          <img
            src={product.image}
            alt="Imagen de producto"
            className="w-52 h-52 mx-auto object-contain"
          />
          <div>
            <h3 className="text-xl font-medium">{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

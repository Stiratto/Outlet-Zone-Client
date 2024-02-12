import { Redo2 } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const LetsTalk = () => {
  return (
    <div className="border max-w-lg p-8 mx-8  text-start md:mx-auto">
      <h2 className="text-xl font-medium">
        ¿Tienes dudas o necesitas consultar algo?
      </h2>
      <div className="mt-4 space-y-4">
        <p className="text-start">
          Envianos un mensaje por whatsapp y te responderemos lo más rapido que
          podamos!
        </p>
        <button className="btn btn-ghost  rounded-none max-w-xl bg-green-500 text-white">
          <a
            href="https://wa.link/z109k4"
            target="_blank"
            className="flex items-center gap-4 text-start  justify-start"
          >
            Whatsapp <Redo2 />
          </a>
        </button>
        <div className="flex items-center  mt-8 gap-8">
          <a
            href="https://www.tiktok.com/@outletzonecolombia"
            className="hover:scale-105 hover:cursor-pointer duration-300 p-2 border rounded-full"
          >
            <FaTiktok size={15} />
          </a>

          <a
            className="hover:scale-105 hover:cursor-pointer duration-300  p-2 border rounded-full"
            href="https://www.instagram.com/outletzonecolombia/"
          >
            <RiInstagramFill size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

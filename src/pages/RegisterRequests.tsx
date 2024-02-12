import { format, isValid, parseISO } from "date-fns";
import { useEffect, useState } from "react";

export const RegisterRequests = () => {
  const [registerRequests, setRegisterRequests] = useState([
    {
      id: 0,
      email: "",
      createdAt: "",
      role: "",
    },
  ]);

  const acceptRequest = async (id: number) => {
    const requestToAccept = registerRequests.find((r) => r.id === id);

    if (!requestToAccept) {
      console.error(`No se encontró la solicitud con ID ${id}`);
      return;
    }
    await fetch(
      `https://outletzone-server.onrender.com/api/acceptRequest/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestToAccept),
      }
    );
  };

  const denieRequest = async (id: number) => {
    const requestToDenie = registerRequests.find((r) => r.id === id);
    if (!requestToDenie) {
      console.error(`No se encontró la solicitud con ID ${id}`);
      return;
    }
    await fetch(
      `https://outletzone-server.onrender.com/api/denieRequest/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestToDenie),
      }
    );

    window.location.reload();
  };

  const getRegisterRequests = async () => {
    const response = await fetch(
      "https://outletzone-server.onrender.com/api/registerRequests"
    );
    const data = await response.json();
    setRegisterRequests(data);
  };

  useEffect(() => {
    getRegisterRequests();
  }, []);

  return (
    <div className="min-h-screen flex   justify-center items-center ">
      {registerRequests.length <= 0 ? (
        <div className="flex flex-col gap-4 ">
          <img
            src="https://outletzone7.files.wordpress.com/2023/11/no-results-found.png"
            alt=""
            className="h-[80px] w-[80px] mx-auto"
          />
          <p className="text-xl">No hay ninguna solicitud pendiente</p>
        </div>
      ) : (
        <div className="flex flex-col w-full ">
          {registerRequests.map((request) => (
            <div
              key={request.email}
              className="text-black border p-4 w-full max-w-sm mx-auto space-y-4"
            >
              <p>ID: {request.id}</p>
              <p> {request.email}</p>
              {isValid(parseISO(request.createdAt)) ? (
                <div className="">
                  <h1>Fecha en que se envió la solicitud:</h1>
                  <p>
                    {format(parseISO(request.createdAt), "MM-dd-yyyy HH:mm")}
                  </p>
                </div>
              ) : (
                <p>Invalid date</p>
              )}
              <p>{request.role}</p>
              <div className="flex flex-col items-center  justify-between gap-5 ">
                <button
                  className="uppercase btn bg-green-500 border-none w-full text-white hover:bg-green-700"
                  onClick={() => acceptRequest(request.id)}
                >
                  Si
                </button>
                <button
                  className="uppercase btn bg-red-500 border-none w-full text-white hover:bg-red-700"
                  onClick={() => denieRequest(request.id)}
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

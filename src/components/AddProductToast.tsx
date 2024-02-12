export const AddProductToast = (t: any) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://outletzone7.files.wordpress.com/2023/12/sent-message-amico.png"
              alt=""
            />
          </div>
          <div className="ml-3 ">
            <p className="text-sm font-medium text-gray-900">Enhorabuena!</p>
            <p className="text-sm text-gray-600">
              El producto se añadió exitosamente.
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200"></div>
    </div>
  );
};

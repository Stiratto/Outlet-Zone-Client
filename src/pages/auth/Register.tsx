import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { schemaRegister } from "../../components/schemas/schemaRegister";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Toaster, toast } from "react-hot-toast";
import { RegisterRequestToast } from "../../components/authComponents/RegisterRequestToast";
import { RegisterRequestErrorToast } from "../../components/authComponents/RegisterRequestErrorToast";
import { Loader2 } from "lucide-react";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [capVal, setCapVal] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    resolver: yupResolver(schemaRegister),
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    await fetch("https://outletzone-server.onrender.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 200) {
        setIsLoading(false);

        toast.custom((t) => <RegisterRequestToast t={t} />);
      } else {
        toast.custom((t) => <RegisterRequestErrorToast t={t} />);
      }
    });
    setIsLoading(false);
  };

  return (
    <section className="bg-gray-50 min-h-screen flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-yellow-400">
              Create una cuenta
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  value={user.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="nombre@gmail.com"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }: any) => (
                    <p className="text-red-500 text-start text-sm mt-2">
                      {message}
                    </p>
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  value={user.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }: any) => (
                    <p className="text-red-500 text-start text-sm mt-2">
                      {message}
                    </p>
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  {...register("confirm_password")}
                  value={user.confirm_password}
                  onChange={handleChange}
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
                <ErrorMessage
                  errors={errors}
                  name="confirm_password"
                  render={({ message }: any) => (
                    <p className="text-red-500 text-start text-sm mt-2">
                      {message}
                    </p>
                  )}
                />
              </div>
              <div className="flex flex-col items-start">
                <ErrorMessage
                  name="trueInfo"
                  errors={errors}
                  render={({ message }: any) => (
                    <p className="text-red-500 text-start text-sm mb-2">
                      {message}
                    </p>
                  )}
                />
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    {...register("trueInfo")}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                  />
                  <div className="ml-3 text-sm ">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 space-x-4"
                    >
                      Acepto los
                      <a
                        className="font-medium text-primary-600 hover:underline ml-1"
                        href="#"
                      >
                        Terminos y condiciones
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full disabled:bg-opacity-60 text-white bg-yellow-400 hover:bg-primary00 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={!capVal}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin mx-auto" />
                ) : (
                  "Crear cuenta"
                )}
              </button>
              <ReCAPTCHA
                sitekey="6LdKHiIpAAAAAB6J_D_R63LXH4PNOKWJOD62hW5I"
                onChange={(val: any) => setCapVal(val)}
              />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta?{" "}
                <Link
                  to={"/outletzone/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Loguéate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

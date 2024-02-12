import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { schemaRegister } from "../../components/schemas/schemaRegister";
import { ErrorMessage } from "@hookform/error-message";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Toaster, toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { LoginErrorToast } from "../../components/authComponents/LoginErrorToast";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [capVal, setCapVal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();

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

    await fetch("https://outletzone-server.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json(); // Parse the response JSON
        } else {
          toast.custom((t) => <LoginErrorToast t={t} />);
        }
      })
      .then((data) => {
        if (!data) {
          return;
        }
        localStorage.setItem("token", data);
        navigateTo("/");
        window.location.reload();
      });

    setIsLoading(false);
  };

  return (
    <section className="bg-gray-50 ">
      {/* Same as */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-yellow-400">
              Loguéate!
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
                  autoComplete="email"
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
                  autoComplete="current-password"
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
              <button
                type="submit"
                className="w-full disabled:bg-opacity-60 text-white bg-yellow-400 hover:bg-primary00 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={!capVal}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin mx-auto" />
                ) : (
                  "Iniciar sesión"
                )}
              </button>
              <ReCAPTCHA
                sitekey="6LdKHiIpAAAAAB6J_D_R63LXH4PNOKWJOD62hW5I"
                onChange={(val: any) => setCapVal(val)}
              />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta?{" "}
                <Link
                  to={"/outletzone/register"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Regístrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

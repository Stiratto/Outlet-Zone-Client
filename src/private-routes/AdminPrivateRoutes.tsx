import { useUserContext } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";

export const AdminPrivateRoutes = ({ children }: any) => {
  const user = useUserContext();

  return user?.role === "ADMIN" || "DEV" ? children : <Navigate to={"/"} />;
};

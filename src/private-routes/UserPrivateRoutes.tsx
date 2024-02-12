import { useState, useEffect } from "react";
import UserProvider, { useUserContext } from "../providers/UserProvider";
import { redirect } from "react-router-dom";

interface User {
  id: number;
  email: string;
  createdAt: any;
  role: string;
}

export const UserPrivateRoutes = ({ children }: any) => {
  const user = useUserContext();

  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    setUserInfo(user);
  }, [userInfo]);
  return (
    <UserProvider>
      {userInfo?.role === "USER" ? redirect("/") : children}
    </UserProvider>
  );
};

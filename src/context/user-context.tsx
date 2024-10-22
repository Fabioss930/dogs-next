"use client";

import logout from "@/actions/logout";
import validateToken from "@/actions/validate-token";
import React, { createContext, useContext, useState } from "react";

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type UserContextProps = {
  user: User | null;
  setUserState: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextProps | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("userContext deve estar dentro do Provider");
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUserState] = useState<User | null>(user);

  React.useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();
      if (!ok) await logout();
    }

    if (userState) validate();
  }, [useState]);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}

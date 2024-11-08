import { createContext } from "react";

export const ProfileContext = createContext({});

export const ProfileContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  );
};

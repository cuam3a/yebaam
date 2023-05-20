import { createContext, useContext, ReactNode, useState } from "react";

type UserData = {
  name: string;
  email: string;
  image: string;
};

type UserContextType = {
  user: UserData;
  setUser: (userData: UserData) => void;
};

const contextDefaultValue: UserContextType = {
  user: {
    name: "",
    email: "",
    image: "",
  },
  setUser: () => {},
};

const UserContext = createContext<UserContextType>(contextDefaultValue);
export const useUserContext = () => useContext(UserContext);

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<any>();

  const value = {
    user,
    setUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

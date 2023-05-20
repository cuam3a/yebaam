import {
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";

import { useRouter } from "next/router";

type MenuContextType = {
  isVisible: boolean;
  setIsVisible: (e: boolean) => void;
};

const contextDefaultValue: MenuContextType = {
  isVisible: true,
  setIsVisible: () => {},
};

const MenuContext = createContext<MenuContextType>(contextDefaultValue);
export const useMenuContext = () => useContext(MenuContext);

interface Props {
  children: ReactNode;
}

export function MenuProvider({ children }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const value = {
    isVisible,
    setIsVisible,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

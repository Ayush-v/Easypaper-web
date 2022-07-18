import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ThemeProvider");
  }

  return context;
}

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const value = { open, setOpen, error, setError };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

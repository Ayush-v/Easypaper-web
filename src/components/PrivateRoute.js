import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/ModalContext";

const NavigateBack = () => {
  const navigate = useNavigate();
  const { setOpen, setError } = useModal();

  useEffect(() => {
    navigate(-1);
    setOpen(true);
    // throw new Error("Please login first to access this content");
    setError("Please login first to access content");

    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [navigate, setError, setOpen]);

  return <></>;
};

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <NavigateBack />;
};

export default PrivateRoute;

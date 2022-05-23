import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/ModalContext";

const NavigateBack = () => {
  const navigate = useNavigate();
  const { setOpen } = useModal();

  useEffect(() => {
    navigate(-1);
    setOpen(true);
    console.log("'i fire once'");
  }, [navigate, setOpen]);

  return <></>;
};

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <NavigateBack />;
};

export default PrivateRoute;

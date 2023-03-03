import React, { useEffect } from "react";
import { useAlert } from "react-alert";

import { useSelector } from "react-redux";

const Alert = () => {
  const alert = useAlert();
  const { error, message } = useSelector((state) => state.leads);
  const { errorauth, messageauth } = useSelector((state) => state.auth);

  useEffect(() => {
    const newAlert = setTimeout(() => {
      if (error !== null) {
        if (error.data.name)
          alert.error(`Name: ${error.data.name.join()} ,${error.status}`);
        if (error.data.email)
          alert.error(`Email: ${error.data.email.join()} ,${error.status}`);
        if (error.data.message)
          alert.error(`Email: ${error.data.message.join()} ,${error.status}`);
        if (error.data.detail)
          alert.error(`${error.data.detail} ,${error.status}`);
      }
      if (errorauth !== null) {
        if (errorauth.data.non_field_errors)
          alert.error(
            `${errorauth.data.non_field_errors.join()} ,${errorauth.status}`
          );
      }
    }, 0);
    return () => {
      clearTimeout(newAlert);
    };
  }, [error, errorauth]);

  useEffect(() => {
    const newAlert = setTimeout(() => {
      if (message !== null) {
        alert.success(message);
      }
      if (messageauth !== null) {
        alert.success(messageauth);
      }
    }, 0);
    return () => {
      clearTimeout(newAlert);
    };
  }, [message, messageauth]);

  return <React.Fragment></React.Fragment>;
};

export default Alert;

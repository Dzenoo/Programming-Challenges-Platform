import * as React from "react";
import { useNavigate } from "react-router-dom";

const Redirect = (props) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(props.path);
  }, []);
};

export default Redirect;

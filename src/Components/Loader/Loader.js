import React from "react";
import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <div>
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

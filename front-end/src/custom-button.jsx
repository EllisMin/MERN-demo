import React from "react";

const CustomButton = ({ children, remove, loading, disabled }) => {
  return (
    <button
      className={`${remove ? "btn-delete" : ""} btn-custom`}
      disabled={disabled || loading}
    >
      {children}
    </button>
  );
};

export default CustomButton;

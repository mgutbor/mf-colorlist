import React from "react";

import Swal from "sweetalert2";

const ColorList = ({ colorsList = [] }) => {

  const handleCopyColor = (color) => {

    navigator.clipboard.writeText(color);

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `Color: ${color.toUpperCase()} copiado!!!`,
      showConfirmButton: false,
      timer: 2500,     
      timerProgressBar: true 
    })
  };

  return (
    <>
      <h6 className="text-center">Listado de colores guardados</h6>
      <div className="list-group text-center">
        {colorsList.length > 0 ? colorsList.map((color, index) => (
          <button
            className="list-group-item list-group-item-action text-white"
            key={index}
            aria-current="true"
            title="Copiar"
            style={{
              background: color,
              fontWeight: "bolder",
            }}
            onClick={() => handleCopyColor(color)}
          >
            {color}
          </button>
        )) : <h5 className="alert alert-danger text-center">No hay colores para mostrar</h5>}
      </div>
    </>
  );
};

export default ColorList;

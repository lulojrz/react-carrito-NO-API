import { useState } from "react";

const Main = () => {
  const [carrito, setCarrito] = useState([]);
  const [afirmacion, setAfirmacion] = useState(false);

  const productos = [
    {
      nombre: "Botella",
      precio: 20000,
      img: "https://acdn-us.mitiendanube.com/stores/834/041/products/diseno-sin-titulo-86-ece121eb13072582ea17430870177972-480-0.png",
      cantidad: 0,
    },
    {
      nombre: "Silla",
      precio: 70000,
      img: "https://img.freepik.com/vector-premium/silla-madera-aislada-ilustracion-vectorial-plantilla-icono-logotipo-blanco_939711-10211.jpg?semt=ais_hybrid&w=740",
      cantidad: 0, 
    },
    {
      nombre: "Smart Tv",
      precio: 300000,
      img: "https://tienda.personal.com.ar/images/720/webp/Smart_TV_75_Samsung_AI_TV_Neo_QLED_QN_85_D_427199b560.png",
      cantidad: 0,
    },
  ];

  const setClick = () => {
    setAfirmacion(!afirmacion);
  };

  const handleClick = (producto) => {
    const existe = carrito.find((item) => item.nombre === producto.nombre);
  
    if (existe) {
      const nuevoCarrito = carrito.map((item) =>
        item.nombre === producto.nombre
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };


  return (
    <div>
      <div className="carritos-container">
        {afirmacion && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">🛒 Carrito de compras</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={setClick}
                  ></button>
                </div>
                <div className="modal-body">
                  {carrito.length > 0 ?  (<div className="table-responsive">
              <table className="table table-bordered align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={item.img} alt={item.nombre} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                      </td>
                      <td>{item.nombre}</td>
                      <td>${item.precio}</td>
                      <td>{item.cantidad}</td>
                      <td>${item.precio * item.cantidad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h5 className="text-end mt-3">Total: ${carrito.reduce((total, item) => total + item.precio, 0)}</h5>
            </div>
          ) : (
                    <p>No hay productos agregados aún...</p>
                  )}
                </div>

                
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={setClick}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="productos-container">
        {productos.map((producto) => (
          <div className="card" key={producto.nombre}>
            <img
              src={producto.img}
              className="card-img-top"
              alt={producto.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">${producto.precio}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleClick(producto)}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary" onClick={setClick}>
        <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default Main;

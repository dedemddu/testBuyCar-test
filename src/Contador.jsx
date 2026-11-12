import { useState } from 'react'
function Contador() {
  const [cantidad, setCantidad] = useState(0)
  return (
    <div>
      <h2>Carrito de compras</h2>
      <p>Productos: {cantidad}</p>
      <button
        onClick={() => setCantidad(cantidad + 1)}
      >
        Incrementar
      </button>
    </div>
  )
}
export default Contador


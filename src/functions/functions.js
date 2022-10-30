import Swal from 'sweetalert2'

export const consultar = async () => {
    const response = await fetch('../json/products.json')
    const productos = await response.json()
    return productos 
}

export const btnBuy = () => {
    Swal.fire({
        title: 'Gracias x Elegirnos ! Tu pedido se enviara pronto ',
        icon: 'success',
        confirmButtonText: 'Finalizar compra'
      })
}
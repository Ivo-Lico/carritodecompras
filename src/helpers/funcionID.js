export const productoID = (carrito)=>{
    if (carrito.length === 0){
        return 0
    }
    else{
        const newID = carrito[carrito.length - 1].id + 1
        return newID
    }
    }
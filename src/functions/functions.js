export const consultar = async () => {
    const response = await fetch('../json/products.json')
    const productos = await response.json()
    return productos 
}
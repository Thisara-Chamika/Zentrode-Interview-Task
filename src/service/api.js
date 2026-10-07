export const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    
    const result = await response.json();
    return result.products;
};
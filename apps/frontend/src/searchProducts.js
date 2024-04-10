const getProducts = async (selectedCategory, limit) => {
    try {
        let baseUrl = "/api/products";
        const response = await fetch(baseUrl);
        const json = await response.json();
        if (selectedCategory) {
            return json.filter((product) => product.category === selectedCategory);
        }
        if (limit) {
            return json.slice(0, limit);
        }
        return json;
    } catch (error) {
        console.error(error);
        throw error;
    }
}



const getCategories = async () => {
    try {
        const response = await fetch("/api/products");
        const json = await response.json();
        let categories = [];
        json.forEach((element) => {
            if (!categories.includes(element.category)) {
                categories.push(element.category);
            }
        });
        return categories;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { getProducts, getCategories };

import Catalog from "./Catalog";
import { Product } from "types/product";

// Fetch data from Fake Store API
async function fetchProducts(limit: number): Promise<Product[]> {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`, {
        next: { revalidate: 60 }, // Cache data selama 60 detik
    });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

async function fetchTotalProductsCount(): Promise<number> {
    const res = await fetch(`https://fakestoreapi.com/products`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch total count");
    }
    const products: Product[] = await res.json();
    return products.length;
}

async function fetchProductCategory() {
    const res = await fetch(`https://fakestoreapi.com/products/categories`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const categories: string[] = await res.json();

    return categories;
}



export default async function CatalogPage() {
    const products = await fetchProducts(12);
    const totalProducts = await fetchTotalProductsCount();
    const categories = await fetchProductCategory();

    return (
        <Catalog
            initialProducts={products}
            totalProducts={totalProducts}
            categories={categories}
        />
    );
}

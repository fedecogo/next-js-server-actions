'use client';

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";

function ClientPage() {
    const [products, setProducts] = useState([]);
    const [loading , isLoading] = useState(true);

    async function getListOfProducts() {
        isLoading(true)
        const data = await fetchListOfProducts();
        console.log(data);
        if (data) 
            setProducts(data);
            isLoading(false)
    }
    
    useEffect(() => {
        getListOfProducts();  
    }, []); 

    if (loading) return <h1>Loading data! Please wait</h1>;

    return (
        <div>
            <h1>Client page server action example</h1>
            <h2>Check Ispeziona</h2>

            {products && products.length > 0 ? (
                products.map((i) => <li key={i.id}>{i.title}</li>) 
            ) : (
                <h2>Non c'è nessun prodotto</h2>
            )}
        </div>
    );
}

export default ClientPage;

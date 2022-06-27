export interface Productos {
    id:string;
    site_id: string;
    title: string;
    price: number;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    condition: string;
    thumbnail: string;
    accepts_mercadopago: boolean;
}

export interface ResultsProductos {
    site_id: string;
    country_default_time_zone:string;
    query: string;
    results: Productos[];
}
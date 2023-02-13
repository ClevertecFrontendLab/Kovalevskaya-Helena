export interface Book {
    id: number;
    img: string | null;
    label: string;
    rating: number;
    description:string;
    bookingData: string | null;
    author: string[];
    publishing:string;
    pages:number;
    cover:string;
    format:string;
    genre:string;
    weight:string;
    isbn:string;
    producer:string;
    publishedYear: number;
    images: string[];
    isReserved: boolean;
    category: string;
}


export interface Menu {
    id: number;
    category:string;
    label: string;
    count:number| null;
}

export interface User {
    id: number;
    name: string;
    surname:string;
    avatar: string;
}

export interface Reviews {
    id: number;
    name:string;
    surname:string;
    avatar:string;
    date:string;
    rating:number;
    review:string | null;
}

export interface Book {
    id: number;
    image: {
        url:string;
    };
    title: string;
    rating: number;
    description:string;
    bookingData: string | null;
    authors: string[];
    issueYear:string;
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
    categories: string [];
    booking:{
        id:number;
        order:boolean;
        dateOrder:string;
        customerId:number;
        customerFirstName:string;
        customerLastName:string;
    };
    delivery:{
        id:number;
        handed:boolean;
        dateHandedFrom:string;
        dateHandedTo:string;
        recipientId:number;
        recipientFirstName:string;
        recipientLastName:string;
    };
}


export interface Menu {
    id: number;
    path:string;
    name: string;
    count:number;
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

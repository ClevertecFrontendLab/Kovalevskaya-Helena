export interface Category {
    name:string;
    path:string;
    id:number;
    count: number;
}

interface Delivery {
    id:number;
    handed:boolean;
    dateHandedFrom:string;
    dateHandedTo:string;
    recipientId:number;
    recipientFirstName:string;
    recipientLastName:string;
};

interface Booking {
    id:number;
    order:boolean;
    dateOrder:string;
    customerId:number;
    customerFirstName:string;
    customerLastName:string;
};

interface History {
    id: number;
    userId: number;
}

interface Image {
    url: string;
}

interface User {
    commentUserId: number,
    firstName: string,
    lastName: string,
    avatarUrl: string

}

interface Comments {
    id: number,
    rating: number,
    text: string,
    createdAt: string,
    user: User

}

export interface Book {
    issueYear:string;
    rating:number | null;
    title:string;
    authors:string[];
    image: Image | null;
    categories:string[];
    id:number;
    booking: Booking | null;
    delivery: Delivery | null;
    histories: History[] | null;
}

export interface FullBook extends Omit<Book, 'image'> {
    description:string,
    publish:string,
    pages:string,
    cover:string,
    weight:string,
    format:string,
    ISBN:string,
    producer:string,
    comments:Comments[] | null,
    images: Image[];
}

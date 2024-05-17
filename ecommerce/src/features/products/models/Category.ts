export interface Category {
    name: string;
    description?: string;
}

export interface CategoryDocument extends Category {
    _id: string;
    __v: number;
}

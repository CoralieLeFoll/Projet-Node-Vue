export declare class BasketSchema {
    readonly customerId: string;
    readonly products: Array<{
        productId: string;
        quantity: number;
    }>;
}

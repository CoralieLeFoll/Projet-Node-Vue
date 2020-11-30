export declare class OrderSchema {
    readonly customerId: string;
    readonly products: Array<{
        productId: string;
        quantity: number;
    }>;
    readonly totalPrice: number;
}

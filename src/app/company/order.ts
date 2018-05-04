export class QuotedItem{
    itemId:number;
     itemName:string;
     requiredquantity:number;
     unit:string;
     price:string;
     image:string;
     vendorSupliedQuantity:number;
     totalPrice:number;
     remarks?:string;
 
}

export class  Order{
    orderNo: string;
    orderDate:Date;
    shipName: string
    portName:string;
    status: string;
    delivCancelDate:Date;
    requestedVerdors?:string[]; 
    quotedItems:QuotedItem[];
}
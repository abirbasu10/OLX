//import { HexBase64BinaryEncoding } from "crypto";

export class Category{
    id:number;
    name:string
}
 
export class SubCategory{
    id:number;
    name:string
    categoryDetails:Category
}

export class Filter{
    id:number;
    name:string;
    description:string;
    type:string;
    addType:string;
    extraInfo:boolean;
}

export class SubCatFilterMap{
    id:number;
   subCategoryDetails:SubCategory;
   filterDetails:Filter[];
   hasChild:number
}

export class Image{
    id:number;
   name:string;
   path:string;
   extension:string;
   description:string
   
}

export class Country{
    id:number;
    name:string
}

export class State{
    id:number;
    name:string
    countryDetails:Country;
}

export class Port{
    id:number;
    name:string
    stateDetails:State;
}

export class Currency
{
    id:number;
    symbol:string;
    name:string;
    fraction: number;
}


export class Advertisement{
    id:number;
    images:Image[];
    productName:string;
    productDescription:string;    
    subCategoryDetails:SubCategory;
    portDetails:Port;
    name:string;
    contact:number;
    date:Date;
    sellerLogisticSupport?:boolean;
    buyerLogsisticSupport?:boolean;
    isFeatured:boolean;
    isOpen:boolean;
}


export class ProductFilterValue{
    id:number;
   advertisementDetails:Advertisement;
   filterValues:AdvertisementFilterValue[]
}


export class AdvertisementFilterValue{
    group?:string;
    name:string
   value:string
}

export class FeaturedAdvertisementMap{
    id:number;
    adId:number
    planDetails:FeaturedPlan;
    startDate:Date;
    endDate:Date;
}

export class FeaturedPlan{
    id:number;
    planName:string;
    duration:number; //(number ofdays/weeks/months/years)
    periodType:string;// (days/weeks/months/years)
    amount:number;
    isActive:boolean;
}


export class SubcatFilterValue{
    id:number;   
   filterDetails:Filter
   value:string[]
}

export class ImageAdvertisementMap{
    id:number;
   imageId:number;
   advertisementId:number;
}

export class CatSubcatImageMap{
    id:number;
   imageId:number;
   catId:number;
   subCatId:number
}

export class SubCategoryFilterOption{
    id:number;
    filterSubCatMapId:number
    subCategoryDetails:SubCategory
    subCatFilterValues:SubcatFilterValue[]
}

export class SubCategoryOption{
    id:number;
    subCategoryDetails:SubCategory;
    options:string[]
}

export class LogisticFirmList
{
    id:number;
    name: string;
    contact: string;
    email: string;
    port: Port; 
    avg_rating: number;
    profile_state: boolean; 
}

export class LogisticsPortMapping
{
    id:number;
    logisticsId:number;
    logisticsName:string;
    ports:Port[];
}

export class CompanyDetails
{
    id:number;
    name: string;
    contact: string;
    email: string;
    port: Port; 
    avg_rating: number;
    profile_completion_percent: number;
    profileFields:ProfileFields[];
}

export class ProfileFields{
    id:number;
    fieldName:string;
    verifyStatus:boolean;
}

export class Review{

    id : string
    name : string
    image : string
    rating : string
    comment : string
   
  }

export class MessageList
{
    messageId:number;
    adId:number;
    senderId:number;
    receiverId:number;
}

export class MessageDetails
{
    messageId:number;
    msgThread:MessageThread[]
}

export class MessageThread
{
    msg:string;
    senderId:number;
    receiverId:number;
}

export class AdLogisticsMapping
{
    id:number;
    adId:number;
    logisticIds:number[];
}

export class LogisticsQuoteRequest
{
    id:number;
    adId:number;
    companyId:number;
    logisticIdsStatus:any[];/* stores id of logistic firms and their request status */
    /* buyerStatus:string;
    logisticStatus:string; */
}

export class Quotation
{
    id:number;
    quoteReqId:number;
    companyId:number;
    companyName:string;
    logisticsId:number;
    logisticsName:string;
    price:number;
    adId:number;
}

export class LogisticsOrderList
{
    id:number;
    quoteReqId:number;
    companyId:number;
    companyName:string;
    logisticsId:number;
    logisticsName:string;
    //adId:number;
    adDetails:ProductFilterValue;
    buyerStatus:string;
    logisticStatus:string;
}

export class ThirdPartyAds
{
    id:number;
    img?:string;
    url?:string;
    adTitle:string;
    adDetails:string;
    location:string[];
    postedById:number;
    postedByName:string;
    position:string;
}

export class ThirdPartyAdsPosition
{
    id:number;
    position:string;
    price:number;
}
  //Admin Section 

export class VerifyCompanyDocument{
    id:number
    name:string
    status: boolean
}
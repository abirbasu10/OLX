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

export class Advertisement{
    id:number;
    productName:string;
    productDescription:string;    
    subCategoryDetails:SubCategory;
    portDetails:Port;
    name:string;
    contact:number;
    date:Date;
}


export class ProductFilterValue{
    id:number;
   advertisementDetails:Advertisement;
   filterValues:AdvertisementFilterValue[]
}


export class AdvertisementFilterValue{
    name:string
   value:string
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
import { Category,SubCategory,Filter,SubCatFilterMap,Image,Country,State,Port,Advertisement,ImageAdvertisementMap,ProductFilterValue,AdvertisementFilterValue,SubCategoryFilterOption,SubCategoryOption } from "./classDefinition";


export const CATEGORIES: Category[]=[
    {id:1,name:"Properties"},
    {id:2,name:"Car"},
    {id:3,name:"Electronic"},
    {id:4,name:"Bike"},
    {id:5,name:"Furniture"}    
]
    
export const SUBCATEGORIES: SubCategory[]=[
    {id:1,name:"ForSale",
    categoryDetails:{id:1,name:"Properties"}
    },
    {id:2,name:"ForRent",
    categoryDetails:{id:1,name:"Properties"}
    },
    {id:3,name:"Domestic Car",
    categoryDetails:{id:2,name:"Car"}
    },
    {id:4,name:"Commercial Car",
    categoryDetails:{id:2,name:"Car"}
    },
    {id:5,name:"AC",
    categoryDetails:{id:3,name:"Electronic"}
    },
    {id:6,name:"TV",
    categoryDetails:{id:3,name:"Electronic"}
    },
    {id:7,name:"Scooter",
    categoryDetails:{id:4,name:"Bike"}
    },
    {id:8,name:"Motor Cycles",
    categoryDetails:{id:4,name:"Bike"}
    },
]

export const FILTERS:Filter[]=[
    {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},
    {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
    {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown"},
    {  id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown"},
    {  id:5,name:"Milege",description:"sacdsfsfdf",type:""},
    {  id:6,name:"Brand",description:"sacdsfsfdf",type:"dropdown"},      

]


export const SUBCATFILTERMAP:SubCatFilterMap[]=[
    {
        id:1,
        subCategoryDetails:{id:1,name:"ForSale",categoryDetails:{id:1,name:"Properties"}},
        filterDetails:
        [ 
             {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},
             {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown"},
             {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
        ],
        hasChild:1
    },
    {
        id:2,
        subCategoryDetails:{id:2,name:"ForRent",categoryDetails:{id:1,name:"Properties"}},
        filterDetails:
        [ 
             {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},
             {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown"},
             {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
        ],
        hasChild:1
    },
    {
        id:3,
        subCategoryDetails:{id:3,name:"Domestic Car",categoryDetails:{id:2,name:"Car"}},
        filterDetails:
        [ 
             {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},
             {  id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown"},
             {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
             {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown"},
        ],
        hasChild:1
    },
    {
        id:4,
        subCategoryDetails:{id:4,name:"Commercial Car",categoryDetails:{id:2,name:"Car"}},
        filterDetails:
        [ 
             {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},
             {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown"},
             {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
             {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown"},
        ],
        hasChild:1
    },
    {
        id:5,
        subCategoryDetails:{id:5,name:"AC",categoryDetails:{id:3,name:"Electronic"}},
        filterDetails:
        [ 
             {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},             
             {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
             
        ],
        hasChild:1
    },
    {
        id:6,
        subCategoryDetails:{id:6,name:"TV",categoryDetails:{id:3,name:"Electronic"}},
        filterDetails:
        [ 
             {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},             
             {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
             
        ],
        hasChild:1
    },
    {
        id:6,
        subCategoryDetails:{id:6,name:"Scooter",categoryDetails:{id:4,name:"Bike"}},
        filterDetails:
        [ 
             {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},             
             {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
             {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown"},
             
        ],
        hasChild:1
    },
    {
        id:7,
        subCategoryDetails:{id:7,name:"Motor Cycles",categoryDetails:{id:4,name:"Bike"}},
        filterDetails:
        [ 
             {  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},             
             {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},
             {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown"},
             
        ],
        hasChild:1
    }


]

export const IMAGES:Image[]=[
    {id:1,name:"Audi Car Image",path:"",extension:"",description:""},
    {id:2,name:"Bajaj MotorCycle Image",path:"",extension:"",description:""},
    {id:3,name:"Panasonic Ac Image",path:"",extension:"",description:""},
    {id:4,name:"Samsung Tv Image",path:"",extension:"",description:""},
    {id:5,name:"2Bhk Flat Image",path:"",extension:"",description:""},
    {id:6,name:"2Bhk Flat Image2",path:"",extension:"",description:""},
    {id:7,name:"Audi Car Image2",path:"",extension:"",description:""},
    {id:8,name:"Active Scooter Image",path:"",extension:"",description:""},    
]


export const COUNTRIES:Country[]=[    
        {id:1,name:"India"}, 
        {id:1,name:"Nepal"},
        {id:1,name:"Srilanka"},
]

export const STATES:State[]=[    
    {id:1,name:"WB",countryDetails:{id:1,name:"India"}},
    {id:2,name:"CH",countryDetails:{id:1,name:"India"}},  
    {id:3,name:"BR",countryDetails:{id:1,name:"India"}}, 
    {id:4,name:"OD",countryDetails:{id:1,name:"India"}},
    
]   

export const PORTS:Port[]=[    
    {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
    {id:2,name:"Port of Chennai",stateDetails: {id:2,name:"CH",countryDetails:{id:1,name:"India"}}},  
    {id:3,name:"Port of BR",stateDetails:{id:3,name:"BR",countryDetails:{id:1,name:"India"}}}, 
    {id:4,name:"Port of OD",stateDetails: {id:4,name:"OD",countryDetails:{id:1,name:"India"}}},
    
]   
   

export const ADVERTISEMENTS: Advertisement[]=[

    {
        id:1,  productName:"Sea Facing New Flat",  productDescription:"", 
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
    },
    
    {
        id:2,  productName:"Good Condition Audi",  productDescription:"", 
        subCategoryDetails: {id:4,name:"Commercial Car", categoryDetails:{id:2,name:"Car"}},
        portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
    },
    
    {
        id:3,  productName:"No EMI Mototr Cycle",  productDescription:"", 
        subCategoryDetails: {id:8,name:"Motor Cycle", categoryDetails:{id:4,name:"Bike"}},
        portDetails: {id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},
    },
]


export const PRODUCTFILTERVALUES:ProductFilterValue[]=[
    {
        id:1,
        advertisementDetails:
        {
                         id:1,  productName:"Sea Facing New Flat",  productDescription:"", 
                         subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
                         portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
        },
        filterValues:[
            {id:1,filterDetails: {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown"},value:"2bhk"},
            {id:2,filterDetails:{  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},value:"15,00,000"},
            {id:3,filterDetails: {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},value:"3 months"},
            
        ]
    },
    {
        id:2,
        advertisementDetails:
        {
            id:2,  productName:"Good Condition Audi",  productDescription:"", 
            subCategoryDetails: {id:4,name:"Commercial Car", categoryDetails:{id:2,name:"Car"}},
            portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
        },
        filterValues:[
            {id:1,filterDetails: {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown"},value:"13"},
            {id:2,filterDetails:{  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},value:"1,50,00,000"},
            {id:3,filterDetails: {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},value:"3 Years"},
            
        ]
    },
    {
        id:3,
        advertisementDetails:
        {
            id:3,  productName:"No EMI Mototr Cycle",  productDescription:"", 
            subCategoryDetails: {id:8,name:"Motor Cycle", categoryDetails:{id:4,name:"Bike"}},
            portDetails: {id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},
        },
        filterValues:[
            {id:1,filterDetails: {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown"},value:"25"},
            {id:2,filterDetails:{  id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},value:"15,000"},
            {id:3,filterDetails: {  id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},value:"8 Years"},
            
        ]
    }

]


export const IMAGEADVERTISEMENTMAP:ImageAdvertisementMap[]=[
    {id:1,imageId:5,advertisementId:1},
    {id:2,imageId:6,advertisementId:1},
    {id:3,imageId:1,advertisementId:2},
    {id:4,imageId:7,advertisementId:2},
    {id:4,imageId:2,advertisementId:3},
]

export const SUBCATFILTEROPTIONS: SubCategoryFilterOption[]=[
    {
        id:1,
        filterSubCatMapId:2,
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        subCatFilterValues:[
            {id:1,filterDetails: {id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown"},value:["1bhk","2bhk","3bhk"]},
            {id:2,filterDetails: {id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},value:["10,00,000","20,00,000","30,00,000"]},
            {id:3,filterDetails: {id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},value:["1year","2year","5year"]},
        ]
    },
    {
        id:2,
        filterSubCatMapId:2,
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        subCatFilterValues:[
            {id:1,filterDetails: {id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown"},value:["1bhk","2bhk","3bhk"]},
            {id:2,filterDetails: {id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},value:["10,00,000","20,00,000","30,00,000"]},
            {id:3,filterDetails: {id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},value:["1year","2year","5year"]},
        ]
    },
    {
        id:3,
        filterSubCatMapId:3,
        subCategoryDetails:{id:3,name:"Domestic Car",categoryDetails:{id:2,name:"Car"}},
        subCatFilterValues: [ 
            {id:1,filterDetails: {id:1,name:"Price-Range",description:"sacdsfsfdf",type:"dropdown"},value:["5,00,000","7,00,000","15,00,000"]},
            {id:2,filterDetails: {id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown"},value:["Petrol","Desel"]},
            {id:3,filterDetails: {id:2,name:"Year-Range",description:"sacdsfsfdf",type:"dropdown"},value:["1year","2year","5year"]},
            {id:4,filterDetails: {id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown"},value:["10","13","15"]},
            
            
       ]
    }
]


export const SUBCATOPTIONS: SubCategoryOption[]=[
    {
        id:1,
        subCategoryDetails:{id:3,name:"Domestic Car",categoryDetails:{id:2,name:"Car"}},
        options:["Honda","Tata","Audi","Bmw"]
    }
]



       
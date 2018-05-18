
import { MessageList, MessageDetails, MessageThread} from "./classDefinition";
import { Category,SubCategory,Filter,SubCatFilterMap,Image,Country,State,Port,Advertisement,ImageAdvertisementMap,ProductFilterValue,AdvertisementFilterValue,SubCategoryFilterOption,SubCategoryOption,CatSubcatImageMap, LogisticFirmList,CompanyDetails,ProfileFields, VerifyCompanyDocument } from "./classDefinition";


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
    {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
    {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
    {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
    {  id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
    {  id:5,name:"Milege",description:"sacdsfsfdf",type:"",addType:"numeric",extraInfo:false},
    {  id:6,name:"Brand",description:"sacdsfsfdf",type:"dropdown",addType:"text",extraInfo:false},      

]


export const SUBCATFILTERMAP:SubCatFilterMap[]=[
    {
        id:1,
        subCategoryDetails:{id:1,name:"ForSale",categoryDetails:{id:1,name:"Properties"}},
        filterDetails:
        [ 
             {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
             {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
        ],
        hasChild:1
    },
    {
        id:2,
        subCategoryDetails:{id:2,name:"ForRent",categoryDetails:{id:1,name:"Properties"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
             {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
        ],
        hasChild:1
    },
    {
        id:3,
        subCategoryDetails:{id:3,name:"Domestic Car",categoryDetails:{id:2,name:"Car"}},
        filterDetails:
        [ 
             {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
             {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
        ],
        hasChild:1
    },
    {
        id:4,
        subCategoryDetails:{id:4,name:"Commercial Car",categoryDetails:{id:2,name:"Car"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
            {  id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},
            {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
            {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
        ],
        hasChild:1
    },
    {
        id:5,
        subCategoryDetails:{id:5,name:"AC",categoryDetails:{id:3,name:"Electronic"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},         
          
            {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
             
        ],
        hasChild:1
    },
    {
        id:6,
        subCategoryDetails:{id:6,name:"TV",categoryDetails:{id:3,name:"Electronic"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},        
          
            {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
             
        ],
        hasChild:1
    },
    {
        id:6,
        subCategoryDetails:{id:6,name:"Scooter",categoryDetails:{id:4,name:"Bike"}},
        filterDetails:
        [ 
             {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},             
             {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
             {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
             
        ],
        hasChild:1
    },
    {
        id:7,
        subCategoryDetails:{id:7,name:"Motor Cycles",categoryDetails:{id:4,name:"Bike"}},
        filterDetails:
        [ 
            {  id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},             
            {  id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},
            {  id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},
             
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

    {id:9,name:"Property Image",path:"",extension:"",description:""},    
    {id:10,name:"Electronics Image",path:"",extension:"",description:""},    
    {id:11,name:"Bike Image",path:"",extension:"",description:""},  
    {id:12,name:"Car Image",path:"",extension:"",description:""},

    {id:13,name:"ForSale Image",path:"",extension:"",description:""},    
    {id:14,name:"AC Image",path:"",extension:"",description:""},    
    {id:15,name:"Scooter Image",path:"",extension:"",description:""}, 
    {id:15,name:"Domestic Car Image",path:"",extension:"",description:""},        
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
        name:"Amit Halder",contact:9038568379,date:new Date(),
    },
    
    {
        id:2,  productName:"Good Condition Audi",  productDescription:"", 
        subCategoryDetails: {id:4,name:"Commercial Car", categoryDetails:{id:2,name:"Car"}},
        portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
        name:"Bipraneel",contact:9038102961,date:new Date(),
    },
    
    {
        id:3,  productName:"No EMI Mototr Cycle",  productDescription:"", 
        subCategoryDetails: {id:8,name:"Motor Cycle", categoryDetails:{id:4,name:"Bike"}},
        portDetails: {id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},
        name:"Abir Basu",contact:9943287632,date:new Date(),
    },
    {
        id:4,  productName:"2 years Old Flat",  productDescription:"", 
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
        name:"Spandan",contact:9903527889,date:new Date(),
    },
    {
        id:5,  productName:"New Flat",  productDescription:"", 
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
        name:"Amit Halder",contact:9038568379,date:new Date(),
    },
    {
        id:6,  productName:" Flat",  productDescription:"", 
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
        name:"Amit Halder",contact:9038568379,date:new Date(),
    }
]


export const PRODUCTFILTERVALUES:ProductFilterValue[]=[
    {
        id:1,
        advertisementDetails:
        {
                         id:1,  productName:"Sea Facing New Flat",  productDescription:"", 
                         subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
                         portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
                         name:"Amit Halder",contact:9038568379,date:new Date(),
        },
        filterValues:[
            {name:"Bedroom",value:"2bhk"},
            {name:"Price",value:"1500000"},
            {name:"Year",value:"3 years"},
            
        ]
    },
    {
        id:4,
        advertisementDetails:
        {
                         id:4,  productName:"2 years Old Flat",  productDescription:"", 
                         subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
                         portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
                         name:"Spandan",contact:9903527889,date:new Date(),
        },
        filterValues:[
            {name:"Bedroom",value:"2bhk"},
            {name:"Price",value:"1500000"},
            {name:"Year",value:"2 Years"},
            
        ]
    },
    {
        id:2,
        advertisementDetails:
        {
            id:2,  productName:"Good Condition Audi",  productDescription:"", 
            subCategoryDetails: {id:4,name:"Commercial Car", categoryDetails:{id:2,name:"Car"}},
            portDetails: {id:2,name:"Port of Chennai",stateDetails:{id:2,name:"CH",countryDetails:{id:1,name:"India"}}},
            name:"Bipraneel",contact:9038102961,date:new Date(),
        },
        filterValues:[
            {name:"Milege",value:"13"},
            {name:"Price",value:"1,50,00,000"},
            {name:"Year",value:"3 Years"},
            
        ]
    },
    { 
        id:3,
        advertisementDetails:
        {
            id:3,  productName:"No EMI Mototr Cycle",  productDescription:"", 
            subCategoryDetails: {id:8,name:"Motor Cycle", categoryDetails:{id:4,name:"Bike"}},
            portDetails: {id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},
            name:"Abir Basu",contact:9943287632,date:new Date(),
        },
        filterValues:[
            {name:"Milege",value:"25"},
            {name:"Price",value:"15,000"},
            {name:"Year",value:"8 Years"},
            
        ]
    },
    {
        id:5,
        advertisementDetails:
        {
                         id:5,  productName:"New Flat",  productDescription:"", 
                         subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
                         portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
                         name:"Amit Halder",contact:9038568379,date:new Date(),
        },
        filterValues:[
            {name:"Bedroom",value:"2bhk"},
            {name:"Price-Range",value:"3400000"},
            {name:"Year-Range",value:"3 years"},
            
        ]
    },
    {
        id:6,
        advertisementDetails:
        {
                         id:6,  productName:" Flat",  productDescription:"", 
                         subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
                         portDetails: {id:1,name:"Kolkata Port",stateDetails:{id:1,name:"WB",countryDetails:{id:1,name:"India"}}},
                         name:"Amit Halder",contact:9038568379,date:new Date(),
        },
        filterValues:[
            {name:"Bedroom",value:"3bhk"},
            {name:"Price-Range",value:"2000000"},
            {name:"Year-Range",value:"3 years"},
            
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




export const CATSUBCATIMAGEMAP:CatSubcatImageMap[]=[
    {id:1,imageId:9,catId:1,subCatId:null},
    {id:2,imageId:10,catId:3,subCatId:null},
    {id:3,imageId:11,catId:4,subCatId:null},
    {id:4,imageId:12,catId:2,subCatId:null},

    {id:1,imageId:9,catId:1,subCatId:1},
    {id:2,imageId:10,catId:3,subCatId:5},
    {id:3,imageId:11,catId:4,subCatId:7},
    {id:4,imageId:12,catId:2,subCatId:3},
   
]

export const SUBCATFILTEROPTIONS: SubCategoryFilterOption[]=[
    {
        id:1,
        filterSubCatMapId:2,
        subCategoryDetails: {id:1,name:"ForSale", categoryDetails:{id:1,name:"Properties"}},
        subCatFilterValues:[
            {id:1,filterDetails: {id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},value:["1bhk","2bhk","3bhk"]},
            {id:2,filterDetails: {id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["1000000","2000000","3000000"]},
            {id:3,filterDetails: {id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["1year","2year","5year"]},
        ]
    },
    {
        id:2,
        filterSubCatMapId:2,
        subCategoryDetails: {id:1,name:"ForRent", categoryDetails:{id:1,name:"Properties"}},
        subCatFilterValues:[
            {id:1,filterDetails: {id:3,name:"Bedroom",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},value:["1bhk","2bhk","3bhk"]},
            {id:2,filterDetails: {id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["10,00,000","20,00,000","30,00,000"]},
            {id:3,filterDetails: {id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["1year","2year","5year"]},
        ]
    },
    {
        id:3,
        filterSubCatMapId:3,
        subCategoryDetails:{id:3,name:"Domestic Car",categoryDetails:{id:2,name:"Car"}},
        subCatFilterValues: [ 
            {id:1,filterDetails: {id:1,name:"Price",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["5,00,000","7,00,000","15,00,000"]},
            {id:2,filterDetails: {id:4,name:"Fuel-Type",description:"sacdsfsfdf",type:"dropdown",addType:"dropdown",extraInfo:false},value:["Petrol","Diesel"]},
            {id:3,filterDetails: {id:2,name:"Year",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:true},value:["1year","2year","5year"]},
            {id:4,filterDetails: {id:5,name:"Milege",description:"sacdsfsfdf",type:"dropdown",addType:"numeric",extraInfo:false},value:["10","13","15"]},
            
            
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

export const LOGISTICFIRMS: LogisticFirmList[]=[
    {id:1, name:'Mariners Bay', contact:'9903458227', email:'mbay@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4.5,profile_state:true},
    {id:2, name:'Sea Farer', contact:'9903422127', email:'seafarer@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4,profile_state:true},
    {id:3, name:'Blue Shark', contact:'9903422127', email:'blueshark@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:3.5,profile_state:true},
    {id:4, name:'Maharashtra Greats', contact:'990345823', email:'theindian@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4.5,profile_state:true},
    {id:5, name:'The Indian', contact:'990345789', email:'sg@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4,profile_state:false},    
];

export const DefaultLogisticFirm:LogisticFirmList=LOGISTICFIRMS[LOGISTICFIRMS.length-1];

export const COMPANYDETAILS: CompanyDetails[]=[
    {id:1, name:'Marine Affiliates', contact:'9903458227', email:'maff@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4.5,profile_completion_percent:50,profileFields:[{id:1,fieldName:"Phone No",verifyStatus:true},{id:2,fieldName:"Email",verifyStatus:true},{id:3,fieldName:"Document",verifyStatus:false}]},
    {id:2, name:'Deep Oceans', contact:'9903422127', email:'deepoceans@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4,profile_completion_percent:70,profileFields:[{id:1,fieldName:"Phone No",verifyStatus:true},{id:2,fieldName:"Email",verifyStatus:true},{id:3,fieldName:"Document",verifyStatus:true}]},
    {id:3, name:'Great Eastern', contact:'9903422127', email:'geships@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:3.5,profile_completion_percent:65,profileFields:[{id:1,fieldName:"Phone No",verifyStatus:true},{id:2,fieldName:"Email",verifyStatus:false},{id:3,fieldName:"Document",verifyStatus:false}]},
    {id:4, name:'MC Ships', contact:'990345823', email:'mcships@gmail.com',port:{id:4,name:"Port of OD",stateDetails:{id:4,name:"OD",countryDetails:{id:1,name:"India"}}},avg_rating:4.5,profile_completion_percent:90,profileFields:[{id:1,fieldName:"Phone No",verifyStatus:false},{id:2,fieldName:"Email",verifyStatus:false},{id:3,fieldName:"Document",verifyStatus:false}]},
];    

export const DefaultCompany:CompanyDetails=COMPANYDETAILS[COMPANYDETAILS.length-1];

export const MESSAGELIST: MessageList[]=[
    {messageId:1, adId: 1, senderId:4, receiverId: 2},
    {messageId:2, adId: 2, senderId:4, receiverId: 5},
];

export const MESSAGEDETAILS: MessageDetails[]=[
    {messageId:1, msgThread:[{msg:"hi how are you?",senderId:4, receiverId: 2}, {msg:"Am Fine?",senderId:2, receiverId: 1}]},
    {messageId:2, msgThread:[{msg:"Ki haal?",senderId:4, receiverId: 5}, {msg:"Ami bhalo..tui kemn?",senderId:5, receiverId: 1}]}
];
//Admin Section

export const VERIFYCOMPANYDOCUMENT : VerifyCompanyDocument[]=[
{id:1, name:'voterId',status:true}

];
import { CompanyVessel } from "./company_vessel";
import { Employee } from '../company/company_employee';
import { Roles } from '../../app/roles';
import { ROLES } from '../../app/roles_mock_data';

import { Quotation } from '../company/quotation';

import { Order,QuotedItem } from './order';

import { ExchangeRates } from '../company/company_exchange_rates';
import { ForexChart } from '../company/company_exchange_rates';
import { VendorList } from '../company/company_vendor_list';
import { VoyageData } from "./company_voyage";

import { CompanyVesselCount } from "../company/company_vessel_count"
import { VesselType } from "../company/vessel_type";

import { CompanyCrewNationality } from "../company/company_crew_nationality";
import { CrewNationality } from "../company/crew_nationality";

import { FavVendor } from "../company/company_fav_vendor"



import { PurchaseOrder } from "../company/purchase_order";



export const ORDERS: any[]=[


    { OrderNo: 'Od001', OrderDt:new Date('2-3-2018'), Company:'Marine Affiliates', ShipName: 'GreatShip',  PortName: 'Port of Singapore', status: 'Cancelled', delivCancelDate:new Date('10-3-2018'), vendor:["Mariners Bay", "Sea Farer", "The Indian"] },
    { OrderNo: 'Od002', OrderDt:new Date('10-3-2018'), Company:'Great Eastern', ShipName: 'Sea Horse',  PortName: 'Jurong Port', status: 'Delivered', delivCancelDate:new Date('2-3-2018'), vendor:["Mariners Bay", "Sea Farer", "The Indian"] },
    { OrderNo: 'Od003', OrderDt:new Date('08-3-2018'), Company:'Deep Oceans', ShipName: 'Night King',  PortName: 'Jurong Port', status: 'Quotation Received', delivCancelDate:new Date('7-27-2018'), vendor:["Mariners Bay", "Sea Farer", "The Indian"] },
    { OrderNo: 'Od004', OrderDt:new Date('12-3-2018'), Company:'Deep Oceans', ShipName: 'GreatShip',  PortName: 'Port of Durres', status: 'New', delivCancelDate:new Date('2-4-2018'), vendor:["Mariners Bay", "Sea Farer", "The Indian"] },   
    { OrderNo: 'Od005', OrderDt:new Date('8-3-2018'), Company:'Great Eastern', ShipName: 'Oceans 20',  PortName: 'Port of Sarande', status: 'Screened', delivCancelDate:new Date('8-3-2018'), vendor:["Mariners Bay", "Sea Farer", "The Indian"] },
    { OrderNo: 'Od006', OrderDt:new Date('10-3-2018'), Company:'Marine Affiliates', ShipName: 'Sea Horse',  PortName: 'Port of Singapore', status: 'Delivered', delivCancelDate:new Date('10-4-2018'), vendor:["Mariners Bay", "Maharashtra Greats", "The Indian"] },
    { OrderNo: 'Od007', OrderDt:new Date('10-3-2018'), Company:'MC Ship', ShipName: 'Sea Horse',  PortName: 'Port of Singapore', status: 'Cancelled', delivCancelDate:new Date('10-4-2018'), vendor:["Mariners Bay","Mariners Bay", "Maharashtra Greats", "The Indian"] }


];

export const PROVISIONS: any=
    {OrderNo: 'Od003', OrderDt:'20-3-2018',ShipName: 'GreatShip', PortName: 'Kolkata', VendorName: '', DelivDate:'2-4-2018',
    Items:[
        {Id:'F001', Name:'Apple',Qty:'10',Unit:'Tonnes',Price:'$30'},
        {Id:'F002', Name:'Mango Juice',Qty:'1000',Unit:'Cans',Price:'$4000'},
        {Id:'F003', Name:'Prawn',Qty:'100',Unit:'Kgs',Price:'$800'},
        {Id:'F004', Name:'Beef',Qty:'100',Unit:'Kgs',Price:'$3400'},
        {Id:'F005', Name:'Chicken',Qty:'100',Unit:'Kgs',Price:'$50'},
        ]
    }

    export const allProvisions: any[]=
    [
        {OrderNo: 'Od003', OrderDt:'20-2-2018',ShipName: 'GreatShip', PortName: 'Kolkata', VendorName: 'Vendor1',
            Items:[
                {Id:1, Name:'Apple',Qty:'10',Unit:'Tonnes',Price:'$30'},
                {Id:2, Name:'Mango Juice',Qty:'1000',Unit:'Cans',Price:'$4000'},
                {Id:3, Name:'Prawn',Qty:'100',Unit:'Kgs',Price:'$800'},
                {Id:4, Name:'Beef',Qty:'100',Unit:'Kgs',Price:'$3400'},
                ]
        },

        {OrderNo: 'Od006', OrderDt:'25-3-2018',ShipName: 'AmitShip', PortName: 'Kolkata', VendorName: 'Vendor1',
    Items:[
        {Id:1, Name:'pork',Qty:'10',Unit:'Tonnes',Price:'$120'},
        {Id:2, Name:'potato Juice',Qty:'1000',Unit:'Cans',Price:'$20'},        
        {Id:3, Name:'Beef',Qty:'100',Unit:'Kgs',Price:'$3400'},
        ]
    }
]

/* export const quotationDetails: any[]=
    [
        {OrderNo: 'Od003', OrderDt:'20-2-2018',ShipName: 'GreatShip', PortName: 'Kolkata',
            requirement:{
                items:[{i:1}]
            },
           quotations: 
                {
                    vendorQuotation:VendorQuotation [] =[
                        { orderNo:'odoo3',vendorname:'vendor1',status:'onhold',quotedItemList:=[
                             {itemId:1,itemName:'apple', Qty:10,Unit:'kg',price:'$100'},
                             {itemId:2,itemName:'beef', Qty:20,Unit:'kg',price:'$500'},
                             {itemId:3,itemName:'pork', Qty:30,Unit:'kg',price:'$600'}
                                 
                        ]},

                        { orderNo:'odoo3',vendorname:'vendor1',status:'onhold',quotedItemList:=[
                            {itemId:1,itemName:'apple', Qty:10,Unit:'kg',price:'$100'},
                            {itemId:2,itemName:'beef', Qty:20,Unit:'kg',price:'$500'},
                            {itemId:3,itemName:'pork', Qty:30,Unit:'kg',price:'$600'}
                                
                       ]}
                     ],

                     
                 }
        }

] */

export const CURRENTLYCLOSEDORDER:any=[]
     
export const ORDERDETAILS: Order[]=
[
    {
        orderNo: 'Od001',
        orderDate: new Date('03/15/2018'),
        shipName: 'GreatShip',
        portName:'Kolkata',
        status: 'new',
        delivCancelDate:new Date('04/15/2018'),
        requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
        quotedItems:[
                        {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:8, totalPrice:8000},
                        {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:30, totalPrice:81000},
                        {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:38,  totalPrice:76000}
    
                    ]
    },
    {
        orderNo: 'Od002',
        orderDate: new Date('03/15/2018'),
        shipName: 'GreatShip',
        portName:'Kolkata',
        status: 'new',
        delivCancelDate:new Date('04/15/2018'),
        requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
        quotedItems:[
                        {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:8, totalPrice:8000},
                        {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:30, totalPrice:81000},
                        {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:38,  totalPrice:76000}
    
                    ]
    },
    {
    orderNo: 'Od003',
    orderDate: new Date('03/15/2018'),
    shipName: 'Sea Horse',
    portName:'Kolkata',
    status: 'new',
    delivCancelDate:new Date('04/15/2018'),
    requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
    quotedItems:[
                    {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:8, totalPrice:8000},
                    {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:30, totalPrice:81000},
                    {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:38,  totalPrice:76000}

                ]
    },
    {
        orderNo: 'Od004',
        orderDate: new Date('03/15/2018'),
        shipName: 'Sea Horse',
        portName:'Kolkata',
        status: 'new',
        delivCancelDate:new Date('04/15/2018'),
        requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
        quotedItems:[
                        {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:8, totalPrice:8000},
                        {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:30, totalPrice:81000},
                        {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:38,  totalPrice:76000}
    
                    ]
    },
    {
        orderNo: 'Od006',
        orderDate: new Date('03/15/2018'),
        shipName: 'Sea Horse',
        portName:'Kolkata',
        status: 'new',
        delivCancelDate:new Date('04/15/2018'),
        requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
        quotedItems:[
                        {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:8, totalPrice:8000},
                        {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:30, totalPrice:81000},
                        {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:38,  totalPrice:76000}
    
                    ]
    },
    {
        
            orderNo: 'Od007',
            orderDate: new Date('02/21/2018'),
            shipName: 'Sea Horse',
            portName:'Kolkata',
            status: 'new',
            delivCancelDate:new Date('05/11/2018'),
            requestedVerdors:["Mariners Bay", "Sea Farer", "The Indian"],
            quotedItems:[
                            {itemId:5,itemName:'carrot',requiredquantity:60,unit:'kg',price:'',image:"/assets/img/items/carrot.jpg",vendorSupliedQuantity:48,  totalPrice:2880},
                            {itemId:4,itemName:'potato',requiredquantity:100,unit:'kg',price:'',image:"/assets/img/items/potato.jpg",vendorSupliedQuantity:90, totalPrice:9000},
                            {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:38, totalPrice:1520}
        
                        ]
            
    }

];

export const PURCHASE_ORDER :PurchaseOrder[]=[
   /*  {poNmbr:"COM/PO/123", 
    quotation:{
        vq_id:'VQ001',
        orderDetails:{
            orderNo: 'Od003',
            orderDate: new Date('03/15/2018'),
            shipName: 'Sea Horse',
            portName:'Kolkata',
            status: 'new',
            delivCancelDate:new Date('04/15/2018'),
            requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
            quotedItems:[
                            {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'$3',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:8, totalPrice:30},
                            {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'$34',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:27,  totalPrice:1020},
                            {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'$12',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:38,  totalPrice:456}
        
                        ]
                    },
        vendorName:'The Indian',
        status:'',
        totalCost:16500,
        taxes:[{name:"GST",value:10}],
        costWithTax:18150,
        numberOfItems:3
    }}  */
];

/* export const VENDOR_QUOTATION_DETAILS :VendorQuotation[]=
[
    {
        vq_id:'VQ001',
        orderDetails:{
            orderNo: 'Od003',
            orderDate: new Date('03/15/2018'),
            shipName: 'Sea Horse',
            portName:'Kolkata',
            status: 'new',
            delivCancelDate:new Date('04/15/2018'),
            requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
            quotedItems:[
                            {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'$3',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:8, totalPrice:24,},
                            {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'$34',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:27, totalPrice:918,},
                            {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'$12',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:38, totalPrice:456,}
        
                        ]
                    },
        vendorName:'The Indian',
        status:'',
        totalCost:1398,
        taxes:[{name:"GST",value:10}],
        costWithTax:1538,
        numberOfItems:3
    },
    {
        vq_id:'VQ002',
        orderDetails:{
            orderNo: 'Od003',
            orderDate: new Date('03/15/2018'),
            shipName: 'Sea Horse',
            portName:'Kolkata',
            status: 'new',
            delivCancelDate:new Date('04/15/2018'),
            requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
            quotedItems:[
                            {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'$2',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:9,  totalPrice:18},
                            {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'$30',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:27,  totalPrice:810,},
                            {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'$10',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:33,  totalPrice:330,}
        
                        ]
                    },
        vendorName:'Mariners Bay',
        status:'',
        totalCost:1158,
        taxes:[{name:"GST",value:10}],
        costWithTax:1274,
        numberOfItems:3
    },
    {
        vq_id:'VQ003',
        orderDetails:{
            orderNo: 'Od004',
            orderDate: new Date('03/15/2018'),
            shipName: 'Sea Horse',
            portName:'Kolkata',
            status: 'new',
            delivCancelDate:new Date('04/15/2018'),
            requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
            quotedItems:[
                            {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'$3',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:9, totalPrice:27},
                            {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'$34',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:27, totalPrice:918},
                            {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'$12',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:33, totalPrice:396}
        
                        ]
                    },
        vendorName:'Maharashtra Greats',
        status:'cofirm',
        totalCost:1341,
        taxes:[{name:"",value:0}],
        costWithTax:1341,
        numberOfItems:3
    },

    {
        vq_id:'VQ007',
        orderDetails:{
            orderNo: 'Od003',
            orderDate: new Date('03/15/2018'),
            shipName: 'Sea Horse',
            portName:'Kolkata',
            status: 'new',
            delivCancelDate:new Date('04/15/2018'),
            requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
            quotedItems:[
                            {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'$3',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:9, totalPrice:27},
                            {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'$34',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:27, totalPrice:918},
                            {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'$12',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:33, totalPrice:396}
        
                        ]
                    },
        vendorName:'Maharashtra Greats',
        status:'',
        totalCost:1341,
        taxes:[{name:"",value:0}],
        costWithTax:1341,
        numberOfItems:3
    },
    {
        vq_id:'VQ004',
        orderDetails:{
            orderNo: 'Od004',
            orderDate: new Date('03/15/2018'),
            shipName: 'Sea Horse',
            portName:'Kolkata',
            status: 'new',
            delivCancelDate:new Date('04/15/2018'),
            requestedVerdors:["Mariners Bay", "Maharashtra Greats", "The Indian"],
            quotedItems:[
                            {itemId:1,itemName:'apple',requiredquantity:10,unit:'kg',price:'$4',image:"/assets/img/items/apple.jpg",vendorSupliedQuantity:9, totalPrice:36},
                            {itemId:2,itemName:'beef',requiredquantity:30,unit:'kg',price:'$35',image:"/assets/img/items/beef.jpg",vendorSupliedQuantity:27, totalPrice:945},
                            {itemId:3,itemName:'pork',requiredquantity:40,unit:'kg',price:'$13',image:"/assets/img/items/pork.jpg",vendorSupliedQuantity:33, totalPrice:429}
        
                        ]
                    },
        vendorName:'The Indian',
        status:'cofirm',
        totalCost:1410,
        taxes:[{name:"",value:0}],
        costWithTax:1410,
        numberOfItems:3
    }
    
]; */
  
/* export const ORDER_QUOTATION_MAP_DETAILS :OrderQuotationMap[]=[
    {orderNo:'Od003', vq_id:'VQ002'},
    {orderNo:'Od003', vq_id:'VQ001'},
    {orderNo:'Od003', vq_id:'VQ007'},
    {orderNo:'Od004', vq_id:'VQ003'},
    {orderNo:'Od004', vq_id:'VQ004'},

]; */





export const VESSEL: CompanyVessel[]=[
    { id: 'Vs001', name: 'GreatShip', type:'Oil Tanker', crew_on_board:28, extra_ppl:10, budget:null},
    { id: 'Vs002', name: 'Sea Horse', type:'Cargo Ship', crew_on_board:32, extra_ppl:2, budget:null},
    { id: 'Vs003', name: 'Night King', type:'Bulk Carrier', crew_on_board:28, extra_ppl:6, budget:null},
    { id: 'Vs004', name: 'Oceans 20', type:'Gas Tanker', crew_on_board:24, extra_ppl:12, budget:null},        
]

export const EMPLOYEES: Employee[]=[

    { id: "Emp001", name: 'Spandan', dob:"01-01-1998",designation:'Cadet', email:'src@gmail.com', contact:'9903527889',nationality:'Indians',weight:"76 kg",height:"70 inch", idDocs:'',role:'Admin'},
    { id: "Emp002", name: 'Amit', dob:"01-01-1998", designation:'Cadet', email:'ah@gmail.com', contact:'990352876',nationality:'Indians',weight:"96 kg",height:"61 inch", idDocs:'',role:'Admin'},
    { id: "Emp003", name: 'Bipra', dob:"07-12-1998", designation:'Chief Engineer', email:'bb@gmail.com', contact:'9903527009',nationality:'Chinese',weight:"96 kg",height:"70 inch", idDocs:'',role:'Admin'},
    { id: "Emp004", name: 'Hakira', dob:"10-12-1986", designation:'Captain', email:'hak@gmail.com', contact:'9903527100',nationality:'Korean',weight:"74 kg",height:"70 inch", idDocs:'',role:'User'},
    { id: "Emp005", name: 'Tojo', dob:"21-02-1988", designation:'Second Engineer', email:'tj@gmail.com', contact:'9903527100', nationality:'Japanese',weight:"75 kg",height:"67 inch", idDocs:'',role:'Admin'},
    { id: "Emp006", name: 'Charles', dob:"31-01-1988", designation:'Second Officer', email:'chrl@gmail.com', contact:'9903527100', nationality:'Japanese',weight:"79 kg",height:"66 inch", idDocs:'',role:'User'},
    { id: "Emp007", name: 'Williams', dob:"31-09-1976", designation:'Captain', email:'will@gmail.com', contact:'9903527100', nationality:'Ukrainian',weight:"73 kg",height:"69 inch", idDocs:'',role:'User'},
    { id: "Emp008", name: 'George', dob:"12-01-1954", designation:'Chief Cook', email:'george@gmail.com', contact:'9903527100', nationality:'Polish',weight:"85 kg",height:"70 inch", idDocs:'',role:'User'},
    { id: "Emp010", name: 'Washington', dob:"12-06-1995", designation:'Cadet', email:'wash@gmail.com', contact:'9903527100', nationality:'Filipinos',weight:"67 kg",height:"62 inch", idDocs:'',role:'User'},

]

export const NATIONALITIES: string[]=[
    "India","Singapore","Japan","USA","UK"
]

export const PORTS: string[]=[
    "Kolkata Port","Mumbai Port","Tokyo Port","Cape Town Port"

]


export const QUOTATIONS:Quotation[]=[
    {id :1,orderNo:'Od003',vendorName:'vendor1',orderDate:'01/25/2018',amount:12345,numberOfItem:15},
    {id :2,orderNo:'Od006',vendorName:'vendor2',orderDate:'01/25/2017',amount:12345,numberOfItem:26},
    {id :3,orderNo:'Od003',vendorName:'vendor3',orderDate:'01/25/2018',amount:548621,numberOfItem:15},
  
];


export const FOREXRATES: ExchangeRates[]=[
    {country: 'USA', symbol: '$', fraction:1},
    {country: 'India', symbol: 'Rs', fraction:64.85},
    {country: 'Japan', symbol: 'Yen', fraction:106.84},
    {country: 'European Union', symbol: 'Euro', fraction:0.81},
    {country: 'Singapore', symbol: 'SD', fraction:1.32}
]

export const FOREXCHART: ForexChart[]=[
    {country: 'India', symbol: 'Rs', corresUSD:0.02},
    {country: 'Japan', symbol: 'Yen', corresUSD:0.0094},
    {country: 'European Union', symbol: 'Euro', corresUSD:1.23},
    {country: 'Singapore', symbol: 'SD', corresUSD:0.76}
]

export const VENDORS: VendorList[]=[

    {id:'Vd001', name:'Mariners Bay', contact:'9903458227', email:'mbay@gmail.com', headoffice:'Singapore', port:['Jurong Port','Port of Singapore'], cmp_time_rating:0, cmp_quality_rating:0, ves_time_rating:0, ves_quality_rating:0, avg_rating:3.5,profile_state:true,subscribed:true},
    {id:'Vd002', name:'Sea Farer', contact:'9903422127', email:'seafarer@gmail.com', headoffice:'Singapore', port:['Jurong Port','Port of Singapore'], cmp_time_rating:0, cmp_quality_rating:0, ves_time_rating:0, ves_quality_rating:0,  avg_rating:4.4,profile_state:true,subscribed:true},
    {id:'Vd003', name:'Blue Shark', contact:'9903422127', email:'blueshark@gmail.com', headoffice:'Singapore', port:['Jurong Port','Port of Singapore'], cmp_time_rating:0, cmp_quality_rating:0, ves_time_rating:0, ves_quality_rating:0,  avg_rating:4.4,profile_state:true,subscribed:true},
    {id:'Vd004', name:'Maharashtra Greats', contact:'990345823', email:'theindian@gmail.com', headoffice:'India', port:['Port of Mumbai'],cmp_time_rating:0, cmp_quality_rating:0, ves_time_rating:0, ves_quality_rating:0,avg_rating:4.5,profile_state:true,subscribed:true},
    {id:'Vd005', name:'The Indian', contact:'990345789', email:'sg@gmail.com', headoffice:'Singapore', port:['Port of Singapore'],cmp_time_rating:0, cmp_quality_rating:0, ves_time_rating:0, ves_quality_rating:0, avg_rating:4.5,profile_state:false,subscribed:false},
    
];

export const Navbar_Vendor_Status: any[]=[
    {id:'Vd001', name:'Mariners Bay', subscribed:true, comp_seen:true, vessel_seen:true },
    {id:'Vd002', name:'Sea Farer', subscribed:true, comp_seen:true, vessel_seen:true },
    {id:'Vd003', name:'Blue Shark', subscribed:true, comp_seen:true, vessel_seen:true },
    {id:'Vd004', name:'The Indian', subscribed:true, comp_seen:false, vessel_seen:true },
    /* {id:'Vd005', name:'Maharashtra Greats', subscribed:true, comp_seen:false, vessel_seen:false }, */
];

export const VOYAGEDETAILS:VoyageData[]=[
    { startPort:"Kolkata",startDate: new Date("2/10/2018"),endPort:"London",endDate:new Date("3/27/2018"),portsOnRoute:[{name:"Mumbai",date:new Date("3/20/2018")},{name:"Singapore",date:new Date("3/28/2018")}]}
];

export const VESSELCOUNT:CompanyVesselCount[]=[
    {cmpName:"Marine Affiliates", 
        type_count:[ 
            {type:"Oil Tankers",count: 30},
            {type:"Gas Tankers",count: 12},
            {type:"Bulk Carrier",count: 36},
            {type:"RoRo",count: 4},
            {type:"Cargo Ships",count: 18},

        ]
    },
    {cmpName:"Deep Oceans", 
        type_count:[ 
            {type:"Oil Tankers",count: 32},
            {type:"Gas Tankers",count: 10},
            {type:"Bulk Carrier",count: 38},
            {type:"RoRo",count: 5},
            {type:"Cargo Ships",count: 18},
            {type:"Chemical Tanker",count: 1200},
            

        ]
    },
];

export const VESSELTYPE: VesselType[]=[
    {id:"Vsl001", type:"Oil Tankers"},
    {id:"Vsl002", type:"Chemical Tankers"},
    {id:"Vsl003", type:"Gas Tankers"},
    {id:"Vsl004", type:"Bulk Tankers"},
    {id:"Vsl005", type:"Container Ship"},
    {id:"Vsl006", type:"RoRo"},
    {id:"Vsl007", type:"Offshore Vessel"},
    {id:"Vsl008", type:"Passenger Ship"},
    {id:"Vsl009", type:"Cargo Ship"},

];

export const COMPANY_CREW_NATIONALITIES:CompanyCrewNationality[]=[
    {cmpName:"Marine Affiliates", 
        nation_count:[ 
            {name:"Indians",count: 1025},
            {name:"Chinese",count: 100},
            {name:"Filipinos",count: 750},
            {name:"Indonesian",count: 150},
            {name:"Ukranian",count: 275},
            {name:"Russian",count: 200},

        ]
    },
    {cmpName:"Deep Oceans", 
        nation_count:[ 
            {name:"Indians",count: 925},
            {name:"Chinese",count: 90},
            {name:"Filipinos",count: 850},
            {name:"Indonesian",count: 250},
            {name:"Ukranian",count: 200},
            {name:"Russian",count: 210},

        ]
    },
];

export const CREW_NATIONALITY: CrewNationality[]=[
    {id:"Cre001", nationality:"Indians"},
    {id:"Cre002", nationality:"Chinese"},
    {id:"Cre003", nationality:"Filipinos"},
    {id:"Cre004", nationality:"Koreans"},
    {id:"Cre005", nationality:"Japanese"},
    {id:"Cre006", nationality:"Ukrainian"},
    {id:"Cre007", nationality:"Polish"},
];


export const FAV_VENDOR:FavVendor[]=[
    {companyName:'Deep Oceans',favouriteVendors:[{vendorId:'Vd001',status:'favourite confirm'},{vendorId:'Vd003',status:'confirm others'},{vendorId:'Vd005',status:'confirm others'}],vesselOrderId:[]},
        
];
import { Component, OnInit } from '@angular/core';
import { LogisticFirmList,ThirdPartyAdsPosition, ThirdPartyAds, Port, State, Country, LogisticsPortMapping  } from '../../classDefinition';
import { DefaultLogisticFirm, THIRD_PARTY_AD_POSITIONS, THIRD_PARTY_ADS, PORTS, STATES, COUNTRIES, LOGISTICS_PORT_MAPPING } from '../../application_mock_Data';

import { Router } from '@angular/router';

import swal from 'sweetalert2';
declare const $;

@Component({
  selector: 'app-logistics-promote',
  templateUrl: './logistics-promote.component.html',
  styleUrls: ['./logistics-promote.component.css']
})
export class LogisticsPromoteComponent implements OnInit {

  currentFirm:LogisticFirmList;

  currentPortMapping:LogisticsPortMapping;

  adTitle:string;
  adDetails:string;
  adUrl:string="company/logisticsFirmProfile"

  adPositions:ThirdPartyAdsPosition[]=[];
  //chosenPositionID:number=null;
  chosenPosition:string;

  countries:Country[]=[];
  chosenCountry:string;
  states:State[]=[];
  chosenState:string;
  ports:Port[]=[];
  chosenPorts:string[]=[];
  selectedPort:string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentFirm=DefaultLogisticFirm;
    this.adPositions=THIRD_PARTY_AD_POSITIONS;

    //this.countries=COUNTRIES;
    this.currentPortMapping=LOGISTICS_PORT_MAPPING.find(mapping=>mapping.logisticsId==this.currentFirm.id)

    if(this.currentPortMapping)
    {
      for(let map of this.currentPortMapping.ports)
      {
        var countryServed=map.stateDetails.countryDetails;
        var isCountryPresent=this.countries.find(c=>c.id==countryServed.id)
        console.log("isCountryPresent",isCountryPresent)
        if(isCountryPresent==undefined || isCountryPresent==null)
        {
          console.log("this.countries before adding",this.countries)
          //alert(countryServed.name+"country pushed for the first time")
          this.countries.push(countryServed);
          console.log("this.countries after adding",this.countries)
        }
        
      }
    }

    console.log("this.countries",this.countries)
  }

  getState()
  {
    //this.states=STATES.filter(st=>st.countryDetails.name==this.chosenCountry);
    this.states=[];
    for(let map of this.currentPortMapping.ports)
    {
      var stateServed=map.stateDetails;
      var isStatePresent=this.states.find(c=>c==stateServed)
      console.log("isStatePresent",isStatePresent)
      if(isStatePresent==undefined || isStatePresent==null)
      {
        if(stateServed.countryDetails.name==this.chosenCountry)
        {
          //alert(stateServed.name+"state pushed for the first time")
          this.states.push(stateServed);
        }
        
      }
    }
  }

  getPort()
  {
    //this.ports=PORTS.filter(prt=>prt.stateDetails.name==this.chosenState);
    this.ports=[];
    for(let map of this.currentPortMapping.ports)
    {
      var portServed=map;
      var isPortPresent=this.ports.find(c=>c==portServed)
      console.log("isPortPresent",isPortPresent)
      if(isPortPresent==undefined || isPortPresent==null)
      {
        if(portServed.stateDetails.name==this.chosenState)
        {
          //alert(portServed.name+" pushed for the first time")
          this.ports.push(portServed);
        }
        
      }
    }
  }

  updateChosenPorts()
  {
    if(!this.chosenPorts.find(prt=>prt==this.selectedPort))
      this.chosenPorts.push(this.selectedPort)
    //console.log("this.chosenPorts",this.chosenPorts)
  }

  openCheckout()
  {
      var amt=THIRD_PARTY_AD_POSITIONS.find(pos=>pos.position==this.chosenPosition).price*100;

      /* if(this.featured==1)
      {
        amt=70000
      }
      else if(this.featured==2)
      {
        amt=250000
      } */

      var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Promotional Ad Payment',
      //description: 'Annual subscription',
      amount: amt
    });
  }

  postAd()
  {
    //alert("this.chosenPositionID: "+(this.chosenPosition))
    if(!this.chosenPosition)
    {
      swal({
        title: 'Position Not Chosen!',
        text: 'Please Choose an Ad Position',
        type: 'error',
        confirmButtonText: 'Ok!!'
      })
      return;
    }

    this.openCheckout();
    
    var id;
    if(THIRD_PARTY_ADS.length>0)
    {
      id=THIRD_PARTY_ADS[THIRD_PARTY_ADS.length-1].id+1;
    }
    else
    {
      id=1;
    }

    var ad={id:id, url:this.adUrl, adTitle:this.adTitle, adDetails:this.adDetails, location: this.chosenPorts,
      postedById:this.currentFirm.id, postedByName:this.currentFirm.name, position:this.chosenPosition}

    THIRD_PARTY_ADS.push(ad)
    console.log(THIRD_PARTY_ADS)

    swal({
      title: 'Posted!',
      text: 'Ad Posted Successfully',
      type: 'success',
      confirmButtonText: 'Ok!!'
    }).then((result)=>{
      this.router.navigate(['/logistics/dashboard']);
      })
  }

}

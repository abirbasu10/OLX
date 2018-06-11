import { Component, OnInit } from '@angular/core';
import { LogisticFirmList,Port, State, Country, LogisticsPortMapping  } from '../../classDefinition';
import { DefaultLogisticFirm, PORTS, STATES, COUNTRIES, LOGISTICS_PORT_MAPPING } from '../../application_mock_Data';

import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare const $;

@Component({
  selector: 'app-logistics-profile-completion',
  templateUrl: './logistics-profile-completion.component.html',
  styleUrls: ['./logistics-profile-completion.component.css']
})
export class LogisticsProfileCompletionComponent implements OnInit {

  currentFirm:LogisticFirmList;

  countries:Country[]=[];
  chosenCountry:string;
  states:State[]=[];
  chosenState:string;
  ports:Port[]=[];
  chosenPorts:string[]=[];
  selectedPort:string;

  currentPortMapping:LogisticsPortMapping;

  constructor() { }

  ngOnInit() {
    this.currentFirm=DefaultLogisticFirm;
    this.countries=COUNTRIES;
    this.currentPortMapping=LOGISTICS_PORT_MAPPING.find(mapping=>mapping.logisticsId==this.currentFirm.id);
    console.log("this.currentPortMapping on ngOnInit",this.currentPortMapping)
  }

  getState()
  {
    this.states=STATES.filter(st=>st.countryDetails.name==this.chosenCountry);
  }

  getPort()
  {
    this.ports=PORTS.filter(prt=>prt.stateDetails.name==this.chosenState);
  }

  updateChosenPorts()
  {
    if(!this.chosenPorts.find(prt=>prt==this.selectedPort))
    {
      this.chosenPorts.push(this.selectedPort) /* show ports chosen in view */
      var port=PORTS.find(p=>p.name==this.selectedPort)

      //var isPortPresent=this.currentPortMapping.ports.find(p=>p==port)
      //console.log("isPortPresent",isPortPresent)
      console.log("this.currentPortMapping",this.currentPortMapping)

      /* check if there is any mapping for current logistic firm */
      if(this.currentPortMapping!=undefined || this.currentPortMapping!=null)
      {
        /* check if the port is already mapped with the firm */
        var isPortPresent=this.currentPortMapping.ports.find(p=>p==port)
        if(!isPortPresent)
        {
          this.currentPortMapping.ports.push(port)
        }
        console.log("this.currentPortMapping after adding",this.currentPortMapping)
        console.log("LOGISTICS_PORT_MAPPING after adding",LOGISTICS_PORT_MAPPING)
      }
      else
      {
        
        var logistigMapping=LOGISTICS_PORT_MAPPING.find(mapping=>mapping.logisticsId==this.currentFirm.id)
        /* check if there is any mapping for the current firm in mock data. this will be necessary in a case
        when there is a mapping data but the ports array is empty*/
        if(!logistigMapping)
        {
          /* if there is no mapping in mock data then push in mock data */
          var id
          if(LOGISTICS_PORT_MAPPING.length>0)
          {
            id=LOGISTICS_PORT_MAPPING[LOGISTICS_PORT_MAPPING.length-1].id+1
          }
          else
          {
            id=1;
          }

          var portToMap=[];
          portToMap.push(port);

          LOGISTICS_PORT_MAPPING.push({id:id,logisticsId:this.currentFirm.id, logisticsName:this.currentFirm.name,
          ports:portToMap})

          
        }
        else
        {
          /* if local object is null becoz all added ports are deleted but mapping exisits in mock data
          then add the port in the existing mapping data */
          logistigMapping.ports.push(port)
        }

        console.log("LOGISTICS_PORT_MAPPING after adding",LOGISTICS_PORT_MAPPING)

        /* set local object to the current data pushed in mock data */
        this.currentPortMapping=LOGISTICS_PORT_MAPPING.find(mapping=>mapping.logisticsId==this.currentFirm.id)
      }
    }
    console.log("this.chosenPorts",this.chosenPorts)
    
  }

  removePort(delPort)
  {
    console.log("delPort",delPort)
    this.chosenPorts=this.chosenPorts.filter(prt=>prt!=delPort)

    var port=PORTS.find(p=>p.name==delPort)
    
    //var isPortPresent=this.currentPortMapping.ports.find(p=>p==port)
    //console.log("isPortPresent",isPortPresent)
    /* if(isPortPresent)
    { */
      this.currentPortMapping.ports=this.currentPortMapping.ports.filter(prt=>prt.id!=delPort.id)
      if(this.currentPortMapping.ports.length==0)
      {
        /* if all ports are deleted then make current local object null */
        this.currentPortMapping=null;/* {id:null,logisticsId:null,logisticsName:null,ports:[]} */
      }
    //}
    console.log("this.currentPortMapping after deleting",this.currentPortMapping.ports)
    console.log("LOGISTICS_PORT_MAPPING after deleting",LOGISTICS_PORT_MAPPING)
  }

}

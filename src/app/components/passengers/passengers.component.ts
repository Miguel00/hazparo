import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Injectable } from '@angular/core';
//import { Hero }    from './hero';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { NgbdDatepickerBasic } from '../../datepicker-basic';
import { forEach } from '@angular/router/src/utils/collection';

//const now = new Date();

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent {
  constructor(private http:HttpClient ){

  }

 //cityName={};
 selectedData;
 fechas = ['Lunes','Martes','Miercoles','Juevez','Viernes'];
 horas = ['equis','Matutino','Vespertino','Quebrado'];
 genders = ['equis','Macho opresor', 'Feminazi'];
 destinos = ['equis','Pa la Uni', 'Pa mi Canton'];
 res = [];
 resId = 0;
 ids = [];
 model2 = this.horas[0];
 model = this.fechas[0];
 model3= this.genders[0];
 model4 = this.destinos[0];

 rutafiltro = {
   "Fecha":"",
   "Horario": "",
   "Genero":"",
   "Destino": ""
 }
 
 //lolazo='';
 bullshit = {
   "Fecha":"",
   "Horario":"",
   "Genero":"",
   "Destino":""
 }
 


busquedaPirata(){
  /*
  this.http.get('http://localhost:3004/rutas')
  //this.http.get('http://localhost:3004/pets')
  //this.http.get('api.openweathermap.org/data/2.5/forecast?APPID=20ddea961cabe84819fc9c2c6d040e12&id=524901'+this.cityName+this.model)
  .subscribe(//res => res
  (res: Response)=> {
  //const weatherCity = res.json;
  this.res=res;
  console.log(res);
  //this.cityName = res;
  //this.Citybullshit = weatherCity;
  
  }
  )
  */
  this.bullshit.Fecha = this.model;
  this.bullshit.Horario = this.model2;
  this.bullshit.Genero = this.model3;
  this.bullshit.Destino = this.model4;
  this.rutafiltro.Destino= this.model4;
  if(this.bullshit.Horario == "Matutino"){
    this.rutafiltro.Horario="M";
  }else if (this.bullshit.Horario=="Vespertino"){
    this.rutafiltro.Horario="V";
  }else if(this.bullshit.Horario=="Quebrado"){
    this.rutafiltro.Horario="Q"
  }else{
    this.rutafiltro.Horario="X";
  }

  if(this.bullshit.Genero == "Macho opresor"){
    this.rutafiltro.Genero="H";
  }else if (this.bullshit.Genero=="Feminazi"){
    this.rutafiltro.Genero="M";
  }else{
    this.rutafiltro.Genero="I";
  }

  if(this.bullshit.Fecha == "Lunes"){
    this.rutafiltro.Fecha="lunes";
  }else if (this.bullshit.Fecha=="Martes"){
    this.rutafiltro.Fecha="martes";
  }else if(this.bullshit.Fecha=="Miercoles"){
    this.rutafiltro.Fecha="miercoles"
  }else if(this.bullshit.Fecha=="Juevez"){
    this.rutafiltro.Fecha="juevez"
  }else if(this.bullshit.Fecha=="Viernes"){
    this.rutafiltro.Fecha="viernes"
  }else{
    this.rutafiltro.Fecha="X";
  }
  const url = ""
  this.http.get('http://ec2-13-58-37-36.us-east-2.compute.amazonaws.com:3000/api/usuariosdets/listrutas?'+'generoc='+this.rutafiltro.Genero+'&turno='+this.rutafiltro.Horario+'&fechaViaje='+this.rutafiltro.Fecha+'&destino='+this.rutafiltro.Destino)
  .subscribe(
  (res: Response)=> {
    console.log(res);
    for (var i in res) {
      this.res = res[i]
      
    }
    for (var i in this.res){
      this.resId= this.res[i].id;
    }
  }
  )

  }
  onSelect(val): void {
    this.resId = val;
  }
  agregarPirata(){
    

  }
}

import { Component, OnInit } from '@angular/core';
import {JsonDataService } from '../json-data.service';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import { ModalPage} from '../modal/modal.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
animeData: any;
constructor(public json: JsonDataService, private nav: NavController, private router: Router,private modalController:ModalController)
 {

    
 }
 
 ngOnInit()
 {
    this.LoadData();
 }

 LoadData()
 {
   this.json.getJsonData();
  
 }

 getAnimeDetails($event,animeData)
 {
   
   this.animeData = animeData;
   this.openModal();
  
 }

 async openModal()
 {
   const modal = await this.modalController.create({
     component: ModalPage,
     componentProps: {
       custom_animeData: this.animeData,
     }
   });
   modal.present();
 }
}

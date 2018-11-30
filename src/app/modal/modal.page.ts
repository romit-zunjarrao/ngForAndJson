import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
 animeData= null;
 animeName= null;
 animeImage= null;
 animeDescription = null;
  constructor(private navParams: NavParams, private modalController:ModalController) { }

  ngOnInit() {
    this.animeData =  this.navParams.get('custom_animeData');
    console.log(this.animeData);
    this.animeName = this.animeData.name;
    this.animeImage = this.animeData.img;
    this.animeDescription = this.animeData.description;
   
  }

 closeModal()
 {
   this.modalController.dismiss();
 }
}

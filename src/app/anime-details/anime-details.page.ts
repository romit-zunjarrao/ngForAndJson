import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.page.html',
  styleUrls: ['./anime-details.page.scss'],
})
export class AnimeDetailsPage implements OnInit {
  animeData:any;
  img:any;
  constructor(private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    //this.animeData =  this.activatedRoute.snapshot.paramMap.getAll('animeData');
    //this.animeData =  this.activatedRoute.queryParamMap.has('animeData');
    console.log(this.animeData);
  }

}

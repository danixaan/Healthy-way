import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.page.html',
  styleUrls: ['./alimentacion.page.scss'],
  
})
export class AlimentacionPage implements OnInit {

  data: any;

  food: any;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private api: ServiceRestService, private toastController: ToastController){ }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.getFoodlist();
  }


  //-----getfood-----//

  getFoodlist(){
    this.api.getFoodList().subscribe((data) =>{
      console.log(data);
      this.food = data;
    });
  }


}

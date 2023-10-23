import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';
import { ToastController, ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.page.html',
  styleUrls: ['./edit-food.page.scss'],
})
export class EditFoodPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router, private api: ServiceRestService, private toastController: ToastController){ }
  food: any;
  foods: any={
    id: null,
    nombre: "",
    ingredientes: "",
    calorias: "",
  }

  getIdFromUrl(){
    let url = this.router.url;
    let arr = url.split('/',3);
    let id = parseInt(arr[2])
    return id;
  }

  ngOnInit() {

    
  }


  updateFod(){
    this.api.updateFod(this.foods.id, this.foods).subscribe({
      next: (() =>{
        console.log("Actualizado correctamente: "+this.foods);
        this.getFoodlist();
        this.presentToast({
          message: 'Datos del food actualizados, redirigiendo al Home',
          duration: 3500,
          position: 'middle',
          icon: 'alert-circle-outline'
        });
        this.router.navigateByUrl('home');
      }),
      error: (error => {
        console.log("Error "+ error)
      })
    })
  }


  //----------id-----------//
  getFodId(id: any){
    this.api.getFodId(id).subscribe((data) => {
      console.log(data);
      this.foods = data
    })
  }

  //-----getfood-----//

  getFoodlist(){
    this.api.getFoodList().subscribe((data) =>{
      console.log(data);
      this.food = data;
    });
  }



    
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }
}

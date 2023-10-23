import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';
import { ToastController, ToastOptions } from '@ionic/angular';


@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.page.html',
  styleUrls: ['./alimentacion.page.scss'],
  
})
export class AlimentacionPage implements OnInit {

  data: any;

  food: any;

  foods: any={
    id: null,
    nombre: "",
    ingredientes: "",
    calorias: "",
  }

  constructor(private activateRoute: ActivatedRoute, private router: Router, private api: ServiceRestService, private toastController: ToastController){ }

  ngOnInit() {
  }

  limpiar(){
    this.foods.nombre="";
    this.foods.ingredientes="";
    this.foods.calorias="";
  }

  ionViewWillEnter() {
    this.getFoodlist();
    this.limpiar();
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
//=====AGREGAR Food======//

   addFod(){
    if (this.foods.nombre == "" || this.foods.ingredientes == "" || this.foods.calorias == "" ) {
      this.presentToast({
        message: ' Error al registrar Receta, debe llenar los campos ',
        duration: 3000,
        position: 'middle',
        icon: 'alert-circle-outline'
      });
      return;
    }else{
      this.api.addFod(this.foods).subscribe({
        next: (() => {
          console.log("Receta creada: "+ this.foods)
          this.presentToast({
            message: ' Receta creado ',
            duration: 3000,
            position: 'middle',
            icon: 'alert-circle-outline'
          });
          this.getFoodlist();
          this.limpiar();
        })
      })
    }
  }

  //------- eliminar-----//
  deleteFod(id: any){
    this.api.deleteFod(id).subscribe({
      next: (() => {
        this.presentToast({
          message: 'Receta eliminada',
          duration: 3500,
          position: 'middle',
          icon: 'alert-circle-outline'
        });
        console.log("Receta eliminada");
        this.getFoodlist();
      }),
      error: (error => {
        console.log("Error"+ error)
      })
    })
  }


  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }
}
import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
//import {DISHES} from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes!: Dish[] ;
  selectedDish!: Dish;
  baseurl!:URL;
  constructor(private dishService: DishService,
    @Inject('BaseURL') private baseURL:URL) { this.baseurl = this.baseURL;}

  ngOnInit(): void {
    /*  this.dishService.getDishes()
      .then((dishes) =>  this.dishes = dishes); */
      this.dishService.getDishes()
      .subscribe((dishes) =>  this.dishes = dishes);
      
  }

  onSelect(dish:Dish){
    this.selectedDish=dish;
  }
}

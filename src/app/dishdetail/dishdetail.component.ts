import { Component, Input, OnInit, ViewChild, Inject } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {
   /** @Input()*/ 
  // event !: any;
  
   slidervalue!: number;
   form !:FormGroup;
    dish !: Dish;
    dishIds!: string [];
    next!: string;
    previous!:string;
    baseurl!:URL;
    errMess!:string;
    dishcopy!:Dish;
    @ViewChild("fform") feedbackFormDirective !:NgForm ;

    formErrors : any ={
      "name" : "",
      "comment":""
    }
    validationMessages:any ={
      "name":{
        "required":"Name is required",
        "minlength":"Name must be at least 2 characters long ",
        "maxlength":"Name cannot be more than 25 characters long"
      },
      "comment":{
        "required":"Comment is required"
      }
    }
    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location, private fb:FormBuilder,
      @Inject('BaseURL') private baseURL:any) { this.createForm();this.baseurl= this.baseURL}  
    
   ngOnInit() {
    /* const id = this.route.snapshot.params['id']; */
  
   /*  this.dishservice.getDish(id)
    .then((dish) =>this.dish =  dish); */
/*     this.dishservice.getDish(id)
    .subscribe((dish) =>this.dish =  dish); */
   

    this.dishservice.getDishIds()
              .subscribe((dishIds) => this.dishIds= dishIds);

    this.route.params.pipe(
      switchMap(
        (params: Params) => this.dishservice.getDish(params['id'])
                )
        
                            ).subscribe((dish) =>{this.dish =  dish;this.dishcopy=dish; this.setPrevNext(dish.id);}
                            , errmess => this.errMess = <any>errmess );  
  }
  setPrevNext(dishId:string){
      const index = this.dishIds.indexOf(dishId);
      this.previous = this.dishIds[(this.dishIds.length + index -1 ) % this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index +1 ) % this.dishIds.length];
     }
  goBack(): void {
    this.location.back();
  }
  createForm():void{
    this.form = this.fb.group({
      name:["", [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      comment:["",[Validators.required]]
    });
    this.form.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?:any){
    if(!this.form){return;}
    
    for(let field in this.formErrors) {
      if(this.formErrors.hasOwnProperty(field)){
        const control = this.form.get(field); // getting the control
        this.formErrors[field]=""; //resetting errors
       if(control && control.dirty && !control.valid){ // verifying the state of the control
         const messages = this.validationMessages[field]; // retreiving the error message
          for(const key in control.errors){
           // if(control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] +"";
          // }
          }
        }

      }
    }
  }
  sliderValue(event:any){
    this.slidervalue = +event.value;
  }
  onSubmit(){
    

   let slider_value = this.form.get("slider")?.value;
   if(slider_value == null){
        slider_value = 5; // default high rating is 5 stars
      }
    this.dishcopy.comments.push({
     
      rating: slider_value,
      // rating : this.form.get("slider"?.value),
      comment: this.form.get("comment")?.value,
     // author : this.form.get("name")?.value,
     author : this.form.get("name")?.value,
      date : ""+new Date().getDate()
        })
        
       /* another way to implement it, but slider doesn't return the default value 
    let form = this.form.value;
    
    this.dish.comments.push({rating: form.slider, comment: form.comment, author: form.name, date: Date()})
      */

    this.dishservice.putDish(this.dishcopy).subscribe(
      dish => {
        this.dish = dish;
        this.dishcopy = dish;
      },
      errmess => {   this.errMess = <any> errmess;})
    // reset form
    this.form.reset({
      name:"",
      comment:""
    });
    this.feedbackFormDirective.resetForm();
  }
  
}
    
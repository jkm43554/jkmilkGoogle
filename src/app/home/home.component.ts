import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  focused = false;
  random:number | undefined;
  feelings=[
    "I'm Feeling Lucky",
    "I'm Feeling Doodly",
    "I'm Feeling Playful",
    "I'm Feeling Artistic",
    "I'm Feeling Hungry",
    "I'm Feeling Puzzled",
    "I'm Feeling Trendy",
    "I'm Feeling Stellar",
    "I'm Feeling Wonderful"
  ]

    constructor(){ }
     ngOnInit(): void{

     }
     onMouseEnter(){
      this.random=Math.floor(Math.random() * this.feelings.length + 1 );
      switch(this.random){
        case 1:
          this.random=0;
          break;
        case 2:
          this.random=-1.99;
          break;
        case 3:
          this.random=-3.99;
          break;
        case 4:
          this.random=-5.99;
          break;
        case 5:
          this.random=-7.99;
          break;
        case 6:
          this.random=-9.99;
          break;
        case 7:
          this.random=-11.99;
          break;
        case 8:
          this.random=-13.99;
          break;
        case 9:
          this.random=-15.99;
          break;
        
      }
     }
     onMouseOut(){}
    
}
document.body.style.backgroundColor = "#4218D9"









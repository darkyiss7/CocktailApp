import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from '../classes/cocktail';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail!: Cocktail;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  open(id:any):void{
    this.router.navigate(['/cocktail/', id]);
  }
  open2(name:any):void{
    this.router.navigate(['/ingredient/', name]);
  }

}

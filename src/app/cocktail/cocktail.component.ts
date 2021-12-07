import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../classes/cocktail';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail!: Cocktail;
  constructor() { }

  ngOnInit(): void {
  }

}

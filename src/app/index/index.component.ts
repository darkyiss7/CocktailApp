import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cocktail } from '../classes/cocktail';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit,OnDestroy{

  cocktails!: Array<Cocktail>;
  subscription! : Subscription;
  public letter:string='A';
  constructor(private dataService: DataService,private route: ActivatedRoute,private router: Router) {this.route.params.subscribe( params => console.log(params) );}

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.letter = paramsId.letter;
      console.log(this.letter);
    });
    this.subscription = this.dataService.searchCocktails(this.letter).subscribe(

      (data: any) =>
          {
            console.log(data);
              this.cocktails = data;
          }

  );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  open(letter:string):void{
    this.router.navigate(['/index/', letter]);
                }

}

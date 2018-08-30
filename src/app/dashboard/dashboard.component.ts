import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  opponents: Hero[] = [];
 
  constructor(private heroService: HeroService) { }
  
  getOpponents(): void {
    this.opponents = [];
    
    // divide heroes into team "Marvel" and team "DC"
    const teamMarvel = this.heroes.filter(hero => hero.isMarvel);
    const chosenMarvelHero = Math.floor(Math.random() * (teamMarvel.length));
    this.opponents.push(teamMarvel[chosenMarvelHero]);
    const teamDC = this.heroes.filter(hero => !hero.isMarvel);
    const chosenDcHero = Math.floor(Math.random() * (teamDC.length));
    this.opponents.push(teamDC[chosenDcHero]);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.getOpponents();
      });
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  onNewMatch(): void {
    this.getOpponents();
  }
}
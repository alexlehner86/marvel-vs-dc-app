import { Component, OnInit, Input } from '@angular/core';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  @Input() heroes: Hero[];
  hero: Hero;

  constructor(private heroService: HeroService,
              public messageService: MessageService) { }

  ngOnInit(): void {
    this.hero = {
      name: '', 
      isMarvel: true,
      imgUrl: ''
    } as Hero;
  }

  addHero(): void {
    this.hero.name = this.hero.name.trim();
    this.hero.imgUrl = "url('" + this.hero.imgUrl.trim() + "')";
    if (!this.hero.name) { return; }
    this.heroService.addHero(this.hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.messageService.hideAddHeroOverlay();
      });
  }
}

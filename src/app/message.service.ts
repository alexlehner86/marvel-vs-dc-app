import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  showAddHero: boolean = false;
 
  add(message: string) {
    this.messages.push(message);
  }
 
  clear() {
    this.messages = [];
  }

  showAddHeroOverlay() {
    this.showAddHero = true;
  }

  hideAddHeroOverlay() {
    this.showAddHero = false;
  }
}

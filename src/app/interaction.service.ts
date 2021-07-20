import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 public user = {
   firstName: 'Ivan',
   lastName: 'Ivanov'
 }
  constructor() { }
}

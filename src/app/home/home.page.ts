import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonSelect, IonItem, IonSelectOption, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonText, IonButton, IonImg, IonRow } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {CirculoComponent} from '../circulo/circulo.component'
import {TrianguloComponent} from'../triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonSelect, IonItem, IonSelectOption, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, FormsModule, ReactiveFormsModule, NgIf, IonInput, IonText, IonRow, IonButton, IonImg, CirculoComponent, TrianguloComponent],
})
export class HomePage {
  FiguraGeometrica: any;
  cardId: string = "";
  mensaje: string = "";

  fnseleccion() {
    this.cardId = this.FiguraGeometrica
    console.log(this.FiguraGeometrica)
  }
  constructor() { }
}


import { Component, OnInit } from '@angular/core';
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonText, IonRow, IonButton, IonImg} from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';
import {Circulo} from '../modelo/FiguraGeometrica'

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonText, IonRow, IonButton, IonImg, NgIf],
})
export class CirculoComponent  implements OnInit {
  FiguraGeometrica: any;
  cardId: string = "";
  mensaje: string = "";

fnCirculo(radio: IonInput) {
  const circulo = new Circulo("circulo", Number(radio.value))
  this.mensaje = "El perimetro del circulo es " + circulo.calcularPerimetro().toFixed(2);
}

  constructor() { }

  ngOnInit() {}
}

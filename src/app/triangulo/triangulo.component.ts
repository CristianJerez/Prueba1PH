import { Component, OnInit } from '@angular/core';
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonText, IonRow, IonButton, IonImg} from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';
import {TrianguloEquilatero,TrianguloEscaleno} from '../modelo/FiguraGeometrica'


@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonText, IonRow, IonButton, IonImg, NgIf],
})
export class TrianguloComponent  implements OnInit {
  FiguraGeometrica: any;
  cardId: string = "";
  mensaje: string = "";

  fnTriangulo(ladoA: IonInput, ladoB: IonInput, ladoC: IonInput) {
    if (ladoA.value == ladoB.value && ladoA.value == ladoC.value) {
      const trianguloEqu = new TrianguloEquilatero("trianguloEquilatero", Number(ladoA.value))
      this.mensaje = "El perimetro del triangulo equilatero es " + trianguloEqu.calcularPerimetroEquilatero();
    }
    else {
      const trianguloEsc = new TrianguloEscaleno("trianguloEscaleno", Number(ladoA.value), Number(ladoB.value), Number(ladoC.value))
      this.mensaje = "El perimetro del triangulo escaleno es " + trianguloEsc.calcularPerimetro();
    }}
  constructor() { }

  ngOnInit() {}


  }


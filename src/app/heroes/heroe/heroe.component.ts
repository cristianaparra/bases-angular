import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'

})
export class HeroComponent {
  nombre: string = 'Ironman'
  edad: number = 45

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.edad} - ${this.nombre}`
  }
}

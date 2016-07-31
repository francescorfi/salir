import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

@Component({
  selector: 'salir',
  templateUrl: 'salir/templates/salir.html',
  styleUrls: ['salir/styles/salir.css']
})
export class Salir implements OnInit {
  title: string = `Salir app`;
  name: string = `yo, I'm your component :D`;
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Heroe } from '../../interfaz/heroe';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  public heroes: Heroe[];
  public termino: any;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit() {
    // la linea comentada solo sirve si se pasa un parametro y ya, pero si se llama a la misma url entonces falla, por ello es mejor la que se dejo
    // this.termino = this.activatedRoute.snapshot.paramMap.get('termino');
    this.activatedRoute.params.subscribe(parametros => {
      this.termino = parametros['termino'];
      this.heroes = this.heroesService.buscarHeroes( this.termino );
    });
  }
}

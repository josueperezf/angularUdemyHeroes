import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private heroesService: HeroesService) { }

  ngOnInit() {
  }
  buscar(termino: string) {
    if (termino.trim().length > 0) {
      this.router.navigate(['/resultado', termino.trim().toUpperCase()]);
        // this.heroesService.buscarHeroes(termino.trim().toUpperCase());
        // console.log(this.heroesService.buscarHeroes(termino.trim().toUpperCase()));
    }
    return false;
  }
}

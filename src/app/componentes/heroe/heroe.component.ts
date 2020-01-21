import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaz/heroe';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
    public heroe: Heroe;
    public id:number;
    constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService) {
    }
    ngOnInit(){
        this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.heroe = this.heroesService.getHeroe(this.id);
    }
}

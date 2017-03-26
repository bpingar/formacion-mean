import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';
 
@Component({
    selector: 'favorito-add',
    templateUrl: 'app/views/favorito-add.html'
})
 
export class FavoritoAddComponent implements OnInit{ 
    public titleSection: string;
    public favorito: Favorito;

    constructor(){
        this.titleSection="Crear favorito";
    }

    ngOnInit(){
        this.favorito = new Favorito("","","");
        console.log(this.favorito);
    }

    public onSubmit(){
        console.log(this.favorito);
    }
}

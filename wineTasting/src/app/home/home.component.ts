import { Component, OnInit } from '@angular/core';
import {
    Rating,
    Wine,
    ruffino,
    riserva,
    verrazzano,
    terrilogio,
    chianti,
    gallo
} from '../data/data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public allWines: Wine[] = [
        ruffino,
        riserva,
        verrazzano,
        terrilogio,
        chianti,
        gallo
    ];

    public selectedTaster = '';

    constructor() {}

    ngOnInit() {}

    // Difference between each wine average and your score
    public scoreDifference(wine: Wine) {
        const avg: number =
            wine.rating.reduce(
                (total: number, score: Rating) => total + score.rating
            ) / wine.rating.length;

        const tasterScore: number = wine.rating.find((score: Rating) => {
            score.name === this.selectedTaster;
        }).rating;

        return avg - tasterScore;
    }

    // Who scored wine closest to you? Furthest?
}

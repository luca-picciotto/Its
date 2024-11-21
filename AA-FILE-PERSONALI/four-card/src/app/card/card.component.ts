import { Component } from "@angular/core";

@Component({
    selector: "card",
    standalone: true,
    imports: [],
    templateUrl: "./card.component.html",
    styleUrl: "./card.component.css"
})

export class Card {
    title: string = "Kangaroo Valley Safari";
    description: string = "Located  Highlands of New South Wales";
    urlShare: string = "#/";
    urlExplore: string = "#/";
}
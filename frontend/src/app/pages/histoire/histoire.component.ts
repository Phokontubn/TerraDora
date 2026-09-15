import { Component } from '@angular/core';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-histoire',
  imports: [],
  templateUrl: './histoire.component.html',
  styleUrl: './histoire.component.scss'
})
export class HistoireComponent {

  events: TimelineEvent[] = [
    {
      year: '20XX',
      title: 'La naissance du projet',
      description:
        'Terra Dora commence à imaginer un projet d’habitat participatif fondé sur le partage et la solidarité.'
    },
    {
      year: '20XX',
      title: 'Les premières rencontres',
      description:
        'Le collectif se construit et les premières réflexions autour du projet prennent forme.'
    },
    {
      year: '20XX',
      title: 'Le projet prend forme',
      description:
        'Le groupe avance ensemble et précise progressivement sa vision de l’habitat et de la vie collective.'
    },
    {
      year: '20XX',
      title: 'Aujourd’hui',
      description:
        'Terra Dora continue de faire vivre son projet et souhaite partager ses aspirations avec le quartier.'
    }
  ];
}
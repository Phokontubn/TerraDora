import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-histoire',
  imports: [],
  templateUrl: './histoire.component.html',
  styleUrl: './histoire.component.scss'
})
export class HistoireComponent implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}


  ngAfterViewInit(): void {

    // IntersectionObserver n'existe que dans le navigateur
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const memories =
      this.elementRef.nativeElement
        .querySelectorAll<HTMLElement>('.memory');


    this.observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }

        });

      },
      {
        threshold: 0.25
      }
    );


    memories.forEach(memory => {
      this.observer?.observe(memory);
    });
  }


  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
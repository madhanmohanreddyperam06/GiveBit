import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('statsSection') statsSection!: ElementRef;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.initScrollAnimations();
    this.initCounterAnimation();
  }

  private initScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = this.el.nativeElement.querySelectorAll('.feature-card, .step-item, .testimonial-card, .partner-logo, .stat-item');
    sections.forEach((section: HTMLElement) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });
  }

  private initCounterAnimation(): void {
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const statsSection = this.el.nativeElement.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  private animateCounters(): void {
    const counters = this.el.nativeElement.querySelectorAll('.stat-number[data-count]');
    counters.forEach((counter: HTMLElement) => {
      const target = parseInt(counter.getAttribute('data-count') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          if (counter.textContent?.includes('$')) {
            counter.textContent = '$' + Math.floor(current).toLocaleString();
          } else {
            counter.textContent = Math.floor(current).toLocaleString() + '+';
          }
          requestAnimationFrame(updateCounter);
        } else {
          if (counter.textContent?.includes('$')) {
            counter.textContent = '$' + target.toLocaleString();
          } else {
            counter.textContent = target.toLocaleString() + '+';
          }
        }
      };

      updateCounter();
    });
  }
}

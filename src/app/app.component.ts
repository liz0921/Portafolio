import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title="Lizbeth Montero"; 
  public fixedHeader: boolean = false;
  constructor(private titleService: Title){}
  
  ngOnInit() {
    this.titleService.setTitle('Lizbeth Montero');
   
  }

}

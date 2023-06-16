import { Component, OnInit, Input } from '@angular/core';;

@Component({
  selector: 'footer-component',
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Input() isMenuOpened: boolean = false;
  constructor ()  {
    
  }

  ngOnInit() : void {

  }


}

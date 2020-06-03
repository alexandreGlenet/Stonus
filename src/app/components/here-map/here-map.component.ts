import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var L: any;

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {

  @ViewChild("map") // #mapréférence du HTML
  public mapElement: ElementRef; //la stockons dans une mapElementvariable basée sur le ViewChild. Chacune des @Inputvariables représentera des valeurs potentielles provenant de l'utilisateur en tant qu'attributs de balise.

  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  public constructor() { }

  public ngOnInit() { }

  public ngAfterViewInit() {
    const map = L.map(this.mapElement.nativeElement, {
      center: [this.lat, this.lng],
      zoom: 10,
      layers: [L.tileLayer("https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?app_id=" + this.appId + "&app_code=" + this.appCode + "&ppi=320")],
      zoomControl: true
    });
    setTimeout(() => {
      map.invalidateSize();
    }, 1000);
  }

}

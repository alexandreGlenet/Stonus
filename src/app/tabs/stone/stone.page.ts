import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";
import { antPath } from "leaflet-ant-path";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

@Component({
	selector: "app-stone",
	templateUrl: "./stone.page.html",
	styleUrls: ["./stone.page.scss"],
})
export class StonePage implements OnInit {
	map: L.Map;
	newMarker: any;
	address: string[];

	smallIcon = new L.Icon({
		iconUrl:
			"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
		iconRetinaUrl:
			"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowUrl:
			"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
		shadowSize: [41, 41],
	});

	mainLayer = L.tileLayer(
		//http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png
		"http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png",
		{
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			//maxZoom: 16,
			tileSize: 512,
			zoomOffset: -1,
		}
	);

	constructor() {}

	ngOnInit() {}

	loadMap() {
		this.map = new L.Map("mapId").setView([50.64, 5.576], 16); // fitworld fait buguer donc j'assigne une coordonnée au chargmenet ici l'univ de liege
		this.mainLayer.addTo(this.map);
		//this.map.on("locationfound", this.onLocationFound);
	}

	locatePosition() {
		this.map
			.locate({
				setView: true,
				//minZoom: 6,
				//maxZoom: 18,
				//watch: true,
				enableHighAccuracy: true,
			})
			.on("locationfound", (e: any) => {
				this.newMarker = L.marker([e.latitude, e.longitude], {
					draggable: false,
				}).addTo(this.map);
				this.newMarker.bindPopup("You are located here!").openPopup();

				this.newMarker.on("dragend", () => {
					const position = this.newMarker.getLatLng();
				});
			});
	}

	// locate() {
	// 	this.map.locate({
	// 		setView: true,
	// 		maxZoom: 6,
	// 		watch: true,
	// 		enableHighAccuracy: true,
	// 	});
	// }

	// onLocationFound(e) {
	// 	var radius = e.accuracy;

	// 	L.marker(e.latlng)
	// 		.addTo(this.map)
	// 		.bindPopup("You are within " + " meters from this point")
	// 		.openPopup();

	// 	L.circle(e.latlng).addTo(this.map);
	// }

	// onLocationError(e) {
	//   alert(e.message);
	// }

	ionViewDidEnter() {
		this.loadMap();

		// raccourci très pratique pour zoomer la vue de la carte à l'emplacement détecté
		this.locatePosition();

		//this.map.on("locationerror", this.onLocationError);

		//console.log(this.locate)
		//this.map.setView([0,0],0);
	}

	ionViewWillLeave() {
		this.map.remove();
	}
}

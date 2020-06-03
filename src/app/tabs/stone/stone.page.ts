import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { ApiService } from "src/app/services/api.service";
import { LoadingController } from "@ionic/angular";

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
	//Map
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
		//https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png
		"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		{
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			//maxZoom: 16,
			tileSize: 512,
			zoomOffset: -1,
		}
	);

	//Stones-list
	page = 1;
	stones = [];
	totalPages = 0;
	totalStones = 0;

	//Segment
	segmentModel = "map";

	constructor(
		private api: ApiService,
		private loadingCtrl: LoadingController
	) {}

	ngOnInit() {
		this.loadStones();
	}

	async loadStones() {
		let loading = await this.loadingCtrl.create({
			message: "Loading Stones",
		});

		await loading.present();

		this.api.getStones(this.page).subscribe(
			(res) => {
				console.log("res: ", res);

				this.stones = res.stones;
				this.totalPages = res.totalPages;
				this.totalStones = res.totalStones;
			},
			(err) => {
				console.log("errors :", err);
			},
			() => {
				loading.dismiss();
			}
		);
	}

	loadMap() {
		this.map = new L.Map("mapId2").setView([50.64, 5.576], 16); // fitworld fait buguer donc j'assigne une coordonnée au chargmenet ici l'univ de liege
		//this.locatePosition();
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
				var radius = e.accuracy;
				this.newMarker = L.marker([e.latitude, e.longitude], {
					draggable: false,
				}).addTo(this.map);

				this.newMarker.bindPopup("Je suis ici !!!").openPopup();

				L.circle([e.latitude, e.longitude], radius).addTo(this.map);

				this.newMarker.on("dragend", () => {
					const position = this.newMarker.getLatLng();
				});
			});
	}

	loadLocateMap() {
		this.map = new L.Map("mapId").setView([50.64, 5.576], 16);
		this.mainLayer.addTo(this.map);
		this.locatePosition();
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

	ionViewWillEnter() {
		console.log("willEnter");
	}

	ionViewDidEnter() {
		console.log("didEnter");
		this.loadLocateMap();

		// raccourci très pratique pour zoomer la vue de la carte à l'emplacement détecté
		//this.locatePosition();

		//this.map.on("locationerror", this.onLocationError);

		//console.log(this.locate)
		//this.map.setView([0,0],0);
	}

	ionViewWillLeave(event: CustomEvent<SegmentChangeEventDetail>) {
		console.log("willleave");
		//console.log(this.map);
		if (this.map !== undefined) {
			this.map.remove();
			//console.log(this.map);
		}
	}

	onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
		//console.log(event.detail);
		if (event.detail.value === "map") {
			//this.map.remove();
			//this.loadMap();
			this.loadLocateMap();
		} else if (event.detail.value === "stones-list") {
			this.map.remove();
		}
	}
}

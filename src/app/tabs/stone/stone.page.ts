import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { ApiService } from "src/app/services/api.service";
import { LoadingController } from "@ionic/angular";

import * as L from "leaflet";
//import { antPath } from "leaflet-ant-path";
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
		"https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png",
		//http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png
		//https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png
		//"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		{
			attribution:
				'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>',
			minZoom: 4,
			maxZoom: 18,
			//tileSize: 512,
			//zoomOffset: -1,
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

	// loadMap() {
	// 	this.map = new L.Map("mapId2").setView([50.64, 5.576], 19); // fitworld fait buguer donc j'assigne une coordonnée au chargmenet ici l'univ de liege
	// 	//this.locatePosition();
	// 	this.mainLayer.addTo(this.map);
	// }

	locatePosition() {
		this.map
			.locate({
				setView: true,
				minZoom: 6,
				maxZoom: 19,
				//watch: true,
				enableHighAccuracy: true,
			})
			.on("locationfound", (e: any) => {
				var radius = e.accuracy / 2;
				this.newMarker = L.marker([e.latitude, e.longitude], {
					draggable: false,
				}).addTo(this.map);

				this.newMarker
					.bindPopup("Je suis à !!!" + radius + " metres de ce point")
					.openPopup();

				L.circle([e.latitude, e.longitude], radius).addTo(this.map);

				this.newMarker.on("dragend", () => {
					const position = this.newMarker.getLatLng();
				});
			})
			.on("locationError", (e: any) => {
				alert(e.message);
				console.log(e.message);
			});
	}

	loadLocateMap() {
		this.map = new L.Map("mapId").setView([50.64, 5.576], 16);
		this.mainLayer.addTo(this.map);
		this.locatePosition();
	}

	ionViewWillEnter() {
		console.log("willEnter-stone.page");
	}

	ionViewDidEnter() {
		console.log("didEnter-stone.page");
		this.loadLocateMap();
		console.log(this.map);
	}

	ionViewWillLeave() {
		console.log("willleave-stone.page");
		//console.log(this.map);
		if (this.map !== undefined) {
			this.map.remove();
			//this.map = null;
			//console.log(this.map);
		} else {
			//this.map.remove();
		}
	}

	// ionViewDidLeave() {
	// 	this.map.remove();
	// }

	// ION-SEGMENT (SWITCH)

	onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
		//console.log(event.detail);
	}
}

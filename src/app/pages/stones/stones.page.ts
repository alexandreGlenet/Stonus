import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-stones',
  templateUrl: './stones.page.html',
  styleUrls: ['./stones.page.scss'],
})
export class StonesPage implements OnInit {

  page = 1;
  stones = [];
  totalPages = 0;
  totalStones = 0;

  constructor(private api: ApiService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadStones();
  }

  async loadStones() {
    let loading = await this.loadingCtrl.create({
      message: 'loading Stones...'
    });
    await loading.present();

    this.api.getStones(this.page).subscribe(res => {
      console.log('res: ', res);
      this.stones = res.stones;
      this.totalPages = res.totalPages;
      this.totalStones = res.totalStones;
    });
  }

}

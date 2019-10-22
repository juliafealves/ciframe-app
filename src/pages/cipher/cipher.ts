import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MusicPage } from '../music/music';

@Component({
  selector: 'page-cipher',
  templateUrl: 'cipher.html',
})
export class CipherPage
{
  public ciphers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  /**
   * Navigation between this page and MusicPage with ciphers chooses.
   */
  public searchMusic()
  {
    if(this.ciphers.length > 0) {
      const upperCiphers = this.ciphers.map(c => c.toUpperCase());
      this.navCtrl.push(MusicPage, {ciphers: upperCiphers});
    }
  }
}

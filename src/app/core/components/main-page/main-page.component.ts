import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  
  imageSrc = [];

  constructor(
    private photoService : PhotoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this.jsonCreator()
  }

  textCreator() {
    const words = [
      "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing"
    ];

    const randomWords = [];

    for (let i = 0; i < words.length; i++) {
      const index = this.randomNumber(words.length);
      randomWords.push(words[index]);
    }

    return randomWords.join(' ');
  }

  randomNumber(max: number) {
    return Math.floor(Math.random() * (max));
  }

  jsonCreator() {
    let id = 0
    let photo

    for (let i = 0; i < 4; i++) {
      id++
      const text = this.textCreator();

      this.photoService.getPhoto(id).subscribe(res =>{
        const objectUrl = URL.createObjectURL(res);
        photo = this.sanitizer.bypassSecurityTrustUrl(objectUrl);

        this.imageSrc.push({
          id,
          photo,
          text})
      })
    }

  }

}
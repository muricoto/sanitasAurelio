import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picsum-photos',
  templateUrl: './picsum-photos.component.html',
  styleUrls: ['./picsum-photos.component.scss'],
})
export class PicsumPhotosComponent implements OnInit {

  imageSrc = [];
  page: number;
  imageFilter = ''

  constructor() { }

  ngOnInit(): void {
    this.jsonCreator()
  }

  textCreator() {
    const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing"];

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
    let url = 'https://picsum.photos/id/'

      for (let i = 1; i < 4000; i++) {
          this.imageSrc.push({
            id: i,
            photo: `${url}${i}/500/500`,
            text: this.textCreator()
          })
      }
  }
}
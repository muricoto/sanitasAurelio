import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  imageSrc = [];
  page: number;
  index = 0;
  allImages = false;
  imageFilter = ''

  constructor(
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
    this.checkSize(this.index)

    let url = 'https://picsum.photos/id/'

    if (!this.allImages) {
      for (let i = 1; i < 100; i++) {
        this.index++

          this.imageSrc.push({
            id: i,
            photo: `${url}${i}/500/500`,
            text: this.textCreator()
          })

      }
    }

  }

  checkSize(id: number) {
    //  Deberíamos poner máximo 4000, pero ponemos 1084 ya que a partir de ahí la web no tiene
    //  más imágenes generadas, para así evitar hacer llamadas sin respuesta
    if (id >= 1084) this.allImages = true
  }

}
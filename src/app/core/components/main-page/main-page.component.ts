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
  page: number;
  index = 0;
  allImages = false;

  constructor(
    private photoService: PhotoService,
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
    this.checkSize(this.index)
    let id
    let photo

    if (!this.allImages) {
      for (let i = 0; i < 100; i++) {
        id = this.index++

        const text = this.textCreator();

        this.photoService.getPhoto(id).subscribe(res => {
          const objectUrl = URL.createObjectURL(res);
          photo = this.sanitizer.bypassSecurityTrustUrl(objectUrl);

          this.imageSrc.push({ id, photo, text })
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
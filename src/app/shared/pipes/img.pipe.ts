import { Pipe, PipeTransform, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'img',
})
export class ImgPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IMG_URL: string = environment.imgUrl;

  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return './assets/no-image.jpg';
    }

    const imgUrl = `${this.IMG_URL}/${size}${img}`;

    console.log('URL', imgUrl);

    return null;
  }
}

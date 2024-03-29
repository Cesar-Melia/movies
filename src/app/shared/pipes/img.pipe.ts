import { Pipe, PipeTransform, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'img',
})
export class ImgPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IMG_URL: string = environment.imgUrl;

  transform(img: string, size: string = 'w500'): string {
    const imgUrl: string = img
      ? `${this.IMG_URL}${size}${img}`
      : './assets/no-image.jpg';

    return imgUrl;
  }
}

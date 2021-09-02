import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { MovieDetail } from '../../shared/interfaces/MovieDetail';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
  routeSub: Subscription;
  apiSub: Subscription;
  id: string;
  movie: MovieDetail;
  date: string;
  language: string;
  textSize: number;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.textSize = 150;
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params: Params) => {
      this.id = params.get('movieId');
    });

    this.searchMovieDetail(this.id);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.apiSub.unsubscribe();
  }

  searchMovieDetail(id: string): void {
    this.apiSub = this.moviesService.getMovieDetail(id).subscribe((data) => {
      this.movie = data;

      this.date = this.formatDate(this.movie.release_date);
      this.language = this.formatLanguage(this.movie.original_language);

      console.log(this.movie); /////////////////////////////////Delete
    });
  }

  formatDate(date: string): string {
    const months = {
      1: 'Enero',
      2: 'Febrero',
      3: 'Marzo',
      4: 'Abril',
      5: 'Mayo',
      6: 'Junio',
      7: 'Julio',
      8: 'Agosto',
      9: 'Septiembre',
      10: 'Octubre',
      11: 'Noviembre',
      12: 'Diciembre',
    };
    const dateValues: string[] = date.split('-');
    const month = Number(dateValues[1]);
    const year = dateValues[0];

    return `${months[month]} ${year}`;
  }

  formatLanguage(language: string): string {
    const isoLanguages = {
      aa: 'afar',
      ab: 'abjaso',
      ae: 'avéstico',
      af: 'afrikaans',
      ak: 'akano',
      am: 'amárico',
      an: 'aragonés',
      ar: 'árabe',
      as: 'asamés',
      av: 'avar',
      ay: 'aimara',
      az: 'azerí',
      ba: 'baskir',
      be: 'bielorruso',
      bg: 'búlgaro',
      bh: 'bhojpurí',
      bi: 'bislama',
      bm: 'bambara',
      bn: 'bengalí',
      bo: 'tibetano',
      br: 'bretón',
      bs: 'bosnio',
      ca: 'catalán',
      ce: 'checheno',
      ch: 'chamorro',
      co: 'corso',
      cr: 'cree',
      cs: 'checo',
      cu: 'eslavo',
      cv: 'chuvasio',
      cy: 'galés',
      da: 'danés',
      de: 'alemán',
      dv: 'maldivo',
      dz: 'dzongkha',
      ee: 'ewe',
      el: 'griego',
      en: 'inglés',
      eo: 'esperanto',
      es: 'español',
      et: 'estonio',
      eu: 'vascuence',
      fa: 'persa',
      ff: 'fula',
      fi: 'finés',
      fj: 'fijiano',
      fo: 'feroés',
      fr: 'francés',
      fy: 'frisón',
      ga: 'irlandés',
      gd: 'gaélico',
      gl: 'gallego',
      gn: 'guaraní',
      gu: 'guyaratí',
      gv: 'manés',
      ha: 'hausa',
      he: 'hebreo',
      hi: 'hindi',
      ho: 'hiri motu',
      hr: 'croata',
      ht: 'haitiano',
      hu: 'húngaro',
      hy: 'armenio',
      hz: 'herero',
      ia: 'interlingua',
      id: 'indonesio',
      ie: 'occidental',
      ig: 'igbo',
      ii: 'yi de Sichuán',
      ik: 'inupiaq',
      io: 'ido',
      is: 'islandés',
      it: 'italiano',
      iu: 'inuktitut',
      ja: 'japonés',
      jv: 'javanés',
      ka: 'georgiano',
      kg: 'kongo',
      ki: 'kikuyu',
      kj: 'kuanyama',
      kk: 'kazajo',
      kl: 'groenlandés',
      km: 'camboyano',
      kn: 'canarés',
      ko: 'coreano',
      kr: 'kanuri',
      ks: 'cachemiro',
      ku: 'kurdo',
      kv: 'komi ',
      kw: 'córnico',
      ky: 'kirguís',
      la: 'latín',
      lb: 'luxemburgués',
      lg: 'luganda',
      li: 'limburgués',
      ln: 'lingala',
      lo: 'lao',
      lt: 'lituano',
      lu: 'luba-katanga',
      lv: 'letón',
      mg: 'malgache',
      mh: 'marshalés',
      mi: 'maorí',
      mk: 'macedonio',
      ml: 'malayalam',
      mn: 'mongol',
      mo: 'moldavo',
      mr: 'maratí',
      ms: 'malayo',
      mt: 'maltés',
      my: 'birmano',
      na: 'nauruano',
      nb: 'noruego',
      nd: 'ndebele',
      ne: 'nepalí',
      ng: 'ndonga',
      nl: 'neerlandés',
      nn: 'nynorsk',
      no: 'noruego',
      nr: 'ndebele',
      nv: 'navajo',
      ny: 'chichewa',
      oc: 'occitano',
      oj: 'ojibwa',
      om: 'oromo',
      or: 'oriya',
      os: 'osético',
      pa: 'panyabí',
      pi: 'pali',
      pl: 'polaco',
      ps: 'pastú',
      pt: 'portugués',
      qu: 'quechua',
      rm: 'retorrománico',
      rn: 'kirundi',
      ro: 'rumano',
      ru: 'ruso',
      rw: 'ruandés',
      sa: 'sánscrito',
      sc: 'sardo',
      sd: 'sindhi',
      se: 'sami septentrional',
      sg: 'sango',
      si: 'cingalés',
      sk: 'eslovaco',
      sl: 'esloveno',
      sm: 'samoano',
      sn: 'shona',
      so: 'somalí',
      sq: 'albanés',
      sr: 'serbio',
      ss: 'suazi',
      st: 'sesotho',
      su: 'sundanés',
      sv: 'sueco',
      sw: 'suajili',
      ta: 'tamil',
      te: 'telugú',
      tg: 'tayiko',
      th: 'tailandés',
      ti: 'tigriña',
      tk: 'turcomano',
      tl: 'tagalo',
      tn: 'setsuana',
      to: 'tongano',
      tr: 'turco',
      ts: 'tsonga',
      tt: 'tártaro',
      tw: 'twi',
      ty: 'tahitiano',
      ug: 'uigur',
      uk: 'ucraniano',
      ur: 'urdu',
      uz: 'uzbeko',
      ve: 'venda',
      vi: 'vietnamita',
      vo: 'volapük',
      wa: 'valón',
      wo: 'wolof',
      xh: 'xhosa',
      yi: 'yídish',
      yo: 'yoruba',
      za: 'chuan',
      zh: 'chino',
      zu: 'zulú',
    };

    let newLanguage: string = isoLanguages[language];
    const capital: string = newLanguage[0].toUpperCase();
    newLanguage = capital + newLanguage.substr(1, newLanguage.length);

    return newLanguage;
  }

  showText(): void {
    this.textSize = 5000;

    console.log(this.textSize);
  }
}

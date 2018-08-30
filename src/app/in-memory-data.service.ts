import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    { id: 11, name: 'Batman', isMarvel: false,
    imgUrl: "url('https://static1.squarespace.com/static/5106cf89e4b04827cc5fc5bb/t/5745aaaec2ea51621122d51d/1464183476327/')" },
    { id: 12, name: 'Ms. Marvel', isMarvel: true,
    imgUrl: "url('https://i2.wp.com/mag.shock2.info/wp-content/uploads/2018/05/Ms.-Marvel_Banner.jpg')" },
    { id: 13, name: 'Wonder Woman', isMarvel: false,
    imgUrl: "url('https://media.fromthegrapevine.com/assets/images/2016/6/wonder-woman-DC-75.jpg.824x0_q71_crop-scale.jpg')" },
    { id: 14, name: 'Wolverine', isMarvel: true,
    imgUrl: "url('https://www.sideshowtoy.com/assets/products/300543-wolverine/lg/marvel-wolverine-premium-format-figure-sideshow-300543-01.jpg')" },
    { id: 15, name: 'Superman', isMarvel: false,
    imgUrl: "url('https://static.comicvine.com/uploads/scale_small/13/132327/6507037-28872490_1638064799604695_1250122498385004714_n.jpg')" },
    { id: 16, name: 'Iceman', isMarvel: true,
    imgUrl: "url('https://nerdist.com/wp-content/uploads/2016/10/c_fillg_rek_facesh_630q_80w_12002Fhttp-2F2Fimages-origin.playboy.com2Fogz4nxetbde62F23OLc1m6cEc2qaCQgmsqoe2F72942fa5471ce0b73cdf73f6add15a872Ficeman-marvel.jpg')" },
    { id: 17, name: 'The Flash', isMarvel: false,
    imgUrl: "url('http://media.comicbook.com/2015/12/the-flash-christmas-cover-161672.png')" },
    { id: 18, name: 'Jean Grey', isMarvel: true,
    imgUrl: "url('https://cdn.shopify.com/s/files/1/1496/3582/products/jean_grey_white_phoenix_variant_4d9271a0-ff0c-4925-bcb5-785fb5d0f9fb.jpg?v=1497378566')" },
    { id: 19, name: 'Aquaman', isMarvel: false,
    imgUrl: "url('https://revengeofthefans.com/wp-content/uploads/2018/02/gallery_aquaman-traditional-costume-jason-momoa.jpeg')" },
    { id: 20, name: 'Starlord', isMarvel: true,
    imgUrl: "url('https://vignette.wikia.nocookie.net/marvel-comics/images/b/ba/Star-Lord.jpg/revision/latest?cb=20170305201402&path-prefix=de')" },
    ];

    return {heroes};
  }
}
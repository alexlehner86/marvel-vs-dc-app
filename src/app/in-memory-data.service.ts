import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const myHeroes = [
    { id: 11, name: 'Batman', isMarvel: false,
    imgUrl: "url('https://static1.squarespace.com/static/5106cf89e4b04827cc5fc5bb/t/5745aaaec2ea51621122d51d/1464183476327/')" },
    { id: 12, name: 'Ms. Marvel', isMarvel: true,
    imgUrl: "url('https://i2.wp.com/mag.shock2.info/wp-content/uploads/2018/05/Ms.-Marvel_Banner.jpg')" },
    { id: 13, name: 'Wonder Woman', isMarvel: false,
    imgUrl: "url('https://media.fromthegrapevine.com/assets/images/2016/6/wonder-woman-DC-75.jpg.824x0_q71_crop-scale.jpg')" },
    { id: 14, name: 'Wolverine', isMarvel: true,
    imgUrl: "url('https://jackfisherbooks.files.wordpress.com/2018/01/6b508a3321acf15377675acee6635bfa-wolverine-comics-marvel-comics.jpg')" },
    { id: 15, name: 'Superman', isMarvel: false,
    imgUrl: "url('https://static.comicvine.com/uploads/scale_small/13/132327/6507037-28872490_1638064799604695_1250122498385004714_n.jpg')" },
    { id: 16, name: 'Iceman', isMarvel: true,
    imgUrl: "url('https://pre00.deviantart.net/95d0/th/pre/f/2011/273/e/5/iceman_by_colossus484-d4bfaz6.jpg')" },
    { id: 17, name: 'The Flash', isMarvel: false,
    imgUrl: "url('http://media.comicbook.com/2015/12/the-flash-christmas-cover-161672.png')" },
    { id: 18, name: 'Jean Grey', isMarvel: true,
    imgUrl: "url('https://cdn.shopify.com/s/files/1/1496/3582/products/jean_grey_white_phoenix_variant_4d9271a0-ff0c-4925-bcb5-785fb5d0f9fb.jpg?v=1497378566')" },
    { id: 19, name: 'Aquaman', isMarvel: false,
    imgUrl: "url('https://revengeofthefans.com/wp-content/uploads/2018/02/gallery_aquaman-traditional-costume-jason-momoa.jpeg')" },
    { id: 20, name: 'Starlord', isMarvel: true,
    imgUrl: "url('https://vignette.wikia.nocookie.net/marveldatabase/images/d/d8/Star-Lord_Vol_2_2_Textless.jpg/revision/latest?cb=20161018191307')" },
    ];

    let heroes = JSON.parse(localStorage.getItem('heroes'));
    if (!heroes) {
      heroes = myHeroes;
      localStorage.setItem('heroes', JSON.stringify(myHeroes));
    }
    return {heroes};
  }
}
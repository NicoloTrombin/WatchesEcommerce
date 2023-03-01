import { Injectable } from "@angular/core";
import { Product } from "../model/product";

@Injectable ({providedIn:'root'})
export class ProductsService {

    private products: Product[] = [
        {
            id: 1,
            nome: 'GMT Master',
            description: 'This model features a black dial and a two-tone Cerachrom bezel disc in green and yellow ceramic. Designed to display the time in two time zones simultaneously during intercontinental flights, the GMT‑Master II is recognized for its robust and versatile appearance.',
            prezzo: 22765,
            image: 'https://replicasderelojess.com/wp-content/uploads/2021/07/f01f97c3dc799e71fe12c8f92ae3384f-copy-1200x1200.jpg',
            marca: 'Rolex',
            disponibilita: true
        },
        {
            id: 2,
            nome: 'Day Just',
            description: 'The unchanging aesthetic of the Datejust makes it immediately recognizable. The distinctive Oyster case shape, fluted 18K gold bezel, Cyclops lens over the date and five-link Jubilee bracelet—created especially for Datejust models—all helped make this timepiece a classic. ',
            prezzo: 17225,
            image: 'https://i.pinimg.com/originals/95/fe/38/95fe388835776b915f44ba6541517704.jpg',
            marca: 'Rolex',
            disponibilita: true
        },
        {
            id: 3,
            nome: 'GMT Master',
            description: 'This model features a black dial and a two-tone Cerachrom bezel disc in black and gold ceramic. Designed to display the time in two time zones simultaneously during intercontinental flights, the GMT‑Master II is recognized for its robust and versatile appearance.',
            prezzo: 15895,
            image: 'https://s1.img.bidsquare.com/item/l/1855/18555065.jpeg?t=1OS6Wz',
            marca: 'Rolex',
            disponibilita: true
        },
        {
            id: 4,
            nome: 'Big Bang',
            description: 'Hublot exclusively uses a medical grade, non-oxidizing 316L type steel, combining iron as a base metal, chrome for its resistance to corrosion and nickel for optimal mechanical robustness.',
            prezzo: 42115,
            image: 'https://cdn.watchbase.com/watch/lg/hublot/big-bang/301-sx-1170-rx-4f.png',
            marca: 'Hublot',
            disponibilita: true
        },
        {
            id: 5,
            nome: 'Big Bang',
            description: 'Hublot exclusively uses a medical grade, non-oxidizing 316L type steel, combining iron as a base metal, chrome for its resistance to corrosion and nickel for optimal mechanical robustness.',
            prezzo: 38229,
            image: 'https://cdn.watchbase.com/watch/lg/hublot/big-bang/301-sb-131-rx-ea.png',
            marca: 'Hublot',
            disponibilita: false
        },
        {
            id: 6,
            nome: 'Day Date',
            description: "Lotus 18854/3 men's watch. With a 316l stainless steel case and mineral crystal, fitted with a 316l stainless steel strap. Lotus watches offer exclusive, cutting-edge designs for a contemporary, urban and modern public.",
            prezzo: 119,
            image: 'https://www.relojesdemoda.com/18715-large_default/reloj-lotus-freedom-collection-18854-6.jpg',
            marca: 'Lotus',
            disponibilita: true
        },
        {
            id: 7,
            nome: 'Freedom',
            description: "Lotus 18854/3 men's watch. With a 316l stainless steel case and mineral crystal, fitted with a 316l stainless steel strap. Lotus watches offer exclusive, cutting-edge designs for a contemporary, urban and modern public.",
            prezzo: 240,
            image: 'https://www.relojesdemoda.com/19430-large_default/lotus-watch-freedom-collection-18837-2.jpg',
            marca: 'Lotus',
            disponibilita: false
        },
        {
            id: 8,
            nome: 'Freedom',
            description: 'The first self-winding waterproof chronometer wristwatch to display the date in a window at 3 clock on the dial.',
            prezzo: 212,
            image: 'https://www.relojesdemoda.com/19426-large_default/lotus-watch-freedom-collection-18836-3.jpg',
            marca: 'Lotus',
            disponibilita: true
        },
        {
            id: 9,
            nome: 'Vintage Wooden',
            description: 'Solid wood watch storage with 3 suede-like storage slots to keep your finest watches safe.',
            prezzo: 112,
            image: 'https://cdn.shopify.com/s/files/1/0445/0929/8855/products/vintage-wooden-watch-box-br-3-slots-30339257893031_1200x.jpg?v=1628175810',
            marca: 'Watch Box',
            disponibilita: true
        },
        {
            id: 10,
            nome: 'Dark Wood',
            description: 'This beautiful little solid wood case will keep your watches safe and bring a vintage feel to your home decor.',
            prezzo: 98,
            image: 'https://cdn.shopify.com/s/files/1/0445/0929/8855/products/vintage-watch-box-in-dark-wood-br-3-slots-30389253406887_1200x.jpg?v=1628172260',
            marca: 'Watch Box',
            disponibilita: true
        },
        {
            id: 11,
            nome: 'Carbon Fiber',
            description: 'Keep your watch collection in one of the most beautiful carbon fiber watch boxes available. The material and colour of the box will enhance your watches.',
            prezzo: 150,
            image: 'https://cdn.shopify.com/s/files/1/0445/0929/8855/products/carbon-fiber-watch-box-with-lock-br-12-slots-29209051234471_1200x.jpg?v=1628159089',
            marca: 'Watch Box',
            disponibilita: true
        },
        {
            id: 12,
            nome: 'Carbon',
            description: 'This large carbon fibre coated wooden watch display box will easily showcase the luxury of your watches, especially with its colour and interior material. This luxury watch box is perfect for the serious collector.',
            prezzo: 180,
            image: 'https://cdn.shopify.com/s/files/1/0445/0929/8855/products/carbon-watch-box-br-12-slots-30343045349543_1200x.jpg?v=1628164119',
            marca: 'Watch Box',
            disponibilita: true
        }
    ];

    getProducts() {
        return this.products.slice()
    }

    getProductById(id: number) {
        return this.products.find(p => p.id === id);
    }

}
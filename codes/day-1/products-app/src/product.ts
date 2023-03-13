// export interface Product {
//     id: number;
//     name: string;
//     description: string;
//     imagePath: string;
//     price: number;
// }


export class Product {
    constructor(public id: number, public name: string, public price: number, public description: string, public imagePath: string | null | ArrayBuffer) {
    }
}
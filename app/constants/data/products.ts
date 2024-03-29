import { IProductData } from "@/app/types/type";

export enum Category {
  MenSweat = "MEN_SWEAT",
  WomenSweat = "WOMEN_SWEAT",
  MenShoes = "MEN_SHOES",
  WomenShoes = "WOMEN_SHOES",
  UnisexCap = "UNİSEX_CAP",
  UnisexTshirt = "UNİSEX_TSHİRT",
  KidsDress = "KİDS_DRESS",
}

const dataByCategory: Record<Category, IProductData[]> = {
  UNİSEX_CAP: [
    {
      id: 35,
      name: "Under Armour Blitzing Adjustable",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61GIjdIC0+L._AC_SX569_.jpg",
      price: 40,
      stock: 99,
    },
    {
      id: 36,
      name: "Under Armour Man Blitzing",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71V0EDCjw+L._AC_SX569_.jpg",
      price: 44,
      stock: 99,
    },
    {
      id: 37,
      name: "New Era THE LEAGUE CHIBUL",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71dWTBoYTdL._AC_SX679_.jpg",
      price: 69,
      stock: 99,
    },
    {
      id: 38,
      name: "Mercedes AMG Petronas Formula One Team",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/817Nkv6gkEL._AC_SX569_.jpg",
      price: 100,
      stock: 99,
    },
    {
      id: 39,
      name: "New Era McLaren F1 9Forty",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/7160Zd+LPuL._AC_SX569_.jpg",
      price: 100,
      stock: 99,
    },
    {
      id: 40,
      name: "F1 Aston Martin Cognizant Team",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71P2jVYUg3L._AC_SX569_.jpg",
      price: 100,
      stock: 99,
    },
    {
      id: 41,
      name: "Ferrari Branded Herren Cap",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61XPUjAOkSL._AC_SX569_.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 42,
      name: "Scuderia Ferrari Classic",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71n7BjQzssL._AC_SX569_.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 43,
      name: "McLaren F1 9Forty",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51njU-5+svL._AC_SX569_.jpg",
      price: 100,
      stock: 99,
    },
    {
      id: 44,
      name: "Mercedes AMG Petronas Formula 1 Takımı",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/91uUokmB7uL._AC_SX569_.jpg",
      price: 100,
      stock: 99,
    },
  ],

  MEN_SHOES: [
    {
      // Ayakkabı
      id: 1,
      name: "Nike Dunk Low Retro",
      category: "Erkek Ayakkabısı",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac88ab75-d4bf-4be4-a654-498d9d42f196/dunk-low-retro-se-ayakkab%C4%B1s%C4%B1-vJDVDt.png",
      price: 299,
      stock: 299,
    },
    {
      id: 2,
      name: "Nike Dunk Low Retro Black",
      category: "Ayakkabı",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-ayakkab%C4%B1s%C4%B1-mhrtZC.png",
      price: 289,
      stock: 299,
    },
    {
      id: 3,
      name: "Nike Court Vision",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/51XHSSs2WAL._AC_SY575_.jpg",
      price: 291,
      stock: 299,
    },
    {
      id: 4,
      name: "Nike Air Force",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/613HmnmaO6L._AC_SX575_.jpg",
      price: 320,
      stock: 299,
    },
    {
      id: 5,
      name: "Nike Court Legacy",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/4141pyW67-L._AC_SY575_.jpg",
      price: 219,
      stock: 299,
    },
    {
      id: 6,
      name: "Nike Wmns Nike Court Legacy",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/71an0TPL5GL._AC_SX575_.jpg",
      price: 229,
      stock: 299,
    },
    {
      id: 7,
      name: "Nike Air Huarache",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/515Jn5HQj1L._AC_SX575_.jpg",
      price: 333,
      stock: 299,
    },
    {
      id: 8,
      name: "Nike Air Huarache Run",
      category: "Ayakkabı",
      imageUrl:
        "https://akn-barcin.a-cdn.akinoncloud.com/products/2020/03/16/85431/da9ac52e-e014-4f15-b436-bc1f0a51ac5a_size900x900_cropCenter.jpg",
      price: 229,
      stock: 299,
    },
    {
      id: 9,
      name: "adidas COURTBLOCK",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/717eSYZhMFL._AC_SX575_.jpg",
      price: 234,
      stock: 299,
    },
    {
      id: 10,
      name: "adidas GRAND COURT",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/71WO1nbAsLL._AC_SX575_.jpg",
      price: 345,
      stock: 299,
    },
    {
      id: 12,
      name: "adidas GRAND COURT",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/61OaaJvfyRL._AC_SY575_.jpg",
      price: 449,
      stock: 95,
    },
    {
      id: 13,
      name: "Nike Unisex",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/41btdEECkWL._AC_SY575_.jpg",
      price: 300,
      stock: 99,
    },
    {
      id: 14,
      name: "Converse Unisex",
      category: "Ayakkabı",
      imageUrl:
        "https://akn-converse.a-cdn.akinoncloud.com/products/2023/03/21/21710/98fc818e-b23d-4f42-9aab-29eac32cd2c4_size1340x1000_cropBottom.jpg",
      price: 409,
      stock: 99,
    },
    {
      id: 59,
      name: "Puma 38111126 Club Unisex",
      category: "Ayakkabı",
      imageUrl:
        "https://productimages.hepsiburada.net/s/551/1500/110000612773797.jpg",
      price: 93,
      stock: 150,
    },
    {
      id: 60,
      name: "Nike Downshifter 11",
      category: "Ayakkabı",
      imageUrl:
        "https://productimages.hepsiburada.net/s/183/550/110000146711871.jpg/format:webp",
      price: 193,
      stock: 99,
    },
    {
      id: 60,
      name: "Nike Dunk Low Black FB8022-001",
      category: "Ayakkabı",
      imageUrl:
        "https://productimages.hepsiburada.net/s/486/550/110000533379936.jpg/format:webp",
      price: 93,
      stock: 150,
    },
  ],

  MEN_SWEAT: [
    {
      id: 15,
      name: "Jack & Jones JORVESTERBRO",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/81ba2ZKLx0L._AC_SY606_.jpg",
      price: 80,
      stock: 99,
    },
    {
      id: 16,
      name: "JACK & JONES JJWARRIOR",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61Bg8JLS7qL._AC_SY606_.jpg",
      price: 85,
      stock: 99,
    },
    {
      id: 17,
      name: "Jack & Jones JJMILES",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51-I1ngVw5L._AC_SX569_.jpg",
      price: 75,
      stock: 99,
    },
    {
      id: 19,
      name: "JACK & JONES CORE",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/81NftbTI-lL._AC_SY606_.jpg",
      price: 66,
      stock: 99,
    },
    {
      id: 23,
      name: "PUMA SCUDERIA FERRARI",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61zLBzV-7AL._AC_SX569_.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 24,
      name: "PUMA SCUDERIA FERRARI Race",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71PJ2qe5x1L._AC_SX569_.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 25,
      name: "Pandy Unisex Sweatshirt",
      category: "Sweatshirt",
      imageUrl:
        "https://cdn.dsmcdn.com/ty1012/product/media/images/prod/SPM/PIM/20231011/10/eb444338-c1ad-3466-a1da-6c0f625575f1/1_org_zoom.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 26,
      name: "Puma Ferrari Race Hooded",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51OsUevAfNL._AC_SX569_.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 27,
      name: "SCUDERIA FERRARI 2023 TEAM REPLICA",
      category: "Sweatshirt",
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/763422/01/fnd/TUR/w/1000/h/1000/fmt/png",
      price: 999,
      stock: 99,
    },
    {
      id: 28,
      name: "Only & Sons ONSCOLIN",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51GfOs3BNfL._AC_SX569_.jpg",
      price: 129,
      stock: 99,
    },
    {
      id: 31,
      name: "Puma Kadın Favourite PWRFleece",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61+t07g22LL._AC_SX569_.jpg",
      price: 189,
      stock: 99,
    },
    {
      id: 34,
      name: "Moshtashio Unisex Classic",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61vW4S1mfzL._AC_SX569_.jpg",
      price: 122,
      stock: 99,
    },
  ],

  [Category.WomenSweat]: [
    {
      id: 19,
      name: "JACK & JONES CORE",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/81NftbTI-lL._AC_SY606_.jpg",
      price: 66,
      stock: 99,
    },
    {
      id: 18,
      name: "WWF Market",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51Kb3UGZmiL._AC_SY606_.jpg",
      price: 55,
      stock: 99,
    },
    {
      id: 20,
      name: "WWF Market Giant",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/517tKNeojiL._AC_SY606_.jpg",
      price: 99,
      stock: 99,
    },
    {
      id: 22,
      name: "Tommy Hilfiger",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/41PIqx2MAwL._AC_SX466_.jpg",
      price: 111,
      stock: 99,
    },
    {
      id: 23,
      name: "PUMA SCUDERIA FERRARI",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61zLBzV-7AL._AC_SX569_.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 24,
      name: "PUMA SCUDERIA FERRARI Race",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71PJ2qe5x1L._AC_SX569_.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 25,
      name: "Pandy Unisex Sweatshirt",
      category: "Sweatshirt",
      imageUrl:
        "https://cdn.dsmcdn.com/ty1012/product/media/images/prod/SPM/PIM/20231011/10/eb444338-c1ad-3466-a1da-6c0f625575f1/1_org_zoom.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 26,
      name: "Puma Ferrari Race Hooded",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51OsUevAfNL._AC_SX569_.jpg",
      price: 199,
      stock: 99,
    },
    {
      id: 27,
      name: "SCUDERIA FERRARI 2023 TEAM REPLICA",
      category: "Sweatshirt",
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/763422/01/fnd/TUR/w/1000/h/1000/fmt/png",
      price: 999,
      stock: 99,
    },
    {
      id: 29,
      name: "United Colors Of Benetton",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71ZN32IOJKL._AC_SX569_.jpg",
      price: 109,
      stock: 99,
    },
    {
      id: 30,
      name: "Levi's Standard Zip",
      category: "Sweatshirt",
      imageUrl: "https://m.media-amazon.com/images/I/21BITiYLNsL._AC_.jpg",
      price: 139,
      stock: 99,
    },
    {
      id: 31,
      name: "Puma Kadın Favourite PWRFleece",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61+t07g22LL._AC_SX569_.jpg",
      price: 189,
      stock: 99,
    },
    {
      id: 32,
      name: "Calvin Klein L/S SWEATSHIRT",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/713M1ImA0QL._AC_SX522_.jpg",
      price: 159,
      stock: 99,
    },
    {
      id: 33,
      name: "Tommy Hilfiger TJW HALF",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/817x0Q9WpIL._AC_SY606_.jpg",
      price: 79,
      stock: 99,
    },
    {
      id: 34,
      name: "Moshtashio Unisex Classic",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61vW4S1mfzL._AC_SX569_.jpg",
      price: 122,
      stock: 99,
    },
  ],

  [Category.WomenShoes]: [
    {
      // Ayakkabı
      id: 1,
      name: "Nike Dunk Low Retro",
      category: "Erkek Ayakkabısı",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac88ab75-d4bf-4be4-a654-498d9d42f196/dunk-low-retro-se-ayakkab%C4%B1s%C4%B1-vJDVDt.png",
      price: 299,
      stock: 299,
    },
    {
      id: 2,
      name: "Nike Dunk Low Retro Black",
      category: "Ayakkabı",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-ayakkab%C4%B1s%C4%B1-mhrtZC.png",
      price: 289,
      stock: 299,
    },
    {
      id: 3,
      name: "Nike Court Vision",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/51XHSSs2WAL._AC_SY575_.jpg",
      price: 291,
      stock: 299,
    },
    {
      id: 4,
      name: "Nike Air Force",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/613HmnmaO6L._AC_SX575_.jpg",
      price: 320,
      stock: 299,
    },
    {
      id: 5,
      name: "Nike Court Legacy",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/4141pyW67-L._AC_SY575_.jpg",
      price: 219,
      stock: 299,
    },
    {
      id: 6,
      name: "Nike Wmns Nike Court Legacy",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/71an0TPL5GL._AC_SX575_.jpg",
      price: 229,
      stock: 299,
    },
    {
      id: 7,
      name: "Nike Air Huarache",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/515Jn5HQj1L._AC_SX575_.jpg",
      price: 333,
      stock: 299,
    },
    {
      id: 8,
      name: "Nike Air Huarache Run",
      category: "Ayakkabı",
      imageUrl:
        "https://akn-barcin.a-cdn.akinoncloud.com/products/2020/03/16/85431/da9ac52e-e014-4f15-b436-bc1f0a51ac5a_size900x900_cropCenter.jpg",
      price: 229,
      stock: 299,
    },
    {
      id: 9,
      name: "adidas COURTBLOCK",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/717eSYZhMFL._AC_SX575_.jpg",
      price: 234,
      stock: 299,
    },
    {
      id: 10,
      name: "adidas GRAND COURT",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/71WO1nbAsLL._AC_SX575_.jpg",
      price: 345,
      stock: 299,
    },
    {
      id: 11,
      name: "Nike Matte Black",
      category: "Ayakkabı",
      imageUrl:
        "https://pbs.twimg.com/media/D3VlqocWkAAzACd?format=jpg&name=900x900",
      price: 999,
      stock: 9,
    },
    {
      id: 12,
      name: "adidas GRAND COURT",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/61OaaJvfyRL._AC_SY575_.jpg",
      price: 449,
      stock: 95,
    },
    {
      id: 13,
      name: "Nike Unisex",
      category: "Ayakkabı",
      imageUrl:
        "https://m.media-amazon.com/images/I/41btdEECkWL._AC_SY575_.jpg",
      price: 300,
      stock: 99,
    },
    {
      id: 14,
      name: "Converse Unisex",
      category: "Ayakkabı",
      imageUrl:
        "https://akn-converse.a-cdn.akinoncloud.com/products/2023/03/21/21710/98fc818e-b23d-4f42-9aab-29eac32cd2c4_size1340x1000_cropBottom.jpg",
      price: 409,
      stock: 99,
    },
    {
      id: 59,
      name: "Puma 38111126 Club Unisex",
      category: "Ayakkabı",
      imageUrl:
        "https://productimages.hepsiburada.net/s/551/1500/110000612773797.jpg",
      price: 93,
      stock: 150,
    },
    {
      id: 60,
      name: "Nike Downshifter 11",
      category: "Ayakkabı",
      imageUrl:
        "https://productimages.hepsiburada.net/s/183/550/110000146711871.jpg/format:webp",
      price: 193,
      stock: 99,
    },
    {
      id: 60,
      name: "Nike Dunk Low Black FB8022-001",
      category: "Ayakkabı",
      imageUrl:
        "https://productimages.hepsiburada.net/s/486/550/110000533379936.jpg/format:webp",
      price: 93,
      stock: 150,
    },
  ],

  UNİSEX_TSHİRT: [
    {
      id: 45,
      name: "Puma Unisex Tee T-shirt",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51tVYtaKvFL._AC_SX569_.jpg",
      price: 110,
      stock: 99,
    },
    {
      id: 46,
      name: "WWF Market Unisex",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/416UXGzz6VL._AC_SY606_.jpg",
      price: 111,
      stock: 99,
    },
    {
      id: 47,
      name: "PUMA Cat Tee Men",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51YmB8qyB8L._AC_SX569_.jpg",
      price: 120,
      stock: 99,
    },
    {
      id: 48,
      name: "Marvel 2023",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51ygGyTQxML._AC_SX569_.jpg",
      price: 120,
      stock: 99,
    },
    {
      id: 49,
      name: "WWF Market Unisex",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/41ARtkM2meL._AC_SY606_.jpg",
      price: 100,
      stock: 99,
    },
    {
      id: 50,
      name: "Calvin Klein S/S CREW NECK",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61rV6OIC8fL._AC_SX679_.jpg",
      price: 123,
      stock: 99,
    },
    {
      id: 51,
      name: "Kuffe Unisex Hoodie",
      category: "Sweatshirt",
      imageUrl:
        "https://productimages.hepsiburada.net/s/777/550/110000649945909.jpg/format:webp",
      price: 100,
      stock: 99,
    },
    {
      id: 52,
      name: "Star Wars T-Shirt",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61yJwMZVA+L._AC_SX569_.jpg",
      price: 111,
      stock: 99,
    },
    {
      id: 53,
      name: "Tommy Hilfiger TJW CLS MODERN",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71ezF7eBB3L._AC_SX569_.jpg",
      price: 122,
      stock: 99,
    },
    {
      id: 54,
      name: "United Colors of Benetton T-Shirt",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/71qT7E3yYCL._AC_SX569_.jpg",
      price: 123,
      stock: 99,
    },
    {
      id: 55,
      name: "JACK & JONES Jorvacation Tee Ss Crew Neck",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/51eenproENL._AC_SY606_.jpg",
      price: 89,
      stock: 99,
    },
    {
      id: 56,
      name: "United Colors of Benetton T-Shirt",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/61BuVKUZkQL._AC_SY606_.jpg",
      price: 88,
      stock: 99,
    },
    {
      id: 57,
      name: "Tommy Hilfiger TJW OVR CRP COLLEGE 2",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/81WeayDaUaL._AC_SX679_.jpg",
      price: 87,
      stock: 99,
    },
    {
      id: 58,
      name: "Neverless® Odin T-Shirt",
      category: "Sweatshirt",
      imageUrl:
        "https://m.media-amazon.com/images/I/81aHsb-sugL._AC_SX569_.jpg",
      price: 83,
      stock: 99,
    },
  ],

  KİDS_DRESS: [
    {
      id: 21,
      name: "DeFacto Disney Mickey",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/61gj45CVjmL._AC_SY606_.jpg",
      price: 23,
      stock: 99,
    },
    {
      id: 61,
      name: "LOLANTA Outfit Set",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/610uaDHNedL._AC_SX569_.jpg",
      price: 93,
      stock: 150,
    },
    {
      id: 62,
      name: "Salopet shorts with pockets",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/81+WYjC8cAL._AC_SY606_.jpg",
      price: 99,
      stock: 150,
    },
    {
      id: 63,
      name: "Koton Salopet shorts with pockets",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/71eMpyIfSgL._AC_SY606_.jpg",
      price: 99,
      stock: 150,
    },
    {
      id: 64,
      name: "PANÇO Salopet",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/715qnXGGwRL._AC_SX569_.jpg",
      price: 99,
      stock: 150,
    },
    {
      id: 65,
      name: "",
      category: "Kids Dress",
      imageUrl: "",
      price: 99,
      stock: 150,
    },
    {
      id: 66,
      name: "Solojee  baby rompers",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/61S72KPtj9L._AC_SX569_.jpg",
      price: 99,
      stock: 150,
    },
    {
      id: 67,
      name: "Lola Bunny Sweatshirt",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/714-ScbAErL._AC_SY606_.jpg",
      price: 99,
      stock: 150,
    },
    {
      id: 68,
      name: "Patterned shorts shirt",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/61Mevk7tFfL._AC_SX679_.jpg",
      price: 99,
      stock: 150,
    },
    {
      id: 69,
      name: "Christmas Pajamas for the family",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/716ZNU3-KzL._AC_SX569_.jpg",
      price: 99,
      stock: 150,
    },
    {
      id: 70,
      name: "CityComfort Jogging Dress",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/813KaEIeLRL._AC_SX569_.jpg",
      price: 99,
      stock: 150,
    },
    {
      id: 70,
      name: "Baby Rompers Long Sleeve",
      category: "Kids Dress",
      imageUrl:
        "https://m.media-amazon.com/images/I/611b+fkGknL._AC_SX679_.jpg",
      price: 99,
      stock: 150,
    },
  ],
};

const menSweatData = dataByCategory[Category.MenSweat];

const allData = [
  ...dataByCategory[Category.WomenShoes],
  ...dataByCategory[Category.MenShoes],
  ...dataByCategory[Category.UnisexCap],
  ...dataByCategory[Category.UnisexTshirt],
  ...dataByCategory[Category.MenSweat],
  ...dataByCategory[Category.WomenSweat],
  ...dataByCategory[Category.KidsDress],
];

export const getAllData = () =>
  new Promise<IProductData[]>((resolve) => resolve(allData));

export const getProductsByCategory = (category: Category) =>
  new Promise<IProductData[]>((resolve) => resolve(dataByCategory[category]));

export const getProductData = () =>
  new Promise<IProductData[]>((resolve) =>
    resolve([
      // id,
    ])
  );

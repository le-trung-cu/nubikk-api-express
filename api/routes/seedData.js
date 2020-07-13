const express = require('express')
const Product = require('../models/product');

const seedDataRouter = express.Router();

const INIT_PRODUCTS = () => ([
    {
        "id": 1,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/5f/90/d0/2020-02-07-Nubikk12100_480x480.jpg",
        "label": null,
        "name": "Jagger Aspen | White Trainers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 2,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/cc/42/a4/nubikk-jagger-aspen-multi-white-leather_13zsN9YxZkfU5a_480x480.jpg",
        "label": null,
        "name": "Jagger Aspen Multi | White Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 3,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/2a/61/3d/nubikk-jagger-classic-white-lea_2_480x480.jpg",
        "label": "New",
        "name": "Jagger Calf | Multi White Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            },
            {
                "name": "47",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 4,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/4f/fc/b3/2020-02-07-Nubikk11283_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Calf | White Trainers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            },
            {
                "name": "47",
                "status": false
            },
            {
                "name": "48",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 5,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/bb/28/eb/nubikk_16_1_480x480.jpg",
        "label": null,
        "name": "Jagger Classic Multi | White Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 6,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f8/13/8e/nubikk-jagger-naya-white-leather-multi-color_2_480x480.jpg",
        "label": null,
        "name": "Jagger Naya | Multi White Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 7,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/57/07/02/90q7OE4uPgVqQM_480x480.jpg",
        "label": null,
        "name": "Jagger Naya | White Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 8,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/4e/11/e2/nubikk_14_10ndEzoz3Ie7nQ_480x480.jpg",
        "label": null,
        "name": "Elven Royal | Multi White Sneakers",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 9,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/04/57/80/nubikk-elven-royal-white-leather_1fnletGRFkRwl5_480x480.jpg",
        "label": null,
        "name": "Elven Royal | White Trainers",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 10,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/a7/27/15/2020-02-07-Nubikk11374_480x480.jpg",
        "label": null,
        "name": "Yeye Block Ocean | White Trainers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 3,
        "modelName": "yeye men"
    },
    {
        "id": 11,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/c1/6b/da/square_Nubikk-AW19-Logan-Harbor-desert-leather-4_480x480.jpg",
        "label": null,
        "name": "Logan Harbor | White Boots",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 12,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/00/e0/b6/2020-02-07-Nubikk11477_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Python | White Trainers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 2,
        "materialName": "python",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 13,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/cd/b6/75/2020-02-07-Nubikk12409_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Pure | White Trainers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 1,
        "colorName": "white",
        "materialId": 3,
        "materialName": "rubberises leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 14,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/c1/2e/97/nubikk-mr-paco-olive-green_480x480.jpg",
        "label": "New",
        "name": "Mr Paco | Olive Espadrilles",
        "price": 125,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 2,
        "colorName": "green",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 3,
        "categoryName": "espadrilles",
        "modelId": 5,
        "modelName": "mr. paco"
    },
    {
        "id": 15,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/d1/0c/e9/elven_tanuki_olive2AXupJoTQgychJ_480x480.jpg",
        "label": null,
        "name": "Elven Tanuki | Lt Green Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 2,
        "colorName": "green",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 16,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/4e/a4/de/nubikk-jagger-classic-LT-green_2C3hTJKP3VxGx1_480x480.jpg",
        "label": "New",
        "name": "Jagger Nubuck | Green Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 2,
        "colorName": "green",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 17,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/c1/2e/97/nubikk-mr-paco-olive-green_480x480.jpg",
        "label": "New",
        "name": "Mr Paco | Olive Espadrilles",
        "price": 125,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 2,
        "colorName": "green",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 3,
        "categoryName": "espadrilles",
        "modelId": 5,
        "modelName": "mr. paco"
    },
    {
        "id": 18,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/76/ac/b1/nubikk-yucca_ace_m_forest__2_480x480.jpg",
        "label": "New",
        "name": "Yucca Ace M | Forest Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 2,
        "colorName": "green",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 6,
        "modelName": "yucca m"
    },
    {
        "id": 19,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/5a/8c/60/nubikk-mr-paco-navy_480x480.jpg",
        "label": "New",
        "name": "Mr Paco | Navy Espadrilles",
        "price": 125,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 3,
        "colorName": "navy",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 3,
        "categoryName": "espadrilles",
        "modelId": 5,
        "modelName": "mr. paco"
    },
    {
        "id": 20,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f2/78/d5/2020-02-07-Nubikk11406_480x480.jpg",
        "label": null,
        "name": "Elven Tanuki | Navy Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 3,
        "colorName": "navy",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 21,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/cf/88/23/2020-02-07-Nubikk11711_480x480.jpg",
        "label": null,
        "name": "Elven Tanuki Gold | Navy Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 3,
        "colorName": "navy",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 22,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f2/4e/5a/2020-02-07-Nubikk12611_480x480.jpg",
        "label": null,
        "name": "Jagger Fresh | Navy Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 3,
        "colorName": "navy",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 23,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/g0/90/f4/2020-02-07-Nubikk12471_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Nubuck | Navy Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 3,
        "colorName": "navy",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 24,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/2d/aa/01/nubikk-yucca_ace_m_night_2_480x480.jpg",
        "label": "New",
        "name": "Yucca Ace M | Night Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 3,
        "colorName": "navy",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 6,
        "modelName": "yucca m"
    },
    {
        "id": 25,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/ca/e5/15/nubikk-3_1_480x480.jpg",
        "label": null,
        "name": "Elven Nagare | Taupe Sneakers",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 26,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/d2/e4/9d/2020-02-07-Nubikk12907_480x480.jpg",
        "label": "Classic Collection",
        "name": "Logan Chelsea | Taupe Boots",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 27,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/e5/00/b7/nubikk-mr-paco-taupe-suede_1jwy2jmjDe3SfM_480x480.jpg",
        "label": "New",
        "name": "Mr Paco | Taupe Espadrilles",
        "price": 125,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 3,
        "categoryName": "espadrilles",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 28,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/20/99/57/nubikk_elven_nagare_vulcan_2_480x480.jpg",
        "label": "New",
        "name": "Elven Nagare | Vulcan Sneakers",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 29,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/3b/ae/bf/nubikk-logan-harbor-dk-grey-suede_2DwFJpdWbM02Ce_480x480.jpg",
        "label": null,
        "name": "Logan Harbor Suede | Grey Boots",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 30,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/2a/91/13/2020-02-07-Nubikk11355_480x480.jpg",
        "label": null,
        "name": "Elven Tanuki | Grey Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 31,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/3d/63/5f/elven_tanuki_fresh_greyEn4CCpktrQShx_480x480.jpg",
        "label": null,
        "name": "Elven Tanuki Gold | Grey Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 32,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/9f/09/21/nubikk-jagger-pure-fresh-lt-grey-nubuck_OB_480x480.jpg",
        "label": null,
        "name": "Jagger Fresh | Grey Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 33,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/2f/34/07/2020-02-07-Nubikk12122_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Nubuck | Grey Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            },
            {
                "name": "47",
                "status": true
            },
            {
                "name": "48",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 34,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/95/23/d5/nubikk-yeye-maze-nubuck-lt-m-dk-grey-nubuck_17ytGTnYFldmjA_480x480.jpg",
        "label": null,
        "name": "Yeye Maze M | Grey Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 3,
        "modelName": "yeye men"
    },
    {
        "id": 35,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/93/f6/3b/nubikk-yucca_ace_m_vulcan__2_480x480.jpg",
        "label": "New",
        "name": "Yucca Ace M | Vulcan Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 6,
        "modelName": "yucca m"
    },
    {
        "id": 36,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/53/dc/56/nubikk-jagger-classic-sl-stone-lea_2_480x480.jpg",
        "label": "New",
        "name": "Jagger Calf | Stone Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 5,
        "colorName": "grey",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 37,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/a4/03/d0/nubikk-logan-harbor-dessert-leather_2_480x480.jpg",
        "label": null,
        "name": "Logan Harbor | Desert Boots",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 6,
        "colorName": "desert",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 38,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/26/a6/5a/2020-02-07-Nubikk12875_480x480.jpg",
        "label": "Classic Collection",
        "name": "Logan Chelsea | Black Boots",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 39,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/c4/5f/72/nubikk-logan-harbor-black-suede_204dATbzDirKAq_480x480.jpg",
        "label": null,
        "name": "Logan Harbor Suede | Black Boots",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 40,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f6/2a/5e/2020-02-07-Nubikk11449_480x480.jpg",
        "label": null,
        "name": "Elven Tanuki | Black Raven Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 41,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f1/17/20/elven_tanuki_fresh_blackfAootN2N3zWgu_480x480.jpg",
        "label": null,
        "name": "Elven Tanuki | Black Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 42,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/69/34/5b/2020-02-07-Nubikk12437_480x480.jpg",
        "label": null,
        "name": "Elven Tanuki Gold | Black Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 43,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/14/dd/c6/nubikk-jagger-classic-black-leather_5-vierkant_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Classic | Black Trainers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            },
            {
                "name": "47",
                "status": true
            },
            {
                "name": "48",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 44,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f7/84/54/2020-02-07-Nubikk11960_480x480.jpg",
        "label": null,
        "name": "Jagger Fresh | Black Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 45,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/60/a0/de/2020-02-07-Nubikk11469_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Nubuck | Black Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 46,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/b7/eb/79/2020-02-07-Nubikk12723_480x480.jpg",
        "label": null,
        "name": "Yeye Maze M | Black Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 3,
        "modelName": "yeye men"
    },
    {
        "id": 47,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/4d/77/6b/nubikk-elven-royal-black-raven-leather_1H0jQjEkCkNsqU_480x480.jpg",
        "label": null,
        "name": "Elven Royal Raven | Black Sneakers",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 2,
        "modelName": "elven"
    },
    {
        "id": 48,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f2/ea/34/2020-02-07-Nubikk12339_480x480.jpg",
        "label": null,
        "name": "Jagger Aspen Multi | Black Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": false
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 49,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/22/d4/62/nubikk-jagger-classic-black-lea_2_480x480.jpg",
        "label": "New",
        "name": "Jagger Classic Multi | Black Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 50,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/68/4f/a9/nubikk-jagger_naya_black_raven_2_480x480.jpg",
        "label": "New",
        "name": "Jagger Naya | Black Raven Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 51,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/cd/g0/dd/2020-02-07-Nubikk12305_480x480.jpg",
        "label": null,
        "name": "Jagger Naya | Black Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 52,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/da/9a/a0/nubikk-logan-adams-black-leather_2_480x480.jpg",
        "label": "New",
        "name": "Logan Adams | Black Chelsea Boots",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 53,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/05/0c/3a/nubikk_logan_ivy_edited_square_480x480.jpg",
        "label": null,
        "name": "Logan Harbor | Black Boots",
        "price": 200,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 54,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/5e/7c/cc/2020-02-07-Nubikk12396_480x480.jpg",
        "label": null,
        "name": "Logan Ivy | Black Shoes",
        "price": 190,
        "sizes": [
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            },
            {
                "name": "43",
                "status": false
            },
            {
                "name": "44",
                "status": false
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": false
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 4,
        "modelName": "logan"
    },
    {
        "id": 55,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/34/ea/9d/2020-02-07-Nubikk12811_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Python | Black Trainers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            },
            {
                "name": "47",
                "status": true
            },
            {
                "name": "48",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 2,
        "materialName": "python",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 56,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/5a/4d/2d/2020-02-07-Nubikk12363_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Gomma | Black Trainers",
        "price": 180,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            },
            {
                "name": "47",
                "status": true
            },
            {
                "name": "48",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 6,
        "materialName": "rubberised leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 57,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/d4/12/6a/2020-02-07-Nubikk12522_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jagger Pure | Black Trainers",
        "price": 170,
        "sizes": [
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            },
            {
                "name": "43",
                "status": true
            },
            {
                "name": "44",
                "status": true
            },
            {
                "name": "45",
                "status": true
            },
            {
                "name": "46",
                "status": true
            }
        ],
        "sex": "men",
        "colorId": 7,
        "colorName": "black",
        "materialId": 6,
        "materialName": "rubberised leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 1,
        "modelName": "jagger"
    },
    {
        "id": 58,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/77/0d/82/nubikk-boots-white-croco_1_480x480.jpg",
        "label": null,
        "name": "Gigi Melba | White Boots",
        "price": 280,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 7,
        "materialName": "croco printed leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 9,
        "modelName": "gigi"
    },
    {
        "id": 59,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/4b/94/d1/2020-02-07-Nubikk12583_480x480.jpg",
        "label": null,
        "name": "Lucy Royal Croco | White Trainers",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": false
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 7,
        "materialName": "croco printed leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 10,
        "modelName": "lucy"
    },
    {
        "id": 60,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/92/af/9b/nubikk-elise-blush-white-leather-multicolor_OB_480x480.jpg",
        "label": null,
        "name": "Elise Blush | Multi White Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 11,
        "modelName": "elise"
    },
    {
        "id": 61,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/70/bf/20/nubikk-elise-blush-white-leather_1_480x480.jpg",
        "label": null,
        "name": "Elise Blush | White Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 11,
        "modelName": "elise"
    },
    {
        "id": 62,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/04/c5/6f/2020-02-07-Nubikk9681_480x480.jpg",
        "label": "Classic Collection",
        "name": "Elise GPS | White Trainers",
        "price": 170,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 11,
        "modelName": "elise"
    },
    {
        "id": 63,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/9f/ae/80/5_2_480x480.jpg",
        "label": null,
        "name": "Joy Jazzy | White Ankle Boots",
        "price": 220,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 12,
        "modelName": "joy"
    },
    {
        "id": 64,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f9/e4/7f/10_480x480.jpg",
        "label": null,
        "name": "Lucy May | White Sneakers",
        "price": 190,
        "sizes": [
            {
                "name": "36",
                "status": false
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 10,
        "modelName": "lucy"
    },
    {
        "id": 65,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/83/3c/4c/nubikk_11_12w1gRRxfh3HGL_480x480.jpg",
        "label": null,
        "name": "Lucy Royal | Gold White Sneakers",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 10,
        "modelName": "lucy"
    },
    {
        "id": 66,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/11/84/5f/YZLS_480x480.jpg",
        "label": "Limited Edition",
        "name": "Romee YZLS | White Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 13,
        "modelName": "romee"
    },
    {
        "id": 67,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/6b/bd/64/2020-02-07-Nubikk11131_480x480.jpg",
        "label": "Classic Collection",
        "name": "Jolie Pure | White Trainers",
        "price": 170,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 1,
        "colorName": "white",
        "materialId": 6,
        "materialName": "rubberised leather",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 14,
        "modelName": "jolie"
    },
    {
        "id": 68,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/82/76/7b/elise_blush_gold2_480x480.jpg",
        "label": null,
        "name": "Elise Blush | Gold Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 8,
        "colorName": "gold",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 11,
        "modelName": "elise"
    },
    {
        "id": 69,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/a9/3d/8e/romee_cura_gold_480x480.jpg",
        "label": null,
        "name": "Romee Cura | Gold Ankle Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 8,
        "colorName": "gold",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 13,
        "modelName": "romee"
    },
    {
        "id": 70,
        "picture": "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        "label": null,
        "name": "Alex Gilly | Cognac Boots",
        "price": 280,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 9,
        "colorName": "cognac",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 15,
        "modelName": "alex"
    },
    {
        "id": 71,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/92/7e/bf/2_2_480x480.jpg",
        "label": null,
        "name": "Joy Ardena | Cognac Ankle Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 9,
        "colorName": "cognac",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 12,
        "modelName": "joy"
    },
    {
        "id": 72,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/3c/59/86/nubikk-ace-boheme-black-suede_12x4aQ9GzR63K6_480x480.jpg",
        "label": null,
        "name": "Ace Boheme | Black Ankle Boots",
        "price": 180,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 16,
        "modelName": "ace"
    },
    {
        "id": 73,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/e4/58/8a/nubikk-ace-botan-10s-black-suede_2_480x480.jpg",
        "label": "New",
        "name": "Ace Botan | Black Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 16,
        "modelName": "ace"
    },
    {
        "id": 74,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/57/dc/a6/holly_dana_480x480.jpg",
        "label": null,
        "name": "Holly Dana | Black Boots",
        "price": 190,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 17,
        "modelName": "holly"
    },
    {
        "id": 75,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/77/4a/1c/nubikk-yeye-suede-fresh-lite-l-black-suede_2VHJCZYIIT5gFO_480x480.jpg",
        "label": "Classic Collection",
        "name": "Yeye Fresh | Black Trainers",
        "price": 170,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": false
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 1,
        "categoryName": "trainers",
        "modelId": 3,
        "modelName": "yeye men"
    },
    {
        "id": 76,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/82/81/62/nubikk-alex-gaucho-black-nubuck_2_480x480.jpg",
        "label": "Coming Soon",
        "name": "Alex Gaucho | Black Boots",
        "price": 290,
        "sizes": [
            {
                "name": "36",
                "status": false
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": false
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 15,
        "modelName": "alex"
    },
    {
        "id": 77,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/99/e7/97/Nubikk-AW19-Alex-Gilly-black-5-copy_480x480.jpg",
        "label": null,
        "name": "Alex Gilly | Black Boots",
        "price": 280,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 15,
        "modelName": "alex"
    },
    {
        "id": 78,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/b5/cd/81/alex_gilly_croco_black2_480x480.jpg",
        "label": null,
        "name": "Alex Gilly Croco | Black Boots",
        "price": 280,
        "sizes": [
            {
                "name": "36",
                "status": false
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 7,
        "materialName": "croco printed leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 15,
        "modelName": "alex"
    },
    {
        "id": 79,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/18/b8/6d/2020-02-07-Nubikk9471_480x480.jpg",
        "label": "Classic Collection",
        "name": "Djuna Aubine | Black Biker Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 18,
        "modelName": "djuna"
    },
    {
        "id": 80,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/67/d1/54/2020-02-07-Nubikk9515_480x480.jpg",
        "label": "Classic Collection",
        "name": "Djuna Cone | Black Biker Boots",
        "price": 190,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 18,
        "modelName": "djuna"
    },
    {
        "id": 81,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/82/7f/57/2020-02-07-Nubikk9676_480x480.jpg",
        "label": null,
        "name": "Elise Blush | Black Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "36",
                "status": false
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": false
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 11,
        "modelName": "elise"
    },
    {
        "id": 82,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/bb/ce/92/FAE-ADAMS_sRGB_square_480x480.jpg",
        "label": null,
        "name": "Fae Adams | Black Chelsea Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": false
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 19,
        "modelName": "fae"
    },
    {
        "id": 83,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f3/0e/28/2020-02-07-Nubikk9579_480x480.jpg",
        "label": null,
        "name": "Gigi Melba | Black Boots",
        "price": 280,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 7,
        "materialName": "croco printed leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 9,
        "modelName": "gigi"
    },
    {
        "id": 84,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/1e/7c/3e/4_2_480x480.jpg",
        "label": null,
        "name": "Joy Ardena | Black Ankle Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": false
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 12,
        "modelName": "joy"
    },
    {
        "id": 85,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/79/f0/30/nubikk-joy-jazzy-black-leather_2_480x480.jpg",
        "label": null,
        "name": "Joy Jazzy | Black Ankle Boots",
        "price": 220,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 12,
        "modelName": "joy"
    },
    {
        "id": 86,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/57/6d/30/nubikk_OB_lauren_tao_black_2ShxDUyK405W92_480x480.jpg",
        "label": "New",
        "name": "Lauren Taro | Black Sandals",
        "price": 155,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 6,
        "categoryName": "sandals",
        "modelId": 20,
        "modelName": "lauren"
    },
    {
        "id": 87,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/e2/0f/6d/2020-02-07-Nubikk9872_480x480.jpg",
        "label": null,
        "name": "Romee Cura | Black Ankle Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 13,
        "modelName": "romee"
    },
    {
        "id": 88,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/43/14/55/nubikk_romee_moc_black_leather_2_480x480.jpg",
        "label": "New",
        "name": "Romee Moc | Black Ankle Boots",
        "price": 180,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 13,
        "modelName": "romee"
    },
    {
        "id": 89,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/3f/e9/ba/romee_rose_black_480x480.jpg",
        "label": null,
        "name": "Romee Rose | Black Boots",
        "price": 180,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 7,
        "colorName": "black",
        "materialId": 1,
        "materialName": "leather",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 13,
        "modelName": "romee"
    },
    {
        "id": 90,
        "picture": "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        "label": "New",
        "name": "Elise Blush | Desert Sneakers",
        "price": 170,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 6,
        "colorName": "desert",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 11,
        "modelName": "elise"
    },
    {
        "id": 91,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/c6/06/d3/nubikk_lucy_may_desert_2_480x480.jpg",
        "label": "Coming Soon",
        "name": "Lucy May | Desert Sneakers",
        "price": 190,
        "sizes": [
            {
                "name": "36",
                "status": false
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": false
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 6,
        "colorName": "desert",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 10,
        "modelName": "lucy"
    },
    {
        "id": 92,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/4b/d2/a2/nubikk_yucca_ace_L_desert_2_480x480.jpg",
        "label": "Coming Soon",
        "name": "Yucca Ace L | Desert Sneakers",
        "price": 180,
        "sizes": [
            {
                "name": "36",
                "status": false
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": false
            },
            {
                "name": "39",
                "status": false
            },
            {
                "name": "40",
                "status": false
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 6,
        "colorName": "desert",
        "materialId": 5,
        "materialName": "nubuck",
        "categoryId": 4,
        "categoryName": "sneakers",
        "modelId": 21,
        "modelName": "yucca m"
    },
    {
        "id": 93,
        "picture": "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        "label": null,
        "name": "Ace Boheme | Taupe Ankle Boots",
        "price": 180,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 16,
        "modelName": "ace"
    },
    {
        "id": 94,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/51/62/60/nubikk-ace-botan-23s-taupe-suede_2_480x480.jpg",
        "label": "New",
        "name": "Ace Botan | Taupe Boots",
        "price": 200,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 16,
        "modelName": "ace"
    },
    {
        "id": 95,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/0b/a5/fc/2020-02-07-Nubikk11000_480x480.jpg",
        "label": null,
        "name": "Alex Gilly | Taupe Boots",
        "price": 280,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 15,
        "modelName": "alex"
    },
    {
        "id": 96,
        "picture": "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        "label": "New",
        "name": "Gigi Melba | Taupe Boots",
        "price": 280,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": false
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 9,
        "modelName": "gigi"
    },
    {
        "id": 97,
        "picture": "https://cdn.dutchdrops.com/nubikk/media/image/94/49/a5/nubikk-holly-dana-taupe-suede_1tbNduWeusNMzM_480x480.jpg",
        "label": null,
        "name": "Holly Dana | Taupe Boots",
        "price": 190,
        "sizes": [
            {
                "name": "36",
                "status": false
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 17,
        "modelName": "holly"
    },
    {
        "id": 98,
        "picture": "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        "label": "New",
        "name": "Romee Moc | Taupe Ankle Boots",
        "price": 180,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": true
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": true
            },
            {
                "name": "42",
                "status": true
            }
        ],
        "sex": "women",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 13,
        "modelName": "romee"
    },
    {
        "id": 99,
        "picture": "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        "label": null,
        "name": "Romee Rose | Taupe Boots",
        "price": 180,
        "sizes": [
            {
                "name": "36",
                "status": true
            },
            {
                "name": "37",
                "status": true
            },
            {
                "name": "38",
                "status": true
            },
            {
                "name": "39",
                "status": false
            },
            {
                "name": "40",
                "status": true
            },
            {
                "name": "41",
                "status": false
            },
            {
                "name": "42",
                "status": false
            }
        ],
        "sex": "women",
        "colorId": 4,
        "colorName": "taupe",
        "materialId": 4,
        "materialName": "suede",
        "categoryId": 2,
        "categoryName": "boots",
        "modelId": 13,
        "modelName": "romee"
    }
])


// /{men}/{category}/
seedDataRouter.post('/', (req, res) => {
    Product.insertMany(INIT_PRODUCTS())
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

module.exports = seedDataRouter;

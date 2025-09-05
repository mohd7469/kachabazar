/*
const products = [
  {
    prices: {
      price: 450,
      originalPrice: 450,
      discount: 0,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
    ],
    image: [
      "https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-deep-ash-920x920.webp",
      "https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-turkish-blue-920x920.webp",
      "https://res.cloudinary.com/ahossain/image/upload/v1681478890/product/CMTHP-COR12-black-920x920.webp",
      "https://res.cloudinary.com/ahossain/image/upload/v1682243541/product/60c88fa9379ac-square.jpg",
      "https://res.cloudinary.com/ahossain/image/upload/v1682243541/product/6291b3a8d833d-square.jpg",
    ],
    tag: ['["premium-shirt","t-shirt","new-t-shirt"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        originalPrice: 450,
        price: 450,
        quantity: 550,
        discount: 0,
        productId: "644501ab7094a0000851284a-0",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-deep-ash-920x920.webp",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        originalPrice: 450,
        price: 450,
        quantity: 350,
        discount: 0,
        productId: "644501ab7094a0000851284a-1",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-turkish-blue-920x920.webp",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        originalPrice: 450,
        price: 450,
        quantity: 450,
        discount: 0,
        productId: "644501ab7094a0000851284a-2",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1681478890/product/CMTHP-COR12-black-920x920.webp",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        originalPrice: 450,
        price: 450,
        quantity: 550,
        discount: 0,
        productId: "644501ab7094a0000851284a-3",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1682243541/product/60c88fa9379ac-square.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        originalPrice: 450,
        price: 450,
        quantity: 567,
        discount: 0,
        productId: "644501ab7094a0000851284a-4",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1682243541/product/6291b3a8d833d-square.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        originalPrice: 450,
        price: 450,
        quantity: 650,
        discount: 0,
        productId: "644501ab7094a0000851284a-5",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-turkish-blue-920x920.webp",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        originalPrice: 450,
        price: 450,
        quantity: 750,
        discount: 0,
        productId: "644501ab7094a0000851284a-6",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1681478890/product/CMTHP-COR12-black-920x920.webp",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        originalPrice: 450,
        price: 450,
        quantity: 855,
        discount: 0,
        productId: "644501ab7094a0000851284a-7",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1682243541/product/60c88fa9379ac-square.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        originalPrice: 450,
        price: 450,
        quantity: 250,
        discount: 0,
        productId: "644501ab7094a0000851284a-8",
        barcode: "",
        sku: "",
        image:
          "https://res.cloudinary.com/ahossain/image/upload/v1682243541/product/6291b3a8d833d-square.jpg",
      },
    ],
    status: "show",
    _id: "644501ab7094a0000851284b",
    productId: "644501ab7094a0000851284a",
    sku: "",
    barcode: "",
    title: {
      en: "Premium T-Shirt",
    },
    description: {
      en: "A T-shirt (also spelled tee-shirt or tee shirt), or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
    },
    slug: "premium-t-shirt",
    category: {
      _id: "632ab2b64d87ff2494210aa7",
      name: {
        en: "Men",
      },
    },
    stock: 4972,
    isCombination: true,
    createdAt: "2023-04-23T10:00:11.651Z",
    updatedAt: "2023-04-23T10:01:11.102Z",
    sales: 16,
  },
  {
    prices: {
      price: 160,
      originalPrice: 174.97,
      discount: 14.969999999999999,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
    ],
    image: [
      "https://i.ibb.co/9g7vDQJ/Himalaya-Baby-Powder-100g.jpg",
      "https://i.ibb.co/9g7vDQJ/Himalaya-Baby-Powder-100g.jpg",
    ],
    tag: ['["baby care","baby accessories"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17d3",
    slug: "himalaya-powder",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282e1",
    title: {
      en: "Himalaya Powder",
    },
    description: {
      en: "Baby Products are products intended to be used on infants and category under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.",
    },
    category: {
      _id: "632ab2f04d87ff2494210ad0",
      name: {
        en: "Skin Care",
      },
    },
    stock: 5472,
    isCombination: false,
    __v: 1,
    createdAt: "2023-04-23T09:56:18.443Z",
    updatedAt: "2023-04-23T09:56:57.740Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 112.72,
      price: 112.72,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/ZRynchJY/Green-Leaf-Lettuce-each.jpg"],
    tag: ['["lettuce","fresh vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17d2",
    slug: "green-leaf-lettuce",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Green Leaf Lettuce",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 463,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 3,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 7.07,
      price: 7.07,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/Z5yQ47YB/Rainbow-Chard-Package-per-lb.jpg",
      "https://i.postimg.cc/Z5yQ47YB/Rainbow-Chard-Package-per-lb.jpg",
      "https://i.postimg.cc/Z5yQ47YB/Rainbow-Chard-Package-per-lb.jpg",
    ],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17d1",
    slug: "rainbow-chard",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Rainbow Chard",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 472,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 6,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 48.12,
      price: 48.12,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/MTPyNwQC/Clementine-5ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17d0",
    slug: "clementine",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Clementine",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 451,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 10,
  },
  {
    prices: {
      price: 90,
      originalPrice: 106.06,
      discount: 16.060000000000002,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/ryxzRchQ/Kale-Sprouts-3oz.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17cf",
    slug: "kale-sprouts",
    sku: "",
    barcode: "",
    productId: "644500c2839a5e0c2f5c17cf",
    title: {
      en: "Kale Sprouts",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 299,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:57:05.679Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 90.85,
      price: 90.85,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/qRpDcpsy/Rainbow-Peppers-4ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17ce",
    slug: "rainbow-peppers",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Rainbow Peppers",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 412,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 211.96,
      price: 211.96,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/L8L3XGcP/Blackberries-1-25-qt.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17cd",
    slug: "blueberry",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Blueberry",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 201,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 98.03,
      price: 98.03,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg",
      "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg",
      "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg",
    ],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17cc",
    slug: "calabaza-squash",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Calabaza Squash",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 582,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 12,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 193.26,
      price: 193.26,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/GhRtkNVr/Lettuce-1lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17cb",
    slug: "lettuce",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Lettuce",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 369,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 13,
  },
  {
    prices: {
      price: 45,
      originalPrice: 58.66,
      discount: 13.659999999999997,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/5y7rNDFv/Radicchio-12ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17ca",
    slug: "radicchio",
    sku: "",
    barcode: "",
    productId: "644500c2839a5e0c2f5c17ca",
    title: {
      en: "Radicchio",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 80,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:57:17.165Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 134.63,
      price: 134.63,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/wvzZWXpt/Parsley-each.jpgg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c9",
    slug: "parsley",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Parsley",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 172,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      price: 140,
      originalPrice: 156.95,
      discount: 16.94999999999999,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/NFXkHVKZ/Strawberries-9-25oz.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c8",
    slug: "strawberrie",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c961a",
    title: {
      en: "Strawberrie",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 423,
    isCombination: false,
    __v: 2,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:57:34.897Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 139.15,
      price: 139.15,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/vHwg0D1J/Cauliflower-1-35lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c7",
    slug: "cauliflower",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Cauliflower",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 224,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 19.57,
      price: 19.57,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/9FN3WwGS/Organic-Purple-Cauliflower-1lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c6",
    slug: "organic-purple-cauliflower",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Purple Cauliflower",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 29,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 71.18,
      price: 71.18,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/cJL8fjK6/Ahold-Acorn-Squash-1ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c5",
    slug: "ahold-acorn-squash",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ahold Acorn Squash",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 767,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 247.39,
      price: 247.39,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/d3r7qcfN/Bok-Choy-Cabbage-per-lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 247.39,
        originalPrice: "247.39",
        quantity: 99,
        discount: "0.00",
        productId: "63f3484bd3639309840c9616-0",
        barcode: "",
        image: "https://i.postimg.cc/d3r7qcfN/Bok-Choy-Cabbage-per-lb.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 247.39,
        originalPrice: "247.39",
        quantity: 99,
        discount: "0.00",
        productId: "63f3484bd3639309840c9616-1",
        barcode: "",
        image: "https://i.postimg.cc/d3r7qcfN/Bok-Choy-Cabbage-per-lb.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 247.39,
        originalPrice: "247.39",
        quantity: 99,
        discount: "0.00",
        productId: "63f3484bd3639309840c9616-2",
        barcode: "",
        image: "https://i.postimg.cc/d3r7qcfN/Bok-Choy-Cabbage-per-lb.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c4",
    slug: "bok-choy-cabbage",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c9616",
    title: {
      en: "Bok Choy Cabbage",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 297,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 189.89,
      price: 189.89,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 189.89,
        originalPrice: "189.89",
        quantity: 434,
        discount: "0.00",
        productId: "63f3484bd3639309840c9615-0",
        barcode: "",
        image: "https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 189.89,
        originalPrice: "189.89",
        quantity: 434,
        discount: "0.00",
        productId: "63f3484bd3639309840c9615-1",
        barcode: "",
        image: "https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 189.89,
        originalPrice: "189.89",
        quantity: 434,
        discount: "0.00",
        productId: "63f3484bd3639309840c9615-2",
        barcode: "",
        image: "https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c3",
    slug: "strawberries-package",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c9615",
    title: {
      en: "Strawberries Package",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 1302,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 157,
      price: 157,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/N0C2D4TD/Aloe-Vera-Leaf-each.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c2",
    slug: "aloe-vera-leaf",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aloe Vera Leaf",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 14,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      price: 30,
      originalPrice: 46.34,
      discount: 16.340000000000003,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/8Ck40tYr/Pineapple-1-5lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c1",
    slug: "pineapple-imported",
    sku: "",
    barcode: "",
    productId: "644500c2839a5e0c2f5c17c1",
    title: {
      en: "Pineapple Imported",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 505,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:57:45.926Z",
    sales: 5,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 224.85,
      price: 224.85,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/3w03MCVn/Organic-Broccoli-10oz.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17c0",
    slug: "organic-broccoli",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Broccoli",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 211,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 106.49,
      price: 106.49,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/DZdkFCgd/Organic-Pinkerton-Avocado-each.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17bf",
    slug: "organic-pinkerton-avocado",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Pinkerton Avocado",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 258,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 6,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 15.06,
      price: 15.06,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/W1CP7qzr/Organic-Kale-8oz.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17be",
    slug: "organic-kale",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Kale",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 37,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 80.97,
      price: 80.97,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/tCsSNSxS/Yellow-Sweet-Corn-Bag-each.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17bd",
    slug: "yellow-sweet-corn",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Yellow Sweet Corn",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 776,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 7,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 94.12,
      price: 94.12,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-0",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-1",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-2",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-3",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-4",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-5",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-6",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-7",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        price: 94.12,
        originalPrice: "94.12",
        quantity: 368,
        discount: "0.00",
        productId: "63f3484bd3639309840c960e-8",
        barcode: "",
        image: "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c17bc",
    slug: "green-cauliflower",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c960e",
    title: {
      en: "Green Cauliflower",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 3312,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 6,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 65.22,
      price: 65.22,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/htfBx1Dc/Organic-Greens-Red-Kale-per-lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17bb",
    slug: "organic-greens-red-kale",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Greens Red Kale",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 428,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 142.4,
      price: 142.4,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/rmScsy84/Organic-Green-Cauliflower-1lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17ba",
    slug: "organic-green-cauliflower",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Green Cauliflower",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 192,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 3,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 175.32,
      price: 175.32,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/RZDvbbsW/Organic-Ginger-Root-per-lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b9",
    slug: "organic-ginger-root",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Ginger Root",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 418,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      price: 150,
      originalPrice: 168.23,
      discount: 18.22999999999999,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/SNmQX9Yx/Organic-Baby-Carrot-1oz.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b8",
    slug: "organic-baby-carrot",
    sku: "",
    barcode: "",
    productId: "644500c2839a5e0c2f5c17b8",
    title: {
      en: "Organic Baby Carrot",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 257,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:58:19.450Z",
    sales: 11,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 15.56,
      price: 15.56,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/QCJX48wD/Orange-Cherry-Tomato-5qt.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b7",
    slug: "organic-cherry-tomato",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Cherry Tomato",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 683,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 10,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 116.45,
      price: 116.45,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/tJjqNZrD/Orange-Bell-Pepper-22ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b6",
    slug: "organic-bell-pepper",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Organic Bell Pepper",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 345,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 67.5,
      price: 67.5,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/0jnsGtK2/Old-Oak-Farm-Small-Potatoes-each.jpg",
    ],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        price: 67.5,
        originalPrice: "67.5",
        quantity: 338,
        discount: "0.00",
        productId: "63f3484bd3639309840c9607-0",
        barcode: "",
        image:
          "https://i.postimg.cc/0jnsGtK2/Old-Oak-Farm-Small-Potatoes-each.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        price: 67.5,
        originalPrice: "67.5",
        quantity: 338,
        discount: "0.00",
        productId: "63f3484bd3639309840c9607-1",
        barcode: "",
        image:
          "https://i.postimg.cc/0jnsGtK2/Old-Oak-Farm-Small-Potatoes-each.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        price: 67.5,
        originalPrice: "67.5",
        quantity: 338,
        discount: "0.00",
        productId: "63f3484bd3639309840c9607-2",
        barcode: "",
        image:
          "https://i.postimg.cc/0jnsGtK2/Old-Oak-Farm-Small-Potatoes-each.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b5",
    slug: "potatoes",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c9607",
    title: {
      en: "Potatoes",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 1014,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 30.78,
      price: 30.78,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/251Skfbd/Mint-6-5ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b4",
    slug: "mint",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Mint",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 731,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:56:18.442Z",
    sales: 15,
  },
  {
    prices: {
      price: 55,
      originalPrice: 67.54,
      discount: 12.540000000000006,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/2Sc5N568/Mini-Pumpkin-Box-each.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b3",
    slug: "mini-pumpkin",
    sku: "",
    barcode: "",
    productId: "644500c2839a5e0c2f5c17b3",
    title: {
      en: "Mini Pumpkin",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 53,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.442Z",
    updatedAt: "2023-04-23T09:58:08.453Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 185.95,
      price: 185.95,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/kgkkSrYv/Organic-White-Radish-each.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b2",
    slug: "organic-white-radish",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c9604",
    title: {
      en: "Organic White Radish",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 302,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 55.91,
      price: 55.91,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/pXBTkCMj/Lacinato-Dinosaur-Kale-Box-per-lb.jpg",
    ],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b1",
    slug: "lacinato-dinosaur-kale",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Lacinato Dinosaur Kale",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 146,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      price: 80,
      originalPrice: 95.57,
      discount: 15.569999999999993,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/prbTc1df/Iglotex-Cauliflower-Florets.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17b0",
    slug: "iglotex-cauliflower",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c9602",
    title: {
      en: "Iglotex Cauliflower",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 61,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:58:00.092Z",
  },
  {
    prices: {
      price: 140,
      originalPrice: 157.58,
      discount: 17.580000000000013,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/0ycz5ftv/French-Green-Beans-16ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17af",
    slug: "french-green-beans",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c9601",
    title: {
      en: "French Green Beans",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 819,
    isCombination: false,
    __v: 2,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:58:41.045Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 26.23,
      price: 26.23,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/RZM3z8LG/Fennel-Bulb-Package-each.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17ae",
    slug: "fennel-bulb",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Fennel Bulb",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 501,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 156.25,
      price: 156.25,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/hP8J6gTf/Escarole-1ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17ad",
    slug: "escarole",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c95ff",
    title: {
      en: "Escarole",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 221,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
    sales: 2,
  },
  {
    prices: {
      price: 30,
      originalPrice: 43.12,
      discount: 13.119999999999997,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/ZYdvP6qP/Chinese-Broccoli-Gai-Lan-2lb.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17ac",
    slug: "chinese-broccoli",
    sku: "",
    barcode: "",
    productId: "644500c2839a5e0c2f5c17ac",
    title: {
      en: "Chinese Broccoli",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 677,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:58:27.685Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 159.26,
      price: 159.26,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/50ZYd2sF/Bicolor-Sweet-Corn-43ct.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17ab",
    slug: "bicolor-sweet-corn",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Bicolor Sweet Corn",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 264,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 32.71,
      price: 32.71,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/RF36DHLB/Asparagus-15oz.jpg"],
    tag: ['["fresh fruits","fruits","vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17aa",
    slug: "asparagus",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Asparagus",
    },
    description: {
      en: "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 666,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 178.39,
      price: 178.39,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/Y2P6xpkg/Haitian-Mango-8ct.jpg"],
    tag: ['["fresh fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a9",
    slug: "haitian-mango",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Haitian Mangoe",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 658,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 226.98,
      price: 226.98,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/htWVHpXt/Fresh-Dates-Package-10oz.jpg"],
    tag: ['["fresh fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a8",
    slug: "fresh-dates",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Fresh Dates",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 591,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
    sales: 6,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 140.32,
      price: 140.32,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/RhWczY1N/Cranberries-Package-9-5-oz.jpg"],
    tag: ['["fresh fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a7",
    slug: "cranberries",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Cranberries",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 276,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 66.52,
      price: 66.52,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/9Mn71p3V/Mandarin-Clementine-22lb.jpg"],
    tag: ['["fresh fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a6",
    slug: "mandarin-clementine",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Mandarin Clementine",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 246,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 93.5,
      price: 93.5,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/Yq43cv8b/avocado-juice-fruit-vegetable.jpg"],
    tag: ['["fresh fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a5",
    slug: "avocado-juice-fruit",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Avocado juice Fruit",
    },
    description: {
      en: "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    },
    category: {
      _id: "632aca454d87ff2494210c00",
      name: {
        en: "Fresh Fruits",
      },
    },
    stock: 176,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 171.02,
      price: 171.02,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/rmbhB56C/Golden-Garden-Love-Plum-220g.jpg"],
    tag: ['["dates","dry fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a4",
    slug: "golden-garden-love-plum",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Golden Garden Love Plum",
    },
    description: {
      en: "Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. ... Nearly half of the dried fruits sold are raisins, followed by dates, prunes, figs, apricots, peaches, apples, and pears.",
    },
    category: {
      _id: "632aca3d4d87ff2494210bf8",
      name: {
        en: "Dry Fruits",
      },
    },
    stock: 125,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 152.57,
      price: 152.57,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/jjM3hGZ1/Golden-Garden-Blueberry-Plum-220g.jpg",
    ],
    tag: ['["dates","dry fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a3",
    slug: "golden-garden-plueberry-plum",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Golden Garden Blueberry Plum",
    },
    description: {
      en: "Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. ... Nearly half of the dried fruits sold are raisins, followed by dates, prunes, figs, apricots, peaches, apples, and pears.",
    },
    category: {
      _id: "632aca3d4d87ff2494210bf8",
      name: {
        en: "Dry Fruits",
      },
    },
    stock: 437,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 128.87,
      price: 128.87,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: ["https://i.postimg.cc/Kz4qpJW8/Dry-Fig-Loose-Kg-1-Kg.jpg"],
    tag: ['["dates","dry fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a2",
    slug: "dry-fig-loose",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dry Fig Loose",
    },
    description: {
      en: "Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. ... Nearly half of the dried fruits sold are raisins, followed by dates, prunes, figs, apricots, peaches, apples, and pears.",
    },
    category: {
      _id: "632aca3d4d87ff2494210bf8",
      name: {
        en: "Dry Fruits",
      },
    },
    stock: 369,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 102.33,
      price: 102.33,
    },
    categories: [
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
    ],
    image: ["https://i.postimg.cc/25kXhzFv/Dates-Khejur-Lulu-Loose-Kg.jpg"],
    tag: ['["dates","dry fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a1",
    slug: "dates-loose",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dates Loose",
    },
    description: {
      en: "Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. ... Nearly half of the dried fruits sold are raisins, followed by dates, prunes, figs, apricots, peaches, apples, and pears.",
    },
    category: {
      _id: "632aca3d4d87ff2494210bf8",
      name: {
        en: "Dry Fruits",
      },
    },
    stock: 138,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
    sales: 7,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 113.54,
      price: 113.54,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
      },
      {
        _id: "632aca594d87ff2494210c10",
        name: {
          en: "Orange",
        },
      },
      {
        _id: "62d2bbd22e63b40520194f1b",
        name: {
          en: "Apple",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/CxHQRZDS/Dates-Iranian-Maryam-Loose-Kg-1-Kg.jpg",
    ],
    tag: ['["dates","dry fruits","fruits"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c17a0",
    slug: "dates-iranian-loose",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dates Iranian Loose",
    },
    description: {
      en: "Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. ... Nearly half of the dried fruits sold are raisins, followed by dates, prunes, figs, apricots, peaches, apples, and pears.",
    },
    category: {
      _id: "632aca3d4d87ff2494210bf8",
      name: {
        en: "Dry Fruits",
      },
    },
    stock: 181,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 158.45,
      price: 158.45,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/V636DsMm/paka-pape-50-gm-1-kg.webp"],
    tag: ['["organic food","guava-jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c179f",
    slug: "paka-pape",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Paka Pape",
    },
    description: {
      en: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 191,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      price: 10,
      originalPrice: 17.67,
      discount: 7.670000000000002,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/yNpW3y8J/komola-Orange-imported-50-gm-1-kg.webp",
    ],
    tag: ['["organic food","guava-jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c179e",
    slug: "Orange-imported",
    sku: "",
    barcode: "",
    productId: "644500c2839a5e0c2f5c179e",
    title: {
      en: "Orange Imported",
    },
    description: {
      en: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 186,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:59:05.805Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 171.22,
      price: 171.22,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/y6MgTjXc/china-fuji-apple-50-gm-1-kg.webp"],
    tag: ['["organic food","guava-jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c179d",
    slug: "china-fuji-apple",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "China Fuji apple",
    },
    description: {
      en: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 537,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 48.06,
      price: 48.06,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/j5W2HnDM/Gerber-Organic.jpg"],
    tag: ['["organic food","guava-jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c179c",
    slug: "gerber-organic",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Gerber-Organic",
    },
    description: {
      en: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 724,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 6.39,
      price: 6.39,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/2jbLvMvC/ahmed-sugar-free-Orange-jelly-375-gm.webp",
    ],
    tag: ['["organic food","guava-jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c179b",
    slug: "sugar-free-Orange-jelly",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Sugar Free Orange Jelly",
    },
    description: {
      en: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 653,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      price: 50,
      originalPrice: 61,
      discount: 11,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/9QpDCh3Y/jambura-pomelo-1-pcs.webp"],
    tag: ['["organic food","guava-jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c179a",
    slug: "pomelo",
    sku: "",
    barcode: "",
    productId: "644500c2839a5e0c2f5c179a",
    title: {
      en: "Pomelo",
    },
    description: {
      en: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 1,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:58:53.878Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 27.55,
      price: 27.55,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/pXK9cjq7/anaros-pineapple-1-pcs.webp"],
    tag: ['["organic food","guava-jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1799",
    slug: "pineapple",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Pineapple",
    },
    description: {
      en: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 182,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 62.5,
      price: 62.5,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/hhRB7fmQ/ahmed-sugar-free-guava-jelly-375-gm.webp",
    ],
    tag: ['["organic food","guava-jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1798",
    slug: "sugar-free-guava-jelly",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697281e6",
    title: {
      en: "Sugar Free Guava Jelly",
    },
    description: {
      en: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 459,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 3.47,
      price: 3.47,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1797",
    slug: "wild-king-salmon-steak",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Wild King Salmon Steak",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 760,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 221.96,
      price: 221.96,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1796",
    slug: "canada-salmon",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Canada Salmon",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 577,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 10.36,
      price: 10.36,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1795",
    slug: "atlantic-salmon",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Atlantic Salmon",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 734,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
    sales: 10,
  },
  {
    prices: {
      discount: 0,
      originalPrice: 57.46,
      price: 57.46,
    },
    categories: [
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1794",
    slug: "salmon-filet-portion",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Salmon Filet Portion",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 163,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 52.34,
      price: 52.34,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1793",
    slug: "ling-cod-steak",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ling Cod Steak",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 567,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 104.45,
      price: 104.45,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1792",
    slug: "peeled-deveined-shrimp",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Peeled Deveined Shrimp",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 303,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 113.07,
      price: 113.07,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1791",
    slug: "chilean-sea-bass",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Chilean Sea Bass",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 676,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 236.38,
      price: 236.38,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1790",
    slug: "beef-stew",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Beef Stew",
    },
    description: {
      en: "Beef, flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled. The fat is smooth, creamy white, and well distributed.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 41,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 135.4,
      price: 135.4,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c178f",
    slug: "ground-turkey",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ground Turkey",
    },
    description: {
      en: "Beef, flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled. The fat is smooth, creamy white, and well distributed.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 265,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 160.83,
      price: 160.83,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c178e",
    slug: "duck-meat",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Duck meat",
    },
    description: {
      en: "Beef, flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled. The fat is smooth, creamy white, and well distributed.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 301,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 222.63,
      price: 222.63,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c178d",
    slug: "boneless-beef",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Boneless Beef",
    },
    description: {
      en: "Beef, flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled. The fat is smooth, creamy white, and well distributed.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 159,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 231.61,
      price: 231.61,
    },
    categories: [
      {
        _id: "632aca6d4d87ff2494210c24",
        name: {
          en: "Fish & Meat",
        },
      },
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c178c",
    slug: "bone-in-chuck",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697281f2",
    title: {
      en: "Bone In Chuck",
    },
    description: {
      en: "Beef, flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled. The fat is smooth, creamy white, and well distributed.",
    },
    category: {
      _id: "632aca7e4d87ff2494210c34",
      name: {
        en: "Fish",
      },
    },
    stock: 387,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 215.3,
      price: 215.3,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0504d87ff24942109d7",
        name: {
          en: "Coffee",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/DwWJ8cTk/Marley-coffee-coffee-Whole-Beans-Medium-Dark-Espresso-8-oz.jpg",
    ],
    tag: ['["drinks","coffee"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c178b",
    slug: "marley-coffee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Marley coffee",
    },
    description: {
      en: "coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ... coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0504d87ff24942109d7",
      name: {
        en: "Coffee",
      },
    },
    stock: 718,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.441Z",
    updatedAt: "2023-04-23T09:56:18.441Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 35.75,
      price: 35.75,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0504d87ff24942109d7",
        name: {
          en: "Coffee",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/T29WSw9S/Cafe-Escapes-Caf-Caramel-K-Cup-Pods-Coffe-0-5-oz.jpg",
    ],
    tag: ['["drinks","coffee"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        price: 35.75,
        originalPrice: "35.75",
        quantity: 157,
        discount: "0.00",
        productId: "63f3484bd3639309840c95dc-0",
        barcode: "",
        image:
          "https://i.postimg.cc/T29WSw9S/Cafe-Escapes-Caf-Caramel-K-Cup-Pods-Coffe-0-5-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        price: 35.75,
        originalPrice: "35.75",
        quantity: 157,
        discount: "0.00",
        productId: "63f3484bd3639309840c95dc-1",
        barcode: "",
        image:
          "https://i.postimg.cc/T29WSw9S/Cafe-Escapes-Caf-Caramel-K-Cup-Pods-Coffe-0-5-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        price: 35.75,
        originalPrice: "35.75",
        quantity: 157,
        discount: "0.00",
        productId: "63f3484bd3639309840c95dc-2",
        barcode: "",
        image:
          "https://i.postimg.cc/T29WSw9S/Cafe-Escapes-Caf-Caramel-K-Cup-Pods-Coffe-0-5-oz.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c178a",
    slug: "cafe-escapes-coffee",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c95dc",
    title: {
      en: "Cafe Escapes coffee",
    },
    description: {
      en: "coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ... coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0504d87ff24942109d7",
      name: {
        en: "Coffee",
      },
    },
    stock: 471,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 118.81,
      price: 118.81,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0504d87ff24942109d7",
        name: {
          en: "Coffee",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
    ],
    tag: ['["drinks","coffee"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-0",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-1",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-2",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-3",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-4",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-5",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-6",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-7",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 118.81,
        originalPrice: "118.81",
        quantity: 577,
        discount: "0.00",
        productId: "63f3484bd3639309840c95db-8",
        barcode: "",
        image:
          "https://i.postimg.cc/ZKsvbMXx/Caffe-Kimbo-Aroma-Espresso-8-8-oz.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c1789",
    slug: "caffe-kimbo-coffee",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c95db",
    title: {
      en: "Caffe Kimbo coffee",
    },
    description: {
      en: "coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ... coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0504d87ff24942109d7",
      name: {
        en: "Coffee",
      },
    },
    stock: 5193,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 33.67,
      price: 33.67,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0504d87ff24942109d7",
        name: {
          en: "Coffee",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/9fZDBF0L/Just-coffee-Coop-Organic-Honduran-honey-Processed-coffee-12oz.jpg",
    ],
    tag: ['["drinks","coffee"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1788",
    slug: "just-coffee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Just coffee",
    },
    description: {
      en: "coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ... coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0504d87ff24942109d7",
      name: {
        en: "Coffee",
      },
    },
    stock: 382,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 75.59,
      price: 75.59,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0504d87ff24942109d7",
        name: {
          en: "Coffee",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/hPt7qBZG/Caffe-Perruci-Lungo-Dolce-Single-Serve-coffee-Pack-10-ct.jpg",
    ],
    tag: ['["drinks","coffee"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1787",
    slug: "caffe-perruci-coffee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Caffe Perruci coffee",
    },
    description: {
      en: "coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ... coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0504d87ff24942109d7",
      name: {
        en: "Coffee",
      },
    },
    stock: 622,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 97.21,
      price: 97.21,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0454d87ff24942109cc",
        name: {
          en: "Energy Drinks",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/7YZXtjg3/Positive-Energy-Energy-Drink-Organic-Coconut-water-12-oz.jpg",
    ],
    tag: ['["drinks","energy-drinks"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1786",
    slug: "positive-energy-drink",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Positive Energy Drink",
    },
    description: {
      en: "Energy drink, any beverage that contains high levels of a stimulant ingredient, usually caffeine, as well as sugar and often supplements, such as vitamins or carnitine, and that is promoted as a product capable of enhancing mental alertness and physical performance.",
    },
    category: {
      _id: "632ab0454d87ff24942109cc",
      name: {
        en: "Energy Drinks",
      },
    },
    stock: 77,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 205.69,
      price: 205.69,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0454d87ff24942109cc",
        name: {
          en: "Energy Drinks",
        },
      },
    ],
    image: ["https://i.postimg.cc/MHd5KY8f/Nerd-Focus-12oz.jpg"],
    tag: ['["drinks","energy-drinks"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 205.69,
        originalPrice: "205.69",
        quantity: 119,
        discount: "0.00",
        productId: "63f3484bd3639309840c95d7-0",
        barcode: "",
        image: "https://i.postimg.cc/MHd5KY8f/Nerd-Focus-12oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 205.69,
        originalPrice: "205.69",
        quantity: 119,
        discount: "0.00",
        productId: "63f3484bd3639309840c95d7-1",
        barcode: "",
        image: "https://i.postimg.cc/MHd5KY8f/Nerd-Focus-12oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 205.69,
        originalPrice: "205.69",
        quantity: 119,
        discount: "0.00",
        productId: "63f3484bd3639309840c95d7-2",
        barcode: "",
        image: "https://i.postimg.cc/MHd5KY8f/Nerd-Focus-12oz.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 205.69,
        originalPrice: "205.69",
        quantity: 119,
        discount: "0.00",
        productId: "63f3484bd3639309840c95d7-3",
        barcode: "",
        image: "https://i.postimg.cc/MHd5KY8f/Nerd-Focus-12oz.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c1785",
    slug: "nerd-energy-drink",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c95d7",
    title: {
      en: "Nerd Energy Drink",
    },
    description: {
      en: "Energy drink, any beverage that contains high levels of a stimulant ingredient, usually caffeine, as well as sugar and often supplements, such as vitamins or carnitine, and that is promoted as a product capable of enhancing mental alertness and physical performance.",
    },
    category: {
      _id: "632ab0454d87ff24942109cc",
      name: {
        en: "Energy Drinks",
      },
    },
    stock: 476,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 36.93,
      price: 36.93,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0454d87ff24942109cc",
        name: {
          en: "Energy Drinks",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/RCRXRvnC/Monster-Energy-Rehab-Orangeade-15-5-fl-oz.jpg",
    ],
    tag: ['["drinks","energy-drinks"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1784",
    slug: "monster-energy-drink",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Monster Energy Drink",
    },
    description: {
      en: "Energy drink, any beverage that contains high levels of a stimulant ingredient, usually caffeine, as well as sugar and often supplements, such as vitamins or carnitine, and that is promoted as a product capable of enhancing mental alertness and physical performance.",
    },
    category: {
      _id: "632ab0454d87ff24942109cc",
      name: {
        en: "Energy Drinks",
      },
    },
    stock: 145,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 170.61,
      price: 170.61,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0454d87ff24942109cc",
        name: {
          en: "Energy Drinks",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/rprfCW57/BING-Beverage-Made-with-Blackberry-juice-12-fl-oz.jpg",
    ],
    tag: ['["drinks","energy-drinks"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1783",
    slug: "bing-energy-drink",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "BING Energy Drink",
    },
    description: {
      en: "Energy drink, any beverage that contains high levels of a stimulant ingredient, usually caffeine, as well as sugar and often supplements, such as vitamins or carnitine, and that is promoted as a product capable of enhancing mental alertness and physical performance.",
    },
    category: {
      _id: "632ab0454d87ff24942109cc",
      name: {
        en: "Energy Drinks",
      },
    },
    stock: 237,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 130.42,
      price: 130.42,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0454d87ff24942109cc",
        name: {
          en: "Energy Drinks",
        },
      },
    ],
    image: ["https://i.postimg.cc/rs8gkP7L/go-grid-energy.jpg"],
    tag: ['["drinks","energy-drinks"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1782",
    slug: "go-grid-energy-drink",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697281fc",
    title: {
      en: "Go Grid Energy Drink",
    },
    description: {
      en: "Energy drink, any beverage that contains high levels of a stimulant ingredient, usually caffeine, as well as sugar and often supplements, such as vitamins or carnitine, and that is promoted as a product capable of enhancing mental alertness and physical performance.",
    },
    category: {
      _id: "632ab0454d87ff24942109cc",
      name: {
        en: "Energy Drinks",
      },
    },
    stock: 546,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 126.25,
      price: 126.25,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0564d87ff24942109df",
        name: {
          en: "Juice",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/J4R7f5nc/Robinsons-Pink-Lemonade-juice-Drink-10-fl-oz.jpg",
    ],
    tag: ['["juice","organic"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1781",
    slug: "robinsons-pink-lemonade",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Robinsons Pink Lemonade",
    },
    description: {
      en: "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.",
    },
    category: {
      _id: "632ab0564d87ff24942109df",
      name: {
        en: "Juice",
      },
    },
    stock: 313,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 78.71,
      price: 78.71,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0564d87ff24942109df",
        name: {
          en: "Juice",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/yYn6s33q/Nature-s-Nectar-Strawberry-Lime-Agua-Fresca-33-floz.jpg",
    ],
    tag: ['["juice","organic"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1780",
    slug: "strawberry-lime-juice",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Strawberry Lime juice",
    },
    description: {
      en: "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.",
    },
    category: {
      _id: "632ab0564d87ff24942109df",
      name: {
        en: "Juice",
      },
    },
    stock: 338,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 155.19,
      price: 155.19,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0564d87ff24942109df",
        name: {
          en: "Juice",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/gcVktTY2/Musselman-s-Sparkling-Cider-750ml.jpg",
    ],
    tag: ['["juice","organic"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c177f",
    slug: "musselman-sparkling-cider",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Musselman Sparkling Cider",
    },
    description: {
      en: "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.",
    },
    category: {
      _id: "632ab0564d87ff24942109df",
      name: {
        en: "Juice",
      },
    },
    stock: 91,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 180.19,
      price: 180.19,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0564d87ff24942109df",
        name: {
          en: "Juice",
        },
      },
    ],
    image: ["https://i.postimg.cc/WzwNDh9k/Hood-Orange-juice-14-fl-oz.jpg"],
    tag: ['["juice","organic"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c177e",
    slug: "hood-Orange-juice",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Hood Orange juice",
    },
    description: {
      en: "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.",
    },
    category: {
      _id: "632ab0564d87ff24942109df",
      name: {
        en: "Juice",
      },
    },
    stock: 56,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 240.55,
      price: 240.55,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0564d87ff24942109df",
        name: {
          en: "Juice",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/wB1jWxBC/Evolution-Fresh-Orange-Cold-Pressed-Orange-juice-325-mol.jpg",
    ],
    tag: ['["juice","organic"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c177d",
    slug: "evolution-Orange-juice",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Evolution Orange juice",
    },
    description: {
      en: "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.",
    },
    category: {
      _id: "632ab0564d87ff24942109df",
      name: {
        en: "Juice",
      },
    },
    stock: 481,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 10.08,
      price: 10.08,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0664d87ff24942109ef",
        name: {
          en: "Tea",
        },
      },
    ],
    image: ["https://i.postimg.cc/xCbc7n94/VPK-Organic-Kapha-tea-16-ct.jpg"],
    tag: ['["juice","tea"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c177c",
    slug: "vpk-organic-kapha",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "VPK Organic Kapha",
    },
    description: {
      en: "tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia. After water, it is the most widely consumed drink in the world. ... tea has a stimulating effect in humans primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0664d87ff24942109ef",
      name: {
        en: "Tea",
      },
    },
    stock: 719,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 46.76,
      price: 46.76,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0664d87ff24942109ef",
        name: {
          en: "Tea",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/13JnVvWJ/Urban-Frgr-Organic-Calming-Herbal-tea-15-ct.jpg",
    ],
    tag: ['["juice","tea"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c177b",
    slug: "calming-herbal-tea",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Calming Herbal tea",
    },
    description: {
      en: "tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia. After water, it is the most widely consumed drink in the world. ... tea has a stimulating effect in humans primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0664d87ff24942109ef",
      name: {
        en: "Tea",
      },
    },
    stock: 398,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 142.05,
      price: 142.05,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0664d87ff24942109ef",
        name: {
          en: "Tea",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/bwzSv7RZ/Now-Slimming-Slender-Chai-tea-24-ct.jpg",
    ],
    tag: ['["juice","tea"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c177a",
    slug: "slimming-slender-tea",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Slimming Slender tea",
    },
    description: {
      en: "tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia. After water, it is the most widely consumed drink in the world. ... tea has a stimulating effect in humans primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0664d87ff24942109ef",
      name: {
        en: "Tea",
      },
    },
    stock: 157,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 234.94,
      price: 234.94,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0664d87ff24942109ef",
        name: {
          en: "Tea",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/KYW1JRhT/Mt-Rose-Herb-Nepalese-Black-tea-per-lb.jpg",
    ],
    tag: ['["juice","tea"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1779",
    slug: "mt-rose-herb-tea",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Mt Rose Herb tea",
    },
    description: {
      en: "tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia. After water, it is the most widely consumed drink in the world. ... tea has a stimulating effect in humans primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0664d87ff24942109ef",
      name: {
        en: "Tea",
      },
    },
    stock: 455,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 242.94,
      price: 242.94,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0664d87ff24942109ef",
        name: {
          en: "Tea",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/kXPt066F/Maharishi-Ayurveda-Organic-Pitta-tea-16-ct.jpg",
    ],
    tag: ['["juice","tea"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1778",
    slug: "organic-pitta-tea",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b69728206",
    title: {
      en: "Organic Pitta tea",
    },
    description: {
      en: "tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia. After water, it is the most widely consumed drink in the world. ... tea has a stimulating effect in humans primarily due to its caffeine content.",
    },
    category: {
      _id: "632ab0664d87ff24942109ef",
      name: {
        en: "Tea",
      },
    },
    stock: 522,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 91.74,
      price: 91.74,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0604d87ff24942109e7",
        name: {
          en: "Water",
        },
      },
    ],
    image: ["https://i.postimg.cc/P5QXCNqH/Alhambra-Purified-water-1-Lt.jpg"],
    tag: ['["drinks","water"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1777",
    slug: "alhambra-purified-water",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Alhambra Purified water",
    },
    description: {
      en: "water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. It is one of the most plentiful and essential of compounds. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances.",
    },
    category: {
      _id: "632ab0604d87ff24942109e7",
      name: {
        en: "Water",
      },
    },
    stock: 183,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 243.63,
      price: 243.63,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0604d87ff24942109e7",
        name: {
          en: "Water",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/VN7zFTMH/Deer-Park-Sport-Bottle-with-Flip-Cap-Natural-Spring-water-700ml.jpg",
    ],
    tag: ['["drinks","water"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1776",
    slug: "deer-park-water",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Deer Park water",
    },
    description: {
      en: "water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. It is one of the most plentiful and essential of compounds. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances.",
    },
    category: {
      _id: "632ab0604d87ff24942109e7",
      name: {
        en: "Water",
      },
    },
    stock: 670,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 228.57,
      price: 228.57,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0604d87ff24942109e7",
        name: {
          en: "Water",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/nrmZphW6/Food-Club-Original-Seltzer-water-33.jpg",
    ],
    tag: ['["drinks","water"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1775",
    slug: "food-club-water",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Food Club water",
    },
    description: {
      en: "water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. It is one of the most plentiful and essential of compounds. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances.",
    },
    category: {
      _id: "632ab0604d87ff24942109e7",
      name: {
        en: "Water",
      },
    },
    stock: 366,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 164.3,
      price: 164.3,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0604d87ff24942109e7",
        name: {
          en: "Water",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/DyqFNmLG/Fresh-Thyme-High-Alkaline-water-3-Lt.jpg",
    ],
    tag: ['["drinks","water"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1774",
    slug: "fresh-thyme-water",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Fresh-Thyme water",
    },
    description: {
      en: "water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. It is one of the most plentiful and essential of compounds. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances.",
    },
    category: {
      _id: "632ab0604d87ff24942109e7",
      name: {
        en: "Water",
      },
    },
    stock: 253,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 221.61,
      price: 221.61,
    },
    categories: [
      {
        _id: "632ab0334d87ff24942109c1",
        name: {
          en: "Drinks",
        },
      },
      {
        _id: "632ab0604d87ff24942109e7",
        name: {
          en: "Water",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/k4BqYcvM/Smeraldina-water-Natural-Artesian-16-9ml.jpg",
    ],
    tag: ['["drinks","water"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1773",
    slug: "smeraldina-water",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b6972820b",
    title: {
      en: "Smeraldina water",
    },
    description: {
      en: "water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. It is one of the most plentiful and essential of compounds. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances.",
    },
    category: {
      _id: "632ab0604d87ff24942109e7",
      name: {
        en: "Water",
      },
    },
    stock: 154,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 79.7,
      price: 79.7,
    },
    categories: [
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/63Mm1Pw8/Fresh-Wild-King-Salmon-Steak-1lb.jpg",
    ],
    tag: ['["seafood","fish"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1772",
    slug: "wild-king-salmon-steak",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Wild King Salmon Steak",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 152,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 116.68,
      price: 116.68,
    },
    categories: [
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/5tqG80Rq/Fresh-Whole-Canada-Salmon-25-5-oz.jpg",
    ],
    tag: ['["seafood","fish"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1771",
    slug: "canada-salmon",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Canada Salmon",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 138,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 15.08,
      price: 15.08,
    },
    categories: [
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/bvjWGb3w/Fresh-Whole-Atlantic-Salmon-Steaks-1lb.jpg",
    ],
    tag: ['["seafood","fish"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1770",
    slug: "atlantic-salmon",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Atlantic Salmon",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 473,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 249.14,
      price: 249.14,
    },
    categories: [
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/G3QLb33D/Black-Pearls-Salmon-Filet-Portion-6-oz.jpg",
    ],
    tag: ['["seafood","fish"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c176f",
    slug: "salmon-filet-portion",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Salmon Filet Portion",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 697,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 80.11,
      price: 80.11,
    },
    categories: [
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
    ],
    image: ["https://i.postimg.cc/cCVTpyzL/Ling-Cod-Steak-1lb.jpg"],
    tag: ['["seafood","fish"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c176e",
    slug: "ling-cod-steak",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ling Cod Steak",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 618,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 211.23,
      price: 211.23,
    },
    categories: [
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/RhVzWfCH/Cooked-Peeled-Deveined-Shrimp-2lb.jpg",
    ],
    tag: ['["seafood","fish"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c176d",
    slug: "peeled-deveined-shrimp",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Peeled Deveined Shrimp",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 243,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 57.85,
      price: 57.85,
    },
    categories: [
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
      },
    ],
    image: ["https://i.postimg.cc/xTjmhVRK/Ahi-Tuna-Steaks-per-lb.jpg"],
    tag: ['["seafood","fish"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c176c",
    slug: "chilean-sea-bass",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b69728212",
    title: {
      en: "Chilean Sea Bass",
    },
    description: {
      en: "A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.",
    },
    category: {
      _id: "632aca374d87ff2494210bf0",
      name: {
        en: "Fresh Vegetable",
      },
    },
    stock: 653,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 84.53,
      price: 84.53,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/zmh08z4/ACI-Pure-Sugar-1-Kg.jpg"],
    tag: ['["aci salt","spices-mixes"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c176b",
    slug: "aci-pure-sugar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "ACI Pure Sugar",
    },
    description: {
      en: "Spice mixes are blended spices or herbs. ... Blends such as chili powder, curry powder, herbes de Provence, garlic salt, and other seasoned salts are traditionally sold pre-made by grocers, and sometimes baking blends such as pumpkin pie spice are also available.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 206,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 54.68,
      price: 54.68,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/8sBDTg2/ACI-Pure-Salt-Jar-750gm.jpg"],
    tag: ['["aci salt","spices-mixes"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c176a",
    slug: "aci-pure-salt",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "ACI Pure Salt",
    },
    description: {
      en: "Spice mixes are blended spices or herbs. ... Blends such as chili powder, curry powder, herbes de Provence, garlic salt, and other seasoned salts are traditionally sold pre-made by grocers, and sometimes baking blends such as pumpkin pie spice are also available.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 515,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 93.97,
      price: 93.97,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca184d87ff2494210bd4",
        name: {
          en: "Flour",
        },
      },
    ],
    image: ["https://i.ibb.co/BVHFnLG/Fresh-Atta-2-Kg.jpg"],
    tag: ['["fresh flour","flour"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1769",
    slug: "fresh-flour",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b69728215",
    title: {
      en: "Fresh flour",
    },
    description: {
      en: "flour, finely ground cereal grains or other starchy portions of plants, used in various food products and as a basic ingredient of baked goods. flour made from wheat grains is the most satisfactory  for baked products that require spongy structure. ... The outer layers and internal structures of a kernel of wheat.",
    },
    category: {
      _id: "632aca184d87ff2494210bd4",
      name: {
        en: "Flour",
      },
    },
    stock: 545,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 135.56,
      price: 135.56,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca184d87ff2494210bd4",
        name: {
          en: "Flour",
        },
      },
    ],
    image: ["https://i.ibb.co/thC1gzg/ACI-Pure-Maida-1-Kg.jpg"],
    tag: ['["aci flour","flour"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1768",
    slug: "aci-pure-flour",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b69728216",
    title: {
      en: "ACI Pure flour",
    },
    description: {
      en: "flour, finely ground cereal grains or other starchy portions of plants, used in various food products and as a basic ingredient of baked goods. flour made from wheat grains is the most satisfactory  for baked products that require spongy structure. ... The outer layers and internal structures of a kernel of wheat.",
    },
    category: {
      _id: "632aca184d87ff2494210bd4",
      name: {
        en: "Flour",
      },
    },
    stock: 254,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 98.09,
      price: 98.09,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca184d87ff2494210bd4",
        name: {
          en: "Flour",
        },
      },
    ],
    image: ["https://i.ibb.co/ZVRVFTv/ACI-Pure-Atta-2kg.jpg"],
    tag: ['["aci flour","flour"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1767",
    slug: "aci-pure-flour",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b69728217",
    title: {
      en: "ACI Pure flour",
    },
    description: {
      en: "flour, finely ground cereal grains or other starchy portions of plants, used in various food products and as a basic ingredient of baked goods. flour made from wheat grains is the most satisfactory  for baked products that require spongy structure. ... The outer layers and internal structures of a kernel of wheat.",
    },
    category: {
      _id: "632aca184d87ff2494210bd4",
      name: {
        en: "Flour",
      },
    },
    stock: 590,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 70.86,
      price: 70.86,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca184d87ff2494210bd4",
        name: {
          en: "Flour",
        },
      },
    ],
    image: ["https://i.ibb.co/7GmpLyR/ACI-Nutrilife-Oats-Plus-Atta.jpg"],
    tag: ['["aci flour","flour"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1766",
    slug: "aci-nutrilife-oats-flour",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b69728218",
    title: {
      en: "ACI Nutrilife Oats flour",
    },
    description: {
      en: "flour, finely ground cereal grains or other starchy portions of plants, used in various food products and as a basic ingredient of baked goods. flour made from wheat grains is the most satisfactory  for baked products that require spongy structure. ... The outer layers and internal structures of a kernel of wheat.",
    },
    category: {
      _id: "632aca184d87ff2494210bd4",
      name: {
        en: "Flour",
      },
    },
    stock: 593,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 112.01,
      price: 112.01,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca184d87ff2494210bd4",
        name: {
          en: "Flour",
        },
      },
    ],
    image: ["https://i.ibb.co/7yJhZq5/ACI-Nutrilife-Multi-Grain-Atta-1-Kg.jpg"],
    tag: ['["aci flour","flour"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 112.01,
        originalPrice: "112.01",
        quantity: 293,
        discount: "0.00",
        productId: "639dc0f5c2fce72b69728219-0",
        barcode: "",
        image:
          "https://i.ibb.co/7yJhZq5/ACI-Nutrilife-Multi-Grain-Atta-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 112.01,
        originalPrice: "112.01",
        quantity: 293,
        discount: "0.00",
        productId: "639dc0f5c2fce72b69728219-1",
        barcode: "",
        image:
          "https://i.ibb.co/7yJhZq5/ACI-Nutrilife-Multi-Grain-Atta-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 112.01,
        originalPrice: "112.01",
        quantity: 293,
        discount: "0.00",
        productId: "639dc0f5c2fce72b69728219-2",
        barcode: "",
        image:
          "https://i.ibb.co/7yJhZq5/ACI-Nutrilife-Multi-Grain-Atta-1-Kg.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c1765",
    slug: "aci-nutrilife-flour",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b69728219",
    title: {
      en: "ACI Nutrilife flour",
    },
    description: {
      en: "flour, finely ground cereal grains or other starchy portions of plants, used in various food products and as a basic ingredient of baked goods. flour made from wheat grains is the most satisfactory  for baked products that require spongy structure. ... The outer layers and internal structures of a kernel of wheat.",
    },
    category: {
      _id: "632aca184d87ff2494210bd4",
      name: {
        en: "Flour",
      },
    },
    stock: 879,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 177.71,
      price: 177.71,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca144d87ff2494210bcc",
        name: {
          en: "Oil",
        },
      },
    ],
    image: ["https://i.ibb.co/0nzYNB8/Fresh-Soyabean-Oil-5-Ltr.jpg"],
    tag: ['["fresh oil","oil"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1764",
    slug: "fresh-soyabean-oil",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b6972821a",
    title: {
      en: "Fresh Soyabean Oil",
    },
    description: {
      en: "Cooking oil is plant, animal, or synthetic fat used in frying, baking, and other types of cooking. ... Cooking oil is typically a liquid at room temperature, although some oils that contain saturated fat, such as coconut oil, palm oil and palm kernel oil are solid.",
    },
    category: {
      _id: "632aca144d87ff2494210bcc",
      name: {
        en: "Oil",
      },
    },
    stock: 445,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 99.91,
      price: 99.91,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca144d87ff2494210bcc",
        name: {
          en: "Oil",
        },
      },
    ],
    image: ["https://i.ibb.co/bWJ9d0b/Fresh-Mustard-Oil-500ml.jpg"],
    tag: ['["fresh oil","oil"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1763",
    slug: "fresh-mustard-oil",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b6972821b",
    title: {
      en: "Fresh Mustard Oil",
    },
    description: {
      en: "Cooking oil is plant, animal, or synthetic fat used in frying, baking, and other types of cooking. ... Cooking oil is typically a liquid at room temperature, although some oils that contain saturated fat, such as coconut oil, palm oil and palm kernel oil are solid.",
    },
    category: {
      _id: "632aca144d87ff2494210bcc",
      name: {
        en: "Oil",
      },
    },
    stock: 88,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.440Z",
    updatedAt: "2023-04-23T09:56:18.440Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 140.09,
      price: 140.09,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca144d87ff2494210bcc",
        name: {
          en: "Oil",
        },
      },
    ],
    image: ["https://i.ibb.co/zXY4q7D/Fortune-Rice-Bran-Oil-Pet-5ltr.jpg"],
    tag: ['["fortune oil","oil"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1762",
    slug: "fortune-oil",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b6972821c",
    title: {
      en: "Fortune Oil",
    },
    description: {
      en: "Cooking oil is plant, animal, or synthetic fat used in frying, baking, and other types of cooking. ... Cooking oil is typically a liquid at room temperature, although some oils that contain saturated fat, such as coconut oil, palm oil and palm kernel oil are solid.",
    },
    category: {
      _id: "632aca144d87ff2494210bcc",
      name: {
        en: "Oil",
      },
    },
    stock: 486,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 5.06,
      price: 5.06,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca144d87ff2494210bcc",
        name: {
          en: "Oil",
        },
      },
    ],
    image: ["https://i.ibb.co/TLRZKh5/ACI-Pure-Mustard-Oil-200ml.jpg"],
    tag: ['["aci oil","oil"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 5.06,
        originalPrice: "5.06",
        quantity: 493,
        discount: "0.00",
        productId: "639dc0f5c2fce72b6972821d-0",
        barcode: "",
        image: "https://i.ibb.co/TLRZKh5/ACI-Pure-Mustard-Oil-200ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 5.06,
        originalPrice: "5.06",
        quantity: 493,
        discount: "0.00",
        productId: "639dc0f5c2fce72b6972821d-1",
        barcode: "",
        image: "https://i.ibb.co/TLRZKh5/ACI-Pure-Mustard-Oil-200ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 5.06,
        originalPrice: "5.06",
        quantity: 493,
        discount: "0.00",
        productId: "639dc0f5c2fce72b6972821d-2",
        barcode: "",
        image: "https://i.ibb.co/TLRZKh5/ACI-Pure-Mustard-Oil-200ml.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c1761",
    slug: "aci-pure-mustard-oil",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b6972821d",
    title: {
      en: "ACI Pure Mustard Oil",
    },
    description: {
      en: "Cooking oil is plant, animal, or synthetic fat used in frying, baking, and other types of cooking. ... Cooking oil is typically a liquid at room temperature, although some oils that contain saturated fat, such as coconut oil, palm oil and palm kernel oil are solid.",
    },
    category: {
      _id: "632aca144d87ff2494210bcc",
      name: {
        en: "Oil",
      },
    },
    stock: 1479,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 144.39,
      price: 144.39,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
      {
        _id: "632aca144d87ff2494210bcc",
        name: {
          en: "Oil",
        },
      },
    ],
    image: ["https://i.ibb.co/mSyh6LB/ACI-Aroma-Mustard-Oil-1-Ltr.jpg"],
    tag: ['["aci oil","oil"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1760",
    slug: "aci-aroma-mustard-oil",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b6972821e",
    title: {
      en: "ACI Aroma Mustard Oil",
    },
    description: {
      en: "Cooking oil is plant, animal, or synthetic fat used in frying, baking, and other types of cooking. ... Cooking oil is typically a liquid at room temperature, although some oils that contain saturated fat, such as coconut oil, palm oil and palm kernel oil are solid.",
    },
    category: {
      _id: "632aca144d87ff2494210bcc",
      name: {
        en: "Oil",
      },
    },
    stock: 144,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 219.44,
      price: 219.44,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/j4DjzJb/Kalijira-Premium-Rice-Loose-Kg-1-Kg.jpg"],
    tag: ['["kalijira rice","rice"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c175f",
    slug: "kalijira-premium-rice",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Kalijira Premium Rice",
    },
    description: {
      en: "rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. ... Rice is cooked by boiling, or it can be ground into a flour. It is eaten alone and in a great variety of soups, side dishes, and main dishes in Asian, Middle Eastern, and many other cuisines.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 762,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 194.61,
      price: 194.61,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg"],
    tag: ['["chinigura rice","rice"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-0",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-1",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-2",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-3",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-4",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-5",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-6",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-7",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 194.61,
        originalPrice: "194.61",
        quantity: 701,
        discount: "0.00",
        productId: "63f3484bd3639309840c95b0-8",
        barcode: "",
        image: "https://i.ibb.co/WzWdTsx/Fresh-Chinigura-Rice-1kg.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c175e",
    slug: "fresh-chinigura-rice",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c95b0",
    title: {
      en: "Fresh Chinigura Rice",
    },
    description: {
      en: "rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. ... Rice is cooked by boiling, or it can be ground into a flour. It is eaten alone and in a great variety of soups, side dishes, and main dishes in Asian, Middle Eastern, and many other cuisines.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 6309,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 94.87,
      price: 94.87,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: [
      "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
    ],
    tag: ['["chinigura rice","rice"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-0",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-1",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-2",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-3",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-4",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-5",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-6",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-7",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 94.87,
        originalPrice: "94.87",
        quantity: 780,
        discount: "0.00",
        productId: "63f3484bd3639309840c95af-8",
        barcode: "",
        image:
          "https://i.ibb.co/Rc1RX0F/Chinigura-Premium-Rice-Loose-Kg-1-Kg.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c175d",
    slug: "chinigura-premium-rice",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c95af",
    title: {
      en: "Chinigura Premium Rice",
    },
    description: {
      en: "rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. ... Rice is cooked by boiling, or it can be ground into a flour. It is eaten alone and in a great variety of soups, side dishes, and main dishes in Asian, Middle Eastern, and many other cuisines.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 7020,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 31.64,
      price: 31.64,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/G5S8wCk/Aarong-Nazirshail-Rice-5-Kg.jpg"],
    tag: ['["aarong rice","rice"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c175c",
    slug: "aarong-nazirshail-rice",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aarong Nazirshail Rice",
    },
    description: {
      en: "rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. ... Rice is cooked by boiling, or it can be ground into a flour. It is eaten alone and in a great variety of soups, side dishes, and main dishes in Asian, Middle Eastern, and many other cuisines.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 689,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 247.02,
      price: 247.02,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/rs9sz34/Aarong-Kataribhog-Rice-5-Kg.jpg"],
    tag: ['["aarong rice","rice"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c175b",
    slug: "aarong-kataribhog-rice",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aarong Kataribhog Rice",
    },
    description: {
      en: "rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. ... Rice is cooked by boiling, or it can be ground into a flour. It is eaten alone and in a great variety of soups, side dishes, and main dishes in Asian, Middle Eastern, and many other cuisines.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 186,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 160.96,
      price: 160.96,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/bQ70J0P/Onion-Local-Loose-Kg-1-Kg.jpg"],
    tag: ['["onion","dry vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c175a",
    slug: "onion-loose",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Onion Loose",
    },
    description: {
      en: "Any vegetable that has been dehydrated or dried in order to extend the shelf life and to concentrate the flavor. Popular dried vegetables include sun-dried tomatoes, onions, carrots, and chiles.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 767,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 200.58,
      price: 200.58,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/YL6gbnL/Ginger-Ada-Local-Hybrid-1-Kg.jpg"],
    tag: ['["ginger hybrid","dry vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1759",
    slug: "ginger-hybrid",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ginger Hybrid",
    },
    description: {
      en: "Any vegetable that has been dehydrated or dried in order to extend the shelf life and to concentrate the flavor. Popular dried vegetables include sun-dried tomatoes, onions, carrots, and chiles.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 109,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 15.38,
      price: 15.38,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/D5tBhsz/Garlic-Roshun-Deshi-Loose-P-1-Kg.jpg"],
    tag: ['["garlic","dry vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1758",
    slug: "garlic-loose",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Garlic Loose",
    },
    description: {
      en: "Any vegetable that has been dehydrated or dried in order to extend the shelf life and to concentrate the flavor. Popular dried vegetables include sun-dried tomatoes, onions, carrots, and chiles.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 752,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 82.12,
      price: 82.12,
    },
    categories: [
      {
        _id: "632aca0b4d87ff2494210bc4",
        name: {
          en: "Cooking Essentials",
        },
      },
    ],
    image: ["https://i.ibb.co/jWm6FLB/Ada-Imported-Loose-1-Kg.jpg"],
    tag: ['["garlic","dry vegetable"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1757",
    slug: "ginger-imported-loose",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ginger Imported Loose",
    },
    description: {
      en: "Any vegetable that has been dehydrated or dried in order to extend the shelf life and to concentrate the flavor. Popular dried vegetables include sun-dried tomatoes, onions, carrots, and chiles.",
    },
    category: {
      _id: "632aca0b4d87ff2494210bc4",
      name: {
        en: "Cooking Essentials",
      },
    },
    stock: 411,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 147.83,
      price: 147.83,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: ["https://i.ibb.co/WgXQg7Y/Dan-Cake-Vanilla-Layer-Cake-25-5-Gm.jpg"],
    tag: ['["cake","dan-cake"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1756",
    slug: "dan-cake-layer-cake",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dan Cake Layer Cake",
    },
    description: {
      en: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.",
    },
    category: {
      _id: "632ac9ef4d87ff2494210ba8",
      name: {
        en: "Cakes",
      },
    },
    stock: 517,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 74.93,
      price: 74.93,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: ["https://i.ibb.co/ygwFCfr/Dan-Cake-Lemon-Pound-Cake-300g.jpg"],
    tag: ['["cake","dan-cake"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1755",
    slug: "dan-cake-lemon",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dan Cake Lemon",
    },
    description: {
      en: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.",
    },
    category: {
      _id: "632ac9ef4d87ff2494210ba8",
      name: {
        en: "Cakes",
      },
    },
    stock: 795,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 237.66,
      price: 237.66,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: ["https://i.ibb.co/w6Z4T7d/Dan-Cake-chocolate-Pound-Cake-300g.jpg"],
    tag: ['["cake","dan-cake"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1754",
    slug: "dan-cake-pound-cake",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dan Cake Pound Cake",
    },
    description: {
      en: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.",
    },
    category: {
      _id: "632ac9ef4d87ff2494210ba8",
      name: {
        en: "Cakes",
      },
    },
    stock: 630,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 85.43,
      price: 85.43,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: [
      "https://i.ibb.co/6Ygfpmr/Dan-Cake-chocolate-Muffin-25g-X-12-Pcs.jpg",
    ],
    tag: ['["cake","dan-cake"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1753",
    slug: "dan-cake-chocolate-muffin",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dan Cake chocolate Muffin",
    },
    description: {
      en: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.",
    },
    category: {
      _id: "632ac9ef4d87ff2494210ba8",
      name: {
        en: "Cakes",
      },
    },
    stock: 0,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 59.06,
      price: 59.06,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: [
      "https://i.ibb.co/B47kJ3H/Dan-Cake-chocolate-Layer-Cake-12-X30g-Box.jpg",
    ],
    tag: ['["cake","dan-cake"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1752",
    slug: "dan-cake",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dan Cake",
    },
    description: {
      en: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.",
    },
    category: {
      _id: "632ac9ef4d87ff2494210ba8",
      name: {
        en: "Cakes",
      },
    },
    stock: 418,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 46.14,
      price: 46.14,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: [
      "https://i.ibb.co/LkncfJj/Dekko-Ovaltine-Cookies-biscuits-330g.jpg",
    ],
    tag: ['["biscuit","dekko ovaltine-cookie"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1751",
    slug: "dekko-ovaltine-cookie",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dekko Ovaltine Cookie",
    },
    description: {
      en: "A biscuit is a flour-based baked food product. In most countries, particularly in the Commonwealth and Ireland, biscuits are typically hard, flat and unleavened. They are usually sweet and may be made with sugar, chocolate, icing, jam, ginger or cinnamon. They can also be savoury and similar to crackers.",
    },
    category: {
      _id: "632ac9f64d87ff2494210bb0",
      name: {
        en: "Biscuits",
      },
    },
    stock: 601,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 220.77,
      price: 220.77,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: [
      "https://i.ibb.co/hW9Y78d/Danish-Florida-Orange-biscuits-210-45g.jpg",
    ],
    tag: ['["biscuit","danish biscuit"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1750",
    slug: "danish-Orange-biscuit",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Danish Orange Biscuit",
    },
    description: {
      en: "A biscuit is a flour-based baked food product. In most countries, particularly in the Commonwealth and Ireland, biscuits are typically hard, flat and unleavened. They are usually sweet and may be made with sugar, chocolate, icing, jam, ginger or cinnamon. They can also be savoury and similar to crackers.",
    },
    category: {
      _id: "632ac9f64d87ff2494210bb0",
      name: {
        en: "Biscuits",
      },
    },
    stock: 633,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 59.05,
      price: 59.05,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: ["https://i.ibb.co/SKmXDYZ/Bisk-Club-Shero-Cream-Biscuit-85g.jpg"],
    tag: ['["biscuit","bisk club"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c174f",
    slug: "bisk-club-cream-biscuit",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Bisk Club Cream Biscuit",
    },
    description: {
      en: "A biscuit is a flour-based baked food product. In most countries, particularly in the Commonwealth and Ireland, biscuits are typically hard, flat and unleavened. They are usually sweet and may be made with sugar, chocolate, icing, jam, ginger or cinnamon. They can also be savoury and similar to crackers.",
    },
    category: {
      _id: "632ac9f64d87ff2494210bb0",
      name: {
        en: "Biscuits",
      },
    },
    stock: 672,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 70.18,
      price: 70.18,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: ["https://i.ibb.co/kDDdbv1/Bisk-Club-Fit-Masala-Flavor-70g.jpg"],
    tag: ['["biscuit","masala-flavor"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c174e",
    slug: "bisk-club-masala-flavor",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Bisk Club Masala Flavor",
    },
    description: {
      en: "A biscuit is a flour-based baked food product. In most countries, particularly in the Commonwealth and Ireland, biscuits are typically hard, flat and unleavened. They are usually sweet and may be made with sugar, chocolate, icing, jam, ginger or cinnamon. They can also be savoury and similar to crackers.",
    },
    category: {
      _id: "632ac9f64d87ff2494210bb0",
      name: {
        en: "Biscuits",
      },
    },
    stock: 432,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 214.86,
      price: 214.86,
    },
    categories: [
      {
        _id: "632ac9e94d87ff2494210ba0",
        name: {
          en: "Biscuits & Cakes",
        },
      },
    ],
    image: ["https://i.ibb.co/HqVG7HV/2-Fun-Milk-Wafer-Biscuit-17gx12pack.jpg"],
    tag: ['["biscuit","fun milk"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c174d",
    slug: "fun-milk-wafer-biscuit",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Fun Milk Wafer Biscuit",
    },
    description: {
      en: "A biscuit is a flour-based baked food product. In most countries, particularly in the Commonwealth and Ireland, biscuits are typically hard, flat and unleavened. They are usually sweet and may be made with sugar, chocolate, icing, jam, ginger or cinnamon. They can also be savoury and similar to crackers.",
    },
    category: {
      _id: "632ac9f64d87ff2494210bb0",
      name: {
        en: "Biscuits",
      },
    },
    stock: 184,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 175.54,
      price: 175.54,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: ["https://i.postimg.cc/DfdJBnSP/Life-Tomato-Ketchup-330-Gm.jpg"],
    tag: ['["sauces","tomato sauce"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c174c",
    slug: "life-tomato-ketchup",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Life Tomato Ketchup",
    },
    description: {
      en: "sauce, liquid or semiliquid mixture that is added to a food as it cooks or that is served with it. sauces provide flavour, moisture, and a contrast in texture and colour. They may also serve as a medium in which food is contained, for example, the velouté sauce of creamed chicken.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 105,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 104.86,
      price: 104.86,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: ["https://i.postimg.cc/Sx5JJKPk/Life-Soya-Sauce-Light-210ml.jpg"],
    tag: ['["sauces","soya sauce"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c174b",
    slug: "life-soya-sauce",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Life Soya Sauce",
    },
    description: {
      en: "sauce, liquid or semiliquid mixture that is added to a food as it cooks or that is served with it. sauces provide flavour, moisture, and a contrast in texture and colour. They may also serve as a medium in which food is contained, for example, the velouté sauce of creamed chicken.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 222,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 71.24,
      price: 71.24,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/5NsHWgqH/Life-Dark-Soya-Sauce-Small-210ml.jpg",
    ],
    tag: ['["sauces","soya sauce"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c174a",
    slug: "life-dark-soya-sauce",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Life Dark Soya Sauce",
    },
    description: {
      en: "sauce, liquid or semiliquid mixture that is added to a food as it cooks or that is served with it. sauces provide flavour, moisture, and a contrast in texture and colour. They may also serve as a medium in which food is contained, for example, the velouté sauce of creamed chicken.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 43,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 242.29,
      price: 242.29,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: ["https://i.postimg.cc/dts7fpdP/Kikkoman-Soya-Sauce-150ml.jpg"],
    tag: ['["sauces","soya sauce"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1749",
    slug: "kikkoman-soya-sauce",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Kikkoman Soya Sauce",
    },
    description: {
      en: "sauce, liquid or semiliquid mixture that is added to a food as it cooks or that is served with it. sauces provide flavour, moisture, and a contrast in texture and colour. They may also serve as a medium in which food is contained, for example, the velouté sauce of creamed chicken.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 458,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 235.15,
      price: 235.15,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/5y3X0qhR/Calypso-Pure-Salad-Style-Mustard-200ml-Jar.jpg",
    ],
    tag: ['["sauces","calypso sauce"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1748",
    slug: "calypso-sauce",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Calypso Sauce",
    },
    description: {
      en: "sauce, liquid or semiliquid mixture that is added to a food as it cooks or that is served with it. sauces provide flavour, moisture, and a contrast in texture and colour. They may also serve as a medium in which food is contained, for example, the velouté sauce of creamed chicken.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 463,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 180.86,
      price: 180.86,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/FFc45V39/Heinz-apple-Cider-Vinegar-473ml-US.jpg",
    ],
    tag: ['["pickles","Heinz vinegar"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1747",
    slug: "heinz-apple-cider-vinegar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Heinz apple Cider Vinegar",
    },
    description: {
      en: "The acetic acid in vinegar or the lactic acid produced by brine gives the pickle its salty, sour taste. ... bread-and-butter pickles, for example, have a distinctly sweet taste because sugar and other sweeteners are added to the brine. Like tomatoes, cucumbers (and thus, pickles) are technically fruits.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 723,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 239.55,
      price: 239.55,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/pT5tdDSJ/Discovery-apple-Cider-Vinegar-473ml.jpg",
    ],
    tag: ['["pickles","discovery vinegar"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1746",
    slug: "discovery-apple-cider-vinegar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Discovery apple Cider Vinegar",
    },
    description: {
      en: "The acetic acid in vinegar or the lactic acid produced by brine gives the pickle its salty, sour taste. ... bread-and-butter pickles, for example, have a distinctly sweet taste because sugar and other sweeteners are added to the brine. Like tomatoes, cucumbers (and thus, pickles) are technically fruits.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 472,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 142.41,
      price: 142.41,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: ["https://i.postimg.cc/nhnZ19sn/Ahmed-Garlic-Pickle-400g.jpg"],
    tag: ['["pickles","ahmed pickle"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1745",
    slug: "ahmed-garlic-pickle",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ahmed Garlic Pickle",
    },
    description: {
      en: "The acetic acid in vinegar or the lactic acid produced by brine gives the pickle its salty, sour taste. ... bread-and-butter pickles, for example, have a distinctly sweet taste because sugar and other sweeteners are added to the brine. Like tomatoes, cucumbers (and thus, pickles) are technically fruits.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 569,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 220.99,
      price: 220.99,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/SxV41Q8C/American-Garden-apple-Cider-Vinegar-473g.jpg",
    ],
    tag: ['["pickles","american vinegar"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1744",
    slug: "american-apple-cider-vinegar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "American apple Cider Vinegar",
    },
    description: {
      en: "The acetic acid in vinegar or the lactic acid produced by brine gives the pickle its salty, sour taste. ... bread-and-butter pickles, for example, have a distinctly sweet taste because sugar and other sweeteners are added to the brine. Like tomatoes, cucumbers (and thus, pickles) are technically fruits.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 686,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 105.02,
      price: 105.02,
    },
    categories: [
      {
        _id: "62cfad52484d89068aa7a81f",
        name: {
          en: "Pickles & Condiments",
        },
      },
    ],
    image: ["https://i.postimg.cc/4yzk6XsK/Ahmed-Mango-Pickle-400g.jpg"],
    tag: ['["pickles","ahmed pickle"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1743",
    slug: "ahmed-mango-pickle",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ahmed Mango Pickle",
    },
    description: {
      en: "The acetic acid in vinegar or the lactic acid produced by brine gives the pickle its salty, sour taste. ... bread-and-butter pickles, for example, have a distinctly sweet taste because sugar and other sweeteners are added to the brine. Like tomatoes, cucumbers (and thus, pickles) are technically fruits.",
    },
    category: {
      _id: "62cfad52484d89068aa7a81f",
      name: {
        en: "Pickles & Condiments",
      },
    },
    stock: 716,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 9.86,
      price: 9.86,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: ["https://i.postimg.cc/Hxc5YkC7/Pita-bread-4-csc7se.jpg"],
    tag: ['["breakfast","pita-bread"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1742",
    slug: "pita-bread",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Pita bread",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae7b4d87ff2494210967",
      name: {
        en: "Bread",
      },
    },
    stock: 417,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 223.93,
      price: 223.93,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: ["https://i.postimg.cc/8CnMgrxS/bread-7-mv0yhz.jpg"],
    tag: ['["breakfast","bread"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1741",
    slug: "632aae7b4d87ff2494210967",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "632aae7b4d87ff2494210967",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae7b4d87ff2494210967",
      name: {
        en: "Bread",
      },
    },
    stock: 722,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 27.08,
      price: 27.08,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: ["https://i.postimg.cc/Hxc5YkC7/Pita-bread-4-csc7se.jpg"],
    tag: ['["breakfast","pita-bread"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1740",
    slug: "pita-bread",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Pita bread",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae7b4d87ff2494210967",
      name: {
        en: "Bread",
      },
    },
    stock: 84,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 16.48,
      price: 16.48,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/02dS24hZ/Everyday-Essentials-Wholemeal-bread.jpg",
    ],
    tag: ['["breakfast","wholemeal-bread"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c173f",
    slug: "wholemeal-bread",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Wholemeal bread",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae7b4d87ff2494210967",
      name: {
        en: "Bread",
      },
    },
    stock: 408,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 201.52,
      price: 201.52,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: ["https://i.postimg.cc/yx57V7sW/quaker-oats-jar-500-gm.webp"],
    tag: ['["breakfast","quaker-oats"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c173e",
    slug: "quaker-oats-jar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Quaker Oats Jar",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae624d87ff2494210951",
      name: {
        en: "Cereal",
      },
    },
    stock: 352,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.439Z",
    updatedAt: "2023-04-23T09:56:18.439Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 148.58,
      price: 148.58,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/d0KtkQdy/nestle-koko-krunch-breakfast-cereal-pouch-80-gm.webp",
    ],
    tag: ['["breakfast","breakfast-cereal-pouch"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c173d",
    slug: "breakfast-cereal-pouch",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "breakfast cereal Pouch",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae624d87ff2494210951",
      name: {
        en: "Cereal",
      },
    },
    stock: 307,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 169.66,
      price: 169.66,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/ydLVbFGm/kelloggs-corn-flakes-real-honey-breakfast-cereal-300gm.webp",
    ],
    tag: ['["breakfast","honey-breakfast-cereal"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c173c",
    slug: "honey-breakfast-cereal",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "honey breakfast cereal",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae624d87ff2494210951",
      name: {
        en: "Cereal",
      },
    },
    stock: 372,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 101.22,
      price: 101.22,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/ZnqqbfNs/kelloggs-chocos-fills-chocolate-breakfast-cereal-17gm.webp",
    ],
    tag: ['["breakfast","chocolate-breakfast-cereal"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c173b",
    slug: "chocolate-breakfast-cereal",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "chocolate breakfast cereal",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae624d87ff2494210951",
      name: {
        en: "Cereal",
      },
    },
    stock: 370,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 154.04,
      price: 154.04,
    },
    categories: [
      {
        _id: "632aae414d87ff2494210945",
        name: {
          en: "Breakfast",
        },
      },
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/pTWWC0sV/nestle-gold-corn-flakes-breakfast-cereal-box-275-gm.webp",
    ],
    tag: ['["breakfast","flakes-breakfast-cereal"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c173a",
    slug: "flakes-breakfast-cereal",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Flakes breakfast cereal",
    },
    description: {
      en: "The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.",
    },
    category: {
      _id: "632aae624d87ff2494210951",
      name: {
        en: "Cereal",
      },
    },
    stock: 415,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 158.17,
      price: 158.17,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: ["https://i.postimg.cc/rwV1009C/Aseel-Vegetable-Ghee-500gm.jpg"],
    tag: ['["aseel-vegetable","ghee"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1739",
    slug: "aseel-vegetable-ghee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aseel Vegetable Ghee",
    },
    description: {
      en: "Butter, a yellow-to-white solid emulsion of fat globules, water, and inorganic salts produced by churning the cream from cows'milk. ... Butter is a high-energy food, containing approximately 715 calories per 100 grams. It has a high content of butterfat, or milk fat (at least 80 percent), but is low in protein.",
    },
    category: {
      _id: "632ab16c4d87ff2494210a44",
      name: {
        en: "Butter & Ghee",
      },
    },
    stock: 390,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 189.93,
      price: 189.93,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: ["https://i.postimg.cc/Zq06HG2W/Ultra-Ghee-200g.jpg"],
    tag: ['["ultra","ghee"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1738",
    slug: "ultra-ghee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ultra Ghee",
    },
    description: {
      en: "Butter, a yellow-to-white solid emulsion of fat globules, water, and inorganic salts produced by churning the cream from cows'milk. ... Butter is a high-energy food, containing approximately 715 calories per 100 grams. It has a high content of butterfat, or milk fat (at least 80 percent), but is low in protein.",
    },
    category: {
      _id: "632ab16c4d87ff2494210a44",
      name: {
        en: "Butter & Ghee",
      },
    },
    stock: 264,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 217.48,
      price: 217.48,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: ["https://i.postimg.cc/13vppmCx/Pran-Premium-Ghee-200g.jpg"],
    tag: ['["pran-premium","ghee"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1737",
    slug: "pran-premium-ghee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Pran Premium Ghee",
    },
    description: {
      en: "Butter, a yellow-to-white solid emulsion of fat globules, water, and inorganic salts produced by churning the cream from cows'milk. ... Butter is a high-energy food, containing approximately 715 calories per 100 grams. It has a high content of butterfat, or milk fat (at least 80 percent), but is low in protein.",
    },
    category: {
      _id: "632ab16c4d87ff2494210a44",
      name: {
        en: "Butter & Ghee",
      },
    },
    stock: 258,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 122.52,
      price: 122.52,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: ["https://i.postimg.cc/RVzQmb6Y/Aarong-Ghee-200-Gm.jpg"],
    tag: ['["aarong","ghee"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1736",
    slug: "aarong-ghee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aarong Ghee",
    },
    description: {
      en: "Butter, a yellow-to-white solid emulsion of fat globules, water, and inorganic salts produced by churning the cream from cows'milk. ... Butter is a high-energy food, containing approximately 715 calories per 100 grams. It has a high content of butterfat, or milk fat (at least 80 percent), but is low in protein.",
    },
    category: {
      _id: "632ab16c4d87ff2494210a44",
      name: {
        en: "Butter & Ghee",
      },
    },
    stock: 728,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 153.64,
      price: 153.64,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: ["https://i.postimg.cc/dQCmzK1d/Aarong-dairy-Ghee-Tin-100-Gm.jpg"],
    tag: ['["aarong","ghee"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1735",
    slug: "aarong-dairy-ghee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aarong dairy Ghee",
    },
    description: {
      en: "Butter, a yellow-to-white solid emulsion of fat globules, water, and inorganic salts produced by churning the cream from cows'milk. ... Butter is a high-energy food, containing approximately 715 calories per 100 grams. It has a high content of butterfat, or milk fat (at least 80 percent), but is low in protein.",
    },
    category: {
      _id: "632ab16c4d87ff2494210a44",
      name: {
        en: "Butter & Ghee",
      },
    },
    stock: 94,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 281.58,
      price: 281.58,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: ["https://i.postimg.cc/0N9BNyzL/Shurfine-Whole-Milk-0-5-gal.jpg"],
    tag: ['["shurfine-milk","dairy"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1734",
    slug: "shurfine-whole-milk",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Shurfine Whole Milk",
    },
    description: {
      en: "a room, building, or establishment where milk is kept and butter or cheese is made. 2a : the department of farming or of a farm that is concerned with the production of milk, butter, and cheese. b : a farm devoted to such production.",
    },
    category: {
      _id: "632ab1584d87ff2494210a31",
      name: {
        en: "Dairy",
      },
    },
    stock: 771,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 39.58,
      price: 39.58,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/XJJ1w1cL/Shurfine-Vanilla-Nonfat-Yogurt-6oz.jpg",
    ],
    tag: ['["shurfine-yogurt","dairy"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1733",
    slug: "shurfine-vanilla-yogurt",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Shurfine Vanilla Yogurt",
    },
    description: {
      en: "a room, building, or establishment where milk is kept and butter or cheese is made. 2a : the department of farming or of a farm that is concerned with the production of milk, butter, and cheese. b : a farm devoted to such production.",
    },
    category: {
      _id: "632ab1584d87ff2494210a31",
      name: {
        en: "Dairy",
      },
    },
    stock: 140,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 154.98,
      price: 154.98,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/J4Bg6gwd/El-Mexicano-Em-Youstir-Peach-each.jpg",
    ],
    tag: ['["mexicano-yogurt","dairy"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1732",
    slug: "el-mexicano-yogurt",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "El Mexicano Yogurt",
    },
    description: {
      en: "a room, building, or establishment where milk is kept and butter or cheese is made. 2a : the department of farming or of a farm that is concerned with the production of milk, butter, and cheese. b : a farm devoted to such production.",
    },
    category: {
      _id: "632ab1584d87ff2494210a31",
      name: {
        en: "Dairy",
      },
    },
    stock: 558,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 245.18,
      price: 245.18,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/8zRYD6zR/Cowgirl-Creamery-Mt-Tam-Triple-Creme-Cheese-per-lb.jpg",
    ],
    tag: ['["cowgirl-creamery","dairy"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1731",
    slug: "cowgirl-creamery",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Cowgirl Creamery",
    },
    description: {
      en: "a room, building, or establishment where milk is kept and butter or cheese is made. 2a : the department of farming or of a farm that is concerned with the production of milk, butter, and cheese. b : a farm devoted to such production.",
    },
    category: {
      _id: "632ab1584d87ff2494210a31",
      name: {
        en: "Dairy",
      },
    },
    stock: 211,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 35.9,
      price: 35.9,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/gc7QKp7Z/Balducci-AUSTRALIAN-CHEDDAR-per-lb.jpg",
    ],
    tag: ['["balducci","dairy"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1730",
    slug: "balducci-australian-cheddar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Balducci AUSTRALIAN CHEDDAR",
    },
    description: {
      en: "a room, building, or establishment where milk is kept and butter or cheese is made. 2a : the department of farming or of a farm that is concerned with the production of milk, butter, and cheese. b : a farm devoted to such production.",
    },
    category: {
      _id: "632ab1584d87ff2494210a31",
      name: {
        en: "Dairy",
      },
    },
    stock: 749,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 135.36,
      price: 135.36,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: ["https://i.postimg.cc/Vv4jDzfb/Polar-1-Liter-Vanilla.jpg"],
    tag: ['["polar","ice cream"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c172f",
    slug: "polar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Polar",
    },
    description: {
      en: "Ice cream is a frozen dairy dessert obtained by freezing the ice cream mix with continuous agitation. It contains milk products, sweetening materials, stabilizers, colors, flavors, and egg products. Ice cream had its origins in Europe and was introduced later in the United States where it developed into an industry.",
    },
    category: {
      _id: "632ab1644d87ff2494210a3c",
      name: {
        en: "Ice Cream",
      },
    },
    stock: 211,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 201.67,
      price: 201.67,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
    ],
    image: ["https://i.postimg.cc/cCdRRvSS/Igloo-Kheer-Malai-Box-1-Ltr.jpg"],
    tag: ['["igloo","ice cream"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c172e",
    slug: "igloo-kheer-malai",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Igloo Kheer Malai",
    },
    description: {
      en: "Ice cream is a frozen dairy dessert obtained by freezing the ice cream mix with continuous agitation. It contains milk products, sweetening materials, stabilizers, colors, flavors, and egg products. Ice cream had its origins in Europe and was introduced later in the United States where it developed into an industry.",
    },
    category: {
      _id: "632ab1644d87ff2494210a3c",
      name: {
        en: "Ice Cream",
      },
    },
    stock: 566,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 220.49,
      price: 220.49,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
    ],
    image: ["https://i.postimg.cc/NM6821ZD/Igloo-Cup-Vanilla-100-Ml.jpg"],
    tag: ['["igloo","ice cream"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c172d",
    slug: "igloo-cup-vanilla",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Igloo Cup Vanilla",
    },
    description: {
      en: "Ice cream is a frozen dairy dessert obtained by freezing the ice cream mix with continuous agitation. It contains milk products, sweetening materials, stabilizers, colors, flavors, and egg products. Ice cream had its origins in Europe and was introduced later in the United States where it developed into an industry.",
    },
    category: {
      _id: "632ab1644d87ff2494210a3c",
      name: {
        en: "Ice Cream",
      },
    },
    stock: 627,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 30.82,
      price: 30.82,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
    ],
    tag: ['["igloo","ice cream"]'],
    variants: [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-0",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-1",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-2",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-3",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-4",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-5",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-6",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-7",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        price: 30.82,
        originalPrice: "30.82",
        quantity: 537,
        discount: "0.00",
        productId: "63f3484bd3639309840c957e-8",
        barcode: "",
        image:
          "https://i.postimg.cc/85QBCyXs/Igloo-Exotic-Swiss-Choccolate-Ice-Cream-100ml.jpg",
      },
    ],
    status: "show",
    _id: "644500c2839a5e0c2f5c172c",
    slug: "igloo-exotic-swiss",
    sku: "",
    barcode: "",
    productId: "63f3484bd3639309840c957e",
    title: {
      en: "Igloo Exotic Swiss",
    },
    description: {
      en: "Ice cream is a frozen dairy dessert obtained by freezing the ice cream mix with continuous agitation. It contains milk products, sweetening materials, stabilizers, colors, flavors, and egg products. Ice cream had its origins in Europe and was introduced later in the United States where it developed into an industry.",
    },
    category: {
      _id: "632ab1644d87ff2494210a3c",
      name: {
        en: "Ice Cream",
      },
    },
    stock: 4833,
    isCombination: true,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 25.37,
      price: 25.37,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/nLQGp8k6/Igloo-Container-Vanilla-1000-Ml.jpg",
    ],
    tag: ['["igloo","ice cream"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c172b",
    slug: "igloo-container-vanilla",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Igloo Container Vanilla",
    },
    description: {
      en: "Ice cream is a frozen dairy dessert obtained by freezing the ice cream mix with continuous agitation. It contains milk products, sweetening materials, stabilizers, colors, flavors, and egg products. Ice cream had its origins in Europe and was introduced later in the United States where it developed into an industry.",
    },
    category: {
      _id: "632ab1644d87ff2494210a3c",
      name: {
        en: "Ice Cream",
      },
    },
    stock: 104,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 51.28,
      price: 51.28,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/7P0KvKrQ/Pure-Plant-Home-Lavender-Orange-Blossom-Candle-7oz.jpg",
    ],
    tag: ['["air freshener"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c172a",
    slug: "lavender-Orange-blossom",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Lavender Orange Blossom",
    },
    description: {
      en: "a device used to disperse chemicals intended to mask or eliminate unpleasant odors The bathrooms should also have matching towels, soap and tissue dispensers, and a candle or plug-in air freshener with a pleasant scent.",
    },
    category: {
      _id: "632ac99d4d87ff2494210b64",
      name: {
        en: "Air Freshener",
      },
    },
    stock: 263,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 77.63,
      price: 77.63,
    },
    categories: [
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/dV4WHDcs/Glade-Clear-Springs-Sense-Spray-Motion-Sensor-Automatic-Spray-1ct.jpg",
    ],
    tag: ['["air freshener"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1729",
    slug: "glade-automatic-spray",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Glade Automatic Spray",
    },
    description: {
      en: "a device used to disperse chemicals intended to mask or eliminate unpleasant odors The bathrooms should also have matching towels, soap and tissue dispensers, and a candle or plug-in air freshener with a pleasant scent.",
    },
    category: {
      _id: "632ac99d4d87ff2494210b64",
      name: {
        en: "Air Freshener",
      },
    },
    stock: 125,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 133.67,
      price: 133.67,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/brxgQwRj/Natures-Alchemy-Essential-Oil-100-Pure-Rosewood-0-5oz.jpg",
    ],
    tag: ['["air freshener"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1728",
    slug: "natures-alchemy-rosewood",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Natures Alchemy Rosewood",
    },
    description: {
      en: "a device used to disperse chemicals intended to mask or eliminate unpleasant odors The bathrooms should also have matching towels, soap and tissue dispensers, and a candle or plug-in air freshener with a pleasant scent.",
    },
    category: {
      _id: "632ac99d4d87ff2494210b64",
      name: {
        en: "Air Freshener",
      },
    },
    stock: 50,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 182.57,
      price: 182.57,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/pXQcjq0n/Glade-Be-At-Peace-Automatic-Spray-Refill-Air-Freshener-6-2oz.jpg",
    ],
    tag: ['["air freshener"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1727",
    slug: "glade-air-freshener",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Glade air-freshener",
    },
    description: {
      en: "a device used to disperse chemicals intended to mask or eliminate unpleasant odors The bathrooms should also have matching towels, soap and tissue dispensers, and a candle or plug-in air freshener with a pleasant scent.",
    },
    category: {
      _id: "632ac99d4d87ff2494210b64",
      name: {
        en: "Air Freshener",
      },
    },
    stock: 440,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 229.97,
      price: 229.97,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/Zqnw1ZJr/Glade-Oil-Refills-Scented-White-tea-Lily-0-71oz.jpg",
    ],
    tag: ['["air freshener"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1726",
    slug: "glade-refills-scented",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Glade Refills Scented",
    },
    description: {
      en: "a device used to disperse chemicals intended to mask or eliminate unpleasant odors The bathrooms should also have matching towels, soap and tissue dispensers, and a candle or plug-in air freshener with a pleasant scent.",
    },
    category: {
      _id: "632ac99d4d87ff2494210b64",
      name: {
        en: "Air Freshener",
      },
    },
    stock: 271,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 175.85,
      price: 175.85,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/kgjcJb0f/So-Phresh-Bio-enzymatic-Dog-Stain-Odor-Remover-2-23lb.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1725",
    slug: "sophresh",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Sophresh",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 331,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 141.68,
      price: 141.68,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/DZGdPY8M/Rejuvenate-Floor-cleaner-Multi-Surface-34-oz.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1724",
    slug: "rejuvenate-floor-cleaner",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Rejuvenate Floor cleaner",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 640,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 264.8,
      price: 264.8,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/LsnVnsRR/Refresh-Your-Car-Antibacterial-Leather-Automotive-Cleaning-Wipes-New-Car-Scent-25-CT-9oz.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1723",
    slug: "leather-automotive-cleaning",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Leather Automotive Cleaning",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 38,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 129.32,
      price: 129.32,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/L84DFTbJ/Pure-Citrus-cleaner-Orange-32oz.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1722",
    slug: "pure-citrus-cleaner",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Pure Citrus cleaner",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 523,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 14.41,
      price: 14.41,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/prtQGYjX/Open-Nature-Granite-cleaner-32-fl-oz.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1721",
    slug: "open-nature-granite",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Open Nature Granite",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 57,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 297.8,
      price: 297.8,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/Hsg3BH04/Mr-Clean-Multi-Purpose-cleaner-with-Febreze-Freshness-New-Zealand-Springs-Scent-40oz.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1720",
    slug: "mr-clean-cleaner",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Mr Clean cleaner",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 122,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 150.22,
      price: 150.22,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/ncG2W508/Good-Clean-Fresh-Scented-Disinfectant-Wipes-24ct.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c171f",
    slug: "good-clean-wipes",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Good Clean Wipes",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 475,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 285.11,
      price: 285.11,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/cJ2BYN43/Everyday-Living-All-Purpose-cleaner-with-Bleach-32-oz.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c171e",
    slug: "clean-it-cleaner",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Clean It cleaner",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 131,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 60.16,
      price: 60.16,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/kGxsqhCb/Artik-Mandarine-Obsession-All-Purpose-cleaner-8fl-oz.jpg",
    ],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c171d",
    slug: "artik-madarine-cleaner",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Artik Mandarine cleaner",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 33,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 170.86,
      price: 170.86,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: ["https://i.postimg.cc/BZDMTtFn/Drano-Build-Up-Remover-32-oz.jpg"],
    tag: ['["cleaner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c171c",
    slug: "drano-build-up-remover",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Drano Build Up Remover",
    },
    description: {
      en: "A cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.",
    },
    category: {
      _id: "632ac9934d87ff2494210b54",
      name: {
        en: "Cleaner",
      },
    },
    stock: 487,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 218.66,
      price: 218.66,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/JnXrRfRF/Continental-Complete-Window-Squeegee-12-in.jpg",
    ],
    tag: ['["cleaning tools"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c171b",
    slug: "window-squeegee",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Window Squeegee",
    },
    description: {
      en: "A variety of accurate and specific tools and products created and designed in various colors, materials, mechanisms, shapes, sizes and styles to clean easily, effectively and efficiently. Cleaning tools are vital to clean especially when your form of employment involves cleaning.",
    },
    category: {
      _id: "632ac9ba4d87ff2494210b7c",
      name: {
        en: "Cleaning Tools",
      },
    },
    stock: 626,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 168.22,
      price: 168.22,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/XvpNzZm4/Char-Bron-Dual-SS-Scubbing-Pad-Brush-1ct.jpg",
    ],
    tag: ['["cleaning tools"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c171a",
    slug: "scubbing-pad-brush",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Scubbing Pad Brush",
    },
    description: {
      en: "A variety of accurate and specific tools and products created and designed in various colors, materials, mechanisms, shapes, sizes and styles to clean easily, effectively and efficiently. Cleaning tools are vital to clean especially when your form of employment involves cleaning.",
    },
    category: {
      _id: "632ac9ba4d87ff2494210b7c",
      name: {
        en: "Cleaning Tools",
      },
    },
    stock: 766,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.438Z",
    updatedAt: "2023-04-23T09:56:18.438Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 133.01,
      price: 133.01,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: ["https://i.postimg.cc/fyjM9Ytj/Butler-Gum-Scrub-Brush-each.jpg"],
    tag: ['["cleaning tools"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1719",
    slug: "scrub-brush",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Scrub Brush",
    },
    description: {
      en: "A variety of accurate and specific tools and products created and designed in various colors, materials, mechanisms, shapes, sizes and styles to clean easily, effectively and efficiently. Cleaning tools are vital to clean especially when your form of employment involves cleaning.",
    },
    category: {
      _id: "632ac9ba4d87ff2494210b7c",
      name: {
        en: "Cleaning Tools",
      },
    },
    stock: 376,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 229.52,
      price: 229.52,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: ["https://i.postimg.cc/Z5Y56sL9/Butler-Gum-Scrub-Bob-each.jpg"],
    tag: ['["cleaning tools"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1718",
    slug: "scrub-bob",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Scrub Bob",
    },
    description: {
      en: "A variety of accurate and specific tools and products created and designed in various colors, materials, mechanisms, shapes, sizes and styles to clean easily, effectively and efficiently. Cleaning tools are vital to clean especially when your form of employment involves cleaning.",
    },
    category: {
      _id: "632ac9ba4d87ff2494210b7c",
      name: {
        en: "Cleaning Tools",
      },
    },
    stock: 83,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 151.38,
      price: 151.38,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/mgd2j3dm/Casabella-Sponge-Brush-Loop-1-each.jpg",
    ],
    tag: ['["cleaning tools"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1717",
    slug: "casabella-sponge-brush",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Casabella Sponge Brush",
    },
    description: {
      en: "A variety of accurate and specific tools and products created and designed in various colors, materials, mechanisms, shapes, sizes and styles to clean easily, effectively and efficiently. Cleaning tools are vital to clean especially when your form of employment involves cleaning.",
    },
    category: {
      _id: "632ac9ba4d87ff2494210b7c",
      name: {
        en: "Cleaning Tools",
      },
    },
    stock: 496,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 138.13,
      price: 138.13,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/LsHQ9L2F/Xtra-Spring-Sunshine-Scentsations-116-Loads-Liquid-laundry-Detergent-175fl-oz.jpg",
    ],
    tag: ['["xtra-spring","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1716",
    slug: "xtra-spring-laundry",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Xtra Spring laundry",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 436,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 79.26,
      price: 79.26,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/dtyx4J4p/Valu-Time-Fabric-Softener-Spring-Scent-128-fl-oz.jpg",
    ],
    tag: ['["valu-time","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1715",
    slug: "valu-time-fabric-softener",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Valu Time Fabric Softener",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 352,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 256.48,
      price: 256.48,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/0yGH1cgC/Valu-Time-Bleach-Lemon-Scent-96fl-oz.jpg",
    ],
    tag: ['["valu-time","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1714",
    slug: "valu-time-lemon-scent",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Valu Time Lemon Scent",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 91,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 285.24,
      price: 285.24,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/XY6DPtPJ/Ultra-Clorox-Clorox-Smart-Bleach-Fresh-Meadow-116-oz.jpg",
    ],
    tag: ['["ultra-clorox","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1713",
    slug: "ultra-clorox",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ultra Clorox",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 476,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 35.71,
      price: 35.71,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/wxPrX1cD/Tide-Detergent-Fresh-Scent-100oz.jpg",
    ],
    tag: ['["tide-detergent","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1712",
    slug: "tide-detergent",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Tide Detergent",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 770,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 21.62,
      price: 21.62,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/Y0JyMPqd/Open-Nature-Chlorine-free-Bleach-64fl-oz.jpg",
    ],
    tag: ['["open-nature","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1711",
    slug: "open-nature-chlorine",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Open Nature Chlorine",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 678,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 184.82,
      price: 184.82,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/mkc5x4Rc/Febreze-D-Bsl-Gain-Scent-Stain-Odor-Remover-32-fl-oz.jpg",
    ],
    tag: ['["febreze-gain","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1710",
    slug: "febreze-gain-scent",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Febreze Gain Scent",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 397,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 215.4,
      price: 215.4,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/gJtTBj9F/Febreze-Bedding-Refresher-Moonlit-Lavender-16-9oz.jpg",
    ],
    tag: ['["febreze-lavender","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c170f",
    slug: "febreze-moonlit-lavender",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Febreze Moonlit Lavender",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 692,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 262.08,
      price: 262.08,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/3wB6m9nw/Arm-Hammer-Tropical-Paradise-Arm-Hammer-Clean-Scentsations-Tropical-Paradise-laundry-Detergent.jpg",
    ],
    tag: ['["arm-hammer","laundry"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c170e",
    slug: "arm-hammer-detergent",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Arm Hammer Detergent",
    },
    description: {
      en: "A laundry service is a service in a hotel that washes and irons clothes for guests. Almost all hotels have a laundry service. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 234,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 265.21,
      price: 265.21,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/sXFXGYD1/Orange-Guard-Insect-Spray-Gallon-128-fl-oz.jpg",
    ],
    tag: ['["Orange-guard","pest-control"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c170d",
    slug: "Orange-guard-insect-spray",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Orange Guard Insect Spray",
    },
    description: {
      en: "Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities. ... This can be achieved by monitoring the crop, only applying insecticides when necessary, and by growing varieties and crops which are resistant to pests.",
    },
    category: {
      _id: "632ac9b24d87ff2494210b74",
      name: {
        en: "Pest Control",
      },
    },
    stock: 103,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 13.06,
      price: 13.06,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/43Hy3LGr/Hot-Shot-Wasp-Hornet-Killer-14oz.jpg",
    ],
    tag: ['["hot-shot","pest-control"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c170c",
    slug: "hot-shot-hornet-killer",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Hot Shot Hornet Killer",
    },
    description: {
      en: "Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities. ... This can be achieved by monitoring the crop, only applying insecticides when necessary, and by growing varieties and crops which are resistant to pests.",
    },
    category: {
      _id: "632ac9b24d87ff2494210b74",
      name: {
        en: "Pest Control",
      },
    },
    stock: 591,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 25.13,
      price: 25.13,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/28TV9LTX/Hot-Shot-Flying-Insect-Killer-Mist-Spray-14-oz.jpg",
    ],
    tag: ['["hot-shot","pest-control"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c170b",
    slug: "hot-shot-insect-killer",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Hot Shot Insect Killer",
    },
    description: {
      en: "Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities. ... This can be achieved by monitoring the crop, only applying insecticides when necessary, and by growing varieties and crops which are resistant to pests.",
    },
    category: {
      _id: "632ac9b24d87ff2494210b74",
      name: {
        en: "Pest Control",
      },
    },
    stock: 655,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 53.4,
      price: 53.4,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/fRLkGWrW/Hot-Shot-Ant-Roach-Plus-Germ-Killer-2-Fresh-Floral-Scent-Value-Pack-17-oz.jpg",
    ],
    tag: ['["hot-shot","pest-control"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c170a",
    slug: "hot-shot-ant-killer",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Hot Shot Ant Killer",
    },
    description: {
      en: "Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities. ... This can be achieved by monitoring the crop, only applying insecticides when necessary, and by growing varieties and crops which are resistant to pests.",
    },
    category: {
      _id: "632ac9b24d87ff2494210b74",
      name: {
        en: "Pest Control",
      },
    },
    stock: 599,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 11.81,
      price: 11.81,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/HndkBTMg/d-Con-Trap-Rat-and-Mouse-Glue-Professional-Strength-2ct.jpg",
    ],
    tag: ['["d-con","pest-control"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1709",
    slug: "d-con-trap-rat",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "d Con Trap Rat",
    },
    description: {
      en: "Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities. ... This can be achieved by monitoring the crop, only applying insecticides when necessary, and by growing varieties and crops which are resistant to pests.",
    },
    category: {
      _id: "632ac9b24d87ff2494210b74",
      name: {
        en: "Pest Control",
      },
    },
    stock: 464,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 29.26,
      price: 29.26,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/bwBdpX7x/Black-Flag-Ant-Roach-Spider-Killer-Fragrance-Free-20-5-ox.jpg",
    ],
    tag: ['["black-flag","pest-control"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1708",
    slug: "black-flag-ant-killer",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Black Flag Ant Killer",
    },
    description: {
      en: "Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities. ... This can be achieved by monitoring the crop, only applying insecticides when necessary, and by growing varieties and crops which are resistant to pests.",
    },
    category: {
      _id: "632ac9b24d87ff2494210b74",
      name: {
        en: "Pest Control",
      },
    },
    stock: 616,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 287.75,
      price: 287.75,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/PrdCMQbw/Bayer-Insect-Killer-All-Purpose-Continuous-Spray-15-75oz.jpg",
    ],
    tag: ['["bayer","pest-control"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1707",
    slug: "bayer-insect-killer",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Bayer Insect Killer",
    },
    description: {
      en: "Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities. ... This can be achieved by monitoring the crop, only applying insecticides when necessary, and by growing varieties and crops which are resistant to pests.",
    },
    category: {
      _id: "632ac9b24d87ff2494210b74",
      name: {
        en: "Pest Control",
      },
    },
    stock: 4,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 248.3,
      price: 248.3,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/jjksyzxy/BRITA-water-Filter-Pitcher-1each.jpg",
    ],
    tag: ['["brita","water-filter"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1706",
    slug: "brita-water-filter",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "BRITA water-filter",
    },
    description: {
      en: "water filtering is a method used to filter out undesired chemical compounds, organic and inorganic materials, and biological contaminants from water. The purpose of water filtration is to provide clean drinking water.",
    },
    category: {
      _id: "632ac9c24d87ff2494210b84",
      name: {
        en: "Water Filter",
      },
    },
    stock: 514,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 25.96,
      price: 25.96,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/x1nTQfpN/BRITA-water-Filter-Dispenser-1-each.jpg",
    ],
    tag: ['["brita","water-filter"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1705",
    slug: "brita-water-filter-dispenser",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "BRITA water-filter Dispenser",
    },
    description: {
      en: "water filtering is a method used to filter out undesired chemical compounds, organic and inorganic materials, and biological contaminants from water. The purpose of water filtration is to provide clean drinking water.",
    },
    category: {
      _id: "632ac9c24d87ff2494210b84",
      name: {
        en: "Water Filter",
      },
    },
    stock: 262,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 82.73,
      price: 82.73,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/0yn52ThW/BRITA-Soho-Pitcher-Filter-water-Filtration-System-White-5-Cup-each.jpg",
    ],
    tag: ['["brita","water-filter"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1704",
    slug: "brita-water-filter-pitcher",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "BRITA water-filter Pitcher",
    },
    description: {
      en: "water filtering is a method used to filter out undesired chemical compounds, organic and inorganic materials, and biological contaminants from water. The purpose of water filtration is to provide clean drinking water.",
    },
    category: {
      _id: "632ac9c24d87ff2494210b84",
      name: {
        en: "Water Filter",
      },
    },
    stock: 687,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 226.13,
      price: 226.13,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/28pSHF4w/BRITA-Replacement-water-Filters-3each.jpg",
    ],
    tag: ['["brita","water-filter"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1703",
    slug: "brita-replacement-water-filter",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "BRITA Replacement water-filter",
    },
    description: {
      en: "water filtering is a method used to filter out undesired chemical compounds, organic and inorganic materials, and biological contaminants from water. The purpose of water filtration is to provide clean drinking water.",
    },
    category: {
      _id: "632ac9c24d87ff2494210b84",
      name: {
        en: "Water Filter",
      },
    },
    stock: 524,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 91.99,
      price: 91.99,
    },
    categories: [
      {
        _id: "632ac9864d87ff2494210b49",
        name: {
          en: "Household Tools",
        },
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
      },
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/9XwftNq0/BRITA-Bottle-water-Filtration-System-Hard-Sided-1ct.jpg",
    ],
    tag: ['["brita","water-filter"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1702",
    slug: "brita-water-filter",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "BRITA water-filter",
    },
    description: {
      en: "water filtering is a method used to filter out undesired chemical compounds, organic and inorganic materials, and biological contaminants from water. The purpose of water filtration is to provide clean drinking water.",
    },
    category: {
      _id: "632ac9c24d87ff2494210b84",
      name: {
        en: "Water Filter",
      },
    },
    stock: 324,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 115.45,
      price: 115.45,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1701",
    slug: "bird-toy",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Bird Toy",
    },
    description: {
      en: "Many species of birds make fun, engaging pets. If you're considering bird ownership, the care requirements include providing good housing, nutritious food, and keeping an eye on the bird's health. You'll also need to provide plenty of enrichment and interaction, to keep your pet bird happy and alert.",
    },
    category: {
      _id: "632ab4434d87ff2494210b0e",
      name: {
        en: "Pet Care",
      },
    },
    stock: 777,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 228.43,
      price: 228.43,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c1700",
    slug: "foraging-pouch-bird-toy",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Foraging Pouch Bird Toy",
    },
    description: {
      en: "Many species of birds make fun, engaging pets. If you're considering bird ownership, the care requirements include providing good housing, nutritious food, and keeping an eye on the bird's health. You'll also need to provide plenty of enrichment and interaction, to keep your pet bird happy and alert.",
    },
    category: {
      _id: "632ab4434d87ff2494210b0e",
      name: {
        en: "Pet Care",
      },
    },
    stock: 691,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 25.43,
      price: 25.43,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ff",
    slug: "ecotrition-goofy-links",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Ecotrition Goofy Links",
    },
    description: {
      en: "Many species of birds make fun, engaging pets. If you're considering bird ownership, the care requirements include providing good housing, nutritious food, and keeping an eye on the bird's health. You'll also need to provide plenty of enrichment and interaction, to keep your pet bird happy and alert.",
    },
    category: {
      _id: "632ab4434d87ff2494210b0e",
      name: {
        en: "Pet Care",
      },
    },
    stock: 10,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 48.84,
      price: 48.84,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16fe",
    slug: "paradise-toys",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Paradise Toys",
    },
    description: {
      en: "Many species of birds make fun, engaging pets. If you're considering bird ownership, the care requirements include providing good housing, nutritious food, and keeping an eye on the bird's health. You'll also need to provide plenty of enrichment and interaction, to keep your pet bird happy and alert.",
    },
    category: {
      _id: "632ab4524d87ff2494210b19",
      name: {
        en: "Cat Care",
      },
    },
    stock: 115,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 13.99,
      price: 13.99,
    },
    categories: [
      {
        _id: "62c827b5a427b63741da9175",
        name: {
          en: "Home",
        },
      },
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
    ],
    image: [],
    tag: ["[]"],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16fd",
    slug: "kaytee-bird-food",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Kaytee Bird Food",
    },
    description: {
      en: "Many species of birds make fun, engaging pets. If you're considering bird ownership, the care requirements include providing good housing, nutritious food, and keeping an eye on the bird's health. You'll also need to provide plenty of enrichment and interaction, to keep your pet bird happy and alert.",
    },
    category: {
      _id: "632ab4434d87ff2494210b0e",
      name: {
        en: "Pet Care",
      },
    },
    stock: 124,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 210.67,
      price: 210.67,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/659bdF8x/So-Phresh-Pink-Scoopable-Odor-Lock-Clumping-Micro-Crystal-Cat-Litter-8-lb.jpg",
    ],
    tag: ['["cat-food","cat-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16fc",
    slug: "sophresh-cat-food",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Sophresh Cat Food",
    },
    description: {
      en: "Provide plenty of human companionship. Provide regular, suitable meals with a constant supply of fresh water. Provide a clean and comfortable bed. Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis.",
    },
    category: {
      _id: "632ab4524d87ff2494210b19",
      name: {
        en: "Cat Care",
      },
    },
    stock: 569,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 256.61,
      price: 256.61,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/Znm7sMj3/Pet-Qwerks-Incredibubbles-Catnip-Cat-Toy-each.jpg",
    ],
    tag: ['["cat-toy","cat-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16fb",
    slug: "cat-toy",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Cat Toy",
    },
    description: {
      en: "Provide plenty of human companionship. Provide regular, suitable meals with a constant supply of fresh water. Provide a clean and comfortable bed. Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis.",
    },
    category: {
      _id: "632ab4524d87ff2494210b19",
      name: {
        en: "Cat Care",
      },
    },
    stock: 744,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 46.63,
      price: 46.63,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/N0yzKT5y/Leaps-Bounds-Multipack-Ball-Cat-Toy-0-05lb.jpg",
    ],
    tag: ['["cat-toy","cat-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16fa",
    slug: "multipack-ball-cat-toy",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Multipack Ball Cat Toy",
    },
    description: {
      en: "Provide plenty of human companionship. Provide regular, suitable meals with a constant supply of fresh water. Provide a clean and comfortable bed. Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis.",
    },
    category: {
      _id: "632ab4524d87ff2494210b19",
      name: {
        en: "Cat Care",
      },
    },
    stock: 149,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 72.5,
      price: 72.5,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/zG2QDpXZ/Leaps-Bounds-Electronic-Shelf-Teaser-each.jpg",
    ],
    tag: ['["cat-toy","cat-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f9",
    slug: "leaps-bounds-cat-toy",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Leaps Bounds Cat Toy",
    },
    description: {
      en: "Provide plenty of human companionship. Provide regular, suitable meals with a constant supply of fresh water. Provide a clean and comfortable bed. Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis.",
    },
    category: {
      _id: "632ab4524d87ff2494210b19",
      name: {
        en: "Cat Care",
      },
    },
    stock: 724,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 152.82,
      price: 152.82,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/YCCVwT7z/IAMS-Proactive-Health-Oral-Care-Complete-Premium-Cat-Food-16-lb.jpg",
    ],
    tag: ['["cat-toy","cat-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f8",
    slug: "premium-cat-food",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Premium Cat Food",
    },
    description: {
      en: "Provide plenty of human companionship. Provide regular, suitable meals with a constant supply of fresh water. Provide a clean and comfortable bed. Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis.",
    },
    category: {
      _id: "632ab4524d87ff2494210b19",
      name: {
        en: "Cat Care",
      },
    },
    stock: 490,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 124.33,
      price: 124.33,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/6QD1n3vM/Leaps-Bounds-Playful-by-Nature-Premium-Catnip-Silver-Vine-Blend-Cat-Toy-each.jpg",
    ],
    tag: ['["cat-toy","cat-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f7",
    slug: "vine-blend-cat-toy",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Vine Blend Cat Toy",
    },
    description: {
      en: "Provide plenty of human companionship. Provide regular, suitable meals with a constant supply of fresh water. Provide a clean and comfortable bed. Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis.",
    },
    category: {
      _id: "632ab4524d87ff2494210b19",
      name: {
        en: "Cat Care",
      },
    },
    stock: 420,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 291.73,
      price: 291.73,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/nzfr54mB/Wlgd-Small-water-Blue-Pin-Brush-0-21lb.jpg",
    ],
    tag: ['["dog-brush","dog-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f6",
    slug: "blue-pin-brush",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Blue Pin Brush",
    },
    description: {
      en: "Dog Sitters supervise pets and take care of them in their owners'absence. Typical activities seen on a Dog Sitter example resume are grooming, providing food and water, taking dogs out for walk, taking dogs to vet appointments, administering medication, providing companionship, and following owner instructions.",
    },
    category: {
      _id: "632ab45b4d87ff2494210b21",
      name: {
        en: "Dog Care",
      },
    },
    stock: 426,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 207.37,
      price: 207.37,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/xCG8SXG7/Royal-Canin-Medium-Adult-Dog-Food-17-lb.jpg",
    ],
    tag: ['["dog-food","dog-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f5",
    slug: "royal-canin-dog-food",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Royal Canin Dog Food",
    },
    description: {
      en: "Dog Sitters supervise pets and take care of them in their owners'absence. Typical activities seen on a Dog Sitter example resume are grooming, providing food and water, taking dogs out for walk, taking dogs to vet appointments, administering medication, providing companionship, and following owner instructions.",
    },
    category: {
      _id: "632ab45b4d87ff2494210b21",
      name: {
        en: "Dog Care",
      },
    },
    stock: 628,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 159.85,
      price: 159.85,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/T1Rw2TCP/Pet-Safe-Elite-Big-Dog-Bark-Control-Collar-each.jpg",
    ],
    tag: ['["dog-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f4",
    slug: "pet-safe-elite",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Pet Safe Elite",
    },
    description: {
      en: "Dog Sitters supervise pets and take care of them in their owners'absence. Typical activities seen on a Dog Sitter example resume are grooming, providing food and water, taking dogs out for walk, taking dogs to vet appointments, administering medication, providing companionship, and following owner instructions.",
    },
    category: {
      _id: "632ab45b4d87ff2494210b21",
      name: {
        en: "Dog Care",
      },
    },
    stock: 82,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 97.36,
      price: 97.36,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/QMTV04Fj/Hill-s-Science-Diet-Dog-Treat-Jerky-with-Real-Beef-Mini-Strips-7-2-oz.jpg",
    ],
    tag: ['["dog-diet","dog-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f3",
    slug: "hill-science-diet-dog",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Hill Science Diet Dog",
    },
    description: {
      en: "Dog Sitters supervise pets and take care of them in their owners'absence. Typical activities seen on a Dog Sitter example resume are grooming, providing food and water, taking dogs out for walk, taking dogs to vet appointments, administering medication, providing companionship, and following owner instructions.",
    },
    category: {
      _id: "632ab45b4d87ff2494210b21",
      name: {
        en: "Dog Care",
      },
    },
    stock: 77,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.437Z",
    updatedAt: "2023-04-23T09:56:18.437Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 166.38,
      price: 166.38,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/DwD8QkyC/Extra-Extra-Small-Halloween-Dog-Taco-Costume-each.jpg",
    ],
    tag: ['["dog-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f2",
    slug: "halloween-dog-taco",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Halloween Dog Taco",
    },
    description: {
      en: "Dog Sitters supervise pets and take care of them in their owners'absence. Typical activities seen on a Dog Sitter example resume are grooming, providing food and water, taking dogs out for walk, taking dogs to vet appointments, administering medication, providing companionship, and following owner instructions.",
    },
    category: {
      _id: "632ab45b4d87ff2494210b21",
      name: {
        en: "Dog Care",
      },
    },
    stock: 52,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 142.13,
      price: 142.13,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/Z50WyKZB/Buckle-Down-Pbkl-Large-Colorado-Dog-Collar-each.jpg",
    ],
    tag: ['["dog-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f1",
    slug: "colorado-dog-collar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Colorado Dog Collar",
    },
    description: {
      en: "Dog Sitters supervise pets and take care of them in their owners'absence. Typical activities seen on a Dog Sitter example resume are grooming, providing food and water, taking dogs out for walk, taking dogs to vet appointments, administering medication, providing companionship, and following owner instructions.",
    },
    category: {
      _id: "632ab45b4d87ff2494210b21",
      name: {
        en: "Dog Care",
      },
    },
    stock: 431,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 45.56,
      price: 45.56,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/hP2Jj7FR/Bond-Co-XX-Small-For-Necks-8-10-Black-Bling-Dog-Collar-0-05lb.jpg",
    ],
    tag: ['["dog-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16f0",
    slug: "bling-dog-collar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Bling Dog Collar",
    },
    description: {
      en: "Dog Sitters supervise pets and take care of them in their owners'absence. Typical activities seen on a Dog Sitter example resume are grooming, providing food and water, taking dogs out for walk, taking dogs to vet appointments, administering medication, providing companionship, and following owner instructions.",
    },
    category: {
      _id: "632ab45b4d87ff2494210b21",
      name: {
        en: "Dog Care",
      },
    },
    stock: 663,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 182.29,
      price: 182.29,
    },
    categories: [
      {
        _id: "632ab4434d87ff2494210b0e",
        name: {
          en: "Pet Care",
        },
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
      },
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/gkzXmHTK/Bond-Co-Endless-Summer-Medium-Popsicle-Dog-Collar-each.jpg",
    ],
    tag: ['["dog-care"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ef",
    slug: "popsicle-dog-collar",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Popsicle Dog Collar",
    },
    description: {
      en: "Dog Sitters supervise pets and take care of them in their owners'absence. Typical activities seen on a Dog Sitter example resume are grooming, providing food and water, taking dogs out for walk, taking dogs to vet appointments, administering medication, providing companionship, and following owner instructions.",
    },
    category: {
      _id: "632ab45b4d87ff2494210b21",
      name: {
        en: "Dog Care",
      },
    },
    stock: 164,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 56.36,
      price: 56.36,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/hPmDFzS0/Hibiscus-Premium-Whole-Baby-Corn-425g.jpg",
    ],
    tag: ['["hibiscus-corn","canned-food"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ee",
    slug: "hibiscus-baby-corn",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Hibiscus Baby Corn",
    },
    description: {
      en: "canned food - food preserved by canning. canned foods, canned goods, tinned goods. food product, foodstuff - a substance that can be used or prepared for use as food. canned meat, tinned meat - meat preserved in a can or tin.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 485,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 199.62,
      price: 199.62,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: ["https://i.postimg.cc/br7qD8Rb/Figaro-Plain-Green-Olives-340g.jpg"],
    tag: ['["figaro-olives","canned-food"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ed",
    slug: "figaro-green-olives",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Figaro Green Olives",
    },
    description: {
      en: "canned food - food preserved by canning. canned foods, canned goods, tinned goods. food product, foodstuff - a substance that can be used or prepared for use as food. canned meat, tinned meat - meat preserved in a can or tin.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 212,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 182.88,
      price: 182.88,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/d3kqVDGw/Borges-Green-Pitted-Olives-320g.jpg",
    ],
    tag: ['["borges-olives","canned-food"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ec",
    slug: "borges-green-olive",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Borges Green Olive",
    },
    description: {
      en: "canned food - food preserved by canning. canned foods, canned goods, tinned goods. food product, foodstuff - a substance that can be used or prepared for use as food. canned meat, tinned meat - meat preserved in a can or tin.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 249,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 286.57,
      price: 286.57,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/pT1WvKhs/Borges-Black-Whole-Olives-330-Gm.jpg",
    ],
    tag: ['["borges-olives","canned-food"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16eb",
    slug: "borges-green-olives",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Borges Green Olives",
    },
    description: {
      en: "canned food - food preserved by canning. canned foods, canned goods, tinned goods. food product, foodstuff - a substance that can be used or prepared for use as food. canned meat, tinned meat - meat preserved in a can or tin.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 18,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 180.43,
      price: 180.43,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/hjGDN2jJ/American-Garden-Mushroom-Whole-Can-425g.jpg",
    ],
    tag: ['["american-mushroom","canned-food"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ea",
    slug: "american-mushroom",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "American Mushroom",
    },
    description: {
      en: "canned food - food preserved by canning. canned foods, canned goods, tinned goods. food product, foodstuff - a substance that can be used or prepared for use as food. canned meat, tinned meat - meat preserved in a can or tin.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 188,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 269,
      price: 269,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: ["https://i.postimg.cc/SKg2X2YM/Lays-Classic-Salted-25g.jpg"],
    tag: ['["lays-salted","chips & nuts"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e9",
    slug: "lays-classic-salted",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Lays Classic Salted",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab39484d89068aa7a7fb",
      name: {
        en: "Chips & Nuts",
      },
    },
    stock: 358,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 213.38,
      price: 213.38,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/3xHDzHHd/Lays-American-Style-Cream-And-Onion-Chips-25g.jpg",
    ],
    tag: ['["lays-chips","chips & nuts"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e8",
    slug: "lays-american-chips",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Lays American Chips",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab39484d89068aa7a7fb",
      name: {
        en: "Chips & Nuts",
      },
    },
    stock: 531,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 299.83,
      price: 299.83,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: ["https://i.postimg.cc/ZKNdf52G/Kurkure-Chilli-Chatka-Crackers.jpg"],
    tag: ['["kurkure","chips & nuts"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e7",
    slug: "kurkure-crackers",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Kurkure Crackers",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab39484d89068aa7a7fb",
      name: {
        en: "Chips & Nuts",
      },
    },
    stock: 473,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 127.72,
      price: 127.72,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: ["https://i.postimg.cc/pV4jYFGQ/Camel-Smoked-Almonds-40g.jpg"],
    tag: ['["chips & nuts"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e6",
    slug: "camel-smoked-almonds",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Camel Smoked Almonds",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab39484d89068aa7a7fb",
      name: {
        en: "Chips & Nuts",
      },
    },
    stock: 767,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 2.83,
      price: 2.83,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/RhknMk6p/Blue-Diamond-Almonds-Smokehouse-43g.jpg",
    ],
    tag: ['["chips & nuts"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e5",
    slug: "blue-diamond-almonds",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Blue Diamond Almonds",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab39484d89068aa7a7fb",
      name: {
        en: "Chips & Nuts",
      },
    },
    stock: 151,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 153.44,
      price: 153.44,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: ["https://i.postimg.cc/cLg8bMC4/M-M-Choco-chocolate-45gm.jpg"],
    tag: ['["choco","chocolate"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e4",
    slug: "choco-chocolate",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Choco chocolate",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab28484d89068aa7a7f5",
      name: {
        en: "Chocolate",
      },
    },
    stock: 297,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 140.84,
      price: 140.84,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: ["https://i.postimg.cc/Y0rWn5GJ/Lotte-Almond-Chocoball-46g.jpg"],
    tag: ['["lotte","chocolate"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e3",
    slug: "lotte-almond-chocoball",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Lotte Almond Chocoball",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab28484d89068aa7a7f5",
      name: {
        en: "Chocolate",
      },
    },
    stock: 334,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 42.89,
      price: 42.89,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/ydXRT1dm/Foxs-Crystal-Clear-Passiar-Mints-180g.jpg",
    ],
    tag: ['["chocolate"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e2",
    slug: "passiar-mints",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Passiar Mints",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab28484d89068aa7a7f5",
      name: {
        en: "Chocolate",
      },
    },
    stock: 248,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 147.01,
      price: 147.01,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/j2MJGMyC/CHIKO-Assorted-chocolate-Box-200g.jpg",
    ],
    tag: ['["chocolate"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e1",
    slug: "assorted-chocolate-box",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Assorted chocolate Box",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab28484d89068aa7a7f5",
      name: {
        en: "Chocolate",
      },
    },
    stock: 543,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 49.01,
      price: 49.01,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/VkpXfZpC/Alpenliebe-Smooth-Caramel-Candy-225g.jpg",
    ],
    tag: ['["candy"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16e0",
    slug: "caramel-candy",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Caramel Candy",
    },
    description: {
      en: "a small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off. b : a small piece of food: such as. (1) : a small, thin, crisp, usually salty piece of food typically prepared by frying, baking, or drying banana chips especially : potato chip — see also corn chip.",
    },
    category: {
      _id: "62cfab28484d89068aa7a7f5",
      name: {
        en: "Chocolate",
      },
    },
    stock: 284,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 92.81,
      price: 92.81,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/fRN1y5dJ/Mr-noodles-Cup-noodles-Magic-Masala-40g.jpg",
    ],
    tag: ['["mr-noodles","noodles"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16df",
    slug: "mr-noodles-magic-masala",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Mr noodles Magic Masala",
    },
    description: {
      en: "noodles are a  of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. ... noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 755,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 40.19,
      price: 40.19,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/6pfgvRVz/Mama-Hot-Spicy-Flovour-noodles-496-Gm.jpgg",
    ],
    tag: ['["mama-noodles","noodles"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16de",
    slug: "mama-hot-spicy-noodles",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Mama Hot Spicy noodles",
    },
    description: {
      en: "noodles are a  of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. ... noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 353,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 267.59,
      price: 267.59,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/fbWFjLBs/Mama-Hot-Spicy-Flovour-noodles-248g.jpg",
    ],
    tag: ['["mama-noodles","noodles"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16dd",
    slug: "mama-hot-spicy-flovour",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Mama Hot Spicy Flovour",
    },
    description: {
      en: "noodles are a  of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. ... noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 9,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 81.56,
      price: 81.56,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/RVfjv2Nk/Maggi-Bangkok-Sweet-Chilli-noodles-260g.jpg",
    ],
    tag: ['["maggi-noodles","noodles"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16dc",
    slug: "maggi-noodles",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Maggi noodles",
    },
    description: {
      en: "noodles are a  of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. ... noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 627,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 160.85,
      price: 160.85,
    },
    categories: [
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
      {
        _id: "62cfab39484d89068aa7a7fb",
        name: {
          en: "Chips & Nuts",
        },
      },
      {
        _id: "62cfab28484d89068aa7a7f5",
        name: {
          en: "Chocolate",
        },
      },
      {
        _id: "62cfab4b484d89068aa7a7ff",
        name: {
          en: "Canned Food",
        },
      },
    ],
    image: ["https://i.postimg.cc/5jcqP7Jv/Doodles-Stick-noodles-180-Gm.jpgg"],
    tag: ['["doodles-noodles","noodles"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16db",
    slug: "doodles-noodles",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Doodles noodles",
    },
    description: {
      en: "noodles are a  of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. ... noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
    },
    category: {
      _id: "62cfab4b484d89068aa7a7ff",
      name: {
        en: "Canned Food",
      },
    },
    stock: 220,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 284.68,
      price: 284.68,
    },
    categories: [
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
    ],
    image: ["https://i.postimg.cc/y6JNy6b0/Tropica-Mustard-honey-250g.jpg"],
    tag: ['["tropica-mustard","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16da",
    slug: "tropica-mustard-honey",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Tropica Mustard honey",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2b64d87ff2494210aa7",
      name: {
        en: "Men",
      },
    },
    stock: 431,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 210.86,
      price: 210.86,
    },
    categories: [
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
    ],
    image: ["https://i.postimg.cc/Qtt2stTm/Saffola-honey-500ml.jpg"],
    tag: ['["saffola-honey","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d9",
    slug: "saffola-honey",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Saffola honey",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2b64d87ff2494210aa7",
      name: {
        en: "Men",
      },
    },
    stock: 181,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 92.63,
      price: 92.63,
    },
    categories: [
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
    ],
    image: ["https://i.postimg.cc/Jtwvb5dY/Shefa-a-Natural-honey-250g.jpg"],
    tag: ['["shefa","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d8",
    slug: "shefa-natural-honey",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Shefa Natural honey",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2b64d87ff2494210aa7",
      name: {
        en: "Men",
      },
    },
    stock: 548,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 72.25,
      price: 72.25,
    },
    categories: [
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
    ],
    image: ["https://i.postimg.cc/4dSr3gvg/Dabur-honey-250g.jpg"],
    tag: ['["dabur","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d7",
    slug: "dabur-honey",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dabur honey",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2b64d87ff2494210aa7",
      name: {
        en: "Men",
      },
    },
    stock: 228,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 262.85,
      price: 262.85,
    },
    categories: [
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/MGtChRvX/Dabur-honey-1-Kg-Vatika-Tin-Can-Oil-Free.jpg",
    ],
    tag: ['["dabur","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d6",
    slug: "dabur-honey-oil-free",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Dabur honey Oil Free",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 688,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 96.26,
      price: 96.26,
    },
    categories: [
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/6pVJfFKr/Aussiebee-honey-312g-Glass-Bottle.jpg",
    ],
    tag: ['["aussiebee-honey","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d5",
    slug: "aussiebee-honey-glass-bottle",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aussiebee honey Glass Bottle",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 341,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 196.67,
      price: 196.67,
    },
    categories: [
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
    ],
    image: ["https://i.postimg.cc/y8CC9sM6/Aussiebee-honey-375-Gm-Bottle.jpg"],
    tag: ['["aussiebee-honey","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d4",
    slug: "aussiebee-honey",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aussiebee honey",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 552,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 111.65,
      price: 111.65,
    },
    categories: [
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
    ],
    image: ["https://i.postimg.cc/mrbxXVZ0/Aussiebee-honey-400g-Bottle.jpg"],
    tag: ['["aussiebee-honey","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d3",
    slug: "aussiebee-honey-bottle",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Aussiebee honey Bottle",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 637,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 264.42,
      price: 264.42,
    },
    categories: [
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
    ],
    image: ["https://i.postimg.cc/BQKGXXww/Alshifa-Natural-honey-250-Gm.jpg"],
    tag: ['["alshifa-honey","honey"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d2",
    slug: "alshifa-natural-honey",
    sku: "",
    barcode: "",
    productId: "",
    title: {
      en: "Alshifa Natural honey",
    },
    description: {
      en: "honey, sweet, viscous liquid food, dark golden in colour, produced in the honey sacs of various bees from the nectar of flowers. Flavour and colour are determined by the flowers from which the nectar is gathered. Some of the most commercially desirable honeys are produced from clover by the domestic honeybee.",
    },
    category: {
      _id: "632ab2c34d87ff2494210ab2",
      name: {
        en: "Women",
      },
    },
    stock: 756,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 54.43,
      price: 54.43,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/vTdHmftM/Pran-Mixed-Fruit-Jam-375gm.jpg"],
    tag: ['["pran-jam","jam & jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d1",
    slug: "pran-mixed-fruit-jam",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282ad",
    title: {
      en: "Pran Mixed Fruit Jam",
    },
    description: {
      en: "Jams and jellies are spreads typically made from fruit, sugar, and pectin. Jelly is made with the juice of the fruit; jam uses the meat of the fruit as well. Some vegetable jellies are also produced.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 298,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.436Z",
    updatedAt: "2023-04-23T09:56:18.436Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 209.63,
      price: 209.63,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/g0n0tY09/Pran-Mango-Jam-375-Gm.jpg"],
    tag: ['["pran-jam","jam & jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16d0",
    slug: "pran-mango-jam",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282ae",
    title: {
      en: "Pran Mango Jam",
    },
    description: {
      en: "Jams and jellies are spreads typically made from fruit, sugar, and pectin. Jelly is made with the juice of the fruit; jam uses the meat of the fruit as well. Some vegetable jellies are also produced.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 720,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 27.04,
      price: 27.04,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/MTBpxdRd/Pran-apple-Jelly-375g.jpg"],
    tag: ['["pran-jelly","jam & jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16cf",
    slug: "pran-apple-jelly",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282af",
    title: {
      en: "Pran apple Jelly",
    },
    description: {
      en: "Jams and jellies are spreads typically made from fruit, sugar, and pectin. Jelly is made with the juice of the fruit; jam uses the meat of the fruit as well. Some vegetable jellies are also produced.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 711,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 270.4,
      price: 270.4,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: [
      "https://i.postimg.cc/HLRkffJr/Foster-Clark-Jam-Raspberry-450gm.jpg",
    ],
    tag: ['["foster-clark-jam","jam & jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ce",
    slug: "foster-clark-jam",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b0",
    title: {
      en: "Foster Clark Jam",
    },
    description: {
      en: "Jams and jellies are spreads typically made from fruit, sugar, and pectin. Jelly is made with the juice of the fruit; jam uses the meat of the fruit as well. Some vegetable jellies are also produced.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 1,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 152.77,
      price: 152.77,
    },
    categories: [
      {
        _id: "632ab1e04d87ff2494210a6a",
        name: {
          en: "Jam & Jelly",
        },
      },
    ],
    image: ["https://i.postimg.cc/4x8d1Ksb/Ahmed-Mixed-Fruit-Jelly-500g.jpg"],
    tag: ['["fruit-jelly","jam & jelly"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16cd",
    slug: "ahmed-fruit-jelly",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b1",
    title: {
      en: "Ahmed Fruit Jelly",
    },
    description: {
      en: "Jams and jellies are spreads typically made from fruit, sugar, and pectin. Jelly is made with the juice of the fruit; jam uses the meat of the fruit as well. Some vegetable jellies are also produced.",
    },
    category: {
      _id: "632ab1e04d87ff2494210a6a",
      name: {
        en: "Jam & Jelly",
      },
    },
    stock: 707,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 20.83,
      price: 20.83,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/N7CV3Kk/Goddess-Garden-Broad-Spectrum-Spf-30-Natural-Mineral-Sunscreen-3-4-oz.jpg",
    ],
    tag: ['["skin-care","lotion"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16cc",
    slug: "goddess-garden-sunscreen",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b2",
    title: {
      en: "Goddess Garden Sunscreen",
    },
    description: {
      en: "skin-care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. skin-care is a part of the treatment of wound healing, radiation therapy and some medications.",
    },
    category: {
      _id: "632ab2f04d87ff2494210ad0",
      name: {
        en: "Skin Care",
      },
    },
    stock: 433,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 159.13,
      price: 159.13,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/9YBpvCj/ultra-protect-sunscreen-lotion.jpg"],
    tag: ['["skin-care","lotion"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16cb",
    slug: "sunscreen-lotion",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b3",
    title: {
      en: "Sunscreen Lotion",
    },
    description: {
      en: "skin-care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. skin-care is a part of the treatment of wound healing, radiation therapy and some medications.",
    },
    category: {
      _id: "632ab2f04d87ff2494210ad0",
      name: {
        en: "Skin Care",
      },
    },
    stock: 550,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 120.7,
      price: 120.7,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/FWP2RdG/Earthly-Remedies-by-Erin-Face-Wash-each.jpg",
    ],
    tag: ['["skin-care","face wash"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ca",
    slug: "erin-face-wash",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b4",
    title: {
      en: "Erin Face Wash",
    },
    description: {
      en: "skin-care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. skin-care is a part of the treatment of wound healing, radiation therapy and some medications.",
    },
    category: {
      _id: "632ab2f04d87ff2494210ad0",
      name: {
        en: "Skin Care",
      },
    },
    stock: 727,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 95.12,
      price: 95.12,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/WvcHzmk/Best-Choice-Absorbing-Moisturizing-Soap-7-5-oz.jpg",
    ],
    tag: ['["skin-care","lotion"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c9",
    slug: "best-choice-soap",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b5",
    title: {
      en: "Best Choice Soap",
    },
    description: {
      en: "skin-care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. skin-care is a part of the treatment of wound healing, radiation therapy and some medications.",
    },
    category: {
      _id: "632ab2f04d87ff2494210ad0",
      name: {
        en: "Skin Care",
      },
    },
    stock: 625,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 102.47,
      price: 102.47,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/jzRftZC/Banana-Boat-for-men-Triple-Defense-SPF-30-Sunscreen-Lotion-2fl-oz.jpg",
    ],
    tag: ['["skin-care","lotion"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c8",
    slug: "banana-boat-lotion",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b6",
    title: {
      en: "Banana Boat Lotion",
    },
    description: {
      en: "skin-care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. skin-care is a part of the treatment of wound healing, radiation therapy and some medications.",
    },
    category: {
      _id: "632ab2f04d87ff2494210ad0",
      name: {
        en: "Skin Care",
      },
    },
    stock: 710,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 199.08,
      price: 199.08,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/gMLqP7Q/Gillette-Vector-2s-Cartridges.jpg"],
    tag: ['["gillette","shaving needs"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c7",
    slug: "gillette-vector",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b7",
    title: {
      en: "Gillette Vector",
    },
    description: {
      en: "Health products are defined as those substances which gives energy or makes the person healthy. Health products are vitamins, minerals, herbal medicines, homeopathic preparations, probiotics and even some traditional medicines are also prescribed by doctor or any equivalent physician.",
    },
    category: {
      _id: "632ab2d54d87ff2494210ac0",
      name: {
        en: "Shaving Needs",
      },
    },
    stock: 327,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 174.85,
      price: 174.85,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/WknpN14/Gillette-Vector-1-Refillable.jpg"],
    tag: ['["gillette","shaving needs"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c6",
    slug: "gillette-vector-refillable",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b8",
    title: {
      en: "Gillette Vector Refillable",
    },
    description: {
      en: "Health products are defined as those substances which gives energy or makes the person healthy. Health products are vitamins, minerals, herbal medicines, homeopathic preparations, probiotics and even some traditional medicines are also prescribed by doctor or any equivalent physician.",
    },
    category: {
      _id: "632ab2d54d87ff2494210ac0",
      name: {
        en: "Shaving Needs",
      },
    },
    stock: 746,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 176.21,
      price: 176.21,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/cbfRDMn/Schick-Exacta-2-Pouch-2-1-Free.jpg"],
    tag: ['["schick","shaving needs"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c5",
    slug: "schick-exacta",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282b9",
    title: {
      en: "Schick Exacta",
    },
    description: {
      en: "Health products are defined as those substances which gives energy or makes the person healthy. Health products are vitamins, minerals, herbal medicines, homeopathic preparations, probiotics and even some traditional medicines are also prescribed by doctor or any equivalent physician.",
    },
    category: {
      _id: "632ab2d54d87ff2494210ac0",
      name: {
        en: "Shaving Needs",
      },
    },
    stock: 665,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 114.26,
      price: 114.26,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/m0LJmGQ/Gillette-Foam-98g-Sensitive.jpg"],
    tag: ['["gillette","shaving needs"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c4",
    slug: "gillette-foam",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282ba",
    title: {
      en: "Gillette Foam",
    },
    description: {
      en: "Health products are defined as those substances which gives energy or makes the person healthy. Health products are vitamins, minerals, herbal medicines, homeopathic preparations, probiotics and even some traditional medicines are also prescribed by doctor or any equivalent physician.",
    },
    category: {
      _id: "632ab2d54d87ff2494210ac0",
      name: {
        en: "Shaving Needs",
      },
    },
    stock: 486,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 209.02,
      price: 209.02,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/ky4ngpd/Denim-Black-After-Shave-100-Ml.jpg"],
    tag: ['["denim","shaving needs"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c3",
    slug: "denim-after-shave",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282bb",
    title: {
      en: "Denim After Shave",
    },
    description: {
      en: "Health products are defined as those substances which gives energy or makes the person healthy. Health products are vitamins, minerals, herbal medicines, homeopathic preparations, probiotics and even some traditional medicines are also prescribed by doctor or any equivalent physician.",
    },
    category: {
      _id: "632ab2d54d87ff2494210ac0",
      name: {
        en: "Shaving Needs",
      },
    },
    stock: 637,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 74.1,
      price: 74.1,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/sFgkd5X/Pepsodent-Action-Toothbrush-Medium.jpg"],
    tag: ['["oral care","toothbrush"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c2",
    slug: "pepsodent-toothbrush",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282bc",
    title: {
      en: "Pepsodent Toothbrush",
    },
    description: {
      en: "oral-care Products are intended to cleanse the oral cavity, freshen the breath, and maintain good oral hygiene. Some products also include ingredients to protect against the formation of cavities.",
    },
    category: {
      _id: "632ab2f84d87ff2494210ad8",
      name: {
        en: "Oral Care",
      },
    },
    stock: 400,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 164.36,
      price: 164.36,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/26vvL2b/Kshore-Kids-Ex-Soft-Toothbrush-522.jpg"],
    tag: ['["oral care","toothpaste"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c1",
    slug: "kshore-toothpaste",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282bd",
    title: {
      en: "Kshore Toothpaste",
    },
    description: {
      en: "oral-care Products are intended to cleanse the oral cavity, freshen the breath, and maintain good oral hygiene. Some products also include ingredients to protect against the formation of cavities.",
    },
    category: {
      _id: "632ab2f84d87ff2494210ad8",
      name: {
        en: "Oral Care",
      },
    },
    stock: 571,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 42.95,
      price: 42.95,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/4Ppsjsb/Eurofresh-S-Toothpaste-Strawb-Flv-50g.jpg",
    ],
    tag: ['["oral care","toothpaste"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16c0",
    slug: "eurofresh-toothpaste",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282be",
    title: {
      en: "Eurofresh Toothpaste",
    },
    description: {
      en: "oral-care Products are intended to cleanse the oral cavity, freshen the breath, and maintain good oral hygiene. Some products also include ingredients to protect against the formation of cavities.",
    },
    category: {
      _id: "632ab2f84d87ff2494210ad8",
      name: {
        en: "Oral Care",
      },
    },
    stock: 661,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 129.94,
      price: 129.94,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/0ngPGNp/Colgate-Plax-Complete-Care-Mouthwash-250ml.jpg",
    ],
    tag: ['["oral care","mouthwash"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16bf",
    slug: "colgate-mouthwash",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282bf",
    title: {
      en: "Colgate Mouthwash",
    },
    description: {
      en: "oral-care Products are intended to cleanse the oral cavity, freshen the breath, and maintain good oral hygiene. Some products also include ingredients to protect against the formation of cavities.",
    },
    category: {
      _id: "632ab2f84d87ff2494210ad8",
      name: {
        en: "Oral Care",
      },
    },
    stock: 8,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 141.05,
      price: 141.05,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/HxFw9Cb/Closeup-Coco-B-Charcoal-Toothpaste-140g.jpg",
    ],
    tag: ['["oral care","toothpaste"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16be",
    slug: "closeup-toothpaste",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c0",
    title: {
      en: "Closeup Toothpaste",
    },
    description: {
      en: "oral-care Products are intended to cleanse the oral cavity, freshen the breath, and maintain good oral hygiene. Some products also include ingredients to protect against the formation of cavities.",
    },
    category: {
      _id: "632ab2f84d87ff2494210ad8",
      name: {
        en: "Oral Care",
      },
    },
    stock: 493,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 219.32,
      price: 219.32,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/X4pdPwn/Pantene-Expert-Pro-V-Intense-Hydration-Shampoo-3-9-fl-oz.jpg",
    ],
    tag: ['["hair care","shampoo"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16bd",
    slug: "pantene-shampoo",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c1",
    title: {
      en: "Pantene Shampoo",
    },
    description: {
      en: "hair-care products are those that help to control the properties and behavior of the hair so that it can be maintained in a controlled and desirable manner. This can include hair conditioners, hair sprays, hair straighteners and relaxers, permanent waves, shampoos, rinses, tonics and dressings.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 447,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 64.38,
      price: 64.38,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/PNvpq91/Head-Shoulders-Ocean-Lift-Head-and-Shoulders-Ocean-Lift-Anti-Dandruff-Shampoo-23-7-Fl-Oz-Female-Hair.jpg",
    ],
    tag: ['["hair care","shampoo"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16bc",
    slug: "head shoulders shampoo",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c2",
    title: {
      en: "Head Shoulders Shampoo",
    },
    description: {
      en: "hair-care products are those that help to control the properties and behavior of the hair so that it can be maintained in a controlled and desirable manner. This can include hair conditioners, hair sprays, hair straighteners and relaxers, permanent waves, shampoos, rinses, tonics and dressings.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 544,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 0.35,
      price: 0.35,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/5BT6nYH/Redken-Conditioner-Real-Control-8-5-oz.jpg",
    ],
    tag: ['["hair care","conditioner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16bb",
    slug: "redken-conditioner",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c3",
    title: {
      en: "Redken Conditioner",
    },
    description: {
      en: "hair-care products are those that help to control the properties and behavior of the hair so that it can be maintained in a controlled and desirable manner. This can include hair conditioners, hair sprays, hair straighteners and relaxers, permanent waves, shampoos, rinses, tonics and dressings.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 422,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 78.56,
      price: 78.56,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/tbkwJvS/Pantene-Styling-Pantene-Pro-V-Power-Up-Daily-Treatment-16-9-fl-oz-Female-Hair-Care-16-9fl-oz.jpg",
    ],
    tag: ['["hair care","conditioner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ba",
    slug: "pantene-hair-care",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c4",
    title: {
      en: "Pantene hair-care",
    },
    description: {
      en: "hair-care products are those that help to control the properties and behavior of the hair so that it can be maintained in a controlled and desirable manner. This can include hair conditioners, hair sprays, hair straighteners and relaxers, permanent waves, shampoos, rinses, tonics and dressings.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 476,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 23.58,
      price: 23.58,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/7Ky2DVF/Herbal-Essences-Bio-Renew-Dry-Shampoo-4-9-fl-oz.jpg",
    ],
    tag: ['["hair care","shampoo"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b9",
    slug: "herbal-shampoo",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c5",
    title: {
      en: "Herbal Shampoo",
    },
    description: {
      en: "hair-care products are those that help to control the properties and behavior of the hair so that it can be maintained in a controlled and desirable manner. This can include hair conditioners, hair sprays, hair straighteners and relaxers, permanent waves, shampoos, rinses, tonics and dressings.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 435,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 152.48,
      price: 152.48,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/FspY5Yn/Dark-and-Lovely-6-Week-Anti-Reversion-System-Conditioner-12-fl-oz.jpg",
    ],
    tag: ['["hair care","conditioner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b8",
    slug: "dark-lovely-conditioner",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c6",
    title: {
      en: "Dark & Lovely Conditioner",
    },
    description: {
      en: "hair-care products are those that help to control the properties and behavior of the hair so that it can be maintained in a controlled and desirable manner. This can include hair conditioners, hair sprays, hair straighteners and relaxers, permanent waves, shampoos, rinses, tonics and dressings.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 428,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 182.02,
      price: 182.02,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/b3v1YG5/Clear-Scalp-Hair-Beauty-Therapy-Volumizing-Root-Boost-Nourishing-Daily-Conditioner-12-7-fl-oz.jpg",
    ],
    tag: ['["hair care","conditioner"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b7",
    slug: "clear-conditioner",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c7",
    title: {
      en: "Clear Conditioner",
    },
    description: {
      en: "hair-care products are those that help to control the properties and behavior of the hair so that it can be maintained in a controlled and desirable manner. This can include hair conditioners, hair sprays, hair straighteners and relaxers, permanent waves, shampoos, rinses, tonics and dressings.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 150,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 118.22,
      price: 118.22,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/K0SBD3v/Revlon-Lipstick-Creme-Temptress-680-0-15oz.jpg",
    ],
    tag: ['["cosmetics","lipstick"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b6",
    slug: "revlon-lipstick",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c8",
    title: {
      en: "Revlon Lipstick",
    },
    description: {
      en: "A cosmetic product shall mean any substance or mixture intended to be placed in contact with the various external parts of the human body (epidermis, hair system, nails, lips and external genital organs) or with the teeth and the mucous membranes of the oral cavity with a view exclusively or mainly to cleaning them",
    },
    category: {
      _id: "632ab2fd4d87ff2494210ae0",
      name: {
        en: "Cosmetics",
      },
    },
    stock: 190,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 269.3,
      price: 269.3,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/vJ0sNmh/Cover-Girl-Olay-Face-Lift-Effect-Firming-Makeup-Light-Medium-340-Foundation-1-5-fl-oz.jpg",
    ],
    tag: ['["cosmetics","nail color"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b5",
    slug: "firming-makeup",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282c9",
    title: {
      en: "Firming Makeup",
    },
    description: {
      en: "A cosmetic product shall mean any substance or mixture intended to be placed in contact with the various external parts of the human body (epidermis, hair system, nails, lips and external genital organs) or with the teeth and the mucous membranes of the oral cavity with a view exclusively or mainly to cleaning them",
    },
    category: {
      _id: "632ab2fd4d87ff2494210ae0",
      name: {
        en: "Cosmetics",
      },
    },
    stock: 77,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 210.76,
      price: 210.76,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/KLTKrnX/Essie-Midnight-Cami-Nail-Color-0-46-fl-oz.jpg",
    ],
    tag: ['["cosmetics","nail color"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b4",
    slug: "essie-bnil-color",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282ca",
    title: {
      en: "Essie Nail Color",
    },
    description: {
      en: "A cosmetic product shall mean any substance or mixture intended to be placed in contact with the various external parts of the human body (epidermis, hair system, nails, lips and external genital organs) or with the teeth and the mucous membranes of the oral cavity with a view exclusively or mainly to cleaning them",
    },
    category: {
      _id: "632ab2fd4d87ff2494210ae0",
      name: {
        en: "Cosmetics",
      },
    },
    stock: 235,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 74.38,
      price: 74.38,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/j4B82qJ/Zoya-N-E-Amanda-Nail-Polish-0-5fl-oz.jpg",
    ],
    tag: ['["cosmetics","nail polis"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b3",
    slug: "nail-polish",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282cb",
    title: {
      en: "Nail Polish",
    },
    description: {
      en: "A cosmetic product shall mean any substance or mixture intended to be placed in contact with the various external parts of the human body (epidermis, hair system, nails, lips and external genital organs) or with the teeth and the mucous membranes of the oral cavity with a view exclusively or mainly to cleaning them",
    },
    category: {
      _id: "632ab2fd4d87ff2494210ae0",
      name: {
        en: "Cosmetics",
      },
    },
    stock: 775,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 6.86,
      price: 6.86,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/ZHRx2LS/Color-Elixir-By-Color-Sensational-Dashing-Orchid-Lipcolor-0-17fl-oz.jpg",
    ],
    tag: ['["cosmetics","lipcolor"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b2",
    slug: "orchid-lipcolor",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282cc",
    title: {
      en: "Orchid Lipcolor",
    },
    description: {
      en: "A cosmetic product shall mean any substance or mixture intended to be placed in contact with the various external parts of the human body (epidermis, hair system, nails, lips and external genital organs) or with the teeth and the mucous membranes of the oral cavity with a view exclusively or mainly to cleaning them",
    },
    category: {
      _id: "632ab2fd4d87ff2494210ae0",
      name: {
        en: "Cosmetics",
      },
    },
    stock: 770,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 131.06,
      price: 131.06,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/6b3ZG1D/Via-Nature-Skin-Lotion-Moisturizing-Vanilla-Coconut-8oz.jpg",
    ],
    tag: ['["body care","lotion"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b1",
    slug: "skin-lotion",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282cd",
    title: {
      en: "Skin Lotion",
    },
    description: {
      en: "Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 786,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 18.66,
      price: 18.66,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/5FJZtJH/Terra-Nova-Gardenia-Petal-Soft-Lotion-8-25fl-oz.jpg",
    ],
    tag: ['["body care","lotion"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16b0",
    slug: "nova-soft-lotion",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282ce",
    title: {
      en: "Nova Soft Lotion",
    },
    description: {
      en: "Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 692,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 239.34,
      price: 239.34,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/YPrM3dy/Saavy-Naturals-Body-Wash-With-Moringa-Oil-Jasmine-8-fl-oz.jpg",
    ],
    tag: ['["body care","body oil"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16af",
    slug: "oil-jasmine",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282cf",
    title: {
      en: "Oil Jasmine",
    },
    description: {
      en: "Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 313,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 168.48,
      price: 168.48,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/QPKT5hP/Giovanni-Body-Lotion-Ultra-Sleek-For-All-Skin-Types-8-5-fl-oz.jpg",
    ],
    tag: ['["body care","lotion"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ae",
    slug: "body-lotion",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d0",
    title: {
      en: "Body Lotion",
    },
    description: {
      en: "Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 590,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.435Z",
    updatedAt: "2023-04-23T09:56:18.435Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 114.3,
      price: 114.3,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/C0Rvgzs/Dove-Creme-Mousse-Sensitive-Skin-Nourishing-Body-Wash-18-fl-oz.jpg",
    ],
    tag: ['["body care","creme"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ad",
    slug: "dove-creme",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d1",
    title: {
      en: "Dove Creme",
    },
    description: {
      en: "Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 580,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 79.3,
      price: 79.3,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/tx3FfLr/Dial-Nutri-Skin-Ultra-Hydrating-Body-Wash-Grape-Seed-Oil-Lemongrass-16-fl-oz.jpg",
    ],
    tag: ['["body care","seed oil"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ac",
    slug: "seed-oil",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d2",
    title: {
      en: "Seed Oil",
    },
    description: {
      en: "Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 282,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 284.21,
      price: 284.21,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/J7cB7YY/Care-One-Moisturizing-Body-Wash-Cucumber-Melon-12-fl-o.jpg",
    ],
    tag: ['["body care","gel"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16ab",
    slug: "cucumber-melon",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d3",
    title: {
      en: "Cucumber Melon",
    },
    description: {
      en: "Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 419,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 136.85,
      price: 136.85,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/3NqJ10Q/Avalon-Organics-bath-Shower-Gel-Gluten-Free-Cucumber-12-oz.jpg",
    ],
    tag: ['["body care","gel"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16aa",
    slug: "avalon-organics-gel",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d4",
    title: {
      en: "Avalon Organics Gel",
    },
    description: {
      en: "Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.",
    },
    category: {
      _id: "632ab2df4d87ff2494210ac8",
      name: {
        en: "Body Care",
      },
    },
    stock: 203,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 59.23,
      price: 59.23,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/XL8Dmw5/Savlon-Fresh-Antiseptic-Soap-100-Gm.jpg"],
    tag: ['["bath","soap"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a9",
    slug: "savlon-soap",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d5",
    title: {
      en: "Savlon Soap",
    },
    description: {
      en: "bathroom accessories are items specifically designed for use in a bathroom, such as soap dishes, towel racks, etc. bathroom accessories accessories typically have durable, decorative finishes.",
    },
    category: {
      _id: "632ab3044d87ff2494210ae8",
      name: {
        en: "Bath",
      },
    },
    stock: 74,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 8.32,
      price: 8.32,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/pRxDb6B/Sandalina-Soap-125-Gm.jpg"],
    tag: ['["bath","soap"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a8",
    slug: "sandalina-soap",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d6",
    title: {
      en: "Sandalina Soap",
    },
    description: {
      en: "bathroom accessories are items specifically designed for use in a bathroom, such as soap dishes, towel racks, etc. bathroom accessories accessories typically have durable, decorative finishes.",
    },
    category: {
      _id: "632ab3044d87ff2494210ae8",
      name: {
        en: "Bath",
      },
    },
    stock: 479,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 79.24,
      price: 79.24,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2d54d87ff2494210ac0",
        name: {
          en: "Shaving Needs",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: ["https://i.ibb.co/Lt144XM/Nivea-Cr-me-Care-Soap-75g.jpg"],
    tag: ['["bath","soap"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a7",
    slug: "nivea-soap",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d7",
    title: {
      en: "Nivea Soap",
    },
    description: {
      en: "bathroom accessories are items specifically designed for use in a bathroom, such as soap dishes, towel racks, etc. bathroom accessories accessories typically have durable, decorative finishes.",
    },
    category: {
      _id: "632ab3044d87ff2494210ae8",
      name: {
        en: "Bath",
      },
    },
    stock: 179,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 251.57,
      price: 251.57,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
      },
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
      },
      {
        _id: "632ab2df4d87ff2494210ac8",
        name: {
          en: "Body Care",
        },
      },
      {
        _id: "632ab2f04d87ff2494210ad0",
        name: {
          en: "Skin Care",
        },
      },
      {
        _id: "632ab2f84d87ff2494210ad8",
        name: {
          en: "Oral Care",
        },
      },
      {
        _id: "632ab2fd4d87ff2494210ae0",
        name: {
          en: "Cosmetics",
        },
      },
      {
        _id: "632ab3044d87ff2494210ae8",
        name: {
          en: "Bath",
        },
      },
    ],
    image: [
      "https://i.ibb.co/YfJTLV4/Neem-Original-honey-Turmeric-Soap-75g.jpg",
    ],
    tag: ['["bath","soap"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a6",
    slug: "neem-original-soap",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d8",
    title: {
      en: "Neem Original Soap",
    },
    description: {
      en: "bathroom accessories are items specifically designed for use in a bathroom, such as soap dishes, towel racks, etc. bathroom accessories accessories typically have durable, decorative finishes.",
    },
    category: {
      _id: "632ab3044d87ff2494210ae8",
      name: {
        en: "Bath",
      },
    },
    stock: 137,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 15.98,
      price: 15.98,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
    ],
    image: ["https://i.ibb.co/26DbDXx/Harmony-Orange-Satsuma-Soap-70g.jpg"],
    tag: ['["bath","soap"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a5",
    slug: "harmony-orange-soap",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282d9",
    title: {
      en: "Harmony Orange Soap",
    },
    description: {
      en: "bathroom accessories are items specifically designed for use in a bathroom, such as soap dishes, towel racks, etc. bathroom accessories accessories typically have durable, decorative finishes.",
    },
    category: {
      _id: "632ab2864d87ff2494210a8a",
      name: {
        en: "Beauty & Healths",
      },
    },
    stock: 283,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 202.02,
      price: 202.02,
    },
    categories: [
      {
        _id: "632ab2864d87ff2494210a8a",
        name: {
          en: "Beauty & Healths",
        },
      },
    ],
    image: ["https://i.ibb.co/frhMsN7/Glory-Adult-Diaper-Large-8-Packet.jpg"],
    tag: ['["baby care","baby accessories"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a4",
    slug: "glory-diaper",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282da",
    title: {
      en: "Glory Diaper",
    },
    description: {
      en: "Baby Products are products intended to be used on infants and category under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.",
    },
    category: {
      _id: "632ab2864d87ff2494210a8a",
      name: {
        en: "Beauty & Healths",
      },
    },
    stock: 16,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 235.67,
      price: 235.67,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "63f12afdcc480f0454f475dd",
        name: {
          en: "Baby Food",
        },
      },
    ],
    image: [
      "https://i.ibb.co/yYsskBN/Cerelac-Wheat-apple-Cornflakes-400-Gm-BIB.jpg",
    ],
    tag: ['["baby care","baby-food"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a3",
    slug: "cerelac-cornflakes",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282db",
    title: {
      en: "Cerelac Cornflakes",
    },
    description: {
      en: "Baby Products are products intended to be used on infants and category under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.",
    },
    category: {
      _id: "63f12afdcc480f0454f475dd",
      name: {
        en: "Baby Food",
      },
    },
    stock: 597,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 243.28,
      price: 243.28,
    },
    categories: [
      {
        _id: "632aca2b4d87ff2494210be8",
        name: {
          en: "Fruits & Vegetable",
        },
      },
      {
        _id: "63f12afdcc480f0454f475dd",
        name: {
          en: "Baby Food",
        },
      },
    ],
    image: [
      "https://i.ibb.co/R9Pn8XN/Cerelac-Wheat-apple-Cherry-400-Gm-BIB.jpg",
    ],
    tag: ['["baby care","baby-food"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a2",
    slug: "cerelac-cherry",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282dc",
    title: {
      en: "Cerelac Cherry",
    },
    description: {
      en: "Baby Products are products intended to be used on infants and category under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.",
    },
    category: {
      _id: "63f12afdcc480f0454f475dd",
      name: {
        en: "Baby Food",
      },
    },
    stock: 379,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
  {
    prices: {
      discount: 0,
      originalPrice: 87.02,
      price: 87.02,
    },
    categories: [
      {
        _id: "632ab14a4d87ff2494210a29",
        name: {
          en: "Milk & Dairy",
        },
      },
    ],
    image: ["https://i.ibb.co/YddcNxc/Biomil-1-MINI-Tin-200-Gm.jpg"],
    tag: ['["baby care","baby-food"]'],
    variants: [],
    status: "show",
    _id: "644500c2839a5e0c2f5c16a1",
    slug: "biomil-1",
    sku: "",
    barcode: "",
    productId: "639dc0f5c2fce72b697282dd",
    title: {
      en: "Biomil-1",
    },
    description: {
      en: "Baby Products are products intended to be used on infants and category under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.",
    },
    category: {
      _id: "632ab14a4d87ff2494210a29",
      name: {
        en: "Milk & Dairy",
      },
    },
    stock: 51,
    isCombination: false,
    __v: 0,
    createdAt: "2023-04-23T09:56:18.434Z",
    updatedAt: "2023-04-23T09:56:18.434Z",
  },
];
*/

const products = [
  {
    "prices": {
      "price": 39,
      "originalPrice": 79,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/xxrgt06udahlz2d7kt5wzi7ln2jj.jpeg",
      "https://pharmelow.com/wp-content/uploads/lm54kparrks1a27fk4r08gd1hdls.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-42CQN841",
    "barcode": 3644770311552,
    "title": {
      "en": "LANBENA Cleaning Serum Removes Plaque Stains Teeth"
    },
    "description": {
      "en": "<ul>\\n \t<li>\\n<div class=\"ProductDescriptions_title__FIwWg\">Shipping &amp; Returns</div>\\n<div class=\"ProductDescriptions_descriptions__Ua4TA\">\\n<ul>\\n \t<li>We offer tracked shipping on all orders. Tracking information will be shared as soon as the order is dispatched.</li>\\n \t<li>Please check the delivery estimate before adding a product to the cart. This is displayed for every product on the website.</li>\\n \t<li>Available shipping methods and charges will be displayed at the time of checkout, depending on your exact location.</li>\\n \t<li>All customers are entitled to a return window of 14 days, starting from the date of delivery of the product(s).</li>\\n \t<li>Customers are advised to read our return policy for details of the return process, eligibility, refunds as well as cancellations or exchanges.</li>\\n \t<li>In case of any issues or concerns about Shipping or Returns, please contact us and we will be happy to help</li>\\n</ul>\\n</div></li>\\n</ul>"
    },
    "slug": "lanbena-cleaning-serum-removes-plaque-stains-teeth",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 120,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/largo.png",
      "https://pharmelow.com/wp-content/uploads/17349713_1_92.jpg",
      "https://pharmelow.com/wp-content/uploads/s-l640.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-X4DJAVKY",
    "barcode": 9276652383247,
    "title": {
      "en": "Largo Cream Inverma Orignal"
    },
    "description": {
      "en": "Largo Cream Inverma Original ? the ultimate solution for men seeking to enhance their size and boost their emotional confidence. This remarkable cream offers a simple yet effective method for achieving your desired size and performance. By applying Largo Cream externally and massaging gently, you can expect to experience a thicker, harder, and more satisfying experience that both you and your partner will love. Unlike many alternatives, Largo Cream harnesses the power of 100% natural ingredients, ensuring optimal results without any side effects or irritations. Consistent use of Largo Cream encourages tissue expansion, leading to an easier and more impressive experience. Feel a noticeable increase in girth and a larger diameter, with potential gains of up to 1-2 inches in size. Not only will your organ size improve, but you'll also enjoy rock-hard emotions, enhanced stamina, improved timing, and increased power. Achieve the results you desire within just a few weeks of regular use. Largo Cream ? your key to a more confident and satisfying experience."
    },
    "slug": "largo-cream-inverma-orignal",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 70,
      "originalPrice": 100,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1233102-1.jpg",
      "https://pharmelow.com/wp-content/uploads/1233102-2.jpg",
      "https://pharmelow.com/wp-content/uploads/cfevgqidjr2oefduffd0-copy.jpg",
      "https://pharmelow.com/wp-content/uploads/439157558_18092100787424442_1290343494375399dsad612_n.jpg",
      "https://pharmelow.com/wp-content/uploads/422586356_18092100760424442_3799393954371286392_n.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-9JMYN825",
    "barcode": 9501582677877,
    "title": {
      "en": "Original Breast Enlarging Dr Rashel Cream"
    },
    "description": {
      "en": "Breast enlargement cream Dr-Rashel worked on developing a breast enlargement cream a mixture of herbs and natural substances that work on enlarging the chest to seem larger in a few weeks. With regular use, you will notice a change in the size of the chest to become larger for what it was like. When applied topically, the <b>cream works</b> to increase the production of breast fat tissue and overall�<b>breast</b>�size. Various botanical herbs, antioxidants, and hormone balancers in the�<b>cream</b> encourage the growth of fat cells in your breasts and keep existing fat cells for larger, firmer, more perky�<b>breasts</b>."
    },
    "slug": "original-breast-enlarging-dr-rashel-cream",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/jaguar-power-gel.jpg",
      "https://pharmelow.com/wp-content/uploads/Honey-Extract.jpg",
      "https://pharmelow.com/wp-content/uploads/Banana-Extract.jpg",
      "https://pharmelow.com/wp-content/uploads/Strawberry-Extract.jpg",
      "https://pharmelow.com/wp-content/uploads/Cherry-Extract.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-50PMX6CO",
    "barcode": 2093352073431,
    "title": {
      "en": "Jaguar Power Play Gel"
    },
    "description": {
      "en": "Jaguar Power Play Gel comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-power-play-gel",
    "category": {
      "name": {
        "en": "Gel"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Strawberry-Extract.jpg",
      "https://pharmelow.com/wp-content/uploads/289818435_997649604259460_6869460047645744481_n-copy.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-HDVAF2MM",
    "barcode": 8904986238797,
    "title": {
      "en": "Jaguar Men Gel (Strawberry Extract)"
    },
    "description": {
      "en": "Jaguar Power Play Gel (Strawberry Extract) comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-men-gel-strawberry-extract",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Cherry-Extract.jpg",
      "https://pharmelow.com/wp-content/uploads/289818435_997649604259460_6869460047645744481_n-copy.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-7I0XV57X",
    "barcode": 8828987113214,
    "title": {
      "en": "Jaguar Men Gel (Cherry Extract)"
    },
    "description": {
      "en": "Jaguar Power Play Gel (Cherry Extract) comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-men-gel-cherry-extract",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Banana-Extract.jpg",
      "https://pharmelow.com/wp-content/uploads/jaguar-power-gel.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-ETSUUL4V",
    "barcode": 4643920314398,
    "title": {
      "en": "Jaguar Gel"
    },
    "description": {
      "en": "Jaguar Power Play Gel (Banana Extract) comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-gel",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Honey-Extract.jpg",
      "https://pharmelow.com/wp-content/uploads/289818435_997649604259460_6869460047645744481_n-copy.jpg",
      "https://pharmelow.com/wp-content/uploads/jaguar-power-gel.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-6JYHX277",
    "barcode": 1238033696795,
    "title": {
      "en": "Jaguar Power Men Gel Honey"
    },
    "description": {
      "en": "Jaguar Power Men Gel (PineappleExtract) comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-power-men-gel-honey",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 85,
      "discount": 25
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/00123.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-IXCG09WM",
    "barcode": 8710553345399,
    "title": {
      "en": "Jaguar Power Cream"
    },
    "description": {
      "en": "Unleash your inner Jaguar with our groundbreaking Jaguar Power Cream For Men, the pinnacle of natural enhancement. Tired of feeling dissatisfied with your size? Look no further. This 100% natural formula offers quick, tangible results, turning your desires into reality in just a matter of days. Experience a transformation like no other as Jaguar Power Cream enhances both the length and girth. Bid farewell to premature and usher in a fulfilling life that leaves you and your partner yearning for more. But Jaguar Cream is more than just an enlargement solution; it's a game-changer for your bedroom prowess. Feel the surge of power as it thickens and strengthens your experience, bestowing you with long-lasting and rock-solid experience. Experience \\nsoar to new heights, and recovery becomes a relic of the past. Elevate your performance, extend lovemaking sessions, and control with absolute precision. Enhanced blood flow promotes a healthier, robust health, ensuring sustained pleasure for both you and your partner. Don't deny yourself the ecstasy you both deserve. With Jaguar Cream, last up to 10 times longer."
    },
    "slug": "jaguar-power-cream",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 80,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/002535.jpg",
      "https://pharmelow.com/wp-content/uploads/545454.jpg",
      "https://pharmelow.com/wp-content/uploads/HTB1zmSXacfrK1RkSmLyq6xGApXab.png",
      "https://pharmelow.com/wp-content/uploads/HTB1kuifaffsK1RjSszgq6yXzpXao.png",
      "https://pharmelow.com/wp-content/uploads/78546456.jpg",
      "https://pharmelow.com/wp-content/uploads/6674574574657.jpg",
      "https://pharmelow.com/wp-content/uploads/HTB1Jo1cajzuK1RjSspeq6ziHVXaJ.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-TX9G91XL",
    "barcode": 3216415791038,
    "title": {
      "en": "Sanda Oil (Original)"
    },
    "description": {
      "en": "Discover the ancient secrets of saandhha oil, your trusted Ayurvedic ally for enhancing male vitality. This 100% safe and natural penis enlargement oil is expertly formulated to address size and feeling concerns, redefining your confidence and pleasure. Saandhha oil not only increases penis size but also boosts stamina and power, revitalizing your performance. Bid farewell to worries about dysfunction and embrace a more fulfilling intimate life. Experience the power of Ayurveda as you enhance your performance, amplify pleasure, and rediscover your feelings. Sanda Sanda Oil is your pathway to a more confident and satisfying experience, naturally. Elevate your performance and pleasure with Sanda Sanda Oil today!"
    },
    "slug": "sanda-oil-original",
    "category": {
      "name": {
        "en": "Spray"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 150,
      "originalPrice": 250,
      "discount": 100
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/3a3f6e0d-6f9f-4a13-bfe5-8a6cddsfc935e2a.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-ZG3B45H3",
    "barcode": 6692368845221,
    "title": {
      "en": "Biomenix Capsule (Original)"
    },
    "description": {
      "en": "Introducing the pinnacle of scientific innovation and natural potency: Biomenix Capsules, the ultimate solution for those seeking to elevate their vitality and performance. Each capsule is a meticulously crafted blend of powerful ingredients, designed to unleash your true physical potential. Biomenix Capsules employ a revolutionary absorption technology that ensures every nutrient is fully utilized by your body, delivering rapid and remarkable results. Experience unparalleled energy, vitality, and confidence with Biomenix Capsules, the key to unlocking your peak performance. Step into a new realm of health and vigor; embrace the change that Biomenix Capsules bring. Transform your life today with the power of Bio manix Capsules, where excellence and nature converge."
    },
    "slug": "biomenix-capsule-original",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 240,
      "originalPrice": 280,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/b064edec-af5b-45d1-b30b-f8f5asdy.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-UH7AO86O",
    "barcode": 7383315249542,
    "title": {
      "en": "Bio Manix (USA Original)"
    },
    "description": {
      "en": "Presenting Biomenix USA Original ? your ultimate solution for unprecedented vitality, vigor, and performance. Elevate your confidence and embrace a transformative experience with our groundbreaking formulation, meticulously crafted with precision in the USA. Biomenix is not just another supplement; it's a revolution in men's health, designed to amplify your strength, endurance, and overall well-being. With an exquisite blend of natural ingredients, each capsule of Biomenix USA Original promises to deliver the potency and vitality you've been seeking. Unlock your full potential and redefine your limits with Biomenix USA Original ? where excellence and performance converge. Make the choice today to experience the pinnacle of men's health and wellness. Biomenix USA Original, because you deserve to live your life at its peak."
    },
    "slug": "bio-manix-usa-original",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 119,
      "originalPrice": 170,
      "discount": 51
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/2446436.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-YEL1R00T",
    "barcode": 2047270538275,
    "title": {
      "en": "Black Cobra Tabs"
    },
    "description": {
      "en": "Introducing the unmatched prowess of the Black Cobra Tablet ? your ultimate ally in the pursuit of invincible vitality and peak performance. Engineered with precision from groundbreaking compounds, this marvel of pharmaceutical excellence promises to elevate your endurance, strength, and energy levels to extraordinary heights. Each tablet is a symphony of potency, designed to catapult your capabilities beyond the realm of the ordinary. Experience the surge of unparalleled power and confidence that comes with the Black Cobra Tablet. Unleash your potential and dominate the competition with ease. Embrace the transformation into the best version of yourself. Your journey towards supremacy begins now."
    },
    "slug": "black-cobra-tabs",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 79,
      "originalPrice": 120,
      "discount": 41
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/75e5cc72-4c22-4274-b9c8-c9dfer1a820-copy.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-8QEO50KI",
    "barcode": 1107672002932,
    "title": {
      "en": "Cobra Xtra Tablets"
    },
    "description": {
      "en": "Specially formulated with a potent blend of natural ingredients, Cobra Xtra Tablets are designed to invigorate and enhance your vitality, endurance, and overall wellness"
    },
    "slug": "cobra-xtra-tablets",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 75,
      "discount": 25
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/98765456789.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-5NSSNCQP",
    "barcode": 5204555222398,
    "title": {
      "en": "Delay Wipes (Original)"
    },
    "description": {
      "en": "Introducing Original Delay Wipes for Men: the ground-breaking innovation in lasting pleasure. Crafted with meticulous precision, our wipes are imbued with a proprietary blend of natural extracts, designed to enhance endurance without sacrificing sensitivity. Perfect for the modern man who seeks to elevate his intimate experiences, these discreet, easy-to-use wipes offer a seamless addition to your repertoire, ensuring you stay in the moment, longer. Each wipe is encapsulated in individual, sophisticated packaging, making them the ideal companion for those who are always on the go. Say goodbye to compromise and hello to prolonged bliss with Original Delay Wipes for Men - where confidence meets satisfaction."
    },
    "slug": "delay-wipes-original",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 85,
      "discount": 35
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/123032848.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-LRN00C96",
    "barcode": 5870000210038,
    "title": {
      "en": "Delay Wipes For Men"
    },
    "description": {
      "en": "Introducing our revolutionary Delay Wipes for Men - your secret weapon for lasting confidence and unparalleled endurance. Meticulously crafted with a potent yet skin-friendly formula, these wipes are a beacon of strength, designed to empower men in their most intimate moments. Each wipe is imbued with a unique blend of natural extracts and advanced compounds that gently desensitize, allowing for prolonged pleasure without compromising sensation. Compact, discreet, and easy to use, they fit seamlessly into your lifestyle, ensuring you?re prepared for moments of spontaneity and connection. Elevate your intimate experiences with our Delay Wipes for Men, where durability meets satisfaction in the dance of love. Transform ordinary nights into chapters of passion that linger in memory, forging bonds that resonate with the harmony of fulfilled desires. Try them today and step into a realm where every moment is an opportunity for triumph and every encounter is an ode to enduring ecstasy."
    },
    "slug": "delay-wipes-for-men",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 120,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/f5010b03d2a708520beeaf.jpg",
      "https://pharmelow.com/wp-content/uploads/Ha0f5345894df4a43bcc8a6ss3901ee3d69I.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-OPTPU35D",
    "barcode": "0073803374593",
    "title": {
      "en": "Developpe Cream Gel"
    },
    "description": {
      "en": "Introducing the revolutionary Developpe Cream Gel, a masterful blend of science and nature designed to invigorate and enhance. This luxurious cream gel is infused with a potent mix of natural ingredients and cutting-edge technology, ensuring that every application is an experience in unparalleled excellence. From its velvety texture to its quick absorption rates, the Developpe Cream Gel promises not just to meet, but exceed your expectations. Elevate your daily routine with this exquisite formulation that offers visible results, making it a quintessential addendum for those who demand nothing but the best. Embrace the essence of perfection and allow the Developpe Cream Gel to redefine your standards."
    },
    "slug": "developpe-cream-gel",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 70,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/56457747.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-3F83HXD4",
    "barcode": 1781187370979,
    "title": {
      "en": "Derma Gold Fitting Insertions"
    },
    "description": {
      "en": "Introducing the ultimate skin innovation: Derma Gold Fitting Insertions. Elevate your beauty regime with this exquisite, groundbreaking solution designed to redefine your skin's texture and appearance. Crafted from premium quality gold, these fitting insertions are a testament to luxury and efficiency, promising to deliver unmatched radiance and youthfulness to your complexion. Each insertion is meticulously designed to blend seamlessly with the skin, offering not just an aesthetic upgrade but a transformative skincare experience. Derma Gold Fitting Insertions are the epitome of elegance and effectiveness, ensuring that your skin receives the royal treatment it deserves. Make a statement, indulge in the luxury of gold, and unleash your skin?s potential for unparalleled beauty. Perfect for those who seek the finest in skincare innovation, these insertions are your key to unlocking a radiant, flawless complexion. Embrace the glow of confidence and the touch of gold ? because with Derma Gold Fitting Insertions, you?re not just buying a product; you?re investing in a new era of skin perfection.\\n"
    },
    "slug": "derma-gold-fitting-insertions",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 200,
      "originalPrice": 300,
      "discount": 100
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/76543567.jpg",
      "https://pharmelow.com/wp-content/uploads/xK2fp5zFIg4-1000x1000-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-XMZANU91",
    "barcode": 3899521165179,
    "title": {
      "en": "Original Gensing Kianpi Pil"
    },
    "description": {
      "en": "Unleash the boundless energy within you with the transformative power of Gensing Kianpi Pil. Expertly formulated to invigorate and revitalize, this exceptional product transcends ordinary dietary supplements, offering an unparalleled blend of ancient wisdom and modern science. Gensing Kianpi Pil is your golden ticket to not just sustaining energy, but elevating your vitality to levels you've only dreamed of. Crafted with the finest Ginseng, known for its extraordinary ability to boost energy levels, enhance mental clarity, and improve overall well-being, this supplement stands as a beacon of health and vigor. Ideal for those seeking to gain weight in a healthy manner, enhance their digestive metabolism, and empower their life's journey with unstoppable energy. Embrace the essence of robust health and profound strength. Let Gensing Kianpi Pil be the catalyst for your transformation?unlocking the door to a life filled with energy, vitality, and endless possibility."
    },
    "slug": "original-gensing-kianpi-pil",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 120,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/129734.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-QNBJXXDI",
    "barcode": 2958287408515,
    "title": {
      "en": "Golden Bull Capsule"
    },
    "description": {
      "en": "Introducing the exquisite Golden Bull Capsule ? a marvel of modern supplement innovation, designed to unleash the ultimate power within. Crafted with the finest, meticulously sourced ingredients, this premium capsule is the key to unlocking a wealth of vitality and strength that lies dormant in you. The Golden Bull Capsule is more than just a supplement; it is a beacon of resilience, endurance, and unyielding energy. Each capsule is packed with nature's most potent elements, blended to perfection, ensuring not only an immediate surge of vigor but also a sustained release of vitality that will carry you through the day. Perfect for those who seek to surpass their limits, elevate their performance, and achieve greatness in every endeavor. With the Golden Bull Capsule, prepare to experience an unparalleled boost that will make you stand out from the herd. Step into the arena of life with confidence and dominate every challenge that comes your way. Make the Golden Bull Capsule your secret weapon and charge towards success. Buy now and transform your potential into reality."
    },
    "slug": "golden-bull-capsule",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 79,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/543536.jpg",
      "https://pharmelow.com/wp-content/uploads/a56ff8dc-d8ce-46cf-8580-ce1c64a096e2.jpg",
      "https://pharmelow.com/wp-content/uploads/10006.jpeg",
      "https://pharmelow.com/wp-content/uploads/18837.jpg",
      "https://pharmelow.com/wp-content/uploads/10066.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-O6ECIKOV",
    "barcode": 3363764110932,
    "title": {
      "en": "Grenason Cream"
    },
    "description": {
      "en": "Introducing the epitome of luxury and efficacy in skin care: Grenason Cream. Crafted with the discerning consumer in mind, this exquisite cream is the pinnacle of years of scientific research and natural ingredients synergy. It?s not just a cream; it?s your skin?s new best friend. Imagine drenching your skin in a lavish blend of nature's finest botanicals and cutting-edge hydration technology, each use promising to envelop your skin in unparalleled softness while offering deep nourishment. Grenason Cream is designed to combat the signs of aging, giving your visage a radiant, youthful glow that speaks volumes of its premium quality. Its rich, yet non-greasy formula penetrates deeply, providing moisture that lasts, without clogging pores. Suitable for all skin types, our cream actively works to repair and revitalise skin cells, diminishing fine lines and delivering a visibly firm, plump complexion. Experience the allure of visibly healthier skin. Embrace the confidence that comes with the luminous, velvety touch of Grenason Cream. This isn't just a purchase; it's an investment in your skin's future, a testament to your impeccable taste and foresight. Why settle for ordinary, when Grenason Cream offers you extraordinary? Treat yourself to the cream that stands a class apart, because you deserve the epitome of skin care elegance.\\n"
    },
    "slug": "grenason-cream",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 60,
      "discount": 21
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/2535253.jpg",
      "https://pharmelow.com/wp-content/uploads/74637.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-6YUDH5IR",
    "barcode": 8448565684686,
    "title": {
      "en": "Hip Up Cream (Original)"
    },
    "description": {
      "en": "Introducing the epitome of skin indulgence and enhancement - the Silky Hip Up Cream Original. Crafted with a unique blend of natural extracts and cutting-edge skincare technology, this luxurious cream is your secret to achieving a visibly uplifted, smoother, and more voluptuous silhouette. Imagine the confidence of flaunting firmer, supple hips with a radiance that speaks volumes of your inner beauty and vitality. The Silky Hip Up Cream Original is not just a product; it's an experience, a ritual, that pampers your skin while providing deep nourishment and rejuvenation. Its feather-light texture glides effortlessly, absorbing quickly to deliver potent active ingredients deep within your skin, ensuring maximum efficacy without any greasiness. Embrace the allure of irresistibly soft and toned hips, making every outfit look impeccable and every moment feel extraordinary. Make the Silky Hip Up Cream Original a part of your daily beauty regimen and step into a world where confidence blooms with every application. Why settle for mediocrity when you can elevate your beauty routine with the Silky Hip Up Cream Original? Let your beauty radiate from within and turn heads with your stunning, sculpted silhouette. Elevate your skincare game today.\\n"
    },
    "slug": "hip-up-cream-original",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 60,
      "discount": 21
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/52745.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-Y76325WI",
    "barcode": 4163597348316,
    "title": {
      "en": "Lanthome Oil (Enlarge Growth)"
    },
    "description": {
      "en": "Introducing the revolutionary Lanthome Enlarge Growth Oil ? your ultimate solution for achieving remarkable enhancements in a natural and safe way. Crafted meticulously with a blend of premium, all-natural ingredients, this growth oil is your secret weapon to unlocking a new level of confidence and well-being. Its potent formula is designed to deliver visible results, ensuring you not only feel but also see the difference. Unlike other products on the market, Lanthome Enlarge Growth Oil is engineered with your safety and comfort in mind, offering a non-invasive alternative to conventional methods. With consistent use, you'll experience a significant improvement in size and performance, all while nurturing your skin with its moisturizing properties. Say goodbye to doubts and hello to a renewed you with Lanthome Enlarge Growth Oil ? because you deserve to feel extraordinary.\\n"
    },
    "slug": "lanthome-oil-enlarge-growth",
    "category": {
      "name": {
        "en": "Spray"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 80,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/4252.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-JBCTXWW8",
    "barcode": 9398023552394,
    "title": {
      "en": "Lovegra Women Jelly"
    },
    "description": {
      "en": "Embrace the power of Lovegra and experience a reawakened desire and revitalized energy that will transform your experience."
    },
    "slug": "lovegra-women-jelly",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 70,
      "discount": 31
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/393463.jpg",
      "https://pharmelow.com/wp-content/uploads/214151.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-4DG4TQSX",
    "barcode": 1477900653831,
    "title": {
      "en": "Magic Max Tissue"
    },
    "description": {
      "en": "Introducing Magic Max Tissue ? the only tissue you'll ever need. Gone are the days of settling for ordinary, rough tissues that barely meet your needs. Magic Max Tissues are a revelation in personal care, merging unparalleled softness with incredible strength, ensuring each sheet is not only gentle on your skin but durable enough to tackle the toughest messes. Crafted with our unique UltraSoft technology, these tissues glide over your skin like a gentle caress, providing comfort and care with every touch. Perfect for sensitive noses and delicate areas, they leave your skin feeling pampered and protected. Moreover, Magic Max Tissues are environmentally conscious, made from sustainable sources without compromising quality or performance. With each ethereal sheet, experience a blend of luxury and responsibility, making it not just a choice but a statement. Choose Magic Max Tissue today ? because why settle for mundane when you can have magic?\\n"
    },
    "slug": "magic-max-tissue",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 80,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/12348361.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-37LPOZ2C",
    "barcode": "0356500998713",
    "title": {
      "en": "Maralgel (Original)"
    },
    "description": {
      "en": "Introducing Maralgel: a transformative leap in skincare technology that beckons you to embrace the sheer, unadulterated luxury of nature. Maralgel is not just another addition to your skincare regimen?it's a revelation, an elixir of youth meticulously crafted from the purest marine extracts to deliver unparalleled hydration, rejuvenation, and invigoration to your complexion. This ethereal gel formulation sinks into your skin, creating an instant veil of moisture that feels as light as air, yet deeply nourishes and revitalizes every cell it touches. Enriched with minerals and antioxidants sourced from the heart of the ocean, Maral gel works around the clock to detoxify, heal, and restore your skin to its most luminous, silky-smooth state. Bid farewell to the days of dull, tired skin. Embrace the glow, the radiance, and the sheer vitality that comes with Maral gel. Your journey to a flawless, age-defying complexion begins here."
    },
    "slug": "maralgel-original",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 90,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/87654678.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-TCYVVREC",
    "barcode": 5606143074431,
    "title": {
      "en": "Maral Gel Gold (Original)"
    },
    "description": {
      "en": "Unveil the secret to an invigorated, more vibrant self with Maral Gel Gold. This premium product is not just an addition to your regimen; it's a revolution in personal enhancement. Crafted with a unique blend of natural extracts, Maral Gel Gold promises not only to elevate your confidence but to transform your vitality. Its meticulously selected ingredients are known for their potent properties, making it a standout choice for those seeking a significant enhancement in their personal well-being. With Maral Gel Gold, experience a profound transformation that resonates not just in physical wellness, but in an uplifted spirit and renewed vigour. Embrace the pinnacle of natural enhancement and let Maral Gel Gold unlock a more powerful, radiant you. When excellence and efficacy are non-negotiable, Maral Gel Gold is the unequivocal choice. Let the golden touch of Maral Gel guide you to your zenith."
    },
    "slug": "maral-gel-gold-original",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 40,
      "originalPrice": 75,
      "discount": 35
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/4363237.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-NOF540AO",
    "barcode": 9614117323542,
    "title": {
      "en": "Max Man Power Gel"
    },
    "description": {
      "en": "Introducing the revolutionary Max Man Power Gel, a masterfully crafted formula designed to elevate the modern man's grooming ritual to uncharted territories of excellence. Embark on a journey of transformation with this potent blend, where every application promises not just to invigorate but to redefine what you thought possible in personal care. Crafted with a pioneering fusion of nature?s most powerful ingredients and cutting-edge science, Max Man Power Gel doesn?t just ensure your skin feels irresistibly smooth; it energizes it from within, awakening a new level of confidence and vibrancy that radiates through your presence. This isn't merely a product; it's your secret weapon in the pursuit of power, allure, and the embodiment of vitality. Make no mistake, Max Man Power Gel stands in a league of its own, far outpacing competitors with its commitment to quality, efficacy, and the pursuit of perfection. Experience the difference today ? because you're not just selecting a gel; you're choosing to own your power, to captivate, and to conquer. Let the transformation begin.\\n"
    },
    "slug": "max-man-power-gel",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 85,
      "originalPrice": 120,
      "discount": 35
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/47384.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-T33AWLCF",
    "barcode": 4284336764485,
    "title": {
      "en": "Maxman Caps (Original)"
    },
    "description": {
      "en": "Introducing the unparalleled Max Man Capsules, meticulously crafted for the modern man seeking to unleash his ultimate potential. This ground-breaking supplement is a symphony of scientifically-backed ingredients, designed to invigorate and enhance your vitality, stamina, and overall well-being. Max Man Capsules are not just another supplement; they are the epitome of strength and vigor embodied in a capsule. With each dose, experience a surge of renewed energy, an elevation in your physical and mental performance, and a significant boost in your confidence. Specially formulated to support various aspects of male health, Max Man Capsules are your secret weapon to achieving the pinnacle of your capabilities. Embrace the transformation, embody the power, and set forth on your journey to excellence with Max Man Capsules. Why settle for mediocrity when greatness is within your grasp? Make the choice today to elevate your standard of living and step into a realm of unmatched vitality. Max Man Capsules, because you deserve to be at the top of your game, every day."
    },
    "slug": "maxman-caps-original",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 80,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/325325.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-SUMJOFHA",
    "barcode": 3071469357261,
    "title": {
      "en": "Maxman Delay Wipe"
    },
    "description": {
      "en": "Introducing the revolutionary Maxman Delay Wipe, an innovative solution meticulously designed for the modern man seeking to enhance their endurance and prolong those intimate moments. Crafted with a unique blend of natural ingredients, this discreet and easy-to-use wipe is the key to unlocking unparalleled confidence and satisfaction in your personal encounters. From the very first use, the Maxman Delay Wipe works to gently numb the senses, allowing for extended pleasure without compromising sensation. Say goodbye to worries and hello to prolonged, blissful experiences with your partner. The Maxman Delay Wipe is your secret weapon for making memorable moments last even longer. Embrace the opportunity to elevate your intimate life to levels you never thought possible. This elite product stands out from the competition, offering not just a promise, but a proven solution for those who strive for excellence in every aspect of their life.\\n"
    },
    "slug": "maxman-delay-wipe",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 85,
      "discount": 35
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/581543-rotated-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-LH3UD3KM",
    "barcode": 3633804579631,
    "title": {
      "en": "Maxman Gel"
    },
    "description": {
      "en": "Introducing Maxman Gel, your ultimate shortcut to an enhanced and more confident intimacy. Formulated with a blend of potent natural ingredients, Maxman Gel is designed to revolutionize your intimate experiences. This powerful gel not only promises to invigorate your performance but also to increase pleasure for both you and your partner, ensuring moments of closeness are unforgettable. Its smooth, cooling texture is easily absorbed, providing fast-acting effects that are long-lasting and free of any discomfort. With Maxman Gel, experience heightened sensations, improved endurance, and a renewed sense of confidence. Elevate your intimate moments from ordinary to extraordinary. Embrace the power of Maxman Gel and transform your intimate life into a journey of discovery and pleasure. Try it now and let your experiences speak for themselves.\\n"
    },
    "slug": "maxman-gel",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 60,
      "discount": 21
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/432876.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-L0M0NHH5",
    "barcode": "0893469846285",
    "title": {
      "en": "Maxman Oil (Original)"
    },
    "description": {
      "en": "Introducing the revolutionary Maxman Gel, your ultimate ally in the pursuit of unparalleled confidence and performance. This potent formulation is expertly crafted with a cutting-edge blend of natural ingredients, designed to invigorate and enhance with every application. Maxman Gel is not just a product, but a lifestyle choice for those who accept nothing but the best in their personal endeavors. Its smooth, silky texture is easy to apply, ensuring a pleasurable experience every time. With consistent use, Maxman Gel aids in boosting vitality, stamina, and endurance, providing you with the edge you need to excel beyond boundaries. Stand out with confidence and power. Embrace the Maxman Gel experience; transform your potential into reality.\\n"
    },
    "slug": "maxman-oil-original",
    "category": {
      "name": {
        "en": "Spray"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 160,
      "originalPrice": 200,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/312462.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-U8IBILKA",
    "barcode": 6360626530058,
    "title": {
      "en": "Member XXL (Original)"
    },
    "description": {
      "en": "Introducing the revolutionary Member XXL, the ultimate solution for those desiring to amplify their masculinity and confidence. This cutting-edge formulation is meticulously designed to support men in achieving remarkable enhancements in size, strength, and endurance, setting a new standard in male vitality supplements. Member XXL's unique blend of natural ingredients is scientifically proven to provide significant results without compromises, ensuring safety and efficacy. Each capsule is a powerhouse of vitality, fostering improved blood circulation and hormonal balance, thereby offering not just physical enhancements but a surge in confidence and overall well-being. With Member XXL, experience a transformation that redefines your limits and opens the door to a life filled with confidence, satisfaction, and unparalleled performance."
    },
    "slug": "member-xxl-original",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 80,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/8724533.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-I31SLG4Z",
    "barcode": 8652712247185,
    "title": {
      "en": "Men Power Tissue"
    },
    "description": {
      "en": "Step into a world of confidence and enduring performance with our revolutionary Men Power Tissue Delay Wipes. Exquisitely formulated for the modern man who seeks control, these wipes are imbued with a potent, yet skin-friendly solution that guarantees to elevate your intimate moments. Each tissue, a masterpiece of science and nature, is designed to prolong your pleasure, ensuring that every encounter becomes a lasting memory. Encased in discreet, easily portable packaging, our Men Power Tissue Delay Wipes offer not just enhanced endurance, but also a newfound freedom in spontaneity. Say goodbye to concerns and hello to prolonged bliss. Perfect for the discerning gentleman eager to impress, these wipes are your secret weapon to unlocking a realm of satisfaction. Embrace the power, embrace the moment, with Men Power Tissue Delay Wipes."
    },
    "slug": "men-power-tissue",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 220,
      "originalPrice": 280,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/0000.2-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.1-2.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-UT2OBPFC",
    "barcode": 5397240730190,
    "title": {
      "en": "Q7 Gold Box Male"
    },
    "description": {
      "en": "<p data-pm-slice=\"1 1 []\"><code>Introducing the exquisite Gold Q7 Chocolate for Men - an unparalleled confection that transcends the ordinary.\\nArtfully crafted for the discerning gentleman, this premium chocolate is not just a treat; it's an experience.\\nEach bite unravels layers of rich, velvety chocolate, masterfully blended to captivate your palate. Sourced from the finest cocoa,\\nthe Gold Q7 is a symphony of taste, designed to indulge your senses in luxury and sophistication.\\nElevate your moments from mere memories to unforgettable experiences.�</code>"
    },
    "slug": "q7-gold-box-male",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 180,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.3-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.1-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-5BVU03XE",
    "barcode": 9860521528541,
    "title": {
      "en": "Original Vmax Capsules"
    },
    "description": {
      "en": "<p data-pm-slice=\"1 1 []\"><code>Introducing the revolutionary Vimax Vimax Dietary Capsules, a harmonious blend of nature's finest ingredients\\ncrafted to unlock your body's fullest potential. With a carefully curated formula contained within 30 potent capsules,\\nthis premium supplement is designed to invigorate and enhance your vitality, endurance, and overall well-being.\\nEach capsule is a beacon of health, meticulously engineered to support your body's natural functions,\\nempowering you to achieve optimal performance and vigor.�</code>"
    },
    "slug": "original-vmax-capsules",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 120,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.2-4.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-E0NKZ79X",
    "barcode": 7087872355585,
    "title": {
      "en": "Vmax Dietary Pils (60 Caps)"
    },
    "description": {
      "en": "<pre data-pm-slice=\"1 1 []\"><code>Introducing the pinnacle of natural potency and vitality, Vimax Vimax Dietary Capsules. \\nEach bottle contains an invigorating blend of 60 capsules, meticulously crafted to elevate your well-being to unprecedented levels.\\n Derived from nature's most powerful ingredients, these capsules are designed to support and enhance your body's natural vigor, \\nensuring you feel vibrant and energized from dawn until dusk. With Vimax Vimax Dietary Capsules,\\n experience a profound transformation in your physical and mental vitality, \\nempowering you to conquer every challenge with unparalleled strength and confidence. </code></pre>"
    },
    "slug": "vmax-dietary-pils-60-caps",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-2.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-KMN624J6",
    "barcode": 9272660132150,
    "title": {
      "en": "Largo Spray For Men"
    },
    "description": {
      "en": "<p data-pm-slice=\"1 1 []\"><code>Introducing Largo Spray for Men ? the epitome of masculine vitality and enduring performance.\\nCrafted for the modern man who seeks to elevate his prowess and confidence, Largo Spray is more than just a product;\\nit's a revelation in male empowerment. Infused with a powerful blend of natural ingredients, each spray is a promise of strength,\\ndurability, and unmatched stamina.�</code>"
    },
    "slug": "largo-spray-for-men",
    "category": {
      "name": {
        "en": "Spray"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 88,
      "originalPrice": 160,
      "discount": 72
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/76543567.jpg",
      "https://pharmelow.com/wp-content/uploads/xK2fp5zFIg4-1000x1000-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-JHNJW8IB",
    "barcode": 6432500335438,
    "title": {
      "en": "Original Gensing Kianpi Pil"
    },
    "description": {
      "en": "Unleash the boundless energy within you with the transformative power of Gensing Kianpi Pil. Expertly formulated to invigorate and revitalize, this exceptional product transcends ordinary dietary supplements, offering an unparalleled blend of ancient wisdom and modern science. Gensing Kianpi Pil is your golden ticket to not just sustaining energy, but elevating your vitality to levels you've only dreamed of. Crafted with the finest Ginseng, known for its extraordinary ability to boost energy levels, enhance mental clarity, and improve overall well-being, this supplement stands as a beacon of health and vigor. Ideal for those seeking to gain weight in a healthy manner, enhance their digestive metabolism, and empower their life's journey with unstoppable energy. Embrace the essence of robust health and profound strength. Let Gensing Kianpi Pil be the catalyst for your transformation?unlocking the door to a life filled with energy, vitality, and endless possibility."
    },
    "slug": "original-gensing-kianpi-pil",
    "category": {
      "name": {
        "en": "Uncategorized"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 55,
      "originalPrice": 85,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/2.png",
      "https://pharmelow.com/wp-content/uploads/1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-largo-men-cream",
    "barcode": 1318411002438,
    "title": {
      "en": "Largo (Germany Original) Men Cream"
    },
    "description": {
      "en": "Original Largo Men Cream ? the ultimate solution for men seeking to enhance their size and boost their emotional confidence. By applying Largo Cream externally and massaging gently, you can expect to experience a thicker, harder, and more satisfying experience that both you will love. Unlike many alternatives, Largo Cream harnesses the power of 100% natural ingredients, ensuring optimal results without any side effects or irritations. Consistent use of Largo Cream encourages tissue expansion, leading to an easier and more impressive experience."
    },
    "slug": "largo-germany-original-men-cream",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/jaguar-power-gel-1.jpg",
      "https://pharmelow.com/wp-content/uploads/Honey-Extract-1.jpg",
      "https://pharmelow.com/wp-content/uploads/Banana-Extract-1.jpg",
      "https://pharmelow.com/wp-content/uploads/Strawberry-Extract-1.jpg",
      "https://pharmelow.com/wp-content/uploads/Cherry-Extract-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-10T0VSTT",
    "barcode": 2371168508584,
    "title": {
      "en": "Jaguar Power Play Gel"
    },
    "description": {
      "en": "Jaguar Power Play Gel comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-power-play-gel",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Strawberry-Extract-1.jpg",
      "https://pharmelow.com/wp-content/uploads/289818435_997649604259460_6869460047645744481_n-copy-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-ZD364PL1",
    "barcode": 7932359339261,
    "title": {
      "en": "Jaguar Men Gel (Strawberry Extract)"
    },
    "description": {
      "en": "Jaguar Power Play Gel (Strawberry Extract) comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-men-gel-strawberry-extract",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Cherry-Extract-1.jpg",
      "https://pharmelow.com/wp-content/uploads/289818435_997649604259460_6869460047645744481_n-copy-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-O5N6IL5C",
    "barcode": 1432996107521,
    "title": {
      "en": "Jaguar Men Gel (Cherry Extract)"
    },
    "description": {
      "en": "Jaguar Power Play Gel (Cherry Extract) comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-men-gel-cherry-extract",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Banana-Extract-1.jpg",
      "https://pharmelow.com/wp-content/uploads/jaguar-power-gel-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-47LV9LIC",
    "barcode": 9160690490312,
    "title": {
      "en": "Jaguar Gel"
    },
    "description": {
      "en": "Jaguar Power Play Gel (Banana Extract) comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-gel",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 69,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Honey-Extract-1.jpg",
      "https://pharmelow.com/wp-content/uploads/289818435_997649604259460_6869460047645744481_n-copy-1.jpg",
      "https://pharmelow.com/wp-content/uploads/jaguar-power-gel-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-UAA1RDVT",
    "barcode": 7982438720343,
    "title": {
      "en": "Jaguar Power Men Gel Honey"
    },
    "description": {
      "en": "Jaguar Power Men Gel (PineappleExtract) comes in various flavors. Select your flavor and enjoy eternal happiness with its natural extracts."
    },
    "slug": "jaguar-power-men-gel-honey",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 85,
      "discount": 25
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/00123-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-JVDNJABM",
    "barcode": 9608253335811,
    "title": {
      "en": "Jaguar Power Cream"
    },
    "description": {
      "en": "Unleash your inner Jaguar with our groundbreaking Jaguar Power Cream For Men, the pinnacle of natural enhancement. Tired of feeling dissatisfied with your size? Look no further. This 100% natural formula offers quick, tangible results, turning your desires into reality in just a matter of days. Experience a transformation like no other as Jaguar Power Cream enhances both the length and girth. Bid farewell to premature and usher in a fulfilling life that leaves you and your partner yearning for more. But Jaguar Cream is more than just an enlargement solution; it's a game-changer for your bedroom prowess. Feel the surge of power as it thickens and strengthens your experience, bestowing you with long-lasting and rock-solid experience. Experience \\nsoar to new heights, and recovery becomes a relic of the past. Elevate your performance, extend lovemaking sessions, and control with absolute precision. Enhanced blood flow promotes a healthier, robust health, ensuring sustained pleasure for both you and your partner. Don't deny yourself the ecstasy you both deserve. With Jaguar Cream, last up to 10 times longer."
    },
    "slug": "jaguar-power-cream",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 79,
      "originalPrice": 120,
      "discount": 41
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/75e5cc72-4c22-4274-b9c8-c9dfer1a820-copy-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "cobra-x-tablets",
    "barcode": 5793083947564,
    "title": {
      "en": "Cobra-X Tablets"
    },
    "description": {
      "en": "Cobra X tablets are a dietary supplement designed to support male vitality and overall well-being. Each tablet contains a blend of natural ingredients that help to:<br><br>Enhance energy and stamina<br>Support immune function<br>Promote healthy blood flow"
    },
    "slug": "cobra-x-tablets",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 85,
      "discount": 35
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/123032848-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-31XP03C2",
    "barcode": 1257624783133,
    "title": {
      "en": "Delay Wipes For Men"
    },
    "description": {
      "en": "Introducing our revolutionary Delay Wipes for Men - your secret weapon for lasting confidence and unparalleled endurance. Meticulously crafted with a potent yet skin-friendly formula, these wipes are a beacon of strength, designed to empower men in their most intimate moments. Each wipe is imbued with a unique blend of natural extracts and advanced compounds that gently desensitize, allowing for prolonged pleasure without compromising sensation. Compact, discreet, and easy to use, they fit seamlessly into your lifestyle, ensuring you?re prepared for moments of spontaneity and connection. Elevate your intimate experiences with our Delay Wipes for Men, where durability meets satisfaction in the dance of love. Transform ordinary nights into chapters of passion that linger in memory, forging bonds that resonate with the harmony of fulfilled desires. Try them today and step into a realm where every moment is an opportunity for triumph and every encounter is an ode to enduring ecstasy."
    },
    "slug": "delay-wipes-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 120,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/f5010b03d2a708520beeaf-1.jpg",
      "https://pharmelow.com/wp-content/uploads/Ha0f5345894df4a43bcc8a6ss3901ee3d69I-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-5OD2VH0K",
    "barcode": "0362001397115",
    "title": {
      "en": "Developpe Men Gel"
    },
    "description": {
      "en": "Introducing the revolutionary Developpe Cream Gel, a masterful blend of science and nature designed to invigorate and enhance. This luxurious cream gel is infused with a potent mix of natural ingredients and cutting-edge technology, ensuring that every application is an experience in unparalleled excellence. From its velvety texture to its quick absorption rates, the Developpe Cream Gel promises not just to meet, but exceed your expectations. Elevate your daily routine with this exquisite formulation that offers visible results, making it a quintessential addendum for those who demand nothing but the best. Embrace the essence of perfection and allow the Developpe Cream Gel to redefine your standards."
    },
    "slug": "developpe-men-gel",
    "category": {
      "name": {
        "en": "Gels"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 25,
      "originalPrice": 50,
      "discount": 25
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/56457747-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-H7IC7F1U",
    "barcode": 7487054223389,
    "title": {
      "en": "Derma Gold Fitting Insertions"
    },
    "description": {
      "en": "Introducing the ultimate skin innovation: Derma Gold Fitting Insertions. Elevate your beauty regime with this exquisite, groundbreaking solution designed to redefine your skin's texture and appearance. Crafted from premium quality gold, these fitting insertions are a testament to luxury and efficiency, promising to deliver unmatched radiance and youthfulness to your complexion. Each insertion is meticulously designed to blend seamlessly with the skin, offering not just an aesthetic upgrade but a transformative skincare experience. Derma Gold Fitting Insertions are the epitome of elegance and effectiveness, ensuring that your skin receives the royal treatment it deserves. Make a statement, indulge in the luxury of gold, and unleash your skin?s potential for unparalleled beauty. Perfect for those who seek the finest in skincare innovation, these insertions are your key to unlocking a radiant, flawless complexion. Embrace the glow of confidence and the touch of gold ? because with Derma Gold Fitting Insertions, you?re not just buying a product; you?re investing in a new era of skin perfection.\\n"
    },
    "slug": "derma-gold-fitting-insertions",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 160,
      "originalPrice": 190,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/76543567-1.jpg",
      "https://pharmelow.com/wp-content/uploads/xK2fp5zFIg4-1000x1000-1-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-IML3JKGH",
    "barcode": 2852401080444,
    "title": {
      "en": "Original Gensing Kianpi Pil"
    },
    "description": {
      "en": "Unleash the boundless energy within you with the transformative power of Gensing Kianpi Pil. Expertly formulated to invigorate and revitalize, this exceptional product transcends ordinary dietary supplements, offering an unparalleled blend of ancient wisdom and modern science. Gensing Kianpi Pil is your golden ticket to not just sustaining energy, but elevating your vitality to levels you've only dreamed of. Crafted with the finest Ginseng, known for its extraordinary ability to boost energy levels, enhance mental clarity, and improve overall well-being, this supplement stands as a beacon of health and vigor. Ideal for those seeking to gain weight in a healthy manner, enhance their digestive metabolism, and empower their life's journey with unstoppable energy. Embrace the essence of robust health and profound strength. Let Gensing Kianpi Pil be the catalyst for your transformation?unlocking the door to a life filled with energy, vitality, and endless possibility."
    },
    "slug": "original-gensing-kianpi-pil",
    "category": {
      "name": {
        "en": "For Weight"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 120,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/129734-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-8R0CZ4BR",
    "barcode": 3823262765435,
    "title": {
      "en": "Golden Bull Capsule"
    },
    "description": {
      "en": "Introducing the exquisite Golden Bull Capsule ? a marvel of modern supplement innovation, designed to unleash the ultimate power within. Crafted with the finest, meticulously sourced ingredients, this premium capsule is the key to unlocking a wealth of vitality and strength that lies dormant in you. The Golden Bull Capsule is more than just a supplement; it is a beacon of resilience, endurance, and unyielding energy. Each capsule is packed with nature's most potent elements, blended to perfection, ensuring not only an immediate surge of vigor but also a sustained release of vitality that will carry you through the day. Perfect for those who seek to surpass their limits, elevate their performance, and achieve greatness in every endeavor. With the Golden Bull Capsule, prepare to experience an unparalleled boost that will make you stand out from the herd. Step into the arena of life with confidence and dominate every challenge that comes your way. Make the Golden Bull Capsule your secret weapon and charge towards success. Buy now and transform your potential into reality."
    },
    "slug": "golden-bull-capsule",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 60,
      "discount": 21
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/2535253-1.jpg",
      "https://pharmelow.com/wp-content/uploads/74637-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-PEHJ5W8U",
    "barcode": 3880825556121,
    "title": {
      "en": "Hip Up Cream (Original)"
    },
    "description": {
      "en": "Introducing the epitome of skin indulgence and enhancement - the Silky Hip Up Cream Original. Crafted with a unique blend of natural extracts and cutting-edge skincare technology, this luxurious cream is your secret to achieving a visibly uplifted, smoother, and more voluptuous silhouette. Imagine the confidence of flaunting firmer, supple hips with a radiance that speaks volumes of your inner beauty and vitality. The Silky Hip Up Cream Original is not just a product; it's an experience, a ritual, that pampers your skin while providing deep nourishment and rejuvenation. Its feather-light texture glides effortlessly, absorbing quickly to deliver potent active ingredients deep within your skin, ensuring maximum efficacy without any greasiness. Embrace the allure of irresistibly soft and toned hips, making every outfit look impeccable and every moment feel extraordinary. Make the Silky Hip Up Cream Original a part of your daily beauty regimen and step into a world where confidence blooms with every application. Why settle for mediocrity when you can elevate your beauty routine with the Silky Hip Up Cream Original? Let your beauty radiate from within and turn heads with your stunning, sculpted silhouette. Elevate your skincare game today.\\n"
    },
    "slug": "hip-up-cream-original",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 45,
      "originalPrice": 65,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/52745-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "lanthome-men-massage-oil",
    "barcode": 3159509053981,
    "title": {
      "en": "Lanthome Men Massage Oil"
    },
    "description": {
      "en": "Introducing the revolutionary Lanthome Enlarge Growth Oil ? your ultimate solution for achieving remarkable enhancements in a natural and safe way. Crafted meticulously with a blend of premium, all-natural ingredients, this growth oil is your secret weapon to unlocking a new level of confidence and well-being. Its potent formula is designed to deliver visible results, ensuring you not only feel but also see the difference. Unlike other products on the market, Lanthome Enlarge Growth Oil is engineered with your safety and comfort in mind, offering a non-invasive alternative to conventional methods. With consistent use, you'll experience a significant improvement in size and performance, all while nurturing your skin with its moisturizing properties. Say goodbye to doubts and hello to a renewed you with Lanthome Enlarge Growth Oil ? because you deserve to feel extraordinary.\\n"
    },
    "slug": "lanthome-men-massage-oil",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 80,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/4252-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "lovegra-women-jelly-7-sachet",
    "barcode": 3223346704693,
    "title": {
      "en": "Lovegra women Jelly | 7 Sachet"
    },
    "description": {
      "en": "Embrace the power of Lovegra and experience a reawakened desire and revitalized energy that will transform your experience."
    },
    "slug": "lovegra-women-jelly-7-sachet",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 70,
      "discount": 31
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/393463-1.jpg",
      "https://pharmelow.com/wp-content/uploads/214151-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-ST7Z6S8J",
    "barcode": 9237764056375,
    "title": {
      "en": "Magic Max Tissue"
    },
    "description": {
      "en": "Introducing Magic Max Tissue ? the only tissue you'll ever need. Gone are the days of settling for ordinary, rough tissues that barely meet your needs. Magic Max Tissues are a revelation in personal care, merging unparalleled softness with incredible strength, ensuring each sheet is not only gentle on your skin but durable enough to tackle the toughest messes. Crafted with our unique UltraSoft technology, these tissues glide over your skin like a gentle caress, providing comfort and care with every touch. Perfect for sensitive noses and delicate areas, they leave your skin feeling pampered and protected. Moreover, Magic Max Tissues are environmentally conscious, made from sustainable sources without compromising quality or performance. With each ethereal sheet, experience a blend of luxury and responsibility, making it not just a choice but a statement. Choose Magic Max Tissue today ? because why settle for mundane when you can have magic?\\n"
    },
    "slug": "magic-max-tissue",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 80,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/12348361-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-RDOAQFEE",
    "barcode": 5689715883327,
    "title": {
      "en": "Maralgel (Original)"
    },
    "description": {
      "en": "Introducing Maralgel: a transformative leap in skincare technology that beckons you to embrace the sheer, unadulterated luxury of nature. Maralgel is not just another addition to your skincare regimen?it's a revelation, an elixir of youth meticulously crafted from the purest marine extracts to deliver unparalleled hydration, rejuvenation, and invigoration to your complexion. This ethereal gel formulation sinks into your skin, creating an instant veil of moisture that feels as light as air, yet deeply nourishes and revitalizes every cell it touches. Enriched with minerals and antioxidants sourced from the heart of the ocean, Maral gel works around the clock to detoxify, heal, and restore your skin to its most luminous, silky-smooth state. Bid farewell to the days of dull, tired skin. Embrace the glow, the radiance, and the sheer vitality that comes with Maral gel. Your journey to a flawless, age-defying complexion begins here."
    },
    "slug": "maralgel-original",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 40,
      "originalPrice": 75,
      "discount": 35
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/4363237-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-I3YF9D8G",
    "barcode": 8175539633585,
    "title": {
      "en": "Max Man Power Gel"
    },
    "description": {
      "en": "Introducing the revolutionary Max Man Power Gel, a masterfully crafted formula designed to elevate the modern man's grooming ritual to uncharted territories of excellence. Embark on a journey of transformation with this potent blend, where every application promises not just to invigorate but to redefine what you thought possible in personal care. Crafted with a pioneering fusion of nature?s most powerful ingredients and cutting-edge science, Max Man Power Gel doesn?t just ensure your skin feels irresistibly smooth; it energizes it from within, awakening a new level of confidence and vibrancy that radiates through your presence. This isn't merely a product; it's your secret weapon in the pursuit of power, allure, and the embodiment of vitality. Make no mistake, Max Man Power Gel stands in a league of its own, far outpacing competitors with its commitment to quality, efficacy, and the pursuit of perfection. Experience the difference today ? because you're not just selecting a gel; you're choosing to own your power, to captivate, and to conquer. Let the transformation begin.\\n"
    },
    "slug": "max-man-power-gel",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 85,
      "originalPrice": 120,
      "discount": 35
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/47384-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-57TXMJB3",
    "barcode": 5863954324791,
    "title": {
      "en": "Maxman Caps (Original)"
    },
    "description": {
      "en": "Introducing the unparalleled Max Man Capsules, meticulously crafted for the modern man seeking to unleash his ultimate potential. This ground-breaking supplement is a symphony of scientifically-backed ingredients, designed to invigorate and enhance your vitality, stamina, and overall well-being. Max Man Capsules are not just another supplement; they are the epitome of strength and vigor embodied in a capsule. With each dose, experience a surge of renewed energy, an elevation in your physical and mental performance, and a significant boost in your confidence. Specially formulated to support various aspects of male health, Max Man Capsules are your secret weapon to achieving the pinnacle of your capabilities. Embrace the transformation, embody the power, and set forth on your journey to excellence with Max Man Capsules. Why settle for mediocrity when greatness is within your grasp? Make the choice today to elevate your standard of living and step into a realm of unmatched vitality. Max Man Capsules, because you deserve to be at the top of your game, every day."
    },
    "slug": "maxman-caps-original",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 39,
      "originalPrice": 60,
      "discount": 21
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/432876-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-1L46X1OZ",
    "barcode": 9810838484740,
    "title": {
      "en": "Maxman Oil (Original)"
    },
    "description": {
      "en": "Introducing the revolutionary Maxman Gel, your ultimate ally in the pursuit of unparalleled confidence and performance. This potent formulation is expertly crafted with a cutting-edge blend of natural ingredients, designed to invigorate and enhance with every application. Maxman Gel is not just a product, but a lifestyle choice for those who accept nothing but the best in their personal endeavors. Its smooth, silky texture is easy to apply, ensuring a pleasurable experience every time. With consistent use, Maxman Gel aids in boosting vitality, stamina, and endurance, providing you with the edge you need to excel beyond boundaries. Stand out with confidence and power. Embrace the Maxman Gel experience; transform your potential into reality.\\n"
    },
    "slug": "maxman-oil-original",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 160,
      "originalPrice": 200,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/312462-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-WL93158Q",
    "barcode": "0248772085904",
    "title": {
      "en": "Member XXL (Original)"
    },
    "description": {
      "en": "Introducing the revolutionary Member XXL, the ultimate solution for those desiring to amplify their masculinity and confidence. Member XXL's unique blend of natural ingredients is scientifically proven to provide significant results without compromises, ensuring safety and efficacy. Each capsule is a powerhouse of vitality, fostering improved blood circulation and hormonal balance, thereby offering not just physical enhancements but a surge in confidence and overall well-being. With Member XXL, experience a transformation that redefines your limits and opens the door to a life filled with confidence, satisfaction, and unparalleled performance."
    },
    "slug": "member-xxl-original",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 80,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/8724533-1.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "willy-king-delay-men-tissue",
    "barcode": 6754162368105,
    "title": {
      "en": "Willy King Delay Men Tissue"
    },
    "description": {
      "en": "Step into a world of confidence and enduring performance with our revolutionary Men Power Tissue Delay Wipes. Exquisitely formulated for the modern man who seeks control, these wipes are imbued with a potent, yet skin-friendly solution that guarantees to elevate your intimate moments. Each tissue, a masterpiece of science and nature, is designed to prolong your pleasure, ensuring that every encounter becomes a lasting memory. Encased in discreet, easily portable packaging, our Men Power Tissue Delay Wipes offer not just enhanced endurance, but also a newfound freedom in spontaneity. Say goodbye to concerns and hello to prolonged bliss. Perfect for the discerning gentleman eager to impress, these wipes are your secret weapon to unlocking a realm of satisfaction. Embrace the power, embrace the moment, with Men Power Tissue Delay Wipes."
    },
    "slug": "willy-king-delay-men-tissue",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 45,
      "originalPrice": 60,
      "discount": 15
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/0000.9-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.7-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-99M12UYA",
    "barcode": 1716310926419,
    "title": {
      "en": "Q7 Choclate For Women"
    },
    "description": {
      "en": "Indulge in the luxurious Gold Q7 Chocolate Small Bar - an exquisite confectionery masterpiece meticulously crafted for the modern woman.\\nThis not just a chocolate; it's a celebration of sophistication and elegance, blending the finest cocoa beans with a touch of opulence to elevate your taste experience.\\nEach bite offers a harmoniously rich taste, a velvety smooth texture, and an unparalleled aroma that enchants the senses, making it the perfect companion\\nfor those moments when you deserve to treat yourself."
    },
    "slug": "q7-choclate-for-women",
    "category": {
      "name": {
        "en": "Chocolates"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 80,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/0000.4-1.png",
      "https://pharmelow.com/wp-content/uploads/0000.3-2-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-UXNEVPM2",
    "barcode": 5243574305804,
    "title": {
      "en": "Q7 Choclate For Male"
    },
    "description": {
      "en": "Introducing the Gold Q7 Chocolate Small Bar - a luxurious indulgence designed specifically for women who deserve a moment of pure delight.<br>Crafted from the finest cocoa beans selected from exotic locations around the globe, this chocolate bar is not just a treat; it's an exquisite experience. The Gold Q7 envelopes your senses with its rich, velvety texture and its intricate layers of flavor that dance on the palette, promising a journey of taste that lingers long after the last morsel has melted away."
    },
    "slug": "q7-choclate-for-male",
    "category": {
      "name": {
        "en": "Chocolates"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 220,
      "originalPrice": 280,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/0000.1-3-1.png",
      "https://pharmelow.com/wp-content/uploads/0000.2-3-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-1QK2CZ83",
    "barcode": 6867189702422,
    "title": {
      "en": "Q7 Gold Box Male And Female"
    },
    "description": {
      "en": "Introducing the exquisite Gold Q7 Chocolate for Men - an unparalleled confection that transcends the ordinary.\\nArtfully crafted for the discerning gentleman, this premium chocolate is not just a treat; it's an experience.\\nEach bite unravels layers of rich, velvety chocolate, masterfully blended to captivate your palate. Sourced from the finest cocoa,\\nthe Gold Q7 is a symphony of taste, designed to indulge your senses in luxury and sophistication.\\nElevate your moments from mere memories to unforgettable experiences."
    },
    "slug": "q7-gold-box-male-and-female",
    "category": {
      "name": {
        "en": "Chocolates"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 180,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.3-1-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.1-2-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-1-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-FMD7RN74",
    "barcode": 2971828488630,
    "title": {
      "en": "Original Vmax Capsules"
    },
    "description": {
      "en": "Introducing the revolutionary Vimax Vimax Dietary Capsules, a harmonious blend of nature's finest ingredients crafted to unlock your body's fullest potential. With a carefully curated formula contained within 30 potent capsules, this premium supplement is designed to invigorate and enhance your vitality, endurance, and overall well-being. Each capsule is a beacon of health, meticulously engineered to support your body's natural functions, empowering you to achieve optimal performance and vigor."
    },
    "slug": "original-vmax-capsules",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 120,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-1-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.2-4-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "SKU-5BO2KPW3",
    "barcode": 2363055786274,
    "title": {
      "en": "Vmax Dietary Pils (60 Caps)"
    },
    "description": {
      "en": "Introducing the pinnacle of natural potency and vitality, Vimax Vimax Dietary Capsules. <br>Each bottle contains an invigorating blend of 60 capsules, meticulously crafted to elevate your well-being to unprecedented levels.<br>Derived from nature's most powerful ingredients, these capsules are designed to support and enhance your body's natural vigor, <br>ensuring you feel vibrant and energized from dawn until dusk. With Vimax Vimax Dietary Capsules,<br> experience a profound transformation in your physical and mental vitality, <br>empowering you to conquer every challenge with unparalleled strength and confidence."
    },
    "slug": "vmax-dietary-pils-60-caps",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 65,
      "originalPrice": 95,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "big-xxl-long-term-cream",
    "barcode": 5691622928565,
    "title": {
      "en": "Big XXL Long Term Cream"
    },
    "description": {
      "en": "the revolutionary BIG XXL Long-Term Cream, the ultimate game-changer in your pursuit of unmatched confidence and performance. Specially formulated with a potent blend of natural ingredients, this cream is designed to offer you not just immediate satisfaction but enduring benefits that stand the test of time. With each application, dive into an ocean of sensation that promises to elevate your experiences to realms previously unimagined. The BIG XXL Long-Term Cream is not just a product; it's your secret weapon. It synergizes with your body's natural capabilities, enhancing and prolonging your vitality, ensuring that every moment is as endless as it is unforgettable. Step into the spotlight with a newfound swagger, powered by the assurance that comes with unparalleled endurance. Perfect for the discerning individual who refuses to settle for anything but the extraordinary, this cream distinguishes itself from the myriad of competitors with its commitment to quality, effectiveness, and satisfaction. Do not just live in the moment?make the moment last. The BIG XXL Long-Term Cream is here to redefine what you thought was possible, making every experience a chapter in the epic saga of your life. Seize the day with BIG XXL Long-Term Cream and turn your dreams into reality, one application at a time."
    },
    "slug": "big-xxl-long-term-cream",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 190,
      "discount": 70
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/1.jpeg",
      "https://pharmelow.com/wp-content/uploads/2.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "booba-hip-up-tablet",
    "barcode": 8412992488940,
    "title": {
      "en": "Booba Hip Up Tablet"
    },
    "description": {
      "en": "Elevate your curves with the Booba Hip Up Tablet ? the ultimate game-changer in body enhancement solutions. Crafted meticulously for those who seek to refine their silhouette, this powerful supplement works harmoniously with your body to enhance and uplift your hip region naturally. Infused with a potent blend of essential vitamins, minerals, and plant extracts, Booba Hip Up Tablet targets stubborn fat pockets, promoting firmness and volume where you desire it most. Unlike other solutions, this tablet ensures balanced nourishment without compromising your health. Feel confident, radiate charisma, and embrace the new you with Booba Hip Up Tablet ? because you deserve to flaunt your curves with flair."
    },
    "slug": "booba-hip-up-tablet",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 120,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-11.png",
      "https://pharmelow.com/wp-content/uploads/1-7.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "brazilian-bum-bum-cream",
    "barcode": 7765800077777,
    "title": {
      "en": "Brazilian Bum Bum Cream"
    },
    "description": {
      "en": "Brazilian Bum Bum Cream"
    },
    "slug": "brazilian-bum-bum-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 150,
      "originalPrice": 250,
      "discount": 100
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-1-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.2-8.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "3-pcs-bundles-maxman-delay-enlargement-cream-for-men-yellow",
    "barcode": 8782616151445,
    "title": {
      "en": "Maxman Yellow Delay Cream for men - Bundle"
    },
    "description": {
      "en": "Unleash your confidence and conquer every intimate moment with Maxman Yellow Delay Cream, tailored uniquely for men who seek unparalleled control. This revolutionary enhancement cream employs a sophisticated blend of natural ingredients designed to extend enjoyment and amplify satisfaction. The silky-smooth formula is effortlessly absorbed, ensuring rapid effectiveness without compromising on sensitivity. Maxman Yellow Delay Cream empowers you to perform longer and stronger, transforming every encounter from ordinary to the extraordinary. Elevate your intimate experiences and leave a lasting impression ? redefine endurance with Maxman and stand out from the rest. Trust in a product crafted with precision, innovation, and your ultimate pleasure in mind."
    },
    "slug": "maxman-yellow-delay-cream-for-men-bundle",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 130,
      "originalPrice": 250,
      "discount": 120
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-2-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-1-2.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "3-pcs-bundles-maxman-men-enlargement-power-gel-red",
    "barcode": "0457281906031",
    "title": {
      "en": "Maxman Red Power Size Men Gel - Bundle"
    },
    "description": {
      "en": "Unleash unparalleled confidence and take control with Maxman Red Power Size Men Gel, a revolutionary enhancement product meticulously crafted for the modern man seeking peak performance and satisfaction. Our gel, enriched with potent, natural ingredients, seamlessly absorbs to provide long-lasting results and all-day comfort. Experience an invigorating boost in vitality and resilience, setting you apart in every aspect of your active lifestyle. Elevate your intimacy with unparalleled ease and ignite passion with Maxman Red Power Size Men Gel?because you deserve to be at your best, always. Dare to dominate and redefine your potential with each application. Elevate your game and join the ranks of the unstoppable, transforming not just moments, but forever."
    },
    "slug": "maxman-red-power-size-men-gel-bundle",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 140,
      "originalPrice": 270,
      "discount": 130
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.2-2-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-3.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "bundles-maxman-titan-enlargement-gel-for-men-blue",
    "barcode": 7227702989546,
    "title": {
      "en": "Maxman Blue Titan Men gel for Timings - Bundle"
    },
    "description": {
      "en": "Unleash your inner power with Maxman Blue Titan Men's Gel, the ultimate solution for endurance and performance. Crafted meticulously for men who seek to elevate their experiences, this gel is your secret weapon for timeless vitality. With its swift-absorbing formulation, Maxman Blue Titan ensures rapid action without compromising comfort. Make every encounter memorable and stand out with the power of Maxman Blue Titan Men's Gel?your ally in achieving unparalleled satisfaction."
    },
    "slug": "maxman-blue-titan-men-gel-for-timings-bundle",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 170,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-73.png",
      "https://pharmelow.com/wp-content/uploads/1-42.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "daynee-breast-enhancement-supplements",
    "barcode": 4158416666412,
    "title": {
      "en": "Original Daynee Breast Strengthen Supplements"
    },
    "description": {
      "en": "Elevate your confidence and embrace your natural beauty with Daynee Breast Strengthen Supplements. Our expertly formulated blend is meticulously crafted to stimulate natural growth and enhance the fullness of your bust. Each capsule is enriched with premium, all-natural ingredients renowned for their efficacy and safety, such as fenugreek, fennel seed, and blessed thistle, which work harmoniously to support your body?s hormone balance and promote tissue growth. Trust Daynee to help you achieve the curvaceous, feminine silhouette you?ve always desired, without invasive procedures or harsh chemicals. Experience the transformative power of nature and feel the difference with every dose. Choose Daynee ? for a more confident, radiant you."
    },
    "slug": "original-daynee-breast-strengthen-supplements",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-5.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-4.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "deadly-shark-power-delay-spray",
    "barcode": 6264526939648,
    "title": {
      "en": "Deadly Shark Power 25000 Men Delay Spray"
    },
    "description": {
      "en": "Unleash untold pleasure and redefine the limits of intimacy with Deadly Shark Power Delay Spray. This meticulously engineered formula is the hidden key to longer, more satisfying encounters. Designed for the modern man who seeks to immerse himself and his partner in ceaseless waves of passion,this product stands at the pinnacle of innovation. Deadly Shark Power Delay Spray offers not merely a delay, but a doorway to uncharted realms of sensation. By integrating cutting-edge technology with the purest ingredients, it ensures safety, reliability, and unparalleled performance. Imagine the confidence of knowing you can maintain the rhythm of your desires, synchronized perfectly with the tides of your partner's anticipation. With its discreet application and fast-acting effects, this spray is your silent accomplice in the quest for supreme fulfillment. As competitors lag in the shadows of ordinary solutions, Deadly Shark propels you into the spotlight, where enduring pleasure becomes your new reality. Do not just exist in the realm of fleeting joy; dominate it, with Deadly Shark Power Delay Spray."
    },
    "slug": "deadly-shark-power-25000-men-delay-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-74.png",
      "https://pharmelow.com/wp-content/uploads/1-43.png",
      "https://pharmelow.com/wp-content/uploads/2-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "deadly-shark-power-delay-spray-14k",
    "barcode": 1326144910296,
    "title": {
      "en": "Deadly shark power 14000 men delay spray"
    },
    "description": {
      "en": "Introducing the pinnacle of innovation and sensual prowess, Deadly Shark Power Delay Spray 14K. Crafted for the modern man who commands control and desires to unleash the full potential of his virility, this premium delay spray is your clandestine weapon for enduring passion. Infused with a potent formula, it is designed to enhance your stamina, providing prolonged moments of pleasure without compromising sensation. Deadly Shark Power Delay Spray 14K is not just a product; it's a revelation in the art of lovemaking. Elevate your intimacy to the realms of the extraordinary, where every moment is a masterpiece of pleasure. Embrace the power to make time stand still, ensuring that your escapades in the bedroom are nothing short of legendary. Ready to transform your experience into a saga of unbridled passion? Seize the essence of invincibility with Deadly Shark Power Delay Spray 14K ? because you deserve moments that are as endless as they are ecstatic."
    },
    "slug": "deadly-shark-power-14000-men-delay-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-6.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-5.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-3.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-1-2.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "delay-shark-power-spray-for-men",
    "barcode": 5905502318118,
    "title": {
      "en": "Deadly Delay Shark Power 48000 Spray for men"
    },
    "description": {
      "en": "the ultimate answer to endurance and confidence in intimate moments - Delay Shark Power Spray for men. Specially formulated with natural extracts, this elite concoction is engineered to enhance your staying power, ensuring that you can fully immerse in the depth of passion without any interruptions. Beyond its remarkable efficiency in prolonging pleasure, the Delay Shark Power Spray provides a smooth, sensual experience that elevates your confidence and satisfaction to uncharted territories. Ideal for discerning men seeking to break the boundaries of their intimate endeavors, this spray stands as a testament to innovation and excellence in men's care. Experience the transformative power of Delay Shark Power Spray and redefine the limits of your desire. Make it a staple in your repertoire and witness firsthand the unparalleled advantage it brings to your moments of closeness. Embrace the prowess, embrace the moment, with Delay Shark Power Spray for men."
    },
    "slug": "deadly-delay-shark-power-48000-spray-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 250,
      "originalPrice": 500,
      "discount": 250
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-45.png",
      "https://pharmelow.com/wp-content/uploads/Main-2-01.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-digital-screen-penis-power-pump-for-men",
    "barcode": 3409447876228,
    "title": {
      "en": "Original Digital Screen Pens power pump for men"
    },
    "description": {
      "en": "Introducing a groundbreaking innovation in men's wellness - the Digital Screen Pens Power Enhancer. Designed for the modern man who seeks both vigor and precision in personal space, this product revolutionizes male confidence and performance. Encased in a sleek, discreet design, this power enhancer features a state-of-the-art digital screen, allowing users to track progress, customize settings, and achieve results with unparalleled accuracy. Whether you're looking to boost your stamina, strength, or overall vitality, this device offers personalized programs tailored to your unique goals. Experience the fusion of cutting-edge technology and human aspiration, empowering you to reach new heights of personal achievement."
    },
    "slug": "original-digital-screen-pens-power-pump-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 120,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-8.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-46.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "dr-james-breast-enhancement-gel",
    "barcode": 5425572027562,
    "title": {
      "en": "Dr James Breast Enhancement Gel"
    },
    "description": {
      "en": "Experience a newfound confidence with Dr. James Breast Enhancement Cream, your secret to a more voluptuous and youthful silhouette. Crafted with a potent blend of natural, high-quality ingredients, this luxurious cream works harmoniously with your body to stimulate cell growth and enhance firmness. Rich in essential vitamins and antioxidants, it not only helps in enlarging and lifting your bust but also deeply nourishes and revitalizes your skin. Embrace a non-invasive solution that promises visible results and lasting effectiveness. Turn heads and feel empowered with the transformative power of Dr. James Breast Enhancement Cream, where science meets beauty."
    },
    "slug": "dr-james-breast-enhancement-gel",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 63,
      "originalPrice": 126,
      "discount": 63
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-78.png",
      "https://pharmelow.com/wp-content/uploads/1-47.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "dr-james-breast-firming-gel",
    "barcode": "0856972001282",
    "title": {
      "en": "Original Dr James Breast Firming Gel"
    },
    "description": {
      "en": "Experience the transformation with Dr. James Breast Firming Gel ? your ultimate solution for achieving firm, youthful, and beautifully contoured breasts. Crafted with a unique blend of natural ingredients and advanced skincare science, this luxuriously smooth gel penetrates deeply to rejuvenate and tighten your skin, enhancing elasticity and giving your bust a visibly lifted appearance. Feel confident in every outfit and embrace your femininity like never before. Dr. James Breast Firming Gel is dermatologically tested, non-greasy, and suitable for all skin types, ensuring safety and efficacy. Rediscover the firm, perky silhouette you?ve always desired. Invest in Dr. James and redefine your allure."
    },
    "slug": "original-dr-james-breast-firming-gel",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 120,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-10.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-48.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "dr-james-slimming-7-days-gold-gel",
    "barcode": 7597235466044,
    "title": {
      "en": "Dr James Slimming 7 Days Gold Gel"
    },
    "description": {
      "en": "Unlock the secret to seamless elegance with Dr. James Slimming's 7 Days Gold Gel. Transcend the ordinary with this meticulously crafted formula, designed to sculpt and refine your silhouette within a mere seven days. Infused with the luxurious essence of gold, each application envelops you in a lavish experience, promoting firm, toned skin that radiates confidence and allure. Dare to defy expectations and embrace the transformative power of where science meets opulence. Ideal for anyone desiring a swift, visible change, this gold gel becomes your indispensable ally in achieving a refined, graceful physique. Elevate your self-care routine to golden heights. Invest in yourself?embrace the excellence only Dr. James can deliver."
    },
    "slug": "dr-james-slimming-7-days-gold-gel",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 120,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/2-1-1.png",
      "https://pharmelow.com/wp-content/uploads/Main-79.png",
      "https://pharmelow.com/wp-content/uploads/1-49.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "dr-rashel-24k-gold-collagen-hydrogel-eye-mask",
    "barcode": 3438713152025,
    "title": {
      "en": "Dr James Female Hip Up and Buttock Gel"
    },
    "description": {
      "en": "Elevate your confidence with Dr. James Hip Up and Buttock Gel. This revolutionary formula is crafted with the finest natural ingredients to help you achieve a firmer, more voluptuous silhouette. Infused with skin-loving botanicals, this gel enhances elasticity and lifts sagging skin, revitalizing your curves effortlessly. Pamper your skin with its luxurious texture and let the soothing scent captivate your senses. Ideal for daily use, Dr. James Hip Up and Buttock Gel is your secret to a stunning, sculpted profile. Say goodbye to insecurities and hello to a beautifully contoured you. Experience the difference today!"
    },
    "slug": "dr-james-female-hip-up-and-buttock-gel",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 160,
      "discount": 80
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-81.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-dr-care-breast-enlarging-cream",
    "barcode": 8610542312084,
    "title": {
      "en": "Original Dr. Care Breast Strengthen Cream"
    },
    "description": {
      "en": "Experience confidence like never before with Dr. Care Breast Cream. Crafted with a luxurious blend of advanced botanicals and natural extracts, this innovative formula is designed to enhance, firm, and uplift your bust effortlessly. Imagine the allure and grace of a fuller, more sculpted silhouette without resorting to invasive procedures. Its silky texture absorbs swiftly, ensuring deep hydration while stimulating natural cellular rejuvenation. Whether you're aiming to restore lost volume post-pregnancy, during weight loss, or seeking that perfect boost for a special occasion, Dr. Care Breast Cream delivers remarkable, visible results. Embrace your body, amplify your allure, and step into a new level of femininity and charm with every use. Don't wait; redefine your curves and rediscover your confidence today."
    },
    "slug": "original-dr-care-breast-strengthen-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 200,
      "discount": 80
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-12.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-dr-james-h-p-tb-capsules",
    "barcode": 8782068154810,
    "title": {
      "en": "Original Dr. James H.P.TB Capsules"
    },
    "description": {
      "en": "Unlock the secret to holistic wellness with Dr. James H.P.T Capsules. Our expertly crafted formula harnesses the natural potency of 5-HPT to elevate your mood, enhance your sleep quality, and support balanced serotonin levels. Ideal for those seeking a harmonious blend of science and nature, these capsules are a testament to meticulous research and dedication to your well-being. Choose Dr. James and step into a realm where mental clarity and emotional balance are not just goals but guaranteed realities. Invest in Dr. James H.P.T Capsules today ? because you deserve nothing less than excellence."
    },
    "slug": "original-dr-james-h-p-tb-capsules",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 32,
      "originalPrice": 42,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-82.png",
      "https://pharmelow.com/wp-content/uploads/1-52.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-eros-men-delay-cream",
    "barcode": 3325968319122,
    "title": {
      "en": "Original Eros Men Delay Cream - 15g"
    },
    "description": {
      "en": "Instructing Eros Men Delay Cream, your ultimate ally in pursuing the zenith of pleasure. Crafted with precision and care, this cream is your secret weapon to extend those intimate moments, making every encounter unforgettable. Infusing your experience with longevity and vigor, Eros Men Delay Cream stands as a testament to innovation in personal satisfaction. Its unique formula is designed to gently desensitize, ensuring a prolonged and fulfilling experience without compromising on sensation or pleasure. Ideal for those seeking to elevate their endurance and impress beyond measure, this cream guarantees not just satisfaction, but an adventure into uncharted realms of delight. Make the choice today to transform ordinary into extraordinary with Eros Men Delay Cream ? where every second is a masterpiece of pleasure"
    },
    "slug": "original-eros-men-delay-cream-15g",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 100,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-84.png",
      "https://pharmelow.com/wp-content/uploads/1.4.png",
      "https://pharmelow.com/wp-content/uploads/1.2.png",
      "https://pharmelow.com/wp-content/uploads/1.3.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "firstsun-enlarge-oil-for-men",
    "barcode": 3679203826426,
    "title": {
      "en": "Pure Firstsun Growth Oil for Men"
    },
    "description": {
      "en": "The ultimate solution to your desires, the Firstsun Oil for Men. Crafted with precision and care, this extraordinary blend is designed to elevate your confidence and enhance your vitality. Infused with a potent mix of natural ingredients, each drop is a step towards unlocking your full potential. The Firstsun Oil for Men is more than just a product; it's an experience that transforms and empowers. Its fast-absorbing formula ensures that you get quick, noticeable results without any greasy residue. Ideal for the modern man who seeks both excellence and convenience in every aspect of life. Step into a realm of newfound confidence and embrace the possibilities that come with it."
    },
    "slug": "pure-firstsun-growth-oil-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 100,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-13.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/2-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "florence-breast-booster-cream",
    "barcode": 1431080068731,
    "title": {
      "en": "Florence Breast Booster Cream"
    },
    "description": {
      "en": "Experience the next evolution in skincare with Florence Breast Booster Cream. Impeccably crafted to nourish and enhance, this luxurious formula is your secret to attaining firmer, more youthful-looking breasts. Infused with potent botanicals and clinically-proven ingredients, Florence Breast Booster Cream is designed to stimulate natural collagen production, ensuring fuller, rounder, and more lifted breasts over time. Trust in the power of nature and science; let this transformative cream be the cornerstone of your self-care ritual. Elevate your confidence and elegance with visible results that speak for themselves. Choose Florence Breast Booster Cream ? because you deserve the best"
    },
    "slug": "florence-breast-booster-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 55,
      "originalPrice": 110,
      "discount": 55
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-14.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-53.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "florence-breast-lifting-cream",
    "barcode": 2471176071206,
    "title": {
      "en": "Florence Breast Lifting Cream"
    },
    "description": {
      "en": "Rediscover your youthful silhouette with the Florence Breast Lifting Cream, an exquisite blend of potent botanicals and cutting-edge science. This luxurious cream is meticulously formulated to enhance firmness, sculpt contours, and elevate your natural beauty. Infused with nourishing ingredients, it deeply penetrates the skin, revitalizing and fortifying from within. Witness visible lift and revitalization, as your d�colletage regains its allure and confidence. Say goodbye to sagging and embrace a new era of elegance. Dermatologically tested and crafted for all skin types, Florence Breast Lifting Cream is your ultimate companion for timeless grace and unprecedented radiance. Elevate your essence today."
    },
    "slug": "florence-breast-lifting-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-7.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-3.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-5.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "generic-50000-strong-delay-spray",
    "barcode": 7233461858948,
    "title": {
      "en": "Generic 50000 strong delay spray"
    },
    "description": {
      "en": "Introducing the revolutionary, must-have solution for those seeking to profoundly transform their intimate encounters: the Generic<br>50000 Strong Delay Spray. Skillfully formulated with a potent blend of ingredients, this exceptional delay spray is your secret weapon<br>to significantly extend those intimate moments, ensuring both you and your partner experience unprecedented pleasure that lasts.<br>With its discreet and easy-to-use design, the Generic 50000 Strong Delay Spray boasts a quick application process,<br>allowing for spontaneous moments to flourish without interruption. Each spray releases a precise dosage,<br>offering you control and reliability where it matters most. Whether you're looking to enhance your confidence,<br>satisfy your partner beyond expectations, or simply explore new dimensions of your relationship, this delay spray stands as a<br>catalyst for unforgettable nights. Embrace the power of endurance and make every encounter extraordinary with the Generic 50000 Strong<br>Delay Spray ? where limitations are dissolved, and pure satisfaction is just a spray away."
    },
    "slug": "generic-50000-strong-delay-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 65,
      "originalPrice": 130,
      "discount": 65
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-15.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-55.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "ginger-hip-lift-massage-cream",
    "barcode": "0485772788965",
    "title": {
      "en": "Ginger Hip Lift Massage Cream"
    },
    "description": {
      "en": "Unveil the secret to an enviable silhouette with our revolutionary Ginger Hip Lift Massage Cream. Infused with potent ginger extracts, this luxurious cream promises to redefine your curves with its exceptional firming and lifting properties. Experience the wonder of visibly firmer, smoother, and more sculpted hips as the natural ingredients penetrate deeply, enhancing your skin's elasticity and tone. Transform your self-care routine with this invigorating blend, specifically crafted to give you the confidence and poise you deserve. Elevate your skincare game and embrace the magic of our Ginger Hip Lift Massage Cream?where nature meets luxury."
    },
    "slug": "ginger-hip-lift-massage-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 160,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-87.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-ginseng-kianpi-pills",
    "barcode": 3419115096445,
    "title": {
      "en": "Original Ginseng Kianpi Pills"
    },
    "description": {
      "en": "Unleash the boundless energy and vibrant health you've been dreaming of with our premium Ginseng Kianpi Pills. Meticulously crafted from the finest selection of ginseng roots, known for their extraordinary ability to replenish vitality and enhance stamina, these pills are your golden ticket to a life filled with exhilaration and vigor. Each capsule is a potent elixir, designed not only to nourish your body's deepest needs but also to activate your inner dynamo, allowing you to face each day with unwavering strength and a calm mind. Whether you're looking to turn the page on fatigue, aiming to elevate your wellness game, or seeking that extra edge in your daily performance, Ginseng Kianpi Pills stand as a beacon of well-being, guiding you towards your best self. With our commitment to quality and your well-being at the heart of our creation, getting your hands on this marvel of health is stepping into a realm where your potential knows no bounds. Don't just exist; thrive with Ginseng Kianpi Pills."
    },
    "slug": "original-ginseng-kianpi-pills",
    "category": {
      "name": {
        "en": "For Weight"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 220,
      "originalPrice": 280,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/0000.5.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.6.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "gold-q7-chocolate-for-women",
    "barcode": 4144313102009,
    "title": {
      "en": "Q7 Gold Box Women"
    },
    "description": {
      "en": "Indulge in the luxurious delight of Gold Q7 Chocolate, a confectionery masterpiece crafted exclusively for the discerning palate of women.\\nEvery piece of this exquisite chocolate resonates with a richness that's designed to pamper and entice your senses,\\nmelding the finest cocoa beans with a secret blend of ingredients that promises an unforgettable taste experience.\\nThe Gold Q7 is not just chocolate; it's a celebration of femininity, offering a delicate balance of flavors that evoke a sense of elegance and sophistication.\\nEach bite is a journey into a world of creamy, velvety smoothness that caresses your taste buds, leaving a lingering taste that's both comforting and invigorating.\\nPerfect for those moments of self-love or as a thoughtful gift, Gold Q7 Chocolate stands as a beacon of indulgence that elevates every occasion into a special one.\\nEmbrace the luxury; embrace Gold Q7 Chocolate ? where every piece is a testament to the strength, beauty, and depth of women."
    },
    "slug": "q7-gold-box-women",
    "category": {
      "name": {
        "en": "Chocolates"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 85,
      "originalPrice": 100,
      "discount": 15
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-18.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-3.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "jaguar-men-power-gel-for-longer-size",
    "barcode": 9434352348793,
    "title": {
      "en": "Jaguar Cream size power"
    },
    "description": {
      "en": "Introducing the revolutionary Jaguar Power Gel Longer Size for Men, an elite formulation designed to elevate confidence and maximize potential in the realms of satisfaction. This premium gel is a testimony to scientific innovation and natural prowess, skillfully blended to offer discerning men an unparalleled experience. Engineered with precision and care, Jaguar Power Gel Longer Size encompasses a unique combination of natural extracts and advanced compounds, promising not just enhancement but an extraordinary journey toward peak personal empowerment."
    },
    "slug": "jaguar-cream-size-power",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 65,
      "originalPrice": 80,
      "discount": 15
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-89.png",
      "https://pharmelow.com/wp-content/uploads/1-59.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "isme-pueraria-firming-breast-gel",
    "barcode": 2146260717635,
    "title": {
      "en": "ISME Pueraria Female Firming Breast Gel"
    },
    "description": {
      "en": "This cream is used to improve your size"
    },
    "slug": "isme-pueraria-female-firming-breast-gel",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 110,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-19.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-4.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "jaguar-power-vaginal-gel-for-feminine-hygiene",
    "barcode": 7934684884669,
    "title": {
      "en": "Jaguar Power Gel for Feminine Hygiene"
    },
    "description": {
      "en": "Discover the extraordinary power of Jaguar Power Gel for feminine hygiene. Crafted with a meticulous blend of potent natural ingredients, our formula promises to rejuvenate and restore confidence like never before. Experience a newfound firmness and enhanced intimacy with our revolutionary gel, designed to tighten, tone, and support health. Ideal for women seeking both immediate and long-lasting results, Jaguar Power Tightening Gel stands out in a market that often falls short of its claims. Embrace the unparalleled sensation and get ready to unlock a new level of feminine empowerment. Your journey to confidence and vitality begins here."
    },
    "slug": "jaguar-power-gel-for-feminine-hygiene",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 65,
      "discount": 15
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-01.jpeg",
      "https://pharmelow.com/wp-content/uploads/2-01.jpeg",
      "https://pharmelow.com/wp-content/uploads/main-01.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "lanthome-healthy-massage-oil-for-men-energy",
    "barcode": 2907755148743,
    "title": {
      "en": "Lanthome Healthy Massage Oil for Men"
    },
    "description": {
      "en": "The Lanthome Healthy Massage Oil for men, an elixir of vitality meticulously crafted to reinvigorate the modern man. This luxurious massage oil is a symphony of natural ingredients, designed to energize and restore the body?s dynamism. Infused with a potent blend of essential oils, each drop of Lanthome Healthy Man Massage Oil is a step towards rejuvenation and robust wellness. Perfect for easing tired muscles, stimulating blood circulation, and enhancing skin elasticity, this oil is not just a massage necessity; it?s a ritual for those who seek to balance the demands of everyday life with the need for personal restoration. Embrace the essence of vitality and let the Lanthome Healthy Man Massage Oil elevate your wellness journey."
    },
    "slug": "lanthome-healthy-massage-oil-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 45,
      "originalPrice": 85,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-11.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-6.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-9.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "largo-orignal-men-cream",
    "barcode": "0962361194203",
    "title": {
      "en": "Largo Inverma Men Massage Cream"
    },
    "description": {
      "en": "Introducing the quintessence of male grooming, Largo Inverma Men Massage Cream. Designed for the discerning gentleman who demands excellence in every aspect of his life, this premium formulation elevates your grooming regimen to an art. With its unique blend of natural ingredients, Largo Inverma Men Massage Cream nourishes, hydrates, and revitalizes your skin, leaving it impeccably smooth and irresistibly touchable. Infused with a subtle, masculine fragrance that whispers sophistication, this cream is not just a part of your routine; it's a ritual that prepares you to conquer the day with confidence."
    },
    "slug": "largo-inverma-men-massage-cream",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 280,
      "originalPrice": 380,
      "discount": 100
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-91.png",
      "https://pharmelow.com/wp-content/uploads/1-61.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "led-electric-enlarger-pines-tool-for-men",
    "barcode": 3874892022597,
    "title": {
      "en": "LED Electric Enlarger Pens Tool for Men"
    },
    "description": {
      "en": "Introducing the mountain of male growth technology, the LED Electric Pens Enlarger. Designed for modern men seeking confidence and performance, this innovative device is more than just an enlarger; it's a journey to new peaks of self-assurance and satisfaction. Enveloped in sleek, discreet styling, it features state-of-the-art LED technology that not only enhances its functionality but also sets it apart in a class of its own. This cutting-edge tool is engineered for comfort and efficiency, ensuring a user-friendly experience that is both effective and enjoyable. With various settings to customize your experience, it is the perfect companion for men who are ready to elevate their personal enhancement journey."
    },
    "slug": "led-electric-enlarger-pens-tool-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 220,
      "originalPrice": 350,
      "discount": 130
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-21.jpeg",
      "https://pharmelow.com/wp-content/uploads/2-3.png",
      "https://pharmelow.com/wp-content/uploads/1-5.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "male-extra-natural-longer-food-supplements",
    "barcode": 3579351612233,
    "title": {
      "en": "Male Extra Nutrition Tablets for Men"
    },
    "description": {
      "en": "Enhance your vitality, vigor with \"Male Extra Nutrition Tablets\" the groundbreaking solution meticulously designed for men who seek to elevate their performance and confidence. Crafted from a potent blend of nature's finest ingredients, this premium dietary tablets are your ally in achieving unparalleled endurance and strength. Each capsule is a symphony of carefully chosen herbs and extracts, promising not just an improvement in stamina, but also a remarkable increase in satisfaction and pleasure."
    },
    "slug": "male-extra-nutrition-tablets-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 65,
      "originalPrice": 110,
      "discount": 45
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-24.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.4-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-12.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-10.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-7.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-delay-enlargement-cream-for-men",
    "barcode": 7160258599893,
    "title": {
      "en": "Maxman Yellow Delay Cream for Men"
    },
    "description": {
      "en": "Maxman Delay Cream for Men, a master blend of innovation and tradition crafted to elevate the male experience. This potent formula is designed not only to enhance your confidence but to redefine moments, turning them into lasting memories of pleasure and fulfillment. Infused with natural extracts and advanced scientific compounds, Maxman delay cream promises a significant transformation in both performance and size, ensuring that your desires are not just met, but exceeded. Each application is a step towards breaking the boundaries of your physical limitations, enabling a journey of discovery, prowess, and ultimate satisfaction. With its quick-absorbing and non-greasy texture, this cream offers a discreet and comfortable application that fits seamlessly into your life, ensuring that you are ready to impress at a moment?s notice."
    },
    "slug": "maxman-yellow-delay-cream-for-men",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 110,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-25.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-13.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-8.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-delay-spray-75000-for-men",
    "barcode": 6489990516014,
    "title": {
      "en": "Maxman delay spray 75000 for men"
    },
    "description": {
      "en": "Maxman Delay Spray 75000 - the ultimate solution for men seeking to enhance their endurance and prolong their intimate moments. Infused with a potent formula, this revolutionary product promises to unlock unprecedented levels of control and satisfaction. Its fast-acting, convenient, and discreet application ensures that spontaneity is never compromised, while its long-lasting effects extend pleasure for you and your partner. Designed with precision and your utmost pleasure in mind, the Maxman Delay Spray 75000 stands out as not just a product, but a catalyst for confidence, intimacy, and unforgettable experiences. Elevate your encounters to levels beyond imagination; choose Maxman Delay Spray 75000, where every moment is an opportunity for ecstasy."
    },
    "slug": "maxman-delay-spray-75000-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 170,
      "originalPrice": 230,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-26.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-14.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-11.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-elite-60-dietary-supplement-capsules",
    "barcode": 5960687720057,
    "title": {
      "en": "Maxman Elite Maximum Strength capsules (60)"
    },
    "description": {
      "en": "Max Man Elite capsules - the pinnacle of performance enhancement, now encapsulated within a 60 capsule pack, precisely designed for those who demand more from life. Crafted with unparalleled precision, Max Man Elite infuses vigor and vitality into every aspect of your daily routine, ensuring that you are always at the peak of your abilities. Each capsule is a storehouse of energy, meticulously formulated with only the finest, scientifically-backed ingredients, promising not just improvements but transformations in physical performance, endurance, and overall well-being. Whether it's the boardroom battleground or the rigorous realms of physical fitness, Max Man Elite empowers you to conquer challenges with an unmatched zeal. It's not just a supplement; it's your secret weapon in the relentless pursuit of excellence. Elevate your potential ? experience the power of Max Man Elite capsules."
    },
    "slug": "maxman-elite-maximum-strength-capsules-60",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 120,
      "discount": 70
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-27.jpeg",
      "https://pharmelow.com/wp-content/uploads/1.2-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-enlargement-essential-oil-for-men",
    "barcode": 7593187717777,
    "title": {
      "en": "Maxman Strong Essential Oil for Men"
    },
    "description": {
      "en": "Maxman Strong Essential Oil ? a masterclass in male vitality, With an artfully crafted formula that taps into the ancient secrets of herbal extracts, this essential oil is your gateway to a redefined self-confidence and a revitalized intimate experience. Every drop of Maxman Essential Oil Yellow is imbued with potent, natural ingredients known for their synergistic effects on male enhancement, ensuring a seamless and significant improvement in size, stamina, and satisfaction. Designed for discerning men who seek to elevate their intimate prowess, this essential oil stands out as a beacon of strength."
    },
    "slug": "maxman-strong-essential-oil-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 110,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-28.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-9.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.4-2-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-12.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-yellow-growth-gel-for-men",
    "barcode": 4564738023589,
    "title": {
      "en": "Maxman Green Growth Gel for Men"
    },
    "description": {
      "en": "Maxman Gel is not just a product; it's an experience - promising to deliver noticeable results that redefine your understanding of personal enhancement and satisfaction. Its smooth, silky texture is easy to apply, ensuring a comfortable and discreet use that integrates seamlessly into your daily routine. With Maxman Growth Gel, you're not just buying a product; you're investing in a newfound confidence, a stronger connection with your spouse, and an improved quality of life. Discover the transformative power of Maxman Gel today and step into a world where limitations are dissolved, and potential is unleashed."
    },
    "slug": "maxman-green-growth-gel-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 48,
      "originalPrice": 120,
      "discount": 72
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-29.jpeg",
      "https://pharmelow.com/wp-content/uploads/1.4.jpeg",
      "https://pharmelow.com/wp-content/uploads/1.2-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/1.3.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-men-enlarging-essential-oil",
    "barcode": 6159049131566,
    "title": {
      "en": "Maxman Men Enlarging essential Oil"
    },
    "description": {
      "en": "Maxman Men Enlarging Essential Oil Blue: a revolutionary solution designed for men seeking confidence, vitality, and enhanced well-being. Infused with an exclusive blend of natural extracts and innovative ingredients, this essential oil is the embodiment of strength and serenity, offering a pathway to unlocking your full potential. Maxman Enlarging Essential Oil Blue is not just another product; it's a transformational elixir that promises to elevate your personal satisfaction and performance. Each drop is a testament to years of research and dedication, meticulously crafted to ensure maximum effectiveness and safety. Experience a newfound vigor and an unparalleled sense of empowerment with Maxman Enlarging Essential Oil Blue ? where excellence meets enhancement."
    },
    "slug": "maxman-men-enlarging-essential-oil",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 54,
      "originalPrice": 100,
      "discount": 46
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-15.jpeg",
      "https://pharmelow.com/wp-content/uploads/Main-31.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-13.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-men-enlargement-power-gel",
    "barcode": 5323438131777,
    "title": {
      "en": "Maxman Red Power Size Men Gel"
    },
    "description": {
      "en": "Introducing the revolutionary Maxman Men's Red Power Gel, a groundbreaking innovation designed to ignite confidence and vitality in men. This powerful formula, enriched with natural extracts and advanced scientific components, promises not only to increase size but also to intensify endurance, ensuring an unparalleled experience that surpasses all expectations. The Maxman Men Power Gel is meticulously crafted to absorb quickly, providing rapid results without any greasy residue, ensuring discretion and comfort. Ideal for men seeking to elevate their performance and confidence, this gel offers a safe, effective, and non-invasive solution."
    },
    "slug": "maxman-red-power-size-men-gel",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 110,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-33.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-7.jpeg",
      "https://pharmelow.com/wp-content/uploads/2-2.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-sea-erect-delay-cream-for-men",
    "barcode": 5311510665401,
    "title": {
      "en": "Maxman Sea-erect Delay Cream for Men"
    },
    "description": {
      "en": "Introducing the extremist Maxman Sea-erect Delay Cream, a pioneering solution designed exclusively for men seeking to redefine their intimate experiences. This avant-garde formula is your secret weapon against the constraints of time, empowering you to elevate pleasure and performance to unprecedented heights. Crafted from a blend of natural extracts and cutting-edge compounds, Maxman Sea-erect Delay Cream offers a harmonious balance of efficacy and safety, ensuring that your moments of intimacy are not only prolonged but also intensely satisfying. Its discreet and easy application means spontaneity and confidence in every encounter. Embrace the power of control and unlock the potential for boundless passion with Maxman Sea-erect Delay Cream - where every moment is a discovery of deeper connection and uncharted heights of pleasure."
    },
    "slug": "maxman-sea-erect-delay-cream-for-men",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 120,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-34.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-15.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-10.jpeg",
      "https://pharmelow.com/wp-content/uploads/00.1-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-titan-enlargement-gel-for-men",
    "barcode": 7634350657664,
    "title": {
      "en": "Maxman Blue Titan Men Gel for Timings"
    },
    "description": {
      "en": "Maxman Titan Men Gel ? your secret ally in achieving the confidence and prowess you've always desired. Crafted from premium, carefully selected ingredients, this revolutionary gel is designed to deliver remarkable results, setting a new standard in male timings solutions. Maxman Titan isn't just a product; it's a gateway to a life filled with new possibilities and experiences. Its smooth, luxurious texture is easy to apply, ensuring a seamless addition to your daily routine. This potent formula works synergistically to provide noticeable timings, making you feel like the Titan you are meant to be."
    },
    "slug": "maxman-blue-titan-men-gel-for-timings",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 250,
      "originalPrice": 350,
      "discount": 100
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-17.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-11.jpeg",
      "https://pharmelow.com/wp-content/uploads/Main-35.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-16.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "maxman-ultra-long-high-energy-tablets",
    "barcode": 5313115153673,
    "title": {
      "en": "MaxMan Ultra Long High Energy Tablets"
    },
    "description": {
      "en": "Maxman Ultra Long High Energy Tablets, is a pioneering formula designed to elevate the male experience with unparalleled confidence. Crafted with meticulous precision, Max Man Ultra Long Tablets blend cutting-edge science with nature's most potent ingredients, offering an unrivaled potency that promises to redefine boundaries. Each tablet is a beacon of empowerment, promising to unlock vigor and vitality, ensuring you can embrace life's moments to the fullest. Tailored for those who seek to break free from the ordinary, Max Man Ultra Long Tablets provide sustained endurance, invigorated performance, and peak vitality. It's not just a tablet; it's your ticket to transcending limits and experiencing uncharted levels of dynamism and energy. Embrace the extraordinary and let Max Man Ultra Long Tablets guide you to a realm of unparalleled prowess. Your journey towards the zenith of your potential starts here."
    },
    "slug": "maxman-ultra-long-high-energy-tablets",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 48,
      "originalPrice": 110,
      "discount": 62
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-94.png",
      "https://pharmelow.com/wp-content/uploads/1.2-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "mk-extra-strength-oil-for-men-enlargement",
    "barcode": 5081636106613,
    "title": {
      "en": "MK Extra Strength Oil For Men"
    },
    "description": {
      "en": "The groundbreaking MK Extra Strength Oil For Men - a pioneering enlargement solution designed specifically for the man who seeks confidence, power, and enhanced vitality in his most personal moments. Crafted with a cutting-edge blend of natural ingredients, this potent formula delivers unparalleled results, empowering men to experience a new level of self-assuredness and performance. Elevate your intimate experiences with an oil that not only promises but delivers exponential satisfaction and a transformative journey towards the ultimate male physique."
    },
    "slug": "mk-extra-strength-oil-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 48,
      "originalPrice": 120,
      "discount": 72
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-36.jpeg",
      "https://pharmelow.com/wp-content/uploads/1.2-3.jpeg",
      "https://pharmelow.com/wp-content/uploads/1.3-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "mk3-strengthen-oil-for-men-enlargement",
    "barcode": 2727403292969,
    "title": {
      "en": "MK3 Strengthen Men Oil For Growth"
    },
    "description": {
      "en": "Introducing the revolutionary MK3 Strength Oil For Men, a groundbreaking solution designed to empower and amplify your confidence. Expertly crafted using a blend of all-natural ingredients, this potent oil is your ally in the pursuit of enlargement and enhanced vitality. Its unique formula is engineered to deliver noticeable results, helping you achieve the strength and size you desire. Dive into the realm of boosted self-assurance and unleash your full potential with MK3 Strength Oil. Experience the difference and elevate your performance to unprecedented levels. Don't settle for mediocrity; choose MK3 Strength Oil and transform your life today."
    },
    "slug": "mk3-strengthen-men-oil-for-growth",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 180,
      "originalPrice": 320,
      "discount": 140
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-38.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-9.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "mooi-breast-enlargement-tablet",
    "barcode": 6603939590495,
    "title": {
      "en": "Mooi Female Breast Strengthen Tablet"
    },
    "description": {
      "en": "Unlock the secret to enhanced elegance with Mooi Breast Strengthen Tablet. In a world where confidence is key, this revolutionary supplement stands unmatched. Empower yourself with a blend of meticulously chosen natural ingredients, crafted with care to ensure remarkable results. Dive into a journey towards sophistication and poise, transforming not just your silhouette, but your self-esteem. Elevate your allure, captivate every glance, and redefine your beauty narrative. Choose Mooi ? because you deserve the extraordinary."
    },
    "slug": "mooi-female-breast-strengthen-tablet",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 230,
      "discount": 110
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/0000.1-4.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.3-1-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.2-2-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "natural-vimax-oil-for-men-enhancement",
    "barcode": 6560461536158,
    "title": {
      "en": "Natural Vimax Oil for Men"
    },
    "description": {
      "en": "Introducing the essence of nature's most potent gifts, the exquisite Natural Vimax Oil, a symphony of pure,<br>organic ingredients meticulously concocted to invigorate, rejuvenate, and empower. This premium blend harnesses the profound powers of nature to offer an unparalleled experience of wellness and vitality. Each drop of Natural Vimax Oil is a testament to purity, designed not just to nourish but to transform. Dive into the luxurious embrace of nature's finest, and emerge with a vitality that radiates from within. Perfect for those who demand nothing but the best for their body, Natural Vimax Oil stands as a beacon of natural potency, setting a new standard for health and wellness products."
    },
    "slug": "natural-vimax-oil-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 110,
      "originalPrice": 200,
      "discount": 90
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-39.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-67.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "organic-royal-honey-etumax-12-sachets",
    "barcode": 8657668198536,
    "title": {
      "en": "Organic Royal Honey Etumax | 12 Sachets"
    },
    "description": {
      "en": "Introducing Organic Royal Honey Etumax, the crown jewel of vitality and the essence of nature's finest offerings. Encased in 12 elegantly packaged sachets, this lavish elixir is more than just honey; it's an opulent blend of strength, revitalization, and organic purity. Sourced from the most pristine environments, our Royal Honey is infused with a rich tapestry of nutrients and organic compounds, exclusively designed to invigorate and rejuvenate. Each sachet promises not only an unparalleled taste experience but also a burst of energy, enhancing both physical and mental well-being. Ideal for those who appreciate the finer things in life, Organic Royal Honey Etumax is not just a product, but a lifestyle choice for the connoisseurs of natural luxury. Allow yourself the indulgence of this exquisite nectar and elevate your daily routine into a royal ritual. Your journey towards an enriched life begins with Organic Royal Honey Etumax."
    },
    "slug": "organic-royal-honey-etumax-12-sachets",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 110,
      "originalPrice": 240,
      "discount": 130
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-41.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-68.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "papaya-breast-enlarging-cream",
    "barcode": 1627441876330,
    "title": {
      "en": "Papaya Female Breast Enlarging Cream"
    },
    "description": {
      "en": "Unveil the secret to voluptuous beauty with our Papaya Breast Enlargement Cream! Enriched with the natural essence of ripe papayas and a blend of potent herbal extracts, this luxurious cream promises to firm, lift, and enhance your bustline with a luscious, tropical touch. Experience the powerful fusion of antioxidants, vitamins, and phytoestrogens that deeply nourish and stimulate your skin, promoting cell renewal and a fuller, more youthful appearance. Revel in an unparalleled transformation where nature meets science, ensuring noticeable results without invasive procedures. Indulge in the creamy, fragrant formula, designed to penetrate deeply for maximum efficacy. Feel the difference as each application brings you closer to the self-assured confidence you deserve."
    },
    "slug": "papaya-female-breast-enlarging-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 450,
      "originalPrice": 800,
      "discount": 350
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-99.png",
      "https://pharmelow.com/wp-content/uploads/1-72.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "pinis-pro-xtra-man-professional-power-pump-for-endurance",
    "barcode": 2417468766092,
    "title": {
      "en": "Pens Pro Xtra Man Professional Power Pump"
    },
    "description": {
      "en": "The Pens Pro Xtra Man Professional Power Pump, a marvel of engineering designed to elevate your endurance and enhance your confidence. Tailored for those who seek an extraordinary performance boost, this cutting-edge device is the epitome of innovation and effectiveness. With its precisely calibrated vacuum technology, the Power Pump promotes optimal blood flow, encouraging strength and endurance where it matters most. Ergonomically crafted for comfort and ease of use, it ensures a seamless experience every time."
    },
    "slug": "pens-pro-xtra-man-professional-power-pump",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-43.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-10.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "procomi-long-time-delay-men-spray",
    "barcode": 9944138115650,
    "title": {
      "en": "Procomi Long Time Delay Men Spray"
    },
    "description": {
      "en": "The radical Procomi Long Time Delay Men Spray is your ultimate secret weapon for unparalleled endurance and confidence. Crafted with cutting-edge technology and a blend of natural extracts, this exceptional spray is designed to elevate your intimate moments, ensuring a lasting and unforgettable experience. Whether you're seeking to enhance your stamina or enrich your intimate connections, Procomi is your gateway to achieving peak performance. Its discreet and easy-to-use application promises immediate results, allowing you to seize the moment, every time. Say goodbye to uncertainties and hello to a more vibrant, fulfilling love life with Procomi Long Time Delay Men Spray. Embrace the opportunity to transcend the ordinary and venture into the extraordinary ? where every moment is yours to command. Make the choice today that will change your tomorrow; choose Procomi, and transform your intimate experiences into something truly remarkable."
    },
    "slug": "procomi-long-time-delay-men-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 115,
      "discount": 55
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-45.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-11.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "rhino-gold-men-enlargement-gel",
    "barcode": 9596951310813,
    "title": {
      "en": "Rhino Gold Special Gel for Men"
    },
    "description": {
      "en": "Step into a realm of confidence and vitality with Rhino Gold Men Gel - your ultimate ally in the pursuit of fulfilling your deepest desires. Crafted meticulously with a groundbreaking formula, Rhino Gold is not just another product; it's a revolution in masculine power. This potent concoction is designed to invigorate and enhance, offering a transformative experience that amplifies both your physical and emotional well-being. Embrace the power of Rhino Gold and unleash the potential that lies within you, making every moment not just memorable but legendary."
    },
    "slug": "rhino-gold-special-gel-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 100,
      "originalPrice": 145,
      "discount": 45
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-46.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-12.jpeg",
      "https://pharmelow.com/wp-content/uploads/2-3.jpeg",
      "https://pharmelow.com/wp-content/uploads/3.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "royal-epimedyumlu-turkish-honey-12-sachets",
    "barcode": 1484846110960,
    "title": {
      "en": "Royal Epimedyumlu Turkish Honey | 12 Sachets"
    },
    "description": {
      "en": "Indulge in the luxurious and exotic Royal Epimedyumlu Turkish Honey, a divine concoction that promises not just an extraordinary taste, but an exquisite experience. Crafted from the nectar of the mythical Epimedium plant, known as the 'natural aphrodisiac,' this honey is a treasure trove of health and vitality. Each of the six elegantly packaged sachets harbors a golden elixir, meticulously sourced from Turkey's lush landscapes, ensuring a purity and potency that is unparalleled. Beyond its alluring sweetness, this honey is imbued with a rich tapestry of benefits, making it a staple for those seeking wellness and a zest for life. Whether you're looking to enhance your vitality, invigorate your senses, or simply revel in the sophisticated taste that transcends ordinary honey, Royal Epimedyumlu Turkish Honey is your portal to an enchanted realm. Let each sachet be an opulent journey, one that elevates your spirit and delights your palate. Experience the essence of luxury and tradition; indulge in Royal Epimedyumlu Turkish Honey today."
    },
    "slug": "royal-epimedyumlu-turkish-honey-12-sachets",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 58,
      "originalPrice": 100,
      "discount": 42
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-47.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-13.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "royal-epimedyumlu-turkish-honey-6-sachets",
    "barcode": "0826437686088",
    "title": {
      "en": "Royal Epimedyumlu Turkish Honey | 6 Sachets"
    },
    "description": {
      "en": "Bringing up the luxurious Royal Epimedyumlu Turkish Honey, a gourmet indulgence that merges traditional healing with sensual pleasure. Crafted in the heart of Turkey, where the art of honey-making whispers the legacy of centuries, this exquisite honey is not just a sweetener but a doorway to wellbeing. Each of the six sachets is a treasure trove of natural goodness, imbued with the potent epimedium herb, renowned for its revitalizing properties. The Royal Epimedyumlu Turkish Honey promises not just a taste sensation but a journey of vitality. Its rich, velvety texture and deep, aromatic flavors envelop your senses, transporting you to the sunlit valleys of Turkey. Perfect for enhancing your morning routine or adding a touch of decadence to your night-time tea, this honey is an emblem of luxury and healthfulness. Dive into the sumptuousness of Royal Epimedyumlu Turkish Honey and elevate your everyday with a touch of Turkish opulence. Discover the secret to vitality and pleasure, one golden spoonful at a time."
    },
    "slug": "royal-epimedyumlu-turkish-honey-6-sachets",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 110,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-48.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-14.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "royal-honey-etumax-sachets-6-pieces",
    "barcode": 8798246183909,
    "title": {
      "en": "Royal Honey Etumax Sachets | 6 Pieces"
    },
    "description": {
      "en": "Introducing Royal Honey Etumax, the ultimate elixir to invigorate your vitality and zest. Encased in six elegantly packaged sachets, each serving is brimming with nature's most potent essences, meticulously curated to enhance your energy, stamina, and wellness. Royal Honey Etumax is not just a product; it's an experience that transcends the ordinary, designed for those who demand nothing but the best. With its rare blend of royal jelly, rainforest herbs, and exotic honey, it's formulated to unlock your hidden potentials, ensuring you remain at the pinnacle of health and vigor. Embrace the essence of life with Royal Honey Etumax and transform everyday into a masterpiece of boundless energy and vitality. Why settle for the mundane when the extraordinary awaits? Discover the secret to a fuller, more vibrant life. Your journey to excellence begins here."
    },
    "slug": "royal-honey-etumax-sachets-6-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 100,
      "originalPrice": 190,
      "discount": 90
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-49.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-75.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "royal-honey-etumax-sachets-12-pieces",
    "barcode": 6377521574063,
    "title": {
      "en": "Royal Honey Etumax Sachets | 12 Pieces"
    },
    "description": {
      "en": "Discover the sublime essence of vitality with Royal Honey Etumax, your golden key to unlocking a world of invigorated wellness. Each of our 12 meticulously crafted sachets is a treasure trove of natural energy, designed to elevate your days and enlighten your nights. Infused with the richest, purest form of royal honey, our elixir promises not only to boost your vigor but also to nourish your body with its plethora of antioxidants and essential nutrients. Perfect for those seeking to enhance their endurance, fortify their immune system, and bring a harmonious balance to their body's function. Let Royal Honey Etumax be your daily companion in your quest for a life filled with zest, vitality, and unparalleled well-being. Embrace the essence of nature?s most miraculous nectar, and transform your ordinary moments into extraordinary experiences. Taste the sweetness of life with Royal Honey Etumax?the pinnacle of natural rejuvenation."
    },
    "slug": "royal-honey-etumax-sachets-12-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 80,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-101.png",
      "https://pharmelow.com/wp-content/uploads/1-76.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "saandha-oil-for-longer-time",
    "barcode": 8329190607885,
    "title": {
      "en": "Saandha Long Time Men Oil"
    },
    "description": {
      "en": "Apply the oil firmly on the surface of the skin"
    },
    "slug": "saandha-long-time-men-oil",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 105,
      "originalPrice": 230,
      "discount": 125
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-50.jpeg",
      "https://pharmelow.com/wp-content/uploads/00.1-3.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "semi-fly-women-love-drops",
    "barcode": 6247004938715,
    "title": {
      "en": "Semi Fly Women Love Drops"
    },
    "description": {
      "en": "Introducing the Semi Fly Women Love Drops - Crafted with the ultra-elite in mind, this elixir is not just a potion, but a gateway to uncharted territories of passion. Each drop is a symphony, meticulously blended to ignite the senses, evoke desires, and deepen connections. Formulated with rare, natural ingredients sourced from the most exotic corners of the world, these Love Drops promise an enthralling experience that transcends the ordinary. Whether you seek to spice up a special occasion or to kindle the flames of love on an ordinary day, the Semi Fly Women Love Drops are your secret ingredient to a world where love knows no bounds. Surrender to the allure, let these drops weave their magic, and transform every moment into a celebration of love. Dare to indulge, for once you do, there's no turning back. Elevate your experience, make it unforgettable. With Semi Fly Women Love Drops, love is not just an emotion; it becomes an art."
    },
    "slug": "semi-fly-women-love-drops",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 68,
      "originalPrice": 120,
      "discount": 52
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-51.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-18.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "deadly-delay-shark-cream-48k-for-long-time",
    "barcode": 7793911549265,
    "title": {
      "en": "Deadly Delay Shark Cream 48K for Long time"
    },
    "description": {
      "en": "The Deadly Delay Shark Cream 48K for Long time ? the ultimate solution engineered for those seeking to elevate their intimacy and extend their moments of pleasure. Infused with a proprietary blend of natural extracts and modern desensitizing agents, this revolutionary cream is designed to empower and enhance endurance, ensuring that you and your partner experience prolonged, unforgettable encounters. Just a small application of this potent formula works wonders, subtly numbing sensitivity to allow for extended sessions without compromising sensation. Its discreet and convenient packaging makes it an easy, go-to choice for spontaneous moments, offering a hassle-free application process. The Deadly Delay Shark Cream 48K for Long time is not just a product; it's your secret weapon for boosting confidence and achieving peak performance in your most intimate moments. Experience the difference today and redefine the limits of pleasure with each use."
    },
    "slug": "deadly-delay-shark-cream-48k-for-long-time",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 110,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-19.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-12.jpeg",
      "https://pharmelow.com/wp-content/uploads/main-52.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-19.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "shark-power-super-form-delay-cream-for-men",
    "barcode": 8346680313293,
    "title": {
      "en": "Shark Super form Men Delay Cream"
    },
    "description": {
      "en": "This luxurious cream dives deep into the layers of your skin, delivering unparalleled hydration and nourishment."
    },
    "slug": "shark-super-form-men-delay-cream",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.2-20.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.4-3.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.3-2-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-20.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "stud-100-desensitizing-delay-spray-for-men",
    "barcode": 5459379302096,
    "title": {
      "en": "Original Stud Delay 100 Desensitizing Spray"
    },
    "description": {
      "en": "Introducing the revolutionary Stud 100 Desensitizing delay Spray for Men, a masterful creation designed to elevate intimate experiences to uncharted territories of pleasure and durability. This exceptional product is engineered with precision to ensure maximum satisfaction and confidence, placing it miles ahead of its competition. Infused with a meticulously balanced formula, Stud 100 provides a gentle numbing effect, allowing men to extend their intimate moments without detracting from the pleasure. Its discreet and convenient packaging means it can be your secret weapon, always ready to transform an ordinary night into an extraordinary adventure. Dermatologically tested and compliant with strict international standards, Stud 100 is safe, effective, and easy to use, ensuring you can focus on the moment with absolute peace of mind. Whether you're looking to enhance your endurance or simply seeking an extra boost in your intimate encounters, Stud 100 Desensitizing Spray for Men is your go-to solution for moments that last. Experience the difference today and redefine the limits of pleasure."
    },
    "slug": "original-stud-delay-100-desensitizing-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 105,
      "discount": 55
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-21.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.2-3-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-13.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "stud-5000-delay-power-spray-for-men",
    "barcode": 2091388532670,
    "title": {
      "en": "Stud 5000 delay power spray for men"
    },
    "description": {
      "en": "Introducing the revolutionary Stud 5000 Delay Power Spray for Men ? a game-changer in enhancing male confidence. This expertly crafted formula is designed for those seeking to elevate the moments that matter most, ensuring a lasting experience that both you will cherish. With just a few sprays, Stud 5000 empowers you to take control, prolonging pleasure and delaying culmination. It's discreet, easy to use, and fast-acting, making it the perfect accomplice for spontaneous occasions or planned encounters. Specially formulated with safety and satisfaction in mind, it's a trusted companion in your pursuit of maximum enjoyment. Don't let the moment pass you by; make every second count with Stud 5000 Delay Power Spray for Men."
    },
    "slug": "stud-5000-delay-power-spray-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/0000.2-4-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.1-1-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "stud-delay-spray-for-men",
    "barcode": 7400899217887,
    "title": {
      "en": "Timing Stud Spray"
    },
    "description": {
      "en": "The ultimate solution for men seeking to prolong those intimate moments - our Stud Delay Power Spray. Specially formulated with a unique blend of natural ingredients, this revolutionary product is designed to maximize stamina and enhance endurance, ensuring that you can confidently satisfy your partner and fully enjoy every moment together. The Power Spray is discreetly packaged and easy to apply, offering a quick-drying formula that leaves no residue, allowing for spontaneous moments of passion without interruption. Unlike other products on the market, our Stud Delay Power Spray is specifically engineered to provide a delicate balance between sensitivity and control, ensuring an optimal experience without diminishing pleasure. Whether you're looking to add more excitement to your love life or simply seeking to regain confidence, make the intelligent choice with our Stud Delay Power Spray. Experience the difference and step into a world of prolonged pleasure and strengthened connections.<br>Today's the day to turn your desires into reality - why wait?"
    },
    "slug": "timing-stud-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 100,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-53.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.1-22.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-21.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "super-dooz-spray-34000-for-men",
    "barcode": "0890763590104",
    "title": {
      "en": "Super Dooz Spray 34000 for men"
    },
    "description": {
      "en": "Introducing the revolutionary Super Dooz Spray for men 34k - your ultimate secret to confidence and lasting performance. Infused with a powerful formula, the Super Dooz Spray for men 34k will empower you with unparalleled endurance, ensuring that you enjoy prolonged pleasure without compromising sensitivity. Perfect for those who seek to seamlessly blend passion with control, this discreet and easy-to-use spray is your companion in achieving mutual satisfaction. Elevate your confidence and transform ordinary nights into sessions of endless exploration with Super Dooz Spray for men 34k - because you deserve experiences that are nothing short of extraordinary."
    },
    "slug": "super-dooz-spray-34000-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 100,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-54.jpeg",
      "https://pharmelow.com/wp-content/uploads/1.2-4.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "super-magic-man-tissue-for-eriction",
    "barcode": 8237402992066,
    "title": {
      "en": "Super Magic Delay Man Tissue"
    },
    "description": {
      "en": "Introducing the pinnacle of innovation and confidence in intimate encounters - the Super Magic Delay Man Tissue. Crafted for the modern man who seeks both control and pleasure in his moments of passion, this premium product is a symphony of science and sensuality. Elevate your experiences with a formula that is both potent and gentle, ensuring maximum satisfaction without compromise. Each tissue, infused with our exclusive delay spray, promises to enhance your endurance and intimacy, enabling moments of unbridled joy and prolonged ecstasy."
    },
    "slug": "super-magic-delay-man-tissue",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 100,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.3-14.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.2-5-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.1-2-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.4-2.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "super-stud-5000-delay-spray-for-men",
    "barcode": 5530777981707,
    "title": {
      "en": "Super stud 5000 delay spray for men"
    },
    "description": {
      "en": "Stud 5000 Delay Power Spray for Men, is a masterfully formulated solution designed to enhance your confidence and elevate intimate experiences. This powerful spray is ingeniously crafted to prolong pleasure, ensuring that every moment is savored to its fullest potential. With its fast-acting, long-lasting formula, the Stud 5000 Delay Power Spray promises to be your trusted ally, empowering you to take control of your performance and unlock new heights of intimacy. Enriched with skin-friendly ingredients, it offers a gentle yet effective application, ensuring maximum comfort without any irritation. Perfect for those seeking to extend their moments of bliss, this discrete and easy-to-use spray is all about celebrating masculinity while providing an extra layer."
    },
    "slug": "super-stud-5000-delay-spray-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-23.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-22.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-15.jpeg",
      "https://pharmelow.com/wp-content/uploads/0004.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "super-viga-240000-vitamin-e-delay-spray",
    "barcode": 3086098888055,
    "title": {
      "en": "Super Viga 240000 vitamin E delay spray"
    },
    "description": {
      "en": "Introducing the revolution in male enhancement and endurance: Super Viga 240000 with Vitamin E spray for men. This groundbreaking formula is designed to elevate your intimate moments, ensuring they are not just lasting, but also luxuriously satisfying. Enriched with Vitamin E, this spray doesn?t just promise prolonged pleasure; it also cares for your skin, nourishing and protecting it with every application. Super Viga 240000 is your secret weapon, crafted to enhance your confidence and prowess, ensuring you and your partner enjoy a deeply fulfilling experience. Step into a world where performance meets perfection, and let Super Viga 240000 transform your intimate encounters into moments of pure bliss. Embrace the power of enduring pleasure and make Super Viga 240000 an indispensable part of your life."
    },
    "slug": "super-viga-240000-vitamin-e-delay-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/00.1-4.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-23.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-16.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.4-4.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "super-viga-990000-ginseng-spray-for-men",
    "barcode": 8256656435488,
    "title": {
      "en": "Super viga 990000 ginseng spray for men"
    },
    "description": {
      "en": "Introducing the revolutionary Super Viga 990000 Ginseng Spray for men ? an elixir of vigor that unlocks unparalleled endurance and vitality. Crafted from the ancient wisdom of ginseng root, this potent formulation is your secret weapon to transcend limitations and reclaim your throne in the realms of passion and endurance. Each spritz is a pledge to durability, inviting you to explore newfound territories of satisfaction and performance that last beyond expectations. Empower your confidence with the essence of vitality; let Super Viga 990000 Ginseng Spray be the guardian of your prowess. Elevate your essence, transcend the ordinary, and experience the extraordinary ? because you deserve a life lived at its peak."
    },
    "slug": "super-viga-990000-ginseng-spray-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 230,
      "discount": 110
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-102.png",
      "https://pharmelow.com/wp-content/uploads/1-77.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "supreme-gluta-white-1500000-supplement",
    "barcode": 6968738828287,
    "title": {
      "en": "Supreme Gluta White 1500000 Capsules"
    },
    "description": {
      "en": "Illuminate your natural beauty with Supreme Gluta White 1500000 capsules, the ultimate advancement in skincare perfection. Harnessing the potent power of glutathione, each capsule is meticulously designed to rejuvenate and revitalize your skin from within. Experience unparalleled radiance with our high-potency formula that goes beyond ordinary skincare. Transform dull, uneven tones into a luminously fair and even complexion. Infused with antioxidants, these capsules provide a robust defense against environmental stressors, promoting cellular health and longevity. Elevate your skincare regimen to new heights and embrace the glow you deserve with Supreme Gluta White ? your passport to timeless beauty."
    },
    "slug": "supreme-gluta-white-1500000-capsules",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 110,
      "originalPrice": 230,
      "discount": 120
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-104.png",
      "https://pharmelow.com/wp-content/uploads/1-79.png",
      "https://pharmelow.com/wp-content/uploads/2-6.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "tiger-king-nutritional-tablets-to-increase-size-and-timings",
    "barcode": 8848038161582,
    "title": {
      "en": "Tiger King Nutritional tablets for Size and Timings"
    },
    "description": {
      "en": "Introducing the revolutionary Tiger King Nutritional Tablets, meticulously formulated to elevate your confidence and performance to regal heights. Embark on a journey of transformation with this potent blend, designed for those who seek to fast-track their way to supremacy. With Tiger King Tablets, experience a profound increase in size and enhanced timing, ensuring that your prowess becomes the stuff of legends. Crafted from select, premium ingredients, these tablets are your secret weapon in the quest for unparalleled vitality and vigor. Embrace the power, dominate the moment, and let the Tiger King Tablets crown you ruler of the jungle."
    },
    "slug": "tiger-king-nutritional-tablets-for-size-and-timings",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 70,
      "originalPrice": 150,
      "discount": 80
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-55.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-15.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "titan-gold-gel-to-increase-size",
    "barcode": 3543509070602,
    "title": {
      "en": "Titan Gold Size Increase Gel"
    },
    "description": {
      "en": "Unlock the secret to invigorating confidence with Titan Gold Gel, a revolutionary formula designed to elevate your personal experiences to realms untold. Our premium gel is meticulously crafted to not just meet expectations but to shatter them, Infused with groundbreaking ingredients, Titan Gold Gel promises a transformation that's both palpable and visible, catering to those who seek to amplify their essence with vigor and vitality. This isn't just a product; it's a pivotal moment of empowerment."
    },
    "slug": "titan-gold-size-increase-gel",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 210,
      "discount": 130
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-81.png",
      "https://pharmelow.com/wp-content/uploads/Main-56.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "touch-me-please-breast-enlarging-cream",
    "barcode": 7194874785736,
    "title": {
      "en": "Touch Me Please Enlarging Cream"
    },
    "description": {
      "en": "Unveil the secret to confidence and allure with the Touch Me Please Enlarging Cream. Formulated with advanced, natural ingredients, this luxurious cream works harmoniously with your body to promote firmer, fuller, and beautifully contoured. Imbued with nourishing botanicals and skin-loving nutrients, each application not only enhances volume but also hydrates and revitalizes your skin. Say goodbye to invasive procedures and embrace an effortless, pain-free solution to your beauty goals. Touch Me Please is your ultimate ally in embracing your femininity and boosting your self-esteem."
    },
    "slug": "touch-me-please-enlarging-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 75,
      "originalPrice": 150,
      "discount": 75
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-57.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-16.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "touch-me-please-slimming-hot-cream",
    "barcode": 9629999759433,
    "title": {
      "en": "Touch me Please Female Hot Cream"
    },
    "description": {
      "en": "Unleash the confidence within you with our 'Touch Me Please Female Hot Cream'. Imagine feeling the rush of a revitalizing formula working tirelessly to sculpt and define your body. Crafted with the finest natural ingredients, this extraordinary cream penetrates deeply to ignite fat burning, smoothen cellulite, and tighten skin. Its innovative thermal action elevates your body heat to enhance blood circulation, accelerating metabolism and making every inch of you feel flawlessly toned. Indulge in a tantalizing experience that not only transforms your physique but also reinvigorates your senses."
    },
    "slug": "touch-me-please-female-hot-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 240,
      "discount": 120
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-58.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-17.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "usa-maca-strong-man-dietary-tablets",
    "barcode": 9683791703674,
    "title": {
      "en": "USA Maca Strong Man Dietary Tablets"
    },
    "description": {
      "en": "Introducing the unparalleled USA Maca Strong Man Tablets - a powerhouse of vigor and vitality designed exclusively for those who refuse to settle for anything less than absolute peak performance. Embodied within each meticulously crafted tablet, lies the essence of pure, undiluted strength, ensuring that every aspect of your physical and mental well-being is elevated to unparalleled heights. Infused with an elite blend of nature's most potent ingredients, these revolutionary tablets are the beacon of resilience and endurance, sculpted for the modern warrior. Whether it's dominating the boardroom, excelling in the most grueling physical challenges, or simply living life with an unyielding passion and zest, USA Maca Strong Man Tablets are your ultimate ally. Join the elite circle of those who embody strength, vitality, and an indomitable spirit, with a daily ritual that sets the foundation for absolute supremacy in every endeavor. Experience the transformation ? embody the power of USA Maca Strong Man Tablets today and redefine what's possible."
    },
    "slug": "usa-maca-strong-man-dietary-tablets",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.2-24.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.1-3-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.3-4-2.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "viga-1-million-strong-spray-45ml",
    "barcode": 4853191513257,
    "title": {
      "en": "viga 1 million strong spray 45ml"
    },
    "description": {
      "en": "Introducing the Viga 1 Million Strong Spray, a powerful testament to masculine strength and endurance, packaged in a sleek 45ml bottle designed for the modern man. Engineered with precision, this potent formulation is your secret weapon to achieving unparalleled lasting power, ensuring you stand tall and confident in your most intimate moments. Infused with a blend of meticulously selected ingredients,<br>Viga offers a fast-acting, reliable solution that works synergistically with your body's natural rhythm, enhancing stamina without compromise to sensitivity. Its discreet and convenient spray mechanism allows for precise application, ensuring maximum efficacy with minimal fuss. Whether you're looking to elevate your endurance, boost your confidence, or simply take your intimate experiences to the next level, the Viga 1 Million Strong Spray is your ally. Embrace the essence of virility and power. Make your move with Viga ? where lasting strength meets exceptional control."
    },
    "slug": "viga-1-million-strong-spray-45ml",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-24.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-25.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-17.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.4-5.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "viga-350000-vitamin-e-spray-for-men",
    "barcode": 7848183506864,
    "title": {
      "en": "Viga 350000 vitamin E spray for men"
    },
    "description": {
      "en": "Viga 350000 Vitamin E Spray for Men, an unparalleled blend of power and vitality designed to elevate your confidence and performance. This exquisite formula, enriched with the potent antioxidant qualities of Vitamin E, not only promises to enhance your vigor but also supports the nourishment and protection of your skin. Crafted for those who seek to break free from the ordinary, Viga 350000 is more than a spray; it's a gateway to unlocking your ultimate potential. Experience the fusion of strength and wellness, and step into a realm where every moment is filled with unparalleled vitality and endurance. Perfect for the modern man who demands both excellence and holistic wellbeing. With Viga 350000, prepare to transcend limits and redefine possibilities."
    },
    "slug": "viga-350000-vitamin-e-spray-for-men",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 180,
      "originalPrice": 253,
      "discount": 73
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/42830.jpg",
      "https://pharmelow.com/wp-content/uploads/3456.jpg",
      "https://pharmelow.com/wp-content/uploads/23464.jpg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vigrx-plus-male-virility-supplement-tablets",
    "barcode": 4106672886198,
    "title": {
      "en": "VigRX Plus USA Original"
    },
    "description": {
      "en": "Introducing VigRX Plus Tablet, Crafted with precision and backed by science, each tablet is a testament to years of research and dedication to understanding male vitality. This isn't just any supplement; it's a revolutionary blend of natural ingredients, each selected for their proven efficacy in boosting performance, stamina, and desire. VigRX Plus is designed to seamlessly integrate into your day, working with your body to unlock your full potential."
    },
    "slug": "vigrx-plus-usa-original",
    "category": {
      "name": {
        "en": "Tablets"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-82.png",
      "https://pharmelow.com/wp-content/uploads/Main-106.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vimax-man-delay-spray-for-longer-time",
    "barcode": 2887843633880,
    "title": {
      "en": "ViMax Man Delay Spray for Time"
    },
    "description": {
      "en": "Introducing the ViMax Man Delay Spray ? your ultimate solution to embracing longer, more fulfilling moments. Expertly formulated to revolutionize your confidence and endurance, this pioneering product stands as a testament to innovation in personal satisfaction. Immerse yourself in the sheer pleasure of prolonged encounters, courtesy of our meticulously crafted spray. Designed with a unique blend of natural ingredients, ViMax Man Delay Spray gently numbs sensitivity without detracting from the exhilaration of your experiences. Its quick-absorbing, non-greasy formula ensures a comfortable application, leaving no residue behind, allowing you and your partner to focus solely on the depth of your connection."
    },
    "slug": "vimax-man-delay-spray-for-time",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 100,
      "originalPrice": 160,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-27.jpeg",
      "https://pharmelow.com/wp-content/uploads/0000.2-6-2.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vimax-vimax-dietary-supplement-capsules-30",
    "barcode": 5583625226727,
    "title": {
      "en": "Original Vimax Men Dietary Capsules"
    },
    "description": {
      "en": "Introducing the pinnacle of natural potency and vitality, Vimax Dietary Capsules. Each bottle contains an invigorating blend of 60 capsules, meticulously crafted to elevate your well-being to unprecedented levels.<br>Derived from nature's most powerful ingredients, these capsules are designed to support and enhance your body's natural vigor, ensuring you feel vibrant and energized from dawn until dusk. With Vimax Dietary Capsules, experience a profound transformation in your physical and mental vitality, empowering you to conquer every challenge with unparalleled strength and confidence. Step into a realm of endless possibilities and embrace the heightened version of yourself."
    },
    "slug": "original-vimax-men-dietary-capsules",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 200,
      "discount": 80
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/0000.1-6-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-30.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.3-21.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vimax-vimax-dietary-capsules-30",
    "barcode": "0537394319062",
    "title": {
      "en": "Vimax Dietary Capsules (30)"
    },
    "description": {
      "en": "Introducing the revolutionary Vimax Dietary Capsules, a harmonious blend of nature's finest ingredients<br>crafted to unlock your body's fullest potential. With a carefully curated formula contained within 30 potent capsules, this premium supplement is designed to invigorate and enhance your vitality, endurance, and overall well-being. Each capsule is a beacon of health, meticulously engineered to support your body's natural functions, empowering you to achieve optimal performance and vigor. Embrace the transformation that Vimax Vimax Dietary Capsules bring - become the best version of yourself, today and every day."
    },
    "slug": "vimax-dietary-capsules-30",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 200,
      "originalPrice": 300,
      "discount": 100
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-01-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-01-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vip-king-size-natural-man-capsules",
    "barcode": 5198532573712,
    "title": {
      "en": "Vip Vitamins King Size Man Capsules"
    },
    "description": {
      "en": "The pinnacle of well-being and vitality: Vip Vitamins King Size Natural Capsules. Crafted for those who demand excellence and efficacy in every aspect of their life, these premium capsules are your gateways to an enhanced, energetic, and thriving existence. With an all-natural formula, Vip Vitamins King Size Capsules harness the power of nature to elevate your well-being to royal standards. Infused with a blend of carefully selected herbs known for their invigorating properties, each capsule is a testament to nature's potent gifts. Experience the surge of vitality, the clarity of mental focus, and the peace of holistic well-being. Designed for kings but made accessible for all, Vip King Size Natural Capsules are more than just a supplement, they are your daily ally in achieving the zenith of health and energy."
    },
    "slug": "vip-vitamins-king-size-man-capsules",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 110,
      "originalPrice": 210,
      "discount": 100
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-59.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-18.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vital-vip-honey-sachets-12",
    "barcode": 8637736026428,
    "title": {
      "en": "Vital VIP Honey Sachets | 12 Pieces"
    },
    "description": {
      "en": "Introducing the essence of nature's most exquisite offering in a luxuriously convenient form: Vital VIP Honey. With each elegantly packaged box containing 12 premium sachets, this divine nectar is more than just honey; it's a treasure trove of vitality and wellness, meticulously crafted for those who demand the best from life. Vital VIP Honey is not just a sweetener; it's a potent concoction that harmonizes perfectly with your body's needs, providing an unparalleled boost to your energy, vigor, and overall wellness. Each sachet is a golden drop of paradise, carefully harvested and preserved to ensure you receive the full spectrum of nature's benefits. Ideal for the discerning individual who appreciates the finer things in life, Vital VIP Honey transforms ordinary moments into extraordinary experiences. Elevate your daily rituals and embrace the luxurious vitality offered by every drop of this golden elixir. Choose Vital VIP Honey ? because you deserve the VIP treatment."
    },
    "slug": "vital-vip-honey-sachets-12-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-60.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-19.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "procomil-delay-men-spray",
    "barcode": 1997630885062,
    "title": {
      "en": "Original Procomil Long Delay Men Spray"
    },
    "description": {
      "en": "Procomil Long Delay Men Spray is your ultimate secret weapon for unparalleled endurance and confidence. Crafted with cutting-edge technology and a blend of natural extracts, this exceptional spray is designed to elevate your intimate moments, ensuring a lasting and unforgettable experience."
    },
    "slug": "original-procomil-long-delay-men-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 180,
      "originalPrice": 220,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-6.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-6.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vigrx-nutritional-men-capsules-60",
    "barcode": "0915423721206",
    "title": {
      "en": "VigRx Nutritional Men Capsules (60)"
    },
    "description": {
      "en": "Introducing VigRX, the ultimate solution in men's wellness designed to invigorate and revitalize. Our exclusively crafted blend of natural ingredients is encased in 60 potent capsules, promising a transformative experience with every dose. VigRX nutritional capsules are meticulously formulated to enhance men health and wellness, promoting a zest for life that every man deserves. Whether you're seeking to elevate your wellness routine or enhance your natural vigor, VigRX nutritional capsules offers a discreet and effective path to achieving your goals. Experience the difference with VigRX, where every capsule is a step towards unlocking your full potential."
    },
    "slug": "vigrx-nutritional-men-capsules-60",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 65,
      "originalPrice": 130,
      "discount": 65
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main.png",
      "https://pharmelow.com/wp-content/uploads/1-2.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "titan-red-gel-for-men-size",
    "barcode": 1232527522416,
    "title": {
      "en": "Titan Red Special Men Size Gel"
    },
    "description": {
      "en": "Experience the zenith of performance with Titan Red Gel, a revolutionary product designed to elevate your confidence. Crafted with a unique blend of natural ingredients, this powerful gel offers a dual-action solution that enhances size and prolongs timing, ensuring moments are not just enjoyed but remembered. Titan Red Gel stands apart in its category, setting new benchmarks for efficacy and satisfaction. It is meticulously developed to ensure a seamless integration into your routine, promising discreet and comfortable use. Embrace the transformative power of Titan Red Gel and usher in an era of unparalleled pleasure and confidence."
    },
    "slug": "titan-red-special-men-size-gel",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 35,
      "originalPrice": 65,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "derma-gold-women-fitting-insertion-tablets",
    "barcode": "0757571085799",
    "title": {
      "en": "Derma Gold Women Fitting Insertion Tablets"
    },
    "description": {
      "en": "Experience unparalleled confidence and rejuvenation with Derma Gold Fitting Insertion tablets. This meticulously crafted solution is designed to offer not only revitalizing comfort but also transformative results. Infused with a proprietary blend of natural ingredients, Derma Gold works harmoniously with your body, promoting enhanced elasticity and firmness. Derma Gold provides a seamless, non-invasive approach that stands leagues above the competition. Embrace the ultimate in personal care and elevate your intimate wellness with Derma Gold?a golden touch that redefines elegance."
    },
    "slug": "derma-gold-women-fitting-insertion-tablets",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 30,
      "originalPrice": 60,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-3.jpeg",
      "https://pharmelow.com/wp-content/uploads/1-3.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "classic-mood-fitting-tablets-for-women",
    "barcode": 3834344933321,
    "title": {
      "en": "Classic Mood Fitting Tablets for Women"
    },
    "description": {
      "en": "Elevate your intimate wellness with the Classic Mood Fitting Insertion for Women. Crafted with precision and infused with high-quality, hypoallergenic materials, this innovative product promises unparalleled comfort and effectiveness. Experience a rejuvenated feeling that sets the Classic Mood apart from the rest. Embrace a product meticulously designed to enhance your inner allure and elevate your intimate experiences. Make every moment matter with a Classic Mood."
    },
    "slug": "classic-mood-fitting-tablets-for-women",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 69,
      "originalPrice": 120,
      "discount": 51
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.2-18.jpeg",
      "https://pharmelow.com/wp-content/uploads/00.3.jpeg",
      "https://pharmelow.com/wp-content/uploads/00.1-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/Main-44.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "pure-shilajit-himalayan-resin-for-men",
    "barcode": 9546962402007,
    "title": {
      "en": "Pure Shilajit Himalayan Resin for men"
    },
    "description": {
      "en": "Pure Shilajit Himalayan  Resin ? its nutrient-rich resin, promising not only to rejuvenate your well-being but also to inspire strength and endurance that resonates with the spirit of the Himalayan warriors of yore. Embrace the power of nature's most guarded secret and embark on a journey of transformation with our Pure Shilajit Himalayan Mountain Strong Resin."
    },
    "slug": "pure-shilajit-himalayan-resin-for-men",
    "category": {
      "name": {
        "en": "Chocolates"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 70,
      "originalPrice": 110,
      "discount": 40
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-9.png",
      "https://pharmelow.com/wp-content/uploads/1-12.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "ivy-maison-bella-women-breast-cream",
    "barcode": 1914508333135,
    "title": {
      "en": "IVY Maison Bella Women Breast Cream 100g"
    },
    "description": {
      "en": "Discover the secret to confidence with IVY Maison Bella Breast Cream. This revolutionary formula is designed with a blend of luxurious, skin-loving ingredients that nourish and enhance your natural curves. Infused with advanced botanicals and cutting-edge technology, Bella Breast Cream promises noticeable results, enhancing volume, firmness, and shape with consistent use. Imagine the joy of feeling empowered, knowing that your d�colletage radiates absolute glamour."
    },
    "slug": "ivy-maison-bella-women-breast-cream-100g",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 65,
      "originalPrice": 120,
      "discount": 55
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-10.png",
      "https://pharmelow.com/wp-content/uploads/1-14.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "tvo-ginger-hip-lift-massage-cream",
    "barcode": 4250252975090,
    "title": {
      "en": "TVO Ginger Hip Lift Massage Cream"
    },
    "description": {
      "en": "Open the secret to a more sculpted and radiant silhouette with our exquisite TVO Ginger Hip Lift Massage Cream. Infused with the potent natural essence of ginger, this luxurious cream works harmoniously to enhance and firm your hip contours while nurturing your skin with deep hydration. Designed for those who crave both efficacy and indulgence, the cream?s silky texture melts effortlessly into the skin, delivering a warming sensation that promotes circulation and skin elasticity. Elevate your self-care routine and achieve enviable curves with a product that's not just a treat for the body, but also a sensorial delight."
    },
    "slug": "tvo-ginger-hip-lift-massage-cream",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 65,
      "originalPrice": 120,
      "discount": 55
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-12.png",
      "https://pharmelow.com/wp-content/uploads/1-15.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "tvo-papaya-women-breast-cream",
    "barcode": 9394836982151,
    "title": {
      "en": "TVO Papaya Women Breast cream 300g"
    },
    "description": {
      "en": "Unlock the secret to natural enhancement with TVO Papaya Women Breast Cream. Infused with the luscious essence of ripe papayas, this luxurious cream is your gateway to fuller, firmer, and more youthful breasts. Rich in vitamins and skin-loving nutrients, our unique formula works synergistically to nourish, tone, and rejuvenate, delivering visible results that will turn heads and boost confidence. Imagine the delight of softer, smoother skin and the captivating allure of enhanced curves."
    },
    "slug": "tvo-papaya-women-breast-cream-300g",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 64,
      "originalPrice": 120,
      "discount": 56
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-14-1.png",
      "https://pharmelow.com/wp-content/uploads/1-16.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "ginger-hip-massage-cream",
    "barcode": 6871760704293,
    "title": {
      "en": "Ginger Hip Massage Cream 230ml"
    },
    "description": {
      "en": "Unveil the secret to unparalleled comfort with our Ginger Hip Massage Cream, your ultimate solution for those seeking soothing relief and rejuvenation. This exceptional formula, infused with premium ginger extracts, is meticulously crafted to deliver deeply penetrating warmth and relaxation to tired, aching hips. The rich texture glides effortlessly over your skin, ensuring an indulgent massage experience that melts away tension and restores vitality."
    },
    "slug": "ginger-hip-massage-cream-230ml",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 55,
      "originalPrice": 75,
      "discount": 20
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-17.png",
      "https://pharmelow.com/wp-content/uploads/1-18.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "dr-james-women-breast-firming-gel",
    "barcode": 4840604413495,
    "title": {
      "en": "Dr James Women Breast Firming Gel"
    },
    "description": {
      "en": "Experience the transformation with Dr. James Breast Firming Gel ? your ultimate solution for achieving firm, youthful, and beautifully contoured breasts. Crafted with a unique blend of natural ingredients and advanced skincare science, this luxuriously smooth gel penetrates deeply to rejuvenate and tighten your skin, enhancing elasticity and giving your bust a visibly lifted appearance. Feel confident in every outfit and embrace your femininity like never before. Dr. James Breast Firming Gel is dermatologically tested, non-greasy, and suitable for all skin types, ensuring safety and efficacy."
    },
    "slug": "dr-james-women-breast-firming-gel",
    "category": {
      "name": {
        "en": "For Hip & Breast"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 105,
      "originalPrice": 195,
      "discount": 90
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Honey.jpeg",
      "https://pharmelow.com/wp-content/uploads/Honey-2.jpeg",
      "https://pharmelow.com/wp-content/uploads/Honey-1.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "bio-herbs-royal-honey-12-pieces",
    "barcode": 7969754054796,
    "title": {
      "en": "Bio Herbs Royal Honey | 12 Pieces"
    },
    "description": {
      "en": "Introducing Bio Herbs Royal Honey, a luxurious and potent natural supplement designed to nourish, energize, and revitalize your overall well-being. Each box contains 12 pieces of high-quality royal honey, carefully harvested and infused with natural ingredients that promote vitality, strength, and endurance. Bio Herbs Royal Honey effectively addresses common concerns such as fatigue, low libido, and stress, while providing a natural energy boost and supporting overall health."
    },
    "slug": "bio-herbs-royal-honey-12-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 120,
      "originalPrice": 190,
      "discount": 70
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-2-1.png",
      "https://pharmelow.com/wp-content/uploads/2-2.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "pure-white-wings-honey-10-pieces",
    "barcode": "0932933201028",
    "title": {
      "en": "White Wings Honey - 10 Pieces"
    },
    "description": {
      "en": "White Wings Honey, a premium-quality, all-natural honey formula designed to support overall health. Each box contains 10 pieces of pure, high-grade honey, carefully harvested to preserve its natural goodness.<br>Benefits:<br>Natural energy booster<br>Supports immune function and overall well-being<br>May help to alleviate physical performance<br>Supports healthy digestion and gut health"
    },
    "slug": "white-wings-honey-10-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/2-4.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "eros-men-delay-vitamin-e-spray",
    "barcode": 3994176993525,
    "title": {
      "en": "Eros Men Delay Vitamin E Spray"
    },
    "description": {
      "en": "Introducing Eros Men Delay Vitamin E Spray, a specially designed formula to help men last longer and control their climax. This unique spray combines the natural benefits of Vitamin E with other carefully selected ingredients to support performance.<br>Benefits:<br>Delays ejaculation, allowing for longer-lasting intimacy<br>Enhances control and confidence.<br>Supports natural arousal and pleasure<br>Soothes and calms the skin with Vitamin E"
    },
    "slug": "eros-men-delay-vitamin-e-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 27,
      "originalPrice": 42,
      "discount": 15
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-3-1.png",
      "https://pharmelow.com/wp-content/uploads/2-3-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "spanish-gold-fly-arousal-women-drops",
    "barcode": 9288021712589,
    "title": {
      "en": "Spanish Gold Fly Arousal Women Drops"
    },
    "description": {
      "en": "Introducing Spanish Gold Fly Arousal Women Drops, a potent and all-natural formula designed to ignite passion and desire in women. These discreet and easy-to-use drops are carefully crafted with a blend of natural ingredients to support female arousal and intimacy.<br>Benefits:<br>Increases desire and arousal<br>Enhances intimacy and physical communication<br>Boosts confidence and self-esteem<br>Natural and safe, with no harsh chemicals or artificial additives"
    },
    "slug": "spanish-gold-fly-arousal-women-drops",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 80,
      "discount": 30
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1.webp",
      "https://pharmelow.com/wp-content/uploads/3.webp",
      "https://pharmelow.com/wp-content/uploads/2.webp"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "women-fluid-enhancer-liquid-drops",
    "barcode": 6217030378328,
    "title": {
      "en": "Women Fluid Enhancer Liquid Drops"
    },
    "description": {
      "en": "Introducing Women Fluid Enhancer Liquid Drops, a natural and discreet solution designed to enhance women's intimacy and pleasure. These easy-to-use drops are carefully crafted with natural ingredients to support vaginal lubrication and comfort.<br><br>Benefits:<br>Enhances natural lubrication for increased comfort and pleasure<br>Supports intimacy and connection.<br>Natural and gentle, with no harsh chemicals or artificial fragrances<br>Easy to use: simply add a few drops as needed<br><br>Key Features:<br>Fast-acting, with results in minutes<br>Natural ingredients, carefully selected for safety and efficacy<br>Discreet and portable, perfect for travel or at-home"
    },
    "slug": "women-fluid-enhancer-liquid-drops",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 135,
      "discount": 55
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/2-4-1.png",
      "https://pharmelow.com/wp-content/uploads/1-4.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vigrx-delay-men-spray",
    "barcode": 6071723260419,
    "title": {
      "en": "VigRx Delay Men Spray"
    },
    "description": {
      "en": "Introducing VigRx Delay Men Spray, a specially designed formula to help men last longer and control their climax. This unique spray is carefully crafted with natural ingredients to support male performance and intimacy.<br><br>Benefits:<br>Delays ejaculation, allowing for longer-lasting intimacy<br>Enhances control and confidence in the bedroom<br>Supports natural arousal and pleasure<br>Non-greasy, gentle, and easy to apply<br><br>Key Features:<br>Fast-acting, with results in minutes<br>Natural ingredients, carefully selected for safety and efficacy<br>Discreet and portable, perfect for travel or at-home use<br>Suitable for men of all ages and backgrounds"
    },
    "slug": "vigrx-delay-men-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 60,
      "originalPrice": 120,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/2-5-1.png",
      "https://pharmelow.com/wp-content/uploads/Main-2.png",
      "https://pharmelow.com/wp-content/uploads/1-5.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "vigrx-men-topical-oil-for-size-and-timing",
    "barcode": 5425830952773,
    "title": {
      "en": "VigRX Cream (USA Original)"
    },
    "description": {
      "en": "Introducing VigRX Men's Topical Oil, the revolutionary solution meticulously designed to enhance size and improve timing, ensuring a confidence boost that transcends the ordinary. This elite formula, enriched with natural extracts and cutting-edge compounds, seamlessly integrates into your routine, promising an unbeatable edge in your intimate moments. VigRX Oil stands as a testament to scientific innovation and natural potency, aiming to redefine your personal experiences with unparalleled results."
    },
    "slug": "vigrx-cream-usa-original",
    "category": {
      "name": {
        "en": "Creams"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 55,
      "originalPrice": 105,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-1.webp",
      "https://pharmelow.com/wp-content/uploads/2-1.webp"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "blue-wizard-water-women-drops",
    "barcode": 5767082709546,
    "title": {
      "en": "Blue Wizard Water Women Drops"
    },
    "description": {
      "en": "Introducing Blue Wizard Water Women Drops, a unique, all-natural formula designed to support women's health and well-being. These drops are carefully crafted with a blend of natural ingredients to provide a range of benefits.<br><br>Benefits:<br>Supports hormone balance and menstrual health<br>May help to alleviate symptoms of PMS and menopause, such as mood swings, bloating, and hot flashes<br>- Enhances intimacy and connection with your partner<br>Supports natural lubrication and comfort<br>Boosts confidence and self-esteem.<br><br>Key Features:<br>All-natural ingredients, carefully selected for their safety and efficacy<br>No artificial additives, preservatives, or fillers<br>Easy to use: simply drink as needed<br>Suitable for women of all ages and backgrounds"
    },
    "slug": "blue-wizard-water-women-drops",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 115,
      "originalPrice": 160,
      "discount": 45
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-6.png",
      "https://pharmelow.com/wp-content/uploads/2-6-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-vip-design-vital-honey-12-pieces",
    "barcode": 9137418658477,
    "title": {
      "en": "Original VIP Design Vital Honey - 12 Pieces"
    },
    "description": {
      "en": "Introducing the Original VIP Design Vital Honey, a premium-quality, all-natural ingredients designed to support overall health and vitality. Each box contains 12 pieces of pure, high-grade vital honey, carefully harvested to preserve its natural goodness.<br><br>Benefits:<br>Boosts energy and vitality<br>Supports immune function and overall well-being<br>Natural and safe with no artificial additives<br>May help to enhance physical performance and mental clarity<br>Experience the natural benefits of the Original VIP Design Vital Honey."
    },
    "slug": "original-vip-design-vital-honey-12-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 110,
      "originalPrice": 200,
      "discount": 90
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-7-1.png",
      "https://pharmelow.com/wp-content/uploads/2-7.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "crown-royal-honey-gold-12-pieces",
    "barcode": 1265548492901,
    "title": {
      "en": "Crown Royal Honey Gold - 12 Pieces"
    },
    "description": {
      "en": "Introducing Pure Royal Honey Gold, a premium-quality, all-natural supplement designed to support overall health and vitality. Each box contains 12 pieces of pure, high-grade royal honey, carefully harvested to preserve its natural goodness.<br><br>Benefits:<br>Boosts energy and vitality<br>Supports immune function and overall well-being<br>Natural and safe with no artificial additives<br>May help to enhance physical performance<br>Experience the natural benefits of Pure Royal Honey Gold."
    },
    "slug": "crown-royal-honey-gold-12-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 140,
      "originalPrice": 290,
      "discount": 150
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-8.png",
      "https://pharmelow.com/wp-content/uploads/2-8.png",
      "https://pharmelow.com/wp-content/uploads/3-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "premium-royal-honey-energy-10-pieces",
    "barcode": 4551440165218,
    "title": {
      "en": "Premium Royal Honey Energy - 10 Pieces"
    },
    "description": {
      "en": "Introducing Premium Royal Honey Energy, a high-quality, all-natural energy supplement designed to boost vitality and endurance. Each box contains 10 pieces of pure, premium royal honey, carefully harvested to preserve its natural goodness.<br><br>Benefits:<br>Natural energy booster<br>Supports mental clarity and focus<br>May help to enhance physical performance<br>Supports immune function and overall well-being<br>Experience the natural energy boost of Premium Royal Honey Energy."
    },
    "slug": "premium-royal-honey-energy-10-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 190,
      "originalPrice": 250,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-9-1.png",
      "https://pharmelow.com/wp-content/uploads/2-9.png",
      "https://pharmelow.com/wp-content/uploads/3-1-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "organic-royal-honey-with-natural-r-jelly-for-men-24-pieces",
    "barcode": 9155226768263,
    "title": {
      "en": "Organic Royal Honey with Natural R-Jelly for Men - 24 Pieces"
    },
    "description": {
      "en": "Introducing Organic Royal Honey with Natural R-Jelly for Men, a premium-quality, all-natural ingredients to designed to support men's health and vitality. Each box contains 24 pieces of pure, organic royal honey combined with natural R-Jelly, carefully crafted to provide a natural energy boost.<br><br>Benefits:<br>Supports overall health and vitality<br>Natural energy booster<br>May help to enhance physical performance<br>Supports immune function and overall well-being<br>Experience the natural benefits of Organic Royal Honey with Natural R-Jelly for Men."
    },
    "slug": "organic-royal-honey-with-natural-r-jelly-for-men-24-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 145,
      "originalPrice": 200,
      "discount": 55
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-11.png",
      "https://pharmelow.com/wp-content/uploads/2-10.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "med-care-golden-royal-honey-12-pieces",
    "barcode": 6237956801656,
    "title": {
      "en": "MED CARE Golden Royal Honey - 12 Pieces"
    },
    "description": {
      "en": "Introducing MED CARE Golden Royal Honey, a premium-quality, all-natural supplement designed to support overall health and vitality. Each box contains 12 pieces of pure, high-grade golden royal honey, carefully harvested to preserve its natural goodness.<br><br>Benefits:<br>Boosts energy and vitality<br>Supports immune function and overall well-being<br>Natural and safe with no artificial additives<br>May help to enhance physical performance<br>Experience the natural benefits of MED CARE Golden Royal Honey."
    },
    "slug": "med-care-golden-royal-honey-12-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 130,
      "originalPrice": 190,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-12-1.png",
      "https://pharmelow.com/wp-content/uploads/2-11.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "organic-etumax-royal-honey-for-her-12-pieces",
    "barcode": 8492803188504,
    "title": {
      "en": "Etumax Royal Honey for Her | 12 Pieces"
    },
    "description": {
      "en": "Indulge in the luxurious Etumax Royal Honey for Her, a delicate and soothing treat designed to nourish and pamper. This exquisite honey is carefully crafted to provide a sense of tranquility and wellness, perfect for a relaxing evening or a thoughtful gift. With its velvety texture and subtle sweetness, Etumax Royal Honey for Her is a delightful way to unwind and rejuvenate.<br><br>Natural energy booster<br>Improves Physical Performance<br>Supports skin and hair health"
    },
    "slug": "etumax-royal-honey-for-her-12-pieces",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 99,
      "originalPrice": 160,
      "discount": 61
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/Main-1-1.png",
      "https://pharmelow.com/wp-content/uploads/1-13.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "organic-etumax-royal-honey-for-her",
    "barcode": 3880539475619,
    "title": {
      "en": "Pure Epimedyumlu Turkish Honey (Jar)"
    },
    "description": {
      "en": "Introducing an exquisite treasure from the enchanting lands of Turkey - our Pure Epimedyumlu Turkish Honey. This golden elixir, housed in an elegant jar, is not just honey; it's a luxurious blend of nature's finest, promising not only to sweeten your palate but to elevate your wellness journey. Crafted from the nectar of the rare Epimedium flower, known as 'natural viagra', this honey goes beyond ordinary, offering a unique symphony of flavors and an array of health benefits. Each spoonful is a testament to centuries-old Turkish apiculture, meticulously harvested to ensure the purest and most potent honey blend. Perfect for enhancing vigor, this natural aphrodisiac is a delicate balance of sweetness and strength, making it an indispensable addition to your daily routine. Embrace the legacy of Turkish botanical heritage and indulge in the luxuriousness of Pure Epimedyumlu Turkish Honey - where tradition meets wellness in every jar."
    },
    "slug": "pure-epimedyumlu-turkish-honey-jar",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 140,
      "originalPrice": 200,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-14-1.png",
      "https://pharmelow.com/wp-content/uploads/3-2.png",
      "https://pharmelow.com/wp-content/uploads/2-12.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-black-horse-vital-honey-24-pieces",
    "barcode": 5156984104540,
    "title": {
      "en": "Original Black Horse Vital Honey - 24 Pieces"
    },
    "description": {
      "en": "Introducing the Original Black Horse Vital Honey, a premium-quality natural formula designed to support overall health. Each box contains 24 pieces of pure, high-grade honey, carefully harvested to preserve its natural goodness.<br><br>Benefits:<br>Boosts energy and vitality<br>Supports immune function and overall well-being<br>May help to enhance physical performance."
    },
    "slug": "original-black-horse-vital-honey-24-pieces",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 140,
      "originalPrice": 220,
      "discount": 80
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-1-1.png",
      "https://pharmelow.com/wp-content/uploads/2-1-3.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "forever-living-multi-maca-tablets",
    "barcode": 6184884904174,
    "title": {
      "en": "Forever Living Multi-Maca Tablets"
    },
    "description": {
      "en": "Unlock your full potential with Forever Living Multi-Maca Tablets. This expertly crafted blend combines the ancient power of Maca with other natural ingredients to support energy, vitality, and overall well-being.<br>Multi-Maca Tablets help to:<br><br>Boost energy and mental clarity<br>Support hormonal balance and performance<br>Enhance mood and overall sense of well-being<br><br>Discover a more vibrant, energetic you with Forever Living Multi-Maca Tablets"
    },
    "slug": "forever-living-multi-maca-tablets",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 82,
      "originalPrice": 132,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-4-1.png",
      "https://pharmelow.com/wp-content/uploads/2-4-2.png",
      "https://pharmelow.com/wp-content/uploads/3-3.png",
      "https://pharmelow.com/wp-content/uploads/4.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "kama-agra-flavoured-oral-jelly-100mg",
    "barcode": 5089107841131,
    "title": {
      "en": "Super Kama agra Flavoured Oral Jelly - 100mg"
    },
    "description": {
      "en": "<strong>Indulge in the Moment with Super Kama agra Flavoured Oral Jelly - 100mg</strong><br>Treat yourself and your loved one to a romantic delight with Super Kama agra Flavoured Oral Jelly. This luxurious oral jelly is crafted with delicious flavors, perfect for creating intimate and unforgettable moments.<br><strong>Key Features:</strong><br>Delicious and fruity flavors<br>Luxurious and indulgent treat<br>Perfect for romantic moments and special occasions"
    },
    "slug": "super-kama-agra-flavoured-oral-jelly-100mg",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 110,
      "originalPrice": 170,
      "discount": 60
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-5-1.png",
      "https://pharmelow.com/wp-content/uploads/2-5-2.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "original-ginseng-kianpi-weight-enhancement-pil",
    "barcode": 8804857997900,
    "title": {
      "en": "Original Ginseng KianPi Weight Enhancement Pil"
    },
    "description": {
      "en": "Unlock your body's full potential with Original Ginseng KianPi Weight Enhancement Pills. This traditional blend of ginseng and other natural ingredients is designed to support overall health and wellness, helping you feel more energized, focused, and confident. KianPi Pills help to:<br><br>Boost energy and vitality<br>Enhance mental clarity and focus<br>Support Weight management concerns<br><br>Discover a more vibrant, energetic you with Original Ginseng KianPi Weight Enhancement Pills."
    },
    "slug": "original-ginseng-kianpi-weight-enhancement-pil",
    "category": {
      "name": {
        "en": "For Weight"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 260,
      "originalPrice": 330,
      "discount": 70
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-6-1-scaled.png",
      "https://pharmelow.com/wp-content/uploads/2-6-2-scaled.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "extreme-curve-maca-plus-women-capsule",
    "barcode": 2012454211848,
    "title": {
      "en": "Extreme Curve Maca Plus Women Capsule"
    },
    "description": {
      "en": "Empower your femininity with Extreme Curve Maca Plus Women Capsules. This expertly crafted blend combines the ancient power of Maca with other natural ingredients to support women's health, wellness, and beauty. Maca Plus Women Capsules help to:<br><br>Balance hormones and emotions<br>Enhance curves and feminine shape<br>Boost energy, vitality, and confidence<br><br>Unleash your inner goddess with Extreme Curve Maca Plus Women Capsules."
    },
    "slug": "extreme-curve-maca-plus-women-capsule",
    "category": {
      "name": {
        "en": "For Women"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 90,
      "originalPrice": 135,
      "discount": 45
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-6.jpeg",
      "https://pharmelow.com/wp-content/uploads/2-7-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "thai-horse-weema-bartania-men-tablet",
    "barcode": 7202384097222,
    "title": {
      "en": "Thai Horse Weema Bartania Men Tablet"
    },
    "description": {
      "en": "Unleash your inner strength with Thai Horse Weema Bartania Men Tablets. This powerful blend of natural ingredients is designed to support men's vitality, energy, and overall well-being. Weema Bartania Men Tablets help to:<br><br>Boost energy and endurance<br>Enhance mental clarity and focus<br>Support overall male vitality<br><br>Discover a more powerful, confident you with Thai Horse Weema Bartania Men Tablets."
    },
    "slug": "thai-horse-weema-bartania-men-tablet",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 160,
      "originalPrice": 240,
      "discount": 80
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-7-2.png",
      "https://pharmelow.com/wp-content/uploads/2-8-1.png",
      "https://pharmelow.com/wp-content/uploads/3-4.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "japan-tengsu-men-capsules",
    "barcode": 7649666469047,
    "title": {
      "en": "Japan Ten'gsu Men Capsules"
    },
    "description": {
      "en": "Experience the essence of Japanese wellness with Ten'gsu, a carefully crafted blend of natural ingredients. This luxurious formula is designed to promote a sense of balance and harmony, helping you feel refreshed, revitalized, and ready to take on the day. Japan Ten'gsu helps to:<br><br>Ignite energy and passion<br>Sharpen mental clarity and focus<br>Unleash confidence and potential<br><br>Unlock a stronger, more resilient you with Japan Ten'gsu Men Capsules"
    },
    "slug": "japan-ten-gsu-men-capsules",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 210,
      "originalPrice": 290,
      "discount": 80
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/2-9-1.png",
      "https://pharmelow.com/wp-content/uploads/1-1-1.jpeg",
      "https://pharmelow.com/wp-content/uploads/3-5.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "penatropin-usa-elte-3-men-size-amplfer-capsules",
    "barcode": 6898644186174,
    "title": {
      "en": "Penatropin USA Elte 3 Men Size Amplfer Capsules"
    },
    "description": {
      "en": "Experience the ultimate in confidence and performance with Penatropin USA Elte 3 Men Size Amplifier Capsules. These capsules are designed to support male vitality, his performance and confidence, helping you feel your best. With a unique blend of natural ingredients, Penatropin USA Elte 3 helps to:<br><br>Enhance confidence and self-assurance<br>Support overall male well-being<br><br>Take the first step towards unlocking your full potential with Penatropin USA Elte 3."
    },
    "slug": "penatropin-usa-elte-3-men-size-amplfer-capsules",
    "category": {
      "name": {
        "en": "Capsules"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 60,
      "discount": 10
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/000.1-8.jpeg",
      "https://pharmelow.com/wp-content/uploads/000.2-8.jpeg"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "largo-men-delay-spray",
    "barcode": "0531780548388",
    "title": {
      "en": "Largo Men Delay Spray"
    },
    "description": {
      "en": "Elevate your intimate experiences with Largo Men Delay Spray. This luxurious, sensual formula is designed to enhance connection, pleasure, and performance, Largo helps you:<br><br>Deepen your emotional connection<br>Create unforgettable, passionate experiences<br><br>Indulge in the passion and intimacy with Largo Men Delay Spray."
    },
    "slug": "largo-men-delay-spray",
    "category": {
      "name": {
        "en": "For Men"
      }
    },
    "stock": 1000,
    "isCombination": false
  },
  {
    "prices": {
      "price": 125,
      "originalPrice": 175,
      "discount": 50
    },
    "categories": [],
    "image": [
      "https://pharmelow.com/wp-content/uploads/1-9-1.png",
      "https://pharmelow.com/wp-content/uploads/2-9.png",
      "https://pharmelow.com/wp-content/uploads/3-1-1.png"
    ],
    "tag": [],
    "variants": [],
    "status": "show",
    "productId": "",
    "sku": "organic-royal-honey-with-natural-r-jelly-for-men-24-pieces-1",
    "barcode": 7283521495729,
    "title": {
      "en": "Organic Royal Honey with Natural R-Jelly for Men - 12 Pieces"
    },
    "description": {
      "en": "Introducing Organic Royal Honey with Natural R-Jelly for Men, a premium-quality, all-natural ingredients to designed to support men's health and vitality. Each box contains 24 pieces of pure, organic royal honey combined with natural R-Jelly, carefully crafted to provide a natural energy boost.<br><br>Benefits:<br>Supports overall health and vitality<br>Natural energy booster<br>May help to enhance physical performance<br>Supports immune function and overall well-being<br>Experience the natural benefits of Organic Royal Honey with Natural R-Jelly for Men."
    },
    "slug": "organic-royal-honey-with-natural-r-jelly-for-men-12-pieces",
    "category": {
      "name": {
        "en": "Honey"
      }
    },
    "stock": 1000,
    "isCombination": false
  }
]

module.exports = products;

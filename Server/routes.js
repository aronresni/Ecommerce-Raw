const express = require("express");
const router = express.Router();

//EJEMPLO DE PRODUCTOS
const productos = [
    {
        id: 1,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-3_720x.jpg?v=1684901900",
        ],
        nombre: "CBUM ITHOLATE PROTEIN",
        precio: 54.99,
        benefits: "This top of the line protein was personally formulated and flavored by 4x Mr. Olympia Chris Bumstead so your post workout routine follows the way of the Thavage. CBUM Series Itholate Protein is 100% micro-filtered whey isolate which packs 25g of the highest quality protein per scoop with peak digestibility. Every serving leaves no room for error, ensuring you're reaching your peak potential. ",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/Untitled-5_460x.jpg?v=1661893634",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/VANILLA_OATMEAL_COOKIE_480x480.jpg?v=1688397970",
        tamaño: [
            "1.5 Kg",
            "3 Kg"],
        categoria: "Suplementos",

    },
    {
        id: 2,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/BA-2.jpg?v=1687971057",
        ],
        nombre: "CBUM ITHOLATE PROTEIN - MAPLE WAFFLE",
        precio: 57.99,
        benefits: "In order to celebrate Canada Day & the origins of 4x reigning Classic Physique Mr. Olympia Chris Bumstead, we've put a spin on our top-of-the-line protein that was personally formulated and flavored by the champ himself. CBUM Series Itholate Protein is 100% micro-filtered whey isolate which packs 25g of the highest quality protein per scoop with peak digestibility. Every serving leaves no room for error, ensuring you're reaching your peak potential.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/MAPLEWAFFLE_460x.png?v=1688142267",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/MAPPLE_WAFFLE_EH_480x480.jpg?v=1688397509",
        tamaño: [
            "1.5 Kg",
            "3 Kg"],
        categoria: "Suplementos",
    },
    {
        id: 3,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW.jpg?v=1684901900",
        ],
        nombre: "CBUM ITHOLATE PROTEIN - BIRTHDAY CAKE",
        precio: 59.99,
        benefits: "This top of the line protein was personally formulated and flavored by 4x Mr. Olympia Chris Bumstead so your post workout routine follows the way of the Thavage. CBUM Series Itholate Protein is 100% micro-filtered whey isolate which packs 25g of the highest quality protein per scoop with peak digestibility. Every serving leaves no room for error, ensuring you're reaching your peak potential. ",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/Untitled-5_460x.jpg?v=1661893634",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/BIRTHDAY_CAKE_480x480.jpg?v=1688397754",
        tamaño: [
            "1.5 Kg",
            "3 Kg"],
        categoria: "Suplementos",
    },
    {
        id: 4,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-32.jpg?v=1684939043",
        ],
        nombre: "ESSENTIAL PRE",
        precio: 29.99,
        benefits: "This comprehensive pre-workout is perfect for all lifters, from beginner to advanced. Whether it’s your first day in the gym or you’re a seasoned veteran, these high-powered ingredients work the same. Highlighting a few - each scoop packs in a hefty dose of 4g L-Citrulline to maximize blood flow and deliver serious pumps. We've paired this with 3.2g of Beta Alanine to fight fatigue, enabling you to push the envelope and power through plateaus. Lastly, we've packed in 200mg of Caffeine to hit that sweet spot of stimulating energy to last from the first to last rep of your workout. Anyone who needs a boost physically or mentally to get in the zone can put Essential Pre to use. ",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/BM9A6843_460x.jpg?v=1675298047",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/ESSENTIAL_ORANGE_480x480.jpg?v=1688398513",
        tamaño: [
            "150 G",
            "200 G"],
        categoria: "Suplementos",
    },
    {
        id: 5,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/AJisAI-2_460x.jpg?v=1685469841",

        ],
        nombre: "RAW PRE",
        precio: 25.99,
        benefits: "Some pre-workouts aim to overcharge you with energy, others blast your muscle cells with nitric oxide, and others assist with extreme focus. We designed Pre to give you the best of all of these worlds, tapping into each of these benefits with an all-in-one ultimate formula. Don’t let physical or mental barriers hold you back from achieving your potential. You’ll never waste another workout with Pre in the mix.",

        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/Sour_AF_Pre_Web_-_Vertical_copy_460x.png?v=1664390275",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/RAW_PRE_PEACH_RINGS_FINAL_480x480.jpg?v=1688400695",
        tamaño: [
            "400 G"],
        categoria: "Suplementos",
    },
    {
        id: 6,
        image: [
            "https://getrawnutrition.com/cdn/shop/products/RAW-16_460x.jpg?v=1685456997",

        ],
        nombre: "THAVAGE PRE-WORKOUT",
        precio: 49.99,
        benefits: "Thavage Pre is not your run of the mill pre-workout. It was designed by thavages, for thavages. One serving is all it takes to flip the switch as you unlock a new level of performance. From superhuman strength to undaunted endurance, one serving does it all. 3x Mr. Olympia Chris Bumstead personally designed both this fully loaded pre-training formula to help you build a legacy of your own.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/BM9A9645_ab687bbd-da8b-4732-82cb-57a0104155ff_460x.jpg?v=1678292151",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/4-PEAT-thavage-sfp.png?v=1684342179",
        tamaño: [
            "540 G"],
        categoria: "Suplementos",
    },
    {
        id: 7,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-25_460x.jpg?v=1684941324",

        ],
        nombre: "PRE EXTREME",
        precio: 32.99,
        benefits: "Pre Extreme was designed for those that crave a total system shock delivered by their pre-workout. We’re talking high stimulants to supercharge the body and mind to channel energy like no other product on the market. This formula provides unrelenting energy, razor sharp focus, and extreme endurance.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/Untitled-5_460x.jpg?v=1661893634",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/RAW_PRE_EXTREME_FRUIT_BURST_480x480.jpg?v=1688400072",
        tamaño: [
            "390 G"],
        categoria: "Suplementos",
    },
    {
        id: 8,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/BA-3_460x.jpg?v=1687970949",

        ],
        nombre: "BETA ALANINE",
        precio: 39.99,
        benefits: "This top of the line protein was personally formulated and flavored by 4x Mr. Olympia Chris Bumstead so your post workout routine follows the way of the Thavage. CBUM Series Itholate Protein is 100% micro-filtered whey isolate which packs 25g of the highest quality protein per scoop with peak digestibility. Every serving leaves no room for error, ensuring you're reaching your peak potential. ",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/pre-extreme-fb_460x.png?v=1683553875",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/UNFLAVORED_BETA_ALANINE_480x480.jpg?v=1688410818",
        tamaño: [
            "312 G"],
        categoria: "Suplementos",
    },
    {
        id: 9,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-37_460x.jpg?v=1684941500",

        ],
        nombre: "PUMP",
        precio: 39.99,
        benefits: "Pump is a versatile pre-training formula that can be stacked or taken solo. This stim-free formula comes in clutch for the night owls who enter the iron dungeon late into the day, who must avoid caffeine in order to get a good night's rest. On the other hand, Pump can be stacked with your favorite pre-workout in order to enhance the effects and maximize blood flow to deliver maximum nutrients to working muscle groups.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/Screenshot_2023-05-08_at_10.27.28_AM_460x.png?v=1683556060",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/Raw_Pump_Supp_Facts_2022_6d101843-3348-46a6-bb81-fdd1c656f668.png?v=1661891336",
        tamaño: [
            "312 G"],
        categoria: "Suplementos",
    },
    {
        id: 10,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-24_460x.jpg?v=1684941591",

        ],
        nombre: "PUMP2",
        precio: 11.99,
        benefits: "Simple but effective. Pump² is a killer addition to any pre-workout ritual. This flavorless, 1 ingredient product can be stacked with your favorite supplements to enhance pumps. The reason this ingredient is sold separately is due to the fact that it naturally clumps together. Mix with Raw PRE, PRE Extreme or Raw Pump for even greater benefit!",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/pump2_12135c04-9eaf-4960-9cce-affe61d9c896_460x.jpg?v=1661895509",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/UNFLAVORED_PUMP2_480x480.jpg?v=1688410945",
        tamaño: [
            "160 G"],
        categoria: "Suplementos",
    },
    {
        id: 11,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/AJisAI-4_533a3036-0ec4-4ebe-930e-8a793e4c5142_460x.jpg?v=1685470046",

        ],
        nombre: "PEAK O2",
        precio: 18.99,

        benefits: "PEAKO2® was specifically designed to help users adapt to and overcome both physical and mental stress, resulting in improved power output and performance. This product carries out its performance-enhancing effects by improving oxygen utilization and work capacity, while simultaneously reducing lactate levels. Essentially, PEAKO2® allows you to train harder for longer",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/Peak_o2_v2_460x.jpg?v=1661954099",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/Peak_O2_Supp_Facts.png?v=1661954386",
        tamaño: [
            "50 G"],
        categoria: "Suplementos",
    },
    {
        id: 12,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/AJisAI-4_533a3036-0ec4-4ebe-930e-8a793e4c5142_460x.jpg?v=1685470046",

        ],
        nombre: "INTRA-WORKOUT",
        precio: 45.99,

        benefits: "RAW Intra-Workout Gives is an advanced training fuel that helps increase workout performance and endurance throughout your entire workout session. The most important need of your body during vigorous training is one of the most basic ones, hydration. Losing even a small percentage of your body's water weight can have a negative effect on your workout performance. Research has shown that during high intensity training a 2-3% decrease in body water weight causes a significant drop in performance, reduced number of repetitions completed during a workout, and high ratings of perceived exertion. Our premium Intra-Workout formulation combines a number of research-backed ingredients that increase workout performance and endurance, helping you make every workout your best.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/intra_460x.png?v=1683554507",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/Peak_O2_Supp_Facts.png?v=1661954386",
        tamaño: [
            "1.5 Kg",
            "3 Kg"],
        categoria: "Suplementos",
    },
    {
        id: 13,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-27_460x.jpg?v=1684941679",

        ],
        nombre: "RAW TEST",
        precio: 44.99,

        benefits: "Raw Nutrition's Test is a powerful natural testosterone booster designed to help support muscle growth, improve athletic performance, and enhance overall health and wellness. Test can help increase testosterone levels, leading to improved muscle mass, strength, and endurance.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/RAW-27_460x.jpg?v=1684941679",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/raw_test_supp_facts_8c893f6c-3305-48e1-98af-5b7255cf70b6.png?v=1661868402",
        tamaño: [
            "1.5 Kg",
            "3 Kg"],
        categoria: "Suplementos",
    },
    {
        id: 14,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-23_460x.jpg?v=1684938814",

        ],
        nombre: "CREATINE",
        precio: 24.99,

        benefits: "Creatine monohydrate was one of the first sports nutrition supplements to ever hit the market decades ago, there’s a reason it has withstood the tests of time. This strength builder has been proven time and time again to enhance power output. Creatine is a staple in the world of weight training that lays the foundation for athletes to excel.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/BM9A1306_460x.jpg?v=1683553611",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/Creatine_Supplement_Facts.png?v=1661890901",
        tamaño: [
            "1.5 Kg",
            "3 Kg"],
        categoria: "Suplementos",
    },
    {
        id: 15,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-22_460x.jpg?v=1684941646",

        ],
        nombre: "RAW SLEEP",
        precio: 24.99,

        benefits: "Eat. Sleep. Train. You’ve heard it a thousand times, and you’ll continue to hear it throughout the entire length of your journey. When you crush your training and eating around the clock, you’re only checking off two of the three boxes. Without proper sleep, processes are not optimized within your system. The body relies on adequate amounts of sleep in order to produce hormones, maximize digestion, think clearly, and much more. RAW Sleep aims to help you check off that third and final box, helping you achieve restful sleep.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/BM9A9545_24101021-402f-47f9-8a48-6f8ff6b77593_460x.jpg?v=1683214305",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/RAW_SLEEP_MIXED_BERRY_480x480.jpg?v=1688401470",
        tamaño: [
            "150 G", "300G"],
        categoria: "Suplementos",
    },
    {
        id: 16,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/RAW-29_460x.jpg?v=1684941808",

        ],
        nombre: "TURKESTERONEP",
        precio: 49.99,

        benefits: "Turkesterone has quickly risen through the ranks of natural compounds to spark new lean muscle tissue growth. If you've been struggling to break through stubborn plateaus and pack on pounds, this just may be your key to success. This compound has been shown to improve the body's efficiency metabolizing carbohydrates and lipids, increases protein synthesis, and promotes new muscle tissue growth. This versatile supplement can be used to fast-track your way to goals of any kind.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/turk2_460x.jpg?v=1677682774",
        imageinfo: "https://cdn.shopify.com/s/files/1/0303/1135/0365/files/Turkesterone_Supp_Facts.png?v=1661868047",
        tamaño: [
            "150 G", "300G"],
        categoria: "Suplementos",
    },
    {
        id: 17,
        image: [
            "https://getrawnutrition.com/cdn/shop/products/rawessentials-3_460x.jpg?v=1681313073",

        ],
        nombre: "RAW ESSENTIAL HOODIE - BLACK",
        precio: 59.99,
        benefits: "Our classic RAW on a hoodie makes for the perfect pump cover or every day pullover.Model (5'10) wearing size XL. Fits true to size.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/RAW-ESNTL-3_460x.jpg?v=1681308929",
        imageinfo: null,
        tamaño: [
            "Small", "Medium", "Large", "Large", "XL", "2XL"],
        categoria: "Clothes",
    },
    {
        id: 18,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/5_74af04c5-7777-4eb5-bcfa-86471934425e_460x.png?v=1688147413",

        ],
        nombre: "USA MADE T-SHIRT - CHARCOAL",
        precio: 34.99,
        benefits: "Born and built in the United States of America. Grab this 4th of July exclusive RAW piece.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/8_e8703d3f-9084-4e34-a305-ea5fc16b5cc9_460x.png?v=1688150042",
        imageinfo: null,
        tamaño: [
            "Small", "Medium", "Large", "Large", "XL", "2XL"],
        categoria: "Clothes",
    },
    {
        id: 19,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/6_0231e27f-de59-4bbb-9a71-f53bd72f6d81.png?v=1688147354",
            "https://getrawnutrition.com/cdn/shop/files/7_a9c795a5-316a-4ee3-af5f-54bacfb2644d_460x.png?v=1688147354"

        ],
        nombre: "POWER T-SHIRT - BLACK",
        precio: 34.99,
        benefits: "Born and built in the United States of America. Grab this 4th of July exclusive RAW piece.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/2_03deaca4-4fac-4895-ada3-2c1cd1906766_460x.png?v=1688150041",
        imageinfo: null,
        tamaño: [
            "Small", "Medium", "Large", "Large", "XL", "2XL"],
        categoria: "Clothes",
    },
    {
        id: 20,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/3_da36789f-f52a-4831-bd5d-dddc60dbc9be_460x.png?v=1688147391",
            "https://getrawnutrition.com/cdn/shop/files/4_fd6a4ad5-1ca8-4515-bcfd-b5809c6c4fe4_460x.png?v=1688147390"

        ],
        nombre: "RELENTLESS T-SHIRT - DARK SILVER",
        precio: 34.99,
        benefits: "A fresh design for those who stop at nothing to raise the bar each and every day.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/5_6a3bed43-1546-469b-9e4d-ce8f317e9147_460x.png?v=1688150041",
        imageinfo: null,
        tamaño: [
            "Small", "Medium", "Large", "Large", "XL", "2XL"],
        categoria: "Clothes",
    },
    {
        id: 21,
        image: [
            "https://getrawnutrition.com/cdn/shop/products/BM9A2365_460x.jpg?v=1680645392",

        ],
        nombre: "LUXE T-SHIRT - WHITE",
        precio: 34.99,
        benefits: "The perfect design for any destination. Whether you're tossing around some serious weight or spending a night out on the town, the new Luxe t-shirt will be your go-to choice. ",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/BM9A0175_460x.jpg?v=1680645337",
        imageinfo: null,
        tamaño: [
            "Small", "Medium", "Large", "Large", "XL", "2XL"],
        categoria: "Clothes",
    },
    {
        id: 22,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/bannerconcrete_460x.jpg?v=1689968572",

        ],
        nombre: "RAW FLAG",
        precio: 24.99,
        benefits: "Display our new lightweight flag in your home gym, garage, or wherever you please. This 3'x5' lightweight flag can be hung or flown anywhere to represent RAW.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/10_460x.jpg?v=1658893164",
        imageinfo: null,
        tamaño: [
            null],
        categoria: "Clothes",
    },
    {
        id: 23,
        image: [
            "https://getrawnutrition.com/cdn/shop/files/golf-4_460x.jpg?v=1686256272",
            "https://getrawnutrition.com/cdn/shop/files/golf-5_460x.jpg?v=1686256272"
        ],
        nombre: "PRACTICE T-SHIRT - BLUE",
        precio: 34.99,
        benefits: "RAW Nutrition meets summer vibes. Kick back and relax rocking this tropical tee as the warm weather continues to set in.",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/GOLF-WEB-2_460x.jpg?v=1686256467",
        imageinfo: null,
        tamaño: [
            "Small", "Medium", "Large", "Large", "XL", "2XL"],
        categoria: "Clothes",
    },
    {
        id: 24,
        image: [
            "https://getrawnutrition.com/cdn/shop/products/Apparel-3_460x.jpg?v=1678113886",
            "https://getrawnutrition.com/cdn/shop/products/Apparel-4_460x.jpg?v=1678113887"
        ],
        nombre: "FTGU LONG SLEEVE - WHITE",
        precio: 41.99,
        benefits: "Made from high-quality durable materials, this new long sleeve is designed to keep you comfortable while withstanding the tests of time in the gym. ",
        imagewallpaper: "https://getrawnutrition.com/cdn/shop/files/7_d0cc96b7-f04c-4a90-896f-5fd6a75815f5_460x.png?v=1678118862",
        imageinfo: null,
        tamaño: [
            "Small", "Medium", "Large", "Large", "XL", "2XL"],
        categoria: "Clothes",
    },
]

// Ruta para obtener todos los productos
router.get("/productos", (req, res) => {
    res.json(productos);
});

// Ruta para obtener un producto específico por su ID
// Añade la barra diagonal (/) antes de "productos/:id"
router.get("/productos/:id", (req, res) => {
    const { id } = req.params;
    const producto = productos.find((producto) => producto.id === parseInt(id));

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
});

module.exports = router;
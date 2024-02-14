
export const Products = [
	{
    	id:  1,
    	code: 456789,
    	img: require('../assets/parzival.jpg'),
    	name: 'Laptop Asus Tuf Gaming A15',
    	shortDescription: 'Tiene Intel Core i5 10300H, Geforce GTX 1650ti',
		fullDescription: "Well, there is no device on the market right now that has no downsides. Here, you won’t get a Thunderbolt certification (although the USB Type-C port supports 3.1 (Gen. 2) speeds and a DisplayPort 1.4 output), and there is no SD card reader on board. Yes, the laptop would get more expensive if it gets the former, and you can always snatch a deal on a USB to SD card reader dongle for no more than 5 bucks. However, it is good to have it onboard.",
    	price: 450,
    	quantity: 13,
		brand: "ASUS",
    	category: 2,
		attributes: [
			"question",
			"question",
			"question",
		],
		imgSlides: [
			require('../assets/parzival.jpg'),
			require('../assets/parzival.jpg'),
			require('../assets/parzival.jpg'),
		],
		stars: 4,
		variety: [
			{color: "#9b59b6", nameVariety: "asd"},
			{color: "#3498db", nameVariety: "qwe"},
			{color: "#2ecc71", nameVariety: "zxc"},
			{color: "#95a5a6", nameVariety: "lkj"},
			{color: "#34495e", nameVariety: "mnb"},
		]
	},
	{
    	id:  2,
    	code: 456789,
    	img: require('../assets/parzival.jpg'),
    	name: 'Laptop Asus Tuf Gaming A15',
    	shortDescription: 'Tiene Intel Core i5 10300H, Geforce GTX 1650ti',
		fullDescription: "Well, there is no device on the market right now that has no downsides. Here, you won’t get a Thunderbolt certification (although the USB Type-C port supports 3.1 (Gen. 2) speeds and a DisplayPort 1.4 output), and there is no SD card reader on board. Yes, the laptop would get more expensive if it gets the former, and you can always snatch a deal on a USB to SD card reader dongle for no more than 5 bucks. However, it is good to have it onboard.",
    	price: 1000,
    	quantity: 8,
		brand: "ASUS",
    	category: 2,
		attributes: [
			"question",
			"question",
			"question",
		],
		imgSlides: [
			require('../assets/parzival.jpg'),
			require('../assets/parzival.jpg'),
			require('../assets/parzival.jpg'),
		],
		stars: 4,
		variety: [],
	},
	{
    	id:  3,
    	code: 456789,
    	img: require('../assets/parzival.jpg'),
    	name: 'Laptop Asus Tuf Gaming A15',
    	shortDescription: 'Tiene Intel Core i5 10300H, Geforce GTX 1650ti',
		fullDescription: "Well, there is no device on the market right now that has no downsides. Here, you won’t get a Thunderbolt certification (although the USB Type-C port supports 3.1 (Gen. 2) speeds and a DisplayPort 1.4 output), and there is no SD card reader on board. Yes, the laptop would get more expensive if it gets the former, and you can always snatch a deal on a USB to SD card reader dongle for no more than 5 bucks. However, it is good to have it onboard.",
    	price: 500.45,
    	quantity: 3,
		brand: "ASUS",
    	category: 2,
		imgSlides: [
			require('../assets/parzival.jpg'),
			require('../assets/parzival.jpg'),
			require('../assets/parzival.jpg'),
		],
		stars: 4,
		//variety: [],
		favorite: true,
	},
	{
    	id:  4,
    	code: 456789,
    	img: require('../assets/alcoholic-drinks-01.webp'),
    	name: 'Bathroom Wall-mounted Triple 300ML',
    	shortDescription: 'Tiene Intel Core i5 10300H, Geforce GTX 1650ti',
		fullDescription: "Well, there is no device on the market right now that has no downsides. Here, you won’t get a Thunderbolt certification (although the USB Type-C port supports 3.1 (Gen. 2) speeds and a DisplayPort 1.4 output), and there is no SD card reader on board.\n Yes, the laptop would get more expensive if it gets the former, and you can always snatch a deal on a USB to SD card reader dongle for no more than 5 bucks. However, it is good to have it onboard.",
    	price: 850,
    	quantity: 9,
		brand: "ASUS",
    	category: {padre: [1, "Laptops"], hijo: [1, "Laptops Asus"]},
		attributes: [
			"question",
			"question",
			"question",
		],
		imgSlides: [
			require('../assets/alcoholic-drinks-01.webp'),
			require('../assets/alcoholic-drinks-01.webp'),
			require('../assets/alcoholic-drinks-01.webp'),
		],
		stars: 2,
		//variety: []
	},
	{
    	id:  5,
    	code: 456789,
    	img: require('../assets/Laptop_Asus_F15-removebg-preview-01.png'),
    	name: 'Laptop Asus Tuf Gaming A15',
    	shortDescription: 'Tiene Intel Core i5 10300H, Geforce GTX 1650ti',
		fullDescription: "Well, there is no device on the market right now that has no downsides. Here, you won’t get a Thunderbolt certification (although the USB Type-C port supports 3.1 (Gen. 2) speeds and a DisplayPort 1.4 output), and there is no SD card reader on board. Yes, the laptop would get more expensive if it gets the former, and you can always snatch a deal on a USB to SD card reader dongle for no more than 5 bucks. However, it is good to have it onboard.",
    	price: 900,
    	quantity: 4,
		brand: "ASUS",
    	category: 2,
		attributes: [
			"accusoft",
			"algolia",
			"accusoft",
		],
		imgSlides: [
			require('../assets/Laptop_Asus_F15-removebg-preview-01.png'),
			require('../assets/Laptop_Asus_F15-removebg-preview-02.png'),
			require('../assets/Laptop_Asus_F15-removebg-preview-01.png'),
		],
		stars: 5,
		variety: [
			{color: "#9b59b6", nameVariety: "asd"},
			{color: "#3498db", nameVariety: "qwe"},
			{color: "#2ecc71", nameVariety: "zxc"},
			{color: "#95a5a6", nameVariety: "lkj"},
			{color: "#34495e", nameVariety: "mnb"},
		],
	},
]
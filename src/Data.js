import oppof1 from "./images/oppof1.jpeg";
import realmec2 from "./images/realmec2.jpeg";
import realme5 from "./images/realme5.jpeg";
import vivov5 from "./images/vivov15.jpeg";
import vivov1 from "./images/vivoz1.jpeg";
import rodid from "./images/rodid.jpeg";
import tripr from "./images/tripr.jpeg";
import elaCollection from "./images/ela-collection.jpeg";
import LaMilano from "./images/la-milano.jpeg";
import Sportigo from "./images/sportigo.jpeg";
import aashvi from "./images/aashvi.jpeg";
import ritmo from "./images/ritmo.jpeg";
import satyam from "./images/satyam.jpeg";
import sargam from "./images/sargam.jpeg";
import snh from "./images/snh.jpeg";
import intexautomatic from "./images/intex-automatic.jpeg";
import mideaautomatic from "./images/midea-automatic.jpeg";
import lgautomatic from "./images/lg-automatic.jpeg";
import samsungautomatic from "./images/samsung-automatic.jpeg";
import whirlpool from "./images/whirlpool-automatic.jpeg";
import chandrika from "./images/chandrika.jpeg";
import trendyclub from "./images/trendy-club.jpeg";
import skyheight from "./images/sky-height.jpeg";
import celebrityclub from "./images/celebrity-club.jpeg";
import flybees from "./images/flybees.jpeg";
const data = {
	electronics_details: [
		{
			name: "oppo f1",
			id: "1",
			originalPrice: "20000",
			currentPrice: "18000",
			discount: "10%",
			img: oppof1,
			quantity: 0,
			disabled:false
		},
		{
			name: "realme c2",
			id: "2",
			originalPrice: "15000",
			currentPrice: "13500",
			discount: "10%",
			img: realmec2,
			quantity: 0,
			disabled:false
		},
		{
			name: "realme 5",
			id: "3",
			originalPrice: "20000",
			currentPrice: "16000",
			discount: "20%",
			img: realme5,
			quantity: 0,
			disabled:false
		},
		{
			name: "vivo v15",
			id: "4",
			originalPrice: "25000",
			currentPrice: "22500",
			discount: "10%",
			img: vivov5,
			quantity: 0,
			disabled:false
		},
		{
			name: "vivo z1",
			id: "5",
			originalPrice: "12000",
			currentPrice: "10800",
			discount: "10%",
			img: vivov1,
			quantity: 0,
			disabled:false
		}
	],
	menclothes_details: [
		{
			name: "tripr",
			id: "10",
			description: "",
			originalPrice: "1000",
			currentPrice: "900",
			discount: "10%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: rodid,
			disabled:false
		},
		{
			name: "rodid",
			id: "20",
			description: "",
			originalPrice: "2000",
			currentPrice: "1600",
			discount: "20%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: tripr,
			disabled:false
		},
		{
			name: "ELA Collection",
			id: "30",
			description: "",
			originalPrice: "1000",
			currentPrice: "800",
			discount: "20%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: elaCollection,
			disabled:false
		},
		{
			name: "La Milano",
			description: "",
			id: "40",
			originalPrice: "2000",
			currentPrice: "1800",
			discount: "10%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: LaMilano,
			disabled:false
		},
		{
			name: "Sportigo",
			description: "",
			id: "50",
			originalPrice: "500",
			currentPrice: "450",
			discount: "10%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: Sportigo,
			disabled:false
		}
	],
	womenclothes_details: [
		{
			name: "aashvi",
			id: "101",
			description: "",
			originalPrice: "1000",
			currentPrice: "900",
			discount: "10%",
			quantity: 0,
			img: aashvi,
			disabled:false
		},
		{
			name: "satyam",
			id: "102",
			description: "",
			originalPrice: "2000",
			currentPrice: "1600",
			discount: "20%",
			quantity: 0,
			img: satyam,
			disabled:false
		},
		{
			name: "sargam",
			id: "103",
			description: "",
			originalPrice: "2500",
			currentPrice: "2250",
			discount: "10%",
			quantity: 0,
			img: sargam,
			disabled:false
		},
		{
			name: "snh",
			id: "104",
			description: "",
			originalPrice: "5000",
			currentPrice: "4000",
			discount: "20%",
			quantity: 0,
			img: snh,
			disabled:false
		},

		{
			name: "ritmo",
			id: "105",
			description: "",
			originalPrice: "2000",
			currentPrice: "1800",
			discount: "10%",
			quantity: 0,
			img: ritmo,
			disabled:false
		}
	],
	tvandappliances_details: [
		{
			name: "intex automatic",
			id: "201",
			description: "",
			originalPrice: "20000",
			currentPrice: "18000",
			discount: "10%",
			quantity: 0,
			img: intexautomatic,
			disabled:false
		},
		{
			name: "LG automatic",
			id: "202",
			description: "",
			originalPrice: "30000",
			currentPrice: "27000",
			discount: "10%",
			quantity: 0,
			img: lgautomatic,
			disabled:false
		},
		{
			name: "midea automatic",
			id: "203",
			description: "",
			originalPrice: "15000",
			currentPrice: "13500",
			discount: "10%",
			quantity: 0,
			img: mideaautomatic,
			disabled:false
		},
		{
			name: "samsung automatic",
			id: "204",
			description: "",
			originalPrice: "25000",
			currentPrice: "22500",
			discount: "10%",
			quantity: 0,
			img: samsungautomatic,
			disabled:false
		},
		{
			name: "whirlpool automatic",
			id: "205",
			description: "",
			originalPrice: "38000",
			currentPrice: "34200",
			discount: "10%",
			quantity: 0,
			img: whirlpool,
			disabled:false
		}
	],
	babyandkidclothes_details: [
		{
			name: "chandrika",
			description: "",
			id: "301",
			originalPrice: "500",
			currentPrice: "450",
			discount: "10%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: chandrika,
			disabled:false
		},
		{
			name: "trendy club",
			description: "",
			id: "302",
			originalPrice: "800",
			currentPrice: "720",
			discount: "10%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: trendyclub,
			disabled:false
		},
		{
			name: "sky height",
			description: "",
			id: "303",
			originalPrice: "1000",
			currentPrice: "900",
			discount: "10%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: skyheight,
			disabled:false
		},
		{
			name: "celebrity club",
			description: "",
			id: "304",
			originalPrice: "600",
			currentPrice: "540",
			discount: "10%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: celebrityclub,
			disabled:false
		},
		{
			name: "fly bees",
			description: "",
			id: "305",
			originalPrice: "800",
			currentPrice: "640",
			discount: "20%",
			size: ["S", "M", "L", "XL", "XXL"],
			selectedSize: "",
			quantity: 0,
			img: flybees,
			disabled:false
		}
	],
	homeandfurniture_details: [{}, {}, {}, {}, {}],
	sportsandbooks_details: [{}, {}, {}, {}, {}]
};

export default data;

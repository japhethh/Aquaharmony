import productImage1 from "./images/1.png";
import productImage2 from "./images/2.png";
import productImage3 from "./images/3.png";
import productImage4 from "./images/4.png";
import productImage5 from "./images/5.png";
import productImage6 from "./images/6.png";
import productImage7 from "./images/7.png";
import productImage8 from "./images/8.png";
import productImage9 from "./images/9.png";
import productImage10 from "./images/10.png";
import productImage11 from "./images/11.png";
import productImage12 from "./images/12.png";
import productImage13 from "./images/13.png";
import productImage14 from "./images/14.png";
import productImage15 from "./images/15.png";

const PRODUCTS = [
  {
    id: 1,
    name: "AquaSound 5000",
    price: "20000",
    category:"Shower",
    image: productImage1,
    detail:
      "Enjoy your favorite tunes in the shower with this waterproof speaker joy your favorite tunes in the shower with this waterproof speakerfavorite tunes in the shower with this waterproof speakerfavorite tunes in the shower with this waterproof speakerfavorite tunes in the shower with this waterproof speaker",
  },
  {
    id: 2,
    name: "Sonicsplash Pro",
    price: "25000",
    category:"Shower",
    image: productImage2,
    detail:
      "Wirelessly stream music while you shower with this convenient speaker...",
  },
  {
    id: 3,
    name: "ShowerBeats Elite",
    price: "18000",
    category:"Shower",
    image: productImage3,
    detail:
      "Take your music with you wherever you go, even in the shower...",
  },
  {
    id: 4,
    name: "AquaTunes 3000",
    price: "22000",
    category:"Shower",
    image: productImage4,
    detail:
      "This speaker can handle splashes, making it perfect for your shower...",
  },
  {
    id: 5,
    name: "HydroSound 6000",
    price: "30000",
    category:"Shower",
    image: productImage5,
    detail: "Experience crystal-clear sound while you shower, wirelessly...",
  },
  {
    id: 6,
    name: "FloatSound Pro",
    price: "28000",
    category:"Shower",
    image: productImage6,
    detail:
      "Never worry about dropping your speaker in the water with this floating design...",
  },
  {
    id: 7,
    name: "MoodWave 8000",
    price: "35000",
    category:"Shower",
    image: productImage7,
    detail:
      "Add ambiance to your shower experience with color-changing lights and music...",
  },
  {
    id: 8,
    name: "SubmergeSound 7000",
    price: "40000",
    category:"Shower",
    image: productImage8,
    detail:
      "Fully submerge this speaker in water for a truly immersive shower experience...",
  },
  {
    id: 9,
    name: "ShowerWave FM",
    price: "32000",
    category:"Shower",
    image: productImage9,
    detail:
      "Listen to your favorite radio stations while you shower with this FM radio speaker...",
  },
  {
    id: 10,
    name: "HandsFree Harmony",
    price: "27000",
    category:"Shower",
    image: productImage10,
    detail:
      "Answer calls and control your music without ever leaving the shower...",
  },
  {
    id: 11,
    name: "SplashGuard 9000",
    price: "23000",
    category:"Shower",
    image: productImage11,
    detail:
      "Splashproof design ensures your speaker stays safe even in the wettest conditions...",
  },
  {
    id: 12,
    name: "StereoShower Duo",
    price: "50000",
    category:"Shower",
    image: productImage12,
    detail:
      "Enjoy stereo sound in your shower with this set of two synchronized speakers...",
  },
  {
    id: 13,
    name: "TimeTunes Shower",
    price: "38000",
    category:"Shower",
    image: productImage13,
    detail:
      "Keep track of the time while you shower with the built-in LED display...",
  },
  {
    id: 14,
    name: "RuggedAudio Xtreme",
    price: "45000",
    category:"Shower",
    image: productImage14,
    detail:
      "Designed to withstand drops and bumps, this rugged speaker is perfect for any environment...",
  },
  {
    id: 15,
    name: "MicroBeats Shower",
    price: "15000",
    category:"Shower",
    image: productImage15,
    detail:
      "Compact and portable, this mini speaker packs big sound for your shower enjoyment...",
  },
];




const CUSTOMER_TESTIMONIALS = [
  {
    product: "LuxeRain Shower Head",
    feedback: "ABSOLUTELY TRANSFORMATIVE!!! The LuxeRain Shower Head has changed my mornings completely. Feels like I’m under a warm waterfall. And the team? Super responsive and genuinely caring. Best customer experience, period.",
    customerName: "Sophia L.",
    date: "04/10/2023",
    rate:3

  },
  {
    product: "AquaTherapy Bath Bombs",
    feedback: "PURE BLISS IN A BOMB!!! These bath bombs are just heavenly. Skin feels like silk. And when I needed help choosing scents, the service was nothing short of spectacular. A+ for both product and people behind it.",
    customerName: "Daniel M.",
    date: "03/15/2023",
    rate:5

  },
  {
    product: "SteamSpa Generator",
    feedback: "A GAME CHANGER!!! Installing the SteamSpa Generator was the best decision I've made for my home spa. The installation support was incredible—patient and clear. It's luxury and service at its finest.",
    customerName: "Emily S.",
    date: "03/29/2023",
    rate:5

  },
  {
    product: "ZenStone Pebble Shower Mat",
    feedback: "LIKE WALKING ON A CLOUD!!! This shower mat is not just a mat; it’s a spa treatment for your feet. Had a minor issue, and the service was rapid and warm. Products and empathy of this caliber are rare!",
    customerName: "Oliver H.",
    date: "04/05/2023",
    rate:5

  },
  {
    product: "AromaSense Shower Head",
    feedback: "AN OLFATORY JOURNEY!!! The AromaSense Shower Head is my new favorite thing. It turns every shower into an aromatherapy session. Plus, the customer service is as refreshing as the scents. Top marks for everything!",
    customerName: "Isabella R.",
    date: "02/27/2023",
    rate:5

  },
  {
    product: "HydroLux Shower Speaker System",
    feedback: "MUSIC TO MY EARS!!! The HydroLux Shower Speaker has elevated my shower concerts. The sound quality is unmatched. Needed some setup advice and the support was harmonious—quick, helpful, and friendly.",
    customerName: "Lucas G.",
    date: "04/01/2023",
    rate:5

  },
  {
    product: "EcoRain Water-Saving Shower Head",
    feedback: "SAVES WATER, SAVES THE DAY!!! The EcoRain Shower Head not only conserves water, it also gives a powerful shower experience. The team behind it is just as impressive, with their eco-friendly mission and exceptional service.",
    customerName: "Sophie T.",
    date: "03/20/2023",
    rate:5

  },
  {
    product: "BathBliss Bath Pillow",
    feedback: "CLOUD NINE COMFORT!!! The BathBliss Bath Pillow has transformed my baths into a luxurious escape. And when I reached out for more product info, the service was as soft and comforting as the pillow itself.",
    customerName: "Nathan J.",
    date: "03/05/2023",
    rate:5

  },
];

const bagItem = [
  {
    
  }
]


export  {PRODUCTS,CUSTOMER_TESTIMONIALS};




import RoomsCard from "./RoomsCard";
import { Typography } from "@mui/material";
import NavBar from "./NavBar";
import { Helmet } from "@vuer-ai/react-helmet-async";
import BrassRoom from "/public/assets/stay/BrassRoom.jpeg"
import CopperRoom from "/public/assets/stay/CopperRoom.jpeg"
import IronRoom from "/public/assets/stay/IronRoom.jpeg"
import StoneStoryRoom from "/public/assets/stay/stoneandstoryroom.jpeg"
import StoneFamilyRoom from "/public/assets/stay/stonewoodfamilyretreat.jpeg"
import VintageRoom from "/public/assets/stay/thevintageroom.jpeg"
import CedarRoom from "/public/assets/stay/cedarroom.jpeg"
import FloatingWhatsApp from "./FloatingWhatsApp";
import Footer from "./Footer";

const Stay = () => {
  const staySchema= {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Stay at Stone Heritage Mukteshwar",
  "description": "Luxury heritage rooms and villas with 180-degree Himalayan views.",
  "image": "https://thestoneheritage.in/room-view.jpg",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Himalayan View", "value": "True" },
    { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": "True" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mukteshwar",
    "addressRegion": "Uttarakhand",
    "addressCountry": "IN"
  }
}
  const data = [
    {
      id: "1",
      imageBackgroundUrl: BrassRoom,
      heading: "Brass Room",
      description:
        "3 Guest . 1 Bedroom . 1 King Bed . 1 Floor Matteress . Private Washroom",
      roomUrl: "/Rooms/1",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "2",
      imageBackgroundUrl: CopperRoom,
      // price: 2567.01,
      heading: "Copper Room",
      description:
        "4 Guest . 1 Bedroom . 1 King Bed . 1 Single Bed . 1 Floor Matteress . Private Washroom 1 King Bed . 1 Single Bed",
      roomUrl: "/Rooms/2",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "3",
      imageBackgroundUrl: VintageRoom,
      // price: 3800,
      heading: "The Vintage Room",
      description:
        "2 Guest . 1 Bedroom . 1 King Bed  . Private Washroom",
      roomUrl: "/Rooms/3",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "4",
      imageBackgroundUrl: StoneFamilyRoom,
      // price: 3800,
      heading: "Stonewood Family Retreat",
      description:
        "4 Guest . 1 Bedroom . 2 King Bed .  Private Washroom",
      roomUrl: "/Rooms/4",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "5",
      imageBackgroundUrl: StoneStoryRoom,
      // price: 3800,
      heading: "Stone And Story room",
      description:
        "1 King Bed",
      roomUrl: "/Rooms/5",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "6",
      imageBackgroundUrl: IronRoom,
      // price: 3800,
      heading: "Iron Room",
      description:
        "1 King Bed",
           roomUrl: "/Rooms/6",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "7",
      imageBackgroundUrl: CedarRoom,
      // price: 3800,
      heading: "Cedar Room",
      description:""
       ,roomUrl: "/Rooms/7",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>
          Luxury Rooms & Villas in Mukteshwar | Stone Heritage Mukteshwar
        </title>
        <meta
        name="description"
        content="Book your luxury stay at Stone Heritage Mukteshwar. Featuring private stone cottages, pet-friendly gardens, and 180° Himalayan views. Ideal for families."
        />
        <script type="application/ld+json">
          {JSON.stringify(staySchema)}
        </script>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <main className="flex-1 px-clamp py-clamp">
        <RoomsCard data={data} />
      </main>

      <Footer></Footer>
      <FloatingWhatsApp />
      <Typography
  variant="h1"
  component="h1"
  sx={stoneheritagemukteshwar}
>
 Luxury stay in Mukteshwar
</Typography>
      <Typography
  variant="h1"
  component="h1"
  sx={stoneheritagemukteshwar}
>
Mountain view rooms, Pet-friendly villa, Heritage cottage
</Typography>
    </div>
  );
};

export default Stay;
const stoneheritagemukteshwar = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};
import RoomsCard from "./RoomsCard";
import NavBar from "./NavBar";

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
        "1 King Bed . 1 Single Bed",
      roomUrl: "/Rooms/2",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "3",
      imageBackgroundUrl: VintageRoom,
      // price: 3800,
      heading: "The Vintage Room",
      description:
        "1 King Bed",
      roomUrl: "/Rooms/3",
      // imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: "4",
      imageBackgroundUrl: StoneFamilyRoom,
      // price: 3800,
      heading: "Stonewood Family Retreat",
      description:
        "2 King Bed",
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
      <header>
        <NavBar />
      </header>
      <main className="flex-1 px-clamp py-clamp">
        <RoomsCard data={data} />
      </main>

      <Footer></Footer>
      <FloatingWhatsApp />
    </div>
  );
};

export default Stay;

import MapPin2Line from "remixicon-react/MapPin2LineIcon";
import CommunityLine from "remixicon-react/CommunityLineIcon";
import RoadsterLine from "remixicon-react/RoadsterLineIcon";
import TimerFlashLine from "remixicon-react/TimerFlashLineIcon";
import MapPinLine from "remixicon-react/MapPinLineIcon";
import FlightTakeoffLine from "remixicon-react/FlightTakeoffLineIcon";


const serviceData = [


  {
    id: 1,
    title: "City Transfer",
    icon: <MapPin2Line size={32} />,
    desc: "Your rental can be taken from one city into other another. Ask your rental station about this option",
  },

  {
    id: 2,
    title: "Whole  City Tour",
    icon: <CommunityLine size={32} />,
    desc: "100% city coverage service guarantedd",
  },

  {
    id: 3,
    title: "Unlimited Miles Car Rental",
    icon: <RoadsterLine size={32} />,
    desc: "Our rental service come with unlimited kilometers, so you can explore cities and beyond all you want",
  },

  {
    id: 4,
    title: "Fast & Easy Booking",
    icon: <TimerFlashLine size={32} />,
    desc: "Fast and esay booking with friendly 24/7 customer service",
  },

  {
    id: 5,
    title: "Many Pickup Locations",
    icon: <MapPinLine size={32} />,
    desc: "Pick up your car simply & serenely anywhere ",
  },

  {
    id: 6,
    title: "Airport Transfer",
    icon: <FlightTakeoffLine size={32} />,
    desc: "Safe and secured booking on arrival to airport",
  },
];

export default serviceData;

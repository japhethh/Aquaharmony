"use client";
import React from "react";
import { StickyScroll } from "../components/ui/StickyScroll";
import Water from '../images/Water.png'
import OurMission from '../images/OurMission.png'
import WhatWeDo from '../images/WhatWeDo.png'

const content = [
  {
    title: "About",
    description:
      "AquaHarmony's flagship product is the waterproof Bluetooth shower speaker with a floating design. This innovative speaker is designed to enhance the shower experience by allowing users to enjoy their favorite music or podcasts seamlessly while showering.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src={Water} alt="" />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "To enhance the shower experience by providing innovative and high-quality Waterproof Bluetooth Shower Speakers with Floating Design. We are dedicated to delivering products that combine cutting-edge technology with durability and convenience, allowing our customers to enjoy their favorite music or podcasts effortlessly while maintaining peace of mind with our waterproof and floatable design.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={OurMission}
          width={300}
          height={300}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "What We Do.",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img src={WhatWeDo}
           width={300}
           height={300}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="" />
      </div>
    ),
  }
  
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

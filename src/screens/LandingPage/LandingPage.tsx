import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Define category data for mapping
const categories = [
  { id: 1, title: "Sofa Set", image: "/image-1.png" },
  { id: 2, title: "Bedroom", image: "/image-2.png" },
  { id: 3, title: "Dining", image: "/image-3.png" },
  { id: 4, title: "Living", image: "/image-4.png" },
  { id: 5, title: "Study", image: "/image-5.png" },
  { id: 6, title: "Metal", image: "/image-6.png" },
];

// Define trending rentals data
const trendingRentals = [
  { id: 1, title: "Reading Table-HRTH", image: "/image-7.png" },
  { id: 2, title: "Wooden Semi-double Bed-HBSDH-316", image: "/image-10.png" },
  { id: 3, title: "Computer Table-HCTC", image: "/image-8.png" },
];

// Define new arrivals data
const newArrivals = [
  { id: 1, title: "Bed Getafe-207", image: "/image-9.png" },
  { id: 2, title: "Alna HCH-145-1-1-20", image: "/image-11.png" },
  { id: 3, title: "Kitchen Cabinet Shelf Organizer", image: "/image-12.png" },
];

// Define footer navigation data
const footerNavigation = {
  quickNavigation: [{ title: "About Us" }, { title: "Terms & Condition" }],
  knowledgeBase: [
    { title: "FAQ" },
    { title: "Return Policy" },
    { title: "EMI" },
  ],
  information: [
    { title: "New Arrival" },
    { title: "Cancel & Refund Policy" },
    { title: "Installment" },
    { title: "Delivery" },
    { title: "Privacy Policy" },
  ],
  socialIcons: [
    { icon: "/icon-3.svg" },
    { icon: "/icon-2.svg" },
    { icon: "/icon.svg" },
    { icon: "/icon-1.svg" },
  ],
};

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1442px] relative">
        {/* Hero Section */}
        <header className="relative w-full h-[720px] mt-20">
          <div className="absolute inset-0 [background:url(..//header-with-image.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)]">
            <div className="absolute inset-0 bg-[#0000003d]" />

            {/* Hero Text */}
            <div className="absolute top-[193px] left-1/2 -translate-x-1/2 font-medium text-white text-[64px] text-center tracking-[0] leading-[89.6px] whitespace-nowrap z-10">
              Smart Renting, Stylish Living
            </div>

            <div className="absolute top-[284px] left-1/2 -translate-x-1/2 w-[844px] text-center z-10">
              <div className="font-medium text-white text-[32px] tracking-[0] leading-[44.8px]">
                Rent Relax Repeat
              </div>
            </div>
          </div>
        </header>

        {/* First Row Categories */}
        <section className="flex w-full max-w-[1279px] items-center gap-8 mx-auto mt-[140px]">
          {categories.slice(0, 3).map((category) => (
            <Card key={category.id} className="flex-1 border-none shadow-none">
              <CardContent className="p-0 flex flex-col items-start gap-6">
                <div
                  className="relative w-full h-[405px] rounded-lg"
                  style={{
                    background: `url(${category.image}) 50% 50% / cover`,
                  }}
                />
                <h3 className="font-medium text-black text-4xl tracking-[0] leading-[54px]">
                  {category.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Second Row Categories */}
        <section className="flex w-full max-w-[1279px] items-center gap-[51px] mx-auto mt-[140px]">
          {categories.slice(3, 6).map((category) => (
            <Card key={category.id} className="flex-1 border-none shadow-none">
              <CardContent className="p-0 flex flex-col items-start gap-6">
                <div
                  className="relative w-full h-[405px] rounded-lg"
                  style={{
                    background: `url(${category.image}) 50% 50% / cover`,
                  }}
                />
                <h3 className="font-medium text-black text-4xl tracking-[0] leading-[54px]">
                  {category.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Trending Rentals Section */}
        <section className="mt-[140px] px-20">
          <h2 className="font-semibold text-black text-5xl tracking-[-0.96px] leading-[normal] mb-8">
            Trending Rentals
          </h2>

          <div className="flex flex-col gap-8">
            {trendingRentals.map((item) => (
              <div key={item.id} className="mb-8">
                <img
                  className="w-full max-w-[386px] object-cover mb-4"
                  alt={item.title}
                  src={item.image}
                />
                <h3 className="font-semibold text-black text-[32px] tracking-[0] leading-[48px]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="mt-[-1900px] px-20 ml-[800px]">
          <h2 className="font-semibold text-black text-5xl tracking-[-0.96px] leading-[normal] mb-8">
            New Arrivals
          </h2>

          <div className="flex flex-col gap-8">
            {newArrivals.map((item) => (
              <div key={item.id} className="mb-8">
                <img
                  className="w-full max-w-[448px] object-cover mb-4"
                  alt={item.title}
                  src={item.image}
                />
                <h3 className="font-semibold text-black text-[32px] tracking-[0] leading-[48px]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-[200px] bg-white pt-12 pb-8">
          <Separator className="w-[1280px] mx-auto" />

          <div className="flex justify-between px-20 pt-12">
            {/* Logo */}
            <div>
              <img
                className="w-[213px] h-[166px] object-cover"
                alt="QuickRent Furnish Logo"
                src="/image-13.png"
              />

              <div className="flex items-start gap-2 mt-8">
                {footerNavigation.socialIcons.map((social, index) => (
                  <div key={index} className="relative w-10 h-10 rounded">
                    <div className="relative w-6 h-6 top-2 left-2">
                      <img
                        className="absolute w-5 h-5"
                        alt="Social Icon"
                        src={social.icon}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-col items-end gap-6 w-[187px]">
              <h4 className="self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]">
                QUICK NAVIGATION
              </h4>

              {footerNavigation.quickNavigation.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]"
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* Knowledge Base */}
            <div className="flex flex-col items-end gap-6 w-[187px]">
              <h4 className="self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]">
                KNOWLEDGE BASE
              </h4>

              {footerNavigation.knowledgeBase.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]"
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* Information */}
            <div className="flex flex-col items-end gap-6 w-[187px]">
              <h4 className="self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]">
                INFORMATION
              </h4>

              {footerNavigation.information.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
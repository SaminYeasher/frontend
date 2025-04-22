import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "./separator";

const footerNavigation = {
  quickNavigation: [
    { title: "About Us", link: "/about" },
    { title: "Terms & Condition", link: "/terms" }
  ],
  knowledgeBase: [
    { title: "FAQ", link: "/faq" },
    { title: "Return Policy", link: "/return-policy" },
    { title: "EMI", link: "/emi" }
  ],
  information: [
    { title: "New Arrival", link: "/new-arrivals" },
    { title: "Cancel & Refund Policy", link: "/refund-policy" },
    { title: "Installment", link: "/installment" },
    { title: "Delivery", link: "/delivery" },
    { title: "Privacy Policy", link: "/privacy-policy" }
  ],
  socialIcons: [
    { icon: "/icon-3.svg", link: "#" },
    { icon: "/icon-2.svg", link: "#" },
    { icon: "/icon.svg", link: "#" },
    { icon: "/icon-1.svg", link: "#" }
  ]
};

export const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 pb-8">
      <div className="max-w-[1442px] mx-auto px-4">
        <Separator className="mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Icons */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                className="w-[213px] h-[166px] object-cover"
                alt="QuickRent Furnish Logo"
                src="/image-13.png"
              />
            </Link>

            <div className="flex items-start gap-2 mt-8">
              {footerNavigation.socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <img
                    className="w-5 h-5"
                    alt="Social Icon"
                    src={social.icon}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-medium text-black text-sm mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-3">
              {footerNavigation.quickNavigation.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Base */}
          <div>
            <h4 className="font-medium text-black text-sm mb-4">
              KNOWLEDGE BASE
            </h4>
            <ul className="space-y-3">
              {footerNavigation.knowledgeBase.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-medium text-black text-sm mb-4">
              INFORMATION
            </h4>
            <ul className="space-y-3">
              {footerNavigation.information.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
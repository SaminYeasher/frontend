// src/screens/AboutPage.tsx
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "../../components/ui/footer"; // Assuming Footer component is already set up

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-yellow-100 to-pink-100 p-6 flex flex-col">
      <div className="max-w-4xl mx-auto my-10">
        {/* Card Layout */}
        <Card className="shadow-xl rounded-2xl bg-white mt-20 mb-20">
          <CardContent className="p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
              About Vibrent Rentals
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vibrent Rentals provides flexible furniture rental solutions for modern living. Whether you're moving, staging a home, or just love trying new styles, we're here to make it effortless.
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium mb-6">
                With a wide variety of furniture available, we ensure that you have access to the latest styles with flexible rental options.
              </p>
              <a href="/categories">
                <button className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">
                  Explore Our Collections
                </button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;

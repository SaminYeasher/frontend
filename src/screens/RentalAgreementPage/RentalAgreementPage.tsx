// src/screens/RentalAgreementPage.tsx
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "../../components/ui/footer"; // Assuming Footer component is already set up

const RentalAgreementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-green-100 p-6 flex flex-col">
      <div className="max-w-4xl mx-auto my-10">
        {/* Card Layout */}
        <Card className="shadow-xl rounded-2xl bg-white mt-20 mb-20">
          <CardContent className="p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
              Rental Agreement
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Please review the terms and conditions of your rental agreement carefully before proceeding.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Monthly billing cycle, cancel anytime.</li>
              <li>Items must be returned in good condition.</li>
              <li>Damaged items may incur additional fees.</li>
            </ul>
            <div className="text-center mt-6">
              <a href="/dashboard">
                <button className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">
                  Accept and Proceed
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

export default RentalAgreementPage;

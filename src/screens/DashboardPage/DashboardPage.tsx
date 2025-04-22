import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Footer } from "../../components/ui/footer";

interface RentalItem {
  id: number;
  title: string;
  image: string;
  rentedDate: string;
  dueDate: string;
}

const rentalItems: RentalItem[] = [
  {
    id: 1,
    title: "Sofa Chelif-334",
    image: "/image-5.png",
    rentedDate: "Jan 15, 2025",
    dueDate: "Feb, 2027",
  },
  {
    id: 2,
    title: "Study Table-Wooden",
    image: "/image-7.png",
    rentedDate: "Feb 15, 2025",
    dueDate: "Feb, 2027",
  },
];

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-green-100 p-6 flex flex-col bg-gray-50 mt-20 mb-20">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-blue-500 text-white p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Sarah Khan</h2>
              <p className="text-sm text-blue-200">Premium Member</p>
            </div>
          </div>

          <nav className="space-y-4">
            <Link to="/dashboard" className="block py-2 px-4 bg-blue-600 rounded-lg">
              Dashboard
            </Link>
            <Link to="/browse" className="block py-2 px-4 hover:bg-blue-600 rounded-lg">
              Browse Furniture
            </Link>
            <Link to="/wishlist" className="block py-2 px-4 hover:bg-blue-600 rounded-lg">
              Wishlist
            </Link>
            <Link to="/settings" className="block py-2 px-4 hover:bg-blue-600 rounded-lg">
              Account Settings
            </Link>
            <Link to="/support" className="block py-2 px-4 hover:bg-blue-600 rounded-lg">
              Support
            </Link>
          </nav>

          <Button
            variant="outline"
            className="w-full mt-auto text-black border-white hover:bg-red-600"
          >
            Log Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">My Furniture Dashboard</h1>
            <p className="text-gray-600">Welcome back, Today is March 4, 2025</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-gray-600 mb-2">Active Rentals</h3>
              <p className="text-3xl font-bold">4</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-gray-600 mb-2">Next Due Date</h3>
              <p className="text-3xl font-bold text-red-500">April 25, 2025</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-gray-600 mb-2">Payment</h3>
              <p className="text-3xl font-bold text-green-500">BDT 30,000</p>
            </div>
          </div>

          {/* Active Rentals */}
          <div>
            <h2 className="text-xl font-bold mb-4">Active Furniture Rentals</h2>
            <div className="space-y-4">
              {rentalItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        Rented: {item.rentedDate} | Due: {item.dueDate}
                      </p>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      className="bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Extend
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-red-500 text-white hover:bg-red-600"
                    >
                      Return
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

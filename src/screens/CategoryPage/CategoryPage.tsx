import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "../../components/ui/footer";
import { products } from "../../data/products";

export const CategoryPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-green-100 p-6 flex flex-col bg-gray-50 pt-32 pb-16">
        <div className="max-w-[1442px] mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Sofa Set</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-[300px]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white text-xl font-semibold">
                          {product.title}
                        </h3>
                        <p className="text-white text-sm">
                          Starts from ৳{product.price.toLocaleString()} BDT
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
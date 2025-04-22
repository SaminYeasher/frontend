import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Footer } from "../../components/ui/footer";

export const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Product not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-32 pb-16">
        <div className="max-w-[1442px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-2xl font-semibold mb-6">৳{product.price.toLocaleString()} BDT</p>
              <p className="text-gray-600 mb-8">{product.description}</p>

              <Button className="w-full mb-8">Add to Cart</Button>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2">
                      <span className="font-medium">Material</span>
                      <span className="text-gray-600">{product.specifications.material}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="font-medium">Dimensions</span>
                      <span className="text-gray-600">{product.specifications.dimensions}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="font-medium">Weight</span>
                      <span className="text-gray-600">{product.specifications.weight}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="font-medium">Color</span>
                      <span className="text-gray-600">{product.specifications.color}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
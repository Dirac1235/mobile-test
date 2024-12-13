type Products = {
  image: string;
    name: string;
    brand: string;
    expiry: string;
    points: number;
}
export function ProductList({ products }: { products: Products[] }) {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-4 px-4">상품 구매</h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 p-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full  h-[80px] flex items-center overflow-hidden shadow-lg  rounded-lg"
            >
              {/* Coffee & Description Section */}
              <div className="flex p-4 border border-gray-300 rounded-l-lg h-ift w-full">
                <img
                  src={product.image}
                  alt={`Product image for ${product.name}`}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4 h-fit">
                  <div className="text-sm text-gray-500">{product.brand}</div>
                  <div className="font-medium text-[16px]">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.expiry}</div>
                </div>
              </div>

              {/* Points Section */}
              <div className="flex flex-col justify-center items-center rounded-r-lg h-full text-[#FF5E18] font-bold px-6 bg-[#FFEFE8] w-1/3">
                <img
                  src="/smallpoint.png"
                  alt="point icon"
                  className="w-[20px] h-[20px] object-contain mb-2"
                />
                {product.points}P
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


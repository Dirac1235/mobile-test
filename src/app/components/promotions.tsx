export function Promotions() {
  const promotions = [
    { id: 1, image: "/promo.png" },
    { id: 2, image: "/promo.png" },
    { id: 3, image: "/promo.png" },
  ]

  return (
    <div className="p-4 ">
      <h2 className="text-lg font-bold mb-4">매일매일 쏟아지는 다양한 혜택</h2>
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="flex-none w-[288px] h-[187px] bg-pink-100 rounded-lg overflow-hidden"
          >
            <img
              src={promo.image}
              alt={`Promotion ${promo.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


import { Header } from "./components/header"
import { PointsCard } from "./components/points-card"
import { Promotions } from "./components/promotions"
import { ProductList } from "./components/product-list"
import { BottomNav } from "./components/bottom-nav"
const products = [
  {
    image: '/starbucks.png',
    name: '아이스 아메리카노',
    brand: '[스타벅스]',
    expiry: '~12월 31일 까지',
    points: 300,
  },
  {
    image: '/starbucks.png',
    name: '카페 라떼',
    brand: '[스타벅스]',
    expiry: '~12월 31일 까지',
    points: 400,
  },
  // Add more products as needed
];

<ProductList products={products} />;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <PointsCard />
      <Promotions />
      <ProductList products={products}/>
      <BottomNav />
    </div>
  )
}

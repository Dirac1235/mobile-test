import { Home, ShoppingBag, Repeat2, User, Star } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around p-2">
        <button className="flex flex-col items-center p-2 text-orange-500">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">홈</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400 hover:text-orange-500">
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs mt-1">상점</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400 hover:text-orange-500">
          <Repeat2 className="w-6 h-6" />
          <span className="text-xs mt-1">영수증</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400 hover:text-orange-500">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">프로필</span>
        </button>
        <button className="flex flex-col items-center p-2 text-gray-400 hover:text-orange-500">
          <Star className="w-6 h-6" />
          <span className="text-xs mt-1">눈치게임</span>
        </button>
      </div>
    </nav>
  );
}



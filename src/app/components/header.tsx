import { Bell, User } from 'lucide-react'

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
        <img
          src="/logo.png"
          alt="Mascot"
          className="w-20 h-20 object-contain"
        />
      <div className="w-20 h-8 bg-white rounded" />
      <div className="flex gap-4">
        <button className="text-[#4D4D4D] hover:text-orange-500">
          <Bell  className="w-6 h-6 " />
        </button>
        <button className="text-[#4D4D4D] hover:text-orange-500">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

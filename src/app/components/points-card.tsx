export function PointsCard() {
  return (
    <div className='p-4 bg-white text-white '>
      <h2 className='text-lg mb-2 text-[#4D4D4D] text-[20px] font-bold'>홍길동 님 안녕하세요!</h2>
      <div className='bg-gradient-to-b from-[#FF6766] to-[#F8954D] p-10 rounded-lg'>
        <div className='flex items-center gap-2 border-b'>
        <img
          src="/coin.png"
          alt="Mascot"
          className="w-[36px] h-[36px] object-contain"
        />
          <span className='text-[40px] font-semibold '>5,000<span className='text-[20px] pl-2'>P</span></span>
        </div>
        <div className='flex mt-4'>
          <div className='flex items-center gap-1'>
          <img
          src="/star.png"
          alt="Mascot"
          className="w-[20px] h-[20px] object-contain"
        />
            <span>온도권</span>
            <span className='font-medium pl-2'>4장</span>
          </div>
          <div className='flex-1' />
          <button className='text-sm'>사용</button>
          <span className='mx-2'></span>
          <button className='text-sm'>구매</button>
        </div>
      </div>
    </div>
  );
}

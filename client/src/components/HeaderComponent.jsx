export default function HeaderComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-between align-middle p-10 h-auto">
      <div className="text-4xl text-primary font-medium tracking-wider">
        HODLINFO
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-bold">
        <button className="bg-secondary text-white py-1 px-2 rounded-lg">
          INR
        </button>
        <button className="bg-secondary text-slate-50 py-1 px-2 rounded-lg">
          BTC
        </button>
        <button className="bg-secondary text-slate-50 py-1 px-2 rounded-lg">
          BUY BTC
        </button>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row gap-5 font-bold items-center">
          <button className="h-12 w-12 rounded-full border border-double border-primary">
            <div className="text-white font-bold text-2xl">10</div>
          </button>
          <button className="bg-primary text-white py-2 px-2 rounded-lg">
            Connect Telegram
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

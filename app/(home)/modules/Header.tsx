import Logo from "@/images/logo.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center color-white gap-2">
            <img alt="logo" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="border-1 rounded" style={{color:"transparent"}} srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.571b28df.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.571b28df.png&amp;w=96&amp;q=75 2x" src={Logo} />
            <p className="text-xs md:text-lg font-black">STACHY CODES</p>
        </div>
            <div className="flex gap-2 items-center"><div className="relative inline-block">
                <select className="appearance-none bg-transparent p-4 rounded border border-green focus:outline-none">
                    <option value="en" selected={true} >🇬🇧</option>
                    <option value="lt">🇱🇹</option>
                </select>
            </div>
                <a href="#contact">
                <button className="bg-Blue w-full md:w-auto text-white px-4 py-4 rounded font-black text-lg disabled:bg-gray-300 undefined">Contact us →</button>
                </a>
            </div>
    </header>
  )
}

export default Header
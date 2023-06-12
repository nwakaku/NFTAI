import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[#100a25]">
      <div className="grid w-3/4 px-5 pt-10 pb-6 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12 lg:pt-16 space-x-8 bg-[#150f2b] rounded-lg">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Mantle Meets AI <br />
            <span className="max-w-2xl mb-4 text-4xl text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
              in NFTWorld!
            </span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Fuel Your Artistic Vision, Earn with Passion - Where AI and
            Blockchain Fuel the Art Market.
          </p>
          <button className="max-w-2xl mb-4 text-2xl bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-lg">
            Discover
          </button>
        </div>

        <div className="hidden lg:mt-10 lg:col-span-6 lg:flex">
          <img
            src="https://v5.airtableusercontent.com/v1/17/17/1686571200000/STgIOEZjldxpGD7JcCs5-A/8OLyHPum_zytCgeYweqm3WsZauafGvfi86L1NN9FUPEScEFX4w53ohPWhimava8KZpxJAB-biK3SodfFJBWrDQ/mWhozuxYDX2PSjgm66fj4t2gOioANcY-12hrfTU5I5E"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}

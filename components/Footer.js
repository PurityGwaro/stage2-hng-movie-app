import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-10 text-center ">
      <div className="flex">
        <Image
          src="/facebook.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className="w-auto h-auto mr-10"
        />
        <Image
          src="/instagram.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className="w-auto h-auto mr-10"
        />
        <Image
          src="/twitter.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className="w-auto h-auto mr-10"
        />
        <Image
          src="/youtube.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className="w-auto h-auto"
        />
      </div>
      <ul className="flex justify-between w-full px-4 py-4 md:py-8 md:w-1/2 lg:w-1/4 md:px-0">
        <li className="text-sm font-bold">Conditions of Use</li>
        <li className="text-sm font-bold">Privacy & Policy</li>
        <li className="text-sm font-bold">Press Room</li>
      </ul>
      <p className="text-[#6B7280] font-bold">
        © 2021 MovieBox by Purity Gwaro
      </p>
    </footer>
  );
}

export default Footer;

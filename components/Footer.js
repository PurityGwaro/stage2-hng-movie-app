import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-10 text-center">
      <div className="flex">
        <Image
          src="/facebook.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className="mr-10"
        />
        <Image
          src="/instagram.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className="mr-10"
        />
        <Image
          src="/twitter.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className="mr-10"
        />
        <Image
          src="/youtube.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className=""
        />
      </div>
      <ul className="flex justify-between w-1/2">
        <li className="font-bold">Conditions of Use</li>
        <li className="font-bold">Privacy & Policy</li>
        <li className="font-bold">Press Room</li>
      </ul>
      <p className="text-[#6B7280] font-bold">© 2021 MovieBox by Purity Gwaro</p>
    </footer>
  );
}

export default Footer;

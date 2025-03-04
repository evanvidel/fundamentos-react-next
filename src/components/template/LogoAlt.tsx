import Image from "next/image"
export default function LogoAlt() {
  return (
    <><div className="flex items-center gap-2">
      <Image
        src="https://www.freepnglogos.com/uploads/bmw-m-logo-png-4.png"
        height={50}
        width={50}
        alt="logo" />
    </div><span className='text-xl font-black'>BMW</span></>
  )
}
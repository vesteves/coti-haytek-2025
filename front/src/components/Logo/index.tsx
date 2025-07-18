import Image from "next/image"
import logo from '../../assets/images/logo.jpg'

export const Logo = () => {
  return <Image
    priority={true}
    src={logo}
    alt="Logo"
    width={190}
    height={70}
  />
}

export default Logo
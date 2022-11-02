import Image from "next/image";
import gif from '../public/404.gif'

export default function Custom404() {
  return <Image src={gif} width={500} height={500} />;
}

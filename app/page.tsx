import Homesec1 from "@/components/homesec1";
import Homesec5 from "@/components/homesec5";
import Homesec3 from "@/components/homesec3";
import Homesec4 from "@/components/homesec4";

export const runtime ="edge";

export default function Home() {
  return (
    <>
      <Homesec1 />
      <Homesec4 />
      <Homesec5 />
      <Homesec3 />
    </>
  );
}

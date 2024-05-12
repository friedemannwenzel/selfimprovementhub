import Homesec1 from "@/components/homesec1";
import Homesec2 from "@/components/homesec2";
import Homesec3 from "@/components/homesec3";

export const runtime ="edge";

export default function Home() {
  return (
    <>
      <Homesec1 />
      <Homesec2 />
      <Homesec3 />
    </>
  );
}

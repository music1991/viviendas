import SimpleCarousel from "../components/SimpleCarousel";
import { DATA } from "../entities/lib/projects";

export default function Page() {
  return (
    <div className="">
      <SimpleCarousel items={DATA} />
    </div>
  );
}

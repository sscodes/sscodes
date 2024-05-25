import { pt_mono_400 } from "@/helpers/Fonts";

const Headline = () => {
  return (
    <div
      className={`flex gap-4 ${pt_mono_400.className} text-2xl font-semibold`}
    >
      <div>Developer</div>
      <div>|</div>
      <div>Frontend</div>
      <div>|</div>
      <div>Scribbler</div>
      <div>|</div>
      <div>Shutterbug</div>
    </div>
  );
};

export default Headline;

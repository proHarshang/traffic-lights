import type { Ways } from "@/types";

interface RoadLayoutProps {
  way: Ways;
}

const RoadLayout = ({ way }: RoadLayoutProps) => {
  return <div>{way}</div>;
};

export default RoadLayout;

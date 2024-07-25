import { RecommendedctCard } from "./recommended";
import Image from "next/image";
import "./sidebar.css";

type Props = {};

export const Sidebar = ({}: Props) => {
  return (
    <div className="flex h-full lg:w-[260px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col">
      <div className="pt-8 pl-4 pb-7 flex items-center gap-3">
        <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
        <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
          Seguro te encantarán
        </h1>
      </div>
      <div className="flex flex-col gap-y-2 flex-1 overflow-y-auto px-2 pb-4">
        {/* {productosMock.map((producto, index) => (
          <RecommendedctCard key={index} {...producto} />
        ))} */}
      </div>
    </div>
  );
};

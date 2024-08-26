import Image from "next/image";
import defultimage from "@/public/defultimage.jpg";

type Props = {
  image: string;
  name: string;
  date: string | number;
  type: string;
  id: number | string;
  movieIdHandler: any;
};



function SearchResult({ image, name, date, type, movieIdHandler, id }: Props) {
  return (
    <div
      onClick={() => movieIdHandler(id)}
      className="flex justify-start items-center gap-[10px] mb-2 rounded-md border border-slate-400 cursor-pointer  m-auto  "
    >
      <div>
        <Image
          src={image === "N/A" ? defultimage : image}
          alt="title"
          width={100}
          height={200}
          className="rounded-md "
        />
      </div>
      <div className="flex flex-col justify-between gap-3">
        <h1 className="text-base font-semibold">🎥{name}</h1>
        <h2 className="text-sm text-white/70">📅{date}</h2>
        <h2 className="text-sm text-white/70">🎬{type}</h2>
      </div>
    </div>
  );
}

export default SearchResult;

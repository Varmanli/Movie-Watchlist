import { BookmarkContext } from "@/lib/Watchlist";
import defultimage from "@/public/defultimage.jpg";
import Image from "next/image";
import { useContext } from "react";
import { CiBookmarkRemove } from "react-icons/ci";

function Watchinglist() {
  const bookmarkContext = useContext(BookmarkContext);
  if (!bookmarkContext) return null;
  const { bookmarks, addBookmark, removeBookmark } = bookmarkContext;
  return (
    <div>
      {bookmarks.map((item) => (
        <div
          key={item.imdbID}
          className="flex justify-start items-center gap-[10px] relative mb-2 rounded-md border border-slate-400 cursor-pointer  m-auto  "
        >
          <div>
            <CiBookmarkRemove
              className="absolute top-2 right-2 text-slate-200 text-[30px]"
              onClick={() => removeBookmark(item.imdbID)}
            />
            <Image
              src={item.poster === "N/A" ? defultimage : item.poster}
              alt="title"
              width={100}
              height={200}
              className="rounded-md "
            />
          </div>
          <div className="flex flex-col justify-between gap-3">
            <h1 className="text-base font-semibold">🎥{item.title}</h1>
            <h2 className="text-sm text-white/70">📅{item.year}</h2>
            <h2 className="text-sm text-white/70">🎬{item.genre}</h2>
            <h2 className="text-sm text-white/70">⭐{item.imdbRating}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Watchinglist;

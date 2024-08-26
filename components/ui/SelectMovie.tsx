import Image from "next/image";
import { Button } from "./button";
import defultimage from "@/public/defultimage.jpg";
import { BookmarkContext } from "@/lib/Watchlist";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";

function SelectMovie({ selectMovie, close }: any) {
  const bookmarkContext = useContext(BookmarkContext);
  if (!bookmarkContext) return null;
  const { bookmarks, addBookmark, removeBookmark } = bookmarkContext;
  function handleBookmark(
    imdbID: string | number,
    poster: string,
    title: string,
    imdbRating: number,
    year: number | string,
    genre: string
  ) {
    const isBookmarked = bookmarks.some(
      (bookmark) => bookmark.imdbID === imdbID
    );

    if (isBookmarked) {
      removeBookmark(imdbID);
    } else {
      addBookmark({ imdbID, poster, title, imdbRating, year, genre });
    }
  }

  return (
    <div className="flex flex-col justify-between items-start mt-5 md:mt-0 relative">
      <IoClose
        className="absolute top-1 right-4 text-[32px] cursor-pointer"
        onClick={() => close(true)}
      />
      <div className="flex items-center justify-center md:flex-row ml-5 gap-10">
        <Image
          src={
            selectMovie?.Poster === "N/A" ? defultimage : selectMovie?.Poster
          }
          alt="title"
          width={300}
          height={400}
          className="ml-2 rounded-lg h-[150px] w-[100px]"
        />
        <div className="flex flex-col justify-between items-center gap-3">
          <h1 className="font-semibold text-lg">{selectMovie?.Title}</h1>
          <Button
            onClick={() =>
              handleBookmark(
                selectMovie?.imdbID,
                selectMovie?.Poster,
                selectMovie?.Title,
                selectMovie?.imdbRating,
                selectMovie?.Yaer,
                selectMovie?.Genre
              )
            }
            className="flex justify-center items-center gap-2"
          >
            Add to Watchlist
            <FaBookmark className="text-slate-700 text-lg" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 m-4">
        <div className="flex flex-col justify-center items-center text-sm text-white/60 gap-2">
          <div className="flex justify-between w-full bg-slate-700 p-1 rounded-lg">
            <h2>Year</h2>
            <h2>{selectMovie?.Year}</h2>
          </div>
          <div className="flex justify-between w-full  bg-slate-700 p-1 rounded-lg">
            <h2>Genre</h2>
            <h2>{selectMovie?.Genre}</h2>
          </div>
          <div className="flex justify-between w-full bg-slate-700 p-1 rounded-lg">
            <h2>Director</h2>
            <h2>{selectMovie?.Director}</h2>
          </div>
          <div className="flex justify-between w-full bg-slate-700 p-1 rounded-lg">
            <h2>Actors</h2>
            <h2>{selectMovie?.Actors}</h2>
          </div>
          <div className="flex justify-between w-full bg-slate-700 p-1 rounded-lg">
            <h2>imdbRating</h2>
            <h2>{selectMovie?.imdbRating}</h2>
          </div>
          <div className="flex justify-between w-full bg-slate-700 p-1 rounded-lg">
            <h2>Runtime</h2>
            <h2>{selectMovie?.Runtime}</h2>
          </div>
          <div className="p-2 bg-slate-700 rounded-lg">
            <p>{selectMovie?.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectMovie;

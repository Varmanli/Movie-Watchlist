"use client";
// ui
import Header from "@/components/ui/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import SearchResult from "@/components/ui/SearchResult";
import SelectMovie from "@/components/ui/SelectMovie";
import Watchinglist from "@/components/ui/Watchinglist";
import { BookmarkProvider } from "@/lib/Watchlist";

// state
import { useEffect, useState } from "react";

interface Movie {
  Poster: string;
  Title: string;
  Year: string | number;
  Type: string;
  imdbID: string;
}


export default function Home() {
  const [data, setData] = useState<Movie[]>([]);
  const [selectMovie, setSelectMovie] = useState();
  const [inputValue, setInputValue] = useState<string | null>("wellacome");
  const [movieId, setMovieId] = useState<string | null>(null);
  const [togglediv, setTogglediv] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=f375edb7&s=${inputValue}`
      );
      const result = await res.json();
      setData(result.Search);
    };

    fetchData();
  }, [inputValue]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${movieId}&apikey=f375edb7`
      );
      const result = await res.json();
      setSelectMovie(result);
    };

    fetchData();
  }, [movieId]);

  function inputValueHandler(i: string) {
    setInputValue(i);
  }
  return (
    <BookmarkProvider>
      <main className="lg:w-[900px] mx-auto">
        <Header setInputValue={inputValueHandler} value={inputValue} />
        <section className="flex flex-col gap-4 md:flex-row justify-between  p-2 ">
          <ScrollArea
            className="h-[230px] w-full md:w-fit md:h-[400px] md:basis-2/5"
            onClick={() => setTogglediv(false)}
          >
            {data?.map((item) => (
              <SearchResult
                image={item.Poster}
                name={item.Title}
                date={item.Year}
                type={item.Type}
                key={item.imdbID}
                id={item.imdbID}
                movieIdHandler={setMovieId}
              />
            ))}
          </ScrollArea>
          <div className={"basis-3/5"}>
            {togglediv ? (
              <ScrollArea className="h-[400px]">
                <Watchinglist />
              </ScrollArea>
            ) : (
              <SelectMovie selectMovie={selectMovie} close={setTogglediv} />
            )}
          </div>
        </section>
      </main>
    </BookmarkProvider>
  );
}

"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
interface Bookmark {
  imdbID: string | number;
  poster: string;
  title: string;
  imdbRating: number;
  year: number | string;
  genre: string;
}

interface BookmarkContextProps {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (id: number | string) => void;
}

export const BookmarkContext = createContext<BookmarkContextProps | undefined>(
  undefined
);

export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedBookmarks = JSON.parse(
        localStorage.getItem("bookmarks") || "[]"
      );
      setBookmarks(savedBookmarks);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);
  const addBookmark = (item: Bookmark) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, item]);
  };

  const removeBookmark = (imdbID: string | number) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((bookmark) => bookmark.imdbID !== imdbID)
    );
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

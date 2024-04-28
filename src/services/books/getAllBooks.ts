"use server";

import { TQueryParam } from "@/types/global";

export const getAllBooks = async (args?: any) => {
  const queryString = new URLSearchParams();

  if (args) {
    args.forEach((item: TQueryParam) => {
      queryString.append(item.name, item.value as string);
    });
  }
  const books = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/books${
      queryString ? `?${queryString.toString()}` : ""
    }`,
    {
      next: {
        revalidate: 24 * 60 * 60,
        tags: ["books"],
      },
    }
  );
  const { data } = await books.json();
  if (books.ok && data) {
    return data;
  } else {
    return [];
  }
};

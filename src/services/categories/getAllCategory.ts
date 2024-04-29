"use server";

import { TQueryParam } from "@/types/global";

export const getAllCategories = async () => {
  const categories = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/categories`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  const { data } = await categories.json();
  if (categories.ok && data) {
    return data;
  } else {
    return [];
  }
};

"use server";

import { TQueryParam } from "@/types/global";

export const getAllSubCategories = async (args?: any): Promise<any[]> => {
  const queryString = new URLSearchParams();

  if (args) {
    args.forEach((item: TQueryParam) => {
      queryString.append(item.name, item.value as string);
    });
  }
  const subCategories = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/sub-categories${
      queryString ? `?${queryString.toString()}` : ""
    }`,
    {
      next: {
        revalidate: 24 * 60 * 60,
        tags: ["all-sub-categories"],
      },
    }
  );
  const { data } = await subCategories.json();
  if (subCategories.ok && data) {
    return data;
  } else {
    return [];
  }
};

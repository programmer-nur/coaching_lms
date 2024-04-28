"use server";

import { TQueryParam } from "@/types/global";

export const getAllCourses = async (args?: any) => {
  const queryString = new URLSearchParams();

  if (args) {
    args.forEach((item: TQueryParam) => {
      queryString.append(item.name, item.value as string);
    });
  }
  const courses = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses${
      queryString ? `?${queryString.toString()}` : ""
    }`,
    {
      next: {
        revalidate: 24 * 60 * 60,
        tags: ["all-courses"],
      },
    }
  );
  const { data } = await courses.json();
  if (courses.ok && data) {
    return data;
  } else {
    return [];
  }
};

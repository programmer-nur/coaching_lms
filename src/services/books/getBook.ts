"use server";

export const getBook = async (id: string) => {
  const book = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/books/${id}`
  );
  const { data } = await book.json();
  if (book.ok && data) {
    return data;
  } else {
    return {};
  }
};

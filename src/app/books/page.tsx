import Books from "@/components/view/Books/Books";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Coaching | Books",
  description: "This is the Books Page",
};
const BooksPage = () => {
  return (
    <div>
      <Books />
    </div>
  );
};

export default BooksPage;

import { getAllBooks } from "@/services/books/getAllBooks";
import BooksList from "./BooksList";
import SearchBox from "@/components/ui/SearchBox";

const Books = async ({ searchParams }: { searchParams: any }) => {
  const searchTerm = searchParams?.searchTerm || "";

  const queryString = [
    { name: "searchTerm", value: searchTerm },
    { name: "limit", value: "20" },
  ];
  const books = await getAllBooks(queryString);

  return (
    <section className="bg-[rgb(245_252_252)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto pb-8 sm:pb-16 max-w-lg text-center">
          <h2 className="text-2xl text-black font-bold sm:text-4xl">
            All Books
          </h2>

          <p className="mt-4 text-base text-grayBlack">
            Learn from the best of the best in the field.
          </p>
        </div>

        <div className="mb-4 flex gap-1 justify-center items-center">
          <p className="text-lg">Search:</p>
          <SearchBox placeholder="Search Books..." />
        </div>
        {<BooksList books={books?.data ? books?.data : []} />}
      </div>
    </section>
  );
};

export default Books;

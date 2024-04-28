import BooksDetails from "@/components/view/Books/BooksDetails";
import { getBook } from "@/services/books/getBook";

const BookPage = async ({ params }: { params: { id: string } }) => {
  const book = await getBook(params.id);
  return (
    <div>
      <BooksDetails book={book} />
    </div>
  );
};

export default BookPage;

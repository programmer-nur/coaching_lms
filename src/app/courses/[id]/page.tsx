import CourseDetails from "@/components/view/Courses/CourseDetails";
import { getCourse } from "@/services/courses/getCourse";
import { Suspense } from "react";
import Loading from "./loading";

const SingleCoursePage = async ({ params }: { params: { id: string } }) => {
  const course = await getCourse(params.id);
  return (
    <Suspense fallback={<Loading />}>
      <CourseDetails course={course} />
    </Suspense>
  );
};

export default SingleCoursePage;

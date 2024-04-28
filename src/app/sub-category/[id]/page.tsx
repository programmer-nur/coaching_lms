import SubCategoryCourses from "@/components/view/SubCategoryCourses/SubCategoryCourses";
import { getAllCourses } from "@/services/courses/getAllCourses";
import { Suspense } from "react";
import Loading from "./loading";

const SingleSubCategoryCourses = async ({
  params,
}: {
  params: { id: string };
}) => {
  const courses = await getAllCourses([
    { name: "sub_category_id", value: params.id },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <SubCategoryCourses courses={courses?.data} />
    </Suspense>
  );
};

export default SingleSubCategoryCourses;

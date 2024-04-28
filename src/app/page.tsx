import AllBooks from "@/components/view/Home/AllBooks/AllBooks";
import AllCourses from "@/components/view/Home/AllCourses/AllCourses";
import CategoryByCourses from "@/components/view/Home/CategoryByCourse/CategoryByCourses";
import Hero from "@/components/view/Home/Hero";
import SubCategoryByCourses from "@/components/view/Home/SubCategoryByCourse/SubCategoryByCourses";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AllCourses />
      <CategoryByCourses />
      <SubCategoryByCourses />
      <AllBooks />
    </div>
  );
};

export default HomePage;

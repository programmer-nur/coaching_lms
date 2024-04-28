import Courses from "@/components/view/Courses/Courses";
import { getAllCourses } from "@/services/courses/getAllCourses";
import React from "react";

const CoursesPage = () => {
  return (
    <div>
      <Courses />
    </div>
  );
};

export default CoursesPage;

import Courses from "@/components/view/Courses/Courses";
import { getAllCourses } from "@/services/courses/getAllCourses";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Coaching | Courses",
  description: "This is the Courses Page",
};

const CoursesPage = () => {
  return (
    <div>
      <Courses />
    </div>
  );
};

export default CoursesPage;

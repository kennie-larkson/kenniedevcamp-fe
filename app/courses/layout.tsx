import "@/app/ui/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KennieDevCamp - Courses",
  description: "Course Material",
  keywords:
    "developer, camp, kennie, kennieDevCamp, kennie_larkson, Abdulrafiu Kehinde Lawal, career, software developer, software engineer, software development, software engineering, software development career, software engineering career, software development bootcamp, software engineering bootcamp, software development training, software engineering training, software development education, software engineering education, software development course, software engineering course, software development program, software engineering program, software development school, software engineering school, software development institute, software engineering institute, software development university, software engineering university, software development college, software engineering college, software development academy, software engineering academy, software development bootcamp, software engineering bootcamp, software development training, software engineering training, software development education, software engineering education, software development course, software engineering course, software development program, software engineering program, software development school, software engineering school, software development institute, software engineering institute, software development university, software engineering university, software development college, software engineering college, software development academy, software engineering academy",
  openGraph: {
    title: "KennieDevCamp - Courses",
    description: "Welcome to KennieDevCamp -- Courses",
    images: ["/rockstar_techie.jpeg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //await loadCourses();
  return <>{children}</>;
}

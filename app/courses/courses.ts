import { db } from "@vercel/postgres";

export const courses = [
  {
    course_id: "HTML01",
    title: "Introduction to HTML",
    description:
      "Learn the basics of HTML, the standard markup language for creating web pages.",
    duration: "4 weeks",
    level: "Beginner",
    prerequisites: "None",
    //instructor: "Jane Doe",
  },
  {
    course_id: "CSS01",
    title: "CSS Fundamentals",
    description:
      "Understand the fundamentals of CSS and how to style web pages effectively.",
    duration: "4 weeks",
    level: "Beginner",
    prerequisites: "Introduction to HTML",
    //instructor: "John Smith",
  },
  {
    course_id: "JSBASIC01",
    title: "JavaScript Basics",
    description:
      "Get started with JavaScript, the programming language of the web.",
    duration: "6 weeks",
    level: "Beginner",
    prerequisites: "CSS Fundamentals",
    //instructor: "Alice Johnson",
  },
  {
    course_id: "RWB02",
    title: "Responsive Web Design",
    description:
      "Learn how to create responsive web designs that work on all devices.",
    duration: "5 weeks",
    level: "Intermediate",
    prerequisites: "HTML & CSS Fundamentals",
    //instructor: "Michael Brown",
  },
  {
    course_id: "FEDREACT",
    title: "Frontend Development with React",
    description:
      "Dive into React and learn how to build dynamic user interfaces.",
    duration: "8 weeks",
    level: "Intermediate",
    prerequisites: "JavaScript Basics",
    //instructor: "Emily Davis",
  },
  {
    course_id: "BEBNODE",
    title: "Backend Development with Node.js",
    description:
      "Learn how to build server-side applications using Node.js and Express.",
    duration: "8 weeks",
    level: "Intermediate",
    prerequisites: "JavaScript Basics",
    //instructor: "David Wilson",
  },
  {
    course_id: "FSDEV",
    title: "Full Stack Development",
    description:
      "Combine frontend and backend skills to build complete web applications.",
    duration: "12 weeks",
    level: "Advanced",
    prerequisites:
      "Frontend Development with React, Backend Development with Node.js",
    //instructor: "Sarah Miller",
  },
  {
    course_id: "VCSGIT",
    title: "Version Control with Git",
    description:
      "Understand the basics of version control using Git and GitHub.",
    duration: "2 weeks",
    level: "Beginner",
    prerequisites: "None",
    //instructor: "Chris Lee",
  },
  {
    course_id: "WEBACCESSIBILTY",
    title: "Web Accessibility",
    description:
      "Learn how to make web applications accessible to all users, including those with disabilities.",
    duration: "3 weeks",
    level: "Intermediate",
    prerequisites: "HTML & CSS Fundamentals",
    //instructor: "Laura Martinez",
  },
  {
    course_id: "INTROAPI",
    title: "Introduction to APIs",
    description:
      "Discover how to work with APIs to fetch and manipulate data in your applications.",
    duration: "4 weeks",
    level: "Intermediate",
    prerequisites: "JavaScript Basics",
    //instructor: "James Anderson",
  },
];

export default async function loadCourses() {
  const client = await db.connect();
  try {
    /*   await client.sql`
      CREATE TABLE IF NOT EXISTS courses (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        course_id TEXT NOT NULL,
        description TEXT NOT NULL,
        title TEXT NOT NULL,
        duration TEXT NOT NULL,
        level TEXT NOT NULL,
        prerequisites TEXT NOT NULL
    );
    `; */

    courses.map(async (course) => {
      await client.sql`
    INSERT INTO courses (course_id, description, title, duration, level, prerequisites)
      VALUES (${course.course_id}, ${course.description}, ${course.title}, ${course.duration}, ${course.level}, ${course.prerequisites})
    `;
    });

    await client.sql`
    SELECT 
    `;
  } catch (error) {
    throw new Error(`Unable to create courses table: ${error}`);
  }
}

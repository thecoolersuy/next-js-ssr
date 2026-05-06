import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    slug: "web-development",
    title: "Data Science with Python Training with AI",
    duration: "12 weeks",
    description: "Learn HTML, CSS, JavaScript, React, and Next.js",
    image:
      "https://coursecentral.in/wp-content/uploads/2025/04/Data-Science.jpg",
  },
  {
    slug: "react-basics",
    title: "Full Stack Development Python Training course with AI",
    duration: "8 weeks",
    description: "Learn components, props, state, and hooks",
    image:
      "https://mindrisers.com.np/static/Images/courses/Full_Stack_Python_training.png",
  },
  {
    slug: "nextjs-mastery",
    title: "Graphic Design Training with AI",
    duration: "16 weeks",
    description: "Learn routing, layouts, server components, and more",
    image:
      "https://res.cloudinary.com/saylani-welfare/image/upload/v1764064487/SMIT/Courses/GDA.jpg",
  },
];

export default function Courses() {
  return (
    <>
      <div className="min-h-screen bg-[#F3F0FF]">
        <h1 className="text-center pt-10 text-3xl font-bold text-[#181B32]">
          Explore Popular <span className="text-[#524FD5]">Courses</span>
        </h1>
        <div className="flex flex-wrap  justify-center mt-6">
          {courses.map((course) => (
            <div
              key={course.slug}
              className=" flex flex-col w-[340px] h-[410px]  gap-5 border-1 hover:border-[#524FD5] transition duration-300 ease-in-out  border-[#D2D2D2] rounded-[15px] p-5 m-5 rounded items-start bg-[#ffffff]"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={330}
                height={200}
                className="w-full h-full object-cover rounded-[15px]"
              />
              <h2 className="text-2xl text-[#524FD5] font-bold">
                {course.title}
              </h2>
              <p className="text-sm  text-[#696984] font-semibold">
                {course.duration}
              </p>
              <Link href={`/courses/${course.slug}`}>
                <button className="bg-[#ffffff] text-[#7E7E7E] w-[155px] h-[48]  rounded-[22px] border border-[#D2D2D2] hover:border-none hover:bg-[#F3F0FF] hover:text-[#524FD5] ">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

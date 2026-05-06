const courses = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, and Next.js",
  },
  {
    slug: "react-basics",
    title: "React Basics",
    description: "Learn components, props, state, and hooks",
  },
  {
    slug: "nextjs-mastery",
    title: "Next.js Mastery",
    description: "Learn routing, layouts, server components, and more",
  },
];


export default async function CoursesPage({params}:{
 params: Promise<{ slug: string}>;
}) {
  const {slug} = await params;
  const course = courses.find((course)=>(course.slug === slug));

  if(!course){
    return <h1>Courses Not Found</h1>
  }
  return (
    <>
    <div className="border p-5 m-5 rounded ">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p>{course.description}</p>
    </div>
    </>
  )
}



export default async function InstructorDetailsPage({params}:{
    params: Promise<{ name:string}>;
}) {
    const{name} = await params;
  return (
    <h1 className="text-3xl p-5 text-center text-[#ffffff] font-bold">Instructor name: {name}</h1>
  )
}


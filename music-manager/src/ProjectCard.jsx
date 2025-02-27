import cover1 from "./assets/cover1.png";

function ProjectCard() {

  return (
    <>
      <div className="size-60 p-4 rounded-md flex flex-col items-center hover:bg-slate-600">
        <img className="size-40 rounded-md p-2" src={cover1} alt="project-card-cover" />
        <p className="font-semibold">Legends Never Die</p>
        <p>Album/EP</p>
      </div>
    </>
  )
}

export default ProjectCard

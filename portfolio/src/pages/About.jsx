import { Footer } from "../components"

export const About = () => {
  return (
    <div className="bg-gray-800 min-h-screen mx-auto max-w-full lg:px-8 pt-4 container">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold tracking-widest text-white drop-shadow-xl font-mono">Hi, I'm Josue Martinez</h1>
        <h3 className="text-4xl py-1 tracking-widest text-teal-300 drop-shadow-xl font-mono pb-7">Developer</h3>
        <span className="font-mono text-white text-justify text-lg">I'm a passionate developer who enjoys continous learning for personal and professional growth. I really like to challenging myself and pushing myself to the limit.</span>
        <p className="font-mono text-white text-justify italic mt-12">Be ashamed to die until you have won some victory for humanity.</p>
        <p className="font-mono text-white text-justify">— Horace Mann</p>
        <div className="flex pt-10">
          <button className="bg-teal-300 p-3 mr-6 rounded-2xl before:ease relative overflow-hidden shadow-sm transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-35 before:duration-700 hover:shadow-teal-300 hover:before:-translate-x-40">Contact me</button>
          <button className="bg-teal-300 p-3 mr-6 rounded-2xl before:ease relative overflow-hidden shadow-sm transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-35 before:duration-700 hover:shadow-teal-300 hover:before:-translate-x-40">Show Projects</button>
        </div>
      </section>
    </div>
  )
}

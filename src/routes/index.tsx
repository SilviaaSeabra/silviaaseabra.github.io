import { A } from "@solidjs/router";
import { AiFillLinkedin, AiOutlineMail } from "solid-icons/ai";
import myData from "~/myData";

export default function Home() {
  return (
    <main class="relative min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 overflow-hidden">
      {/* Background decorative elements */}
      <div class="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-b from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-gradient-to-tr from-blue-300/20 to-cyan-200/10 rounded-full blur-3xl"></div>

      <div class="max-w-3xl mx-auto flex flex-col items-center py-12 md:py-20 relative z-10">
        {/* Profile Section */}
        <div class="w-full mb-12">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo */}
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-md opacity-40 -m-1"></div>
              <img
                src={myData.photo}
                alt={myData.name}
                class="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/80 shadow-xl shadow-blue-200/50 object-cover transition-all hover:scale-105 duration-300"
              />
            </div>

            {/* Name and Basic Info */}
            <div class="flex flex-col items-center md:items-start">
              <h1 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 mt-4 md:mt-0">
                {myData.name}
              </h1>

              <h2 class="text-xl mt-2 text-blue-800 font-medium">
                {myData.jobTitle}
              </h2>

              <p class="text-gray-500 mt-2 flex items-center gap-2">
                <span class="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
                {myData.location} • {myData.age} anos
              </p>

              {/* Social Links */}
              <div class="flex gap-4 mt-5">
                <a
                  href={`mailto:${myData.contact.email}`}
                  target="_blank"
                  class="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-blue-50 backdrop-blur-sm hover:-translate-y-1"
                >
                  <AiOutlineMail class="text-blue-600" size={18} />
                  <span class="text-sm">Email</span>
                </a>
                <A
                  target="_blank"
                  href={myData.contact.linkedin}
                  class="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-blue-50 backdrop-blur-sm hover:-translate-y-1"
                >
                  <AiFillLinkedin class="text-blue-600" size={18} />
                  <span class="text-sm">LinkedIn</span>
                </A>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div class="w-full bg-white/70 rounded-2xl shadow-lg p-6 md:p-8 mb-10 backdrop-blur-md border border-white/20">
          <h3 class="text-xl font-semibold mb-4 text-blue-700 text-center md:text-left">
            Sobre mim
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed text-pretty">
            {myData.bio}
          </p>
        </div>

        {/* Skills Section */}
        <div class="w-full mb-10">
          <h3 class="text-xl font-semibold mb-5 text-blue-700 text-center">
            Ferramentas que me destaco
          </h3>
          <div class="flex gap-3 flex-wrap justify-center">
            {myData.techSkills.slice(0, 5).map((skill) => (
              <span class="px-4 py-2 bg-white/80 text-blue-700 rounded-full text-sm shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-default border border-white/20 backdrop-blur-sm">
                {skill.name}
              </span>
            ))}
            <span class="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/30 text-blue-700 rounded-full text-sm shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-default border border-white/20 backdrop-blur-sm">
              e muito mais...
            </span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div class="flex flex-col sm:flex-row gap-4 mt-4">
          <A
            href="/curriculum"
            class="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-300/50 font-medium text-center"
          >
            Ver currículo completo
          </A>
        </div>
      </div>
    </main>
  );
}

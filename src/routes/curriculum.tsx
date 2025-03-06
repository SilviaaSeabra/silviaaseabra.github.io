import { A } from "@solidjs/router";
import { AiFillLinkedin, AiOutlineMail } from "solid-icons/ai";
import { FiGlobe } from "solid-icons/fi";
import { Index } from "solid-js";
import { SkillIcon } from "~/components/curriculum/SkillIcon";
import myData from "~/myData";

export default function Curriculum() {
  return (
    <main class="relative min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 overflow-hidden">
      {/* Background decorative elements */}
      <div class="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-b from-blue-200/30 to-cyan-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-gradient-to-tr from-blue-300/20 to-cyan-200/10 rounded-full blur-3xl"></div>

      <div class="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div class="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg mb-10 border border-white/20">
          <div class="flex flex-col md:flex-row items-center justify-center gap-8">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-md opacity-40 -m-1"></div>
              <img
                src={myData.photo}
                alt={myData.name}
                class="relative w-40 h-40 rounded-full border-4 border-white/80 shadow-xl shadow-blue-200/50 object-cover transition-all hover:scale-105 duration-300"
              />
            </div>
            <div class="text-center md:text-left">
              <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
                {myData.name}
              </h1>
              <p class="text-gray-600 mt-2">
                {myData.location} • {myData.age} anos
              </p>

              {/* Contact Information in header */}
              <div class="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
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
                {/* <A
                  target="_blank"
                  href={myData.contact.website}
                  class="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-blue-50 backdrop-blur-sm hover:-translate-y-1"
                >
                  <FiGlobe class="text-blue-600" size={18} />
                  <span class="text-sm">Website</span>
                </A> */}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div class="bg-white/70 backdrop-blur-md rounded-2xl p-8 mb-8 shadow-lg border border-white/20">
          <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">
            Ferramentas Google
          </h2>
          <div class="flex flex-wrap gap-5 justify-center">
            <Index each={myData.techSkills}>
              {(skill) => (
                <SkillIcon
                  name={skill().name}
                  link={skill().link}
                  icon={skill().icon}
                  glowColor={skill().glowColor || "rgba(236, 72, 153, 0.4)"}
                />
              )}
            </Index>
          </div>
        </div>

        {/* Timeline for Experience and Education */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <div class="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 relative overflow-hidden border border-white/20">
            <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-cyan-600"></div>
            <h2 class="text-2xl font-bold mb-6 text-blue-700 pl-3">
              Experiência Profissional
            </h2>
            <div class="space-y-6 relative">
              <Index each={myData.jobs}>
                {(job, index) => (
                  <div class="relative pl-6">
                    <div class="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 shadow-md shadow-blue-300"></div>
                    {index < myData.jobs.length - 1 && (
                      <div class="absolute left-[6px] top-5 w-[1px] h-[calc(100%-8px)] bg-blue-200/80"></div>
                    )}
                    <div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-x-1 border border-white/20">
                      <h3 class="font-bold text-lg text-blue-700">
                        {job().title}
                      </h3>
                      <p class="text-gray-600 font-medium">{job().company}</p>
                      <p class="text-gray-500 text-sm mb-2">{job().date}</p>
                      <p class="text-pretty text-gray-700">
                        {job().description}
                      </p>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </div>

          {/* Academic and Other Skills */}
          <div class="space-y-8">
            {/* Academic */}
            <div class="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 relative overflow-hidden border border-white/20">
              <div class="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>
              <h2 class="text-2xl font-bold mb-6 text-blue-700 pr-3 text-right">
                Formação Acadêmica
              </h2>
              <div class="space-y-4">
                <Index each={myData.education}>
                  {(education) => (
                    <div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-x-1 border border-white/20">
                      <h3 class="font-bold text-lg text-blue-700">
                        {education().name}
                      </h3>
                      <p class="text-gray-600">{education().location}</p>
                      <p class="text-gray-500 text-sm">{education().date}</p>
                    </div>
                  )}
                </Index>
              </div>
            </div>

            {/* Additional Skills */}
            <div class="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 relative overflow-hidden border border-white/20">
              <div class="absolute top-0 left-0 md:left-auto md:right-0 w-2 h-full bg-gradient-to-b from-blue-400 to-cyan-600"></div>
              <h2 class="text-2xl font-bold mb-6 text-blue-700 pr-3 text-left md:text-right">
                Certificações e Habilidades
              </h2>
              <div class="space-y-4">
                <Index each={myData.skills}>
                  {(skill) => (
                    <div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-x-1 border border-white/20">
                      <div class="flex justify-between items-center">
                        <h3 class="font-bold text-lg text-blue-700">
                          {skill().name}
                        </h3>
                        <span
                          class={`bg-gradient-to-r ${
                            skill().level !== "Certificado"
                              ? "from-blue-500/20 to-cyan-500/30 text-blue-700"
                              : "from-cyan-200 to-cyan-200 text-cyan-700"
                          } px-2 py-0.5 rounded-full text-sm border border-white/20`}
                        >
                          {skill().level}
                        </span>
                      </div>
                      <p class="text-gray-700 mt-1">{skill().description}</p>
                    </div>
                  )}
                </Index>
              </div>
            </div>
          </div>
        </div>

        {/* Return to home button */}
        <div class="mt-12 text-center">
          <A
            href="/"
            class="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-300/50 inline-flex items-center gap-2 font-medium"
          >
            <span>Voltar à página inicial</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </A>
        </div>
      </div>
    </main>
  );
}

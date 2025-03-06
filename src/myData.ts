import {
  SiGoogle,
  SiGooglecalendar,
  SiGooglechat,
  SiGoogleclassroom,
  SiGoogledrive,
  SiGooglekeep,
  SiGooglemeet,
  SiGooglesheets,
} from "solid-icons/si";

function getCurrentAge() {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();
  let birthMonth = 6;
  let birthDay = 10;
  let year = 1976;
  let age = new Date().getFullYear() - year;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

export default {
  name: "Sílvia Seabra",
  jobTitle: "Coordenadora de Tecnologia Educacional",
  photo: "https://github.com/SilviaaSeabra.png",
  bio: "Profissional com vasta experiência em trabalho em equipe, gestão de conflitos e otimização do tempo. Liderança inspiradora e paixão por tecnologia, aliadas a um forte desempenho em sala de aula, com destaque no ensino de Pensamento Computacional para os anos finais e regência de sala nos anos iniciais",
  location: "Vila das Belezas - São Paulo - SP",
  age: getCurrentAge(),
  contact: {
    email: "lssil241009@gmail.com",
    website: "https://lzart.com.br",
    github: "https://github.com/SilviaaSeabra",
    linkedin:
      "https://www.linkedin.com/in/s%C3%ADlvia-andr%C3%A9a-ferreira-seabra-559457253",
  },
  education: [
    {
      name: "Pós Graduação - Psicopedagogia",
      location: "Instituto Singularidades",
      date: "2024",
    },
    {
      name: "Pós Graduação - Gestão de Pessoas",
      location: "UNITALO",
      date: "2009",
    },
    {
      name: "Graduação - Pedagogia",
      location: "UNITALO",
      date: "2006",
    },
  ],
  jobs: [
    {
      date: "Janeiro/2025 - atual",
      title: "Coordenadora de Tecnologia Educacional",
      company: "Colégio internacional Emece",
      description: null,
    },
    {
      date: "Janeiro/2017 - Janeiro/2025",
      title: "Professora Educação Fundamental I",
      company: "Colégio internacional Emece",
      description: null,
    },
    {
      date: "Agosto/2016 - Dezembro/2016",
      title: "Professora Educação Fundamental I (Integral)",
      company: "Colégio CRIEM",
      description: null,
    },
    {
      date: "Agosto/2016 - Dezembro/2016",
      title: "Professora Educação Fundamental I – Integral",
      company: "Governo do Estado de São Paulo",
      description: null,
    },
    {
      date: "Janeiro/2014 – Dezembro/2016",
      title: "Professora Educação Fundamental I (3° e 4° ano)",
      company: "Governo do Estado de São Paulo",
      description: null,
    },
    {
      date: "Janeiro/2012 – Janeiro/2015",
      title: "Professora Assistente (1° ao 4° ano)",
      company: "Colégio Visconde de Porto Seguro",
      description: null,
    },
    {
      date: "Novembro/2008 - Novembro/2015",
      title: "Backup coordenação",
      company: "Itaú Unibanco Seguros - Escola Itaú Unibanco de Negócios",
      description: null,
    },
    {
      date: "Janeiro/2005 – Dezembro/2007",
      title: "Professora - Treinamento Gerencial",
      company: "Volkswagen Serviços Financeiros",
      description: null,
    },
  ],
  techSkills: [
    {
      name: "Agenda",
      icon: SiGooglecalendar,
      link: "https://calendar.google.com/",
      glowColor: "shadow-yellow-500",
    },
    {
      name: "Chat",
      icon: SiGooglechat,
      link: "https://chat.google.com/",
      glowColor: "shadow-green-500",
    },
    {
      name: "Classroom",
      icon: SiGoogleclassroom,
      link: "https://classroom.google.com/",
      glowColor: "shadow-green-500",
    },
    {
      name: "Docs",
      icon: SiGoogle,
      link: "https://docs.google.com/",
      glowColor: "shadow-purple-300",
    },
    {
      name: "Drive",
      icon: SiGoogledrive,
      link: "https://drive.google.com/",
      glowColor: "shadow-blue-500",
    },
    {
      name: "Keep",
      icon: SiGooglekeep,
      link: "https://keep.google.com/",
      glowColor: "shadow-yellow-500",
    },
    {
      name: "Meet",
      icon: SiGooglemeet,
      link: "https://meet.google.com/",
      glowColor: "shadow-green-500",
    },
    {
      name: "Planilhas",
      icon: SiGooglesheets,
      link: "https://sheets.google.com/",
      glowColor: "shadow-green-500",
    },
  ],
  skills: [
    {
      name: "Inglês",
      level: "Intermediario",
      description: "Conversação, escrita e leitura.",
    },
    {
      name: "Foreducation Professor Embaixador",
      level: "Certificado",
      description:
        "Desenvolvimento de habilidades para o uso de tecnologias em sala de aula, com certificação, oficinas práticas e troca de experiências entre professores.",
    },
    {
      name: "Google Certified Educator L2",
      level: "Certificado",
      description:
        "Conhecida como nível avançado, valida a capacidade de usar as ferramentas do Google em sala de aula, com clareza e facilidade.",
    },
    {
      name: "Google Certified Educator L1",
      level: "Certificado",
      description:
        "Certificação que valida o uso básico de ferramentas do Google em sala de aula.",
    },
    {
      name: "Google Certified Trainer",
      level: "Certificado",
      description:
        "Os Instrutores certificados auxiliam os educadores a conhecer e usar os produtos do Google for Education para tornar a sala de aula mais eficiente, melhorar os resultados dos alunos e desenvolver habilidades de liderança.",
    },
  ],
};

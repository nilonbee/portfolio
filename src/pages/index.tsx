import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "@/components/about";
import WorkExperience from "@/components/workExperience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ContactMe from "@/components/contectMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, socials, skills, experiences, projects }: Props) => {
  return (
    <div className="flex-col items-center bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-[#F7AB0A]">
      <div>
        <Head>
          <title>Nilan-Portifolio</title>
        </Head>

        <Header socials={socials} />
        <section className="snap-start" id="hero">
          <Hero pageInfo={pageInfo} />
        </section>
        <section className="snap-center" id="about">
          <About pageInfo={pageInfo} />
        </section>
        <section className="snap-center" id="experience">
          <WorkExperience experiences={experiences} />
        </section>
        <section className="snap-center" id="skills">
          <Skills skills={skills} />
        </section>
        <section className="snap-start" id="projects">
          <Projects projects={projects} />
        </section>
        <section className="snap-start" id="contact">
          <ContactMe pageInfo={pageInfo} />
        </section>
      </div>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <img
              src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.18169-9/22089526_1648467835228420_7641203793403933790_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGAmp9ZwV9WFB6vV-EZKzORHkSCWfGmSPEeRIJZ8aZI8f1gNL_-eZMl0o9sPddbHEX_3Lh5LCKKDUiw4-9VURhV&_nc_ohc=vWR50v6sIRwAX-bssH4&_nc_oc=AQnZh5uG1aCLoQ5RSjtMbOc_OgFZdyPoit-uo6oe9tqOC1fJTnJvlXZNKOUO4WJVvF4&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfCzu10UcWicrIHmg1EtSP8o-wMvbHPQjXTfPaaFQA_t1w&oe=6472B1C2"
              className="h-16 w-16 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              alt="imgaltex"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      projects,
      skills,
      experiences,
      socials,
    },
  };
};

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();

//   return {
//     props: { pageInfo, projects, socials, experiences, skills },
//     revalidate: 60,
//   };
// };

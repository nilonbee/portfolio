import { Experience } from "../typings";

export const fetchExperiences = async () => {
  // const response = await fetch(`http://localhost:3000/api/getExperiences`);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
  )
  const data = await response.json();
  const experiences: Experience[] = data.experiences;
  console.log("experiences", experiences);
  return experiences;
};

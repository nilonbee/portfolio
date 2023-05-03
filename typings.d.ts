interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: "string";
  url: "string";
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  jobTitle: string;
  isCurrentlyWorkingHere: boolean;
  technologies: Technology[];
  dateEnded: date;
  dateStarted: date;
  points: string[];
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  summery: string;
  technologies: Technology[];
}

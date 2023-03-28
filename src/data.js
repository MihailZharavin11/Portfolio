import NotesImage from "./utils/images/Notes.jpg";
import FakeChatImage from "./utils/images/fakeChat.jpg";
import FilmXImage from "./utils/images/FILMX.jpg";
import RickAndMortyImage from "./utils/images/RickAndMorty.jpg";

export const filmX = {
  type: "CASE STUDY",
  year: "2022",
  title: "FILM X",
  tools: [
    "React",
    "Redux toolkit",
    "TS",
    "Ant Design",
    "FireBase",
    "Axios",
    "Lodash",
    "React-router-dom",
  ],
  description: `On this site you can view movie selections (top movies,popular movies) , 
    find a movie by genre, find a movie by advanced search. 
    You can also register/authorize with Firebase Authentication.
     Each user can mark watched or liked movies, the data is stored in Firebase Realtime DataBase`,
  nextProjectTitle: "RICK & MORTY",
  nextProjectLink: "/rick-morty",
  gitLink: "https://github.com/MihailZharavin11/FilmX",
  webSite: "https://film-x.vercel.app/",
  backgroundColor: "#3d48bf",
  image: FilmXImage,
};

export const rickAndMorty = {
  type: "CASE STUDY",
  year: "2022",
  title: "RICK & MORTY",
  tools: ["React", "MUI", "GraphQL", "Apollo", "classnames"],
  description: `The site where I learned GraphQL, Apollo, GraphQL Code Generator. Also practiced with MUI library. 
  The site is based on the Rick and Morty series. 
  You can search for characters, episodes, search for a specific character or episode.`,
  nextProjectTitle: "NOTES",
  nextProjectLink: "/notes",
  gitLink: "https://github.com/MihailZharavin11/Rick-Morty",
  webSite: "https://rick-morty-snowy-nine.vercel.app/",
  backgroundColor: "#3da8bf",
  image: RickAndMortyImage,
};

export const notes = {
  type: "CASE STUDY",
  year: "2022",
  title: "NOTES",
  tools: [
    "React",
    "Redux toolkit",
    "axios",
    "formik",
    "yup",
    "framer-motion",
    "react-click-away-listener",
    "React-router-dom",
    "TS",
  ],
  description:
    "In which you can create notes, delete, update. Sort notes by folders, filter notes.",
  nextProjectTitle: "FAKE CHAT",
  nextProjectLink: "/fakeChat",
  gitLink: "https://github.com/MihailZharavin11/noteApp",
  webSite: "https://note-app-kappa-eight.vercel.app/",
  backgroundColor: "#e99f5b",
  image: NotesImage,
};

export const fakeChat = {
  type: "CASE STUDY",
  year: "2022",
  title: "FAKE CHAT",
  tools: [
    "React",
    "Redux toolkit",
    "axios",
    "React-router-dom",
    "sass",
    "uuid",
  ],
  description: `In this app you can write a message to the person you are talking to and within 10 seconds you will receive a reply with a Chuck Noris-style joke. 
  Messages are sorted by time, unread messages are marked`,
  gitLink: "https://github.com/MihailZharavin11/Fake-Chat",
  webSite: "https://vercel.com/mihailzharavin11/fakechat",
  backgroundColor: "#763dbf",
  image: FakeChatImage,
};

export const projectItemTop = [
  {
    type: "CASE STUDY",
    year: "2022",
    title: "FILM X",
    tools: ["React"],
    path: "/filmx",
  },
  {
    type: "CASE STUDY",
    year: "2022",
    title: "RICK & MORTY",
    tools: ["React"],
    path: "rick-morty",
  },
];

export const projectItemBottom = [
  {
    type: "<PET PROJECT/>",
    year: "2022",
    title: "NOTES",
    path: "/notes",
  },
  {
    type: "<PET PROJECT/>",
    year: "2022",
    title: "FAKE CHAT",
    path: "/fakeChat",
  },
];

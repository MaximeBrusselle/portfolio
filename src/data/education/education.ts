import BerkenboomLogo from "@/assets/education/bh.jpeg";
import UGentLogo from "@/assets/education/ug.jpg";
import HoGentLogo from "@/assets/education/hg.png";

interface Education {
    id: string;
    institution: Institution;
    description: string;
    title: string;
    steps: string[];
    startYear: number;
    endYear: number;
}

interface Institution {
    id: string;
    name: string;
    imgPath: string;
}

const institutions: Institution[] = [
    {
        id: "1",
        name: "Berkenboom Humaniora",
        imgPath: BerkenboomLogo,
    },
    {
        id: "2",
        name: "Universiteit Gent",
        imgPath: UGentLogo,
    },
    {
        id: "3",
        name: "HoGent",
        imgPath: HoGentLogo,
    },
];

const educations: Education[] = [
    {
        id: "01",
        institution: institutions[0],
        description: "Secundary Education",
        title: "Wiskunde Wetenschappen 8u",
        steps: [],
        startYear: 2014,
        endYear: 2020,
    },
    {
        id: "02",
        institution: institutions[1],
        description: "Academic Bachelor",
        title: "Informatica",
        steps: [],
        startYear: 2020,
        endYear: 2021,
    },
    {
        id: "03",
        institution: institutions[2],
        description: "Professional Bachelor",
        title: "Toegepaste Informatica",
        steps: ["General", "Development", "Mobile & Web Development"],
        startYear: 2021,
        endYear: 2024,
    },
];

export default educations;

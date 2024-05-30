interface Experience {
    id: string;
    title: string;
    description: string;
    technologies: Technology[];
    startYear: number;
    endYear: number;
    company: Company;
}

interface Company {
    id: string;
    name: string;
    imgPath: string;
}

interface Technology {
    id: string;
    name: string;
    imgPath: string;
}
export type { Technology };

const technologies: Technology[] = [
    {
        id: "0",
        name: "Cap(ire)",
        imgPath: "capire.png",
    },
    {
        id: "1",
        name: "Fiori UI5",
        imgPath: "fiori.svg",
    },
    {
        id: "2",
        name: "Flask",
        imgPath: "flask.jpg",
    },
    {
        id: "3",
        name: "Javascript",
        imgPath: "javascript.png",
    },
    {
        id: "4",
        name: "Python",
        imgPath: "python.png",
    },
    {
        id: "5",
        name: "SAP",
        imgPath: "SAP.jpg",
    },
    {
        id: "6",
        name: "Odoo",
        imgPath: "odoo.svg",
    },
    {
        id: "7",
        name: "Qweb",
        imgPath: "qweb.svg",
    },
];

const companies: Company[] = [
    {
        id: "1",
        name: "Flexso Digital",
        imgPath: "flexso.jpg",
    },
    {
        id: "2",
        name: "Joule",
        imgPath: "joulebikes.png",
    },
];

const experiences: Experience[] = [
    {
        id: "01",
        company: companies[1],
        description: "Student Job",
        title: "IT Consultant",
        technologies: [technologies[4], technologies[6], technologies[7]].sort((a, b) => a.name.localeCompare(b.name)),
        startYear: 2023,
        endYear: 2023,
    },
    {
        id: "02",
        company: companies[0],
        description: "Internship",
        title: "Full Stack SAP Developer",
        technologies: [technologies[0], technologies[1], technologies[2], technologies[3], technologies[4], technologies[5]].sort((a, b) => a.name.localeCompare(b.name)),
        startYear: 2024,
        endYear: 2024,
    },
];
export default experiences;

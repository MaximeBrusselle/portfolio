interface Language {
    name: string;
    flag: string;
    level: string;
}

const languages: Language[] = [
    {
        name: "Dutch",
        flag: "🇧🇪",
        level: "Native",
    },
    {
        name: "English",
        flag: "🇬🇧",
        level: "C2",
    },
    {
        name: "French",
        flag: "🇫🇷",
        level: "C1",
    },
    {
        name: "German",
        flag: "🇩🇪",
        level: "Notions",
    },
];

interface Skill {
    name: string;
    imgPath: string;
    score: number;
}
export type { Skill };
const skills: Skill[] = [
    {
        name: ".NET",
        imgPath: "dotnet.png",
        score: 7,
    },
    {
        name: "Bash",
        imgPath: "bash.png",
        score: 5,
    },
    {
        name: "C#",
        imgPath: "csharp.png",
        score: 7,
    },
    {
        name: "CAP(ire)",
        imgPath: "capire.png",
        score: 7,
    },
    {
        name: "Fiori UI5",
        imgPath: "fiori.svg",
        score: 7,
    },
    {
        name: "Flask",
        imgPath: "flask.jpg",
        score: 7,
    },
    {
        name: "HTML",
        imgPath: "html.svg",
        score: 9,
    },
    {
        name: "CSS",
        imgPath: "css.png",
        score: 9,
    },
    {
        name: "Javascript",
        imgPath: "javascript.png",
        score: 10,
    },
    {
        name: "Java",
        imgPath: "java.png",
        score: 8,
    },
    {
        name: "Javafx",
        imgPath: "javafx.png",
        score: 7,
    },
    {
        name: "Koa",
        imgPath: "koa.jpg",
        score: 7,
    },
    {
        name: "Kotlin",
        imgPath: "kotlin.png",
        score: 6,
    },
    {
        name: "Markdown",
        imgPath: "markdown.png",
        score: 10,
    },
    {
        name: "MongoDB",
        imgPath: "mongodb.png",
        score: 6,
    },
    {
        name: "Neo4j",
        imgPath: "neo4j.png",
        score: 6,
    },
    {
        name: "Python",
        imgPath: "python.png",
        score: 8,
    },
    {
        name: "Qweb",
        imgPath: "qweb.svg",
        score: 3,
    },
    {
        name: "React",
        imgPath: "react.png",
        score: 9,
    },
    {
        name: "Solidjs",
        imgPath: "solid.svg",
        score: 8,
    },
    {
        name: "Springboot",
        imgPath: "springboot.png",
        score: 6,
    },
    {
        name: "SQL",
        imgPath: "sql.png",
        score: 9,
    },
    {
        name: "Swift",
        imgPath: "swift.svg",
        score: 8,
    },
    {
        name: "SwiftUI",
        imgPath: "swiftui.png",
        score: 8,
    },
    {
        name: "Thymeleaf",
        imgPath: "thymeleaf.png",
        score: 7,
    },
    {
        name: "TypeScript",
        imgPath: "typescript.png",
        score: 9,
    },
    {
        name: "Vite",
        imgPath: "vite.svg",
        score: 7,
    },
];

const tools: Skill[] = [
    {
        name: "Cloud Foundry",
        imgPath: "cloudfoundry.png",
        score: 5,
    },
    {
        name: "Figma",
        imgPath: "figma.png",
        score: 8,
    },
    {
        name: "Intellij",
        imgPath: "intellij.png",
        score: 9,
    },
    {
        name: "MySQL Workbench",
        imgPath: "mysqlworkbench.png",
        score: 7,
    },
    {
        name: "Obsidian",
        imgPath: "obsidian.png",
        score: 8,
    },
    {
        name: "Odoo",
        imgPath: "odoo.svg",
        score: 3,
    },
    {
        name: "Photoshop",
        imgPath: "photoshop.png",
        score: 7,
    },
    {
        name: "PostgreSQL",
        imgPath: "postgresql.png",
        score: 5,
    },
    {
        name: "Postman",
        imgPath: "postman.svg",
        score: 9,
    },
    {
        name: "Premiere Pro",
        imgPath: "premierepro.png",
        score: 7,
    },
    {
        name: "Pycharm",
        imgPath: "pycharm.jpeg",
        score: 8,
    },
    {
        name: "Studio 3T",
        imgPath: "studio3t.webp",
        score: 6,
    },
    {
        name: "Visual Paradigm",
        imgPath: "visualparadigm.jpg",
        score: 7,
    },
    {
        name: "Visual Studio Code",
        imgPath: "vsc.png",
        score: 10,
    },
    {
        name: "Webstorm",
        imgPath: "webstorm.png",
        score: 8,
    },
];

const libraries: Skill[] = [
    {
        name: "Aceternity",
        imgPath: "aceternity.png",
        score: 8,
    },
    {
        name: "Auth0",
        imgPath: "auth0.png",
        score: 7,
    },
    {
        name: "Bootstrap",
        imgPath: "bootstrap.png",
        score: 8,
    },
    {
        name: "Bun",
        imgPath: "bun.svg",
        score: 8,
    },
    {
        name: "DaisyUI",
        imgPath: "daisyui.png",
        score: 8,
    },
    {
        name: "Firebase Auth",
        imgPath: "firebase.png",
        score: 8,
    },
    {
        name: "Firebase Firestore",
        imgPath: "firebase.png",
        score: 8,
    },
    {
        name: "Firebase Hosting",
        imgPath: "firebase.png",
        score: 8,
    },
    {
        name: "Headless UI",
        imgPath: "headlessui.png",
        score: 7,
    },
    {
        name: "Lucide",
        imgPath: "lucide.png",
        score: 8,
    },
    {
        name: "Material UI",
        imgPath: "mui.png",
        score: 7,
    },
    {
        name: "Numpy",
        imgPath: "numpy.svg",
        score: 5,
    },
    {
        name: "Pandas",
        imgPath: "pandas.png",
        score: 5,
    },
    {
        name: "Radix UI",
        imgPath: "radix.svg",
        score: 6,
    },
    {
        name: "SAP Cloud SDK",
        imgPath: "sapcloud.png",
        score: 6,
    },
    {
        name: "Scipy",
        imgPath: "scipy.png",
        score: 5,
    },
    {
        name: "Seaborn",
        imgPath: "seaborn.svg",
        score: 5,
    },
    {
        name: "Shadcn",
        imgPath: "shadcn.png",
        score: 9,
    },
    {
        name: "Tailwindcss",
        imgPath: "tailwindcss.png",
        score: 9,
    },
];

const amountOfSkills = skills.length + tools.length + libraries.length;

export { skills, tools, libraries, languages, amountOfSkills };

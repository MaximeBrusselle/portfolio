interface Experience {
    id: string;
    title: string;
    description: string;
    technologies: Technology[];
    startDate: Date;
    endDate: Date;
    company: Company;
}

interface Technology {}
interface Company {
    id: string;
    name: string;
    imgPath: string;
}

const experiences: Experience[] = [];
export default experiences;

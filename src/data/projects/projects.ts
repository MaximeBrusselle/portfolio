interface Project {
    id: string;
    name: string;
    description: string;
    company: Company | string;
    dateFinished: Date;
    imgPaths: string[];
    technologies: Technology[];
}
interface Company {}
interface Technology {}

const projects: Project[] = [];
export default projects;

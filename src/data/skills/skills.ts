import { Technology } from "@/data/experience/experience";

type Skill = Technology & {
    stars: number;
    learning: boolean;
}

const skills: Skill[] = [];
export default skills;

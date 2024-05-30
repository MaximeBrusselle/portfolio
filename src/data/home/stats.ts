import { amountOfSkills } from "@/data/skills/skills";

interface Stat {
    title: string;
    value: number;
}

export const stats: Stat[] = [
    {
        title: "Technologies Learned",
        value: amountOfSkills,
    },
    {
        title: "Projects Completed",
        value: 8,
    },
    {
        title: "Years of Experience",
        value: calculateYearsOfExperience(),
    },
    {
        title: "Years of Age",
        value: calculateAge(),
    },
];

function calculateAge(): number {
    const today = new Date();
    const birthDate = new Date("2002/07/12");
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

function calculateYearsOfExperience(): number {
    const today = new Date();
    const startDate = new Date("2024/01/01");
    return today.getFullYear() - startDate.getFullYear() + 1;
}

interface Stat {
    title: string;
    value: number;
}

export const stats: Stat[] = [
    {
        title: "Technologies Learned",
        value: 34,
    },
    {
        title: "Projects Completed",
        value: 8,
    },
    {
        title: "Years of Experience",
        value: 1,
    },
    {
        title: "Years of Age",
        value: calculateAge(),
    }
];

function calculateAge(): number {
    const today = new Date();
    const birthDate = new Date("2002/07/12");
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
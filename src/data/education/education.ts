interface Education {
    id: string;
    institution: Institution;
    steps: EducationStep;
    description: string;
    startDate: Date;
    endDate: Date;
}

interface EducationStep {
    name: string;
    startYear: Date;
    endYear: Date;
}

interface Institution {
    id: string;
    name: string;
    imgPath: string;
}

const educations: Education[] = [];

export default educations;

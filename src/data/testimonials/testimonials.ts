interface Testimonial {
    content: string;
    person: Person;
}

interface Person {
    name: string;
    imgPath: string;
}

const testimonials: Testimonial[] = [
    {
        content:
            "This guy is making my dreams come true!",
        person: {
            name: "Salvador Garcia",
            imgPath: "salvador.jpeg",
        },
    },
    {
        content:
            "Maxime is a very fun person to work with. He is always searching for new ways to improve his skills and is always willing to help others.",
        person: {
            name: "Sander Anthierens",
            imgPath: "sander.jpeg",
        },
    },
    {
        content:
            "As Maxime's mentor during his internship, I can say that he is a very talented developer willing to learn new things.",
        person: {
            name: "Maarten Peeters",
            imgPath: "maarten.jpeg",
        },
    },
    {
        content:
            "Maxime really makes sure he understands what the code does before he starts using it. He is a very good developer and a great person to work with.",
        person: {
            name: "Abdessamad Choukri",
            imgPath: "abdessamad.jpeg",
        },
    },
];
export default testimonials;

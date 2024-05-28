interface Testimonial {
	id: string;
	content: string;
	person: Person;
}

interface Person {
	id: string;
	name: string;
	imgPath: string;
}

const testimonials: Testimonial[] = [];
export default testimonials;

import { MainLayout } from "@/layouts/MainLayout";
import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { Home } from "@/pages/home/Home";
import { Education } from "@/pages/education/Education";
import { Contact } from "@/pages/contact/Contact";
import { Experience } from "@/pages/experience/Experience";
import { Skills } from "@/pages/skills/Skills";
import { Testimonials } from "@/pages/testimonials/Testimonials";
import { Projects } from "@/pages/projects/Projects";
import { Component } from "solid-js";

function App() {
    return (
        <Router root={MainLayout as Component<RouteSectionProps<unknown>>}>
            <Route path="/" component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/contact" component={Contact} />
        </Router>
    );
}

export default App;

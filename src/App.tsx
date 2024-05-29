import { MainLayout } from "@/layouts/MainLayout";
import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { Home } from "@/pages/Home";
import { Education } from "@/pages/Education";
import { Contact } from "@/pages/Contact";
import { Experience } from "@/pages/Experience";
import { Skills } from "@/pages/Skills";
import { Testimonials } from "@/pages/Testimonials";
import { Projects } from "@/pages/Projects";
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

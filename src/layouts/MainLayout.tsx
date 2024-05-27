import { Header } from "@/components/Header";
import { JSXElement } from "solid-js";

interface MainLayoutProps {
    children: JSXElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { children } = props;
	return (
		<div class="w-screen h-screen">
			<Header />
			{children}
		</div>
	);
};

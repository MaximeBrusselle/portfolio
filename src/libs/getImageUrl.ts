export function getImageUrl(type: string, image: string): string {
	if (type === "") return new URL(`../assets/${image}`, import.meta.url).href;
	return new URL(`../assets/${type}/${image}`, import.meta.url).href;
}
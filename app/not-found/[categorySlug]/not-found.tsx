import { Boundary } from "#/ui/boundary";

export default function NotFound() {
	return (
		<Boundary labels={["./[categorySlug]/not-found.tsx"]} color="pink">
			<div className="space-y-3 text-vercel-pink">
				<h2 className="font-bold text-lg">Category Not Found</h2>

				<p className="text-sm">Could not find requested resource</p>
			</div>
		</Boundary>
	);
}

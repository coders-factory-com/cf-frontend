import UserContentNavigation from "@/components/wrappers/UserContentNavigation";

export default function UserContentLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<UserContentNavigation />
			{children}
		</main>
	);
}

import LoginForm from "@/components/Forms/LoginForm";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Login | Wallpaper App",
	description: "Login page of Wallpaper App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Welcome Back👋
					</CardTitle>
					<LoginForm />
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter className="gap-1 text-center">
					Don&apos;t have an account?{" "}
					<Link
						href={"/auth/register"}
						className="text-primary underline">
						Register
					</Link>
					Now
				</CardFooter>
			</Card>
		</section>
	);
};

export default page;

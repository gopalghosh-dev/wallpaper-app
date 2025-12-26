import RegisterForm from "@/components/Forms/RegisterForm";
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
	title: "Register | Wallpaper App",
	description: "Register page of Wallpaper App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Join With Us 👍
					</CardTitle>
					<RegisterForm />
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter className="gap-1 text-center">
					Already have an account?{" "}
					<Link
						href={"/auth"}
						className="text-primary underline">
						Login
					</Link>
					Now
				</CardFooter>
			</Card>
		</section>
	);
};

export default page;

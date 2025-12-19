import z from "zod";

export const loginSchema = z.object({
	email: z.email("You have typed an invalid email address"),
	password: z.string().min(8, "Password should be needed 8 character"),
	rememberMe: z.boolean(),
});

export const registerSchema = z
	.object({
		name: z.string().min(6, "Enter your name"),
		email: z.email("You have typed an invalid email address"),
		password: z.string().min(8, "Password must be minimum 8 character"),
		confirmPassword: z
			.string()
			.min(8, "Confirm password must be minimum 8 character"),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		error: "Password didn't match",
	});

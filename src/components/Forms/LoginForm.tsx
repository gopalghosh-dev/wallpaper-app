"use client";

import { loginSchema, LoginSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginForm = () => {
	const { handleSubmit } = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
			rememberMe: true,
		},
		mode: "all",
	});

	const loginFormHandeler = (loginFormData: LoginSchemaType) => {
		console.log(loginFormData);
	};

	return (
		<form
			onSubmit={handleSubmit(loginFormHandeler)}
			className=""
			noValidate></form>
	);
};

export default LoginForm;

import { z } from "zod";

export const UserLogin = z.object({
    email: z.string().email({
        message: "Invalid email format, please check and try again",
    }),
    password: z.string()
});

export type UserLoginType = z.infer<typeof UserLogin>;

export const UserSignup = z.object({
    email: z.string().email(
        {
            message: "Invalid email format, please check and try again",
        }
    ),
    password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long",
        })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
        }),
    confirmPassword: z.string().refine((data) => data === data, {
        message: "Passwords do not match",
    }),
});


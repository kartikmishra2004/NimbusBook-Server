import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string({ required_error: "Name is required!!" })
        .trim()
        .min(3, { message: "Name must be atleast 3 characters long!!" })
        .max(30, { message: "Name cannot be more than 30 characters!!" }),
    email: z
        .string({ required_error: "Email is required!!" })
        .trim()
        .email({ message: "Invalid email address!!" })
        .min(3, { message: "Email must be at lease 3 characters long!!" })
        .max(30, { message: "Email cannot be more than 30 characters!!" }),
    message: z
        .string({ required_error: "Message can't be empty!!" })
        .trim()
        .min(3, { message: "Message can't be empty!!" }),
});

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required!!" })
        .trim()
        .email({ message: "Invalid email address!!" })
        .min(3, { message: "Email must be at lease 3 characters long!!" })
        .max(30, { message: "Email cannot be more than 30 characters!!" }),
    password: z
        .string({ required_error: "Password is required!!" })
        .trim()
        .min(5, { message: "Password must be atleast 5 character long!!" })
        .max(30, { message: "Password cannot be more than 30 characters!!" }),
});

export const signupSchema = z.object({
    fullName: z
        .string({ required_error: "Name is required!!" })
        .trim()
        .min(3, { message: "Name must be atleast 3 characters long!!" })
        .max(30, { message: "Name cannot be more than 30 characters!!" }),
    email: z
        .string({ required_error: "Email is required!!" })
        .trim()
        .email({ message: "Invalid email address!!" })
        .min(3, { message: "Email must be at lease 3 characters long!!" })
        .max(30, { message: "Email cannot be more than 30 characters!!" }),
    password: z
        .string({ required_error: "Password is required!!" })
        .trim()
        .min(5, { message: "Password must be atleast 5 character long!!" })
        .max(30, { message: "Password cannot be more than 30 characters!!" }),
});
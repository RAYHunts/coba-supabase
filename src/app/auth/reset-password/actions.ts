"use server"

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function validateCode(code: string) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
        console.log(error);
        return error.message;
    }
    return data;
}

export async function resetPassword(password: string) {
    const { error } = await supabase.auth.updateUser({
        password,
    });

    if (error) {
        console.log(error);
        return error.message;
    }
}

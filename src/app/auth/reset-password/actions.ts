"use server"

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function validateToken(token: string) {
    // const { error } = await supabase.auth.signInWithIdToken({ access_token: token });
    // if (error) {
    //     return error.message;
    // }
    console.log(token);
}

export async function resetPassword(password: string, token: string) {
    const { error } = await supabase.auth.updateUser({ password: password })
    if (error) {
        return error.message;
    }
}

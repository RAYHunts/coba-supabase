'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function requestPasswordReset(formData: FormData) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const email = formData.get('email') as string;

    const { error } = await supabase.auth.resetPasswordForEmail(email
        , {
            redirectTo: process.env.NEXT_PUBLIC_BASE_URL + '/auth/reset-password',
        }
    );
    if (error) {
        console.log(error);
        return error.message;
    }

    revalidatePath('/auth/login', 'layout');
    redirect('/auth/login');
}
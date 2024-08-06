'use server';

import { createClient } from '@/utils/supabase/server';

export async function upload(formData: FormData) {
    const supabase = createClient();
    const image = formData.get('image') as Blob;
    const { data, error } = await supabase.storage.from('images').upload('cicak.webp', image);

    if (error) {
        console.log(error);
    }

    if (data) {
        console.log(data);
    }
}

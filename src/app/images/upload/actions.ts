'use server';

import { createClient } from '@/utils/supabase/server';

export async function upload(formData: FormData) {
    const supabase = createClient();
    const image = formData.get('image') as Blob;
    const fileType = image.type.split('/')[1];
    const imageName = new Date().getTime() + '.' + fileType;

    const { data, error } = await supabase.storage.from('blog').upload('image/' + imageName, image);

    if (error) {
        console.log(error);
    }

    if (data) {
        console.log(data);
    }
}

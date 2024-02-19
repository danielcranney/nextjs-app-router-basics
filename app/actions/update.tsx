'use server'

import { revalidatePath } from "next/cache"
 
export async function update(e: any) {
    'use server'
   
    // You could mutate formData in here, or post to a database.

    // Revalidate the cache
    revalidatePath('/')
  }
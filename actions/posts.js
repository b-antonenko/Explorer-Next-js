'use server';
import { uploadImage } from "@/lib/cloudinary";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export const createPost = async (prevState, formData) => {
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    const errors = [];

    if (!title || !image || !content) {
      errors.push('All fields are required.');
    }

    if (errors.length > 0) {
      return { errors };
    }
    
    let url;

    try {
        url = await uploadImage(image);
    } catch (error) {
        throw new Error('Image upload failed. Please try again.');
    }

    await storePost({ imageUrl: url, content, title, userId: 1 });

    redirect('/feed');
  };
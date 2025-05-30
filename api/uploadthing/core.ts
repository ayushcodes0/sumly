import { metadata } from "@/app/layout";
import { currentUser } from "@clerk/nextjs/server";
import {UploadThingError } from "uploadthing/server";
import { type FileRouter, createUploadthing, } from "uploadthing/next"


const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader : f({pdf: {maxFileSize: '32MB'}}).
    middleware(
        async({req}) => {
            //get user info
            const user = await currentUser();
            if(!user) throw new UploadThingError("Unauthorized");
            return {userId: user.id}
        }
    ).onUploadComplete(async({metadata,file})=>{
        console.log("upload completed for userId: ", metadata.userId);
        console.log("file url: ", file.key)
        return {userId: metadata.userId, file: file.key}
    })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
import { type FileRouter, createUploadthing } from "uploadthing/next";

const f = createUploadthing();

// const handleAuth = async () => {
// 	return {true}
// };

export const ourFileRouter = {
	sectionImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
		// .middleware(() => handleAuth())
		.onUploadComplete(() => {}),

	sectionVideo: f({ video: { maxFileSize: "128MB", maxFileCount: 1 } })
		// .middleware(() => handleAuth())
		.onUploadComplete(() => {})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

export type OurFileEndpoint = keyof typeof ourFileRouter;

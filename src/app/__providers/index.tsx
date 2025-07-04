import { ReactNode } from "react";

import { Toaster } from "@/shared/ui";

import { ThemeProvider } from "./withTheme";

interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
			<Toaster />
		</ThemeProvider>
	);
};

export default Providers;

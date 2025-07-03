import { ReactNode } from "react";

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
		</ThemeProvider>
	);
};

export default Providers;

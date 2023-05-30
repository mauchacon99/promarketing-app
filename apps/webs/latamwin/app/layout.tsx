import 'ui-latamwin/src/styles.scss';

/**
 * RootLayout.
 * 
 * @param props Props.
 * @param props.children JSX.Element.
 * @returns JSX.Element.
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

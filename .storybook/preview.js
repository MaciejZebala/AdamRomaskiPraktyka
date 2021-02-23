import GlobalStyle from '../src/theme/GlobalStyle';
import React from 'react';
import { theme } from '../src/theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';

// addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

export const decorators = [
	(story) => (
		<ThemeProvider theme={theme}>
			{story()}
			{/* <Story /> */}
		</ThemeProvider>
	),
];

// export const decorators = (story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>;

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};

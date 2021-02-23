import React from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<>
				<h1>Siema Maciek</h1>
				<Button>Close / Save</Button>
				<Button secondary>remove</Button>
			</>
		</ThemeProvider>
	</>
);

export default Root;

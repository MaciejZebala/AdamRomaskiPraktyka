import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: ${({ theme }) => theme.note};
	width: 220px;
	height: 47px;
	border: none;
	border-radius: 50px;
	cursor: pointer;
	text-transform: uppercase;
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 16px;

	${({ secondary }) =>
		secondary &&
		css`
			height: 30px;
			width: 105px;
			background-color: #e6e6e6;
			font-size: 10px;
		`}
`;

export default Button;

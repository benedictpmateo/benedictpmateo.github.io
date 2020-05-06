import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	width: 100%;
`;

const CardBody = styled.div`
	background: ${props => props.theme.colors.card};
	border-radius: 8px;
	padding-top: 40px;
	margin-bottom: 24px;
	transition: transform .2s ease-in-out;
	position: relative;
	width: 100%;
	h3 {
		color: ${props => props.theme.colors.primary};
	}
	h3, p {
		letter-spacing: 0.05em;
		padding: 0 40px;
		margin: 0;
	}
	.image {
		align-items: center;
		background: ${props => props.background};
		border-radius: 8px 0px 8px 0px;
		display: flex;
		min-height: 164px;
		justify-content: center;
		margin-left: 40px;
		margin-top: 24px;
		width: calc(100% - 40px);
		padding: 40px;
		img {
			width: 100%;
		}
	}
	&:hover {
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
		@media (min-width: 992px) {
			transform: scale(1.1);
		}
		z-index: 1;
	}

`;

const ProjectCard = ({ title, subtitle, image, background }) => (
	<Card className="col-12 col-md-6">
		<CardBody background={background}>
			<h3>{title}</h3>
			<p>{subtitle}</p>
			<div className="image">
				<img src={image} alt=""/>
			</div>
		</CardBody>
	</Card>
);

export default ProjectCard;
import { Text, Box, Container } from '@chakra-ui/layout'

import styled from 'styled-components'

const Arrow = styled.div`
	#arrowAnim {
		display: block;
		justify-content: center;
		align-items: center;
	}

	.arrow {
		width: 10px;
		height: 10px;
		border: 5px solid;
		border-color: white transparent transparent white;
		transform: rotate(-135deg);
		padding: 1px;
	}

	.arrowSliding {
		position: absolute;
		-webkit-animation: slide 2s ease-in infinite;
		animation: slide 2s linear infinite;
	}

	@keyframes slide {
		0% {
			opacity: 0;
			transform: translateY(3vh);
		}
		20% {
			opacity: 1;
			transform: translateY(4vh);
		}
		80% {
			opacity: 1;
			transform: translateY(8vh);
		}
		100% {
			opacity: 0;
			transform: translateY(10vh);
		}
	}
`

const Arrows = () => {
	return (
		<div>
			<Arrow>
				<div id='arrowAnim'>
					<div className='arrowSliding'>
						<div className='arrow'></div>
					</div>
				</div>
			</Arrow>
		</div>
	)
}

const Header = (props: any) => {
	return (
		<Box>
			<Container fontWeight='600' textAlign='right' p='80px'>
				<Box fontSize='4em'>Hi, I'm Stuart Leach</Box>

				<Box>
					<Text align='right' fontSize=''>
						<code>
							<Text
								fontSize='em'
								// mt='100px'
								textAlign='right'
								position='static'
							>
								software engineer
								<br />
								<br />
								pancake scientist
							</Text>
						</code>
						<Box float='right' mr='40px' mt='-20px'>
							<Arrows />
						</Box>
					</Text>
				</Box>
			</Container>
		</Box>
	)
}

export default Header

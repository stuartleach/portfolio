import { Text, Box, Container } from '@chakra-ui/layout'

const Header = () => {
	return (
		<Box>
			<Container fontWeight='600' fontSize='8vw' mt='20vh'>
				<Box letterSpacing='-0.222vw'>Hi, I'm Stuart Leach</Box>
				<Box>
					<Text align='left' fontSize='3vw'>
						<code>
							<Text
								fontSize='20px'
								// mt='100px'
								textAlign='right'
								position='static'
							>
								full-stack react developer
								<br />
								<br />
								pancake scientist
							</Text>
						</code>
					</Text>
				</Box>
			</Container>
		</Box>
	)
}

export default Header

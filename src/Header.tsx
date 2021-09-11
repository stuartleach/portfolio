import { Text, Box, Container } from '@chakra-ui/layout'

const Header = () => {
	return (
		<Box>
			<Container fontWeight='600' mt='20vh' textAlign='right' p='80px'>
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

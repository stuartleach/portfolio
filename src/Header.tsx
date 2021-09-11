import { Text, Box } from '@chakra-ui/layout'

const Header = () => {
	return (
		<Box>
			<Text
				fontWeight='600'
				fontSize='8vw'
				letterSpacing='-0.222vw'
				mt='20vh'
			>
				Hi, I'm Stuart Leach
			</Text>
			<Text align='left' fontSize='3vw'>
				<code>
					<Text
						fontSize='20px'
						mt='-100px'
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
	)
}

export default Header

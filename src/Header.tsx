import { Text, Box, Container } from '@chakra-ui/layout'

import styled from 'styled-components'

const Header = (props: any) => {
	return (
		<Container fontWeight='600' textAlign='right' p='80px'>
			<Box fontSize='4em'>
				<Text>
					Hi, I'm Stuart Leach
				</Text>
			</Box>
		</Container>
	)
}

export default Header

import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { JsxElement } from 'typescript'
import {
	Box,
	Button,
	ThemeProvider,
	Circle,
	Link,
	Center,
	Text,
	ChakraProvider,
	Image,
} from '@chakra-ui/react'
import Header from './Header'
import faceThing from './wFA9wU01.svg'
import backgroundThing from './Wave-10s-1323px.svg'
import Footer from './Footer'

import Works from './Works'

function App(props: object): JSX.Element {
	return (
		<Box color='white' fontFamily='roboto'>
			<Box
				className='App'
				backgroundImage={backgroundThing}
				backgroundPosition='top'
				backgroundSize='cover'
				backgroundRepeat='no-repeat'
				height='200vh'
				zIndex='-1'
			>
				<Image
					height='200px'
					borderRadius='100%'
					position='fixed'
					zIndex='-2'
					src={faceThing}
				></Image>
				<Center>
					<Header />
				</Center>
				<Works />
				<Box
					position='absolute'
					bottom='0px'
					width='100%'
					p='0'
					display='flex'
					maxHeight='50%'
				></Box>
			</Box>
			<Box position='relative' marginBottom='40px'>
				<Footer />
			</Box>
		</Box>
	)
}

export default App

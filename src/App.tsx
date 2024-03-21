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
import backgroundThing from './bg1.svg'
import Footer from './Footer'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Works from './Works'

function App(props: object): JSX.Element {
	return (
		<Box>
	
				<Box color='white' fontFamily='roboto'>
					<Box
						className='App'
						backgroundImage={backgroundThing}
						backgroundPosition=''
						backgroundSize='auto 100%'
						bgColor='black'
						backgroundRepeat='no-repeat'
						height='1000vh'
						zIndex='-1'
					>
					
							<Center>
								<Header />
							</Center>


						<Works />
					</Box>
				</Box>
					<Footer />
		</Box>
	)
}

export default App

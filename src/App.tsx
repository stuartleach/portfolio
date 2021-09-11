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
		<Parallax pages={2} style={{ top: '0', left: '0' }}>
			<Box color='white' fontFamily='roboto'>
				<Box
					className='App'
					backgroundImage={backgroundThing}
					backgroundPosition='top'
					backgroundSize='cover'
					bgColor='black'
					// backgroundRepeat='no-repeat'
					height='200vh'
					zIndex='-1'
				>
					<ParallaxLayer
						offset={0}
						speed={-2.5}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Center>
							<Header />
						</Center>
					</ParallaxLayer>

					<ParallaxLayer
						offset={1}
						speed={1.5}
						style={{
							display: 'block',
							justifyContent: 'center',
							alignItems: 'center',
							color: 'white',
						}}
					>
						<Works />

						<Box position='relative' marginTop='10vh'>
							<Footer />
						</Box>
					</ParallaxLayer>
					<ParallaxLayer
						offset={2}
						speed={1.5}
						style={{
							display: 'inline-block',
							justifyContent: 'center',
							alignItems: 'center',
							color: 'white',
						}}
					></ParallaxLayer>
				</Box>
			</Box>
		</Parallax>
	)
}

export default App

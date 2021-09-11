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
			<Parallax pages={2} style={{ top: '0', left: '0' }}>
				<Box color='white' fontFamily='roboto'>
					<Box
						className='App'
						backgroundImage={backgroundThing}
						backgroundPosition='bottom'
						backgroundSize='cover'
						bgColor='black'
						// backgroundRepeat='no-repeat'
						height='300vh'
						zIndex='-1'
					>
						<ParallaxLayer
							offset={0}
							speed={-2.5}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								// height: '100%',
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
								// display: 'block',
								justifyContent: 'center',
								alignItems: 'center',
								color: 'white',
								overflow: 'scroll',
							}}
						>
							<Works />

							<Box position='relative' marginTop='10vh' mb='20px'>
								<Footer />
							</Box>
						</ParallaxLayer>
					</Box>
				</Box>
			</Parallax>
		</Box>
	)
}

export default App

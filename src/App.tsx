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
import Arrows from './Arrows'

function App(props: object): JSX.Element {
	return (
		<Box>
			<Parallax
				pages={4.7}
				style={{
					top: '0',
					left: '0',
				}}
			>
				<Box color='white' fontFamily='roboto'>
					<Box
						className='App'
						backgroundImage={backgroundThing}
						backgroundPosition=''
						backgroundSize='auto 100%'
						bgColor='black'
						backgroundRepeat='no-repeat'
						height='500vh'
						zIndex='-1'
					>
						<ParallaxLayer
							offset={0}
							speed={3}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								position: 'static',
								// height: '100%',
							}}
						>
							<Center>
								<Header Arrows={Arrows} />
							</Center>
						</ParallaxLayer>

						<Works />
					</Box>
				</Box>
				<ParallaxLayer
					offset={4.2}
					speed={1}
					style={
						{
							// display: 'flex',
							// position: 'relative',
							// justifyContent: 'center',
							// alignItems: 'center',
						}
					}
				>
					<Footer />
				</ParallaxLayer>
			</Parallax>
		</Box>
	)
}

export default App

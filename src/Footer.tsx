import React from 'react'
import github from './github.png'
import { Box, Link, Image, Center, Text } from '@chakra-ui/react'
import linkedIn from './linkedin.png'
import spotify from './spotify.png'
import email from './email.png'
import { invert } from 'lodash'
interface footerItem {
	icon: string
	name: string
	url: string
}

export default function Footer() {
	const githubItem: footerItem = {
		icon: github,
		name: 'github',
		url: 'https://github.com/stuartleach',
	}

	const linkedInItem: footerItem = {
		icon: linkedIn,
		name: 'linkedin',
		url: 'https://www.linkedin.com/in/stuart-leach-69182761/',
	}

	const emailItem: footerItem = {
		icon: email,
		name: 'email',
		url: 'mailto:jstuartleach@gmail.com',
	}

	const spotifyItem: footerItem = {
		icon: spotify,
		name: 'spotify',
		url: 'https://bit.ly/leachmusic',
	}

	const footerArray: footerItem[] = [
		githubItem,
		linkedInItem,
		emailItem,
		spotifyItem,
	]

	return (
		<div>
			<Center>
				<Box>
					{footerArray.map((element) => (
						<Box m='10px' float='left' pl='20px' pr='20px'>
							<Link href={element.url}>
								<Image
									w='30px'
									style={{
										transitionDuration: '1s',
										// filter: 'invert(60%) sepia(100%) hue-rotate(180deg)',
									}}
									_hover={{
										opacity: '.5',
									}}
									src={element.icon}
									alt={element.name}
								></Image>
							</Link>
						</Box>
					))}
				</Box>
			</Center>
		</div>
	)
}

import { Box, Container, Center } from '@chakra-ui/layout'
import morningPageBgPic from './mppic.png'
import loveLeachBgPic from './llpic.png'
import scraperBgPic from './scrapepic.png'
import { Image } from '@chakra-ui/image'
import { Grid } from '@chakra-ui/layout'
import { GridItem } from '@chakra-ui/layout'
// import * as chakra from '@chakra-ui/react'
import { createBreakpoints, whiten } from '@chakra-ui/theme-tools'
import { Badge, LinkOverlay, Link, Text, Flex } from '@chakra-ui/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const breakpoints = createBreakpoints({
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
})

interface Work {
	name: string
	liveUrl?: string
	repoUrl: string
	description: string
	cv: string
	iconUrl?: string
	bgPic?: string
}
export default function Works() {
	const morningPage: Work = {
		name: 'Morning Page',
		liveUrl: 'https://morning-page.onrender.com/',
		repoUrl: 'https://github.com/stuartleach/morningpage',
		description:
			'Full-stack journaling application for web and mobile, based on Julia Cameron’s “Morning Pages.”',
		cv: 'Built interface using VanillaJS and migrated to React. Introduced analytics features for users to visualize which words were most frequently used in entry. Created back-end in Firebase, allowing users to log in with Google and save entries.',
		iconUrl: '',
		bgPic: morningPageBgPic,
	}

	const loveLeach: Work = {
		name: 'Artist Website',
		liveUrl: 'https://loveleach.com/',
		repoUrl: 'https://github.com/stuartleach/loveleach',
		description:
			'Artist website to grow band, solidify brand, stream songs, and offer merchandise.',
		cv: 'Built website with React functional components. Used Chakra for style. Used Render’s push-to-deploy feature to go live and push updates.',
		iconUrl: '',
		bgPic: loveLeachBgPic,
	}

	const venueScraper: Work = {
		name: 'Venue Scraper',
		repoUrl: 'https://github.com/stuartleach/venue_scraper',
		description:
			'Node application that scrapes music venue data from across the country and aggregates into a CSV for easily booking clients.',
		cv: 'Used Puppeteer to log in to a music database and collect venue address, booking contact information, and availability. ',
		iconUrl: '',
		bgPic: scraperBgPic,
	}

	const allWorks: Work[] = [morningPage, loveLeach, venueScraper]

	return (
		<Box>
			{allWorks.map((work, i) => (
				<ParallaxLayer
					offset={i + 1.5}
					speed={0.25}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						overflow: 'wrap',
					}}
				>
					<Badge mt='100px'>
						<Box
							m='20px'
							mt='50px'
							borderRadius='20px'
							backgroundPosition='center'
							backgroundSize='cover'
							// height='50vh'
							float='left'
							// w='50vw'
						>
							<Link
								href={
									work.liveUrl ? work.liveUrl : work.repoUrl
								}
							>
								{work.bgPic && (
									<Image
										src={work.bgPic}
										width='70%'
										borderRadius='5%'
										// overflow=''
										// height='10vh'
										// objectFit='scale-down'
										// maxWidth='20vw'

										style={{
											transitionDuration: '1s',
										}}
										_hover={{
											opacity: 0.5,
										}}
									/>
								)}
							</Link>
							<Center>
								<Container
									width='60%'
									wordWrap='break-word'
									whiteSpace='pre-wrap'
								>
									<br />
									<Text
										align='left'
										fontSize='40'
										fontWeight='800'
									>
										{work.name} <br />
									</Text>
									<Text align='left' m='0' p='0'>
										<Link
											textAlign='left'
											// textDecoration='none'
											style={{
												color: 'white',
											}}
											_hover={{ color: 'red' }}
											href={work.repoUrl}
										>
											<code>View code on Github</code>
										</Link>
									</Text>
									<br />
									<Box
										align='left'
										// width='80vw'
										style={{}}
										_hover={{}}
										m='0'
										p='0'
									>
										<Text
											wordWrap='break-word'
											whiteSpace='pre-wrap'
										>
											<em>{work.description}</em>
										</Text>
										<Text
											wordWrap='break-word'
											whiteSpace='pre-wrap'
											fontWeight='500'
										>
											{work.cv}
										</Text>
									</Box>
								</Container>
							</Center>
						</Box>
					</Badge>
				</ParallaxLayer>
			))}
		</Box>
	)
}

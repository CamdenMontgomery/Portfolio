import { Heading, VStack, Text, Stack, Image, Flex, Container } from "@chakra-ui/react"
import LinkedInButton from "../components/linkedin"
import GithubButton from "../components/ui/github"
import TagScroller from "../components/tagscroller"

export default function About() {
    return (
        <VStack>
            <Flex className="screen-block name-plate-container">
                <Heading className="name-plate first">Camden .Kyle</Heading>
                <Heading className="name-plate last">Montgomery</Heading>
                <Stack direction="row" justifyContent="center" paddingTop="3rem">
                    <LinkedInButton></LinkedInButton>
                    <GithubButton></GithubButton>
                </Stack>
            </Flex>
            <Stack className="screen-block">
                <Flex perspective="300px" direction="column">
                    <Heading className="section-header">Who I Am</Heading>
                    <Text className="introduction-text">I’m Camden Montgomery, a recent Computer Science graduate from Florida International University. I’ve been building software since 2018, when I taught myself to code over the summer. Since then, I’ve been focused on creating software that is not only functional but also enjoyable to use and visually appealing.</Text>
                </Flex>
                <Image></Image>
            </Stack>
            <Stack >
                <Flex direction="column">
                    <Heading className="section-header">What I Do</Heading>
                    <Stack direction="row">
                        <Container className="do-section-text-container">
                            <Heading className="do-section-header">UI/UX Designs</Heading>
                            <Text className="do-section-text">“ I find UI design fascinating. the way colors and fonts and the placing of things can draw the eye and evoke emotion. I like playing with different designs and trying to im a bit of a perfectionist in this aspect, i find myself shifting items pixel by pixel when searching for the right placement of things. “</Text>
                        </Container>
                        <Image className="do-section-image" src="/Portfolio/ux.svg"></Image>
                    </Stack>
                    <Stack direction="row-reverse">
                        <Container className="do-section-text-container">
                            <Heading className="do-section-header">Chrome Extensions</Heading>
                            <Text className="do-section-text">“ I find UI design fascinating. the way colors and fonts and the placing of things can draw the eye and evoke emotion. I like playing with different designs and trying to im a bit of a perfectionist in this aspect, i find myself shifting items pixel by pixel when searching for the right placement of things. “</Text>
                        </Container>
                        <Image className="do-section-image" src="/Portfolio/extension.svg"></Image>
                    </Stack>
                    <Stack direction="row">
                        <Container className="do-section-text-container">
                            <Heading className="do-section-header">Mobile Applications</Heading>
                            <Text className="do-section-text">“ I find UI design fascinating. the way colors and fonts and the placing of things can draw the eye and evoke emotion. I like playing with different designs and trying to im a bit of a perfectionist in this aspect, i find myself shifting items pixel by pixel when searching for the right placement of things. “</Text>
                        </Container>
                        <Image className="do-section-image" src="/Portfolio/mobile.svg"></Image>
                    </Stack>
                    <Stack direction="column">
                        <Heading className="do-section-header">& Much More...</Heading>

                        <Image src="/Portfolio/other.svg"></Image>
                    </Stack>
                </Flex>
            </Stack>
            <Stack className="screen-block">
                <Flex direction="column" >
                    <Heading className="section-header">How I Do It</Heading>
                    
                    <Stack direction="column" gap="1rem" perspective="300px">
                    <Text transform="rotateX(335deg)" className="how-section-text">Over the years, I’ve built all kinds of small projects—some to solve everyday problems, others just for fun. In doing so, I naturally picked up a wide mix of skills across different technologies... </Text>
                        <TagScroller tags={tagline1.concat(tagline1)}></TagScroller>
                        <TagScroller tags={tagline2.concat(tagline2)}></TagScroller>
                        <TagScroller tags={tagline3.concat(tagline3)}></TagScroller>
                        <Text transform="rotateX(-335deg)"className="how-section-text">...I don’t follow strict roadmaps or force myself to learn things—I just dive into whatever seems interesting at the time. That curiosity has shaped how I work today: I use whatever tools make the most sense for the project and figure things out as I go.</Text>
                    </Stack>

                </Flex>
                <Image></Image>
            </Stack>
            <Stack className="screen-block">
                <Flex direction="row">
                    <Container className="section-text-container">

                    <Heading className="section-header">Why I Do It</Heading>
                    <Text className="section-text">Life is full of challenges, setbacks, and inconveniences. I first learned to program because I wanted to avoid waking up at 8 AM just to sign in to my high school class. I started by automating simple tasks to make my life easier. Since then, I’ve created tools that not only simplify my life but also help my friends—and even some strangers.

For me, coding is all about solving problems and improving the way we live. In the future, I hope to continue making things that make your life a little easier, a little more enjoyable—and hopefully, make the world a better place for everyone.</Text>


                    </Container>
                    <Image src="/Portfolio/drink.svg"></Image>


                </Flex>

            </Stack>
        </VStack>
    )
}


const tagline1 = ["Javacsript", "Typescript", "C++","Python","Java","C","CSS","HTML","SQL","PHP", "SQL", "GraphQL"]
const tagline2 = ["React", "Vite","Angular",".NET", "Azure","OOP","Express.js","Node.js","SocketIO","React-Native","Expo"]
const tagline3 = ["Visual Studio", "VSC", "Eclipse", "Postman", "Figma", "Git","Github","Blender","Onshape"]
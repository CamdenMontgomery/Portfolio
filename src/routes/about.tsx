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
                    <Text className="introduction-text">I’m Camden Montgomery, a recent Computer Science graduate from Florida International University, now looking for a chance to bring my skills into a professional setting. I’ve been making projects since I was about 15, but it wasn’t until high school that programming really clicked for me. I’ve always loved puzzle games and games like Little Big Planet where you build things — I spent hours experimenting with logic gates, making wacky robots, not even realizing how much I’d come to love programming.<br/><br/>I’d tried programming before in a class, but it didn’t grab me at the time because I didn’t have much choice in what I was learning. That summer when I taught myself, everything changed. Suddenly, I could build whatever I wanted, and that freedom pushed me to keep learning and growing.
<br/><br/>
Now, I’m ready to take that ability and apply it in a professional setting. I’ve already built things to make my own life easier, and I want to use those skills to make life easier for many others.</Text>
                </Flex>
                <Image></Image>
            </Stack>
            <Stack >
                <Flex direction="column">
                    <Heading className="section-header">What I Do</Heading>
                    <Stack direction="row">
                        <Container className="do-section-text-container">
                            <Heading className="do-section-header">UI/UX Designs</Heading>
                            <Text className="do-section-text">I design user interfaces that are easy to understand and use across games, apps, and websites. I’ve put together menus and layouts for things like a multiplayer racing game to help students get around campus, and a VR fitness app with menus and progress tracking. Most of my work happens in Figma, where I’m always tweaking details, sometimes pixel by pixel, to make sure everything feels just right. Over time, I’ve gotten pretty good at finding that balance between how something looks and how it works, so users don’t get stuck or confused.</Text>
                        </Container>
                        <Image className="do-section-image" src="/Portfolio/ux.svg"></Image>
                    </Stack>
                    <Stack direction="row-reverse">
                        <Container className="do-section-text-container">
                            <Heading className="do-section-header">Chrome Extensions</Heading>
                            <Text className="do-section-text">I build Chrome extensions that add handy features and make everyday tasks smoother. One extension pulls professor ratings right into course registration pages so students don’t have to jump between sites. I work with APIs and GraphQL to grab real-time info and build clean, customizable interfaces using JavaScript, HTML, and CSS. I also make sure the extensions work well for everyone by adding features like colorblind modes and different themes. The goal is to keep things simple and reliable but flexible enough to fit different needs.</Text>
                        </Container>
                        <Image className="do-section-image" src="/Portfolio/extension.svg"></Image>
                    </Stack>
                    <Stack direction="row">
                        <Container className="do-section-text-container">
                            <Heading className="do-section-header">Mobile Applications</Heading>
                            <Text className="do-section-text">I design and prototype mobile apps using Figma and Swift, focusing on clean and easy-to-use interfaces. I work on projects like a satellite tracking app, handling everything from picking colors to designing all the screens and creating interactive prototypes. I like to keep things straightforward and consistent so people can get around the app without any hassle. I’m still learning and growing, but I’m confident in making apps that are solid and ready to be built on or polished later.</Text>
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
import { Flex, Stack, Heading, Link, HStack, Image, Container } from "@chakra-ui/react"
import LinkedInButton from "../components/linkedin"
import GithubButton from "../components/ui/github"

export default function Contact() {
    return (
        <Container perspective="300px">
        <Stack className="contact-container" direction="column">
            <Image maxHeight="60vh" src="/Portfolio/oranges.jpg"></Image>
            <Flex direction="row" className="contact-text-container">
                <Flex direction="column" className="contact-info-container">
                    <Heading color="darkorange" fontWeight="900">
                    "Let's Chat" - Camden Montgomery
                    </Heading>
                    <Flex className="contact-links" direction="column">
                        <Link className="contact-link" href="">camden.montgomery730@gmail.com</Link>
                        <Link className="contact-link" href="">+1 (305)-484-1537</Link>
                        <Flex />
                    </Flex>

                </Flex>
                <Flex direction="column" className="contact-address-container">
                    <HStack><Link className="contact-link" textAlign="right" color="burlywood" fontSize="0.8rem" href="https://www.linkedin.com/in/camden-montgomery/">https://www.linkedin.com/in/camden-montgomery/</Link><LinkedInButton></LinkedInButton></HStack>
                    <HStack><Link className="contact-link" textAlign="right" color="burlywood" fontSize="0.8rem" href="https://github.com/CamdenMontgomery">https://github.com/CamdenMontgomery</Link><GithubButton></GithubButton></HStack>
                </Flex>
            </Flex>
        </Stack>
        </Container>
    )
}
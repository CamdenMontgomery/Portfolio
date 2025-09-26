import { HStack, For, Tag, Container } from "@chakra-ui/react";

export default function TagScroller({ tags }: { tags: string[] }) {
    return (
        <Container className="tag-scroller-container">
            <HStack className="tag-scroller">
                <HStack className="tag-block"><For each={tags}>
                    {(item) => (
                        <Tag.Root className="tag">
                            <Tag.Label className="tag-text">{item}</Tag.Label>
                        </Tag.Root>
                    )}
                </For>    </HStack>       <HStack className="tag-block"> <For each={tags}>
                    {(item) => (
                        <Tag.Root className="tag">
                            <Tag.Label className="tag-text">{item}</Tag.Label>
                        </Tag.Root>
                    )}
                </For></HStack>
            </HStack>
        </Container>
    )
}
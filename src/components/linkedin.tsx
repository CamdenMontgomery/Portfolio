import { IconButton, Link} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa'; // Uses React Icons

const LinkedInButton = () => {
  return (
    <Link href="https://www.linkedin.com/in/camden-montgomery/">
      <IconButton
        color="white"
        variant="ghost"
      >
        <FaLinkedin />
      </IconButton>
    </Link>
  );
};

export default LinkedInButton;
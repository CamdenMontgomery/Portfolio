import { IconButton, Link} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'; // Uses React Icons

const GithubButton = () => {
  return (
    <Link href="https://github.com/CamdenMontgomery">
      <IconButton
        color="white"
        variant="ghost"
      >
        <FaGithub />
      </IconButton>
    </Link>
  );
};

export default GithubButton;
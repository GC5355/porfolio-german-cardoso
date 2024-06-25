import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaVimeo } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/GC5355" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/germán-cardoso-de-sousa-318548236" },
  { icon: <FaVimeo />, path: "https://vimeo.com/gercardoso" },
  
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

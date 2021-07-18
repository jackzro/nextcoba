import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src={require("../assets/avatarSujackson.jpg")}
        alt="avatar"
        className="w-32 h-32 mx-auto rounded-full"
        height={128}
        width={128}
        layout="intrinsic"
        quality={100}
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Sujackson
      </h3>

      <p className="px-1 py-2 bg-gray-200 rounded-full dark:bg-dark-300 dark:text-white">
        FullStack Developer
      </p>

      <a
        className="flex items-center justify-center px-1 py-2 my-3 bg-gray-200 rounded-full dark:bg-dark-300"
        href="/images/blink.jpeg"
        download="blink.jpeg"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* social icon */}

      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <a
          href=""
          className="flex items-center justify-center space-x-2 text-black"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
          <span>Github</span>
        </a>
        <a
          href=""
          className="flex items-center justify-center space-x-2 text-blue-600"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* address */}

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-300"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" />
          <span>Jakarta, Indonesia</span>
        </div>

        <div className="flex items-center justify-center my-2 space-x-2">
          <AiTwotoneMail className="w-6 h-6" />
          <span>su.jackson.00@gmail.com</span>
        </div>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-500 focus:outline-none"
        onClick={() => window.open("mailto:su.jackson.00@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-500"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;

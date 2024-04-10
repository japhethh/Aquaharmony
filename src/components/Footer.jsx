import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer w-full h-[200px] bg-[#282828] flex flex-col gap-4 justify-center items-center text-white">
      <h1 className="text-lg font-bold">Follow Us</h1>
      <div className="flex gap-4">
        <a href="https://www.facebook.com/Japhetlocaylocay">
          <i class="fa-brands fa-facebook-f text-lg"></i>
        </a>
        <a href="https://www.instagram.com/adreyjapheth?fbclid=IwAR0cDVrr9ZsPYZskA4zx49rW45VEemmtOc4L8ThmatjHw4iuiFTAmwV8egA_aem_AWfV6zkk_xV3X2HpL5WQCl-sXbEb2InF-qeg4ymNJCeKuBTv2shsfi1F7ULqS1uEyxp7y5xsSJv_EUIyoneH01Ye">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
      </div>
      <p className="text-sm font-bold text-gray-500">Design by Adrey Locaylocay</p>
      <p className="text-sm text-gray-500"> <i class="fa-regular fa-copyright"></i>2024 Aqua Harmony. All rights reserved</p>
    </footer>
  );
};

export default Footer;

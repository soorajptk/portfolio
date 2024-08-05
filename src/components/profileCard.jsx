import pranavImg from "../assets/pranav.png";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export const ProfileCard = () => {
  const navigate = useNavigate();
  const ContactUs = () => navigate("/contact");

  return (
    <div className="flex py-2 md:py-6 gap-6 md:gap-16 lg:gap-28 items-center flex-col md:flex-row">
      <div className="w-[17.304rem] h-[15.034rem] sm:w-[20.791rem] sm:h-[18.361rem] lg:w-[24.279rem]  lg:h-[21.688rem]">
        <img
          className="w-full h-full  object-cover rounded-[1rem] md:rounded-[5.563rem]"
          src={pranavImg}
          alt="Pranav"
        />
      </div>
      <div>
        <div className="flex-1 flex flex-col  items-start justify-start md:gap-[0.375rem] max-w-full">
          <h1 className="relative text-[2.075rem]  md:text-[3.438rem] text-buttonTextColor font-[900]">
            I’m Pranav Sai Das
          </h1>
          <b className="md:max-w-[29.938rem] relative leading-[110.28%] inline-block text-transparent !bg-clip-text [background:linear-gradient(89.99deg,_#b6b0b0,_#504e4e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full text-[2.125rem] md:text-[3.25rem] ">
            <span>Colorist, Designer</span>
            <span className="text-[2.125rem]">{` `}</span>
            <span className="text-[3.188rem]">{`&`}</span>
            <span> Filmmaker</span>
          </b>
        </div>
        <div className="flex justify-between md:justify-start gap-5 py-8">
          <a
            download="pranavsaidas.pdf"
            href="/files/resume.pdf"
            className="px-6 flex items-center justify-center  w-full md:w-fit gap-3 py-[0.25rem] text-center hover:bg-black rounded-2xl text-buttonTextColor font-medium leading-[2.047rem] text-[0.825rem] md:text-7xl border-[1px] border-white/15 backdrop-blur-md bg-white/15"
          >
            Resume
          </a>
          <Button onClick={ContactUs} label={"Contact Me"} />
        </div>
      </div>
    </div>
  );
};

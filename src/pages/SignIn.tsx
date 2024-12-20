import  SideCard from "../components/SideCard";
import Logo from "../assets/logo.svg";

export const SignIn = () => {
  return (
    <div className=" flex items-center justify-center h-full  bg-background min-h-dvh w-full">
      <div className=" flex-1 hidden lg:flex justify-center items-center relative w-full h-full min-h-dvh border border-transparent border-r-neutral-200">
        <img
          src={Logo}
          alt="Logo"
          width={300}
          height={300}
          className=" opacity-20 bottom-0 left-0 absolute"
        />
        <SideCard />
      </div>
    </div>
  );
};

import { useTypewriter } from "react-simple-typewriter";
const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Web Desgin", "Web Development", "SEO Solutions"],
    loop: {},
  });
  return (
    <section id="home" className="w-full bg-primary bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
      <div className=" absolute pointer-events-none inset-0 flex flex-col justify-center items-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <p className="mt-16 ss:text-[72px] text-[42px]  font-semibold relative text-center z-20 text-white font-poppins py-6 ss:leading-[90.8px] leading-[55px]">
        Crafting Digital Excellence 
      </p>
      <p className=" hidden sm:block ss:text-[72px]  text-[42px] font-semibold relative text-center z-20 text-white font-poppins py-6 leading-[55px]">
      And Your Online Presence with
      </p>
      <p className=" h-[150px] ss:text-[72px] text-[42px]  font-semibold text-center font-poppins text-gradient relative z-20">
        {text}
      </p>
      <div className={`flex justify-center items-center w-full font-poppins ss:text-3xl text-xl gap-x-8 sm:py-8 py-6`}>
          <button className= " bg-black text-white px-6 py-2 z-20 rounded-lg border  cursor-pointer">Book a Call</button>
          <button className="bg-white text-black px-6 py-2 z-20 rounded-lg cursor-pointer">Pricing</button>
        </div>
    </section>
  );
};

export default HeroSection;

import BlackmagicImg from '../assets/blackmagic.png'
export const ColouristProfile = () => {
  return (
    <div className='flex flex-col pt-2 md:flex-row justify-between gap-[1.5rem] md:gap-[2.188rem]'>
      <div className='rounded-xl opacity-[0.9]  md:w-[20.75rem] md:h-[16.5rem]'>
        <img src={BlackmagicImg} alt="blackmagic certificate" className='w-full h-full object-fill' />
      </div>
      <div className='flex-1 rounded-xl backdrop-blur-md bg-white/15 p-[1.5rem] sm:p-[2.25rem]'>
        <h4 className='text-light-gray text-justify text-[0.688rem] sm:text-[1.125rem] font-medium leading-[1.063rem] sm:leading-[1.938rem]'>
          I am a Blackmagicdesign certified professional colorist who loves
          making projects look their best. Doing something you enjoy is a great
          way to make your clients happy. I have worked on some popular web
          series and short films. My node graph workflow and knowledge with ACES
          and DWG ensures precise and consistent color management. Check out my
          portfolio to see my works.{" "}
        </h4>
      </div>
    </div>
  );
};

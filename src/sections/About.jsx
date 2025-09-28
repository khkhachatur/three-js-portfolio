import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('khachatryankhachatur57@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 ms:grid-cols-2 grid-col-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" className="w-full sm:h-[267px] h-fit object-contain" alt="grid1" />
            <p className="grid-headtext">Hi I am Khachatur</p>
            <p className="grid-subtext">i am going crazy i need to get a good job and finally i can go to see her</p>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" className="w-full sm:h-[267px] h-fit object-contain" alt="grid-2" />
            <div className="grid-headtext">Tech Stack</div>
            <div className="grid-subtext">I specialize in something</div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -11.21, lng: 17.12, text: 'Luanda, Angola', color: 'white', size: 26 }]}
              />
            </div>
            <div>
              <p className="grid-subtext">i am based in Luanda, Angola</p>
              <p className="grid-headtext">i work remotely across most timezones</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10 " />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2 flex flex-col items-center">
              <p className="grid-subtext text-center">Contact Me</p>
              <div onClick={handleCopy} className="flex item-center">
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
              </div>
              <p className="lg:text-l md:text-[10px] font-medium text-gray_gradient text-white">
                khachatryankhachatur57@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

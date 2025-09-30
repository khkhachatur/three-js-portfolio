import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
// import { OrbitControls } from 'three-stdlib';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20 " id="work">
      <p>My Works</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>
          <div className="p-5 backdrop-filter backdrop-blur-3xl w-fit rounded-lg " style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo-1" className="w-10 h-10 shadow-sm" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white animatedText text-2xl font-semibold">{currentProject.title}</p>
            <p className="animatedText text-white">{currentProject.desc}</p>
            <p className="animatedText text-white">{currentProject.subdesc}</p>
          </div>
          <div className="flex justify-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
            </div>
            <a
              href={currentProject.href}
              className="flex items-center hover-pointer gap-5 text-white-500"
              target="_blank"
              rel="noreferrer">
              <p>Live Site</p>
              <img src="assets/arrow-up.png" alt="arrow" className="w-4 h-4" />
            </a>
          </div>
          <div className="flex justify-between gap-7">
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/left-arrow.png" alt="arrow left" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/right-arrow.png" alt="arrow right" />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            {/* <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} /> */}
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;

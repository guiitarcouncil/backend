import { useEffect, useState, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles";  
import { ISourceOptions, Container } from "@tsparticles/engine";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadFull().then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles Loaded", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "#2b5482" },
      },
      fpsLimit: 150,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { quantity: 2 },
          grab: { distance: 400, links: { opacity: 1 } },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.9,
          width: 2.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 3.0,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 100 },
        opacity: { value: 0.9 },
        shape: { type: "polygon" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      </div>
    );
  }

  return null;
};

export default Particle;

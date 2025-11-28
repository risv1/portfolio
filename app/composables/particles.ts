import { loadBasic } from "@tsparticles/basic";
import { tsParticles } from "@tsparticles/engine";

export const useFireflyParticles = () => {
  const isDark = useState("isDark", () => true);

  const createFireflyEffect = async () => {
    try {
      await loadBasic(tsParticles);
      
      const options = {
        background: {
          opacity: 0
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 1000
            }
          },
          color: {
            value: ["#ffffff", "#ffd700", "#87ceeb", "#98fb98", "#ffa07a"] 
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.9
            },
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          size: {
            value: {
              min: 2,
              max: 5
            },
            animation: {
              enable: true,
              speed: 3,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: {
              min: 0.3,
              max: 1.2
            },
            direction: "none" as const,
            random: true,
            straight: false,
            outModes: {
              default: "out" as const
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            bubble: {
              distance: 120,
              size: 8,
              duration: 0.4,
              opacity: 1
            },
            push: {
              quantity: 3
            }
          }
        },
        detectRetina: true,
        fpsLimit: 60
      };

      await tsParticles.load({
        id: "tsparticles",
        options: options
      });
    } catch (error) {
      console.error('Error in createFireflyEffect:', error);
    }
  };

  const refreshParticles = async () => {
    try {
      const container = tsParticles.domItem(0);
      if (container) {
        await container.refresh();
      } else {
        await createFireflyEffect();
      }
    } catch (error) {
      console.error('Error refreshing particles:', error);
    }
  };

  return {
    createFireflyEffect,
    refreshParticles,
    isDark
  };
};
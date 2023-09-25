import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
// particles
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particleOptions from '../Data/particleOptions';
import { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';

// Styles
const StyledParticlesContainer = styled.div`
  position: relative;
  z-index: -1;
`;

// types and interfaces
interface ParticleOptions extends RecursivePartial<IOptions> {
  particles: {
    number: {
      value: number;
    };
  };
}

function ParticlesContainer() {
  const [particleCount, setParticleCount] = useState<number>(200);
  const windowWidth = useRef<number>(window.innerWidth);
  // particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Adjust particle count based on window width
  function handleResize() {
    const width = window.innerWidth;
    windowWidth.current = width;
    if (width < 550) {
      setParticleCount(100);
    } else {
      setParticleCount(200);
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  const updatedParticleOptions: ParticleOptions = {
    ...particleOptions,
    particles: {
      ...particleOptions.particles,
      number: {
        ...particleOptions.particles.number,
        value: particleCount,
      },
    },
  };
  return (
    <StyledParticlesContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={updatedParticleOptions}
      />
    </StyledParticlesContainer>
  );
}

export default ParticlesContainer;

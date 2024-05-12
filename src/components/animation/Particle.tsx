"use client"
import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"
import { particlesConfig } from "@/config/particles";

const Particle: React.FC = () => {

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
    }, []);

    return (
        <Particles
            id="tsparticels"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig as any}
        />
    );
}

export default Particle;
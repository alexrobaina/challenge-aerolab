import React from "react";
import { Parallax } from 'react-parallax';

import './parallaxImage.scss'

const ParallaxImage = ({ image }) => (
   
        <Parallax
        
            bgImage={ image }
            bgImageAlt="Aerolab"
            strength={300}
            >
            
            <div style={{ height: '700px' }} />
        </Parallax>
)

export default ParallaxImage
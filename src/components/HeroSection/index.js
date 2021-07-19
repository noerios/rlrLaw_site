import React, {useState} from 'react';
import Video from '../../videos/stockvideo.mp4';
import { Button } from '../ButtonElements'
import { HeroContainer, 
        HeroBg, 
        VideoBg, 
        HeroContent, 
        HeroH1, 
        HeroP, 
        HeroBtnWrapper, 
        ArrowForward, 
        ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>A San Antonio Law Firm, founded in '83</HeroH1>
                <HeroP>
                Dedicated to providing clients with professional, knowledgeable and attentive legal, counseling, and legislative services.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get in touch {hover ? <ArrowForward /> : <ArrowRight />} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

import React from "react";
import { bio } from "../../data/constants";
// import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import {
    HeroContainer,
    HeroBg,
    HeroInnerContainer,
    HeroLeftContainer,
    Title,
    TextLoop,
    // Span,
    SubTitle,
    ResumeButton,
    HeroRightContainer,
    Image,
} from "./HeroSectionStyle";

import resume from "../../assets/Savio_DCosta_Resume.pdf";

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg />
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>
                            Hi, I am {bio.name}
                            <br />
                        </Title>
                        <TextLoop>
                            I am a Software Engineer
                            {/* <Span>
                                <Typewriter
                                    options={{
                                        strings: bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span> */}
                        </TextLoop>
                        <SubTitle>{bio.description}</SubTitle>
                        <ResumeButton
                            href={resume}
                            // download="Savio DCosta Resume"
                            target="display"
                        >
                            CHECK MY RESUME
                        </ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Image src={HeroImg} alt="Hero" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;

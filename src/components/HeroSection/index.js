import React from 'react';
import styled from 'styled-components';
import { bio } from '../../data/constants'
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/HeroImage.jpg';

const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media only screen and (max-width: 960px) {
        padding: 66px 16px;
    }
    @media only screen and (max-width: 640px) {
        padding: 80px 16px;
    }
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
`;

const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    @media only screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media only screen and (max-width: 960px) {
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    @media only screen and (max-width: 640px) {
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;
    @media only screen and (max-width: 960px) {
        order: 1;
        margin-bottom: 80px;
        justify-content: center;
        align-items: center;
    }
    @media only screen and (max-width: 640px) {
        order: 1;
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media only screen and (max-width: 960px) {
        text-align: center;
    }
    @media only screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 9px;
        margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 68px;
    gap: 12px;
    display: flex;
    @media only screen and (max-width: 960px) {
        text-align: center;
    }
    @media only screen and (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
`;

const SubTitle = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.text_primary+95};
    line-height: 32px;
    margin-bottom: 42px;
    @media only screen and (max-width: 960px) {
        text-align: center;
    }
    @media only screen and (max-width: 640px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow:  20px 20px 60px #1F2634;
        filter: brightness(1);
    }    
    @media only screen and (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    max-height: 400px;
    max-width: 400px;
    object-fit: cover;
    object-position: center;
    border: 2px solid ${({ theme }) => theme.primary};
    @media only screen and (max-width: 768px) {
        max-height: 400px;
        max-width: 400px;
    }
    @media only screen and (max-width: 640px) {
        max-height: 280px;
        max-width: 280px;
    }
`;

const Hero = () => {
    return <div id = 'about'>
        <HeroContainer>
            <HeroBg/>
            <HeroInnerContainer>
                <HeroLeftContainer>
                    <Title>
                        Hi, I am {bio.name}<br />
                    </Title>
                    <TextLoop>
                        I am a 
                        <Span>
                            <Typewriter options={{
                                strings: bio.roles,
                                autoStart: true,
                                loop: true,
                            }} />
                        </Span>
                    </TextLoop>
                    <SubTitle>{bio.description}</SubTitle>
                    <ResumeButton href = {bio.resume} target = 'display'>
                        CHECK MY RESUME
                    </ResumeButton>
                </HeroLeftContainer>
                <HeroRightContainer>
                    <Image src = {HeroImg} alt = 'Hero' />
                </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer>
    </div>;
};

export default Hero;
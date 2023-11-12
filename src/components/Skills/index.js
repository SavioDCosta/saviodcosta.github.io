import React from 'react';
import { skills } from '../../data/constants';
import { Container, Wrapper, Title, Description, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillsStyle.js';

const Skills = () => {
    return (
        <Container id = 'skills'>
            <Wrapper>
                <Title>Skills</Title>
                <Description>
                    {/* Here are some of my skills on which I have been working on for the past 2 years. */}
                    Some of the things I've picked up along the way ...
                </Description>
                <SkillsContainer>
                    {skills.map((item) => (
                        <Skill>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {
                                    item.skills.map((skill, index) => (
                                        <SkillItem>
                                            <SkillImage src = {skill.image} />
                                            {skill.name}
                                        </SkillItem>
                                    ))
                                }
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};

export default Skills;
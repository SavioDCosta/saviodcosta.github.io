import React from // , { useState }
"react";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import {
    Container,
    Wrapper,
    Title,
    Description,
    CardContainer,
} from "./ProjectsStyle";

const Projects = ({ openModal, setOpenModal }) => {
    // const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Description>
                    Where my skills have been put to the test ...
                </Description>
                {/* <ToggleButtonGroup >
                    {toggle === 'all' ?
                    <ToggleButton active value = 'all' onClick = {() => setToggle('all')}>ALL</ToggleButton>
                    :
                    <ToggleButton value = 'all' onClick = {() => setToggle('all')}>ALL</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'web app' ?
                    <ToggleButton active value = 'web app' onClick = {() => setToggle('web app')}>WEB APPS</ToggleButton>
                    :
                    <ToggleButton value = 'web app' onClick = {() => setToggle('web app')}>WEB APPS</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'android app' ?
                    <ToggleButton active value = 'android app' onClick = {() => setToggle('android app')}>ANDROID APPS</ToggleButton>
                    :
                    <ToggleButton value = 'android app' onClick = {() => setToggle('android app')}>ANDROID APPS</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'machine learning' ?
                    <ToggleButton active value = 'machine learning' onClick = {() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                    :
                    <ToggleButton value = 'machine learning' onClick = {() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                    }
                </ToggleButtonGroup> */}
                <CardContainer>
                    {projects.map((project) => (
                        <ProjectCard
                            project={project}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    ))}
                    {/* {toggle === 'all' && projects
                      .map((project) => (
                          <ProjectCard project = {project} openModal = {openModal} setOpenModal = {setOpenModal}/>
                    ))}
                    {projects
                      .filter((item) => item.category === toggle)
                      .map((project) => (
                          <ProjectCard project = {project} openModal = {openModal} setOpenModal = {setOpenModal}/>
                      ))} */}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;

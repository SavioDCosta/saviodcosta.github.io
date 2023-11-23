import React from "react";
import { experiences } from "../../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import {
    Container,
    Wrapper,
    Title,
    Description,
    TimeLineSection,
} from "./ExperienceStyle";

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Description>My journey so far ...</Description>
                <TimeLineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot
                                        variant="outlined"
                                        color="secondary"
                                    />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    );
};

export default Experience;

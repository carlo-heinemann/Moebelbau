import { Box, Card, CardContent, Collapse, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import configRepository, { type Project } from "../../repositories/ConfigRepository"
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from "@mui/icons-material";
import { COLORS } from "../../constants/colors";

function Projects() {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        configRepository
            .loadConfig()
            .then(() => setProjects(configRepository.projects()))
    }, [])

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                rowGap: 2,
                alignItems: 'flex-start',
            }}
        >
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    pictures={project.pictures}
                />
            ))}
        </Box>
    )
}
        
function ProjectCard(
    { 
        title,
        description,
        pictures
    }: { 
        title: string,
        description: string,
        pictures: string[],
    }
) {
    const [showDescription, setShowDescription] = useState(false);
    const descriptionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (showDescription && descriptionRef.current) {
            descriptionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [showDescription])

    return (
        <Card 
            onClick={() => setShowDescription(!showDescription)}
            elevation={10}
            sx={{
                borderRadius: '16px',
                backgroundColor: COLORS.background,
                width: {
                    xs: '100%',
                    sm: '45%',
                    md: '30%',
                },
                "@media (hover: hover) and (pointer: fine)": {
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                    },
                },
            }}
        >
            <CardContent
                sx={{ 
                    textAlign: 'left',
                    padding: '0rem',
                }}
            >
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                >
                    {pictures.map((picture, index) => (
                        <SwiperSlide key={picture}>
                            <Box
                                component="img"
                                src={picture}
                                alt={`Bild ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    paddingBottom: 2,
                                    objectFit: 'contain',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Box
                    sx={{ padding: '1rem' }}
                >   
                    <Typography variant="h6">{title}</Typography>
                    <Collapse
                        in={showDescription}
                    >
                        <Typography
                            variant="body1"
                            sx={{ marginTop: 2 }}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </Collapse>
                </Box>
                <Box
                    ref={descriptionRef}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: '1rem',
                    }}
                >
                        {showDescription ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
                </Box>
            </CardContent>
        </Card>
    )
}

export default Projects
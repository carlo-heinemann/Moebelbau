import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import configRepository, { type Project } from "../../repositories/ConfigRepository"

function Projects() {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        configRepository
            .loadConfig()
            .then(() => setProjects(configRepository.projects()))
    }, [])

    return (
        <Stack>
            {projects.map((project) => (
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    pictures={project.pictures}
                    backgroundColor={project.background_color}
                />
            ))}
        </Stack>
    )
}

function ProjectCard(
    { 
        title,
        description,
        pictures,
        backgroundColor
    }: { 
        title: string,
        description: string,
        pictures: string[],
        backgroundColor: string
    }
) {
    return (
        <Card 
            sx={{
                margin: '1rem',
                backgroundColor: {backgroundColor},
            }}
        >
            <CardContent
                sx={{ textAlign: 'left' }}
            >
                <Box
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 2
                    }}
                    >
                    {pictures.map((picture, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={picture}
                            alt={`Bild ${index + 1}`}
                            sx={{
                                width: 'auto',
                                height: '300px',
                                paddingBottom: 2,
                            }}
                        />
                    ))}
                </Box>
                <Typography variant="h5">{title}</Typography>
                <Typography
                    variant="body1"
                    sx={{ marginTop: 2 }}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </CardContent>
        </Card>
    )
}
        

export default Projects
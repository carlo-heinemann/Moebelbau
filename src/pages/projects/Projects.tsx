import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import projects from '../../constants/projects.json'

function Projects() {
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
                        justifyContent: 'center',
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
                                width: 400,
                                height: 'auto',
                                paddingBottom: 2,
                            }}
                        />
                    ))}
                </Box>
                <Typography variant="h5">{title}</Typography>
                <Typography>{description}</Typography>
            </CardContent>
        </Card>
    )
}
        

export default Projects
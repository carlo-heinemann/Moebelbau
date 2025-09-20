import { Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material"
import { START_STRINGS } from "../../constants/startStrings"
import { COLORS } from "../../constants/colors"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"

function Start() {
    const aboutMeRef = useRef<HTMLDivElement>(null)
    const location = useLocation()

    useEffect(() => {
        if (location.hash === '#about-me' && aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [location])

    return (
        <Stack spacing={8}>
            <ProjectCard />
            <AboutMe aboutMeRef={aboutMeRef} />
        </Stack>
    )
}

function ProjectCard() {
    const navigate = useNavigate()

    return (
        <Card 
            sx={{
                margin: '1rem',
                backgroundColor: COLORS.startCard,
            }}
        >
            <CardContent
                sx={{ textAlign: 'left' }}
            >
                <Typography variant="h5">{START_STRINGS.projectsTitle}</Typography>
                <Typography>{START_STRINGS.projectsSubtitle}</Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained"
                    size="small"
                    onClick={() => {navigate('/projects')}}
                    sx={{
                        backgroundColor: COLORS.button,
                    }}
                >{START_STRINGS.projectsButton}</Button>
            </CardActions>
        </Card>
    )
}

function AboutMe({ aboutMeRef }: { aboutMeRef?: React.RefObject<HTMLDivElement | null> }) {
    return (
        <Stack
            component="div"
            ref={aboutMeRef}
            sx={{ textAlign: 'left' }}
        >
            <Typography variant="h5">{START_STRINGS.aboutMeTitle}</Typography>
            <Typography>{START_STRINGS.aboutMeText}</Typography>
        </Stack>
    )
}

export default Start
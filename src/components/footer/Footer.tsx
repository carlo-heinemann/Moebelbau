import { Box, Typography } from "@mui/material"
import { FOOTER_STRINGS } from "../../constants/footerStrings"
import { COLORS } from "../../constants/colors"

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                py: 2,
                mt: 'auto',
                backgroundColor: COLORS.header,
                color: 'white',
                textAlign: 'center',
            }}
            >
            <Typography 
                variant="body2"
                sx={{ 
                    fontSize: '0.8rem',
                    px: 2,
                    color: COLORS.brown,
                }}
            >{FOOTER_STRINGS.footerText}</Typography>
        </Box>
    )
}

export default Footer
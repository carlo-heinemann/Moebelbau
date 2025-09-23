type Config = {
    about_me: string,
    projects: Project[],
}

export type Project = {
    title: string,
    description: string,
    pictures: string[],
    background_color: string,
}

class ConfigRepository {
    private config: Config | null = null

    async loadConfig(): Promise<void> {
        if (this.config === null) {
            const response = await fetch('/Moebelbau/config.json')
            this.config = await response.json() as Config
        }
    }

    aboutMe(): string {
        return this.config?.about_me || ''
    }

    projects(): Project[] {
        return this.config?.projects || []
    }
}

const configRepository = new ConfigRepository()
export default configRepository
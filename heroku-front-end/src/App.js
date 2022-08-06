import RepositoryContextProvider from './ProjectsRoutes/RepositoryContext'
import ProjectsRoutes from './ProjectsRoutes'

export default function App(){ 
    return (
        <RepositoryContextProvider>
            <ProjectsRoutes/> 
        </RepositoryContextProvider>
    )
}
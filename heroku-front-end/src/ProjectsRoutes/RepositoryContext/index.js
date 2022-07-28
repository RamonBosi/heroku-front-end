import { createContext } from "react";

export const RepositoryContext = createContext()

export default function RepositoryContextProvider({ children }){

    const repositoryGithub = {
        repository: '/heroku-front-end'
    }

    return (
        <RepositoryContext.Provider value = {repositoryGithub}>
            {children}
        </RepositoryContext.Provider>
    )
}
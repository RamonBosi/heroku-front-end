import { createContext } from "react";

export const RepositoryContext = createContext()

export default function RepositoryContextProvider({ children }){

    const repository = '/heroku-front-end'

    const repositoryGithub = {
        repository,
        repoDeliveryInformation: `${repository}/deliveryInformation`
    }

    return (
        <RepositoryContext.Provider value = {repositoryGithub}>
            {children}
        </RepositoryContext.Provider>
    )
}
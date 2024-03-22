import { clientEnv } from "../../astro.config"
export  const ShowClientEnv = (props) => {
    
    // const clientEnv = 'not yet'

    return (
        <h2>Client Env: {clientEnv}</h2>
    )
}
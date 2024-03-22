import { appVar } from "../../astro.config"
export  const ShowClientEnv = (props) => {
    return (
        <h2>App Env: {appVar}</h2>
    )
}
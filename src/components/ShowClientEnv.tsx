export  const ShowClientEnv = (props) => {
    
    const clientEnv = import.meta.env.PUBLIC_SANITY_CLIENTVAR ?? 'no value'

    return (
        <h2>Client Env: {clientEnv}</h2>
    )
}
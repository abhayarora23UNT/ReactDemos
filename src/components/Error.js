import { useRouteError } from "react-router"

const Error=()=>{

    const err=useRouteError()
    console.log("routing error ",err)
    return (
        <div>
            <h1>Oopps !!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}</h3>
        </div>
    )
}

export default Error
import { notFound } from "next/navigation"

export default function Post({params}: {params: {slug: string}}){
    // Visit localhost:3000/error-page
    if(params.slug[0] === 'error-page'){
        return notFound();
    }

    return (
        <div>
            <h1>Page slug: {params.slug}</h1>
        </div>
    )
}
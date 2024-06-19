import { notFound } from "next/navigation";

export const runtime = 'edge';

export const dynamic = 'force-dynamic';

export default function Search({searchParams}: {searchParams: {q: string}}){
    const {q} = searchParams;
    if(q === 'error'){
        return notFound();
    }
    
    return (
        <div>
            <h1>Search for: {searchParams.q}</h1>
        </div>
    )
}
export default function Search({searchParams}: {searchParams: {q: string}}){

    return (
        <div>
            <h1>Search for: {searchParams.q}</h1>
        </div>
    )
}
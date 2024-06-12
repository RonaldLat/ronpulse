export async function load({ params }) {
    const res = await fetch(`https://api.example.com/blog/${params.slug}`);
    const data = await res.json();
    
    return {
        props: {
            post: data,
        }
    };
}


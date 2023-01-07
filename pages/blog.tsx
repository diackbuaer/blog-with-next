import {useEffect, useState} from "react";
import Link from "next/link";

function Blog({posts}) {
    return (
        <>
            <h3 className="text-4xl font-extrabold">Blog</h3>

            {posts?.map((p) =>(
               <Link href='contact' legacyBehavior>
                   <a>
                       <h2 key={p.id} className='text-xl font-extrabold'>
                           {p.title}
                       </h2>
                   </a>
               </Link>
            ))}
            <pre>
                {JSON.stringify(posts, null, 2)}
            </pre>
        </>
    )
}

export default Blog


export async function getStaticProps() {
    const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    const res = await fetch(URL)
    const posts = await res.json()
    return {
        props: {posts}, // will be passed to the page component as props
    }
}
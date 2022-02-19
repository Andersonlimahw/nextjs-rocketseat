import { GetStaticPaths, GetStaticProps } from "next";


export default function BlogPost({ date }) {
    return (<h1>Hello, updated: {date}</h1>);
}

export const getStaticPath : GetStaticPaths = async () => {
    return {
        paths: [], 
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            date: new Date().toUTCString(),
        }, 
        revalidate: 5
    }
}
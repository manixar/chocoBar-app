import {useRouter} from "next/router";

export default function Article(props) {
    const router = useRouter();
    const { slug } = router.query;
console.log('slug', slug);

    return (
        <div>
            <h1>blog page {slug} </h1>
        </div>
    )
}
import Link from 'next/link'
import Head from 'next/head'

export default function ScrollProject() {
    return (
        <>
            <Head>
                <title>Scroll Page</title>
            </Head>
            <h1>Scroll Project</h1>
            <Link href="https://github.com/madebyfox/yPricingRange">
                <a target="_blank">Know more</a>
            </Link>
        </>
    )
}
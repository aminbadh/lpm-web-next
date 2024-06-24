import Link from 'next/link'

export default function NavigationLink({ content }) {
    return (
        <Link href="/">
            <a className="text-md tracking-wide">{content}</a>
        </Link>
    )
}
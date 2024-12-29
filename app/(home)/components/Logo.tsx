import Image from "next/image"
import Link from "next/link"

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src="/assets/logo.png"
                alt="Baba's Logo"
                width={40}
                height={40}
                className="w-[80px] "
            />
        </Link>
    )
}


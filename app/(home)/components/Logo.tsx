import Image from "next/image"
import Link from "next/link"

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src="/logo.png"
                alt="Baba Chicken"
                width={70}
                height={70}
                className="w-[80px] "
            />
        </Link>
    )
}


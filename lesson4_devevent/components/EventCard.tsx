import Image from "next/image";
import Link from "next/link";

interface EventCardProbs {
    title: string;
    image: string;
}

export default function EventCard({ title, image }: EventCardProbs) {
    return (
        <Link href={`/events`} id="event-card">
            <Image src={image} alt={title} width={410} height={300} className="poster" />

            <p className="title">{title}</p>
        </Link>
    )
}

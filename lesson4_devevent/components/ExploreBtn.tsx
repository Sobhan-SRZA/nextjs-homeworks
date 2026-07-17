"use client";

import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
    const handleClick = () => {
        posthog.capture("explore_events_clicked", {
            destination: "featured_events",
            trigger: "hero_cta"
        });
    };

    return (
        <a href="#events" className="block w-fit mt-7 mx-auto" onClick={handleClick}>
            <button type="button" id="explore-btn">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
            </button>
        </a>
    )
}

export default ExploreBtn

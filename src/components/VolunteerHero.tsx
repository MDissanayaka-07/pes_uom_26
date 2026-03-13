import {VolunteerImage} from "./VolunteerImage.tsx";
import {VolunteerContent} from "./VolunteerContent.tsx";

export function VolunteerHero() {
    return (
        <section
            className="flex flex-col md:flex-row min-h-screen pt-[72px]"
            style={{ background: "#090e1a" }}
        >
            <VolunteerImage />
            <VolunteerContent />
        </section>
    );
}

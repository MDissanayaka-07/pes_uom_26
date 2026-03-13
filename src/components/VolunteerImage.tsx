
export function VolunteerImage() {
    return (
        <div className="w-full  md:w-1/2 h-full flex-shrink-0">
            <img
                src="src/assets/volunteer/volunteer1.webp"
                alt="IEEE PES Volunteer"
                className="w-full h-full object-cover"
                style={{ minHeight: "320px", maxHeight: "600px" }}
            />
        </div>
    );
}
function scrollToSpeakers() {
    const section = document.getElementById("speakers");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the section ID from href (remove #)
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Offset to account for fixed header height
            behavior: 'smooth'
        });
    });
});

// Dropdown functionality for opening the YouTube channel
document.getElementById("members").addEventListener("change", function () {
    const selectedUrl = this.value;
    if (selectedUrl) {
        window.open(selectedUrl, "_blank");
    }
});

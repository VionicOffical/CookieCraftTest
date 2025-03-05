<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Craft</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Header Section -->
    <header>
        <h1>Cookie Craft</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#members">Members</a>
            <a href="#videos">Videos</a>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <h2>Welcome to Cookie Craft</h2>
        <p>Your ultimate Minecraft server experience. Join our community now!</p>
    </section>

    <!-- Meet Our Members Section -->
    <section id="members" class="member-dropdown">
        <h2>Meet Our Members</h2>
        <label for="members">Select a Member:</label>
        <select id="members">
            <option value="https://www.youtube.com/@MoonGuyyy">MoonGuyyy</option>
            <option value="https://www.youtube.com/@eitifrie">eitifrie</option>
            <option value="https://www.youtube.com/@guahlg">guahlg</option>
            <option value="https://www.youtube.com/@MrWalnutYT">Walnutty</option>
            <option value="https://www.youtube.com/@Arbythor">Arbythor</option>
            <option value="https://www.youtube.com/@realuncloudy">uncloudy</option>
            <!-- Add more members here -->
        </select>
    </section>

    <!-- Video Section -->
    <section id="videos" class="videos">
        <h2>Latest Videos</h2>
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" title="Video 1" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" title="Video 2" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" title="Video 3" allowfullscreen></iframe>
        </div>
    </section>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2023 Cookie Craft | <a href="https://www.youtube.com" target="_blank">Visit our YouTube</a></p>
    </footer>

    <!-- JavaScript for Interactivity -->
    <script>
        // Smooth scroll for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                window.scrollTo({
                    top: targetSection.offsetTop - 50,
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
    </script>

</body>
</html>

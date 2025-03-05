window.addEventListener('load', function() {
    const videoContainer = document.querySelector('.video-container');

    videoContainer.addEventListener('scroll', function() {
        if (videoContainer.scrollTop + videoContainer.offsetHeight >= videoContainer.scrollHeight) {
            loadMoreVideos();
        }
    });

    function loadMoreVideos() {
        const currentVideos = videoContainer.children.length;

        const videoIds = ['video1ID', 'video2ID', 'video3ID']; // Replace with actual video IDs

        for (let i = 0; i < 3; i++) {
            const videoId = videoIds[(currentVideos + i) % videoIds.length];

            const iframe = document.createElement('iframe');
            iframe.width = 560;
            iframe.height = 315;
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.title = `Video ${currentVideos + i + 1}`;
            iframe.frameBorder = 0;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullScreen = true;

            videoContainer.appendChild(iframe);
        }
    }
});

// JavaScript to handle autoplay when the video is in the viewport
const videos = document.querySelectorAll('.autoplay-video');

// Add an event listener to each video element to restart when it ends
videos.forEach(video => {
  video.addEventListener('ended', function() {
    video.currentTime = 0; // Rewind the video to the beginning
    video.play(); // Restart the video
  });
});

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const observer = new IntersectionObserver(handleIntersection, options);

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play(); // Start the video when it's in view
    } else {
      entry.target.pause(); // Pause the video when it's out of view
    }
  });
}

videos.forEach(video => {
  observer.observe(video);
});

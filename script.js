// DOM Elements
const tweetInput = document.getElementById('tweetInput');
const tweetBtn = document.getElementById('tweetBtn');
const tweetsContainer = document.getElementById('tweetsContainer');

// Handle tweet post
tweetBtn.addEventListener('click', function() {
    const tweetText = tweetInput.value.trim();

    // Only post if input is not empty
    if (tweetText.length > 0) {
        const tweetElement = document.createElement('div');
        tweetElement.className = 'tweet';

        // Add tweet HTML content
        tweetElement.innerHTML = `
            <div class="tweet-content">
                <img src="profile-pic.jpg" alt="Profile" class="profile-pic">
                <div class="tweet-body">
                    <p>${tweetText}</p>
                    <div class="tweet-actions">
                        <span><i class="far fa-heart"></i> Like</span>
                        <span><i class="far fa-comment"></i> Comment</span>
                        <span><i class="far fa-retweet"></i> Retweet</span>
                    </div>
                </


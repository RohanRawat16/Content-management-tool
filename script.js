document.addEventListener("DOMContentLoaded", function () {
    const contentTextarea = document.getElementById('content');
    const imageInput = document.getElementById('image');
    const addImageBtn = document.getElementById('addImage');
    const videoInput = document.getElementById('video');
    const addVideoBtn = document.getElementById('addVideo');
    const blogPreview = document.getElementById('blog');
    const publishBtn = document.getElementById('publish');

    addImageBtn.addEventListener('click', () => {
        const imageUrl = imageInput.value;
        const image = document.createElement('img');
        image.src = imageUrl;
        blogPreview.appendChild(image);
        imageInput.value = '';
    });

    addVideoBtn.addEventListener('click', () => {
        const videoUrl = videoInput.value;
        const video = document.createElement('iframe');
        video.src = videoUrl;
        video.width = '560';
        video.height = '315';
        blogPreview.appendChild(video);
        videoInput.value = '';
    });

    publishBtn.addEventListener('click', () => {
        const content = contentTextarea.value;
        const contentElement = document.createElement('p');
        contentElement.textContent = content;
        blogPreview.appendChild(contentElement);
        contentTextarea.value = '';
    });
});

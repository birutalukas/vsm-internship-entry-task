"use strict";

const request = new XMLHttpRequest();

request.open("GET", 'https://picsum.photos/v2/list');

request.onload = function() {
    request.responseText;

    let imgArr = JSON.parse(request.responseText);

    const photosToGenerate = 25;

    if (request.status >= 200 && request.status < 400) {
        for (let i = 0; i <= photosToGenerate; i++) {
            imgArr[i].download_url;
            imgArr[i].author;
            imgArr[i].width;
            imgArr[i].height;

            // Thumbnails preview
            const aside = document.querySelector('aside');

            const thumb = document.createElement('div');
            thumb.classList.add('thumb');

            const thumbOverlay = document.createElement('div');
            thumbOverlay.classList.add('overlay');

            let thumbImg = new Image(); 
            thumbImg.src = imgArr[i].download_url; 
            
            aside.appendChild(thumb);
            thumb.appendChild(thumbOverlay);
            thumb.appendChild(thumbImg);

            thumb.addEventListener('click', function() {
                
                let enlargeImg = document.getElementById("enlargeImg");
                enlargeImg.src = imgArr[i].download_url;

                document.querySelector(".imgText").innerHTML = '<h1>Author: <span>' + imgArr[i].author + '</span>.<br>Width: <span>' + imgArr[i].width + '</span>px <br>Height: <span>' + imgArr[i].height + '</span>px.</h1>';
            });
        }
    } else {
        alert('Images Load Error');
    }
}

request.send();


async function generateShortUrl() {
    const longUrl = document.getElementById("longUrl").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    if (response.ok) {
        const shortUrl = await response.text();
        document.getElementById("shortUrlResult").innerHTML = `
            <p>Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a> 
                <i class="fa-regular fa-copy" onclick="copyToClipboard()"></i>
            </p>`;
    } else {
        document.getElementById("shortUrlResult").innerHTML = "<p>Error creating Short URL</p>";
    }
}

function copyToClipboard() {
    const shortUrlText = document.getElementById("shortUrlResult").getElementsByTagName("a")[0];

    const tempInput = document.createElement("textarea");
    tempInput.value = shortUrlText.innerText;

    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Short URL copied to clipboard!");
}




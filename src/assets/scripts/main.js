// DOM elements
const main = document.getElementById("main");

const clearDOM = () => {
    main.querySelectorAll("*").forEach(e => e.remove());
};

// Download page layout
const downloadLayout = () => {
    clearDOM();
    
    // Main container
    const downloadContainer = document.createElement("div");
    downloadContainer.setAttribute("class", "download-container");

    // Section one
    const downloadSectionOne = document.createElement("section");
    downloadSectionOne.setAttribute("id", "download-section1");

    const slideshowContainer = document.createElement("div");
    slideshowContainer.setAttribute("class", "slideshow-container");

    const slideshowArt = document.createElement("img");
    slideshowArt.setAttribute("alt", "slideshow of images showcasing various characters from the game");
    slideshowArt.src = "./assets/images/characters/Emperor.png";

    // Section two
    const downloadSectionTwo = document.createElement("section");
    downloadSectionTwo.setAttribute("id", "download-section2");

    const newVersionContainer = document.createElement("div");
    newVersionContainer.setAttribute("class", "newest-container");

    const newVersionHeading = document.createElement("h2");
    newVersionHeading.setAttribute("id", "newest-heading");

    const newVersionPlatformLogo = document.createElement("img");
    newVersionPlatformLogo.setAttribute("alt", "windows platform logo");
    newVersionPlatformLogo.src = "./assets/icons/windows2.svg";

    const newVersionDownloadLink = document.createElement("a");
    newVersionDownloadLink.setAttribute("id", "newest-link");
    newVersionDownloadLink.href = "https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo+1.0.2.zip";
    newVersionDownloadLink.target = "_blank";
    newVersionDownloadLink.innerText = "Demo Version 1.0.2";

    // Section three
    const downloadSectionThree = document.createElement("section");
    downloadSectionThree.setAttribute("id", "download-section3");

    const oldVersionContainer = document.createElement("div");
    oldVersionContainer.setAttribute("class", "previous-container");

    const oldVersionHeading = document.createElement("h2");
    oldVersionHeading.setAttribute("id", "previous-heading");

    const oldVersionPlatformLogo = document.createElement("img");
    oldVersionPlatformLogo.setAttribute("alt", "windows platform logo");
    oldVersionPlatformLogo.src = "./assets/icons/windows2.svg";

    const oldVersionDownloadLinkOne = document.createElement("a");
    oldVersionDownloadLinkOne.setAttribute("id", "old-link1");
    oldVersionDownloadLinkOne.href = "https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo+1.0.1.zip";
    oldVersionDownloadLinkOne.target = "_blank";
    oldVersionDownloadLinkOne.innerText = "Demo Version 1.0.1";

    const oldVersionDownloadLinkTwo = document.createElement("a");
    oldVersionDownloadLinkTwo.setAttribute("id", "old-link2");
    oldVersionDownloadLinkTwo.href = "https://void-warrior-demo.s3.amazonaws.com/Void+Warrior+Demo.zip";
    oldVersionDownloadLinkTwo.target = "_blank";
    oldVersionDownloadLinkTwo.innerText = "Demo Version 1.0.0";

    // Append DDM
    downloadContainer.append(downloadSectionOne);
    downloadSectionOne.append(slideshowContainer);
    slideshowContainer.append(slideshowArt);
    downloadSectionOne.append(downloadSectionTwo);
    downloadSectionTwo.append(newVersionContainer);
    newVersionContainer.append(newVersionHeading);
    newVersionContainer.append(newVersionPlatformLogo);
    newVersionContainer.append(newVersionDownloadLink);
    downloadSectionTwo.append(oldVersionContainer);
    oldVersionContainer.append(oldVersionHeading);
    oldVersionContainer.append(oldVersionPlatformLogo);
    oldVersionContainer.append(oldVersionDownloadLinkOne);
    oldVersionContainer.append(oldVersionDownloadLinkTwo);

    main.append(downloadContainer);
};

// Nav buttons
const homeBtn = document.getElementById("home");
//homeBtn.addEventListener("click", homeLayout);

const downloadBtn = document.getElementById("download");
downloadBtn.addEventListener("click", downloadLayout);

const infoBtn = document.getElementById("info");
//infoBtn.addEventListener("click", infoLayout);

const supportBtn = document.getElementById("support");
//supportBtn.addEventListener("click", supportLayout);
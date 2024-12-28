import "./index.css";
import JSImage from "./assets/imageJS.jpg";

const mainTitle = document.createElement("h1");
mainTitle.textContent = "I love JavaScript";
const ImageHTML = document.createElement("img");
ImageHTML.src = JSImage;

document.body.append(mainTitle, ImageHTML);
const fontFamilies = [      
'Arial, sans-serif',
'Courier New, monospace',
'Georgia, serif',
'Times New Roman, serif',
'Trebuchet MS, sans-serif',
'Verdana, sans-serif',
'Impact, sans-serif',
'Comic Sans MS, cursive, sans-serif',
'Lucida Console, monospace',
'Tahoma, sans-serif'
];

function getRandomFontFamily() {
    const randomIndex = Math.floor(Math.random() * fontFamilies.length);
    return fontFamilies[randomIndex]
}

document.addEventListener("mousemove", () => {
    const paragraph = document.getElementById("paragraph");
    paragraph.style.fontFamily = getRandomFontFamily();   
});
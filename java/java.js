var spanLac = document.getElementById('lac');
var spanAc = document.getElementById('ac');
var spanEee = document.getElementById('eee');
var spanCag= document.getElementById('cag');
var spanDet = document.getElementById('det');
var spanAp = document.getElementById('ap');
var spanEcm = document.getElementById('ecm');
var spanCpp = document.getElementById('cpp');
var displayLac = false; // initialize display variable for lac to false
var displayAc = false; // initialize display variable for ac to false
var displayEee = false; // initialize display variable for ac to false
var displayCag = false; // initialize display variable for ac to false
var displayDet = false; // initialize display variable for ac to false
var displayAp = false; // initialize display variable for ac to false
var displayEcm = false; // initialize display variable for ac to false
var displayCpp = false; // initialize display variable for ac to false

function lac() {
    if (!displayLac) {
        spanLac.style.display = 'block';
        displayLac = true; // set display to true when showing the lac element
    } else {
        spanLac.style.display = 'none';
        displayLac = false; // set display to false when hiding the lac element
    }
}

function ac() {
    if (!displayAc) {
        spanAc.style.display = 'block';
        displayAc = true; // set display to true when showing the ac element
    } else {
        spanAc.style.display = 'none';
        displayAc = false; // set display to false when hiding the ac element
    }
}


function eee() {
    if (!displayEee) {
        spanEee.style.display = 'block';
        displayEee = true; // set display to true when showing the element
    } else {
        spanEee.style.display = 'none';
        displayEee = false; // set display to false when hiding the element
    }
}


function cag() {
    if (!displayCag) {
        spanCag.style.display = 'block';
        displayCag = true; // set display to true when showing the element
    } else {
        spanCag.style.display = 'none';
        displayCag = false; // set display to false when hiding the element
    }
}


function det() {
    if (!displayDet) {
        spanDet.style.display = 'block';
        displayDet = true; // set display to true when showing the element
    } else {
        spanDet.style.display = 'none';
        displayDet = false; // set display to false when hiding the element
    }
}


function ap() {
    if (!displayAp) {
        spanAp.style.display = 'block';
        displayAp = true; // set display to true when showing the element
    } else {
        spanAp.style.display = 'none';
        displayAp = false; // set display to false when hiding the element
    }ecm
}


function ecm() {
    if (!displayEcm) {
        spanEcm.style.display = 'block';
        displayEcm = true; // set display to true when showing the element
    } else {
        spanEcm.style.display = 'none';
        displayEcm = false; // set display to false when hiding the element
    }
}

function cpp() {
    if (!displayCpp) {
        spanCpp.style.display = 'block';
        displayCpp = true; // set display to true when showing the element
    } else {
        spanCpp.style.display = 'none';
        displayCpp = false; // set display to false when hiding the element
    }
}

var pdfFiles = {
    lac: [
        { url: "pdf/1.pdf", filename: "Tutorial 1 2 3 & 4" },
        { url: "pdf/2.pdf", filename: "Tutorial 5 6 & 7" },
        { url: "pdf/3.pdf", filename: "Tutorial 8 9 & 10" }
    ],
    ac: [
        { url: "pdf/4.pdf", filename: "UNIT 1 & UNIT 2"},
        { url: "pdf/5.pdf", filename: "UNIT 3 & UNIT 4"},
        { url: "pdf/6.pdf", filename: "UNIT 5 & UNIT 6"}
    ],
    eee: [
        { url: "pdf/7.pdf", filename: "UNIT 1 & UNIT 2"},
        { url: "pdf/8.pdf", filename: "UNIT 3 & UNIT 4"},
        { url: "pdf/9.pdf", filename: "UNIT 5 & UNIT 6"}
    ],
    cag: [
        { url: "pdf/10.pdf", filename: " Orthographic Projectiom" },
        { url: "pdf/11.pdf", filename: " Isomatric Projection" },
        { url: "pdf/12.pdf", filename: " Answers" }
    ],
    det: [
        { url: "pdf/13.pdf", filename: "Tutorial 1 2 3 & 4" },
        { url: "pdf/14.pdf", filename: "Tutorial 5 6 & 7" },
        { url: "pdf/15.pdf", filename: "Tutorial 8 9 & 10" }
    ],
    ap: [
        { url: "pdf/16.pdf", filename: "UNIT 1" },
        { url: "pdf/17.pdf", filename: "UNIT 2" },
        { url: "pdf/18.pdf", filename: "UNIT 3" }
    ],
    ecm: [
        { url: "pdf/19.pdf", filename: "UNIT 1" },
        { url: "pdf/20.pdf", filename: "UNIT 2" },
        { url: "pdf/21.pdf", filename: "UNIT 3" }
    ],
    cpp: [
        { url: "pdf/22.pdf", filename: "Overview of C" },
        { url: "pdf/23.pdf", filename: "Array" },
        { url: "pdf/24.pdf", filename: "Function" }
    ]
   
};

function generateDownloadLinks(subject) {
    var downloadLinksContainer = document.getElementById('downloadLinks_' + subject);
    downloadLinksContainer.innerHTML = ''; // Clear previous links

    pdfFiles[subject].forEach(function(pdf) {
        var downloadLink = document.createElement('a');
        downloadLink.href = pdf.url;
        downloadLink.download = pdf.filename;
        downloadLink.innerText = "Download " + pdf.filename;

        var lineBreak = document.createElement('br');

        downloadLinksContainer.appendChild(downloadLink);
        downloadLinksContainer.appendChild(lineBreak);
    });
}




let paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

let selectorsElements = document.getElementById('selectorsElements');
selectorsElements.style.textAlign = 'center';
selectorsElements.style.textTransform = "uppercase";
selectorsElements.style.fontSize = '2em';
selectorsElements.style.color = 'red';
selectorsElements.style.lineHeight = '3';

let title = document.getElementById('page-title');
title.innerText = "O Hobbit: Uma Jornada Inesperada";
title.style.backgroundColor = 'blue';
title.style.padding = '2%';

let secondParagraph = document.getElementById('second-paragraph');
secondParagraph.style.color = 'yellowgreen';
secondParagraph.style.textTransform = "uppercase";
secondParagraph.style.fontWeight = 'bold';

let subTitle = document.getElementById('subtitle');
subTitle.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
subTitle.style.color = 'black';
subTitle.style.width = '50%';
subTitle.style.padding = '5%';
subTitle.style.textAlign = 'center';
subTitle.style.textTransform = 'uppercase';
subTitle.style.fontSize = '2em';

let paragraphs = document.getElementsByClassName('paragraph');
for (let i = 0; i < paragraphs.length; i += 1) {
  paragraphs[i].style.backgroundColor = 'black';
}
paragraphs[0].style.textTransform = 'uppercase';

subTitleTag = document.getElementsByTagName('h4');
subTitleTag[0].style.color = 'white'; 


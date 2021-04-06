let paragraph = document.querySelector("#paragraph");
paragraph.style.color = "red";

let selectorsElements = document.querySelector('#selectorsElements');
selectorsElements.style.textAlign = 'center';
selectorsElements.style.textTransform = "uppercase";
selectorsElements.style.fontSize = '2em';
selectorsElements.style.color = 'red';
selectorsElements.style.lineHeight = '3';
selectorsElements.innerText = 'query selector'

let title = document.querySelector('#page-title');
title.innerText = "O Hobbit: Uma Jornada Inesperada";
title.style.backgroundColor = 'blue';
title.style.padding = '2%';

let secondParagraph = document.querySelector('#second-paragraph');
secondParagraph.style.color = 'yellowgreen';
secondParagraph.style.textTransform = "uppercase";
secondParagraph.style.fontWeight = 'bold';

let subTitle = document.querySelector('h4');
subTitle.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
subTitle.style.color = 'white';
subTitle.style.width = '50%';
subTitle.style.padding = '5%';
subTitle.style.textAlign = 'center';
subTitle.style.textTransform = 'uppercase';
subTitle.style.fontSize = '2em';
subTitle.style.marginLeft = 'auto';
subTitle.style.marginRight = 'auto';

let paragraphs = document.querySelectorAll('.paragraph');
for (let i = 0; i < paragraphs.length; i += 1) {
  paragraphs[i].style.backgroundColor = 'black';
}
paragraphs[0].style.textTransform = 'uppercase'; 


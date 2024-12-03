const draggable = document.querySelector(".draggable");
const dropTarget = document.querySelector(".drop-target");

const highlightClass = "highlighted";
const transparentClass = "semi-transparent";

const dragFormat = "text/plain";
const getDragPayload = () => (Math.random() < 0.5 ? "🍎" : "🍏");

const dragImg = new Image();
dragImg.src = `data:image/svg+xml,
<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 19%22>
 <text y=%2215px%22> 🍎</text>
 </svg>`;

const handleDragStart = event => {
    event.dataTransfer.setDragImage(dragImg, 0, 0);
    event.dataTransfer.setData(dragFormat, getDragPayload());
    event.currentTarget.classList.add(transparentClass);
};

const handleDragEnd = event => {
    event.currentTarget.classList.remove(transparentClass);
}
const handleDragOver = event => {
    event.preventDefault();
}
const handleDragEnter = event => {
    event.currentTarget.classList.add(highlightClass);
}
const handleDragLeave = event => {
    event.currentTarget.classList.remove(highlightClass);
}

const handleDrop = event => {
    event.preventDefault();
    const text = event.dataTransfer.getData(dragFormat);
    const elem = document.createElement('p');
    elem.textContent = text;
    event.currentTarget.appendChild(elem);
    event.currentTarget.classList.remove(highlightClass);
};

draggable.addEventListener('dragstart', handleDragStart);
draggable.addEventListener('dragend', handleDragEnd);
dropTarget.addEventListener('dragover', handleDragOver);
dropTarget.addEventListener('dragenter', handleDragEnter);
dropTarget.addEventListener('dragleave', handleDragLeave);
dropTarget.addEventListener('drop', handleDrop);
function changeColors() {
    const body = document.body;

    const randomColor = () => Math.floor(Math.random() * 256);
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;


    const textColor = `rgb(${255-randomColor()}, ${255-randomColor()}, ${255-randomColor()})`;

    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}
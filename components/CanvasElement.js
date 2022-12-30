export class MyCanvas {
  init(containerElementId) {
    // create Canvas
    const container = document.getElementById(containerElementId);
    const canvas = document.createElement("canvas");
    canvas.id = "canvas";

    container.appendChild(canvas);

    // tut tits https://konvajs.org/docs/select_and_transform/Basic_demo.html

    // http://jsfiddle.net/M8kms/2/
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
  }
}

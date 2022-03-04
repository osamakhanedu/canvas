window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Resizing
  function resize(canvas) {
    canvas.width = window.innerWidth - 30;
    canvas.height = window.innerHeight - 30;
  }

  resize(canvas);

  window.addEventListener("resize", () => {
    resize(canvas);
  });

  // shape
  function rectangle(x = 20, y = 20, width = 50, height = 50, type = "fill") {
    if (type === "fill") {
      ctx.fillStyle = "black";

      ctx.fillRect(x, y, width, height);
    } else {
      // Shapes
      ctx.strokeStyle = "black";
      ctx.strokeRect(x, y, width, height);
    }
  }

  //Random Lines
  //   ctx.beginPath();
  //   ctx.moveTo(30, 30);
  //   ctx.lineTo(200, 30);
  //   ctx.lineTo(200, 100);
  //   ctx.lineTo(30, 100);
  //   ctx.closePath();
  //   ctx.stroke();

  //  variables
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(event) {
    if (!painting) return;

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
  }

  // event listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});

function animateSS() {
  var ss = document.getElementById("solarSystem");
  var ssContext = ss.getContext('2d');

  //Draw Space
  ssContext.fillStyle = "darkblue";
  ssContext.fillRect(0, 0, 450, 400);
  ssContext.save();
  ssContext.translate(220, 200);

  //Draw Sun
  ssContext.fillStyle = "yellow";
  ssContext.beginPath();
  ssContext.arc(0, 0, 25, 0, Math.PI * 2, true);
  ssContext.fill();

  //Draw Earth orbit
  ssContext.strokeStyle = "black";
  ssContext.beginPath();
  ssContext.arc(0, 0, 150, 0, Math.PI * 2);
  ssContext.stroke();

  //Revolution of Earth
  var now = new Date();
  var seconds = ((now.getSeconds() * 1000) + now.getMilliseconds()) / 1000;
  var anglePerSecond = ((Math.PI * 2) / 60);
  ssContext.rotate(anglePerSecond * seconds);

  //Draw Earth
  ssContext.translate(150, 0);
  ssContext.fillStyle = "green";
  ssContext.beginPath();
  ssContext.arc(0, 0, 13, 0, Math.PI * 2, true);
  ssContext.fill();

  //Revolution of Moon
  var anglePerSecond = 12 * ((Math.PI * 2) / 60);
  ssContext.rotate(anglePerSecond * seconds);

  //Draw Moon
  ssContext.translate(0, 35);
  ssContext.fillStyle = "white";
  ssContext.beginPath();
  ssContext.arc(0, 0, 5, 0, Math.PI * 2, true);
  ssContext.fill();
  ssContext.restore();
}
setInterval(animateSS, 100);
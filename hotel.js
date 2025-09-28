document.getElementById("bookingForm").addEventListener("submit", function(event){
  event.preventDefault();

  let name = document.getElementById("name").value;
  let roomPrice = parseInt(document.getElementById("room").value);
  let days = parseInt(document.getElementById("days").value);
  let guests = parseInt(document.getElementById("guests").value);

  let total = roomPrice * days;

  document.getElementById("output").innerHTML = `
    <h3>Booking Details</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Room Price:</b> $${roomPrice}/night</p>
    <p><b>Days:</b> ${days}</p>
    <p><b>Guests:</b> ${guests}</p>
    <p><b>Total Cost:</b> $${total}</p>
    <p style="color:green; font-weight:bold;">✅ Booking Successful!</p>
  `;
});

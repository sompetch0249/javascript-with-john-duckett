var hotel = {
  name: "Park",
  rooms: 140,
  booked: 75,
  checkAvaibility: function() {
    return this.rooms - this.booked;
  }
};

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elRoom = document.getElementById("rooms");
elRoom.textContent = hotel.checkAvaibility();

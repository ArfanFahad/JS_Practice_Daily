/* 

class MetroStation {
  constructor(station) {
    this.station = station;
    this.next = null;
  }
}

const motijheel = new MetroStation("Motijheel");
const paltan = new MetroStation("Paltan");
const shahbagh = new MetroStation("Shahbagh");
const kawranbazar = new MetroStation("Kawranbazar");
const farmgate = new MetroStation("Farmgate");

motijheel.next = paltan;
paltan.next = shahbagh;
shahbagh.next = kawranbazar;
kawranbazar.next = farmgate;

function objectPass(station) {
  let current = station;

  while (current !== null) {
    console.log(current.station);
    current = current.next;
  }
}

objectPass(motijheel);

*/

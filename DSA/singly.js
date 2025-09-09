class Station {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

function traverse(head) {
  let current = head;

  while (current !== null) {
    console.log(`Arrived at: ${current.name}`);
    current = current.next;
  }
}

const stationA = new Station("Station A");
const stationB = new Station("Station B");
const stationC = new Station("Station C");
const stationD = new Station("Station D");
const stationE = new Station("Station E");

stationA.next = stationB;
stationB.next = stationC;
stationC.next = stationD;
stationD.next = stationE;

traverse(stationA);

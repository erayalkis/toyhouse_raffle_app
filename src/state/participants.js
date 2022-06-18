import { reactive } from 'vue'

export const participants = reactive({
  list: {},
  // Holds original values, list holds changed values
  // I know its confusing
  changed: {},
  removed: [],
  winners: [],
  loaded: false,
  setParticipants(obj) {
    this.list = obj;
  },
  deleteParticipants() {
    const confirmation = confirm("Are you sure you want to delete all loaded participants?");
    if(!confirmation) return;

    this.list = {};
    this.loaded = false;
    this.removed = [];
    this.changed = {};
    this.winners = [];
  },
  remove(key) {
    this.removed.push({ username: key, details: this.list[key] })
    delete this.list[key];
  },
  increment(key) {
    let user = this.list[key]
    user.ticket_count += 1;
  },
  decrement(key) {
    let user = this.list[key]
    user.ticket_count -= 1;
  },
  winnersArray(n) {
    const participantsByTicketCount = [];
    for(let user in this.list) {
      let ticket_count = this.list[user].ticket_count
      for(ticket_count; ticket_count > 0; ticket_count--) {
        let data = {}
        data[user] = this.list[user];
        participantsByTicketCount.push(data)
      }
    }
  
    const seenUsers = [];
    const seenIndicies = [];
    const winners = [];
    console.log(`Winner count is ${n}`);
    while(n > 0) {  
      if(winners.length === Object.keys(this.list).length) break;
  
      let idx = this.getRandomIndex(participantsByTicketCount.length);
      let selectedUser = participantsByTicketCount[idx];
      let userAlreadySeen = seenUsers.filter(user => {
        let arrayUserUsername = Object.keys(user)[0];
        let selectedUserUsername = Object.keys(selectedUser)[0]
  
        return arrayUserUsername === selectedUserUsername;
      }).length > 0;
      
      if(userAlreadySeen || seenIndicies.includes(idx)) {
        continue;
      }
      seenUsers.push(selectedUser);
      seenIndicies.push(idx);
      winners.push(selectedUser);
  
      n--;
    }
  
    this.winners = winners;
  },
  getRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }
});


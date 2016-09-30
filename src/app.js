function App(){
  this.notes = [];
}

App.prototype = {

  createNote: function(string){
    this.notes.push(string);
  },

  showFull: function(index) {
    return this.notes[index];
  },

  mapNotes: function() {
    return this.notes.map(function(s) {
      return s.slice(0,20);
    });
  }

};

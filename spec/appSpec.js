describe("App", function() {
  var app;

  describe("createNotes", function() {
    it("has notes", function(){
      app = new App();
      expect(app.notes).toEqual([]);
    });

    it("createNotes will add a new note", function(){
      app = new App();
      app.createNote("Remember to code");
      expect(app.notes.length).toEqual(1);
    });
  });

  describe("showFull", function() {
    it("shows the full note", function() {
      app = new App();
      app.createNote("Remember to code every day");
      expect(app.showFull(0)).toEqual("Remember to code every day");
    });
  });

  describe("mapNotes", function() {
    it("show the abreviated notes", function() {
      app = new App();
      app.createNote("Remember to code every day");
      expect(app.mapNotes()).toContain("Remember to code eve");
    });
  });

});

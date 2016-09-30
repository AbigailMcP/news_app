
describe("Interface", function(){
  var ournote = "this is a note"

  it("injects html", function(){
      testWindow = window.open('http://localhost:8125/');

      testWindow.onload = function() {
        console.log(testWindow); //undefined
        console.log(window);
      testWindow.document.getElementById('new-note').value=ournote;
      testWindow.document.getElementById('create').click();
      var dom = testWindow.document.getElementById('headline-0').innerHTML;
      expect(dom).toEqual(ournote);
      testWindow.close();

    };

  });
});

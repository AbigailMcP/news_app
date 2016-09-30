describe('Hide function', function() {

  var longString = "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.";

  it('hides article on creation of note', function() {
      testWindow = window.open('http://localhost:8125');
      testWindow.onload = function() {
        console.log('1 ');
        console.log('2 ' + testWindow.document);
        testWindow.document.getElementById('new-note').value = longString;
        testWindow.document.getElementById('create').click();
        expect(testWindow.document.getElementById('article-0').style.display).toEqual('none');
        testWindow.close();
      };

  });

});

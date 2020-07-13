/*
Solution of assignment 4:
Expected output:
Hello Devika
Good Bye John
Hello Raj 
Good Bye Joel
Good Bye Jenny
Hello Thomas
Good Bye Jommy
Hello Thara
*/

(function() {
  var names = ["Devika", "John", "Raj", "Joel", "Jenny", "Thomas", "Jommy", "Thara"];
  for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
          byeSpeaker.speak(names[i]);
      } else {
          helloSpeaker.speak(names[i]);
      }
  }
})();

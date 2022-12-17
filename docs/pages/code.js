      function getEventTarget(e) {
          e = e || window.event;
          return e.target || e.srcElement; 
      }

      var ul = document.getElementById('gallery01');
      ul.onclick = function(event) {
          var target = getEventTarget(event);
          console.log(target.id);

          document.getElementById('imgid').src=`../../images/pets/${target.id}.png`;
      };
      //function changeImage(path) {
      //  document.getElementById("imgid").src=`../../images/pets/${path}.png`;
      //}
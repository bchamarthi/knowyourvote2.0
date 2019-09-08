(function() {

    var all = 6;
    var results = document.querySelector('#results');
    var counter = document.querySelector('#counter');

    function updatecounter() {
        --all;
        counter.innerHTML = all;
        console.log(all);
        if (all <= 0) {
          console.log("hello");

        }
    }

    document.body.addEventListener('yepcard', function(ev) {
        results.innerHTML += '<li>' + ev.detail.card.innerHTML + '</li>';
        updatecounter();
    });

    document.body.addEventListener('nopecard', function(ev) {
        updatecounter();
    });

    document.body.addEventListener('deckempty', function(ev) {
        results.classList.add('live');
        ev.detail.container.style.display = 'none';
        console.log(results);
        for(var i =0; i<results.childNodes.length; i++){
          $(results.childNodes[i]).addClass("image");
          console.log(results.childNodes[i]);
          console.log(document.getElementsByClassName('image'));
        }

        for(i=0; i<document.getElementsByClassName('image').length; i++){
        document.getElementsByClassName('image')[i].style.padding = "300px";
        document.getElementsByClassName('image')[i].style.height = "100px";
        document.getElementsByClassName('image')[i].style.width = "100px";
        }

    });


//document.body.addEventListener ('onmouseout','callback')
    window.addEventListener('load', function(ev) {
        // check if template is supported
        // browsers without it wouldn't need to
        // do the content shifting
        // if ('content' in document.createElement('template')) {
        //     // get the template
        //     var t = document.querySelector('template');
        //     // get its parent element
        //     var list = t.parentNode;
        //     // cache the template content
        //     var contents = t.innerHTML;
        //     // kill the template
        //     list.removeChild(t);
        //     // add the cached content to the parent
        //     list.innerHTML += contents;
        // }
        var listitems = document.body.querySelectorAll('.card');
        all = listitems.length;
        //updatecounter();
    });

})();

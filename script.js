// var arr = ["circle", "pentagon", "squ",]
var btn = document.querySelector("button")
var box = document.querySelector(".box")
var body = document.querySelector("body")
var arr = ["circle", "pentagon", "squ", "oct", "star", "rom","tri"]


    btn.addEventListener("click",function(){
        if(box.classList.contains('circle'))
        {
            box.classList.remove('circle');
            box.classList.remove('squ');
            box.classList.remove('oct');
            box.classList.add('pentagon');
            // body.style.backgroundColor ="darkgoldenrod";

        }
        else if(box.classList.contains('pentagon'))
        {
            box.classList.remove('pentagon');
            box.classList.remove('oct');
            box.classList.remove('circle')
            box.classList.remove('tri');
            box.classList.remove('rom');
            box.classList.remove('star')

            box.classList.add('squ');

    // body.style.backgroundColor ="orangered";

        }
        else if(box.classList.contains('squ'))
        {
            box.classList.remove('pentagon');
            box.classList.remove('squ');
            box.classList.remove('circle')
            box.classList.remove('tri');
            box.classList.remove('rom');
            box.classList.remove('star')

            box.classList.add('oct');
            // body.style.backgroundColor ="green";

        } 
     else if(box.classList.contains('oct'))
        {
            box.classList.remove('pentagon');
            box.classList.remove('squ');
            box.classList.remove('oct')
            box.classList.remove('tri');
            box.classList.remove('rom');
            box.classList.add('star')

            box.classList.remove('circle');
            // body.style.backgroundColor ="crimson";


        }
        else if(box.classList.contains('star'))
        {
            box.classList.remove('pentagon');
            box.classList.remove('squ');
            box.classList.remove('oct')
            box.classList.remove('tri');
            box.classList.add('rom');
            box.classList.remove('star')

            box.classList.remove('circle');
            // body.style.backgroundColor ="crimson";


        }
        else if(box.classList.contains('rom'))
        {
            box.classList.remove('pentagon');
            box.classList.remove('squ');
            box.classList.remove('oct')
            box.classList.add('tri');
            box.classList.remove('rom');
            box.classList.remove('star')

            box.classList.remove('circle');
            // body.style.backgroundColor ="crimson";


        }
        else{
            box.classList.remove('pentagon');
            box.classList.remove('squ');
            box.classList.remove('oct')
            box.classList.remove('tri');
            box.classList.remove('rom');
            box.classList.remove('star')

            box.classList.add('circle');
            // body.style.backgroundColor ="crimson";

        }




         
     })
    



var lastVisitedBox = "none";

function showList(X)
{

    for (var i = 0; i <= 20; i++) {

        let name = 'list_container' + i;

        try {
          
          if (i == X) {
            
            if (document.getElementById(name).childElementCount <= 1)
                document.getElementsByClassName('error_container')[0].hidden = false;
            else {
                document.getElementsByClassName('error_container')[0].hidden = true;
              	document.getElementById(name).hidden = false;
            }
            
          } else
            document.getElementById(name).hidden = true;

          k++;
        } catch {
            console.error('ERROR - Target not found');
        }

    }

}


function showBox(X)
{

    let target = document.getElementsByClassName('hover_container');

    try {
        for (var i=0; i<target.length; i++) {
            target[i].style.display = "none";
        }
    } catch {
        console.error("Invalid element !");
    }

    if (X < target.length && X != lastVisitedBox) {

        target[X].style.display = "block";
        lastVisitedBox = X;

    } else if (X >= target.length)
        console.error("Invalid index - Max index for current element is " + target.length);
    else
        lastVisitedBox = "none";

}

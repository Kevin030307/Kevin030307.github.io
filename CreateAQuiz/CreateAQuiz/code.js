function gradeQuiz()
{
    var score = 0;
    var output = "";

    //Question 1
    if(document.getElementById("q1a").checked == true)
    {
        score++;
        output += "Question 1: Correct<br>";
    }
    else
    {
        output += "Question 1: Wrong<br>";
    }

    //Question 2
    if(document.getElementById("q2c").checked == true)
    {
        score++;
        output += "Question 2: Correct<br>";
    }
    else
    {
        output += "Question 2: Wrong<br>";
    }

    //Question 3
    if(document.getElementById("q3a").checked == true &&
       document.getElementById("q3b").checked == true &&
       document.getElementById("q3d").checked == true)
    {
        score++;
        output += "Question 3: Correct<br>";
    }
    else
    {
        output += "Question 3: Wrong<br>";
    }

    //Question 4
    if(document.getElementById("q4a").checked == true &&
       document.getElementById("q4b").checked == true &&
       document.getElementById("q4d").checked == true)
    {
        score++;
        output += "Question 4: Correct<br>";
    }
    else
    {
        output += "Question 4: Wrong<br>";
    }

    output += "<h3>Score: " + score + " / 4</h3>";

    document.getElementById("output").innerHTML = output;
}
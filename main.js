students=[];

function submit(){
    var display_students=[];
    for( var j=1; j<=4;j++){

        var name=document.getElementById("name_of_the_student_"+j).value;
        students.push(name);
    }
    var length=students.length;
    for(var k=0; k<length; k++){
        display_students.push("<h3> Name-"+students[k]+"</h3>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_students;
    var removecommas=display_students.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    students.sort();
    var sorting=[];
    var length2=students.length;
    for(var k=0; k<length2; k++){
        sorting.push("<h1> "+students[k]+"</h1>");
    }
    var remove=sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove;

} 

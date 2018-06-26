var newMatch = '';
var name = '';
var photoImg = '';
var answers = '';

$('#submit').on('click', function (event) {
    event.preventDefault();

    newMatch = {
        name = $('#nameInput').val().trim(),
        photoImg = $('#photoInput').val().trim(),

        answers =[
            $('#q1').parseInt().val(),
            $('#q1').parseInt().val(),
            $('#q3').parseInt().val(),
            $('#q4').parseInt().val(),
            $('#q5').parseInt().val(),
            $('#q6').parseInt().val(),
            $('#q7').parseInt().val(),
            $('#q8').parseInt().val(),
            $('#q9').parseInt().val(),
            $('#q10').parseInt().val(),
        ],
    };
    console.log(newMatch);

  $.post("/api/friends", newMatch);
});
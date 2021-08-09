$(document).ready(function() {
    token = window.localStorage.getItem('oba-token')
    if (!token) {
        setTimeout(() => {
            window.location.href = 'login.html'
        }, 500);
        return
    }
    const table = $('#my-classes-tbody')
    $.ajax({
        type: 'GET',
        url: baseUrl + '/classes/all',
        headers: { 'Authorization': 'Bearer ' + token },
        success: ({ result }) => {
            result.forEach(element => {
                table.append($(`
<tr>
    <td>${element.course_id.faculty}</td>
    <td>${element.course_id.name}</td>
    <td>${element.term}</td>
    <td>${element.year}</td>
    <td>${element.status}</td>
</tr>                
                `).on('click', () => {
                    window.location.href = 'addclass.html#' + element._id
                }))
            })
        },
        error: (e) => {
            window.localStorage.removeItem('oba-token')
            alert(`error loading page: ${e}`)
            window.location.href = 'login.html'
        }
    })
})

$('#add-class-btn').on('click', function() {
    window.location.href = 'addclass.html'
})


<script>

$(document).ready(function(){
  	$("#inputFacultyName").on("keyup", function() {
   		var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  		$("#inputCourseNumber").on("keyup", function() {
   		 var value = $(this).val().toLowerCase();
    	$("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  		$("#inputTerm").on("keyup", function() {
   		 var value = $(this).val().toLowerCase();
    	$("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  		$("#inputYear").on("keyup", function() {
   		 var value = $(this).val().toLowerCase();
    	$("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  		$("#inputStatus").on("keyup", function() {
   		 var value = $(this).val().toLowerCase();
    	$("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
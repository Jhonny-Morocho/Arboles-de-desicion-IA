
$('#idFormulario').on('submit',function(e){   
 e.preventDefault();
 var data=$(this).serializeArray();
 console.log(data[0]);
 console.log(data[1]);
 console.log(data[2]);
 console.log(data[3]);
 console.log(data[4]);
 
  var datos2={
             data: [{
             "AcceptedCmp3": data[0].value,
             "AcceptedCmp4": data[1].value,
             "AcceptedCmp5": data[2].value,
             "AcceptedCmp1": data[3].value,
             "AcceptedCmp2": data[4].value,
             "Complain": 0
       }
     ]
   }
//   var datos2={
//     data: [{
//     "AcceptedCmp3": 1,
//     "AcceptedCmp4": 1,
//     "AcceptedCmp5": 1,
//     "AcceptedCmp1": 1,
//     "AcceptedCmp2": 1,
//     "Complain": 0
// }
// ]
// }

  // ya tengo el json
  console.log(JSON.stringify(datos2));

  var url="https://go.rapidminer.com/am/api/deployments/33947198-27c3-443e-ba0b-9ad25ced8b35";
  $.ajax({
    type: "POST",
    data: JSON.stringify(datos2),
    url: url,
    contentType: "application/json"
}).done(function(res) {    
    console.log(res.data);
      //$('.aceptacion').html(aceptacion[0][prediction]);
      $.each(res.data, function(index,value){
          $.each(value, function (index, data) {
        //     console.log();
            if (index == "prediction(Response)") {
              console.log(data);
                if(data==1.00){
                  $('.aceptacion').html('<div class="alert alert-primary" role="alert">Acepta la ultima campaña</div>');
                  toastr.success('Acepto La ultima campaña');
                }else{
                  toastr.error('No acepta la campaña ');
                  $('.aceptacion').html('<div class="alert alert-danger" role="alert">Rechazo la ultima campaña</div>');
                }

              }
            })
        })
     });
    

});




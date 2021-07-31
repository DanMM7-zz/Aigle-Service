//Send email
function sendEmail(params) {

  var tempParams = {
    from_name: document.getElementById("floatingname").value,
    to_name: "Mr Ntambwe",
    from_phone: document.getElementById("floatingphone").value,
    from_company: document.getElementById("floatingcompany").value,
    from_subject: document.getElementById("floatingsubject").value,
    message: document.getElementById("floatingtextarea").value,
    reply_to: document.getElementById("floatingemail").value,
  };

  console.log(tempParams);

  emailjs.send("service_b0eky17", 'template_t5xccyv', tempParams).then(function(res){
    console.log("success", res.status);
  });

}

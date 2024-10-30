function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "victorysharon0@gmail.com",
        Password : "BA24BD2F2517C2F4C27DOE8C79F792DEF9DD",
        To : 'uzushyz@gmail.com',
        From : "victorysharon0@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}
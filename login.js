function login() {
        
        let emails = [
            'otavio@frontend.com.br',
            'bruno@frontend.com.br',
            'andre@frontend',
            'profednaldo@cd.com.br',
            'julio@estudande.com.br'
        ]
        let pwd = [
            '0t2v10',
            '84un0',
            '2ndr3',
            'prof',
            'juca'
        ]

        let email = document.getElementById('email').value
        let senha = document.getElementById('senha').value
        
        let limite = 1
        let acesso = 0

        
        for (i in emails) {
            if (email == emails[i]) {
                    acesso = 1
                if (senha == pwd[i]) {
                  alert("acesso liberado")
                    acesso = 1
                      break
                }
                    else {
                      alert("Senha de acesso incorreta, redigite!")
                    } 
            }
        }
        if (acesso == 0) {
          alert("usuário não cadastrado")
        }
    }       
            
      
//while (limite <=3) {
               // senha = prompt( ` Password......: ${limite}/3: ` )
               //                      limite++  
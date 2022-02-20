
document.querySelector('#ok')
    .addEventListener('click', () => {
        let nev = document.forms['ok']['nev'].value;
        let jelszo = document.forms['ok']['jelszo'].value;
        let email = document.forms['ok']['email'].value;
        let szul  = document.forms['ok']['szul'].value;

        let felhasznalo = {
            nev : nev,
            jelszo : jelszo,
            email : email,
            szul: szul,
        };
        console.log(felhasznalo);
    });
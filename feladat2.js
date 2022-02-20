document.querySelector('#felvetel')
    .addEventListener('click', () => {
        let nev = document.forms['felvetel']['nev'].value;
        let telszam = document.forms['felvetel']['telszam'].vaue;
        let irszam = document.forms['felvetel']['irszam'].value;
        let varos  = document.forms['felvetel']['varos'].value;
        let utca  = document.forms['felvetel']['utca'].value;
        let alap  = document.forms['felvetel']['alap'].value;
        let feltet = document.forms['felvetel']['feltet'].value;
        let egyeb = document.forms['felvetel']['egyeb'].value;
        let megrendeles = {
            nev : nev,
            telszam : telszam,
            irszam : irszam,
            varos: varos,
            utca: utca,
            alap: alap,
            feltet: feltet,
            egyeb: egyeb
        };
        console.log(megrendeles);
    });
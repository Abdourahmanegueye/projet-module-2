

let  infos = [
    {
        titre : "Vente de tussu" ,
        montant : 40000,
        action : false
    },
    {
        titre : "Vente de Accesoir" ,
        montant : 20000,
        action : false
    }
];

let  infos2 = [
    {
        titre : "Vente de tussu" ,
        montant : 480000,
        action : false
    },
    {
        titre : "Vente de Accesoir" ,
        montant : 290000,
        action : false
    }
];

function information(){
    document.getElementById("info_depens").innerHTML = ""

    let index = 0
    let totalMontantDepense = 0
    for(depense of infos){
        totalMontantDepense += parseFloat(depense.montant);
        let content = `
        <tbody id="info_depens">
            <tr>
                <td>${depense.titre}</td>
                <td>${depense.montant}</td>
                <td class="action" onclick="deletDepense(${index})">
                <button class="delet">Supprimer</button>
                </td>
            </tr>
        </tbody>
        `
    
        document.getElementById("info_depens").innerHTML += content
        index++
    }
    document.getElementById("depense").innerHTML = ` ${totalMontantDepense.toFixed(2)} F `;

    return totalMontantDepense

}
information()





/* ==================== PUP OP  ======================== */ 



var number = []
function popup(){
    document.querySelector(".show_login").addEventListener("click", function() {
        document.querySelector(".popup").style.visibility = "visible";
    })
    
    document.querySelector(".popup .close_btn").addEventListener("click", function() {
        document.querySelector(".popup").style.visibility = "hidden"
    })

    

}
popup()

document.getElementById("ajouter").addEventListener("click",() => {
    let depense = document.getElementById("input_montant").value;
    let titre = document.getElementById("input_titre").value
    let lesInfos = {
        titre : titre,
        montant : depense,
        action : false
    }
    infos.push(lesInfos)
    number.push(depense)
    document.getElementById("depense").innerHTML = number


    information()
    cacul()
    // document.getElementById("input_titre").innerHTML = " "
    // document.getElementById("input_montant").innerHTML = " "
    document.querySelector(".popup").style.visibility = "hidden";
})

// popup()


// DELET
function deletDepense(index){

    // infos.splice(index, 1)
    // number.pop()
    // document.getElementById("depense").innerHTML = number
    // information()


    let info = infos[index]
    let cofirmer = confirm("Etes-vous sur de supprimer " + info.titre)

    if(cofirmer == true){
        infos.splice(index, 1)
        number.pop()
        document.getElementById("depense").innerHTML = number
        
        information()
        cacul()
    }
}

/* ================== INFO REVENU */ 

function info_revenu(){
    document.getElementById("info_revenu").innerHTML = ""

    let supprimer = 0
    let totalMontantRevenu = 0
    for(info1 of infos2){

        totalMontantRevenu += parseFloat(info1.montant);
        let content = `
        <tbody id="info_depens">
            <tr>
                <td>${info1.titre}</td>
                <td>${info1.montant}</td>
                <td class="action" onclick="deletRevenu(${supprimer})">
                <button class="delet">Supprimer</button>
                </td>
                
            </tr>
        </tbody>
        `
    
        document.getElementById("info_revenu").innerHTML += content
        supprimer++
    }
    document.getElementById("budget").innerHTML = ` ${totalMontantRevenu.toFixed(2)} F`;
    return totalMontantRevenu

}
info_revenu()



document.getElementById("ajout_revenu").addEventListener("click", ()=> {
        
    document.querySelector(".formulaire2").style.visibility = "visible";
    
    document.querySelector(".formulaire2 .close2").addEventListener("click", function() {
        document.querySelector(".formulaire2").style.visibility = "hidden"
    })
})


let revenu = []
document.getElementById("ajouter_rev").addEventListener("click",() => {
    let budget = document.getElementById("montant").value;
    let titre = document.getElementById("titre").value
    let lesInfos = {
        titre : titre,
        montant : budget,
        action : false
    }
    infos2.push(lesInfos)
    revenu.push(budget)
    document.getElementById("budget").innerHTML = revenu

    
    
    info_revenu()
    cacul()
    document.querySelector(".formulaire2").style.visibility = "hidden";
})

// DELET
function deletRevenu(supprimer){

    // infos.splice(supprimer, 1)
    // number.pop()
    // document.getElementById("budget").innerHTML = revenu
    // information()


    let info = infos2[supprimer]
    let cofirmer = confirm("Etes-vous sur de supprimer " + info.titre)

    if(cofirmer == true){
        infos2.splice(supprimer, 1)
        revenu.pop()
        document.getElementById("budget").innerHTML = revenu
        
        info_revenu()
        cacul()
    }
}

/* ================ calcul ==================== */ 


function cacul(){
    let totalRevenu = info_revenu()
    let totalDepense = information()

    let moyen = (totalRevenu - totalDepense)

    document.getElementById("solde").innerHTML = ` ${moyen.toFixed(2)} F`
}
info_revenu()
information()

cacul()







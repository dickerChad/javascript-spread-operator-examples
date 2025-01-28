var achat1 ={
    chaussure:100,
    tva:1.2,
    prixTotal: function(){
        var calcul = achat1.chaussure * achat1.tva;
        console.log("Prix Total: ", calcul)
    }
}
achat1.prixTotal();

var achat2 ={
    chaussure:200,
    tva:1.3,
    prixTotal: function(){
        var calcul = this.chaussure * this.tva;
        console.log("Prix Total2: ", calcul)
    }
}
achat2.prixTotal();
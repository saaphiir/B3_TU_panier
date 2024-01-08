class Panier {
    constructor() {
        this.articles = {};
    }

    ajouterArticle(article, prix){
        this.articles[article] = prix;
    }

    supprimerArticle(article) {
        delete this.articles[article];
    }

    viderPanier(){
        this.articles = [];
    }

    montantPanier(){
        let valeur = 0
        for (let cle in this.articles) {
            valeur = valeur + this.articles[cle];
        }
        return valeur;
    }
}
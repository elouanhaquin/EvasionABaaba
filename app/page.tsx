import Image from "next/image";
import styles from "./page.module.css";
import HeaderPage from "./header";
import LandingDiv from "./LandingDiv";
import Informations from "./Informations";
import Bedroom from "./bedroom";

export default function Home() {
  return (
    <main className={styles.main}>
            <HeaderPage/>
            <LandingDiv/>
            <Informations/>
            <Bedroom 
            title="Chambre Poingam" 
            img="/chambre-poingam.png"  
            color="#FF9F87"
            button={{text:"Réserver Cette Chambre ", url:""}}
            positive={["Spacieuse et confortable, idéale pour deux adultes et un enfant",
            "Décoration inspirée de la nature pour une ambiance relaxante",
            "Fenêtres panoramiques offrant des vues pittoresques sur les environs",
            "Lit queen-size pour les adultes et lit supplémentaire pour l'enfant",
            "Salle de bains attenante avec douche et articles de toilette fournis"]}
            p2="Les fenêtres panoramiques inondent la chambre de lumière naturelle, offrant des vues pittoresques sur les jardins luxuriants ou sur l'océan scintillant. La salle de bains attenante est équipée d'une douche rafraîchissante et de tous les articles de toilette nécessaires pour votre confort." 
            p1="Bienvenue dans notre chambre paisible, conçue pour accueillir confortablement deux adultes et un enfant, offrant un refuge chaleureux au cœur de la Nouvelle-Calédonie. Cette chambre spacieuse est décorée avec des touches inspirées de la nature environnante, créant une atmosphère apaisante pour votre séjour. Dotée d'un lit queen-size confortable pour les adultes et d'un lit supplémentaire pour l'enfant, cette chambre offre tout l'espace nécessaire pour une nuit de repos réparateur après une journée d'aventures."/>
          
            <Bedroom 
            title="Chambre Taanlo" 
            img="/chambre-taanlo.png"  
            color="#36BAC6"
            button={{text:"Réserver Cette Chambre ", url:""}}
            positive={["Lit king-size confortable pour deux adultes",
            "Espace dédié avec un lit supplémentaire pour un enfant",
            "Ambiance moderne et chaleureuse, avec des touches de bois naturel",
            "Magnifique vue sur le jardin tropical à travers les larges fenêtres",
            "Salle de bains attenante avec douche et commodités modernes"]}
        
            p2="La Chambre Taanlo offre un lit king-size confortable pour les adultes et un espace dédié avec un lit supplémentaire pour l'enfant, assurant à toute la famille une nuit de sommeil paisible. L'ambiance de la chambre est à la fois moderne et chaleureuse, avec des touches de bois naturel et des accents inspirés de la culture locale.

            Les larges fenêtres offrent une vue magnifique sur notre jardin tropical luxuriant, créant une atmosphère sereine et invitant la lumière naturelle à inonder l'espace. La salle de bains attenante est équipée d'une douche revigorante et de commodités modernes pour votre confort." 
            p1="Bienvenue dans notre charmante Chambre Taanlo, un espace accueillant conçu pour deux personnes et un enfant, offrant une retraite paisible dans notre coin de paradis en Nouvelle-Calédonie. Taanlo, qui signifie repos dans la langue locale, incarne parfaitement l'atmosphère de détente que nous avons créée dans cette chambre."/>
            
            <Bedroom 
            title="Chambre Yenghebane" 
            img="/chambre-yenghebane.png"  
            color="red-500"
            button={{text:"Réserver Cette Chambre ", url:""}}
            positive={["Lit queen-size somptueux pour deux adultes", 
            "Espace dédié avec un lit supplémentaire pour un enfant ",
            "Élégance et raffinement avec des touches de décoration locales ",
            "Vue imprenable sur l'océan ou sur le jardin luxuriant à travers les grandes baies vitrées ",
            "Salle de bains attenante avec douche luxueuse et commodités modernes"]}
            p2="La Chambre Yenghebane présente un lit queen-size somptueux pour les adultes, ainsi qu'un espace confortable avec un lit supplémentaire pour l'enfant, assurant à toute la famille un repos bien mérité après une journée d'aventures. L'élégance et le raffinement caractérisent cette chambre, avec des touches de décoration inspirées de l'artisanat local et des matériaux naturels.

            Les grandes baies vitrées offrent une vue imprenable sur l'océan scintillant ou sur notre jardin luxuriant. La salle de bains attenante est un sanctuaire de détente, équipée d'une douche luxueuse et de commodités modernes pour votre confort" 
            p1="Bienvenue dans notre magnifique Chambre Yenghebane, un havre de paix conçu pour accueillir deux personnes et un enfant, offrant une expérience de séjour inoubliable au cœur de la Nouvelle-Calédonie. Le nom Yenghebane évoque les sommets majestueux de l'île, et cette chambre vous offre une retraite luxueuse à la hauteur de son nom."/>
          </main>
          );
}

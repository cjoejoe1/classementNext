import { TextBlock } from '../../../components/common';
import Link from 'next/link'

const Text = (props) => {


  let all_headings = ''
  let h2Array = '' 


  
  if (typeof window !== 'undefined') {
    all_headings = document.getElementsByClassName("h2Anchor");
    h2Array = Array.from(all_headings);
  }

  const renderH2 = (item, index) => {

    // console.log(item.childNodes[data)
    return (
      <>
       <li><Link href={'#' + index}><a id='pageMap'>{item.innerText}</a></Link></li>
      </>
     
    )

  }


  return (
    <TextBlock style={{maxWidth: 1100, margin: 'auto'}}>
    <div>
   <p> Avez-vous déjà eu du mal à gérer vos projets de manière efficace? Vous sentez-vous souvent débordé et incertain de ce qui doit être fait en premier? Si c'est le cas, nous avons une solution pour vous: le diagramme de Gantt.
   </p>
   {/* <div style={{background: 'rgb(247 247 247)', padding: 30, borderRadius: 5, marginBottom: 30}}>
<div>
<p>Vous allez tout apprendre sur :</p>
{h2Array !== '' && h2Array.map(renderH2)}
</div>

</div> */}

   <p>Un diagramme de Gantt est un outil de gestion de projet visuel qui vous permet de planifier, suivre et communiquer l'avancement de votre projet. Avec notre diagramme de Gantt, vous pouvez facilement voir quelles tâches sont en cours, quelles tâches sont en retard et quelles tâches sont terminées. Cela vous aidera à mieux gérer votre temps et à atteindre vos objectifs de manière plus efficace.
   </p><p>
Mais ce n'est pas tout! Notre diagramme de Gantt est également facile à utiliser et convivial. Vous pouvez le personnaliser en fonction de vos besoins et le partager facilement avec votre équipe.
</p><p>
Alors n'attendez plus! Obtenez notre diagramme de Gantt dès maintenant et transformez votre gestion de projet en une véritable réussite. Cliquez sur le lien ci-dessous pour en savoir plus et pour acheter dès maintenant. Ne manquez pas cette occasion de simplifier votre gestion de projet et de réussir vos projets.
</p>






<h2 id='0' className='h2Anchor'>À quoi sert le diagramme de Gantt ?</h2>

<p>Le diagramme de Gantt (aussi appelé planning de Gantt ou graphique de Gantt) est un outil de gestion de projet qui permet de visualiser l'avancement des tâches d'un projet sur une période de temps donnée. Il se compose d'un axe horizontal représentant le temps et d'une colonne verticale pour chaque tâche du projet.
</p>
<p>Chaque tâche est représentée par une barre horizontale qui indique la durée de la tâche et sa position sur l'axe du temps.
</p>
<p>Le diagramme de Gantt permet de suivre l'avancement des tâches, mais aussi de détecter les retards et de planifier les ressources nécessaires pour chaque étape du projet.
</p>
<p>C’est un outil indispensable pour la gestion de projet. Voici une liste d’information et d’astuces pour naviguer cet outil qui changera 
</p>
<h2 id='1' className='h2Anchor'>Comment créer un diagramme de Gantt ?</h2>

<p>Voici les étapes à suivre pour créer un diagramme de Gantt :</p>
<ul>
<ol>Identifier les tâches à accomplir dans votre projet et déterminer leur ordre logique.</ol>
<ol>Définir la durée prévue pour chaque tâche.</ol>
<ol>Identifier les dépendances entre les tâches, c'est-à-dire les tâches qui ne peuvent pas être entamées avant que d'autres soient terminées.</ol>
<ol>Créer un axe horizontal représentant le temps sur lequel se déroulera le projet.</ol>
<ol>Créer une colonne verticale pour chaque tâche du projet.</ol>
<ol>Dessiner une barre horizontale pour chaque tâche, en indiquant sa durée et sa position sur l'axe du temps.</ol>
<ol>Utiliser des flèches ou des lignes de différentes couleurs pour représenter les dépendances entre les tâches.</ol>
<ol>Mettre à jour régulièrement le diagramme en ajoutant de nouvelles tâches ou en modifiant les tâches existantes pour refléter l'avancement réel du projet.</ol>
</ul>
<p>Il existe de nombreux outils en ligne ou logiciels de gestion de projet qui permettent de créer facilement un diagramme de Gantt. Vous pouvez également utiliser un tableur ou un logiciel de dessin pour créer votre diagramme de Gantt.
</p>
<h2 id='2' className='h2Anchor'>Comment utiliser un diagramme de Gantt ?</h2>
<p>Voici comment le diagramme de Gantt peut être utilisé :</p>
<ul>
<li>Pour planifier les tâches et les ressources nécessaires pour chaque étape du projet.</li>
<li>Pour suivre l'avancement du projet en mettant à jour régulièrement le diagramme avec l'avancement réel des tâches.</li>
<li>Pour détecter les retards et les problèmes potentiels dans le projet et prendre des mesures pour y remédier.</li>
<li>Pour communiquer clairement l'avancement du projet aux membres de l'équipe et aux parties prenantes.</li>
<li>Pour gérer les dépendances entre les tâches et s'assurer que les tâches clés sont terminées à temps pour permettre la progression du projet.</li>
<li>Pour évaluer l'efficacité de la gestion du projet et identifier les domaines qui pourraient être améliorés.</li>
</ul>
<p>Il est important de mettre à jour régulièrement le diagramme de Gantt pour refléter l'avancement réel du projet et ainsi pouvoir utiliser efficacement cet outil de gestion de projet.</p>

<h2 id='3' className='h2Anchor'>Logiciel permettant de créer un diagramme de Gantt</h2>

<p>Il existe de nombreux logiciels qui permettent de créer facilement un diagramme de Gantt. Voici quelques exemples de logiciels populaires :</p>
<ul>
<li>
Microsoft Project : un logiciel de gestion de projet professionnel qui permet de créer un diagramme de Gantt et de suivre l'avancement du projet.
</li>
<li>GanttProject : un logiciel open source pour créer un diagramme de Gantt.
</li>
<li>Trello : un outil de gestion de projet en ligne qui permet de créer un diagramme de Gantt à partir de cartes et de listes.
</li>
<li>Asana : un outil de gestion de projet en ligne qui permet de créer un diagramme de Gantt et de suivre l'avancement du projet.
</li>
<li>Smartsheet : un outil de gestion de projet en ligne qui permet de créer un diagramme de Gantt et de suivre l'avancement du projet.</li>
</ul>
<p>Il existe également de nombreux autres logiciels et outils en ligne qui permettent de créer un diagramme de Gantt. Vous pouvez faire une recherche en ligne pour trouver l'outil qui convient le mieux à vos besoins.
</p>

{props.page !== 'landing' ? 
<>
<h2 id='4' className='h2Anchor'>Diagramme de Gantt gratuit</h2>
<p>
Il existe plusieurs outils en ligne gratuits que vous pouvez utiliser pour créer un diagramme de Gantt. Voici quelques exemples :</p>

<h3>GanttProject</h3>
<p>Cet outil open-source permet de créer des diagrammes de Gantt ainsi que des diagrammes de PERT (Project Evaluation and Review Technique). Il est disponible pour Windows, macOS et Linux.
</p>
<h3>Smartsheet</h3> <p>Cette plateforme en ligne offre une fonctionnalité de diagramme de Gantt en plus de nombreuses autres fonctionnalités de gestion de projet. Elle propose une version gratuite ainsi qu'une version payante.
</p>
<h3>Trello</h3> <p>Cette plateforme de gestion de projet en ligne permet de créer des diagrammes de Gantt à l'aide de cartes et de listes. Elle propose une version gratuite ainsi qu'une version payante.
</p>
<p>
Il existe également de nombreux autres outils en ligne et logiciels de bureau que vous pouvez utiliser pour créer des diagrammes de Gantt. Pour en trouver un qui convient à vos besoins, vous pouvez faire une recherche en ligne ou demander conseil à des collègues ou à des professionnels du management de projet.
</p></>
: null
}


<h2 id='5' className='h2Anchor'>Comment faire un diagramme de Gantt sur Excel ?</h2>
<p>
Si vous avez déjà le pack Office, il est possible de créer un diagramme de Gantt dans Microsoft Excel en utilisant des barres de progression et des dates.
</p>
<p>
Voici les étapes à suivre :
</p>
<ul>

<ol>Ouvrez Microsoft Excel et créez un nouveau classeur.</ol>

<ol>Dans la première colonne, entrez les noms de tous les jalons et tâches de votre projet.</ol>

<ol>Dans la seconde colonne, entrez la date de début prévue pour chaque jalon ou tâche.</ol>

<ol>Dans la troisième colonne, entrez la date de fin prévue pour chaque jalon ou tâche.</ol>

<ol>Sélectionnez les cellules contenant les dates de début et de fin de chaque jalon ou tâche. Cliquez sur l'onglet "Insertion" puis sur "Barre de progression".</ol>

<ol>Personnalisez l'apparence de votre diagramme de Gantt en utilisant les options disponibles dans le menu "Format de la barre de progression".</ol>

<ol>Ajoutez des informations supplémentaires (pourcentage d'avancement, responsables, etc.) en utilisant les colonnes restantes de votre tableau.</ol>

<ol>Enregistrez votre classeur Excel en tant que fichier .xlsx ou .xls pour pouvoir y accéder plus tard.</ol>
</ul>

<p>Il est également possible d'utiliser des modèles de diagramme de Gantt préconçus disponibles sur Internet ou de télécharger des add-ons pour Excel qui vous permettent de créer des diagrammes de Gantt plus avancés.
</p>
<h2 id='6' className='h2Anchor'>Astuces pour devenir un expert du diagramme de Gantt</h2>

<p>Voici quelques astuces pour utiliser efficacement un diagramme de Gantt :</p>
<h3>Astuce 1</h3>
<p>Définissez clairement les objectifs et les tâches de votre projet. Cela vous permettra de créer un diagramme de Gantt précis et de mieux suivre l'avancement de votre projet.
</p>
<h3>Astuce 2</h3>
<p>Utilisez des codes de couleur pour différencier les tâches et les jalons. Cela vous permettra de visualiser rapidement l'avancement de votre projet.</p>
<h3>Astuce 3</h3>
<p>Établissez les dépendances entre les tâches. Cela vous permettra de mieux comprendre l'ordre dans lequel les tâches doivent être réalisées et de prévoir les retards éventuels.</p>
<h3>Astuce 4</h3>
<p>Mettez à jour régulièrement votre diagramme de Gantt. Cela vous permettra de suivre l'avancement de votre projet en temps réel et de détecter rapidement les retards éventuels.</p>
<h3>Astuce 5</h3>
<p>Utilisez un logiciel de gestion de projet pour créer et gérer votre diagramme de Gantt. Cela vous permettra de profiter de fonctionnalités avancées comme l'import et l'export de données, la gestion des dépendances entre les tâches, etc.</p>
<h3>Astuce 6</h3>
<p>Partagez votre diagramme de Gantt avec votre équipe et vos parties prenantes. Cela vous permettra de rester tous sur la même longueur d'onde et de travailler de manière efficace.</p>

<h2 id='7' className='h2Anchor'>Exemple simple d’un diagramme de Gantt</h2>
<ul>
<p>
<li>Jalon 1 : Étude de faisabilité (du 1er janvier au 31 janvier)</li>
<ul>
<li>Tâche 1 : Réunions de lancement (du 2 au 4 janvier)</li>
<li>Tâche 2 : Collecte de données (du 5 au 25 janvier)</li>
<li>Tâche 3 : Analyse des données (du 26 au 31 janvier)</li>
</ul>
</p>
<li>Jalon 2 : Conception (du 1er février au 28 février)</li>
<p>
<ul>
<li>Tâche 4 : Élaboration du cahier des charges (du 1er au 5 février)</li>
<li>Tâche 5 : Rédaction du document de conception (du 6 au 15 février)</li>
<li>Tâche 6 : Révision du document de conception (du 16 au 20 février)</li>
<li>Tâche 7 : Approbation du document de conception (du 21 au 28 février)</li>
</ul>
</p>
<li>Jalon 3 : Réalisation (du 1er mars au 30 avril)</li>
<p>
<ul>
<li>Tâche 8 : Développement (du 1er au 15 mars)</li>
<li>Tâche 9 : Test et débogage (du 16 au 31 mars)</li>
<li>Tâche 10 : Mise en production (du 1er au 30 avril)</li>
</ul>
</p>
</ul>
<p>
Dans ce diagramme, les jalons représentent les étapes du projet et les tâches représentent les activités à réaliser pour atteindre chaque jalon. Les dates de début et de fin de chaque jalon ou tâche sont indiquées sur l'axe horizontal (échelle de temps) et chaque jalon ou tâche est représentée par une barre verticale (barre de progression).
</p><p>
Il est également possible de représenter les dépendances entre les tâches (par exemple, la tâche 5 ne peut être réalisée qu'après la tâche 4) à l'aide de flèches ou de liens.
</p>
<h2 id='8' className='h2Anchor'>Qui a inventé le diagramme de Gantt ?</h2>
<p>
Le diagramme de Gantt a été inventé par Henry Gantt, un ingénieur et consultant en gestion de projet américain du début du XXe siècle. Il a développé cet outil pour visualiser l'avancement des tâches et des dépendances dans les projets de construction navale et de chemins de fer. 
</p><p>
Le format est devenu rapidement populaire dans les milieux de la gestion de projet et est aujourd'hui utilisé dans de nombreux domaines pour planifier et suivre l'avancement de projets de toutes tailles et de tous types.
</p>



</div>

    </TextBlock>
  )
}

export default Text
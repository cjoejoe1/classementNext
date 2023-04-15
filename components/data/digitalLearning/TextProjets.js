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
<h2>Trouver le meilleur logiciel de gestion pour vos projets</h2>
   <p>
   Un logiciel de gestion de projet est un outil informatique qui permet à une équipe de gérer efficacement un projet en organisant les tâches, en suivant les délais et en gérant les ressources.
   </p>

   {/* <div style={{background: 'rgb(247 247 247)', padding: 30, borderRadius: 5, marginBottom: 30}}>
    <div>
      <p>Vous allez tout apprendre sur :</p>
      {h2Array !== '' && h2Array.map(renderH2)}
    </div>
  </div> */}

<p>Il peut inclure des fonctionnalités telles que la création de plans de projet, l'affectation des tâches à des membres de l'équipe, le suivi des progrès et la communication avec les parties prenantes. Il existe de nombreux logiciels de gestion de projet différents sur le marché, chacun ayant des fonctionnalités et des niveaux de complexité différents.
</p>
<h2>Les types de logiciels de gestion de projet</h2>

<p>Il existe différents types de logiciels de gestion de projet, chacun ayant des fonctionnalités et des utilisations spécifiques. Voici quelques exemples courants :</p>

<h3>Logiciels de planification de projet</h3>

<p>Ils permettent de créer des plans de projet, de définir des tâches et des dépendances, et de suivre les progrès.</p>

<h3>Logiciels de suivi des temps et des coûts</h3>

<p>Ils permettent de suivre les heures passées sur les tâches, les coûts engagés et de générer des rapports.</p>

<h3>Logiciels de gestion de la collaboration</h3>

<p>Ils permettent aux membres de l'équipe de communiquer et de collaborer en ligne sur les tâches et les documents du projet.</p>

<h3>Logiciels de gestion de la qualité</h3>

<p>Ils permettent de planifier et de surveiller les activités de contrôle de la qualité, de gérer les non-conformités et de générer des rapports.</p>

<h3>Logiciels de gestion de la configuration</h3>

<p>Ils permettent de gérer les différentes versions et configurations des documents et des composants logiciels d'un projet.</p>

<h3>Logiciels de gestion des risques</h3>

<p>Ils permettent d'identifier, d'évaluer et de gérer les risques potentiels pour un projet.</p>

<p>Il existe également des logiciels de gestion de projet intégrés qui combinent plusieurs de ces fonctionnalités. Il est important de choisir un logiciel qui répond aux besoins spécifiques de votre projet et de votre équipe.</p>

<h2>Diagrammes et tableaux d’un logiciel de gestion de projets</h2>

<p>La gestion de projets se fait principalement via des diagrammes mis à la disposition de tous vos collaborateurs.</p>

<p>Il existe plusieurs types de diagrammes de gestion de projet qui peuvent être utilisés pour représenter visuellement les informations et les progrès d'un projet. Les plus courants incluent :</p>

<h3>Diagramme de Gantt </h3>

<p>Ces diagrammes affichent les tâches d'un projet sous forme de barres horizontales, la longueur de chaque barre représentant la durée de la tâche. Ils montrent également les dépendances entre les tâches et la chronologie du projet.</p>

<h3>Diagramme PERT (Program Evaluation and Review Technique)</h3>

<p>Ces diagrammes affichent les tâches d'un projet sous forme de diagramme de réseau, avec des flèches reliant les tâches pour montrer les dépendances. Ils sont utiles pour comprendre le chemin critique d'un projet, qui est la séquence de tâches qui doivent être terminées à temps pour que le projet soit achevé dans les délais impartis.
</p>
<h3>Diagrammes de réseau (network diagrams)</h3>

<p>Similaires aux diagrammes PERT, les diagrammes de réseau montrent les dépendances entre les tâches, mais ils sont souvent utilisés pour comprendre comment les ressources sont allouées et utilisées tout au long d'un projet.
</p>
<h3>Diagrammes de flux (flowchart)</h3>

<p>Ces diagrammes montrent le déroulement des processus ou des activités dans un projet, incluant les entrées, les sorties et les points de décision. Ils peuvent être utilisés pour comprendre comment le travail est effectué au sein d'un projet et pour identifier les goulots d'étranglement ou les domaines à améliorer.
</p>
<h3>Diagrammes de progression (burn-down charts)</h3>
<p>Ces diagrammes montrent l'évolution du travail dans le temps et sont généralement utilisés dans les méthodes de gestion de projet agiles pour suivre l'achèvement des histoires utilisateurs ou des tâches.
</p>
<h3>Tableaux Kanban (Kanban boards)</h3>

<p>Ces tableaux sont utilisés pour visualiser le flux de travail d'un projet et limiter la quantité de travail en cours. Ils sont couramment utilisés dans les méthodes de gestion de projet agiles, comme Scrum.
</p>
<p>Chacun de ces types de diagrammes a ses propres forces et convient mieux à certaines types de projets ou d'informations. Ils peuvent être utilisés individuellement ou en combinaison pour fournir une vue globale complète de l'avancement et de l'état d'un projet.
</p>


    </TextBlock>
  )
}

export default Text
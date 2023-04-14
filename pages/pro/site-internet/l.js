import React, {useState} from 'react';
import { Container, Row, Col, Button, Dropdown} from "react-bootstrap";
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'
import Layout from '../../components/layout'
import { TextBlock } from '../../components/common';
import Link from 'next/link'
import Image from 'next/image'
import Top3 from '../../components/data/Top3'
import data from '../../components/data/websiteBuilders/websiteBuildersScore.json'
import ScoreTable from '../../components/data/websiteBuilders/websiteBuildersScore'
import DataTable from '../../components/data/websiteBuilders/websiteBuilders'
import DataTableMobile from '../../components/data/websiteBuilders/websiteBuildersMobile'
import Disclosure from '../../components/Blocks/Disclosure'
import Seo from "../../components/seo";
import sell from "../../images/template-website.png"

function Accounting(props) {

var d = new Date();
var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
var n = month[d.getMonth()];
var y = d.getFullYear();

const [values, setValues] = useState({
  d1: '',
  error: null,
})

let all_headings = ''
let h2Array = '' 

if (typeof window !== 'undefined') {
  all_headings = document.getElementsByClassName("h2Anchor");
  h2Array = Array.from(all_headings);
}


const renderH2 = (item, index) => {

  return (
    <>
     <li><Link href={'#' + index}><a id='pageMap'>{item.innerText}</a></Link></li>
    </>
   
  )

}

const handleSelect = (e) => {
  setValues({...values, d1: e})
}
    return (
      <Layout type='landing-compare'>
           <Seo
        title="Créateur de Site Internet - Meilleur créateur de site web pour votre business"
        description="Trouver le meilleur créateur de site web pour votre business avec createur.com"
      />
         
     
          <Container fluid style={{background: 'rgb(243,243,243)', paddingTop: 20, paddingBottom: 50}}>
   
          <Container style={{maxWidth: 1140}}>

          <div style={{marginTop : -20, marginBottom:40}} id='max992'>
              <Disclosure/>
            </div>
          <h1 id='compareh1'>Meilleur Créateur de Sites Web de 2023</h1>
          <p id='compareh2' style={{marginLeft: 5, marginBottom: 25, fontWeight: 300, fontSize: 24, marginTop: -10}}>Comparatifs des meilleurs créateurs de sites internet</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div id='undeuxtrois' style={{marginLeft: 10, marginTop: 0, marginBottom: 30}}>
            <p style={{fontSize: 16}}><span id='oneTwo'>1</span> Utilisez le menu de notre <span style={{fontWeight: 700}}>comparateur créateur de sites</span> pour déterminer vos priorités.</p>
            <p style={{fontSize: 16}}><span id='oneTwo'>2</span> Comparez les offres par tarifs ainsi que les offres promos disponible dès aujourd’hui</p>
            <p style={{fontSize: 16}}><span id='oneTwo'>3</span> Sélectionnez le <span style={{fontWeight: 700}}>meilleur créateur de site</span>, celui qui correspond le plus a vos besoins.</p>
          </div>
          <div style={{marginTop: -40, maxWidth: 270, marginRight: 30}} id='min992'>
            <Image src={sell} width={596} height={397} alt='website quotes' placeholder='tracedSVG'/></div>
          </div>

  </Container>  
          <Row style={{background: 'rgb(243,243,243)', height: 120, marginTop: -50, marginBottom: -50}}>

          </Row>
          </Container>

          <Container style={{maxWidth: 1140, marginTop: -50}}>
            <div>
              
            <div style={{marginLeft: 14, marginTop: 10, marginBottom: 10}} id='max992'>Dernière mise à jour: <span style={{fontWeight: 700}}>{n} {y}</span></div>
   
   <Top3 data={data}/>
   </div>
               

<div style={{display: 'flex', justifyContent: 'space-between'}}>
<div style={{marginLeft: 10, marginTop: 10}} id='min992'>Dernière mise à jour: <span style={{fontWeight: 700}}>{n} {y}</span></div>
    <div style={{marginTop: 5, marginLeft: 10}}>
      <Dropdown onSelect={handleSelect} >
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{textAlign: 'left', height: 35, fontSize: 16, border: '0px solid #9d9b9d', color: 'black'}}>{`${values.d1 || 'Classement Score'}`}
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item eventKey='Classement Score' active={false}>Classement Score</Dropdown.Item>
        <Dropdown.Item eventKey='Classement Tarif' active={false}>Classement Tarif</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    </div>
    <div style={{marginTop : 15, marginBottom : -100}} id='min992'>
      <Disclosure/>
    </div>

</div>



    {values.d1 === 'Classement Tarif' ? 
              <>
                <DataTable/>
                <DataTableMobile/>
                </>   
                : 
                <ScoreTable/>
              }
          </Container>
          <Container style={{maxWidth: 1100, margin: 'auto', padding: 20}}>
          <TextBlock>
          <div>
  <p>Vous allez tout apprendre sur :</p>
  {h2Array !== '' && h2Array.map(renderH2)}
    </div>
    <h2 id='0' className='h2Anchor'>Un créateur de site, c’est quoi ?</h2>

<p>Un créateur de site web est un outil qui permet aux utilisateurs de créer et de concevoir un site web sans avoir besoin de codage manuel. Les créateurs de site web proposent généralement une interface conviviale qui permet aux utilisateurs d'ajouter et de personnaliser du texte, des images et d'autres éléments sur leur site web en utilisant la fonctionnalité glisser-déposer ou des modèles pré-construits. Cela facilite la création d'un site web pour les utilisateurs ayant peu ou pas d'expérience en développement web, sans avoir besoin de compétences en codage.
</p>
<p>Les créateurs de site web proposent généralement une gamme de fonctionnalités et d'options de personnalisation, notamment la possibilité d'ajouter une fonctionnalité e-commerce, des formulaires de contact et une intégration des réseaux sociaux. Certains créateurs de site web proposent également des services d'hébergement et d'enregistrement de nom de domaine, permettant aux utilisateurs de mettre en place facilement leur site web.
</p>
<p>Il existe une variété de créateurs de site web disponibles sur le marché, allant des options libres et open-source aux options payantes et à abonnement, chacune avec son propre ensemble de fonctionnalités et de possibilités.
</p>
<h2 id='1' className='h2Anchor'>Les avantages d’un créateur de site ?</h2>

<p>Les créateurs de sites web sont des outils qui permettent aux utilisateurs de créer et de concevoir des sites web sans avoir besoin de codage manuel. Les avantages de l'utilisation d'un constructeur de site web incluent :
</p>
<p>Interface conviviale : Les créateurs de sites web fournissent généralement une interface conviviale qui permet aux utilisateurs d'ajouter et de personnaliser du texte, des images et d'autres éléments sur leur site web à l'aide de fonctionnalités glisser-déposer ou de modèles pré-construits. Cela facilite pour les utilisateurs ayant peu ou pas d'expérience en développement web de créer un site web sans avoir besoin de compétences en codage.
</p>

  <h3>Modèles et designs</h3>
  <p>Beaucoup de créateurs de sites web offrent une large gamme de modèles et de designs que les utilisateurs peuvent choisir pour créer un site web professionnel. Les modèles sont personnalisables, les utilisateurs peuvent donc apporter des modifications pour répondre à leurs besoins.
</p>
<h3>Capacités e-commerce</h3>
<p>Certains créateurs de sites web offrent des fonctionnalités e-commerce telles que la gestion des stocks, le traitement des paiements et les options d'expédition qui facilitent la création d'une boutique en ligne pour les utilisateurs.
</p>
<h3>De nombreuses App</h3>
<p>Certains créateurs de sites web ont un grand marché d'application qui permet aux utilisateurs d'ajouter des fonctionnalités et des fonctionnalités spécifiques, comme l'intégration avec d'autres services, des formulaires, les réseaux sociaux et beaucoup d'autres.
</p>
<h3>Fonctionnalités SEO</h3>
<p>Beaucoup de créateurs de sites web incluent des fonctionnalités SEO intégrées qui aident les utilisateurs à améliorer la visibilité de leur site web sur les moteurs de recherche.
</p>
<h3>Hébergement et nom de domaine</h3>
<p>Beaucoup de créateurs de sites web offrent des services d’hébergement et d'enregistrement de nom de domaine, facilitant pour les utilisateurs de mettre en place facilement leur site web.
</p>
<h3>Économisez</h3>
<p>Les créateurs de sites offrent des plans gratuits et des plans payants, ils peuvent être une solution rentable pour les petites entreprises et les sites web personnels.
</p>
<p>En résumé, les créateurs de sites sont une bonne option pour les utilisateurs qui souhaitent une méthode facile et abordable pour créer un site web professionnel sans avoir à apprendre à coder. Ils offrent également un bon ensemble de fonctionnalités pour aider les utilisateurs à améliorer les performances et la visibilité de leur site web.
</p>
<h2 id='2' className='h2Anchor'>Alternatives aux créateurs de sites</h2>

<h3>Trouvez un webdesigner professionnels</h3>

<p>Un webdesigner est un professionnel qui se spécialise dans la conception et la mise en page des sites web. Il est responsable de la création des éléments visuels d'un site web, tels que sa mise en page, sa palette de couleurs et son esthétique globale. Ils travaillent souvent en étroite collaboration avec les développeurs web pour s'assurer que leurs designs peuvent être mis en œuvre à l'aide des dernières technologies web.
</p>
<p>Les webdesigners utilisent généralement des logiciels de conception tels qu'Adobe Photoshop et Illustrator pour créer des maquettes visuelles de la mise en page et de la conception d'un site web. Ils doivent également avoir une bonne compréhension des principes de conception d'expérience utilisateur (UX) et d'interface utilisateur (UI) pour s'assurer que le site web qu'ils conçoivent est facile à naviguer et à utiliser.
</p>
<p>Un webdesigner devra également être compétent en HTML, CSS et JavaScript pour créer la conception et la mise en page finale du site web. Aussi, si votre site doit être dynamique, il devra avoir des connaissances sur la façon dont la conception du site web fonctionnera avec la base de données.
</p>
<p>La conception web est un domaine en constante évolution, car les technologies et les tendances de conception changent. Aujourd’hui de nombreux webdesigners ne sont pas forcément programmeurs mais ont développé une expertise dans l'utilisation des créateurs de sites où encore l’ensemble des solutions no-code.
</p>
<h3>Utiliser des outils “no-code”</h3>
<p>
Le “no-code” (ou “pas de code”) désigne un type de technologie ou de logiciel qui permet aux utilisateurs de créer et de personnaliser des produits numériques, tels que des sites web et des applications mobiles, sans avoir besoin de coder manuellement. Cela peut se faire à travers une interface visuelle qui utilise des fonctionnalités glisser-déposer, des modèles préconstruits et des workflows préconfigurés.
</p>
<p>Les solutions no-code ont pour objectif de faciliter la création et la maintenance de produits numériques pour les utilisateurs non techniques, sans avoir besoin de connaissances approfondies de langages de programmation tels que HTML, CSS et JavaScript.
</p>
<p>Cela peut être particulièrement bénéfique pour les petites entreprises et les individus qui souhaitent créer un site web ou une application mobile mais n'ont pas les moyens de recruter un développeur professionnel.
</p>
<p>Vous l’avez surement compris, un créateur de sites web est un des nombreux outils “no-code” disponible sur le marché.
</p>
<h3>Wordpress, le roi des CMS</h3>
<p>
WordPress est un système de gestion de contenu (CMS) open source et gratuit qui est utilisé pour créer et gérer des sites web. Il est basé sur PHP et MySQL et est la plateforme la plus populaire pour créer des sites web, avec plus de 60% de parts de marché des sites web alimentés par CMS.
</p><p>
WordPress permet aux utilisateurs de créer et de gérer facilement le contenu de leur site web à travers une interface web simple. Cela permet une édition, une mise à jour et une publication faciles du contenu, ce qui en fait une plateforme idéale pour créer des blogs, des portfolios, des boutiques en ligne et d'autres types de sites web.
</p><p>
Avec WordPress, les utilisateurs peuvent créer et gérer des pages et des articles de site web, ajouter et formater du texte, des images et d'autres médias, et ajouter des fonctionnalités personnalisées avec l'utilisation de plug-ins. Le cœur de WordPress est léger et modulaire, ce qui facilite l'extension avec des milliers de plug-ins disponibles pour ajouter des formulaires de contact, des boutiques en ligne et plus encore.
</p><p>
De plus, WordPress est convivial avec les moteurs de recherche, il a beaucoup de fonctionnalités intégrées et est soutenu par une grande communauté de développeurs, ce qui aide à améliorer les performances SEO.
</p><p>
WordPress est une plateforme très flexible, il peut être utilisé pour créer des blogs et des pages d'atterrissage simples ou des sites web d'e-commerce complexes, ainsi qu'être personnalisable avec un grand choix de thèmes et modèles, il est également facilement adaptable aux appareils mobiles et prend en charge le contenu multilingue.
</p>
<h3>Gatsby, un framework pour les sites statiques (mais pas seulement)</h3>
<p>
Gatsby est un framework et open-source basé sur React qui est utilisé pour créer des sites web et des applications web rapides et performantes. Gatsby convient particulièrement bien pour la création de sites web statiques, d'applications web progressives (PWA) et d'applications à page unique (SPA) qui sont rapides à charger et faciles à naviguer.
</p><p>
Gatsby permet aux développeurs de créer des sites web à l'aide de technologies web modernes telles que React, GraphQL et Webpack, tout en fournissant un ensemble de fonctionnalités et de plugins intégrés qui facilitent l'optimisation des performances du site web et l'ajout de fonctionnalités courantes telles que le référencement et les analyse.
</p><p>
Les principales fonctionnalités de Gatsby qui le rendent performant comprennent:
</p><ul>
  <li>Le découpage automatique du code</li>
  <li>Le préchargement des ressources</li>
  <li>Le rendu côté serveur</li>
  <li>L'optimisation des images</li>
</ul>
<p>
Gatsby permet également une intégration facile avec les système de gestion de contenu découplé (headless CMS) comme Contentful, Drupal et WordPress, ce qui permet aux développeurs de récupérer les données de ces systèmes de gestion de contenu et de les rendre disponibles aux composants React.
</p><p>
En outre, Gatsby fournit un écosystème de plugins et d'outils pour que les développeurs puissent facilement ajouter des fonctionnalités à leurs projets, comme l'intégration avec les analyses, le référencement, les PWA, les formulaires et bien d'autres encore.
</p><p>
Gatsby est un choix populaire pour les développeurs qui construisent des sites web à haute performance, en particulier ceux qui nécessitent un chargement rapide et efficace de beaucoup de données.
</p>
          </TextBlock>
          </Container>
          </Layout>
    )
}

export default Accounting

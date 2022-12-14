import React from "react";
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'

import Seo from "../../components/seo";
import Boxes from "../../components/Blocks/KitBoxes";
import Hero from "../../components/Blocks/KitHero";

const LandingPage2 = () => {
  return (
    <Layout >
 
      <Seo
        title="Kit du Créateur - Createur.com"
        description="Tous les outils pour les créateurs sur Youtube, Tiktok et Instagram"
      />
  <Breadcrumbs text='Kit du créateur'/>
        {/* <Hero /> */}
        <Hero />
        <Boxes />

        </Layout>
  );
};
export default LandingPage2;

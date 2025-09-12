import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage = "/lovable-uploads/116758e0-686c-40ab-9e49-8668f5423389.png" 
}: SEOHeadProps) => {
  const fullTitle = title.includes("Luxtia") ? title : `${title} | Luxtia`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Luxtia",
          "description": "Curadoria em Tecnologia & Inteligência Artificial",
          "url": "https://luxtia.com.br",
          "logo": "https://luxtia.com.br/lovable-uploads/116758e0-686c-40ab-9e49-8668f5423389.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-99999-9999",
            "contactType": "customer service",
            "email": "contato@luxtia.com.br"
          },
          "sameAs": [
            "https://linkedin.com/company/luxtia"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
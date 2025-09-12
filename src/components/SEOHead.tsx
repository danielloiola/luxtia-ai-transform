import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical
}: SEOHeadProps) => {
  const fullTitle = title.includes("Luxtia") ? title : `${title} | Luxtia`;
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    updateMetaProperty('og:title', fullTitle);
    updateMetaProperty('og:description', description);
    
  }, [fullTitle, description, keywords, canonical]);

  return null;
};

export default SEOHead;
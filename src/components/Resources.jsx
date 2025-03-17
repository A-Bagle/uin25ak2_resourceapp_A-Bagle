import { useEffect, useState } from "react";
import * as ressurser from "../assets/ressurser"; 

const Resources = ({ category }) => {
  const [filteredResources, setFilteredResources] = useState([]);

  useEffect(() => {
    if (ressurser.resources) {
      const filtered = ressurser.resources.filter((item) => item.category === category);
      setFilteredResources(filtered);
    }
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()} Ressurser</h2>
      <ul>
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))
        ) : (
          <p>Ingen ressurser tilgjengelig for denne kategorien.</p>
        )}
      </ul>
    </div>
  );
};

export default Resources;
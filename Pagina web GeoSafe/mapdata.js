var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "auto", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    border_color: "#000000" ,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 1,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    COAMA: {
      name: "Amazonas",
      description: " Atractivo natural, en su mayoría seguro y una experiencia de ecoturismo sin igual.",
      color: "#248101",
      hover_color: "#175101",
      url: ""
    },
    COANT: {
      name: "Antioquia",
      description: "Medellín y sus alrededores ofrecen una gran infraestructura turística, Pero hay que tener cuidado en sus areas rurales  ",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COARA: {
      name: "Arauca",
      description: "Aunque tiene belleza natural, es una zona con conflictos y problemas de seguridad.",
      color: "#FF2C2F",
      hover_color: "#B60003",
      url: "default"
    },
    COATL: {
      name: "Atlántico",
      description: "Barranquilla es una ciudad vibrante y culturalmente rica; segura y recomendable para visitar.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    COBOL: {
      name: "Bolívar",
      description: "Cartagena, en Bolívar, es uno de los destinos turísticos más seguros y reconocidos del país.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COBOY: {
      name: "Boyacá",
      description: "Región cultural y natural segura, famosa por su arquitectura colonial y ecoturismo.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    COCAL: {
      name: "Caldas",
      description: "Zona cafetera con excelente infraestructura turística y segura para los visitantes.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    COCAQ: {
      name: "Caquetá",
      description: "Aunque tiene destinos naturales, la seguridad puede ser inestable en algunas áreas rurales.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COCAS: {
      name: "Casanare",
      description: "Atractivos naturales pero con zonas rurales menos seguras; precaución recomendada.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COCAU: {
      name: "Cauca",
      description: "Presenta problemas de orden público en algunas áreas, por lo que se recomienda precaución.",
      color: "#FF2C2F",
      hover_color: "#B60003",
      url: "default"
    },
    COCES: {
      name: "Cesar",
      description: "Valledupar es seguro y agradable, pero en áreas rurales se sugiere precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COCHO: {
      name: "Chocó",
      description: "Aunque tiene belleza natural, en ciertas zonas rurales hay problemas de seguridad; se recomienda precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COCOR: {
      name: "Córdoba",
      description: "Cuenta con destinos turísticos, pero algunas zonas requieren precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COCUN: {
      name: "Cundinamarca",
      description: "Bogotá y sus alrededores tienen una buena infraestructura y son seguros para visitar.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    CODC: {
      name: "Distrito Capital de Bogotá",
      description: "Bogotá cuenta con numerosos atractivos turísticos y áreas seguras, aunque existen sectores donde es recomendable tener precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COGUA: {
      name: "Guainía",
      description: "Atractivo para ecoturismo, pero algunas áreas pueden presentar riesgos; precaución recomendada.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COGUV: {
      name: "Guaviare",
      description: "Zonas rurales pueden ser peligrosas debido a conflictos de orden público.",
      color: "#FF2C2F",
      hover_color: "#B60003",
      url: "default"
    },
    COHUI: {
      name: "Huila",
      description: "Tiene destinos turísticos seguros, como el Desierto de la Tatacoa y el Parque Arqueológico de San Agustín.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    COLAG: {
      name: "La Guajira",
      description: "Aunque es turístico, en áreas remotas es mejor ir con precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COMAG: {
      name: "Magdalena",
      description: "Santa Marta y el Parque Tayrona son lugares seguros y turísticos",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    COMET: {
      name: "Meta",
      description: "Villavicencio y otras zonas son turísticas, pero algunas áreas rurales requieren precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    CONAR: {
      name: "Nariño",
      description: "Situación de orden público delicada en varias áreas; se recomienda precaución.",
      color: "#FF2C2F",
      hover_color: "#B60003",
      url: "default"
    },
    CONSA: {
      name: "Norte de Santander",
      description: "Tiene problemas de seguridad en algunas áreas rurales y de frontera.",
      color: "#FF2C2F",
      hover_color: "#B60003",
      url: "default"
    },
    COPUT: {
      name: "Putumayo",
      description: "Problemas de orden público y seguridad en algunas zonas rurales.",
      color: "#FF2C2F",
      hover_color: "#B60003",
      url: "default"
    },
    COQUI: {
      name: "Quindío",
      description: "Parte del Eje Cafetero, es turístico y seguro, especialmente en Armenia y sus alrededores.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    CORIS: {
      name: "Risaralda",
      description: "Pereira y sus alrededores son seguros, con buena infraestructura turística.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    COSAN: {
      name: "Santander",
      description: "Bucaramanga y San Gil son seguros y populares por sus atractivos turísticos.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    COSAP: {
      name: "San Andrés y Providencia",
      description: "Región turística segura, con playas y ambiente caribeño.",
      color: "#248101",
      hover_color: "#175101",
      url: "default"
    },
    COSUC: {
      name: "Sucre",
      description: "Aunque turístico, algunas zonas rurales pueden requerir precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COTOL: {
      name: "Tolima",
      description: "Ibagué es segura, pero algunas áreas rurales necesitan precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COVAC: {
      name: "Valle del Cauca",
      description: "Cali y algunas zonas turísticas son seguras, pero otras áreas requieren precaución.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COVAU: {
      name: "Vaupés",
      description: "Atractivo para ecoturismo, pero algunas áreas son menos seguras.",
      color: "#FFC82C",
      hover_color: "#FFBD00",
      url: "default"
    },
    COVID: {
      name: "Vichada",
      description: "Zonas rurales con problemas de seguridad, precaución recomendada.",
      color: "#FF2C2F",
      hover_color: "#B60003",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Bogotá",
      lat: "4.649178",
      lng: "-74.062827"
    }
  },
  labels: {
    COAMA: {
      name: "Amazonas",
      parent_id: "COAMA"
    },
    COANT: {
      name: "Antioquia",
      parent_id: "COANT"
    },
    COARA: {
      name: "Arauca",
      parent_id: "COARA"
    },
    COATL: {
      name: "Atlántico",
      parent_id: "COATL"
    },
    COBOL: {
      name: "Bolívar",
      parent_id: "COBOL"
    },
    COBOY: {
      name: "Boyacá",
      parent_id: "COBOY"
    },
    COCAL: {
      name: "Caldas",
      parent_id: "COCAL"
    },
    COCAQ: {
      name: "Caquetá",
      parent_id: "COCAQ"
    },
    COCAS: {
      name: "Casanare",
      parent_id: "COCAS"
    },
    COCAU: {
      name: "Cauca",
      parent_id: "COCAU"
    },
    COCES: {
      name: "Cesar",
      parent_id: "COCES"
    },
    COCHO: {
      name: "Chocó",
      parent_id: "COCHO"
    },
    COCOR: {
      name: "Córdoba",
      parent_id: "COCOR"
    },
    COCUN: {
      name: "Cundinamarca",
      parent_id: "COCUN"
    },
    CODC: {
      name: "Distrito Capital de Bogotá",
      parent_id: "CODC"
    },
    COGUA: {
      name: "Guainía",
      parent_id: "COGUA"
    },
    COGUV: {
      name: "Guaviare",
      parent_id: "COGUV"
    },
    COHUI: {
      name: "Huila",
      parent_id: "COHUI"
    },
    COLAG: {
      name: "La Guajira",
      parent_id: "COLAG"
    },
    COMAG: {
      name: "Magdalena",
      parent_id: "COMAG"
    },
    COMET: {
      name: "Meta",
      parent_id: "COMET"
    },
    CONAR: {
      name: "Nariño",
      parent_id: "CONAR"
    },
    CONSA: {
      name: "Norte de Santander",
      parent_id: "CONSA"
    },
    COPUT: {
      name: "Putumayo",
      parent_id: "COPUT"
    },
    COQUI: {
      name: "Quindío",
      parent_id: "COQUI"
    },
    CORIS: {
      name: "Risaralda",
      parent_id: "CORIS"
    },
    COSAN: {
      name: "Santander",
      parent_id: "COSAN"
    },
    COSAP: {
      name: "San Andrés y Providencia",
      parent_id: "COSAP"
    },
    COSUC: {
      name: "Sucre",
      parent_id: "COSUC"
    },
    COTOL: {
      name: "Tolima",
      parent_id: "COTOL"
    },
    COVAC: {
      name: "Valle del Cauca",
      parent_id: "COVAC"
    },
    COVAU: {
      name: "Vaupés",
      parent_id: "COVAU"
    },
    COVID: {
      name: "Vichada",
      parent_id: "COVID"
    }
  }
};
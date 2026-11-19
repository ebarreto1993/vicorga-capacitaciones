// Datos de las ocho carreras de Vicorga Capacitaciones.
const carreras = {
    "cosmiatria": {
        nombre: "Cosmiatría",
        descripcion: "Especialización en ciencias cosméticas y tratamientos estéticos avanzados. Conviértete en una experta en cosmetología, cosmiatría y dermocosmiatría.",
        duracion: "6 meses (dos veces por semana) o 12 meses (solo sábados)",
        videoId: "6HDYJQtG69Y",
        modulos: [
            {"numero":"01","nombre":"Fundamentos de Cosmetología","temas":["Célula y piel","Biotipos cutáneos","Lesiones elementales","Dermis y epidermis"]},
            {"numero":"02","nombre":"Tratamientos Faciales","temas":["Higiene facial","Exfoliación","Hidratación profunda","Masaje facial"]},
            {"numero":"03","nombre":"Cosmetología Aplicada","temas":["Productos cosméticos","Fórmulas y principios","Manipulación de principios activos","Prácticas en pacientes reales"]},
            {"numero":"04","nombre":"Cosmiatría","temas":["Técnicas no invasivas","Electroestética","Radiofrecuencia","Fotoenvejecimiento"]},
            {"numero":"05","nombre":"Dermocosmiatría","temas":["Dermatología básica","Patologías de piel","Tratamiento de acné","Hiperpigmentación"]}
        ],
        matricula: 80,
        mensualidad: 150,
        mensualidadEntreSemana: 190,
        incluye: ["30% de los materiales para las clases","Uniforme de la academia","Mochila de la academia","Certificación de la academia"]
    },
    "maestria-belleza": {
        nombre: "Maestra en Belleza",
        descripcion: "Programa integral de formación profesional con 10 módulos especializados. Conviértete en un estilista experto dominando todas las áreas de la belleza, desde barbería hasta colorimetría.",
        duracion: "5 meses (2 veces por semana) o 10 meses (sábados)",
        videoId: "sV3_Bk5__3A",
        modulos: [
            {"numero":"01","nombre":"Peinados","temas":["Exfoliación del cabello","Cepillado y planchado de cabello","Tipo de trenzas","Tipo de ondas","Peinado semirrecogido","Peinado recogido alto","Peinado semirrecogido con trenza","Recogidos elegantes","Peinado vintage","Peinado de novia","Peinado de XV años","Peinados para graduaciones","Peinados infantiles","Peinados románticos"]},
            {"numero":"02","nombre":"Manicura y Pedicura","temas":["Manicura Rusa","Acrygel y Gel","Diseños 3D","Acrílico full cover"]},
            {"numero":"03","nombre":"Maquillaje I - Skin Care","temas":["Cuidado de la piel","Biotipos cutáneos","Hidratación avanzada","Corriente galvánica"]},
            {"numero":"04","nombre":"Maquillaje II","temas":["Diseño de cejas","Maquillaje de novia","Maquillaje artístico","Aplicación de pestañas"]},
            {"numero":"05","nombre":"Lashes and Brows","temas":["Lifting y tinturado","Laminado de pestañas","Técnica clásica","Teoría de pestañas"]},
            {"numero":"06","nombre":"Cortes de Dama","temas":["Corte sólido 0° y 45°","Cortes semirredondo","Melena Bob","Degrafilado con navaja"]},
            {"numero":"07","nombre":"Tratamientos Capilares","temas":["Tratamiento de células madre","Botox capilar","Queratina","Tricología capilar"]},
            {"numero":"08","nombre":"Tratamientos Faciales","temas":["Marco teórico","Exfoliación avanzada","Hidratación profunda","Fototerapia"]},
            {"numero":"09","nombre":"Barbería","temas":["Historia de la barbería","Taper fade","Corte mohicano","Ritual de la barba"]},
            {"numero":"10","nombre":"Colorimetría","temas":["Teoría del color","Tabla del 12","Cubrimiento de canas","Balayage y rayitos"]}
        ],
        matricula: 80,
        mensualidad: 120,
        mensualidadEntreSemana: 190,
        incluye: ["Uniforme de la academia","Mochila","30% de los materiales para las clases","Certificación de la academia"]
    },
    "unas": {
        nombre: "Técnica profesional en uñas",
        descripcion: "Maestra en taller de manicura y pedicura. Domina todas las técnicas profesionales de diseño y aplicación. Duración: 5 meses.",
        duracion: "5 meses (2 veces por semana, en horario matutino o vespertino, o sábados intensivos, 1 vez por semana)",
        modulos: [
            {"numero":"01","nombre":"Módulo 1","temas":["TEORÍA","ANATOMÍA DE LAS UÑAS","USO DEL DRILL Y SUS BROCAS","ÁNGULOS Y VELOCIDADES","MANICURA PRO/ MANICURA RUSA","CREACIÓN DEL BOLSILLO PERFECTO","CORTE CORRECTO SOBRE PIEL","BIOSEGURIDAD – CORRECTA ESTERILIZACIÓN DE HERRAMIENTAS.","TÉCNICA DE LIMADO SOBRE UÑAS NATURALES","ESMALTADO PERFECTO EN GEL","TÉCNICA DE BALANCE PERFECTO (NIVELACIÓN) DE LA UÑA NATURAL CON BASE RUBBER. “BLICK PERFECTO”","ENCAPSULADO EN SEMIPERMANENTE","MARMOLEADO EN SEMIPERMANENTE","DIFUMINADOS","DISEÑOS A MANO ALZADA."]},
            {"numero":"02","nombre":"Módulo 2","temas":["SISTEMA DE SOFT GEL BÁSICAS Y ENCAPSULADAS","POLYGEL CONOCIMIENTO DEL PRODUCTO","ALARGAMIENTO DE UÑA CON POLYGEL","POLYGEL BABY BOOMER","POLYGEL PERFECTO FRENCH","POLYGEL MOSAICO EN REVERSA","TÉCNICA DE ONE STROKE","BABY SHINE EN POLYGEL"]},
            {"numero":"03","nombre":"Módulo 3","temas":["SISTEMA DUAL - CONOCIMIENTO DE LAS CÁPSULAS","SISTEMA DUAL - FULL COVER","SISTEMA DUAL - ENCAPSULADAS","TÉCNICA BABY GLITTER","TÉCNICA BABY BOOMER","TÉCNICA OMBRÉ","TÉCNICA DE REVERSA BÁSICA Y ENCAPSULADAS.","DUAL SANDWICH"]},
            {"numero":"04","nombre":"Módulo 4","temas":["ACRÍLICO - CONOCIMIENTO DEL PRODUCTO Y CONTROL DE PERLAS","TÉCNICA FULL COVER","TÉCNICA BABY SHINE","TÉCNICA BABY GLITTER","TÉCNICA NOT POLISH","TÉCNICA REVERSA BÁSICA Y DOBLE REVERSA","TÉCNICA DE 3D FLORES Y ROSAS","4 ESTRUCTURAS DE SALÓN Y SUS ÁNGULOS DE LIMADO"]},
            {"numero":"05","nombre":"Módulo 5","temas":["ESTRUCTURAS ESCULPIDAS","POSICIONAMIENTO DEL MOLDE","ÁNGULOS DE ENCASTRE Y CORTE","ESTRUCTURAS DE POLYGEL ESCULPIDAS","ESTRUCTURAS DE GEL DE CONSTRUCCIÓN ESCULPIDAS - TÉCNICA DE HILO","ESTRUCTURAS DE ACRÍLICO ESCULPIDAS","PEDICURA ESTÉTICA - SIN CORTES","ELIMINACIÓN DE LATERALES - CALLOS","USO DEL PODODISK","ASEPSIA Y BIOSEGURIDAD","RECONSTRUCCIÓN DE UÑAS CON POLYGEL","ESTRUCTURA DE FANTASÍA PARA SU EXAMEN FINAL."]}
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Drill y lámparas para prácticas","30% de los materiales para las clases","Uniforme de la academia","Mochila de la academia","Certificación de la academia"]
    },
    "lashista": {
        nombre: "Lashista",
        descripcion: "Conviértete en lashista profesional en tan solo 3 meses. Curso exclusivo de 3 módulos donde te convertirás en especialista de miradas con extensiones de pestañas.",
        duracion: "3 meses (1 vez por semana, en horario matutino o vespertino)",
        videoId: "IkzzymNarfE",
        modulos: [
            {"numero":"01","nombre":"Fundamentos de Lashista","temas":["Anatomía del párpado","Tipos de pestañas naturales","Herramientas profesionales","Seguridad e higiene"]},
            {"numero":"02","nombre":"Técnica de Extensiones","temas":["Técnica clásica","Técnica volumen ruso","Aplicación de extensiones","Retoque y mantenimiento"]},
            {"numero":"03","nombre":"Diseño y Especialización","temas":["Diseño de mirada","Diferentes estilos de lashes","Lashes para eventos","Prácticas en modelos reales"]}
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Uniforme de la academia","Mochila de la academia","30% de los materiales para las clases","Certificación de la academia"]
    },
    "micropigmentacion": {
        nombre: "Micropigmentación",
        descripcion: "Aprende micropigmentación facial: cejas, labios y perfilado con técnicas de precisión. Especialización en 6 meses. Conviértete en una experta en esta técnica semipermanente.",
        duracion: "6 meses (1 vez por semana, en horario matutino o vespertino)",
        videoId: "vXYwpOcHC-w",
        modulos: [
            {"numero":"01","nombre":"Fundamentos de Micropigmentación","temas":["Historia de la micropigmentación","Técnicas básicas","Equipos y herramientas","Seguridad e higiene"]},
            {"numero":"02","nombre":"Diseño de Cejas","temas":["Análisis facial","Formas de cejas","Diseño personalizado","Técnica de aplicación"]},
            {"numero":"03","nombre":"Perfilado de Labios","temas":["Teoría de labios","Formas y proporciones","Técnica de perfilado","Correcciones y ajustes"]},
            {"numero":"04","nombre":"Delineado de Ojos","temas":["Anatomía del ojo","Tipos de delineado","Técnica de aplicación","Efectos y estilos"]},
            {"numero":"05","nombre":"Pigmentos y Cuidados","temas":["Selección de pigmentos","Cuidados post-procedimiento","Retoque y mantenimiento","Prácticas en modelos reales"]}
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Uniforme de la academia","Mochila de la academia","30% de los materiales para las clases","Certificación de la academia"]
    },
    "maquillaje": {
        nombre: "Maquillaje",
        descripcion: "Titúlate como maquilladora profesional en tan solo 4 meses. Domina técnicas de maquillaje artístico, de novia, y peinado profesional. Alto rendimiento.",
        duracion: "4 meses (una vez por semana)",
        videoId: "ccu2RzYMCLI",
        modulos: [
            {"numero":"01","nombre":"Fundamentos de Maquillaje","temas":["Teoría del color","Biotipos de piel","Preparación de la piel","Herramientas y brochas"]},
            {"numero":"02","nombre":"Maquillaje de Día y Noche","temas":["Maquillaje natural","Maquillaje de noche","Contouring básico","Técnicas de iluminación"]},
            {"numero":"03","nombre":"Maquillaje Artístico","temas":["Maquillaje temático","Body art","Efectos especiales","Fantasía y creatividad"]},
            {"numero":"04","nombre":"Maquillaje Profesional","temas":["Maquillaje de novia","Maquillaje para eventos","Maquillaje televisivo","Prácticas en modelos reales"]}
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Uniforme de la academia","30% de los materiales para las clases","Mochila de la academia","Certificación de la academia"]
    },
    "barberia": {
        nombre: "Barbería",
        descripcion: "Titúlate como técnico profesional en barbería en tan solo 4 meses. Domina cortes modernos, técnicas de barba y servicio profesional. Cupos limitados a 8 estudiantes.",
        duracion: "3 meses (lunes y miércoles) o 4 meses (sábados)",
        videoId: "FaFkNU3nGTk",
        modulos: [
            {"numero":"01","nombre":"Historia y Fundamentos de Barbería","temas":["Historia de la barbería","Técnicas clásicas","Herramientas profesionales","Seguridad e higiene"]},
            {"numero":"02","nombre":"Cortes Clásicos","temas":["Corte sólido 0° y 45°","Taper fade","Mohicano","Skin fade"]},
            {"numero":"03","nombre":"Rituals de Barba","temas":["Afeitado clásico","Ritual de barba completo","Cuidado de la barba","Productos especializados"]},
            {"numero":"04","nombre":"Cortes Modernos","temas":["Cortes actuales","Diseños personalizados","Líneas y detalles","Prácticas en clientes reales"]}
        ],
        matricula: 80,
        mensualidad: 150,
        mensualidadEntreSemana: 190,
        incluye: ["Máquina de cortar cabello","Uniforme de la academia","Mochila de la academia","30% de los materiales para las clases","Certificación de la academia"]
    },
    "tatuajes": {
        nombre: "Tatuajes",
        descripcion: "Aprende técnicas de tatuaje profesional, higiene, diseño y arte corporal. Conviértete en tatuador certificado con los más altos estándares de seguridad.",
        duracion: "6 meses",
        modulos: [
            {"numero":"01","nombre":"Fundamentos de Tatuaje","temas":["Historia del tatuaje","Anatomía de la piel","Teoría del color","Equipos y herramientas"]},
            {"numero":"02","nombre":"Técnicas de Tatuaje","temas":["Técnica de línea","Técnica de sombreado","Técnica de relleno","Blending y degradado"]},
            {"numero":"03","nombre":"Diseño y Artística","temas":["Diseño de tatuajes","Estilos tatuajes","Proporciones y composición","Adaptación al cuerpo"]},
            {"numero":"04","nombre":"Higiene y Seguridad","temas":["Esterilización de equipos","Protocolos de higiene","Prevención de infecciones","Normativas legales"]},
            {"numero":"05","nombre":"Prácticas Profesionales","temas":["Prácticas en modelos","Atención al cliente","Cuidados post-tatuaje","Portafolio profesional"]}
        ],
        matricula: 80,
        mensualidad: 150,
        mensualidadEntreSemana: 190,
        incluye: ["Equipos básicos para prácticas","Uniforme de la academia","Mochila de la academia","30% de los materiales para las clases","Certificación de la academia"]
    }
};

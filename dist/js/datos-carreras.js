// Datos de las ocho carreras de Vicorga Capacitaciones.
const carreras = {
    "cosmiatria": {
        nombre: "Cosmiatría",
        descripcion: "Formación profesional en cosmetología, cosmiatría y dermocosmiatría, con protocolos, aparatología avanzada y prácticas en pacientes reales.",
        duracion: "6 meses (2 veces por semana, intensivo) o 12 meses (1 vez por semana)",
        videoId: "6HDYJQtG69Y",
        modulos: [
            {"numero":"01","nombre":"Enfoque Cosmetológico","temas":["Anatomía y fisiología del tejido tegumentario","Anamnesis: biotipos y fototipos","Características visuales y táctiles de las tipologías cutáneas","Aparatología: alta frecuencia, analizador microscópico de piel, vapor y ozonoterapia","Prácticas de limpieza profunda en pacientes"]},
            {"numero":"02","nombre":"Hidratación","temas":["Conceptos básicos de hidratación y humectación de la piel","Factores desencadenantes de la deshidratación","Radicales libres y apoptosis celular","Productos y principios activos hidratantes y humectantes","Corriente ionizable","Prácticas en pacientes reales"]},
            {"numero":"03","nombre":"Envejecimiento Cutáneo","temas":["Involución de la piel","Factores desencadenantes","Características de las pieles involutivas","Estrés oxidativo","Protocolo y controversias de las manifestaciones de la piel","Contraindicaciones y ventajas","Radiofrecuencia monopolar, bipolar y tripolar","Prácticas en pacientes reales para efecto lifting"]},
            {"numero":"04","nombre":"Peeling","temas":["Fundamentos básicos de la renovación celular","Técnicas de exfoliación físicas, químicas y mecánicas","Uso de alfa-hidroxiácidos","Uso de beta-hidroxiácidos","Contraindicaciones, ventajas y factores del procedimiento","Protocolo","Práctica en pacientes"]},
            {"numero":"05","nombre":"Despigmentación Facial","temas":["Trastornos pigmentarios","Proceso de la melanogénesis","Tipos de melanina","Factores influyentes en la pigmentación","Discromías por pigmento melánico","Protocolo de actuación","Indicaciones según la pigmentación","Contraindicaciones previas al diagnóstico inicial","Práctica en paciente adecuado"]},
            {"numero":"06","nombre":"Acné","temas":["Alteraciones de la glándula sebácea","Mecanismo de producción del sebo","Unidad pilosebácea","Etiología","Clasificación de los grados de acné","Tratamiento específico","Protocolo de actuación","Práctica en pacientes con manifestaciones propias de acné"]},
            {"numero":"07","nombre":"Actualización de Peeling y Técnicas de Aparatología","temas":["Técnica de dermaplaning","Técnica en electrocauterio","Bioestimulación facial con Dermapen","Actualización de peeling químico"]},
            {"numero":"08","nombre":"Corporal: Electroestética Avanzada","temas":["Introducción a la estética corporal","Aparato locomotor","Factores desencadenantes de la obesidad","Definición de obesidad y sobrepeso","Apertura de canales","Drenaje linfático en decúbito prono y decúbito supino","Maniobras de masaje reductor","Maderoterapia","Mecanismo de aparatologías combinadas","Modelación de cintura y glúteos","Termoterapia, vacumterapia y gimnasia pasiva","Cavitación y radiofrecuencia corporal"]},
            {"numero":"09","nombre":"Inyectoterapia, Sueroterapia y Mesoterapia","temas":["Inyectología y sueroterapia","Mesoterapia facial y principios activos de uso facial","Tratamientos antiedad, antiacné, reafirmantes y despigmentantes","Corrección de ojeras y líneas de expresión","Técnicas de aplicación facial","Manejo y uso de enzimas recombinantes","Mesoterapia corporal y principios activos de uso corporal","Tratamientos lipolítico, reafirmante y de regeneración dérmica","Uso correcto de los anestésicos en mesoterapia"]},
            {"numero":"10","nombre":"Plasma Rico en Plaquetas (P.R.P.)","temas":["Exámenes de laboratorio e interpretación de resultados","Análisis de hemograma completo y perfil hormonal","Identificación de paciente patológico","Plasma rico en plaquetas y su mecanismo de acción","Canalización de vena para toma de muestra","Tratamientos de rejuvenecimiento y regeneración dérmica","Manejo de la centrífuga","Activación de los factores de crecimiento","Técnicas de aplicación y contraindicaciones","Anamnesis"]},
            {"numero":"11","nombre":"Aparatología de Avanzada","temas":["Ultrasonido, cavitación y ultracavitación: tipos, usos y manejo","Presoterapia: contraindicaciones y mecanismos de acción","Radiofrecuencia: tipos, usos y manejo","Criolipólisis: contraindicaciones, usos y manejo","HIFU portátil y profesional: contraindicaciones, usos y manejo","Luz pulsada intensa (IPL): tratamientos, contraindicaciones y mecanismos de acción","Picosecond: uso y manejo","Emsculpt: uso y manejo"]},
            {"numero":"12","nombre":"Uso y Manejo de Peptonas Facial y Corporal","temas":["Mecanismo de acción y uso médico-estético de las peptonas","Rejuvenecimiento facial con peptonas","Reafirmación y tonificación de glúteos","Anatomía y estimulación del músculo glúteo","Uso adecuado de peptonas en hipertrofia muscular","Vías de administración"]}
        ],
        matricula: 80,
        mensualidad: 150,
        mensualidadEntreSemana: 190,
        incluye: ["Uniforme completo","Mochila","30% de los materiales, excepto principios activos y herramientas personales","Aparatología de última generación para todas las prácticas en clase: láser, Picosecond, HIFU, carboxia, entre otras"]
    },
    "maestria-belleza": {
        nombre: "Maestra en Belleza",
        descripcion: "Programa integral de formación profesional con 9 módulos especializados. Conviértete en un estilista experto dominando todas las áreas de la belleza, desde barbería hasta colorimetría.",
        duracion: "5 meses (2 veces por semana) o 10 meses (sábados)",
        videoId: "sV3_Bk5__3A",
        modulos: [
            {"numero":"01","nombre":"Peinados","temas":["Exfoliación del cabello","Cepillado y planchado de cabello","Tipo de trenzas","Tipo de ondas","Peinado semirrecogido","Peinado recogido alto","Peinado semirrecogido con trenza","Recogidos elegantes","Peinado vintage","Peinado de novia","Peinado de XV años","Peinados para graduaciones","Peinados infantiles","Peinados románticos"]},
            {"numero":"02","nombre":"Cortes","temas":["Cerquillos, flequillos","Corte recto (0°) y 45°","Cortes semirredondo, corte en V","Elevación 90°, 135° y 180°","Corte pluma","Melena, bob","Entresacado y degrafilado con navaja","Corte pixie","Corte de señora"]},
            {"numero":"03","nombre":"Tratamientos Capilares","temas":["Marco teórico de tratamientos","Exfoliación del cabello","Tratamiento de células madre","Tratamiento de repolarización","Tratamiento botox","Tricología capilar","Teoría de permacología","Práctica de permanente (montaje de bigudí)","Práctica de queratina"]},
            {"numero":"04","nombre":"Tratamientos Faciales","temas":["Célula / piel","Lesiones elementales primarias y secundarias","Biotipos y fototipos cutáneos","Conceptos básicos de hidratación","Radicales libres","Productos y principios hidratantes","Corriente ionizable galvánica (prácticas en pacientes reales)"]},
            {"numero":"05","nombre":"Maquillaje","temas":["Diseño de cejas","Tipos de depilación","Colocación de pestañas individuales y tira","Lifting de pestañas","Preparación y limpieza de piel","Uso de productos y herramientas","Maquillaje de día y noche","Maquillaje de novia","Maquillaje artístico"]},
            {"numero":"06","nombre":"Lashes and Brows","temas":["Lifting y tinturado de pestañas","Laminado de pestañas más tinturado","Teoría de pestañas","Técnica clásica en maniquí","Técnica clásica en modelo"]},
            {"numero":"07","nombre":"Manicura y pedicura","temas":["Manicura rusa","Esmaltado perfecto","Diseños a mano alzada","Acrygel básica y encapsulada","Gel básica y encapsulada","Acrílico full cover","Baby boomer","Diseños 3D","Pedicura"]},
            {"numero":"08","nombre":"Barbería","temas":["Historia de la barbería","Manejo y uso de las herramientas","Corte comb over","Teoría del taper fade","Blow out – taper fade","Corte mohicano","Corte normal alza #2","Corte alza #1","Corte alza #0.5","Corte mid-fade #0","Skin fade / navaja","Corte a tijera","Ritual de la barba"]},
            {"numero":"09","nombre":"Colorimetría","temas":["Marco teórico de colorimetría","Formulaciones y leyes del color","Creación de colores: tabla del 12","Cubrimiento de canas","Tono sobre tono","Rayitos y marmoleado","Balayage"]}
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

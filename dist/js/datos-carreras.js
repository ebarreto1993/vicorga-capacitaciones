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
        incluye: ["Uniforme completo", "Mochila", "30% de los materiales para trabajar en clase, excepto principios activos y herramientas personales", "Aparatología de última generación para todas las prácticas en clase: láser, Picosecond, HIFU, carboxia, entre otras", "Certificado"]
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
        incluye: ["Uniforme de la academia", "Mochila", "30% de los materiales para trabajar en clase", "Certificado"]
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
        incluye: ["Drill y lámparas para prácticas", "30% de los materiales para trabajar en clase", "Uniforme de la academia", "Mochila de la academia", "Certificado"]
    },
    "lashista": {
        nombre: "Lashista",
        descripcion: "Formación Lash Artist desde cero en diseño de cejas, lifting y extensiones de pestañas, con prácticas en modelos reales.",
        duracion: "3 meses",
        videoId: "IkzzymNarfE",
        modulos: [
            {"numero":"01","nombre":"Diseño de cejas y lifting","temas":["Visagismo","Diseño de cejas","Depilación con hilo","Teoría e introducción al laminado de cejas","Tinturado con RefectoCil","Tinturado con henna","Práctica de laminado en modelo real","Teoría de lifting de pestañas","Práctica en modelo real con Maxymova"]},
            {"numero":"02","nombre":"Extensiones pelo a pelo","temas":["Introducción a las pestañas pelo a pelo","Adhesivos y su composición","Temperatura y humedad","Curvatura, grosor y tamaño","Diseños de mirada: natural, ardilla, muñeca, ojo abierto y ojo de gato","Técnicas a utilizar: clásicas o volumen","Prácticas de direccionamiento","Método de aplicación","Técnica clásica pelo a pelo: clásicas, flat y efecto rímel"]},
            {"numero":"03","nombre":"Volumen y efectos","temas":["Volumen ruso","Creación de abanicos","Volumen tecnológico en modelo real","Práctica de técnica híbrida en clase con modelo real","Práctica de técnica wispy en clase con modelo real","Práctica de efecto 4D con pop de color","Examen final"]}
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Camiseta", "Mochila de la academia", "30% de los materiales para trabajar en clase", "Certificado"]
    },
    "micropigmentacion": {
        nombre: "Micropigmentación",
        descripcion: "Formación en micropigmentación de cejas, ojos y labios.",
        duracion: "6 meses",
        modulos: [
            {"numero": "01", "nombre": "Módulo 1", "temas": ["Introducción a la micropigmentación", "Historia y evolución del microblading", "Diferencias entre el microblading y el tatuaje", "Anatomía y estructura de la piel", "Normas de higiene y seguridad", "Contraindicaciones absolutas y relativas", "Preparación de la piel", "Herramientas e insumos para el diseño", "Visagismo", "Depilación con navaja o pinza", "Técnicas de micropigmentación: microblading, microshading y efecto polvo", "Prácticas en látex y frutas"]},
            {"numero": "02", "nombre": "Módulo 2", "temas": ["Colorimetría básica", "Teoría del color", "Pigmentología: creación de colores orgánicos e inorgánicos", "Biotipos y fototipos cutáneos", "Selección de pigmentos según el tono de piel y cabello", "Cuidado y mantenimiento del equipo", "Tipos de agujas y sus usos específicos", "Técnica y práctica", "Dibujo de trazos y diseño de cejas"]},
            {"numero": "03", "nombre": "Módulo 3", "temas": ["Efecto polvo", "Maniobra pendular básica", "Técnica de sombreado suave para un efecto más difuso", "Neutralización", "Tipos de remoción: química, enzimática y con láser", "Tipos de agujas", "Integración con otras técnicas", "Prácticas en látex y frutas", "Prácticas con modelos reales"]},
            {"numero": "04", "nombre": "Módulo 4", "temas": ["Microshading o cejas híbridas", "Por qué y para qué se aplica la técnica", "Contraindicaciones absolutas y relativas", "Combinación de píxeles, ombré brows, powder brows y sombreado", "Creación del efecto y retención del color", "Ángulos de aplicación del pigmento", "Prácticas en látex y frutas", "Prácticas con modelos reales"]},
            {"numero": "05", "nombre": "Módulo 5", "temas": ["Micropigmentación de labios", "Anatomía y nervios", "Morfología y visagismo de los labios", "Contraindicaciones absolutas y relativas", "Técnicas para definir y dar volumen a los labios", "Selección de pigmentos y colores adecuados", "Neutralización según el fototipo", "Técnicas de relleno y contorno", "Corrección del color y la forma", "Técnica Baby Lips", "Técnica Full Lips"]},
            {"numero": "06", "nombre": "Módulo 6", "temas": ["Delineado de ojos", "Anatomía del ojo", "Contraindicaciones absolutas y relativas", "Tipos de delineado según la morfología del ojo", "Visagismo del ojo", "Técnicas de delineado permanente: efecto de volumen en pestañas y eyeliner", "Cuidados posteriores"]}
        ],
        matricula: 70,
        mensualidad: 150,
        incluye: ["Camiseta", "Kit de inicio", "30% de los materiales para trabajar en clase", "Certificado"]
    },
    "maquillaje": {
        nombre: "Maquillaje",
        descripcion: "Maquillaje profesional de nivel básico, intermedio y avanzado.",
        duracion: "4 meses",
        modulos: [
            {"numero": "01", "nombre": "Módulo teórico", "temas": ["Laboratorio de productos y herramientas", "Colorimetría básica y face chart", "Visagismo facial y corporal", "Tipos y fototipos de piel", "Preparación e hidratación de la piel", "Diseño de cejas", "Laminado y tinturado de cejas", "Aplicación de bases y neutralizaciones básicas"]},
            {"numero": "02", "nombre": "Módulo básico: maquillaje social y de misses", "temas": ["Módulo técnico básico y social", "Piel perfecta", "Piel madura y maquillaje exprés correctivo", "Piel ébano y degrade de cuatro colores", "Smokey eyes clásico", "Halo makeup", "Esfumado glam", "Maquillaje de reina"]},
            {"numero": "03", "nombre": "Módulo técnico: redes sociales y tendencias", "temas": ["Mirror y glowly skin", "Foxy eyes", "Piel mate", "Maquillaje de novia", "Semi cut crease", "Cut con luz", "Pieles resistentes a la fricción", "Maquillaje editorial", "Delineados gráficos", "Efecto piel húmeda"]},
            {"numero": "04", "nombre": "Especialización en técnicas sociales en tendencia y novias", "temas": ["Novia romántica (blindaje)", "Maquillaje nupcial"]},
            {"numero": "05", "nombre": "Especialización en cortes y caracterización", "temas": ["Samurái, nivel 1", "Samurái, nivel 2", "Efectos especiales", "Técnicas de envejecimiento", "Caracterización 1", "Caracterización 2"]}
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Uniforme completo", "Mochila", "30% de los materiales para trabajar en clase", "Certificado"]
    },
    "barberia": {
        nombre: "Barbería",
        descripcion: "Técnico profesional en barbería. Aprende desde cero técnicas de corte, desvanecidos, barba y color.",
        duracion: "4 meses",
        videoId: "FaFkNU3nGTk",
        modulos: [
            {"numero":"01","nombre":"Fundamentos y corte","temas":["Introducción a la barbería","Manipulación de portanavaja y tijera","Nomenclatura y reconocimiento de alzas","Visagismo en barbería","Teoría del corte","Corte básico con máquina","Corte con tijera","Técnicas de sombreado","Estructuras de corte","Técnica fade doble partición"]},
            {"numero":"02","nombre":"Cabello y técnicas de corte","temas":["Técnicas de seccionamiento","Manipulación del cabello en cabezotes","Particiones, subsecciones y distribuciones","Elevaciones y ángulos de corte","Tricología","Clasificación del cabello","Características del cabello","Ciclo del cabello","Composición química del cabello","Pautas para la determinación del cabello","Enfermedades más comunes del cuero cabelludo","Reconocimiento de productos para enfermedades capilares","El cabello y su preparación","Exfoliación del cabello","Limpiezas faciales"]},
            {"numero":"03","nombre":"Desvanecidos y barba","temas":["Técnicas de texturizar","Tipos de desvanecidos: low fade, mid fade y high fade","Técnica para realizar blow out o taper fade","Diseños y figuras","Peinados","La barba","Tipos de barba","Tipos de bigote","Visagismo en la barba","Ritual de afeitado","Pigmentación para barba y cortes","Cejas","Permacología"]},
            {"numero":"04","nombre":"Colorimetría","temas":["Historia del color","Estrella de color","Leyes del color","Altura de tonos","Colores fríos y cálidos","Clasificación de tintes","Clasificación de peróxidos u oxidantes","Reglas de oro del peróxido","pH del cabello","Diagnóstico capilar","Técnica para cubrimiento de canas","Técnica tono sobre tono","Técnica rayitos","Técnica de mechas localizadas","Técnica de mechón y colores fantasía","Técnica de decoloración global"]}
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Uniforme de la academia (chaqueta y capa)", "30% de los materiales para trabajar en clase", "Máquinas para trabajar en clase", "Certificado"]
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
        incluye: ["Equipos básicos para prácticas", "Uniforme de la academia", "Mochila de la academia", "30% de los materiales para trabajar en clase", "Certificado"]
    }
};

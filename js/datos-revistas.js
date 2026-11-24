// Configuración visual de cada revista. Los contenidos del pénsum están en datos-carreras.js.
const revistas = {
  "maestria-belleza": {
    "ocultarVideoExterno": true,
    "portada": {
      "plantilla": "beauty-cover-template",
      "imagen": "assets/images/modulo_belleza/m1/m1.jpeg"
    },
    "paginasPrevias": [
      {
        "id": "conocenos",
        "titulo": "CONÓCENOS",
        "texto": "SOMOS UNA INSTITUCIÓN DE CAPACITACIÓN EN EL ÁREA DE LA BELLEZA, COMPROMETIDA CON EL DESARROLLO CONSTANTE EN LA FORMACIÓN DE FUTUROS PROFESIONALES Y EMPRESARIOS; SIENDO RECONOCIDOS CON MÁS DE 7 AÑOS EN EL MERCADO, POR NUESTRA EXCELENCIA Y CALIDAD EN LOS PROCESOS DE APRENDIZAJE COMO UNA INSTITUCIÓN LÍDER EN EL AMPLIO MUNDO DE LA BELLEZA.",
        "imagen": "assets/images/modulo_belleza/m2/m2.jpeg",
        "clase": "beauty-about",
        "marcaAgua": true
      },
      {
        "id": "dirigido-a",
        "titulo": "¿A QUIÉNES VA DIRIGIDA ESTA CARRERA?",
        "texto": "A PERSONAS CON CERO CONOCIMIENTO QUE DESEAN APRENDER Y EMPRENDER. ESTA CARRERA TE AYUDA A CREAR TU TÉCNICA Y DESARROLLARTE EN LAS DIFERENTES ÁREAS DE BELLEZA, CONVIRTIÉNDOTE EN UN ESTILISTA PROFESIONAL PARA EXPLORAR TODO TU POTENCIAL Y COMENZAR A TRABAJAR.",
        "imagen": "assets/images/modulo_belleza/m3/m3.jpeg",
        "clase": "beauty-audience page-text-left",
        "marcaAgua": true
      }
    ],
    "modulos": [
      {
        "videoFondo": "assets/images/modulo_belleza/m4/m4_video.mp4",
        "burbujas": [
          {"imagen": "assets/images/modulo_belleza/m4/m4_2.jpeg"},
          {"imagen": "assets/images/modulo_belleza/m4/m4_3.jpeg"}
        ],
        "clase": "beauty-peinados",
        "titulo": "PEINADOS"
      },
      {
        "imagen": "assets/images/modulo_belleza/m5/m5.jpeg",
        "clase": "beauty-cortes page-text-left",
        "titulo": "CORTES",
        "marcaAgua": true
      },
      {
        "videoFondo": "assets/images/modulo_belleza/m6/m6_video.mp4",
        "poster": "assets/images/modulo_belleza/m6/m6.jpeg",
        "burbujas": [
          {"imagen": "assets/images/modulo_belleza/m6/m6.jpeg"},
          {"imagen": "assets/images/modulo_belleza/m6/m6_2.jpeg"}
        ],
        "clase": "beauty-capilares",
        "titulo": "TRATAMIENTOS CAPILARES"
      },
      {
        "videoFondo": "assets/images/modulo_belleza/m7/m7_video.mp4",
        "poster": "assets/images/modulo_belleza/m7/m7.jpeg",
        "burbujas": [
          {"imagen": "assets/images/modulo_belleza/m7/m7.jpeg"},
          {"imagen": "assets/images/modulo_belleza/m7/m7_2.jpeg"}
        ],
        "clase": "beauty-faciales page-text-left",
        "titulo": "TRATAMIENTOS FACIALES"
      },
      {
        "videoFondo": "assets/images/modulo_belleza/m8/m8.mp4",
        "clase": "beauty-maquillaje",
        "titulo": "MAQUILLAJE",
        "marcaAgua": true
      },
      {
        "videoFondo": "assets/images/modulo_belleza/m9/m9.mp4",
        "clase": "beauty-lashes page-text-left",
        "titulo": "LASHES AND BROWS",
        "marcaAgua": true
      },
      {
        "videoFondo": "assets/images/modulo_belleza/m10/m10.mp4",
        "burbujas": [
          {"video": "assets/images/modulo_belleza/m10/m10.mp4"},
          {"video": "assets/images/modulo_belleza/m10/m10_2.mp4", "clase": "manicure-mobile-video"}
        ],
        "clase": "beauty-manicure",
        "titulo": "MANICURA / PEDICURA"
      },
      {
        "videoFondo": "assets/images/modulo_belleza/m11/m10_video.mp4",
        "clase": "beauty-barberia page-text-left",
        "titulo": "BARBERÍA",
        "marcaAgua": true
      },
      {
        "videoFondo": "assets/images/modulo_belleza/m12/m12_video.mp4",
        "poster": "assets/images/modulo_belleza/m12/m12.jpeg",
        "burbujas": [
          {"imagen": "assets/images/modulo_belleza/m12/m12.jpeg"},
          {"imagen": "assets/images/modulo_belleza/m12/m12_2.jpeg"}
        ],
        "clase": "beauty-colorimetria",
        "titulo": "COLORIMETRÍA"
      }
    ],
    "videoInversion": "assets/images/modulo_belleza/m13/m13.mp4",
    "inversionProgramas": [
      {
        "titulo": "CARRERA 10 MESES",
        "horarios": ["SÁBADOS INTENSIVOS (1 VEZ POR SEMANA) · 09:00 A. M. – 04:00 P. M."],
        "valores": ["MATRÍCULA: $80", "MENSUALIDAD: $120"]
      },
      {
        "titulo": "CARRERA 5 MESES",
        "horarios": [
          "LUNES Y MIÉRCOLES (2 VECES POR SEMANA) · 09:00 A. M. – 04:00 P. M.",
          "MARTES Y JUEVES (2 VECES POR SEMANA) · 09:00 A. M. – 04:00 P. M."
        ],
        "valores": ["MATRÍCULA: $80", "MENSUALIDAD: $190"]
      }
    ]
  },
  "unas": {
    "portada": {
      "plantilla": "nails-cover-template"
    },
    "introduccion": {
      "titulo": "¿A QUIÉNES VA DIRIGIDA ESTA CARRERA?",
      "texto": "ESTA CARRERA ES IDEAL PARA TODAS AQUELLAS PERSONAS QUE DESEEN INGRESAR AL MUNDO DE LAS UÑAS, EMPEZAMOS DESDE 0, POR LO TANTO NO NECESITAS TENER CONOCIMIENTO PREVIO. MI META ES ENSEÑARTE NUEVAS TÉCNICAS PARA LOGRAR RESULTADOS EXCELENTES.",
      "imagen": "assets/images/modulo_uñas/m2/m2.jpeg",
      "marcaAgua": true
    },
    "modulos": [
      {
        "imagen": "assets/images/modulo_uñas/m3/m3.jpeg",
        "clase": "nails-module-one"
      },
      {
        "imagen": "assets/images/modulo_uñas/m4/m4.jpeg",
        "clase": "nails-module-two",
        "video": "assets/images/modulo_uñas/m4/m4_video.mp4"
      },
      {
        "imagen": "assets/images/modulo_uñas/m5/m5.jpeg",
        "clase": "nails-module-three",
        "marcaAgua": true
      },
      {
        "imagen": "assets/images/modulo_uñas/m6/m6.jpeg",
        "clase": "nails-module-four",
        "marcaAgua": true
      },
      {
        "imagen": "assets/images/modulo_uñas/m7/m7_2.jpeg",
        "clase": "nails-module-five",
        "segundaImagen": "assets/images/modulo_uñas/m7/m7.jpeg"
      }
    ],
    "examen": {
      "imagenes": [
        "assets/images/modulo_uñas/m8/m8_2.jpeg",
        "assets/images/modulo_uñas/m8/m8.jpeg"
      ],
      "descripciones": [
        "Trabajo de fantasía con uñas decoradas para el examen final",
        "Estudiante presentando su trabajo de uñas"
      ]
    },
    "imagenInversion": "assets/images/modulo_uñas/m9/m9.jpeg",
    "notaExamen": "EXAMEN FINAL OBLIGATORIO PARA RECIBIR TU CERTIFICACIÓN (SESIÓN DE FOTOS)."
  },
  "lashista": {
    "ocultarVideoExterno": true,
    "imagenRespaldo": "assets/images/lashista.jpeg",
    "portada": {
      "plantilla": "lashista-cover-template",
      "imagen": "assets/images/modulo_lahista/m1/m1.jpeg"
    },
    "paginasPrevias": [
      {
        "id": "dirigido-a",
        "titulo": "¿A QUIÉNES VA DIRIGIDA ESTA CARRERA?",
        "texto": "Esta carrera es ideal para quienes desean ampliar sus servicios en el área de la belleza e incrementar sus ingresos. Empezamos desde cero, por lo que no necesitas conocimientos previos. Aprenderás nuevas técnicas para lograr resultados excelentes.",
        "imagen": "assets/images/modulo_lahista/m2/m2.jpeg",
        "clase": "barberia-intro lashista-intro",
        "marcaAgua": true
      }
    ],
    "modulos": [
      {"imagen":"assets/images/modulo_lahista/m3/m3.jpeg","clase":"barberia-module lashista-module","marcaAgua":true},
      {"imagen":"assets/images/modulo_lahista/m4/m4.jpeg","clase":"barberia-module lashista-module page-text-left","marcaAgua":true},
      {"imagen":"assets/images/modulo_lahista/m5/m5.jpeg","clase":"barberia-module lashista-module","marcaAgua":true}
    ],
    "imagenInversion": "assets/images/modulo_lahista/m6/m6.jpeg",
    "opcionalCertificado": "Certificado con aval del Ministerio de Trabajo, visible en la plataforma (previo derecho de examen).",
    "notasInversion": [
      "Examen final obligatorio para recibir la certificación (sesión de fotos).",
      "Puedes reservar tu cupo con $20 y hacer abonos poco a poco. La matrícula y la pensión deberán estar pagadas hasta el día de inicio.",
      "Ojo: los valores cancelados o abonados no serán reembolsables bajo ninguna circunstancia."
    ]
  },
  "barberia": {
    "ocultarVideoExterno": true,
    "imagenRespaldo": "assets/images/barberia.jpeg",
    "portada": {
      "plantilla": "barberia-cover-template",
      "imagen": "assets/images/modulo_barberia/m1/m1.jpeg"
    },
    "paginasPrevias": [
      {
        "id": "dirigido-a",
        "titulo": "¿A QUIÉNES VA DIRIGIDA ESTA CARRERA?",
        "texto": "Esta carrera es ideal para quienes desean ingresar al mundo de la barbería. Empezamos desde cero, por lo que no necesitas conocimientos previos. Aprenderás nuevas técnicas eficientes para lograr resultados excelentes.",
        "imagen": "assets/images/modulo_barberia/m2/m2.jpeg",
        "clase": "barberia-intro",
        "marcaAgua": true
      }
    ],
    "modulos": [
      {"imagen":"assets/images/modulo_barberia/m3/m3.jpeg","clase":"barberia-module barberia-module-one","marcaAgua":true},
      {"imagen":"assets/images/modulo_barberia/m4/m4.jpeg","clase":"barberia-module page-text-left barberia-module-two","marcaAgua":true},
      {"imagen":"assets/images/modulo_barberia/m5/m5.jpeg","clase":"barberia-module barberia-module-three","marcaAgua":true},
      {"imagen":"assets/images/modulo_barberia/m6/m6.jpeg","clase":"barberia-module page-text-left barberia-module-four","marcaAgua":true}
    ],
    "imagenInversion": "assets/images/modulo_barberia/m7/m7.jpeg",
    "opcionalCertificado": "Certificado con aval del Ministerio de Trabajo, visible en la plataforma, con una carga horaria de 210 horas (previo derecho de examen).",
    "notaExamen": "Examen final obligatorio para recibir la certificación (sesión de fotos).",
    "notasInversion": [
      "Examen final obligatorio para recibir la certificación (sesión de fotos).",
      "Puedes reservar tu cupo con $20 y hacer abonos poco a poco. La matrícula y la pensión deberán estar pagadas hasta el día de inicio.",
      "Ojo: los valores cancelados o abonados no serán reembolsables bajo ningún motivo ni circunstancia."
    ]
  },
  "maquillaje": {
    "imagenRespaldo": "assets/images/maquillaje.jpeg",
    "portada": {
      "plantilla": "professional-cover-template",
      "imagen": "assets/images/modulo_maquillaje/m1/m1.jpeg",
      "titulo": "MAQUILLAJE PROFESIONAL",
      "subtitulo": "BÁSICO – INTERMEDIO – AVANZADO"
    },
    "paginasPrevias": [
      {
        "id": "dirigido-a",
        "titulo": "¿A QUIÉNES VA DIRIGIDA ESTA CARRERA?",
        "imagen": "assets/images/modulo_maquillaje/m2/m2.jpeg",
        "clase": "barberia-intro",
        "marcaAgua": true,
        "texto": "Esta carrera es ideal para quienes desean aprender y emprender. Te ayuda a desarrollar tu técnica en las diferentes áreas del maquillaje para convertirte en una artista de élite, aprovechar todo tu potencial y comenzar a trabajar. Empezamos desde cero."
      }
    ],
    "modulos": [
      {
        "titulo": "Módulo teórico",
        "imagen": "assets/images/modulo_maquillaje/m3/m3.jpeg",
        "clase": "barberia-module",
        "marcaAgua": true
      },
      {
        "titulo": "Módulo básico: maquillaje social y de misses",
        "imagen": "assets/images/modulo_maquillaje/m4/m4.jpeg",
        "clase": "barberia-module page-text-left",
        "marcaAgua": true
      },
      {
        "titulo": "Módulo técnico: redes sociales y tendencias",
        "imagen": "assets/images/modulo_maquillaje/m5/m5.jpeg",
        "clase": "barberia-module",
        "marcaAgua": true
      },
      {
        "titulo": "Especialización en técnicas sociales en tendencia y novias",
        "imagen": "assets/images/modulo_maquillaje/m6/m6.jpeg",
        "clase": "barberia-module page-text-left",
        "marcaAgua": true
      },
      {
        "titulo": "Especialización en cortes y caracterización",
        "imagen": "assets/images/modulo_maquillaje/m7/m7.jpeg",
        "clase": "barberia-module",
        "marcaAgua": true
      }
    ],
    "imagenInversion": "assets/images/modulo_maquillaje/m8/m8.jpeg",
    "opcionalCertificado": "Certificación con aval del Ministerio de Trabajo (opcional).",
    "notasInversion": [
      "Ojo: los valores cancelados o abonados no serán reembolsables bajo ninguna circunstancia."
    ]
  },
  "micropigmentacion": {
    "imagenRespaldo": "assets/images/micropigmentacion.jpeg",
    "portada": {
      "plantilla": "professional-cover-template",
      "imagen": "assets/images/modulo_micropigmentacion/m1/m1.jpeg",
      "titulo": "MICROPIGMENTACIÓN",
      "subtitulo": "CEJAS – OJOS – LABIOS"
    },
    "paginasPrevias": [
      {
        "id": "dirigido-a",
        "titulo": "¿A QUIÉNES VA DIRIGIDA ESTA CARRERA?",
        "texto": "Esta carrera está dirigida a profesionales de la imagen personal, especialmente del maquillaje integral en el área de estética, y a quienes deseen adquirir conocimientos sobre asesoramiento y aplicación de técnicas de micropigmentación.",
        "imagen": "assets/images/modulo_micropigmentacion/m2/m2.jpeg",
        "clase": "barberia-intro",
        "marcaAgua": true
      }
    ],
    "modulos": [
      {
        "imagen": "assets/images/modulo_micropigmentacion/m3/m3.jpeg",
        "clase": "barberia-module",
        "marcaAgua": true
      },
      {
        "imagen": "assets/images/modulo_micropigmentacion/m4/m4.jpeg",
        "clase": "barberia-module page-text-left",
        "marcaAgua": true
      },
      {
        "imagen": "assets/images/modulo_micropigmentacion/m5/m5.jpeg",
        "clase": "barberia-module",
        "marcaAgua": true
      },
      {
        "imagen": "assets/images/modulo_micropigmentacion/m6/m6.jpeg",
        "clase": "barberia-module page-text-left",
        "marcaAgua": true
      },
      {
        "imagen": "assets/images/modulo_micropigmentacion/m7/m7.jpeg",
        "clase": "barberia-module",
        "marcaAgua": true
      },
      {
        "imagen": "assets/images/modulo_micropigmentacion/m8/m8.jpeg",
        "clase": "barberia-module page-text-left",
        "marcaAgua": true
      }
    ],
    "imagenInversion": "assets/images/modulo_micropigmentacion/m9/m9.jpeg",
    "opcionalCertificado": "Certificado avalado por el Ministerio de Trabajo (opcional, con costo adicional).",
    "notasInversion": [
      "Título por prácticas profesionales, previo pago del derecho de examen y con costo adicional.",
      "Contamos con instalaciones adecuadas para tu aprendizaje.",
      "Ojo: los valores cancelados o abonados no serán reembolsables bajo ninguna circunstancia."
    ]
  },
  "cosmiatria": {
    "ocultarVideoExterno": true,
    "portada": {
      "plantilla": "cosmiatria-cover-template"
    },
    "paginasPrevias": [
      {
        "id": "dirigido-a",
        "titulo": "¿A QUIÉNES VA DIRIGIDA ESTA CARRERA?",
        "texto": "ESTA CARRERA ESTÁ DIRIGIDA PRINCIPALMENTE A MUJERES QUE QUIERAN EMPRENDER EN SU PROPIO NEGOCIO: INDEPENDIENTES, EMPODERADAS Y CON EL DESEO DE CONOCER Y APRENDER LOS BENEFICIOS DE ESTA RAMA DE LA BELLEZA, PARA AYUDAR A QUE SUS CLIENTES LUZCAN UNA PIEL MÁS JOVEN Y SALUDABLE. TE INVITAMOS A RECORRER JUNTO A NOSOTROS ESTE APASIONANTE MUNDO DE LA ESTÉTICA.",
        "imagen": "assets/images/modulo_cosmiatria/m2/m2.png",
        "clase": "cosmiatria-intro",
        "marcaAgua": true
      }
    ],
    "modulos": [
      {"imagen":"assets/images/modulo_cosmiatria/m3/m3.jpeg","clase":"cosmiatria-module page-text-left","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m4/m4.jpeg","clase":"cosmiatria-module","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m5/m5.jpeg","clase":"cosmiatria-module page-text-left","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m6/m6.jpeg","clase":"cosmiatria-module","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m7/m7.jpeg","clase":"cosmiatria-module page-text-left","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m8/m8.jpeg","clase":"cosmiatria-module","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m9/m9.jpeg","clase":"cosmiatria-module page-text-left","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m10/m10.jpeg","clase":"cosmiatria-module","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m11/m11.jpg","clase":"cosmiatria-module page-text-left","marcaAgua":true},
      {"imagen":"assets/images/modulo_cosmiatria/m12/m12.jpeg","clase":"cosmiatria-module","marcaAgua":true},
      {"videoFondo":"assets/images/modulo_cosmiatria/m13/m13.mp4","clase":"cosmiatria-module page-text-left","marcaAgua":true,"permitirVideo":true},
      {"imagen":"assets/images/modulo_cosmiatria/m14/m14.jpeg","clase":"cosmiatria-module","marcaAgua":true}
    ],
    "imagenInversion": "assets/photos/cosmetologia.jpg",
    "inversionProgramas": [
      {
        "titulo": "CARRERA 6 MESES",
        "horarios": ["2 VECES POR SEMANA, INTENSIVO · 09:00 A. M. – 04:00 P. M."],
        "valores": ["MATRÍCULA: $80", "MENSUALIDAD: $190"]
      },
      {
        "titulo": "CARRERA 12 MESES",
        "horarios": ["1 VEZ POR SEMANA · 09:00 A. M. – 04:00 P. M."],
        "valores": ["MATRÍCULA: $80", "MENSUALIDAD: $150"]
      }
    ]
  },
  "tatuajes": {
    "portada": {
      "imagen": "assets/photos/tatuajes.jpg"
    }
  }
};

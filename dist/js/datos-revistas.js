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
        "texto": "SOMOS UNA INSTITUCIÓN DE CAPACITACIÓN EN EL ÁREA DE LA BELLEZA, COMPROMETIDA CON EL DESARROLLO CONSTANTE EN LA FORMACIÓN DE FUTUROS PROFESIONALES Y EMPRESARIOS; SIENDO RECONOCIDOS CON MÁS DE 4 AÑOS EN EL MERCADO, POR NUESTRA EXCELENCIA Y CALIDAD EN LOS PROCESOS DE APRENDIZAJE COMO UNA INSTITUCIÓN LÍDER EN EL AMPLIO MUNDO DE LA BELLEZA.",
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
        "segundaImagen": "assets/images/modulo_belleza/m4/m4_2.jpeg",
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
        "imagen": "assets/images/modulo_belleza/m6/m6.jpeg",
        "video": "assets/images/modulo_belleza/m6/m6_video.mp4",
        "clase": "beauty-capilares",
        "titulo": "TRATAMIENTOS CAPILARES"
      },
      {
        "imagen": "assets/images/modulo_belleza/m7/m7.jpeg",
        "video": "assets/images/modulo_belleza/m7/m7_video.mp4",
        "clase": "beauty-faciales page-text-left",
        "titulo": "TRATAMIENTOS FACIALES"
      },
      {
        "imagen": "assets/images/modulo_belleza/m8/m8.jpeg",
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
        "segundaImagen": "assets/images/modulo_belleza/m10/m10.jpeg",
        "clase": "beauty-manicure",
        "titulo": "MANICURA PEDICURA"
      },
      {
        "videoFondo": "assets/images/modulo_belleza/m11/m10_video.mp4",
        "poster": "assets/images/modulo_belleza/m11/m11.jpeg",
        "clase": "beauty-barberia page-text-left",
        "titulo": "BARBERÍA",
        "marcaAgua": true
      },
      {
        "imagen": "assets/images/modulo_belleza/m12/m12.jpeg",
        "video": "assets/images/modulo_belleza/m12/m12_video.mp4",
        "clase": "beauty-colorimetria",
        "titulo": "COLORIMETRÍA"
      }
    ],
    "imagenInversion": "assets/images/modulo_belleza/m13/m13.jpeg"
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
    "portada": {
      "imagen": "assets/images/lashista.jpeg"
    }
  },
  "barberia": {
    "portada": {
      "imagen": "assets/images/barberia.jpeg"
    }
  },
  "maquillaje": {
    "portada": {
      "imagen": "assets/images/maquillaje.jpeg"
    }
  },
  "micropigmentacion": {
    "portada": {
      "imagen": "assets/images/micropigmentacion.jpeg"
    }
  },
  "cosmiatria": {
    "portada": {
      "imagen": "assets/photos/cosmetologia.jpg"
    }
  },
  "tatuajes": {
    "portada": {
      "imagen": "assets/photos/tatuajes.jpg"
    }
  }
};

// Array para almacenar las preguntas y respuestas
var questions = [
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PARE",
    description:
      "SR-01 Indica al conductor que debe detener completamente el vehículo y sólo reanudar la marcha cuando pueda hacerlo en condiciones de seguridad",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr01_pare.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CEDA EL PASO",
    description:
      "SR-02 Indica que deberá ceder el paso a los vehículos que circulan por la vía prioritaria",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr02_ceda_el_paso.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "SIGA DE FRENTE",
    description: "SR-03 Indica la obligación de seguir de frente",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr03_siga_de_frente.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "NO PASE",
    description:
      "SR-04 Indica la prohibición de entrar en una zona restringida al tránsito",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr04_no_pase.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "GIRO SÓLAMENTE A LA IZQUIERDA o DERECHA",
    description:
      "SR-05 y SR-07 Indica al conductor que el único sentido de circulación permitido es el de un giro a la izquierda o a la derecha.",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr06_giro_derecha.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: " PROHIBIDO GIRAR A LA IZQUIERDA o DERECHA",
    description:
      "SR-06 y SR-08 Indican la prohibición de girar a la izquierda o a la derecha",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr08_prohibido_girar_derecha.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: 'PROHIBIDO GIRAR EN "U"',
    description: 'SR-10 Indican la prohibición de girar en "U”',
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr10_prohibido_girar_en_u.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "DOBLE VÍA",
    description: "SR-11 Indican la unidireccional de la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr11_doble_via.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "TRES CARRILES EN CONTRAFLUJO",
    description:
      "SR-12 y SR-13 Indican el inicio de un tramo de tres carriles de la vía sin separador central",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr13_tres_carriles_dos_contraflujo.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PROHIBIDO EL CAMBIO DE CALZADA",
    description:
      "SR-14 Indican la prohibición de cambiar la calzada por la cual transita",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr14_phohibido_cambio_calzada.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN PROHIBIDA DE VEHÍCULOS AUTOMOTORES",
    description:
      "SR-16 Indican la prohibición de circulación de toda categoría de vehículos automotores",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr16_circulacion_prohibida_automotores.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "VEHÍCULOS PESADOS A LA DERECHA",
    description:
      "SR-17 Indica que los vehículos pesados y buses que deben circular por el carril derecho",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr17_vehiculos_pesados_derecha.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN PROHIBIDA DE VEHÍCULOS DE CARGA",
    description:
      "SR-18 Indica la prohibición de circulación a vehículos de carga",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr18_prohibida_vehiculos_carga.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PEATONES A LA IZQUIERDA",
    description:
      "SR-19 Indica la obligación a los peatones de caminar del lado izquierdo de la calzada, dando el frente al tránsito que se aproxima",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr19_peatones_izquierda.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN PROHIBIDA DE PEATONES",
    description:
      "SR-20 Indica a los peatones que está prohibida su circulación sobre la calzada",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr20_circulacion_prohibida_peatones.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN PROHIBIDA DE CABALGADURAS",
    description:
      "SR-21 Indica a los jinetes que está prohibida su circulación sobre la calzada",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr21_prohibicion_cabalgaduras.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN PROHIBIDA DE BICICLETAS",
    description:
      "SR-22 Indica la prohibición de circulación de bicicletas sobre la calzada",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr22_prohibida_bicicletas.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN PROHIBIDA DE MOTOCICLETAS",
    description:
      "SR-23 Indica la prohibición de circulación de motocicletas sobre la calzada",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr23_circulacion_prohibida_motocicletas.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN PROHIBIDA DE MAQUINARIA AGRÍCOLA",
    description:
      "SR-24 Indica la prohibición de circulación de maquinaria agrícola sobre la calzada",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr24_circulacion_prohibida_maquinaria.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN PROHIBIDA DE VEHÍCULOS DE TRACCIÓN ANIMAL",
    description:
      "SR-25 Indica la prohibición de circulación de vehículos de tracción animal sobre la calzada",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr25_circulacion_prohibida_traccion_animal.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PROHIBIDO ADELANTAR",
    description: "SR-26 Indica la prohibición de adelantar otros vehículos",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr26_prohibido_adelantar.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PROHIBIDO PARQUEAR",
    description:
      "SR-28 Indica la prohibición de estacionar su vehículo en un determinado tramo de la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr28_prohibido_parquear.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "NO PARQUEAR NI DETENERSE",
    description:
      "SR-28A Indica la prohibición de parquear o estacionar con su vehículo en un determinado tramo de la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr28A_no_parquear_ni_detenerse.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PROHIBIDO PITAR",
    description:
      "SR-29 Indica la prohibición de utilizar la bocina del vehículo",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr29_prohibido_pitar.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "VELOCIDAD MÁXIMA",
    description: "SR-30 Indica la velocidad máxima a la que se puede circular",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr30_velocidad_maxima.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PESO MÁXIMO TOTAL PERMITIDO",
    description:
      "SR-31 Indica el peso máximo del vehículo de carga permitido por la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr31_peso_maximo_permitido.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "ALTURA MÁXIMA PERMITIDA",
    description:
      "SR-32 Indica la altura máxima del vehiculo permitida por la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr32_altura_maxima_permitida.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "ANCHO MÁXIMO PERMITIDO",
    description:
      "SR-33 Indica el ancho máximo del vehículo permitido por la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr33_ancho_maximo.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "ZONA DE ESTACIONAMIENTO DE TAXIS",
    description: "SR-34 Indica un estacionamiento exclusivo de taxis.",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr34_estacionamiento_taxi.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CIRCULACIÓN CON LUCES BAJAS",
    description:
      "SR-35 Indica la obligación de circular con las luces bajas del vehículo",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr35_circulacion_luces_bajas.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "RETÉN",
    description:
      "SR-36 Indica la presencia de un retén de tránsito, policía, aduana, estación de peaje, estación de pesajes etc",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr36_reten.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "CICLORRUTA",
    description:
      "SR-37 Indica un carril exclusivo para el tránsito de bicicletas",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr37_ciclorruta.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "SENTIDO ÚNICO DE CIRCULACIÓN",
    description:
      "SR-38 Indica el único sentido de circulación en la vía a la cual se va a entrar o interceptar",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr38_sentido_unico.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "SENTIDO DE CIRCULACIÓN DOBLE",
    description:
      "SR-39 Indica el doble sentido de circulación en la vía a la cual se va a entrar o interceptar",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr39_sentido_doble.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PARADERO",
    description:
      "SR-40 Indica un sitio para tránsito para el ascenso y descenso de pasajeros",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr40_paradero.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PROHIBIDO DEJAR O RECOGER PASAJEROS",
    description: "SR-41 Indica la prohibición de dejar o recoger a pasajeros",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr41_prohibido_dejar_recoger_pasajeros.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "ZONA DE CARGUE Y DESCARGUE",
    description:
      "SR-42 Indica que esta permitido el cargue y descargue de mercancías en el sitio.",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr42_zona_carga.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "PROHIBIDO EL CARGUE Y DESCARGUE",
    description:
      "SR-43 Indica la prohibición de cargar y descargar mercancías en el sitio.",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr43_prohibido_carga.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "ESPACIAMIENTO",
    description:
      "SR-44 Indica a los conductores que deben guardar una distancia mínima de seguridad para evitar colisiones",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr44_espaciamiento.png",
  },
  {
    tipo: "1. Señales reglamentarias",
    titulo: "INDICACIÓN DE SEPARADOR TRÁNSITO A LA IZQUIERDA o DERECHA",
    description: "SR-45 y SR-06",
    url: "https://practicatest.co/static/img/co/temario/senales_reglamentarias/sr46_separador_derecha.png",
  },

  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "CURVA PELIGROSA A LA IZQUIERDA o DERECHA",
    description:
      "SP-01 y SP-02 Indica la proximidad de una curva peligrosa a la izquierda o a la derecha",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp02_curva_peligrosa_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "CURVA PRONUNCIADA",
    description:
      "SP-03 y SP-04 Indica la proximidad de una curva pronunciada a la izquierda o a la derecha",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp04_curva_pronunciada_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "CURVA Y CONTRACURVA PELIGROSAS",
    description:
      "SP-05 y SP-06 Indica la proximidad de una curva peligrosa a la izquierda o a la derecha, seguidas de una contracurva",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp06_contracurva_izquierda.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "CURVAS SUCESIVAS",
    description:
      "SP-07 y SP-08 Indica la proximidad a un sector que inicia con una curva izquierda, o derecha, y sigue con curvas sucesivas",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp08_curva_sucesiva_izquierda.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "CURVA Y CONTRACURVA PRONUNCIADAS",
    description:
      "SP-09 y SP-10 Indica la proximidad a una curva pronunciada a la izquierda o a la derecha,  seguidas de una contracurva",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp10_contracurva_pronunciada_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "INTERSECCIÓN DE VÍAS",
    description: "SP-11 Indica la proximidad al cruce de dos vías",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp11_interseccion_vias.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: " VÍA LATERAL IZQUIERDA o DERECHA",
    description:
      "SP-12 y SP-13Indica la proximidad a un empalme o desvío por el lado izquierdo o derecho",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp13_via_lateral_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "BIFURCACIÓN EN “T”",
    description: "SP-14 Indica la proximiadad de una bifurcación de tipo T",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp14_bifuracion_en_t.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "BIFURCACIÓN EN “Y”",
    description: "SP-15 Indica la proximiadad de una bifurcación de tipo Y",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp15_bifucacion_en_y.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "BIFURCACIÓN IZQUIERDA o DERECHA",
    description:
      "SP-16 y SP-17 Indica la  proximidad a una bifurcación de la vía por el costado izquierdo o derecho de la misma",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp17_bifuracion_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "BIFURCACIÓN ESCALONADA",
    description:
      "SP-18 y SP-19 Indica la proximidad a dos intersecciones, a uno y otro lado de la vía siendo primero la intersección por el costado izquierdo (SP-18) o derecho (SP-19)",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp19_bifuracion_escalonada_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "GLORIETA",
    description:
      "SP-20 Indica la proximidad a una intersección de tipo rotatorio.",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp20_glorieta.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "INCORPORACIÓN DE TRÁNSITO",
    description:
      "SP-21 y SP-22 Indica de una  incorporación de tránsito por la izquierda o por la derecha de la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp22_incorporacion_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "SEMÁFORO",
    description:
      "SP-23 Indica la proximidad a una intersección regulada por semáforos",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp23_semaforo.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "SUPERFICIE RIZADA",
    description:
      "SP-24 Indica la proximidad de irregularidades sucesivas en la superficie de la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp24_superficie_rizada.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "RESALTO",
    description:
      "SP-25 Indica la proximidad a una protuberancia transversal en la superficie de la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp25_resalto.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "DEPRESIÓN",
    description:
      "SP-26 Indica la proximidad a un hundimiento brusco en la superficie de la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp26_depresion.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "DESCENSO PELIGROSO",
    description:
      "SP-27 Indica la proximidad a un sector de la vía con una pendiente fuerte de descenso",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp27_descenso_peligroso.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "REDUCCIÓN SIMÉTRICA DE LA CALZADA",
    description:
      "SP-28 Indica la proximidad a una reducción en el ancho de la calzada. Esta reducción puede ser del número de carriles o de las dimensiones de la calzada",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp28_reduccion_simetrica_via.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "PREVENCIÓN DE PARE",
    description: "SP-29 Indica la proximidad de una señal reglamentaria PARE",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp29_prevencion_de_pare.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "REDUCCIÓN ASIMÉTRICA DE LA CALZADA",
    description:
      "SP-30 y SP-31Indica la proximidad a una reducción en el ancho de la calzada con desplazamiento del eje a la izquierda o a la derecha",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp31_reduccion_asimetrica_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "ENSANCHE SIMÉTRICO DE LA CALZADA",
    description:
      "SP-32 Indica la proximidad a una ampliación o ensanche en el ancho de la calzada",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp32_ensanche_via.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "PREVENCIÓN DE CEDA EL PASO",
    description:
      "SP-33 Indica la proximidad de una señal reglamentaria CEDA el PASO",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp33_prevencion_ceda_paso.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "ENSANCHE ASIMÉTRICO DE LA CALZADA",
    description:
      "SP-34 y SP-35Indica la proximidad a un ensanche o ampliación de la calzada con desplazamiento del eje hacia la izquierda o a la derecha",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp35_ensanche_asimetrico_derecha.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "PUENTE ANGOSTO",
    description:
      "SP-36 Indica la proximidad a un puente, alcantarilla u obra de similares, con un ancho inferior.",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp36_puente_angosto.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "TÚNEL",
    description:
      "SP-37 Indica la proximidad a un túnel donde no es permitido adelantar",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp37_tunel.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "PESO MÁXIMO TOTAL PERMITIDO",
    description:
      "SP-38 Indica la proximidad a una estructura vial donde el peso máximo está indicado en la señal",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp38_peso_maximo_permitido.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "CIRCULACIÓN EN DOS SENTIDOS",
    description:
      "SP-39 Indica la proximidad de una vía con circulación en los dos sentidos",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp39_circulacion_dos_sentidos.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "FLECHA DIRECCIONAL",
    description:
      "SP-40 Indica la proximidad a un cambio repentino en la trayectoria de circulación de la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp40_flecha_direccion.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "TRES CARRILES (UNO EN CONTRAFLUJO)",
    description:
      "SP-41 Indica la proximidad a un sector de vía que posee tres carriles, de los cuales dos serán por la derecha y uno en el sentido opuesto",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp41_tres_carriles_uno_contraflujo.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "ZONA DE DERRUMBE",
    description:
      "SP-42 Indica la proximidad a un tramo de la vía en el cual es frecuente que los taludes",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp42_zona_derrumbe.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "TRES CARRILES (DOS EN CONTRAFLUJO)",
    description:
      "SP-43 Indica la proximidad a un sector de la vía que contiene tres carriles, de los cuales uno será por la derecha y los otros dos en el sentido opuesto",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp43_tres_carriles_multisentido.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "SUPERFICIE DESLIZANTE",
    description:
      "SP-44 Indica la proximidad a un tramo de la vía en el cual el material superficial está suelto o el pavimento es resbaladizo",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp44_superficie_deslizante.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "MAQUINARIA AGRÍCOLA EN LA VÍA",
    description:
      "SP-45 Indica la proximidad a un tramo de la vía utilizado frecuentemente por maquinaria agrícola",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp45_maquinaria_agricola.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "PEATONES EN LA VÍA",
    description:
      "SP-46 Indica la proximidad a lugares frecuentados por peatones que caminan sobre la calzada o la cruzan",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp46_peatones_via.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "ZONA ESCOLAR",
    description: "SP-47 Indica la proximidad a una zona de actividad escolar",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp47_zona_escolar.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "ZONA DEPORTIVA",
    description:
      "SP-48 Indica la proximidad a una zona destinada a campos de juego adyacentes a la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp48_zona_deportiva.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "ANIMALES EN LA VÍA",
    description:
      "SP-49 Indica la posibilidad de tránsito de animales sobre la vía",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp49_animales_via.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "ALTURA LIBRE",
    description:
      "SP-50 Indica la proximidad a una estructura cuyo espacio libre vertical máximo está indicado en la señal",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp50_altura_libre.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "ANCHO LIBRE",
    description:
      "SP-51 Indica la proximidad a una estructura cuyo ancho libre máximo está indicado en la señal",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp51_ancho_libre.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "CRUCE A NIVEL CON EL FERROCARRIL",
    description:
      "SP-52 Indica la proximidad a un paso a nivel con el ferrocarril, con o sin barrera",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp52_cruce_nivel_ferrocaril.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "BARRERA",
    description:
      "SP-53 Indica la proximidad a una barrera para detener el tránsito",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp53_barrera.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "PASO A NIVEL",
    description:
      "SP-54 Indica la proximidad de una o varias líneas ferroviarias",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp54_paso_a_nivel.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "INICIACIÓN DE SEPARADOR (DOS SENTIDOS)",
    description:
      "SP-55 Indica la proximidad a un tramo de vía que contiene un separador central en los dos sentidos",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp55_iniciacion_via_con_separador_dos_sentidos.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "INICIACIÓN DE VÍA CON SEPARADOR (UN SENTIDO)",
    description:
      "SP-55A Indica la proximidad a un sector de vía que contiene un separador central o isla que canaliza el tránsito en un solo sentido",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp55A_iniciacion_via_con_separador_uno_sentido.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "TERMINACIÓN DE VÍA CON SEPARADOR (DOS SENTIDOS)",
    description:
      "SP-56 Indica el final de un tramo de vía que contiene un separador central en dos sentidos",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp56_terminacion_via_con_separador.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "TERMINACIÓN DE VÍA CON SEPARADOR (UN SENTIDO)",
    description:
      "SP-56A Indica el final de un tramo de vía que contiene un separador central en un sentido",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp56A_terminacion_via_con_separador.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "FINAL DEL PAVIMENTO",
    description:
      "SP-57 Indica la terminación del tramo pavimentado y el comienzo de una vía sin pavimento",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp57_final_pavimento.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "CICLISTAS EN LA VÍA",
    description:
      "SP-59 Indica la proximidad de un tramo de vía utilizado frecuentemente por ciclistas",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp59_ciclistas_en_via.png",
  },
  {
    tipo: "2. Señales preventivas o de advertencia de peligro",
    titulo: "RIESGO DE ACCIDENTE",
    description:
      "SP-67 Indica la proximidad a un sector de vía en el cual se presentan accidentes con frecuencia",
    url: "https://practicatest.co/static/img/co/temario/senales_preventivas/sp67_riesgo_acidentes.png",
  },

  {
    tipo: "3. Señales informativas",
    titulo: "RUTA NACIONAL",
    description: "SI-01",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si01_ruta_nacional.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "RUTA DEPARTAMENTAL",
    description: "SI-01A",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si01A_ruta_departamental.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "RUTA PANAMERICANA",
    description: "SI-02",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si02_ruta_panamericana.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "RUTA MARGINAL DE LA SELVA",
    description: "SI-03",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si03_ruta_marginal_selva.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "POSTE DE REFERENCIA",
    description: "SI-04",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si04_poste_referencia.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "INFORMACIÓN PREVIA DE DESTINO",
    description: "SI-05",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si05_informacion_previa_destino.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "INFORMATIVA DE DECISIÓN DE DESTINO",
    description: "SI-05A",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si05A_informativa_decision_destino.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "CROQUIS",
    description: "SI-05B",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si05B_croquis.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "DESCRIPCIÓN DE GIROS",
    description: "SI-05C",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si05C_descripcion_giros.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "CONFIRMATIVA DE DESTINO",
    description: "SI-06",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si06_confirmativa_destino.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "SITIO DE PARQUEO",
    description: "SI-07",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si07_sitio_parqueo.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ZONAS ESPECIALES DE PARQUEO",
    description: "SI-07A",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si07A_zonas_especiales_parqueo.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "PARADERO DE BUSES",
    description: "SI-08",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si08_paradero_buses.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ESTACIONAMIENTO DE TAXIS",
    description: "SI-09",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si09_estacionamiento_taxi.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "TRANSBORDADOR",
    description: "SI-10",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si10_transbordador.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "VÍA PARA CICLISTAS",
    description: "SI-11",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si11_via_ciclistas.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "MONUMENTO NACIONAL",
    description: "SI-12",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si12_monumento.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ZONA MILITAR",
    description: "SI-13",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si13_zona_militar.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "AEROPUERTO",
    description: "SI-14",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si14_aeropuerto.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "HOSPEDAJE",
    description: "SI-15",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si15_hospedaje.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "Primeros Auxiliares",
    description: "SI-16",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si16_primeros_auxilios.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "Servicios sanitarios",
    description: "SI-17 SERVICIOS SANITARIOS",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si17_servicios_sanitarios.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "RESTAURANTE",
    description: "SI-18",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si18_restaurante.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "TELÉFONO",
    description: "SI-19",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si19_telefono.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "IGLESIA",
    description: "SI-20",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si20_iglesia.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "TALLER",
    description: "SI-21",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si21_taller.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ESTACIÓN DE SERVICIO",
    description: "SI-22",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si22_estacion_de_servicio.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "MONTALLANTAS",
    description: "SI-23",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si23_montallantas.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "CRUCE PEATONAL",
    description: "SI-24",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si24_cruce_peatonal.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "DISCAPACITADOS",
    description: "SI-25",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si25_discapacitados.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "NOMENCLATURA URBANA",
    description: "SI-26",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si26_nomenclatura_urbana.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "SEGURIDAD VIAL",
    description: "SI-27",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si27_seguridad_vial.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "GEOGRÁFICA",
    description: "SI-28",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si28_informacion_geografica.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "TRANSPORTE FERROVIARIO",
    description: "SI-29",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si29_transporte_ferroviario.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "TRANSPORTE MASIVO",
    description: "SI-30",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si30_transporte_masivo.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ZONA RECREATIVA",
    description: "SI-31",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si31_zona_recreativa.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: " CAMBIO DE MONEDA",
    description: "SI-32",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si32_cambio_moneda.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ZONA DE CAMPING",
    description: "SI-33",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si33_zona_camping.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "PLAYA",
    description: "SI-34",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si34_playa.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "MUSEO",
    description: "SI-35",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si35_museo.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "MUELLE",
    description: "SI-36",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si36_muelle.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ZOOLÓGICO",
    description: "SI-37",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si37_zoologico.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "PUNTO DE INFORMACIÓN TURÍSTICA",
    description: "SI-38",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si38_informacion_turistica.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ARTESANÍAS",
    description: "SI-39",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si39_artesanias.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "BIENES ARQUEOLÓGICOS",
    description: "SI-40",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si40_bienes_arqueologicos.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "POLIDEPORTIVO",
    description: "SI-41",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si41_lago.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "Polideportivo",
    description: "SI-42",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si42_polideportivo.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "MIRADOR",
    description: "SI-43",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si43_mirador.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ALQUILER DE AUTOS",
    description: "SI-44",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si44_alquiler_autos.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "ATRACTIVO NATURAL",
    description: "SI-45",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si45_atractivo_natural.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "VOLCÁN",
    description: "SI-46",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si46_volcan.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "NEVADO",
    description: "SI-47",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si47_nevado.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "TERMAL",
    description: "SI-48",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si48_termal.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "CASCADA",
    description: "SI-49",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si49_cascada.png",
  },
  {
    tipo: "3. Señales informativas",
    titulo: "PESCA",
    description: "SI-50",
    url: "https://practicatest.co/static/img/co/temario/senales_informativas/si50_pesca.png",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Banderillero",
    description:
      "Indica que rutas o caminos que están siendo pavimentos o arreglados",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/banderillero.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Camino delineado",
    description:
      "Indica que en el paso hay montículos de tierra u otro material",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/camino-delineado.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Equipo pesado",
    description:
      "Indica la existencia de maquinarias que trabajan en rutas y caminos",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/equipo-pesado.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Hombres trabajando",
    description: "Trabajadores situados en el camino",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/hombres-trabajando.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Trabajo en banquina",
    description: "Trabajadores situados en la banquina del camino",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/trabajos-en-banquina.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Material radioactivo",
    description: "Indican la presencia de material radioactivo",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/material-radioactivo.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Conos",
    description:
      "Utilizados generalmente para desviar el tránsito o crear zonas de exclusión",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/conos.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Delineadores",
    description: "Similares a los conos",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/delineadores.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Zonas explosivos",
    description: "Muy utilizada en zonas mineras o de excavaciones",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/zona-explosivos.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Fin de construcción",
    description:
      "declIndica el fin del trayecto en el cual se estuvo trabajando",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/fin-de-construccion.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Longitud de construcción",
    description: "Distancia que tiene un trayecto en construcción",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/longitud-construccion.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Vallas",
    description: "Utilizadas para separar espacios",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/vallas.jpg",
  },
  {
    tipo: "4. Señales transitorias",
    titulo: "Estrechamientos",
    description: "Indica que el estrechamiento del camino",
    url: "https://practicatest.co/static/img/co/temario/senales_transitorias/estrechamiento-mano-izquierda-transitorias.jpg",
  },
];

var currentQuestionIndex = 0;
var correctAnswers = 0;

function loadQuestion(index) {
  var currentQuestion = questions[index];
  document.getElementById("image").src = currentQuestion.url;
  document.getElementById("description").textContent =
    currentQuestion.description;

  var otherTitles = questions
    .filter((question, i) => i !== index)
    .map((question) => question.titulo);

  var options = [];
  options.push(currentQuestion.titulo);
  for (var i = 0; i < 3; i++) {
    var randomIndex = Math.floor(Math.random() * otherTitles.length);
    options.push(otherTitles[randomIndex]);
  }

  options = shuffle(options);
  for (var i = 0; i < options.length; i++) {
    var optionElement = document.getElementsByClassName("option")[i];
    optionElement.textContent = options[i];
    if (options[i] === currentQuestion.titulo) {
      document.getElementById("options").setAttribute("data-correct-index", i);
    }
  }
}

function checkAnswer(index) {
  var selectedOptionIndex = parseInt(index);
  var correctOptionIndex = parseInt(
    document.getElementById("options").dataset.correctIndex
  );

  if (selectedOptionIndex === correctOptionIndex) {
    correctAnswers++;
    $(".option")
      .eq(selectedOptionIndex)
      .removeClass("btn-primary")
      .addClass("btn-success");
  } else {
    $(".option")
      .eq(selectedOptionIndex)
      .removeClass("btn-primary")
      .addClass("btn-danger");
    $(".option")
      .eq(correctOptionIndex)
      .removeClass("btn-primary")
      .addClass("btn-success");
  }
  $("#next-button-container").hide();

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    $("#next-button-container").show();
  } else {
    alert("Test completado. Respuestas correctas: " + correctAnswers);
  }
}

function next() {
  $(".option").removeClass("btn-success").addClass("btn-primary");
  $(".option").removeClass("btn-danger").addClass("btn-primary");

  loadQuestion(currentQuestionIndex);
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}
shuffleQuestions();

loadQuestion(currentQuestionIndex);

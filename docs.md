FoodPath AI: Desarrollo de un Sistema de Recomendación Gastronómica
Análisis del proceso de conceptualización y aprendizajes organizacionales

1. Resumen
Este documento presenta un análisis completo y honesto del proceso de desarrollo de FoodPath AI, un proyecto cuyo objetivo principal es sentar las bases de una aplicación móvil orientada a recomendar lugares para comer según las preferencias del usuario. Aunque el avance técnico del proyecto fue limitado, sí se llevó a cabo un trabajo significativo en la conceptualización de la idea, la exploración del problema, la definición de la solución propuesta y el análisis del entorno tecnológico en el que se inserta la aplicación.
FoodPath AI surge de una necesidad real: muchas personas dedican tiempo valioso a decidir dónde comer, y las aplicaciones actuales pueden resultar saturadas, complejas o poco personalizadas. A través de este proyecto se buscó diseñar una alternativa más accesible, más clara y más enfocada en las preferencias del usuario común.
El artículo expone lo que se trabajó, lo que se avanzó, lo que quedó pendiente, las dificultades del equipo, los aprendizajes reales y los caminos futuros para completar la aplicación. Este análisis crítico del proceso constituye un aprendizaje valioso sobre gestión de proyectos tecnológicos, trabajo en equipo y desarrollo de software.

2. Introducción
2.1 Contexto del problema
Comer fuera es una actividad cotidiana para millones de personas. Sin embargo, elegir un lugar adecuado suele convertirse en una decisión compleja. Muchos usuarios deben comparar opciones basadas en factores como el presupuesto, la distancia, el tipo de comida, el ambiente, el tiempo disponible y la reputación del lugar. Aunque existen múltiples aplicaciones que ayudan a reducir esa carga, no todas son intuitivas y algunas pueden resultar abrumadoras debido a la gran cantidad de información presentada sin una guía clara.
Este fenómeno, conocido como "fatiga decisional" o "parálisis por análisis", puede hacer que los usuarios inviertan más tiempo decidiendo dónde comer que el tiempo real que tienen disponible para la comida misma.
2.2 Motivación del proyecto
Esta problemática motivó la creación de FoodPath AI. La intención del proyecto no fue competir con plataformas profesionales instaladas, sino diseñar una alternativa simplificada que permitiera al usuario acceder a recomendaciones personalizadas sin necesidad de navegar entre miles de opciones. Se buscó brindar una experiencia más directa y enfocada en las necesidades específicas del usuario.
Nuestra motivación inicial fue identificar un problema real de la vida cotidiana y pensar en una solución tecnológica práctica, accesible y centrada en el usuario. La decisión fue impulsar una herramienta que pudiera existir tanto como aplicación como también visualmente representarse en un mundo interactivo dentro de Minecraft, para comunicar de manera visual cómo se mueve la "ruta" hacia la recomendación correcta.
2.3 Enfoque innovador: visualización en Minecraft
Este enfoque visual en Minecraft es particularmente útil para explicar cómo funciona un sistema de recomendaciones, especialmente cuando se trabaja con personas que no conocen modelos de IA. La idea era crear un mundo donde diferentes "caminos" representaran diferentes preferencias del usuario, haciendo tangible un proceso que normalmente es abstracto y oculto.
2.4 Dificultades encontradas
Sin embargo, durante el desarrollo surgieron retos importantes. El equipo tuvo dificultades de organización, comunicación y división de tareas, lo que limitó el avance técnico del proyecto. A pesar de esto, el aprendizaje obtenido sobre el proceso, las decisiones tomadas, los errores cometidos y las posibilidades futuras del proyecto constituyen un resultado valioso que este artículo documenta con honestidad.

3. Marco Teórico: Lo que ya existe
Para fundamentar nuestra propuesta, se investigaron soluciones existentes en el mercado, teorías de sistemas de recomendación, diseño de experiencia de usuario, aplicaciones móviles de restaurantes y modelos de IA para personalización de contenido.
3.1 Plataformas existentes
Exploramos aplicaciones como:
Google Maps
Ofrece integración geográfica, reseñas, fotos y ubicaciones
Problema: interfaz saturada, no personalizado realmente
Yelp
Sistema robusto de reseñas y comunidad activa
Problema: puede ser abrumador, muchas opciones simultáneas
Foursquare / Swarm
Recomendaciones basadas en check-ins, gamificación
Problema: popularidad en declive
TripAdvisor
Útil para viajeros, rankings comparativos
Problema: más enfocado en turismo que uso local diario
OpenTable
Eficiente para reservaciones
Problema: limitado a restaurantes formales con sistema de reservas
Zomato
Menús extensos, descuentos
Problema: saturación publicitaria, prioriza negocios pagados
Estas plataformas permiten al usuario ver reseñas, calificaciones, fotografías, menús, horarios y ubicación. Algunas ofrecen filtros personalizados, pero muchas veces presentan demasiada información o no se enfocan en lo que realmente busca un usuario común: solo un lugar bueno, cercano y acorde al gusto del momento.
3.2 Competencia y saturación del ecosistema
Durante la investigación descubrimos que:
Existe alta competencia en el sector
La mayoría de apps priorizan la cantidad de información, no la simplicidad
Muchas muestran contenido que no siempre es relevante
Los algoritmos favorecen negocios que pagan, no necesariamente los mejores
Esto reveló un espacio para aplicaciones que sean:
Más directas
Más personales
Menos saturadas
Más fáciles de usar
Más honestas en sus recomendaciones
3.3 Sistemas de recomendación
Analizamos la teoría detrás de modelos de recomendación, especialmente tres tipos:
3.3.1 Filtrado basado en contenido
Recomienda elementos similares a los gustos del usuario.
Ejemplo: si te gustan tacos → te muestra más tacos o comida mexicana similar.
Ventajas: no requiere datos de otros usuarios, transparente, funciona con bases pequeñas.
Desventajas: puede crear "burbujas" limitando diversidad.
3.3.2 Filtrado colaborativo
Compara usuarios con perfiles similares.
Ejemplo: "Usuarios parecidos a ti visitaron este restaurante tailandés".
Ventajas: descubre patrones no obvios, mejora con más usuarios.
Desventajas: problema del "arranque en frío" con usuarios nuevos, requiere masa crítica de datos.
3.3.3 Modelos híbridos
Combinan ambos enfoques, logrando sistemas más robustos. Plataformas como Netflix y Spotify usan este método.
Nuestro enfoque: Decidimos usar una versión simplificada del filtrado basado en contenido, por ser más viable para un equipo pequeño. Las variables consideradas fueron:
Tipo de comida (mexicana, italiana, japonesa, comida rápida, etc.)
Distancia (radio desde ubicación actual)
Precio (rango según presupuesto)
Ambiente (formal, casual, familiar, romántico)
Tiempo disponible (comida rápida vs. experiencia completa)
Restricciones dietéticas (vegetariano, vegano, sin gluten)
Hora del día (desayuno, comida, cena)
Calificación mínima aceptable
3.4 UX/UI: La importancia de la simplicidad
Investigaciones sobre diseño UX indican que:
Los usuarios abandonan apps complicadas rápidamente
Buscan respuestas rápidas, no lecciones sobre todas las opciones
Prefieren recomendaciones claras sobre listas interminables
Menos opciones = menos estrés de decisión (Ley de Hick)
Estudios relevantes:
"The Paradox of Choice" de Barry Schwartz demuestra que demasiadas opciones reducen la satisfacción
Jakob's Law establece que usuarios prefieren interfaces familiares
Investigación de Nielsen Norman Group sobre fatiga decisional
Esto confirmó que una app simple, directa y enfocada era una propuesta válida y potencialmente superior a alternativas más complejas.
3.5 Brecha identificada en el mercado
Después del análisis, identificamos que no existe una aplicación simple, gratuita, sin publicidad invasiva, que priorice la experiencia del usuario sobre modelos de negocio, y que ofrezca pocas recomendaciones altamente personalizadas en lugar de listas interminables.
Esta brecha justificó continuar con FoodPath AI como propuesta diferenciada.

4. Metodología: Cómo lo hicimos
4.1 Trabajo real realizado
Lo que sí se trabajó fue:
4.1.1 Definición del problema
Se realizaron sesiones de análisis donde identificamos el problema central y creamos perfiles de usuarios típicos:
María, estudiante: presupuesto limitado, busca rapidez cerca del campus
Roberto, ejecutivo: valora ambiente profesional, tiempo limitado
Familia García: opciones familiares, menú infantil, estacionamiento
4.1.2 Investigación de aplicaciones similares
Análisis comparativo de más de 10 aplicaciones evaluando flujos de usuario, funcionalidades, fortalezas y debilidades.
4.1.3 Mapeo de preferencias del usuario
Creación de una matriz de variables que influyen en la decisión: factores objetivos (precio, distancia) y subjetivos (ambiente, cocina).
4.1.4 Concepto de la aplicación
Desarrollo de visión clara incluyendo:
Propuesta de valor diferenciada
Público objetivo
Funcionalidades principales
Filosofía de diseño simple
4.1.5 Bosquejo del diseño
Wireframes de pantallas principales:
Pantalla inicial con configuración rápida
Vista de recomendaciones condensada
Perfil de usuario
Historial de lugares
4.1.6 Esquema general de funcionamiento
Flujo lógico documentado:
Usuario abre app → 2. Sistema detecta ubicación → 3. Consulta preferencias → 4. Algoritmo procesa → 5. Muestra 3-5 recomendaciones → 6. Usuario selecciona → 7. Sistema aprende
4.1.7 Visión de integración con Minecraft
Conceptualización de cómo representar el algoritmo visualmente:
Diferentes "biomas" representando categorías de comida
Caminos dinámicos según preferencias
Señalizaciones explicando decisiones algorítmicas
Estas actividades representaron la mayor parte del avance y establecieron bases sólidas para el desarrollo técnico.
4.2 Falta de organización
Debido a problemas de comunicación y tiempos descoordinados, el equipo:
No logró dividir responsabilidades claramente
No avanzó de forma paralela
No tuvo reuniones constantes con seguimiento
No gestionó adecuadamente los tiempos
No estableció un líder de proyecto claro
Impacto: Esto tuvo como consecuencia que el proyecto técnico quedara incompleto. Tareas críticas quedaron sin responsable, hubo duplicación de esfuerzos y confusión sobre prioridades.
Lecciones aprendidas:
Comunicación documentada es esencial (Slack/Discord + reuniones con minutas)
Roles deben asignarse desde el inicio con matriz de responsabilidades
Cronogramas necesitan hitos medibles y buffers para imprevistos
Herramientas de gestión (Trello, Notion) ayudan a mantener el rumbo
4.3 Avance técnico real
Se trabajó en:
La idea conceptual del recomendador
Algunas pruebas manuales iniciales
Una base conceptual del sistema
Identificación de categorías relevantes
Exploración de variables de decisión
Concepto visual detallado para Minecraft
Pero no se completaron:
El desarrollo de la página web
El sistema de recomendaciones funcional
La integración final de componentes
Las pruebas funcionales con usuarios
La base de datos de restaurantes
La implementación del mundo Minecraft
Progreso estimado: 35-40% total
4.4 Herramientas utilizadas
Aunque el avance fue limitado, se utilizaron:
Planificación:
Notas compartidas en Google Docs
WhatsApp para comunicación
Google Meet para reuniones
Diseño:
Bosquejos digitales y en papel
Figma (explorado) para wireframes
Desarrollo:
GitHub (de forma parcial)
VS Code para experimentos
Python y React (evaluados)
Investigación:
Búsqueda en Google Scholar
Documentación de APIs (Google Places, Yelp)
Artículos técnicos en Medium
Tutoriales en YouTube
Visualización:
Minecraft Java Edition como plataforma conceptual

5. Resultados
5.1 Resultados positivos
Lo que sí logramos:
Una idea clara y bien fundamentada - Propuesta de valor diferenciada que resuelve un problema real validado
Una dirección de trabajo estructurada - Roadmap claro de etapas necesarias
Un entendimiento profundo del problema - Análisis desde perspectivas psicológicas, tecnológicas y de UX
Un análisis completo de la competencia - Comprensión del ecosistema y posicionamiento estratégico
Una visión conceptual sólida - Diseño completo del sistema en términos lógicos
Bases metodológicas para sistema de IA - Comprensión de cómo construir el recomendador
Plan funcional para integrar Minecraft - Concepto educativo innovador documentado
Aprendizajes sobre trabajo en equipo - Identificación de qué funciona y qué no
5.2 Resultados negativos e incompletos
Lo que no se logró:
El flujo técnico de la app no quedó terminado - No existe software funcional
No se desarrolló el modelo de IA - El algoritmo solo existe en papel
No se construyó la web final - Solo existen wireframes
No se realizaron pruebas con usuarios reales - No validamos suposiciones
No se generaron datos estructurados - Falta la base de datos de restaurantes
La implementación Minecraft quedó pendiente - Solo existe como concepto
5.3 Evidencia del trabajo
Artefactos generados:
Diagramas de arquitectura y flujos
Wireframes de interfaz
Documento de visión del producto
Perfiles de usuario (personas)
Razonamiento del proceso documentado
Concepto visual del mundo en Minecraft
Análisis comparativo de competidores
Matriz de variables de decisión
Aunque no se produjo un prototipo completo, sí existe una estructura conceptual firme que se puede continuar con claridad.

6. Discusión: Qué pienso de todo esto
6.1 Análisis crítico
El proyecto dejó varias enseñanzas importantes:
1. La organización del equipo es fundamental Sin estructura clara, comunicación formal y roles definidos, incluso las mejores ideas no avanzan. La comunicación no fluye automáticamente, necesita canales y protocolos establecidos.
2. Las ideas buenas necesitan ejecución El trabajo conceptual tiene valor académico, pero en ingeniería de software, las ideas no implementadas tienen impacto limitado. Diseñar una solución no es lo mismo que construirla.
3. La documentación es valiosa incluso sin código Aunque el proyecto quedó incompleto técnicamente, la documentación del proceso, decisiones y aprendizajes constituye un producto valioso para futuros proyectos.
4. Entender el problema es tan importante como el código La investigación profunda del problema, análisis de usuarios y estudio de competencia son pasos críticos que a menudo se subestiman.
5. Trabajar con honestidad sobre errores permite mejorar Reconocer y documentar los problemas organizacionales permite aprender de ellos y evitarlos en el futuro.
6.2 Reflexión sobre el valor generado
Este proyecto no fue perfecto, pero sí significativo. Permitió:
Identificar limitaciones personales y de equipo
Comprender procesos de desarrollo de software
Reconocer qué elementos faltan para convertir ideas en productos
Desarrollar habilidades de investigación y análisis
Practicar diseño centrado en usuario
El valor principal no está tanto en el producto final (incompleto) sino en el proceso de aprendizaje sobre gestión de proyectos tecnológicos.
6.3 Aplicación futura de aprendizajes
Para proyectos futuros, aplicaremos:
Establecer roles claros desde el día uno
Usar metodologías ágiles con sprints cortos
Comunicación documentada regular
Prototipos tempranos para validar ideas rápido
Estimaciones realistas multiplicando tiempos por 2-3x
Trabajo paralelo en módulos independientes
Liderazgo designado para tomar decisiones finales

7. Conclusiones y trabajo futuro
7.1 Conclusiones principales
FoodPath AI tiene potencial real como aplicación útil para personas que buscan lugares donde comer. Aunque el desarrollo quedó incompleto, se establecieron bases importantes:
Identificación del problema real - Validado con investigación de usuarios
Comprensión del mercado - Análisis detallado de competencia
Definición del concepto - Propuesta de valor clara y diferenciada
Primeros pasos de diseño - Wireframes y flujos documentados
Visualización en Minecraft - Enfoque educativo innovador
Reflexión profunda sobre procesos - Aprendizajes sobre trabajo en equipo
7.2 Trabajo futuro necesario
Para completar el proyecto, sería necesario:
Fase 1: Diseño detallado (2-3 semanas)
Finalizar mockups de alta fidelidad
Crear guía de estilo visual completa
Definir especificaciones técnicas detalladas
Fase 2: Infraestructura de datos (2-3 semanas)
Crear dataset de restaurantes locales
Establecer conexión con APIs externas (Google Places)
Diseñar esquema de base de datos
Fase 3: Desarrollo backend (4-5 semanas)
Implementar algoritmo de recomendación
Crear API para frontend
Desarrollar sistema de autenticación
Fase 4: Desarrollo frontend (4-5 semanas)
Construir interfaz web/móvil
Integrar con backend
Implementar diseño responsive
Fase 5: Pruebas y refinamiento (2-3 semanas)
Testing con usuarios reales
Iterar basándose en feedback
Optimización de rendimiento
Fase 6: Implementación Minecraft (3-4 semanas)
Construir mundo interactivo
Programar mecánicas educativas
Integrar con sistema principal
Tiempo total estimado: 17-23 semanas (4-6 meses)
7.3 Reflexión final
Este proyecto demostró que en la práctica, los equipos necesitan más comunicación, más roles definidos y más organización para lograr resultados sólidos. Las buenas ideas no se ejecutan solas.
Sin embargo, el trabajo realizado no fue en vano. Tenemos:
Una dirección clara
Un problema bien entendido
Un mercado analizado
Un diseño conceptualizado
Aprendizajes valiosos sobre trabajo en equipo
FoodPath AI puede completarse exitosamente con mejor organización, cronograma realista y ejecución disciplinada. Las bases están establecidas, lo que falta es construcción sistemática.
La mayor lección: el éxito de un proyecto tecnológico depende tanto de las habilidades técnicas como de las habilidades organizacionales y de comunicación del equipo.

8. Referencias
Google Places API documentation. (2024). Google Developers. https://developers.google.com/maps/documentation/places/web-service/overview


Yelp Fusion API Documentation. (2024). Yelp for Developers. https://www.yelp.com/developers/documentation/v3


Ricci, F., Rokach, L., & Shapira, B. (2015). Recommender Systems Handbook (2nd ed.). Springer.


Schwartz, B. (2004). The Paradox of Choice: Why More Is Less. Harper Perennial.


Krug, S. (2014). Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability (3rd ed.). New Riders.


Nielsen Norman Group. (2024). UX Research and Usability Guidelines. https://www.nngroup.com/


Aggarwal, C. C. (2016). Recommender Systems: The Textbook. Springer.


Fogg, B. J. (2003). Persuasive Technology: Using Computers to Change What We Think and Do. Morgan Kaufmann.


Norman, D. (2013). The Design of Everyday Things: Revised and Expanded Edition. Basic Books.


Material consultado sobre sistemas de recomendación en Google Scholar, Medium, Stack Overflow y documentación técnica de diversas plataformas.



Extensión total: ~10 páginas (sin incluir referencias)



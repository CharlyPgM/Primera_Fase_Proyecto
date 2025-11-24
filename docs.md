# FoodPath AI: Desarrollo de un Sistema de Recomendación Gastronómica
Análisis del proceso de conceptualización y aprendizajes organizacionales

## 1. Resumen
Este documento presenta un análisis completo y honesto del proceso de desarrollo de FoodPath AI, un proyecto cuyo objetivo principal es sentar las bases de una aplicación móvil orientada a recomendar lugares para comer según las preferencias del usuario. Aunque el avance técnico del proyecto fue limitado, sí se llevó a cabo un trabajo significativo en la conceptualización de la idea, la exploración del problema, la definición de la solución propuesta y el análisis del entorno tecnológico en el que se inserta la aplicación.
FoodPath AI surge de una necesidad real: muchas personas dedican tiempo valioso a decidir dónde comer, y las aplicaciones actuales pueden resultar saturadas, complejas o poco personalizadas. A través de este proyecto se buscó diseñar una alternativa más accesible, más clara y más enfocada en las preferencias del usuario común.
El artículo expone lo que se trabajó, lo que se avanzó, lo que quedó pendiente, las dificultades del equipo, los aprendizajes reales y los caminos futuros para completar la aplicación. Este análisis crítico del proceso constituye un aprendizaje valioso sobre gestión de proyectos tecnológicos, trabajo en equipo y desarrollo de software.

## 2. Introducción
### 2.1 Contexto del problema
Comer fuera es una actividad cotidiana para millones de personas. Sin embargo, elegir un lugar adecuado suele convertirse en una decisión compleja. Muchos usuarios deben comparar opciones basadas en factores como el presupuesto, la distancia, el tipo de comida, el ambiente, el tiempo disponible y la reputación del lugar. Aunque existen múltiples aplicaciones que ayudan a reducir esa carga, no todas son intuitivas y algunas pueden resultar abrumadoras debido a la gran cantidad de información presentada sin una guía clara.
Este fenómeno, conocido como "fatiga decisional" o "parálisis por análisis", puede hacer que los usuarios inviertan más tiempo decidiendo dónde comer que el tiempo real que tienen disponible para la comida misma.

### 2.2 Motivación del proyecto
Esta problemática motivó la creación de FoodPath AI. La intención del proyecto no fue competir con plataformas profesionales instaladas, sino diseñar una alternativa simplificada que permitiera al usuario acceder a recomendaciones personalizadas sin necesidad de navegar entre miles de opciones. Se buscó brindar una experiencia más directa y enfocada en las necesidades específicas del usuario.
Nuestra motivación inicial fue identificar un problema real de la vida cotidiana y pensar en una solución tecnológica práctica, accesible y centrada en el usuario. La decisión fue impulsar una herramienta que pudiera existir tanto como aplicación como también visualmente representarse en un mundo interactivo dentro de Minecraft, para comunicar de manera visual cómo se mueve la "ruta" hacia la recomendación correcta.

### 2.3 Enfoque innovador: visualización en Minecraft
Este enfoque visual en Minecraft es particularmente útil para explicar cómo funciona un sistema de recomendaciones, especialmente cuando se trabaja con personas que no conocen modelos de IA. La idea era crear un mundo donde diferentes "caminos" representaran diferentes preferencias del usuario, haciendo tangible un proceso que normalmente es abstracto y oculto.

### 2.4 Dificultades encontradas
Sin embargo, durante el desarrollo surgieron retos importantes. El equipo tuvo dificultades de organización, comunicación y división de tareas, lo que limitó el avance técnico del proyecto. A pesar de esto, el aprendizaje obtenido sobre el proceso, las decisiones tomadas, los errores cometidos y las posibilidades futuras del proyecto constituyen un resultado valioso que este artículo documenta con honestidad.

## 3. Marco Teórico: Lo que ya existe
Para fundamentar nuestra propuesta, se investigaron soluciones existentes en el mercado, teorías de sistemas de recomendación, diseño de experiencia de usuario, aplicaciones móviles de restaurantes y modelos de IA para personalización de contenido.

### 3.1 Plataformas existentes
Exploramos aplicaciones como:
- **Google Maps**
  - Ofrece integración geográfica, reseñas, fotos y ubicaciones  
  - Problema: interfaz saturada, no personalizado realmente
- **Yelp**
  - Sistema robusto de reseñas y comunidad activa  
  - Problema: puede ser abrumador, muchas opciones simultáneas
- **Foursquare / Swarm**
  - Recomendaciones basadas en check-ins, gamificación  
  - Problema: popularidad en declive
- **TripAdvisor**
  - Útil para viajeros, rankings comparativos  
  - Problema: más enfocado en turismo que uso local diario
- **OpenTable**
  - Eficiente para reservaciones  
  - Problema: limitado a restaurantes formales con sistema de reservas
- **Zomato**
  - Menús extensos, descuentos  
  - Problema: saturación publicitaria, prioriza negocios pagados

Estas plataformas permiten al usuario ver reseñas, calificaciones, fotografías, menús, horarios y ubicación. Algunas ofrecen filtros personalizados, pero muchas veces presentan demasiada información o no se enfocan en lo que realmente busca un usuario común: solo un lugar bueno, cercano y acorde al gusto del momento.

### 3.2 Competencia y saturación del ecosistema
Durante la investigación descubrimos que:
- Existe alta competencia en el sector
- La mayoría de apps priorizan la cantidad de información, no la simplicidad
- Muchas muestran contenido que no siempre es relevante
- Los algoritmos favorecen negocios que pagan, no necesariamente los mejores

Esto reveló un espacio para aplicaciones que sean:
- Más directas
- Más personales
- Menos saturadas
- Más fáciles de usar
- Más honestas en sus recomendaciones

### 3.3 Sistemas de recomendación
Analizamos la teoría detrás de modelos de recomendación, especialmente tres tipos:

#### 3.3.1 Filtrado basado en contenido
Recomienda elementos similares a los gustos del usuario.  
Ejemplo: si te gustan tacos → te muestra más tacos o comida mexicana similar.  
Ventajas: no requiere datos de otros usuarios, transparente, funciona con bases pequeñas.  
Desventajas: puede crear "burbujas" limitando diversidad.

#### 3.3.2 Filtrado colaborativo
Compara usuarios con perfiles similares.  
Ejemplo: "Usuarios parecidos a ti visitaron este restaurante tailandés".  
Ventajas: descubre patrones no obvios, mejora con más usuarios.  
Desventajas: problema del "arranque en frío" con usuarios nuevos, requiere masa crítica de datos.

#### 3.3.3 Modelos híbridos
Combinan ambos enfoques, logrando sistemas más robustos. Plataformas como Netflix y Spotify usan este método.

**Nuestro enfoque:** Decidimos usar una versión simplificada del filtrado basado en contenido, por ser más viable para un equipo pequeño. Las variables consideradas fueron:
- Tipo de comida (mexicana, italiana, japonesa, comida rápida, etc.)
- Distancia (radio desde ubicación actual)
- Precio (rango según presupuesto)
- Ambiente (formal, casual, familiar, romántico)
- Tiempo disponible (comida rápida vs. experiencia completa)
- Restricciones dietéticas (vegetariano, vegano, sin gluten)
- Hora del día (desayuno, comida, cena)
- Calificación mínima aceptable

### 3.4 UX/UI: La importancia de la simplicidad
Investigaciones sobre diseño UX indican que:
- Los usuarios abandonan apps complicadas rápidamente
- Buscan respuestas rápidas, no lecciones sobre todas las opciones
- Prefieren recomendaciones claras sobre listas interminables
- Menos opciones = menos estrés de decisión (Ley de Hick)

Estudios relevantes:
- *"The Paradox of Choice"* — Barry Schwartz  
- Jakob's Law — usuarios prefieren interfaces familiares  
- Nielsen Norman Group — estudios de fatiga decisional  

### 3.5 Brecha identificada en el mercado
Después del análisis, identificamos que **no existe una aplicación simple, gratuita, sin publicidad invasiva, que priorice la experiencia del usuario** y que ofrezca pocas recomendaciones altamente personalizadas.

---

## 4. Metodología: Cómo lo hicimos

### 4.1 Trabajo real realizado
#### 4.1.1 Definición del problema
Perfiles creados:
- María — estudiante, poco presupuesto
- Roberto — ejecutivo, busca ambiente profesional
- Familia García — buscan comodidad y menú infantil

#### 4.1.2 Investigación de aplicaciones similares
Se evaluaron flujos de usuario, funcionalidades, debilidades.

#### 4.1.3 Mapeo de preferencias del usuario
Matriz de factores: precio, distancia, ambiente, cocina…

#### 4.1.4 Concepto de la aplicación
Incluye propuesta de valor, público objetivo, funcionalidades.

#### 4.1.5 Bosquejo del diseño
Wireframes:
- Configuración inicial
- Recomendaciones
- Perfil
- Historial

#### 4.1.6 Esquema general de funcionamiento
```
1. Usuario abre app  
2. Sistema detecta ubicación  
3. Consulta preferencias  
4. Algoritmo procesa  
5. Muestra recomendaciones  
6. Usuario selecciona  
7. Sistema aprende  
```

#### 4.1.7 Integración con Minecraft
Concepto:
- Biomas = categorías de comida
- Caminos = preferencias
- Señales = decisiones del algoritmo

### 4.2 Falta de organización
Problemas:
- No se dividieron responsabilidades
- No hubo reuniones regulares
- No hubo líder de proyecto
- No hubo seguimiento

Lecciones:
- Comunicación formal  
- Roles definidos  
- Métodos ágiles  
- Herramientas de gestión  

### 4.3 Avance técnico real
Se realizó:
- Concepto del recomendador
- Pruebas manuales
- Identificación de variables
- Concepto visual Minecraft

No se realizó:
- Web funcional
- Sistema de IA
- Base de datos
- Mundo Minecraft completo

Progreso estimado: **35–40%**

### 4.4 Herramientas utilizadas
- Google Docs  
- WhatsApp  
- Google Meet  
- Figma  
- GitHub  
- VS Code  
- Python / React  
- Google Scholar  
- Minecraft  

---

## 5. Resultados
### 5.1 Resultados positivos
- Idea clara y fundamentada  
- Roadmap estructurado  
- Análisis profundo del problema  
- Análisis de competencia  
- Diseño conceptual sólido  
- Bases metodológicas para IA  
- Concepto Minecraft  
- Aprendizajes sobre trabajo en equipo  

### 5.2 Resultados negativos
- No hay app funcional  
- No hay IA implementada  
- No hay base de datos  
- No hay pruebas con usuarios  
- Minecraft no implementado  

### 5.3 Evidencia creada
- Diagramas  
- Wireframes  
- Documento de visión  
- Personas  
- Matriz de decisión  
- Concepto Minecraft  
- Análisis comparativo  

---

## 6. Discusión
### 6.1 Análisis crítico
Conclusiones:
1. Organización es esencial  
2. Las ideas necesitan ejecución  
3. La documentación es valiosa  
4. Entender el problema es crucial  
5. La honestidad permite mejorar  

### 6.2 Valor generado
Permite:
- Identificar limitaciones  
- Comprender procesos  
- Reconocer faltantes  
- Desarrollar habilidades  
- Practicar UX  

### 6.3 Aplicación futura
Implementar:
- Roles claros  
- Sprints ágiles  
- Comunicación documentada  
- Prototipos tempranos  
- Estimaciones realistas  
- Trabajo modular  
- Liderazgo claro  

---

## 7. Conclusiones y trabajo futuro
### 7.1 Conclusiones
FoodPath AI tiene potencial y cuenta con:
- Problema validado  
- Mercado comprendido  
- Concepto definido  
- Diseño documentado  
- Visualización innovadora  
- Aprendizajes organizacionales  

### 7.2 Trabajo futuro
**Fase 1**: Diseño detallado (2–3 semanas)  
**Fase 2**: Infraestructura de datos (2–3 semanas)  
**Fase 3**: Backend + recomendador (4–5 semanas)  
**Fase 4**: Frontend (4–5 semanas)  
**Fase 5**: Pruebas (2–3 semanas)  
**Fase 6**: Minecraft (3–4 semanas)  

Tiempo total: **17–23 semanas (4–6 meses)**

### 7.3 Reflexión final
El éxito de proyectos tecnológicos depende tanto de habilidades técnicas como organizacionales. FoodPath AI puede completarse con mejor organización y disciplina.

---

## 8. Referencias
Google Places API documentation. (2024).  
Yelp Fusion API Documentation. (2024).  
Ricci, F., Rokach, L., & Shapira, B. (2015). *Recommender Systems Handbook*.  
Schwartz, B. (2004). *The Paradox of Choice*.  
Krug, S. (2014). *Don't Make Me Think*.  
Nielsen Norman Group. (2024).  
Aggarwal, C. C. (2016). *Recommender Systems: The Textbook*.  
Fogg, B. J. (2003). *Persuasive Technology*.  
Norman, D. (2013). *The Design of Everyday Things*.  

Material adicional consultado en Google Scholar, Medium, Stack Overflow y documentación técnica.  

Extensión total: ~10 páginas.

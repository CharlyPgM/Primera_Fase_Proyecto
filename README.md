# Nexo
## Autores

- Ana Laura Flores Barcenas
- Carlos Perez Garcia
- Christian Jesus Pacheco Robles
- Keylie Gonzales Soberanis
---

# LINK DRIVE [Haz clic aquí para abrir el enlace](https://drive.google.com/drive/folders/1ilXEsTRQAQpdtpobILkYu3rhf5t9ZAXk?usp=sharing)

---

# 📘 FoodPath AI  
## Documentación Técnica y Metodológica  
### Entregable 1 – Proyecto NEXO

---

##  Tabla de Contenidos
1. [Contexto y Motivación](#1-contexto-y-motivación)  
2. [Antecedentes e Investigación](#2-antecedentes-e-investigación)  
3. [Propuesta y Objetivos](#3-propuesta-y-objetivos)  
4. [Metodología](#4-metodología)  
5. [Proceso de Desarrollo](#5-proceso-de-desarrollo)  
6. [Resultados y Análisis](#6-resultados-y-análisis)  
7. [Reflexión Crítica](#7-reflexión-crítica)  

---

## 1. Contexto y Motivación

### ¿Por qué este proyecto?
FoodPath AI nace para combatir la **Paradoja de la Elección** en aplicaciones gastronómicas modernas (Google Maps, Yelp, etc.).  
El exceso de opciones genera **parálisis**, **frustración** y **pérdida de tiempo**.

El proyecto propone un **sistema de recomendación híbrido** que entregue sugerencias rápidas, relevantes y visualmente atractivas.

### Problema / Necesidad / Curiosidad

#### **Problema**
Los sistemas actuales ofrecen recomendaciones saturadas, poco personalizadas y con demasiada información irrelevante.

#### **Necesidad**
Un sistema híbrido que combine:
- **Filtros de contenido:** precio, distancia, categoría.
- **Filtros colaborativos:** ambiente, tendencias, patrones de usuarios.

#### **Curiosidad Creativa**
¿Cómo representar visualmente la lógica del algoritmo?  
**Solución:** mediante una **arquitectura de decisiones representada en Minecraft**.

---

## 2. Antecedentes e Investigación

### Sistemas de Recomendación (SR)
La investigación se centró en SR híbridos, basados en autores como:
- Ricci, Rokach y Shapira (2015)
- Aggarwal (2016)

Conclusión: los SR híbridos aumentan **precisión**, **diversidad** y **contextualización**.

### Tecnologías de Datos y Mapeo
- **Google Places API**  
- **Yelp Fusion API**

Ambas sirven como bases para crear datasets iniciales.

### Comparación con Tecnologías Existentes

| Plataforma | Fortalezas | Debilidades |
|-----------|------------|-------------|
| **Yelp** | Comunidad activa y muchas reseñas | Saturación de datos poco estructurados |
| **Google Maps** | Excelente geolocalización | Recomendaciones genéricas |

### Propuesta de Valor de FoodPath AI
1. **Filtros colaborativos específicos (clustering por ambiente).**  
2. **Visualización inmersiva en Minecraft** como metáfora del flujo algorítmico.  
3. **Interfaz simple, decisiones claras.**

---

## 3. Propuesta y Objetivos

### Propuesta Central
Desarrollar el diseño conceptual, arquitectónico y de prototipo de datos para un **sistema de recomendación gastronómica**, validado mediante una **interfaz inmersiva en Minecraft** que simula las rutas de decisión del algoritmo.

### Objetivos Específicos (Entregable 1)

| Eje | Objetivo | Competencia NEXO |
|-----|----------|------------------|
| **IA & Datos** | Definir variables y arquitectura del algoritmo | IA + Ciencia de Datos |
| **Metodología** | Uso de Git/GitHub para dataset y scripts | Versionado & Colaboración |
| **Portafolio** | Crear documentación técnica (este archivo) | Documentación profesional |
| **Mundo Virtual** | Construcción de representación 3D en Minecraft | Integración de mundos virtuales |

---

## 4. Metodología

Enfoque basado en **Diseño por Datos**, control de versiones y estructura NEXO.

### Herramientas y Plataformas

| Rol | Herramienta | Uso |
|-----|-------------|-----|
| Control de versiones | Git / GitHub | Dataset, scripts, documentación |
| Narrativa / Proceso | Notion | Bitácora, decisiones, roadmap |
| Archivos pesados | Drive / Cloud | Dataset crudo, capturas de Minecraft |
| Conceptualización | Minecraft | Interfaz visual del sistema |

### Fases de Desarrollo

#### **Semana 1 – Exploración**
- Definición de concepto y equipo.  
- Revisión de APIs y papers.  
- Creación del repositorio GitHub.  

#### **Semana 2 – Desarrollo**
- Diseño del modelo entidad-relación (MER).  
- Desarrollo de scripts ETL.  
- Inicio de construcción en Minecraft.  

#### **Semana 3 – Refinamiento**
- Finalización del dataset.  
- Simulación del algoritmo.  
- Tour y pulido de Minecraft.  
- Redacción de entregables.

---

## 5. Proceso de Desarrollo

### Iteraciones Clave

#### **Iteración 1: Modelo de Datos**
- Se abandonó el enfoque basado únicamente en reseñas textuales.
- Se adoptó un modelo híbrido:  
  - **numéricas:** precio, distancia  
  - **categóricas:** ambiente, categoría

#### **Iteración 2: Arquitectura GitHub**
Ramas creadas:
- `rama/etl-data-script`
- `rama/backend-conceptual-design`

Permitiendo trabajo en paralelo sin conflictos.

#### **Iteración 3: Minecraft**
- Se descartó interacción con NPC.  
- Se adoptó un enfoque **visual y estático** del resultado del algoritmo.  

### Problemas y Decisiones

| Problema | Decisión |
|----------|----------|
| Web scraping complejo | Reducir alcance y usar datos simulados |
| Inconsistencia de colaboración | Uso estricto de Issues, Notion y commits trazables |

---

## 6. Resultados y Análisis

### ¿Qué se logró?

#### **1. Diseño del Sistema de Recomendación Híbrido**
Variables definidas:
- Precio normalizado  
- Distancia  
- Categoría  
- Tono de reseña  

#### **2. Dataset Prototipo**
Archivo: `foodpath_dataset_v0.1.csv`  
Listo para modelos kNN o clustering.

#### **3. Integración Minecraft**
Mapa con 3 rutas:

- **Camino A:** Restaurante Económico  
- **Camino B:** Restaurante Trendy  
- **Camino C:** Restaurante Étnico  

Visualización confirma que la **representación 3D reduce el ruido cognitivo**.

### Análisis General
- La metodología NEXO funcionó para controlar la versión del proyecto.  
- La representación visual ayudó a estructurar la lógica del algoritmo de manera simple y comprensible.

---

## 7. Reflexión Crítica

### Aprendizajes

- La IA/datos requieren **roles claros**, cronogramas y comunicación desde el inicio.  
- La **simplicidad para el usuario** requiere **complejidad técnica en backend**.  
- Git fue clave para mantener orden y trazabilidad.

### ¿Qué haríamos diferente?

- Reduciríamos el alcance inicial.  
- Usaríamos herramientas IA más sistemáticamente para documentación.  

### Próximos Pasos

1. Implementar algoritmo **kNN** para filtrado inicial.  
2. Desarrollar **frontend móvil** (React Native o Flutter).  
3. Extender Minecraft con **lógica de redstone** para rutas dinámicas.  

---

##  Autoría
Proyecto creado como parte del **Programa NEXO**.

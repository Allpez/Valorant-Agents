# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



### Taller: Creación de una App de Agentes de Valorant con React

1. **Consumir la API de agentes de Valorant:**
   - Usa `fetch` para obtener los datos de la API de Valorant y muestra todos los agentes en la interfaz.
   https://valorant-api.com/v1/agents?isPlarayable=true
2. **Filtro por texto y por rol:**
   - Implementa un campo de búsqueda por texto que permita filtrar los agentes por su nombre.
   - Añade un filtro por rol que permita ver solo los agentes de un rol específico.
Nota. Los filtros deben trabajar en conjunto.
3. **Agregar agentes al equipo:**
   - Crea una funcionalidad que permita agregar agentes a un equipo con un límite máximo de 5 agentes. Debes mostrar un mensaje al usuario cuando este limite se ha alcanzado. 
4. **Modal para ver los agentes del equipo:**
   - Implementa un modal que muestre los agentes seleccionados para el equipo.
5. **Mensajes:**
   - Muestra un mensaje de "No se encontraron agentes que coincidan con la búsqueda" si los filtros no devuelven ningún resultado.
   - Muestra un mensaje de "Cargando..." mientras se espera la respuesta de la API.
### **Bonus:**
6. **Paginación:**
   - Implementa un sistema de paginación que muestre un máximo de 6 agentes por página. Debe coexistir con las funcionalidades anteriores.

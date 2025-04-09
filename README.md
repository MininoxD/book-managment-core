# CMPC Books

CMPC Books es una aplicación diseñada para la gestión de libros, autores, editoriales y géneros. Está construida utilizando una arquitectura hexagonal para garantizar la separación de responsabilidades y facilitar la escalabilidad y el mantenimiento del proyecto.

---

## Tecnologías utilizadas

- **Node.js**: Versión 20, para ejecutar el backend.
- **NestJS**: Framework para construir aplicaciones escalables y modulares en Node.js.
- **PostgreSQL**: Base de datos relacional para almacenar la información.
- **Sequelize**: ORM para interactuar con la base de datos PostgreSQL.
- **Zod**: Biblioteca para validación de esquemas.
- **Swagger**: Para la documentación de la API.
- **Docker**: Para contenerizar la aplicación y la base de datos.
- **JWT (JSON Web Tokens)**: Para la autenticación y autorización.
- **TypeScript**: Lenguaje principal del proyecto.

---

## Arquitectura hexagonal

La arquitectura hexagonal, también conocida como **Ports and Adapters**, organiza el código en capas para separar las responsabilidades y facilitar el mantenimiento. En este proyecto, las capas principales son:

1. **Dominio**:

   - Contiene las entidades principales del negocio, como `Book`, `Author`, etc.
   - Define las reglas de negocio y las interfaces de los repositorios.

2. **Aplicación**:

   - Contiene los casos de uso (por ejemplo, `BookCreator`, `BookSearch`, etc.).
   - Implementa la lógica de aplicación que interactúa con el dominio.

3. **Infraestructura**:

   - Contiene las implementaciones de los repositorios (por ejemplo, `BookRepositorySequelize`).
   - Maneja la interacción con la base de datos y otros servicios externos.

4. **Entradas y salidas**:
   - **Entradas**: Controladores que exponen la API REST (por ejemplo, `BookController`).
   - **Salidas**: Adaptadores para interactuar con la base de datos o servicios externos.

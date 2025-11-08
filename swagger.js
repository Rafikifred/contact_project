const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API documentation for the Contacts Project (W02 Assignment)',
    },
    servers: [
    
      {
        url: 'http://contact-project-1.onrender.com',  // Replace with your Render URL
        description: 'Production server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Look for Swagger comments inside all route files
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('Swagger docs available at /api-docs');
}

module.exports = setupSwagger;

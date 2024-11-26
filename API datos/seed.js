const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Modelos
const AccionComunal = require('./models/AccionComunal');
const Juventud = require('./models/juventud');
const Infancia = require('./models/Infancia');
const Envejecimiento = require('./models/Envejecimiento');

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar:', err));

// Datos a insertar
const datosAccionComunal = [
    {
        lineaEstrategica: "Fortalecimiento y participación comunal",
        meta: "Alcanzar un 40% de OAC con planes de desarrollo comunal y comunitario  formulados durante la vigencia de la política",
        valorEsperado: 40,
        valorAlcanzado: 15
    },
    {
        lineaEstrategica: "Desarrollo económico y sostenibilidad de los OAC",
        meta: "Consolidar económica y financieramente 200 empresas o emprendimientos comunales durante el periodo de la política",
        valorEsperado: 200,
        valorAlcanzado: 80
    },

    {
        lineaEstrategica: "Fortalecimiento institucional y gestión del conocimiento",
        meta: "Formalizar el 100% de OAC  inactivos en 37 municipios del Valle del Cauca durante la vigencia de la política",
        valorEsperado: 78,
        valorAlcanzado: 68.3
    },

    {
        lineaEstrategica: "Construcción de paz y convivencia",
        meta: "Disminuir en 50% los conflictos  que resultan en eventos fatales contra dignatarios de OAC",
        valorEsperado: 78,
        valorAlcanzado: 68.3
    }
];


const datosJuventud = [
    {
        lineaEstrategica: "Promoción de la inserción laboral y productiva efectiva de los y las jóvenes en el Departamento del Valle del Cauca",
        meta: "Beneficiar a 700 jovenes en la insercion laboral y productiva del Valle del Cauca durante el periodo de implementacion de politica.",
        valorEsperado: 70,
        valorAlcanzado: 69
    },
    {
        lineaEstrategica: "Fortalecimiento de la educación integral para los y las jóvenes en el Departamento del Valle del Cauca",
        meta: "Aumentar a 50 el número de estudiantes de Instituciones Educativas Oficiales en los municipios no certificados obteniendo la doble titulación en el Departamento durante el período de la política",
        valorEsperado: 5,
        valorAlcanzado: 2
    },

    {
        lineaEstrategica: "Promoción de la participación juvenil en actividades deportivas, recreativas, artísticas o culturales en el Departamento del Valle del Cauca",
        meta: "Beneficiar 310 jóvenes con la la oferta cultural y artística institucional en el departamento del Valle del Cauca, durante el período de la política",
        valorEsperado: 31,
        valorAlcanzado: 25
    },

    {
        lineaEstrategica: "Mejoramiento del goce efectivo de los derechos en salud mental y fisica  para los jóvenes del Departamento del Valle del Cauca",
        meta: "Disminuir a 25 la tasa de fecundidad específica por cada 1.000 mujeres adolescentes de 15 a 19 años en el departamento del Valle del Cauca, durante el período de la política",
        valorEsperado: 25,
        valorAlcanzado: 35.62
    },

    {
        lineaEstrategica: "Brindar  entornos seguros y en paz para los jóvenes en el Departamento del Valle del Cauca. ",
        meta: "Implementar 1 estrategia de convivencia para generar entornos seguros en el Departamento del Valle del Cauca, durante el periodo de implementación de la política",
        valorEsperado: 1,
        valorAlcanzado: 0.21
    },

    {
        lineaEstrategica: "Fortalecimiento Institucional para el desarrollo integral y la participación ciudadana de los jóvenes en el Departamento del Valle del Cauca.",
        meta: "Mantener un Sistema  Departamental de Juventudes de acuerdo al marco normativo anualmente",
        valorEsperado: 1,
        valorAlcanzado: 0.60
    }
];

const datosInfancia = [
    {
        lineaEstrategica: "Fortalecimiento institucional",
        meta: "Realizar 12 proyectos de fondo de ciencia, tecnología e innovación del Sistema General de Regalías técnicamente en el Valle del Cauca, durante el periodo de la política pública.",
        valorEsperado: 1,
        valorAlcanzado: 0.24
    },

    {
        lineaEstrategica: "2. Calidad y pertinencia de las atenciones",
        meta: "Dotar 100 sedes educativas rurales promoviendo la seguridad alimentaria, en el Valle del Cauca, en el cuatrienio durante el periodo de la política pública.",
        valorEsperado: 25,
        valorAlcanzado: 13
    },

    {
        lineaEstrategica: "Participacion, movilizacion social y ciudadania",
        meta: "Implementar en 50 instituciones educativas oficiales de municipios no certificados, proyectos ambientales escolares - PRAE - en el Valle del Cauca, durante cada cuatrenio",
        valorEsperado: 5,
        valorAlcanzado: 3
    },

    {
        lineaEstrategica: "Seguimiento, evaluacion y gestion del conocimiento",
        meta: "Realizar 1 documento de lineamientos técnicos de seguimiento a la implementación de la política pública del Valle del Cauca, durante el periodo de implementación de la política",
        valorEsperado: 1,
        valorAlcanzado: 0.5
    }
];

const datosEnvejecimiento = [
    {
        lineaEstrategica: "Superación de la dependencia económica de las personas mayores",
        meta: "Mantener 1 Valor igual o mayor a cero de la diferencia entre porcentajes anuales de incidencia de pobreza monetaria extrema en personas mayores en el Valle del Cauca, durante la vigencia de la política pública",
        valorEsperado: 1,
        valorAlcanzado: 2
    }
];

// Función para poblar la base de datos
const poblarDB = async () => {
    try {
        await AccionComunal.insertMany(datosAccionComunal);
        console.log('Datos de Acción Comunal insertados');

        await Juventud.insertMany(datosJuventud);
        console.log('Datos de Juventud insertados');

        await Infancia.insertMany(datosInfancia);
        console.log('Datos de Infancia insertados');

        await Envejecimiento.insertMany(datosEnvejecimiento);
        console.log('Datos de Envejecimiento insertados');

        mongoose.connection.close();
    } catch (err) {
        console.error('Error al poblar la base de datos:', err);
    }
};

poblarDB();

const mongoose = require('mongoose');
const WasteCategory = require('./src/models/WasteCategory');
const Tip = require('./src/models/Tip');

mongoose.connect('mongodb+srv://duvanyepezfa:PtcAsWPLBDyAPgUC@cluster0.xpraoza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const categories = [
    {
        name: 'Orgánico',
        description: 'Residuos biodegradables',
        color: '#8BC34A',
        icon: 'compost',
        tips: ['Compostar en casa', 'Separar restos de comida'],
        examples: ['Cáscaras de frutas', 'Restos de verduras']
    },
    {
        name: 'Plástico',
        description: 'Envases y productos plásticos',
        color: '#2196F3',
        icon: 'bottle',
        tips: ['Lavar antes de reciclar', 'Reducir uso de plástico'],
        examples: ['Botellas PET', 'Bolsas plásticas']
    },
    {
        name: 'Papel y Cartón',
        description: 'Papeles y empaques',
        color: '#FFC107',
        icon: 'paper',
        tips: ['Mantener seco', 'Aplanar cajas'],
        examples: ['Periódicos', 'Cajas de cartón']
    }
];

const tips = [
    {
        title: 'Usa bolsas reutilizables',
        content: 'Lleva siempre bolsas de tela al supermercado',
        category: 'Plástico'
    },
    {
        title: 'Composta en casa',
        content: 'Los residuos orgánicos pueden convertirse en abono',
        category: 'Orgánico'
    }
];

async function seed() {
    await WasteCategory.insertMany(categories);
    await Tip.insertMany(tips);
    console.log('Datos iniciales creados');
    process.exit();
}

seed();
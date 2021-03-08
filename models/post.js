import mongoose from 'mongoose';

const MODEL_NAME = "Post";
const postSchema = new mongoose.Schema(
    {
        title: { type: String, min: [10, 'Título precisa ter no mínimo 10 caracteres'], required: [true, 'Título obrigatório'] },
        description: { type: String, min: [100, 'Descrição precisa ter no mínimo 100 caracteres'], required: [true, 'Descrição obrigatória'] },
        price: { type: Number, required: [true, 'Preço obrigatório'] },
        iptu: { type: Number, default: 0 },
        condo: { type: Number, default: 0 },
        bedroom: { type: Number, required: [true, 'Quantidade de quartos obrigatório'] },
        bathroom: { type: Number, required: [true, 'Quantidade de banheiros obrigatório'] },
        garage: { type: Number, default: 0 },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    },
    {
        timestamps: true,
    }
);


export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, postSchema, 'posts');
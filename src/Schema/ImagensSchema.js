export default class ImagensSchema {
    static schema = {
        name: 'Imagens',
        properties: {
            path: 'string',
            comentario: { type: 'string', default: "" },
        }
    }
}
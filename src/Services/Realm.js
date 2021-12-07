import Realm from 'realm';
import ImagensSchema from '../schemas/ImagensSchema';

export default function getRealm() {
    return Realm.open({

        schema: [ImagensSchema],
        schemaVersion: 1
    });
}
import DoDActorBaseData from "./actor-base.js";

export default class DoDCharacterBaseData extends DoDActorBaseData {
    static defineSchema() {
        const { fields } = foundry.data;
        return this.mergeSchema(super.defineSchema(), {
            kin: new fields.StringField({ required: true, initial: "" }),
            age: new fields.StringField({ required: true, initial: "" }),
            profession: new fields.StringField({ required: true, initial: "" }),
            motivation: new fields.StringField({ required: true, initial: "" }),
            willPoints: new fields.SchemaField({
                value: new fields.NumberField({ required: true, initial: 10 }),
                max: new fields.NumberField({ required: true, initial: 10 })
            }),
            damageBonus: new fields.SchemaField({
                agl: new fields.SchemaField({
                    base: new fields.StringField({ required: true, initial: "" }),
                    value: new fields.StringField({ required: true, initial: "" })
                }),
                str: new fields.SchemaField({
                    base: new fields.StringField({ required: true, initial: "" }),
                    value: new fields.StringField({ required: true, initial: "" })
                }),
            }),
        });
    };

    static migrateData(source) {

        if (typeof source.damageBonus?.str === "string") {
            const damageBonus = source.damageBonus.str;
            source.damageBonus.str = {base: String(damageBonus), value: String(damageBonus)};
        }
        if (typeof source.damageBonus?.agl === "string") {
            const damageBonus = source.damageBonus.agl;
            source.damageBonus.agl = {base: String(damageBonus), value: String(damageBonus)};
        }

        return super.migrateData(source);
    }
}
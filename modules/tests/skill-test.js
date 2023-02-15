import DoD_Utility from "../utility.js";
import DoDTest from "./dod-test.js";


export default class DoDSkillTest extends DoDTest  {

    constructor(actor, skill) {
        super();
        this.data.actor = actor;
        this.data.skill = skill;
        this.data.attribute = skill.system.attribute;
    }
   
    formatRollMessage(roll) {
        let target = this.data.skill.system.value;
        let result = this.formatRollResult(roll, target);

        let label = game.i18n.format(game.i18n.localize("DoD.roll.skillRoll"), {skill: this.data.skill.name, result: result});
        return {
            user: game.user.id,
            speaker: ChatMessage.getSpeaker({ actor: this.data.actor }),
            flavor: label
        };
    }

    async getRollOptions() {

        let label = game.i18n.localize("DoD.ui.dialog.skillRollLabel");
        let title = game.i18n.localize("DoD.ui.dialog.skillRollTitle") + ": " + this.data.skill.name;

        return this.getRollOptionsFromDialog(title, label);
    }
}
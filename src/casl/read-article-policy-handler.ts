import { Article } from "src/articles/entities/article.entity";
import { Action } from "./action.enum";
import { AppAbility } from "./casl-ability.factory";
import { IPolicyHandler } from './policy-handler.interface'

export class ReadArticlePolicyHandler implements IPolicyHandler {
    handle(ability: AppAbility) {
        return ability.can(Action.Read, Article);
    }
}

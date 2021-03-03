import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from '@casl/ability'
import { Injectable } from '@nestjs/common';
import { Article } from 'src/articles/entities/article.entity';
import { Writer } from 'src/writers/entities/writer.entity';
import { Action } from './action.enum';

type Subjects = InferSubjects<typeof Article | typeof Writer> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    createForWriter(writer: Writer) {
        const { can, cannot, build } = new AbilityBuilder<
            Ability<[Action, Subjects]>
        >(Ability as AbilityClass<AppAbility>);

        if (writer.isAdmin) {
            can(Action.Manage, 'all'); // read-write access to everything
        } else {
            can(Action.Read, 'all'); // read-only access to everything
        }

        can(Action.Update, Article, { writerId: writer.id });
        cannot(Action.Delete, Article, { isPublished: true });

        return build({
            detectSubjectType: item => item.constructor as ExtractSubjectType<Subjects>
        });
    }
}

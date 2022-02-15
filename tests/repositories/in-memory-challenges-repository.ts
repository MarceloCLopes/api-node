import { ChallengesRepository } from "../../src/application/repositories/ChallengesRepository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {
  public item: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.item.find((challenge) => challenge.id === id);

    if (!challenge) {
      return null;
    }

    return challenge;
  }
}

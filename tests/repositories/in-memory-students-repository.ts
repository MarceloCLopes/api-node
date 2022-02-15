import { StudentsRepository } from "../../src/application/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student";

export class InMemoryStudentsRepository implements StudentsRepository {
  public item: Student[] = [];

  async findById(id: string): Promise<Student | null> {
    const student = this.item.find((student) => student.id === id);

    if (!student) {
      return null;
    }

    return student;
  }
}

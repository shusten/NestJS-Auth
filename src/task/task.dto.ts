export class TaskDto {
  id: string;
  title: string;
  description: string;
  status: string;
  expirationDate: string;
}

export interface FindAllParemeters {
  title: string;
  status: string;
}
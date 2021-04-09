//A diferencia del DTO, este es para usar internamente en el codigo

export interface Task {
    id?: number
    name: string;
    description: string;
    done: boolean;
}
//Estos dto, DATA TRASNFER OBJECT es donde van los datos que se transfieren entre las aplicaciones

export class CreateTaskDto {
    name: string;
    description: string;
    done: boolean;
}

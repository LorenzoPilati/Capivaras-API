import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "capivaras"})
export class Capivara {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({nullable: false})
    name: string;

    @Column()
    age: number;

    @Column()
    health_status: string;

    @Column()
    weigth: number;

    @Column()
    habitat: string;

    @Column()
    behavior: string;

    @Column()
    diet: string;

    @Column()
    note: string;
}

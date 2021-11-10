import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'cps'})
export class CP extends Model<CP>{
    @Column({
        type: DataType.INTEGER, 
        unique: true, 
        autoIncrement: true, primaryKey:true
    })
    uuid: number;
    
    @Column({
        type: DataType.TEXT,
    }) 
    title: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    }) 
    isApproved: boolean;

    @Column({
        type: DataType.INTEGER,
        defaultValue: null,
    }) 
    forceTutorId: number;

    @Column({
        type: DataType.TIME,
        defaultValue: null,
    }) 
    completedAt: Date;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null,
    }) 
    hasCommercialPotential: boolean;

    
}
import { Expose } from "class-transformer";

class PatternDTO {
    @Expose()
    id!: number;

    @Expose()
    active!: boolean;

    @Expose()
    created!: Date;

    @Expose()
    updated!: Date;
}

export default PatternDTO;

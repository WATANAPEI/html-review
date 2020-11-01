import { generateUUIDv4 } from  "../util/UuidGen";

export class Article {
    readonly id: string;

    constructor(
        readonly headerText: string,
        readonly paragraphText: string
    ) {
        this.id = generateUUIDv4();
    }
}
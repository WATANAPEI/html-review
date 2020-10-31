export class Article {
    private _sectionText: string;
    private _paragraphText: string;

    constructor(sectionText: string, paragraphText: string) {
        this._sectionText = sectionText;
        this._paragraphText = paragraphText;
    }
}
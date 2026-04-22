/**
 * @typedef {Object} SourceProps
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [url]
 * @property {string} [category]
 * @property {string} [language]
 * @property {string} [country]
 */

/**
 * Domain entity representing a news provider.
 *
 * @remarks
 * This model belongs to the domain layer and should stay independent from
 * transport details such as API response wrappers.
 *
 * @property {string} id - The unique identifier of the source.
 * @property {string} name - The name of the source.
 * @property {string} description - A description of the source.
 * @property {string} url - The URL of the source.
 * @property {string} category - The category of the source.
 * @property {string} language - The language of the source.
 * @property {string} country - The country of the source.
 * @property {string} urlToLogo - The URL to the source's logo.
 */
export class Source {
    /**
     * @param {SourceProps} [props]
     */
    constructor({id = "", name = "", description = "", url = "", category = "", language = "", country = ""}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.category = category;
        this.language = language;
        this.country = country;
        this.urlToLogo = "";
    }
}
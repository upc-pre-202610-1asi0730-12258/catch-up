import {Source} from "./source.entity.js";

/**
 * @typedef {Object} ArticleProps
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [url]
 * @property {string} [urlToImage]
 * @property {import('./source.entity.js').SourceProps | Source | null} [source]
 * @property {string|Date} [publishedAt]
 */

/**
 * Domain entity representing a news article.
 *
 * @property {string} title - The title of the article.
 * @property {string} description - A brief description of the article.
 * @property {string} url - The URL to the full article.
 * @property {string} urlToImage - The URL to the article's image.
 * @property {Source | null} source - The source of the article.
 * @property {Date} publishedAt - The publication date of the article.
 */
export class Article {
    /**
     * @param {ArticleProps} [props]
     */
    constructor({title = '', description = '', url = '', urlToImage = '', source = null, publishedAt = ''}) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source) : null;
        this.publishedAt = new Date(publishedAt);
    }

    /**
     * Formats publication date for display purposes.
     *
     * @returns {string}
     */
    getFormatedPublishedAt() {
        return this.publishedAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
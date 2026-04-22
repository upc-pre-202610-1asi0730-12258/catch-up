const logoApiUrl = import.meta.env.VITE_LOGO_API_URL;
const apiKey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY;

/**
 * Infrastructure adapter for LogoDev API to retrieve logo URLs.
 *
 * @remarks
 * This class provides a simple interface to generate logo URLs for domains
 * using the LogoDev service.
 */
export class LogoDevApi {
    /**
     * Generates a URL to retrieve the logo for a given domain.
     *
     * @param {string} domain - The domain URL for which to get the logo.
     * @returns {string} The full URL to the logo image.
     */
    getUrlToLogo(domain) {
        return `${logoApiUrl}/${new URL(domain).host}?token=${apiKey}`;
    }
}
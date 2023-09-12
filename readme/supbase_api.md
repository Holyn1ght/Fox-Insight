Supbase API Documentation
=========================

The `supbase_api.js` file provides a set of API functions to interact with the Supabase database. Below is the documentation for the functions provided by this module.

Initialization
--------------

This module initializes a Supabase client using the following URL and API key:

javascriptCopy code

`const supabase = createClient(   "https://vjrptbgareuvxwwaxddd.supabase.co",   "YOUR_API_KEY" );`

_Note: For security reasons, always keep your API keys secret._

Functions
---------

### `fetchArticles()`

Fetches all the articles from the `articles` table.

*   **Returns**:
    *   Success: `{ data: Array, error: null }`
    *   Error: `{ data: null, error: String }`

### `fetchArticleById(articleId)`

Fetches a specific article by its ID.

*   **Parameters**:
    *   `articleId`: ID of the desired article.
*   **Returns**:
    *   Success: `{ data: Object, error: null }`
    *   Error: `{ data: null, error: String }`

### `addArticle(articleData)`

Adds a new article to the `articles` table.

*   **Parameters**:
    *   `articleData`: Object with the article details including `title`, `description`, `body`.
*   **Note**: This function also associates the article with the current user's ID and metadata.

### `updateArticle(articleData)`

Updates an existing article in the `articles` table based on the article's ID.

*   **Parameters**:
    *   `articleData`: Object with the updated article details and the `articleId`.
*   **Returns**:
    *   Success: `{ data: Array, error: null }`

### `deleteArticle(articleId)`

Deletes an article by its ID.

*   **Parameters**:
    *   `articleId`: ID of the article to be deleted.

### `getUserInfo()`

Fetches the current authenticated user's information.

*   **Returns**: User data object.

### `isUserAdmin()`

Checks if the current user has admin claims.

*   **Returns**: Boolean indicating whether the user has admin claims or not.

### `get_claims(uid)`

Fetches all claims for a specific user.

*   **Parameters**:
    *   `uid`: User's ID.
*   **Returns**: `{ data: Object, error: String }`

### `get_claim(uid, claim)`

Fetches a specific claim for a user.

*   **Parameters**:
    *   `uid`: User's ID.
    *   `claim`: Desired claim's name.
*   **Returns**: `{ data: Object, error: String }`

### `set_claim(uid, claim, value)`

Sets a specific claim for a user.

*   **Parameters**:
    *   `uid`: User's ID.
    *   `claim`: Name of the claim to set.
    *   `value`: Value of the claim.
*   **Returns**: `{ data: Object, error: String }`

### `delete_claim(uid, claim)`

Deletes a specific claim for a user.

*   **Parameters**:
    *   `uid`: User's ID.
    *   `claim`: Name of the claim to delete.
*   **Returns**: `{ data: Object, error: String }`

Exported Objects
----------------

*   **`client`**: The initialized Supabase client object.
*   **Default Export**: An object that bundles all the functions mentioned above.

* * *

For any further questions or clarifications, please refer to the official Supabase documentation or the source code of the `supbase_api.js` module.
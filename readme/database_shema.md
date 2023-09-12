# Supabase Database Schema Documentation

This document provides a brief description of the tables and their relationships within the Supabase database. We will focus primarily on the `public.articles` table and its relationship with the automatically generated `auth.users` table.

## Tables

### `public.articles`

A table containing information about various articles.

- **Fields**:

  - `id` (UUID, Primary Key): Unique identifier for each article.
  - `title` (text): Title of the article.
  - `description` (text): Short description or summary of the article.
  - `body` (text): Main content of the article.
  - `date` (timestamp with time zone): The date and time when the article was created. It defaults to the current timestamp.
  - `author_id` (UUID, Foreign Key): Identifier for the author of the article. This links to the `auth.users` table.
  - `author_data` (jsonb): JSON object containing metadata about the article's author.

- **Constraints**:
  - `articles_pkey`: Primary key constraint on the `id` field.
  - `articles_author_id_fkey`: Foreign key constraint linking `author_id` to the `auth.users` table. If a user is deleted, their articles will also be deleted (`ON DELETE CASCADE`).

### `auth.users`

`auth.users` is the core automatically generated table in the system responsible for user authentication and management. Not only does it handle typical user data such as email addresses and timestamps, but it also enables the powerful and fine-grained access control functionality using roles and claims.

- **Fields**:

  - `id` (UUID, Primary Key): Unique identifier for each user.
  - `email` (character varying): User's email address.
  - `role` (character varying): Role assigned to the user, for instance, "admin", "user", etc.
  - `raw_user_meta_data` (jsonb): Raw metadata linked with the user.
  - `raw_app_meta_data` (jsonb): Houses diverse claims about the user.
  - `created_at` (timestamp with time zone): Time marker indicating the user's creation date.
  - `updated_at` (timestamp with time zone): Time marker indicating the last modification to the user's data.

- **Constraints**:

  - `users_pkey`: Core primary key constraint acting on the `id` field.

- **Indexes**:

  - `users_instance_id_idx`: Index streamlined for the `instance_id` field to expedite lookups.
  - `users_instance_id_email_idx`: Dual-field index acting on both the `instance_id` and the lowercase iteration of the `email` fields.

- **User Roles and Claims**:

User roles and claims grant the system the ability for nuanced access control.

- **Functions**:

  - **is_claims_admin()**: Evaluates if a user possesses the admin claim.
  - **get_my_claims()**: Acquires the claims of the user currently logged in.
  - **get_my_claim(claim: TEXT)**: Retrieves a specified claim of the user currently signed in.
  - **get_claims(uid: UUID)**: Acquires the claims for a particular user. (Admin exclusive).
  - **get_claim(uid: UUID, claim: TEXT)**: Retrieves a specific claim for a given user (Admin exclusive).
  - **set_claim(uid: UUID, claim: TEXT, value: JSONB)**: Defines a specific claim for a user (Admin exclusive).
  - **delete_claim(uid: UUID, claim: TEXT)**: Eliminates a specific claim for a user (Admin exclusive).

- **Role Checks**:

  The `is_claims_admin()` function determines if the session user is authenticated and if they've been endowed with the `claims_admin` role set to true. Additional functions utilize this verification to assure only administrators can retrieve, establish, or eradicate claims for other users.

  **Note**: The above functions are molded using `plpgsql` and intertwine directly with the database to carry out CRUD operations on user claims.

_Note: While the `auth.users` table is a product of Supabase automation, we're only shedding light on those fields that are integral to the relation with the `public.articles` table and the provided `supbase_api.js` file._

## Relationships

1. **Articles to Users**: An article (`public.articles`) is associated with a user (`auth.users`) through the `author_id` field in the articles table. This establishes a many-to-one relationship where a user can author multiple articles, but each article is written by one user.

---

For a detailed description of all fields in the `auth.users` table or any other Supabase auto-generated tables, refer to the official Supabase documentation.

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://vjrptbgareuvxwwaxddd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnB0YmdhcmV1dnh3d2F4ZGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ2OTcsImV4cCI6MjAwOTY1MDY5N30.K6cOB3o0gF_hmsEFz7u-GCoJOs5NjjTx5RkaXKImFQ0",
);

// Fetch all articles
async function fetchArticles() {
  try {
    const { data, error } = await supabase.from("articles").select("*");
    if (error) throw new Error(error.message);
    return { data, error: null };
  } catch (error) {
    console.error("Error while fetching articles:", error.message);
    return { data: null, error: error.message };
  }
}

// Fetch a single article by its ID
async function fetchArticleById(articleId) {
  try {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("id", articleId);
    if (error) throw new Error(error.message);
    return { data, error: null };
  } catch (error) {
    console.error("Error while fetching article:", articleId, error.message);
    return { data: null, error: error.message };
  }
}

// Add a new article to the database
const addArticle = async (articleData) => {
  try {
    const userData = await getUserInfo();
    const { error } = await supabase
      .from("articles")
      .insert([
        {
          title: articleData.title,
          description: articleData.description,
          body: articleData.body,
          author_id: userData.id,
          author_data: userData.user_metadata,
        },
      ])
      .select();
    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("Error while adding article:", error.message);
  }
};

// Update an existing article
const updateArticle = async (articleData) => {
  try {
    const { data, error } = await supabase
      .from("articles")
      .update([
        {
          title: articleData.title,
          description: articleData.description,
          body: articleData.body,
        },
      ])
      .eq("id", articleData.articleId)
      .select();
    if (error) throw new Error(error.message);
    return { data, error: null };
  } catch (error) {
    console.error("Error while updating article:", error.message);
  }
};

// Delete an article by its ID
const deleteArticle = async (articleId) => {
  try {
    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", articleId);
    if (error) throw new Error(error.message);
    console.log("Article deleted:", articleId);
  } catch (error) {
    console.error("Error while deleting article:", error.message);
  }
};

// Fetch current authenticated user's info
const getUserInfo = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

// Check if the user has admin rights
const isUserAdmin = async () => {
  const { data, error } = await supabase.rpc("is_claims_admin");
  if (error) throw error;
  return data;
};

// Fetch all claims for a given user ID
const get_claims = async (uid) => {
  try {
    const { data, error } = await supabase.rpc("get_claims", { uid });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(
      `Error while fetching claims for user ${uid}:`,
      error.message,
    );
    return { data: null, error: error.message };
  }
};

// Fetch a specific claim for a given user ID
const get_claim = async (uid, claim) => {
  try {
    const { data, error } = await supabase.rpc("get_claim", { uid, claim });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(
      `Error while fetching claim ${claim} for user ${uid}:`,
      error.message,
    );
    return { data: null, error: error.message };
  }
};

// Set a specific claim's value for a given user ID
const set_claim = async (uid, claim, value) => {
  try {
    const { data, error } = await supabase.rpc("set_claim", {
      uid,
      claim,
      value,
    });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(
      `Error while setting claim ${claim} for user ${uid}:`,
      error.message,
    );
    return { data: null, error: error.message };
  }
};

// Delete a specific claim for a given user ID
const delete_claim = async (uid, claim) => {
  try {
    const { data, error } = await supabase.rpc("delete_claim", { uid, claim });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(
      `Error while deleting claim ${claim} for user ${uid}:`,
      error.message,
    );
    return { data: null, error: error.message };
  }
};

const client = supabase;
export default {
  fetchArticles,
  fetchArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
  getUserInfo,
  isUserAdmin,
  get_claims,
  get_claim,
  set_claim,
  delete_claim,
  client,
};

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://vjrptbgareuvxwwaxddd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcnB0YmdhcmV1dnh3d2F4ZGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ2OTcsImV4cCI6MjAwOTY1MDY5N30.K6cOB3o0gF_hmsEFz7u-GCoJOs5NjjTx5RkaXKImFQ0",
);

async function fetchArticles() {
  try {
    const { data, error } = await supabase.from("articles").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    console.error("Error while fetching articles:", error.message);
    return {
      data: null,
      error: error.message,
    };
  }
}

async function fetchArticleById(articleId) {
  try {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("id", articleId);

    if (error) {
      throw new Error(error.message);
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    console.error("Error while fetching article:", articleId, error.message);
    return {
      data: null,
      error: error.message,
    };
  }
}

const addArticle = async (articleData) => {
  try {
    const userData = await getUserInfo();
    const { data, error } = await supabase
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

const deleteArticle = async (articleId) => {
  try {
    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", articleId);

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("Error while deleting article");
  }
};

const getUserInfo = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

const get_claims = async (uid) => {
  const { data, error } = await supabase.rpc("get_claims", { uid });
  return { data, error };
};

const get_claim = async (uid, claim) => {
  const { data, error } = await supabase.rpc("get_claim", { uid, claim });
  return { data, error };
};

const set_claim = async (uid, claim, value) => {
  const { data, error } = await supabase.rpc("set_claim", {
    uid,
    claim,
    value,
  });
  return { data, error };
};

const delete_claim = async (uid, claim) => {
  const { data, error } = await supabase.rpc("delete_claim", { uid, claim });
  return { data, error };
};

export default {
  fetchArticles,
  fetchArticleById,
  addArticle,
  deleteArticle,
  getUserInfo,
  get_claims,
  get_claim,
  set_claim,
  delete_claim,
};

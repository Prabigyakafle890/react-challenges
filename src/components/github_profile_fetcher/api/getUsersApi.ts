export interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
}

export const getUser = async (username: string): Promise<GithubUser> =>{
  const res = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (!res.ok) {
    throw new Error("User not found");
  }

  return res.json();
}
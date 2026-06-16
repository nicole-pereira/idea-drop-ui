export type Idea = {
  _id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  createdAt: string;
  user: string;
};

export type NewIdea = {
  title: string;
  summary: string;
  description: string;
  tags: string[];
};

export type User = {
  id?: string;
  email: string;
  name?: string;
  password?: string;
};

export type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  user: User | null;
  setUser: (user: AuthContextType["user"]) => void;
};

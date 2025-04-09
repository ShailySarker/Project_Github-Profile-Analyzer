export type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
  };
  
  export type Commit = {
    commit: {
      author: {
        date: string;
      };
    };
  };
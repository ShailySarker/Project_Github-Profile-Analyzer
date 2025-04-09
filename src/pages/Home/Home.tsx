import { Commit, Repo } from "@/types/github";
import { useState } from "react";
import { UsernameInput } from "./Components/UsernameInput";
import { RepoList } from "./Components/RepoList";
import { CommitsChart } from "./Components/CommitsChart";

const groupCommitsByDay = (commits: Commit[]) => {
    const counts: Record<string, number> = {};
    commits.forEach((c) => {
        const date = new Date(c.commit.author.date).toISOString().split("T")[0];
        counts[date] = (counts[date] || 0) + 1;
    });
    return Object.entries(counts).map(([date, count]) => ({ date, count }));
};

const Home = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [commitsPerDay, setCommitsPerDay] = useState<{ date: string; count: number }[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchRepos = async (username: string) => {
        setLoading(true);
        try {
            const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
            const repoData: Repo[] = await repoRes.json();
            setRepos(repoData);

            // Fetch commits from all repos in parallel
            const commitData: Commit[] = [];
            const commitPromises = repoData.map((repo) =>
                fetch(`https://api.github.com/repos/${username}/${repo?.name}/commits?per_page=100`).then(
                    (res) => res.json()
                )
            );
            const commitsArray = await Promise.all(commitPromises);
            commitsArray.flat().forEach((c: Commit) => {
                if (c?.commit?.author?.date) commitData.push(c);
            });

            const grouped = groupCommitsByDay(commitData);
            setCommitsPerDay(grouped);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-3xl mx-auto min-h-screen">
            <UsernameInput onSearch={fetchRepos} />
            {loading ? <p>Loading...</p> : <RepoList repos={repos} />}
            {commitsPerDay?.length > 0 && <CommitsChart commitsPerDay={commitsPerDay} />}
        </div>
    );
};

export default Home;
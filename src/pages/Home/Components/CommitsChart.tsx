import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface Props {
    commitsPerDay: { date: string; count: number }[];
}

export const CommitsChart = ({ commitsPerDay }: Props) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Commits in Last 30 Days</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={commitsPerDay}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
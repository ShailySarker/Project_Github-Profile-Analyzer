import { Repo } from "@/types/github";
 
 type Props = {
     repos: Repo[];
   };
   
   export const RepoList = ({ repos }: Props) => {
     return (
       <div className="space-y-2">
         {repos?.map((repo) => (
           <div key={repo?.id} className="border p-3 rounded-xl shadow-sm">
             <a
               href={repo?.html_url}
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-600 font-medium"
             >
               {repo?.name}
             </a>
             <p className="text-sm text-gray-600">{repo?.description}</p>
           </div>
         ))}
       </div>
     );
   };
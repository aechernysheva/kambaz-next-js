import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AddPathParameters from "./add/[a]/[b]/page";

export default function PathParameters() {
 return (
   <div id="wd-path-parameters">
     <h2>Path Parameters</h2>
     <Link href="/Labs/Lab3/add/1/2">1 + 2</Link> <br />
     <Link href="/Labs/Lab3/add/3/4">3 + 4</Link> <hr />
   </div>
);}

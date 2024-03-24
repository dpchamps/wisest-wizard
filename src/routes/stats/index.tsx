import {component$, useTask$} from "@builder.io/qwik";
import {Link} from "~/components/Link";
import {NextPuzzleTimer} from "~/components/NextPuzzleTimer";
import {StatsTable} from "~/components/StatsTable";


export default component$(() => {
    return (
        <div class={''}>
            <h1 class={"text-3xl my-6"}>🔬 Stats</h1>
            <Link href={'/'}>
                Back to the wizard 🧙🏾
            </Link>
            <StatsTable/>
            <NextPuzzleTimer/>
        </div>
    )
})
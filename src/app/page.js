import Image from "next/image";
import axios from "axios";

export default async function Home() {
    const data = await axios.get('http://localhost:3000/api/home'); // Adjust for your environment

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl font-bold text-center">Welcome to the AI Playground</h1>
            <div>
                {data.data.message}
            </div>
        </div>
    );
}

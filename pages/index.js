import Head from "next/head";
import CodeEditor from "../components/CodeEditor";
import CodeOutput from "../components/CodeOutput";
import SwitchButton from "../components/SwitchButton";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>CSS/SCSS Direction Converter</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>CSS/SCSS Direction Converter</h1>

                <SwitchButton />

                <div className={styles.grid}>
                    <CodeEditor />
                    <CodeOutput />
                </div>
            </main>
        </div>
    );
}

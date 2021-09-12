import { AllAnalyses } from "../components/AllAnalyses";
import { Header } from "../components/Header/Header";
import { MostRecentVideo } from "../components/MostRecentVideo";

export const Home: React.FC = () => {

    return (
        <main>
            <h2 style={{ textAlign: "center" }}>New to the Channel? Start Here!</h2>
            <AllAnalyses />
        </main>
    );
}
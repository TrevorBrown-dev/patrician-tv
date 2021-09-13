import { AllAnalyses } from '../components/AllAnalyses';

export const Home: React.FC = () => {
    return (
        <main>
            <h2 className='call-to-action'>New to the Channel? Start Here!</h2>
            <AllAnalyses />
        </main>
    );
};
